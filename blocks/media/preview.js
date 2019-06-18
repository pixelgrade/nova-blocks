import classnames from "classnames";

const { Component, Fragment } = wp.element;

const { InnerBlocks, MediaPlaceholder} = wp.blockEditor;


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

export default class MediaPreview extends Component {
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
			mediaPosition,
			images,
			alignment
		} = attributes;

		const classNames = classnames(className, {
			'has-image-on-the-right': 'right' === mediaPosition,
			'content-is-moderate': 'moderate' === contentStyle,
			'content-is-highlighted': 'highlighted' === contentStyle,
			'block-is-moderate': 'moderate' === blockStyle,
			'block-is-highlighted': 'highlighted' === blockStyle,
			'is-simple-grid': 'simple-grid' === mediaStyle,
			'is-overlap-grid': 'overlap-grid' === mediaStyle,
			'is-selected': isSelected,
			'has-multiple-images':  2 <= images.length
		});

		const galleryImages = images.map ( (image)  => JSON.parse(image));

		const displayImages = (images) => {

			if ( 0 === images.length ) {
				return (
						<MediaPlaceholder
							icon = "format-gallery"
							className = "nova-media__placeholder"
							onSelect = { updateImages }
							accept = "image/*"
							allowedTypes = { [ 'image' ] }
							multiple
						/>
				);
			} else {
				return (
					galleryImages.map( (image) => {
						return (
							<div className ='nova-media__image'>
								<img src={ image.url } />
							</div>
						)
					})
				)
			}
		}

		function updateImages( media ) {
			setAttributes({
				images: media.map( ( image ) => JSON.stringify({ url: image.url, alt: image.alt }) )
			});
		}

		return (
			<Fragment>
				<div className = { classNames } >
						<div className="nova-media">
							<div className="nova-media__aside" >
								{ displayImages(images) }
							</div>
							<div className="nova-media__content" style={ {textAlign:  alignment } }>
								<InnerBlocks
									allowedBlocks={ALLOWED_BLOCKS}
									template={TEMPLATE}
								/>
							</div>
						</div>
				</div>
			</Fragment>
		)
	}
}
