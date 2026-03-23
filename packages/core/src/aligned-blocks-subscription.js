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

const shouldRealignForMutations = ( mutations = [] ) => {
  return Array.from( mutations ).some( mutation => {
    if ( mutation.type === 'childList' ) {
      return hasElementNodeMutation( mutation.addedNodes ) || hasElementNodeMutation( mutation.removedNodes );
    }

    if ( mutation.type === 'attributes' && mutation.attributeName === 'class' ) {
      return hasRelevantClassChange( mutation );
    }

    if ( mutation.type === 'attributes' && mutation.attributeName === 'style' ) {
      return isElementNode( mutation.target ) && tokenizeClasses( mutation.target.className ).some( className => {
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
