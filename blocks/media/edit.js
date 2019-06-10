const {__} = wp.i18n;

import classnames from 'classnames';

const {InspectorControls, BlockControls, PanelColorSettings,  MediaUpload, InnerBlocks} = wp.blockEditor;

const {Component, Fragment} = wp.element;

const {RadioControl, Button, PanelBody, ToggleControl} = wp.components;

import {AlignmentToolbar} from "../../components";

/**
 * Constants
 */
const ALLOWED_BLOCKS = ['core/button', 'core/paragraph', 'core/heading'];
const TEMPLATE = [
	['core/heading', {content: 'Shoot for the moon, Even if You Miss.', level: 4}],
	['core/heading', {content: 'Welcome to our planet, look and feel matters!', level: 1}],
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

export default class Edit extends Component {

	constructor() {
		super( {...arguments} );
	}

	render() {

		const {
			attributes,
			className,
			setAttributes,
		} = this.props;

		const {
			backgroundColor,
			isCroppedImage,
			contentStyle,
			backgroundType
		} = attributes;

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

			return <div className="nova-media">
				<div className={ classnames(
					'nova-media__image', {
						'nova-media__image--full': isCroppedImage,
					}
				) } >
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
						template={TEMPLATE}/>
				</div>
			</div>
		}

		return [
			<Fragment>
				{media()}

				<BlockControls>
					<AlignmentToolbar {...this.props} />
				</BlockControls>

			</Fragment>,

			<InspectorControls>

				<PanelBody title={ __( 'Media Style', '__plugin_txtd' ) }  initialOpen={ true }>
					<ToggleControl
						label = { __( 'Automatically Crop Images', '__plugin_txtd' ) }
						help = {__('Scale images to fill the block container', '__plugin_txtd') }
						checked = { isCroppedImage }
						onChange = { () => setAttributes( {
							isCroppedImage: ! isCroppedImage,
						} ) }
					/>
				</PanelBody>

				<PanelBody title={ __('Content Area', '__plugin_txtd') } initialOpen = { true }>
					<RadioControl
						label = { __( 'Content Area Style', '__plugin_txtd' ) }
						value = { contentStyle }
						selected = { contentStyle }
						options = { [
							{ label: __( 'Basic', '__plugin_txtd' ), value: 'basic' },
							{ label: __( 'Independent', '__plugin_txtd' ), value: 'independent' },
							{ label: __( 'Highlighted', '__plugin_txtd' ), value: 'highlighted' }
						] }
						onChange = { contentStyle => setAttributes( { contentStyle } ) }
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
