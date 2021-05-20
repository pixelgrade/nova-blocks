/**
 * External dependencies
 */
import classnames from 'classnames';

import AdvancedGallery from '@novablocks/advanced-gallery';
import {
  getColorSetClassnames,
  normalizeVariationValue,
  getSignalOptionsFromVariation,
  getSiteColorVariation,
} from '@novablocks/utils';

import { InnerBlocks } from '@wordpress/block-editor';

const MediaPreview = function( props ) {

  const {
    attributes,
    settings,
  } = props;

	const {
    className,
    contentStyle,

    mediaPosition,
    images,

    // alignment
    verticalAlignment,
    emphasisArea,

    contentAreaWidth,
    layoutGutter,

    palette,
    paletteVariation,
    contentColorSignal,
    useSourceColorAsReference,
	} = attributes;

	const {
	  palettes
  } = settings;

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
		'--novablocks-media-content-width': `${ contentAreaWidth }%`,
		'--novablocks-media-gutter': `calc( ${ layoutGutter } * var(--novablocks-spacing) * 5 / 100 )`,
	};

	const blockClassNames = classnames(
		`novablocks-block`,
		`content-is-${ contentStyle }`,
    getColorSetClassnames( attributes ),
  );

	const siteVariation = getSiteColorVariation();
  const currentPalette = palettes.find( paletteIterator => paletteIterator.id === palette );
  const { sourceIndex } = currentPalette;

  const offset = useSourceColorAsReference ? sourceIndex : siteVariation - 1;
  const referenceVariation = normalizeVariationValue( paletteVariation + offset );
	const contentSignalOptions = getSignalOptionsFromVariation( referenceVariation );

	console.log( contentSignalOptions );

	const contentVariation = normalizeVariationValue( contentSignalOptions[ contentColorSignal ] - offset );

	const contentClassNames = classnames(
    `novablocks-media__inner-container`,
    `novablocks-block__content`,
    `sm-palette-${ palette }`,
    `sm-variation-${ contentVariation }`,
    {
      'sm-palette--shifted': useSourceColorAsReference
    }
  );

  return (
		<div className={ classNames } style={ cssVars }>
			<div className={ blockClassNames }>
				<div className="wp-block-group__inner-container">
					<div className="wp-block" data-align="wide">
						<div className="novablocks-media__layout">
							<div className="novablocks-media__content">
								<div className={ contentClassNames }>
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
