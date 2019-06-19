const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { MediaUpload, BlockControls } = wp.blockEditor;
const { IconButton, Toolbar } = wp.components;

class Controls extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
			setAttributes,
			updateImages
		} = this.props;

		const {
			mediaPosition,
			images = [],
		} = attributes;

		const galleryImages = images.map ( (image)  => JSON.parse(image));

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
						type = "image"
						multiple
						gallery
						value = { galleryImages.map( ( image ) => image.id ) }
						onSelect = { updateImages }
						render = { ( { open } ) => (
							<IconButton
								className='components-icon-button components-toolbar__control'
								label={ __( 'Edit Media', '__plugin_txtd' ) }
								icon="edit"
								onClick= { () => {
									open();
								} }
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
