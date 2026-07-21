import { useSelect } from '@wordpress/data';
import { RawHTML } from '@wordpress/element';

import { getEditorCollectionLeadingItems } from './get-editor-collection-leading-items';

export { getEditorCollectionLeadingItems } from './get-editor-collection-leading-items';

export const useEditorCollectionLeadingItems = ( attributes ) => {
  const settings = useSelect( select => select( 'novablocks' ).getSettings(), [] );

  return getEditorCollectionLeadingItems( settings?.collectionLeadingItems, attributes );
};

const CollectionLeadingItems = ( { attributes } ) => {
  const items = useEditorCollectionLeadingItems( attributes );

  return items.map( item => {
    const className = [
      'nb-collection__layout-item',
      'nb-collection__layout-item--leading',
      item.className,
    ].filter( Boolean ).join( ' ' );

    return (
      <div
        className={ className }
        data-nb-collection-item-role={ item.role }
        data-nb-collection-item-id={ item.id }
        key={ item.id }>
        <RawHTML>{ item.markup }</RawHTML>
      </div>
    );
  } );
};

export default CollectionLeadingItems;
