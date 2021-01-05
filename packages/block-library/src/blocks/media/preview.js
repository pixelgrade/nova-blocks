/**
 * External dependencies
 */
import classnames from 'classnames';

import AdvancedGallery from '@novablocks/advanced-gallery';

import { InnerBlocks } from '@wordpress/block-editor';

const MediaPreview = function( props ) {
	const {
		attributes: {
			contentStyle,
			style,
			accentColor,

			mediaPosition,
			images,

			// alignment
			verticalAlignment,
			emphasisArea,

			contentAreaWidth,
			layoutGutter,
			className,

      palette,
      paletteVariation
		},
		settings,
	} = props;

  let blockColorsIndex = parseInt( paletteVariation, 10 );
  let contentColorsIndex = parseInt( paletteVariation, 10 );

  if ( contentStyle === 'moderate' ) {
    if ( blockColorsIndex < 6 ) {
      contentColorsIndex = Math.max(0, blockColorsIndex - 2 );
    } else {
      contentColorsIndex = Math.min(11, blockColorsIndex + 2 );
    }
  }

  if ( contentStyle === 'highlighted' ) {
    if ( blockColorsIndex < 6 ) {
      contentColorsIndex = Math.min( 11, blockColorsIndex + 8 );
    } else {
      contentColorsIndex = 0;
    }
  }

	const classNames = classnames(
		className,
		`novablocks-media`,
		`has-image-on-the-${ mediaPosition }`,
		`novablocks-u-valign-${ verticalAlignment }`,
		`is-style-${ style }`,
		`has-${ accentColor }-accent-color`,
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
		`content-is-${ contentStyle }`,
    `novablocks-u-color-variation-${ blockColorsIndex }`,
    `novablocks-u-color-palette-${ palette }`,
	);

	return (
		<div className={ classNames } style={ cssVars }>
			<div className={ blockClassNames }>
				<div className="wp-block-group__inner-container">
					<div className="wp-block" data-align="wide">
						<div className="novablocks-media__layout">
							<div className="novablocks-media__content">
								<div className={ `novablocks-media__inner-container novablocks-block__content novablocks-u-color-variation-${ contentColorsIndex }` }>
									<InnerBlocks allowedBlocks={ settings.media.allowedBlocks } />
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
