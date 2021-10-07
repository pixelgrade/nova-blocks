import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { useCallback } from '@wordpress/element';
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import { getAlignmentClassnames } from "@novablocks/utils";

import { withControlsVisibility } from './components';
import BlockControls from './block-controls';
import MediaPreview from './preview';

const MediaEdit = ( props ) => {

  const { attributes, setAttributes } = props;
  const { mediaPosition, verticalAlignment } = attributes;

	const updateImages = useCallback( media => {
		setAttributes( {
			images: media.map( ( image ) => JSON.stringify( { id: image.id, url: image.url, alt: image.alt } ) ),
		} );
	}, [] );

	const passedProps = {
	  ...props,
    updateImages
  }

  const className = classnames(
    props.className,
    `alignfull`,
    `novablocks-media`,
    `novablocks-u-valign-${ verticalAlignment }`,
    `has-image-on-the-${ mediaPosition }`,
    getAlignmentClassnames( attributes )
  );

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

	return (
		<div { ...blockProps }>
			<MediaPreview { ...passedProps } />
			<BlockControls { ...passedProps } />
		</div>
	);
};

export default withControlsVisibility( MediaEdit );
