const {__} = wp.i18n;

import classnames from 'classnames';

const {InspectorControls, BlockControls, PanelColorSettings,  MediaUpload, InnerBlocks} = wp.blockEditor;

const {Component, Fragment} = wp.element;

const {RadioControl, Button, PanelBody, ToggleControl, IconButton, Toolbar} = wp.components;

import {AlignmentToolbar, GalleryPreview, GalleryPlaceholder} from "../../components";

/**
 * Constants
 */
const ALLOWED_BLOCKS = ['core/button', 'core/paragraph', 'core/heading'];
const TEMPLATE = [
	['core/heading', {content: 'Shoot for the moon, Even if You Miss.', level: 4}],
	['core/heading', {content: 'Welcome to our planet, look and feel matters!', level: 2}],
	['core/paragraph', {content: 'If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon. I don\'t know what you could say about a day in which you have seen four beautiful sunsets.'}],
	['core/button', {text: 'Discover More'}]
];

const colors = [ {
	name: __( 'Dark', '__plugin_txtd' ),
	color: '#000'
}, {
	name: __( 'Light', '__plugin_txtd' ),
	color: '#FFF'
} ];

const defaultGalleryImages = [{
	"url": "https://source.unsplash.com/o0uSd05QeeI/1600x900",
	"sizes": {
		"thumbnail": {
			"url": "https://source.unsplash.com/o0uSd05QeeI/150x150"
		},
		"large": {
			"url": "https://source.unsplash.com/o0uSd05QeeI/1600x900",
			"width": 1600,
			"height": 900
		}
	}
}, {
	"url": "https://source.unsplash.com/Nvq1vngu4ZQ/1600x900",
	"sizes": {
		"thumbnail": {
			"url": "https://source.unsplash.com/Nvq1vngu4ZQ/150x150"
		},
		"large": {
			"url": "https://source.unsplash.com/Nvq1vngu4ZQ/1600x900",
			"width": 1600,
			"height": 900
		}
	}
}];

export default class Edit extends Component {

	constructor() {
		super( {...arguments} );

		this.state = {
			selectedIndex: 0
		};
	}

	render() {

		const {
			attributes,
			className,
			setAttributes,
			isSelected,
		} = this.props;

		const {
			backgroundColor,
			mediaStyle,
			contentStyle,
			blockStyle,
			backgroundType,
			galleryImages,
			mediaPosition
		} = attributes;

		const classNames = classnames(className, {
			'has-image-on-the-right': 'right' === mediaPosition,
			'content-is-moderate': 'moderate' === contentStyle,
			'content-is-highlighted': 'highlighted' === contentStyle,
			'block-is-moderate': 'moderate' === blockStyle,
			'block-is-highlighted': 'highlighted' === blockStyle,
			'is-simple-grid': 'simple-grid' === mediaStyle,
			'is-selected': isSelected,
		});

		let { selectedIndex } = this.state;

		if ( ! galleryImages.length ) {
			defaultGalleryImages.map( image => galleryImages.push( image ) )
		}

		if ( selectedIndex >= galleryImages.length ) {
			selectedIndex = galleryImages.length - 1;
		}

		const blockControls = (
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
				</Toolbar>
				<AlignmentToolbar {...this.props} />
			</BlockControls>
		);

		const media = () => {

			const getImageButton = ( openEvent ) => {

				if ( attributes.imageUrl ) {
					return (
						<img
							src={attributes.imageUrl}
							onClick={openEvent}
							className="image"
						/>
					);
				} else {
					return (
						<div className="button-container">
							<Button
								onClick={openEvent}
								className="button button-large"
							>
								Pick an image
							</Button>
						</div>
					);
				}
			};

			return <div className = { classNames } >
				<div className = "u-container-width">
				<div className="nova-media">
					<div className="nova-media__image" >
						<MediaUpload
							onSelect={media => {
								setAttributes( {imageAlt: media.alt, imageUrl: media.url} );
							}}
							type="image"
							value={attributes.imageID}
							render={( {open} ) => getImageButton( open )}
						/>
					</div>
					<div className="nova-media__content">
						<InnerBlocks
							allowedBlocks={ALLOWED_BLOCKS}
							template={TEMPLATE}
							templateLock={ true }
							templateInsertUpdatesSelection={ false }
						/>
					</div>
				</div>
			</div>
			</div>
		};

		return [
			<Fragment>
				{media()}
				{ blockControls }
			</Fragment>,

			<InspectorControls>

				{ !! galleryImages.length && <GalleryPreview
					galleryImages={ galleryImages }
					onSelectImage={ selectedIndex => { this.setState( { selectedIndex } ) } }
					isSelected={ isSelected }
					selected={ selectedIndex }
				/> }

				<GalleryPlaceholder { ...this.props } />


				<PanelBody title={ __( 'Media Area', '__plugin_txtd' ) }  initialOpen={ true }>
					<RadioControl
						label = { __( 'Media Style', '__plugin_txtd' ) }
						value = { mediaStyle }
						selected = { mediaStyle }
						options = { [
							{ label: __( 'Natural Layout', '__plugin_txtd' ), value: 'natural' },
							{ label: __( 'Well-organized Grid', '__plugin_txtd' ), value: 'simple-grid' },
							{ label: __( 'Overlap Layered Grid', '__plugin_txtd' ), value: 'overlap-grid' }
						] }
						help={ __( 'Automatically crop and scale images to fill the block container.', '__plugin_txtd' ) }
						onChange = { mediaStyle => setAttributes( { mediaStyle } ) }
					/>
				</PanelBody>

				<PanelBody title={ __('Content Area', '__plugin_txtd') } initialOpen = { true }>
					<RadioControl
						label = { __( 'Emphasis Level', '__plugin_txtd' ) }
						value = { contentStyle }
						selected = { contentStyle }
						options = { [
							{ label: __( 'Basic', '__plugin_txtd' ), value: 'basic' },
							{ label: __( 'Moderate', '__plugin_txtd' ), value: 'moderate' },
							{ label: __( 'Highlighted', '__plugin_txtd' ), value: 'highlighted' }
						] }
						onChange = { contentStyle => setAttributes( { contentStyle } ) }
					/>
				</PanelBody>


				<PanelBody title={ __('Block Area', '__plugin_txtd') } initialOpen = { true }>
					<RadioControl
						label = { __( 'Emphasis Level', '__plugin_txtd' ) }
						value = { blockStyle }
						selected = { blockStyle }
						options = { [
							{ label: __( 'Basic', '__plugin_txtd' ), value: 'basic' },
							{ label: __( 'Moderate', '__plugin_txtd' ), value: 'moderate' },
							{ label: __( 'Highlighted', '__plugin_txtd' ), value: 'highlighted' }
						] }
						onChange = { blockStyle => setAttributes( { blockStyle } ) }
					/>
				</PanelBody>

				<RadioControl
					label = { __('Background Color', '__plugin_txtd' ) }
					value = { backgroundType }
					selected = { backgroundType }
					options = { [
						{ label: __( 'Transparent', '__plugin_txtd' ), value: 'transparent' },
						{ label: __( 'Color', '__plugin_txtd' ), value: 'color' }
					]}
					onChange = { backgroundType => setAttributes( { backgroundType } ) }
				/>

				{ backgroundType === 'color' && <PanelColorSettings
					colorSettings = { [
						{
							value: backgroundColor,
							onChange: backgroundColor => setAttributes( { backgroundColor } ),
							label: __( 'Selected color', '__plugin_txtd' ),
						},
					] }
					colors={ colors } >
					</PanelColorSettings>
				}

			</InspectorControls>
		]
	}
}
