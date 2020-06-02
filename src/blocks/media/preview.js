/**
 * External dependencies
 */
import classnames from 'classnames';

import AdvancedGallery from '../../components/advanced-gallery';

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
			// alignment
			verticalAlignment,
			blockTopSpacing,
			blockBottomSpacing,
			emphasisTopSpacing,
			emphasisBottomSpacing,
			emphasisArea,

			contentAreaWidth,
			layoutGutter,
		},
		className,
		settings,
	} = props;

	const classNames = classnames(
		className,
		`novablocks-media`,
		`has-image-on-the-${ mediaPosition }`,
		`novablocks-u-valign-${ verticalAlignment }`,
	);

	const passedProps = props;

	if ( "undefined" !== typeof images && images.length && typeof images[0] === 'string' ) {
		passedProps.attributes.images = images.map( image => JSON.parse( image ) );
	}

	const cssVars = {
		'--block-top-spacing': blockTopSpacing,
		'--block-bottom-spacing': blockBottomSpacing,
		'--emphasis-top-spacing': verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing,
		'--emphasis-bottom-spacing': verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing,
		'--emphasis-area': emphasisArea,
		'--novablocks-media-content-width': `${contentAreaWidth}%`,
		'--novablocks-media-gutter': `calc( ${layoutGutter} * var(--novablocks-spacing) * 8 / 100 )`,
	}

	const blockClassNames = classnames(
		`novablocks-block`,
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`,
	);

	return (
		<div className={ classNames } style={ cssVars }>
			<div className={ blockClassNames }>
				<div className="wp-block-group__inner-container">
					<div className="wp-block" data-align="wide">
						<div className="novablocks-media__layout novablocks-u-content-align">
							<div className="novablocks-media__content">
								<div className="novablocks-media__inner-container novablocks-block__content">
									<InnerBlocks
										allowedBlocks={ settings.media.allowedBlocks }
										template={ settings.media.template }
									/>
								</div>
							</div>
							<div className="novablocks-media__aside">
								<AdvancedGallery { ...passedProps } />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaPreview;
