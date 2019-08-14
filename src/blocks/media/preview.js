/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
	MediaPlaceholder,
} = wp.blockEditor;

const MediaPreview = function( props ) {
	const {
		attributes: {
			contentStyle,
			blockStyle,
			mediaPosition,
			images,
		},
		className,
		updateImages,
		settings,
	} = props;

	const classNames = classnames(
		className,
		`nova-media`,
		`has-image-on-the-${ mediaPosition }`,
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`,
	);

	const galleryImages = images.map( ( image ) => JSON.parse( image ) );

	const displayImages = ( imagesArray ) => {
		if ( 0 === imagesArray.length ) {
			return (
				<MediaPlaceholder
					icon="format-gallery"
					className="nova-media__placeholder"
					onSelect={ updateImages }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					multiple
				/>
			);
		}

		return (
			galleryImages.map( ( image ) => {
				return (
					<div key={ image.id } className="nova-media__image">
						<img alt={ image.alt } src={ image.url } />
					</div>
				);
			} )
		);
	};

	return (
		<div className={ classNames }>
			<div className="nova-media__inner-container">
				<div className="wp-block" data-align="wide">
					<div className="nova-media__layout">
						<div className="nova-media__content nova-media__inner-container">
							<InnerBlocks
								allowedBlocks={ settings.media.allowedBlocks }
								template={ settings.media.template }
							/>
						</div>
						<div className="nova-media__aside">
							{ displayImages( images ) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaPreview;
