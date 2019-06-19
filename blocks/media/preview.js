import classnames from "classnames";

const { Component, Fragment } = wp.element;

const { InnerBlocks, MediaPlaceholder} = wp.blockEditor;


/**
 * Constants
 */
const ALLOWED_BLOCKS = ['core/button', 'core/paragraph', 'core/heading'];
const TEMPLATE = [
	['core/heading', {content: 'Shoot for the moon, Even if You Miss it', level: 4}],
	['core/heading', {content: 'Welcome to our planet, look and feel matters!', level: 2}],
	['core/paragraph', {content: 'We\'ve always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known.'}],
	['core/button', {text: 'Discover More'}]
];

export default class MediaPreview extends Component {
	render() {

		const {
			attributes,
			className,
			isSelected,
			updateImages
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
								<img alt={ image.alt } src={ image.url } />
							</div>
						)
					})
				)
			}
		};

		return (
			<Fragment>
				<div className={classNames}>
					<div className="u-container-width">
						<div className="nova-media">
							<div className="nova-media__aside">
								{displayImages( images )}
							</div>
							<div className="nova-media__content" style={{textAlign: alignment}}>
								<InnerBlocks
									allowedBlocks={ALLOWED_BLOCKS}
									template={TEMPLATE}
								/>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
