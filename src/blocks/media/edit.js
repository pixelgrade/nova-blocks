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

const { createHigherOrderComponent } = wp.compose;

const {
	select,
	dispatch
} = wp.data;

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

const withMediaHorizontalAlignment = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( 'novablocks/media' === props.name ) {
			const { clientId, attributes } = props;
			const { getBlock } = select( 'core/block-editor' );
			const { updateBlockAttributes } = dispatch( 'core/block-editor' );
			const media = getBlock( clientId );
			const { contentPosition } = attributes;
			const alignment = contentPosition.split( " " );
			const horizontalAlignment = alignment[1];

			media.innerBlocks.forEach( block => {
				updateBlockAttributes( block.clientId, {
					align: horizontalAlignment
				} );
			} )
		}
		return <BlockListBlock { ...props } />
	};
}, 'withMediaHorizontalAlignment' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'novablocks/with-media-horizontal-alignment', withMediaHorizontalAlignment );

export default withSettings( MediaEdit );
