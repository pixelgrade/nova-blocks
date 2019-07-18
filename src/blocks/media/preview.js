import classnames from "classnames";

const {
	Component,
} = wp.element;

const {
	InnerBlocks,
	MediaPlaceholder
} = wp.blockEditor;


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
			updateImages
		} = this.props;

		const {
			contentStyle,
			blockStyle,
			mediaPosition,
			images,
		} = attributes;

		const classNames = classnames(
			className,
			`nova-media`,
			`has-image-on-the-${mediaPosition}`,
			`block-is-${blockStyle}`,
			`content-is-${contentStyle}`,
		);

		const galleryImages = images.map( ( image ) => JSON.parse( image ) );

		const displayImages = ( images ) => {

			if ( 0 === images.length ) {
				return (
					<MediaPlaceholder
						icon="format-gallery"
						className="nova-media__placeholder"
						onSelect={updateImages}
						accept="image/*"
						allowedTypes={['image']}
						multiple
					/>
				);
			} else {
				return (
					galleryImages.map( ( image ) => {
						return (
							<div className='nova-media__image'>
								<img alt={image.alt} src={image.url}/>
							</div>
						)
					} )
				)
			}
		};

		return (
			<div className={classNames}>
				<div className="nova-media__inner-container">
					<div className="wp-block" data-align="wide">
						<div className="nova-media__layout">
							<div className="nova-media__content nova-media__inner-container">
								<InnerBlocks
									allowedBlocks={ALLOWED_BLOCKS}
									template={TEMPLATE}
								/>
							</div>
							<div className="nova-media__aside">
								{displayImages( images )}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
