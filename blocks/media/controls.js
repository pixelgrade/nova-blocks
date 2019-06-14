import {AlignmentToolbar} from "../../components/alignment-controls";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { MediaUpload, BlockControls } = wp.blockEditor;
const { IconButton, Toolbar } = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

class Controls extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			mediaPosition,
			images
		} = attributes;

		const galleryImages = images.map ( (image)  => JSON.parse(image));

		function updateImages( media ) {
			setAttributes({
				images: media.map( ( image ) => JSON.stringify({ url: image.url, alt: image.alt }) )
			});
		}

		const toolbarControls = (
			<BlockControls>
				<Toolbar>
					<IconButton
						title = {__('Show media on left', '__plugin_txtd')}
						icon = 'align-pull-left'
						isActive= { mediaPosition === 'left' }
						onClick={ () => setAttributes({ mediaPosition: 'left' }) }
					/>
					<IconButton
						title = {__('Show media on right', '__plugin_txtd')}
						icon = 'align-pull-right'
						isActive = { mediaPosition === 'right' }
						onClick = { () => setAttributes({ mediaPosition: 'right' }) }
					/>
					{ !! images.length && (
							<MediaUpload
								type = "image"
								multiple
								gallery
								value = { galleryImages.map( ( image ) => image.id ) }
								onSelect = { updateImages }
								render = {({open}) => (
									<IconButton
										icon="edit"
										onClick={open}>
									</IconButton>
								)}
							/>
					) }
				</Toolbar>
				<AlignmentToolbar {...this.props} />
			</BlockControls>
		);

		return (
			<Fragment>
				{ toolbarControls }
			</Fragment>
		);
	}
}

export default Controls;
