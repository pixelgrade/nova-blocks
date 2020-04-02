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
	BlockIcon,
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
		`novablocks-media`,
		`has-image-on-the-${ mediaPosition }`,
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`,
		{
			'has-background': blockStyle !== 'basic'
		}
	);

	let galleryImages = images;

	if ( images.length && typeof images[0] === 'string' ) {
		galleryImages = images.map( image => JSON.parse( image ) );
	}

	const displayImages = ( imagesArray ) => {
		if ( 0 === imagesArray.length ) {
			return (
				<MediaPlaceholder
					icon={ <BlockIcon icon='format-gallery' /> }
					className="novablocks-media__placeholder"
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
					<div key={ image.id } className="novablocks-media__image">
						<img alt={ image.alt } src={ image.url } />
					</div>
				);
			} )
		);
	};

	return (
		<div className={ classNames }>
			<div className="wp-block-group__inner-container">
				<div className="wp-block" data-align="wide">
					<div className="novablocks-media__layout">
						<div className="novablocks-media__content">
							<div className="novablocks-media__inner-container">
								<InnerBlocks
									allowedBlocks={ settings.media.allowedBlocks }
									template={ settings.media.template }
								/>
							</div>
						</div>
						<div className="novablocks-media__aside">
							{ displayImages( images ) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaPreview;
