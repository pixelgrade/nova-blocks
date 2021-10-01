/**
 * WordPress dependencies
 */
import {
  Fragment,
  useCallback,
  useState,
  useEffect,
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import { normalizeImages } from "@novablocks/block-editor";

import SlideshowPreview from './preview';
import InspectorControls from './inspector-controls';
import BlockControls from './block-controls';

const Edit = ( props ) => {

  const { attributes, setAttributes } = props;
  const { galleryImages } = attributes;
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  useEffect( () => {
    if ( 0 > galleryImages.length && selectedIndex >= galleryImages.length ) {
      setSelectedIndex( galleryImages.length - 1 );
    }
  }, [ selectedIndex, galleryImages ] );

	const onPrevArrowClick = useCallback( () => {
		const newIndex = ( selectedIndex + galleryImages.length - 1 ) % galleryImages.length;
		setSelectedIndex( newIndex );
	}, [ selectedIndex, galleryImages ] );

	const onNextArrowClick = useCallback( () => {
		const newIndex = ( selectedIndex + 1 ) % galleryImages.length;
		setSelectedIndex( newIndex );
	}, [ selectedIndex, galleryImages ] );

	const onSelectImages = useCallback( images => {
		normalizeImages( images ).then( newImages => {
			setAttributes( { galleryImages: newImages } );
		} )
	}, [ setAttributes ] );

  const newProps = Object.assign( {}, props, {
    onSelectImages: onSelectImages
  } );

  return (
    <Fragment>
      <SlideshowPreview
        { ...newProps }
        previewImage={ galleryImages[ selectedIndex ] }
        onPrevArrowClick={ onPrevArrowClick }
        onNextArrowClick={ onNextArrowClick }
      />
      <InspectorControls { ...newProps } setIndex={ setSelectedIndex } selectedIndex={ selectedIndex } />
      <BlockControls { ...newProps } />
    </Fragment>
  );
}

export default Edit;
