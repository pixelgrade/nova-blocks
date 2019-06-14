const {__} = wp.i18n;

import classnames from 'classnames';

const {InspectorControls, BlockControls,  MediaUpload, InnerBlocks} = wp.blockEditor;

const {Component, Fragment} = wp.element;

const {RadioControl, Button, PanelBody, IconButton, Toolbar} = wp.components;

import {AlignmentToolbar, GalleryPreview, GalleryPlaceholder} from "../../components";

import Controls from './controls';
import Inspector from './inspector';

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
	}

	render() {

		const {
			attributes,
			className,
			setAttributes,
			isSelected,
		} = this.props;

		const {
			mediaStyle,
			contentStyle,
			blockStyle,
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
								onClick={ openEvent }
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
							onSelect={ media => {
								setAttributes( {imageAlt: media.alt, imageUrl: media.url} );
							}}
							type="image"
							value={attributes.imageID}
							render={( { open } ) => getImageButton( open )}
						/>
					</div>
					<div className="nova-media__content">
						<InnerBlocks
							allowedBlocks={ALLOWED_BLOCKS}
							template={TEMPLATE}
						/>
					</div>
				</div>
			</div>
			</div>
		};

		return [
			<Fragment>
				{media()}
				<Controls { ...this.props } />
				<Inspector { ...this.props } />
			</Fragment>
		]
	}
}
