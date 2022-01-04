import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import { normalizeImages } from "@novablocks/block-editor";
import { getColorSignalClassnames } from "@novablocks/utils";

import SlideshowPreview from './preview';
import InspectorControls from './inspector-controls';
import BlockControls from './block-controls';
import { withControlsVisibility } from './components';

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

  const {
    contentPadding,
    contentPosition,
    contentWidth,
    scrollingEffect,
  } = attributes;

  const alignment = contentPosition.split( " " );
  const verticalAlignment = alignment[0];
  const horizontalAlignment = alignment[1];

  const blockProps = useBlockProps( {
    className: classnames(
      props.className,
      'novablocks-slideshow',
      `novablocks-slideshow--scrolling-effect-${ scrollingEffect }`,
      `novablocks-u-valign-${ verticalAlignment }`,
      `novablocks-u-halign-${ horizontalAlignment }`,
      `novablocks-u-spacing-${ contentPadding }`,
      getColorSignalClassnames( attributes, true ),
      'alignfull',
      'is-ready',
    ),
    style: props.style,
  } );

  return (
    <div { ...blockProps }>
      <SlideshowPreview
        { ...newProps }
        previewImage={ galleryImages[ selectedIndex ] }
        onPrevArrowClick={ onPrevArrowClick }
        onNextArrowClick={ onNextArrowClick }
      />
      <InspectorControls { ...newProps } setIndex={ setSelectedIndex } selectedIndex={ selectedIndex } />
      <BlockControls { ...newProps } />
    </div>
  );
}

export default withControlsVisibility( Edit );
