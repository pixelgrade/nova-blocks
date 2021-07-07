import { addFilter } from "@wordpress/hooks";
import normalizeImages from "../../components/normalize-images/index";

const onSelectImages = ( images ) => {
  normalizeImages( images ).then( newImages => {
    setAttributes( { images: newImages } );
  } )
};

export const withOnSelectImages = createHigherOrderComponent( WrappedComponent => {

  return ( props ) => {
    return <WrappedComponent { ...props } onSelectImages={ onSelectImages } />
  }

}, 'withOnSelectImages' );

addFilter( 'editor.BlockEdit', 'novablocks/with-on-select-images', withOnSelectImages, Number.MAX_SAFE_INTEGER );
