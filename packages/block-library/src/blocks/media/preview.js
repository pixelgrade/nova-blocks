/**
 * External dependencies
 */
import classnames from 'classnames';

import { AdvancedGallery } from '@novablocks/components';

import { InnerBlocks } from '@wordpress/block-editor';

const MediaPreview = function( props ) {
	const {
		attributes: {
			contentStyle,
			blockStyle,
			mediaPosition,
			images,
			// alignment
			verticalAlignment,
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
		'--emphasis-area': emphasisArea,
		'--novablocks-media-content-width': `${contentAreaWidth}%`,
		'--novablocks-media-gutter': `calc( ${layoutGutter} * var(--novablocks-spacing) * 5 / 100 )`,
	};

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
								<AdvancedGallery.Component { ...passedProps } />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaPreview;