import classnames from 'classnames';
import { Spring, animated } from 'react-spring';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from "@wordpress/element";

import {
  generatePath,
  getBlobViewBox,
  getBlobAttsFromAttributes,
  getBlobStyles,
  getBlobMaskStyles,
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
				<Spring config={ { delay: 0 } } to={ { path: svgMaskPath } }>
					{ springProps => {
						return (
							<Fragment>
								<div className={ `novablocks-media-composition__grid-item-mask blob-mix__media` }>
									<animated.div className={ blobMaskClasses } style={ blobsEnableMask ? getBlobMaskStyles( springProps.path, svgViewBox ) : {} }>
										<OriginalComponent { ...props } />
									</animated.div>
									<svg className="blob-mix__mask-debug" viewBox={ svgViewBox } preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' version='1.1'>
										{
											blobsEnableMask && enableShapeDebug &&
											<ShapeDebug { ...blobMaskAtts } />
										}
									</svg>
								</div>
							</Fragment>
						);
					} }
				</Spring>
				{
					blobsEnableDecoration &&
					<Spring config={ { delay: 0 } } to={ { path: svgPath } }>
						{ props => {

							return (
								<svg className={ `blob-mix__decoration` } viewBox={ svgViewBox } preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' version='1.1'>
									<animated.path d={ props.path }></animated.path>
									{
										enableShapeDebug &&
										<ShapeDebug { ...blobAtts } />
									}
								</svg>
							);
						} }
					</Spring>
				}
			</div>
		)
	}
}, 'withShapeModelingDecoration' );

export default withShapeModelingDecoration;
