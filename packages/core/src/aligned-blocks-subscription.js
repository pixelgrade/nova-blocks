const RELEVANT_CLASS_NAMES = new Set( [
  'alignfull',
  'alignwide',
  'alignleft',
  'alignright',
  'nb-sidecar',
  'nb-sidecar-area--content',
  'nb-supernova',
  'nb-sidecar--sidebar-left',
  'nb-sidecar--sidebar-right',
  'nb-sidecar--sticky-sidebar',
  'nb-sidecar--sidebar-ready',
] );

const INTERNAL_BREAK_ALIGN_CLASS_NAMES = new Set( [
  'break-align-left',
  'break-align-right',
] );

const tokenizeClasses = ( value = '' ) => {
  return String( value )
    .split( /\s+/ )
    .map( entry => entry.trim() )
    .filter( Boolean );
};

const isElementNode = ( node ) => {
  return !! node && node.nodeType === 1;
};

const hasRelevantClassChange = ( mutation ) => {
  if ( ! isElementNode( mutation.target ) ) {
    return false;
  }

  const previousClasses = tokenizeClasses( mutation.oldValue );
  const nextClasses = tokenizeClasses( mutation.target.className );
  const previousSet = new Set( previousClasses );
  const nextSet = new Set( nextClasses );
  const changedClasses = new Set();

  previousClasses.forEach( className => {
    if ( ! nextSet.has( className ) ) {
      changedClasses.add( className );
    }
  } );

  nextClasses.forEach( className => {
    if ( ! previousSet.has( className ) ) {
      changedClasses.add( className );
    }
  } );

  return Array.from( changedClasses ).some( className => {
    if ( INTERNAL_BREAK_ALIGN_CLASS_NAMES.has( className ) ) {
      return false;
    }

    return RELEVANT_CLASS_NAMES.has( className );
  } );
};

const hasElementNodeMutation = ( nodes = [] ) => {
  return Array.from( nodes ).some( isElementNode );
};

const MEASUREMENT_OWNED_STYLE_PROPERTIES = new Set( [ 'grid-row-end' ] );

// Normalizes a style attribute string with the measurement-owned properties
// stripped, so two snapshots can be compared for "did anything ELSE change".
const stripMeasurementOwnedStyles = ( styleText = '' ) => {
  return String( styleText || '' )
    .split( ';' )
    .map( declaration => declaration.trim() )
    .filter( Boolean )
    .filter( declaration => {
      const property = declaration.split( ':' )[ 0 ].trim().toLowerCase();
      return ! MEASUREMENT_OWNED_STYLE_PROPERTIES.has( property );
    } )
    .join( ';' );
};

const isMeasurementOwnedStyleChange = ( mutation ) => {
  const target = mutation.target;
  const nextStyle = typeof target.getAttribute === 'function' ? target.getAttribute( 'style' ) : null;

  return stripMeasurementOwnedStyles( mutation.oldValue ) === stripMeasurementOwnedStyles( nextStyle );
};

const shouldRealignForMutations = ( mutations = [] ) => {
  return Array.from( mutations ).some( mutation => {
    if ( mutation.type === 'childList' ) {
      return hasElementNodeMutation( mutation.addedNodes ) || hasElementNodeMutation( mutation.removedNodes );
    }

    if ( mutation.type === 'attributes' && mutation.attributeName === 'class' ) {
      return hasRelevantClassChange( mutation );
    }

    if ( mutation.type === 'attributes' && mutation.attributeName === 'style' ) {
      if ( ! isElementNode( mutation.target ) ) {
        return false;
      }

      // The measurement engine writes honest pull-out row spans as inline
      // grid-row-end (Task 3.4). A style mutation whose only difference is
      // that property is our own bookkeeping — reacting to it would loop.
      if ( isMeasurementOwnedStyleChange( mutation ) ) {
        return false;
      }

      return tokenizeClasses( mutation.target.className ).some( className => {
        return RELEVANT_CLASS_NAMES.has( className );
      } );
    }

    return false;
  } );
};

const observeAlignedBlockMutations = ( { MutationObserverClass, target, onChange } ) => {
  if ( ! MutationObserverClass || ! target || typeof onChange !== 'function' ) {
    return () => {};
  }

  const observer = new MutationObserverClass( mutations => {
    if ( shouldRealignForMutations( mutations ) ) {
      onChange();
    }
  } );

  observer.observe( target, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: [ 'class', 'style' ],
    attributeOldValue: true,
  } );

  return () => {
    observer.disconnect();
  };
};

module.exports = {
  observeAlignedBlockMutations,
  shouldRealignForMutations,
};
