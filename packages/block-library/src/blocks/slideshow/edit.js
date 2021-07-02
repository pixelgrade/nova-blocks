/**
 * Internal dependencies
 */
import SlideshowPreview from './preview';
import InspectorControls from './inspector-controls';
import BlockControls from './block-controls';

import {
	normalizeImages
} from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import {
  Fragment,
  useState,
  useEffect,
} from '@wordpress/element';

const Edit = ( props ) => {

  const {
    attributes: {
      galleryImages,
    },
  } = props;

  const [ selectedIndex, setSelectedIndex ] = useState(0);

  useEffect( () => {
    if ( selectedIndex >= galleryImages.length ) {
      setSelectedIndex( galleryImages.length - 1 );
    }
  }, [ selectedIndex ] );

	const onPrevArrowClick = () => {
		const newIndex = ( selectedIndex + galleryImages.length - 1 ) % galleryImages.length;
		setSelectedIndex( newIndex );
	}

	const onNextArrowClick = () => {
		const newIndex = ( selectedIndex + 1 ) % galleryImages.length;
		setSelectedIndex( newIndex );
	}

	const onSelectImages = ( images ) => {

		const {
			setAttributes
		} = props;

		normalizeImages( images ).then( newImages => {
			setAttributes( { galleryImages: newImages } );
		} )
	};

  const newProps = Object.assign( {}, props, { onSelectImages } );

  return (
    <Fragment>

      <SlideshowPreview
        { ...newProps }
        previewImage={ galleryImages[ selectedIndex ] }
        onPrevArrowClick={ onPrevArrowClick }
        onNextArrowClick={ onNextArrowClick }
      />

      <InspectorControls { ...{ ...newProps, setIndex: setSelectedIndex, selectedIndex } } />
      <BlockControls { ...newProps } />

    </Fragment>
  );
}

export default Edit;
