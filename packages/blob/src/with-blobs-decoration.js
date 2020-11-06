import { Spring, animated } from 'react-spring/renderprops';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from "@wordpress/element";
import BlobDebug from './debug';

import {
	generatePath,
	getBlobViewBox,
	getBlobAttsFromAttributes,
	getBlobStyles,
	getBlobMaskStyles,
} from './utils';

const withBlobsDecoration = createHigherOrderComponent(( OriginalComponent ) => {

	return ( props ) => {
		const {
			attributes
		} = props;

		const {
			blobsEnableMask,
			blobsEnableDecoration,
			enableShapeDebug
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

		console.log( svgPath, blobAtts, svgMaskPath, blobMaskAtts );

		return (
			<div className={ 'blob-mix' } style={ blobsStyles }>
				<Spring to={ { path: svgMaskPath } }>
					{ springProps => {
						return (
							<Fragment>
								<div className={ `novablocks-advanced-gallery__grid-item-mask blob-mix__media` }>
									<animated.div className="blob-mix__mask" style={ blobsEnableMask ? getBlobMaskStyles( springProps.path, svgViewBox ) : {} }>
										<OriginalComponent { ...props } />
									</animated.div>
									<svg className="blob-mix__mask-debug" viewBox={ svgViewBox } preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' version='1.1'>
										{
											blobsEnableMask && enableShapeDebug &&
											<BlobDebug { ...blobMaskAtts } />
										}
									</svg>
								</div>
							</Fragment>
						);
					} }
				</Spring>
				{
					blobsEnableDecoration &&
					<Spring to={ { path: svgPath } }>
						{ props => {

							return (
								<svg className={ `blob-mix__decoration` } viewBox={ svgViewBox } preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' version='1.1'>
									<animated.path d={ props.path }></animated.path>
									{
										enableShapeDebug &&
										<BlobDebug { ...blobAtts } />
									}
								</svg>
							);
						} }
					</Spring>
				}
			</div>
		)
	}
}, 'withBlobsDecoration' );

export default withBlobsDecoration;
