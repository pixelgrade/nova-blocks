/**
 * External dependencies
 */
import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';

import { MediaCompositionPreview } from '@novablocks/media-composition';
import { getColorSignalClassnames } from '@novablocks/utils';
import { getContentVariationBySignal } from '@novablocks/color-signal';

const MediaPreview = ( props ) => {

  const {
    attributes,
    settings,
  } = props;

	const {
    contentStyle,
    images,

    palette,
    useSourceColorAsReference,
	} = attributes;

	const passedProps = props;

	if ( "undefined" !== typeof images && images.length && typeof images[0] === 'string' ) {
		passedProps.attributes.images = images.map( image => JSON.parse( image ) );
	}

//	const cssVars = {
//		'--nb-emphasis-area': emphasisArea,
//    '--nb-card-content-padding-multiplier': contentPadding / 100,
//		'--nb-media-content-width': `${ contentAreaWidth }%`,
//		'--nb-media-layout-gutter': layoutGutter,
//	};

	const blockClassNames = classnames(
		`novablocks-block`,
		`content-is-${ contentStyle }`,
    getColorSignalClassnames( attributes, true ),
  );

	const contentVariation = getContentVariationBySignal( attributes );

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
              <div className="novablocks-media__media-aspect-ratio">
                <div className="novablocks-media__media-wrapper">
                  <MediaCompositionPreview { ...passedProps } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};

export default MediaPreview;
