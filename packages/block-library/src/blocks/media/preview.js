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
    contentColorSignal,
    contentPaletteVariation,
	} = attributes;

	const passedProps = props;

	if ( "undefined" !== typeof images && images.length && typeof images[0] === 'string' ) {
		passedProps.attributes.images = images.map( image => JSON.parse( image ) );
	}

	const blockClassNames = classnames(
		`novablocks-block`,
		`content-is-${ contentStyle }`,
    getColorSignalClassnames( attributes, true ),
  );

	const contentClassNames = classnames(
    `novablocks-media__inner-container`,
    `novablocks-block__content`,
    getColorSignalClassnames( {
      palette,
      colorSignal: contentColorSignal,
      paletteVariation: contentPaletteVariation,
      useSourceColorAsReference: false
    }, true )
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
