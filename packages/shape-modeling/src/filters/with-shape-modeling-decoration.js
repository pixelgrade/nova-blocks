import classnames from 'classnames';
import { createHigherOrderComponent } from '@wordpress/compose';

import {
  generatePath,
  getBlobViewBox,
  getBlobAttsFromAttributes,
  getBlobStyles,
  getBlobMaskStyles,
  getBlobMediaStyles,
} from '../utils';

import { getColorSignalClassnames } from "@novablocks/utils";

import { ShapeDebug } from '../components';

const withShapeModelingDecoration = createHigherOrderComponent( OriginalComponent => {

	return ( props ) => {

		const { attributes } = props;

		const {
			blobsEnableMask,
			blobsEnableDecoration,
			enableShapeDebug,
		} = attributes;

		const seedOffset = Number.isInteger( props.seedOffset ) ? props.seedOffset : 0;
		const newAttributes = Object.assign( {}, attributes, {
			blobPatternSeed: attributes.blobPatternSeed + seedOffset,
			blobMaskPatternSeed: attributes.blobMaskPatternSeed + seedOffset
		} );

		const svgViewBox = getBlobViewBox( newAttributes );
		const blobsStyles = getBlobStyles( newAttributes );

		const blobAtts = getBlobAttsFromAttributes( newAttributes, 'blob' );
		const blobMaskAtts = getBlobAttsFromAttributes( newAttributes, 'blobMask' );

		const svgMaskPath = generatePath( blobMaskAtts );
		const svgPath = generatePath( blobAtts );

    const colorSignalClassnames = getColorSignalClassnames( attributes, true );

		const blobMaskClasses = classnames(
		  'blob-mix__mask',
      colorSignalClassnames
    );

		return (
			<div className={ 'blob-mix' } style={ blobsStyles }>
        <div className={ `novablocks-media-composition__grid-item-mask blob-mix__media` } style={ getBlobMediaStyles( attributes ) }>
          <div className={ blobMaskClasses } style={ blobsEnableMask ? getBlobMaskStyles( svgMaskPath, svgViewBox ) : {} }>
            <OriginalComponent { ...props } />
          </div>
          <svg className="blob-mix__mask-debug" viewBox={ svgViewBox } preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' version='1.1'>
            {
              blobsEnableMask && enableShapeDebug &&
              <ShapeDebug { ...blobMaskAtts } />
            }
          </svg>
        </div>
				{
					blobsEnableDecoration &&
          <svg className={ `blob-mix__decoration` } viewBox={ svgViewBox } preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' version='1.1'>
            <path d={ svgPath }></path>
            {
              enableShapeDebug &&
              <ShapeDebug { ...blobAtts } />
            }
          </svg>
				}
			</div>
		)
	}
}, 'withShapeModelingDecoration' );

export default withShapeModelingDecoration;
