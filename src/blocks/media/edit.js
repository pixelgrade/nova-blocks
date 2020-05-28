/**
 * Internal dependencies
 */
import withSettings from '../../components/with-settings';
import BlockControls from './block-controls';
import MediaPreview from './preview';
import InspectorControls from './inspector-controls';

/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;

const MediaEdit = function( props ) {
	function updateImages( media ) {
		props.setAttributes( {
			images: media.map( ( image ) => JSON.stringify( { id: image.id, url: image.url, alt: image.alt } ) ),
		} );
	}

	return (
		<Fragment>
			<InspectorControls { ...props } />
			<MediaPreview { ...{ ...props, updateImages } } />
			<BlockControls { ...{ ...props, updateImages } } />
		</Fragment>
	);
};

export default withSettings( MediaEdit );
