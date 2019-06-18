import * as icons from "../icons";

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
			images,
		} = attributes;

		const galleryImages = images.map ( (image)  => JSON.parse(image));

		function updateImages( media ) {
			setAttributes({
				images: media.map( ( image ) => JSON.stringify({ url: image.url, alt: image.alt }) )
			});
		}

		const hasImages = !! images.length;

		const MEDIA_ALIGNMENTS_CONTROLS = {
			left: {
				icon: 'align-pull-left',
				title: __( 'Show Media on Left Side', '__plugin_txtd' ),
			},
			right: {
				icon: 'align-pull-right',
				title: __( 'Show Media on Right Side', '__plugin_txtd' ),
			},
		};

		const toolbarControls = (
			<BlockControls>
				<Toolbar
					controls={ Object.keys(MEDIA_ALIGNMENTS_CONTROLS).map(control => {
						return {
							...MEDIA_ALIGNMENTS_CONTROLS[control],
							onClick: () => { setAttributes({ mediaPosition: control } )},
							isActive: mediaPosition === control
						}
					}) }
				/>
				{ hasImages && <Toolbar>
					<MediaUpload
						onSelect = { updateImages }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						multiple
						gallery
						value = { galleryImages.map( ( image ) => image.id ) }
						render = { ( { open } ) => (
							<IconButton
								label={ __( 'Edit gallery', '__plugin_txtd' ) }
								icon="edit"
								onClick= { open }
							/>
						)}
					/>
				</Toolbar> }
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
