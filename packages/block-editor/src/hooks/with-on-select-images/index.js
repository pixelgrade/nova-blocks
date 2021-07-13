import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from '@wordpress/compose';

import normalizeImages from "../../components/normalize-images/index";

export const withOnSelectImages = createHigherOrderComponent( WrappedComponent => {

  return ( props ) => {
    const { setAttributes } = props;

    return (
      <WrappedComponent { ...props } onSelectImages={ ( images ) => {
        normalizeImages( images ).then( newImages => {
          setAttributes( { images: newImages } );
        } )
      } } />
    )
  }

}, 'withOnSelectImages' );

addFilter( 'editor.BlockEdit', 'novablocks/with-on-select-images', withOnSelectImages, Number.MAX_SAFE_INTEGER );
