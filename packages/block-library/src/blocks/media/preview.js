/**
 * External dependencies
 */
import classnames from 'classnames';

import MediaComposition from '@novablocks/media-composition';

import { getAlignmentClassnames } from '@novablocks/utils';

import { InnerBlocks } from '@wordpress/block-editor';

const MediaPreview = function( props ) {

  const {
    attributes,
    settings,
    colorSignal: {
      utils: {
        getColorSignalClassnames,
        getContentVariationBySignal
      }
    }
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
    useSourceColorAsReference,

    contentPadding,
	} = attributes;

	const classNames = classnames(
		className,
		`novablocks-media`,
		`has-image-on-the-${ mediaPosition }`,
		`novablocks-u-valign-${ verticalAlignment }`,
    getAlignmentClassnames( attributes )
	);

	const passedProps = props;

	if ( "undefined" !== typeof images && images.length && typeof images[0] === 'string' ) {
		passedProps.attributes.images = images.map( image => JSON.parse( image ) );
	}

	const cssVars = {
		'--nb-emphasis-area': emphasisArea,
    '--card-content-padding': contentPadding,
		'--nb--media-content-width': `${ contentAreaWidth }%`,
		'--nb--media-gutter': `calc( ${ layoutGutter } * var(--nb--media-spacing) * 5 / 100 )`,
	};

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
								<MediaComposition { ...passedProps } />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaPreview;
