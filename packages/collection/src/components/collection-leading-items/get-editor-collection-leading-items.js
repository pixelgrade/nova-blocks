const FLOW_LAYOUTS = [ 'masonry', 'classic' ];

const sanitizeHTMLClass = value => String( value )
  .replace( /%[a-fA-F0-9][a-fA-F0-9]/g, '' )
  .replace( /[^A-Za-z0-9_-]/g, '' );

export const getEditorCollectionLeadingItems = ( items, attributes = {} ) => {
  const layoutStyle = attributes.layoutStyle || '';

  if ( ! FLOW_LAYOUTS.includes( layoutStyle ) || ! Array.isArray( items ) ) {
    return [];
  }

  const collectionClasses = typeof attributes.className === 'string'
    ? attributes.className.trim().split( /\s+/ ).map( sanitizeHTMLClass ).filter( Boolean )
    : [];
  const seenIds = new Set();

  return items.reduce( ( normalizedItems, item ) => {
    if ( ! item || typeof item !== 'object' || typeof item.id !== 'string' || typeof item.markup !== 'string' || ! item.markup ) {
      return normalizedItems;
    }

    const id = sanitizeHTMLClass( item.id );
    const role = typeof item.role === 'string' ? sanitizeHTMLClass( item.role ) : id;

    if ( ! id || ! role || seenIds.has( id ) ) {
      return normalizedItems;
    }

    const supportedLayouts = Array.isArray( item.supportedLayouts )
      ? item.supportedLayouts
      : FLOW_LAYOUTS;

    if ( ! supportedLayouts.includes( layoutStyle ) ) {
      return normalizedItems;
    }

    let requiredCollectionClassName = '';
    if ( Object.prototype.hasOwnProperty.call( item, 'requiredCollectionClassName' ) ) {
      if ( typeof item.requiredCollectionClassName !== 'string' ) {
        return normalizedItems;
      }

      requiredCollectionClassName = sanitizeHTMLClass( item.requiredCollectionClassName );
      if ( ! requiredCollectionClassName || ! collectionClasses.includes( requiredCollectionClassName ) ) {
        return normalizedItems;
      }
    }

    const className = typeof item.className === 'string'
      ? item.className.trim().split( /\s+/ ).map( sanitizeHTMLClass ).filter( Boolean ).join( ' ' )
      : '';

    seenIds.add( id );

    if ( item.editorPreview === false ) {
      return normalizedItems;
    }

    normalizedItems.push( {
      ...item,
      id,
      role,
      className,
      supportedLayouts,
      requiredCollectionClassName,
    } );

    return normalizedItems;
  }, [] );
};
