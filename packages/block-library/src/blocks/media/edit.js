/**
 * Internal dependencies
 */
import BlockControls from './block-controls';
import MediaPreview from './preview';

/**
 * WordPress dependencies
 */
import { Fragment, useCallback } from '@wordpress/element';

const MediaEdit = ( props ) => {

  const { setAttributes } = props;

	const updateImages = useCallback( media => {
		setAttributes( {
			images: media.map( ( image ) => JSON.stringify( { id: image.id, url: image.url, alt: image.alt } ) ),
		} );
	}, [] );

	const passedProps = {
	  ...props,
    updateImages
  }

	return (
		<Fragment>
			<MediaPreview { ...passedProps } />
			<BlockControls { ...passedProps } />
		</Fragment>
	);
};

export default MediaEdit;
