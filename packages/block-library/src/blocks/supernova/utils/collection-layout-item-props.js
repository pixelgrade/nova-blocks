import classnames from 'classnames';
import { __experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles } from '@wordpress/block-editor';

const LAYOUT_ITEM_CLASSNAME = 'nb-collection__layout-item';

const hasBorder = attributes => {
  const border = attributes?.style?.border;

  return !! attributes?.borderColor || ( !! border && typeof border === 'object' && Object.keys( border ).length > 0 );
};

/**
 * Props for a card's item slot, `.nb-collection__layout-item`, carrying the
 * card's core border — or, for query-driven cards, the collection's (#631).
 * Mirrors novablocks_get_collection_layout_item_open_tag() on the frontend:
 * colour, style and width per side, no radius; no border keeps the plain slot.
 *
 * @param {Object} attributes Card or collection attributes.
 * @return {Object} `className` and, with a border, `style`.
 */
export const getCollectionLayoutItemProps = ( attributes ) => {
  if ( ! hasBorder( attributes ) || typeof getBorderClassesAndStyles !== 'function' ) {
    return { className: LAYOUT_ITEM_CLASSNAME };
  }

  const { radius, ...border } = attributes.style?.border || {};
  const { className, style } = getBorderClassesAndStyles( {
    borderColor: attributes.borderColor,
    style: { border },
  } );
  const props = { className: classnames( LAYOUT_ITEM_CLASSNAME, className ) };

  if ( style && Object.keys( style ).length ) {
    props.style = style;
  }

  return props;
};

export default getCollectionLayoutItemProps;
