import { Spring, animated } from 'react-spring/renderprops';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from "@wordpress/element";

import {
	generatePath,
	getBlobViewBox,
	getBlobAttsFromAttributes,
	getBlobStyles,
	getBlobMaskStyles,
} from './utils';

const withBlobsDecoration = createHigherOrderComponent(( OriginalComponent ) => {

	return ( props ) => {
		const { attributes } = props;

		const {
			blobsEnableMask,
			blobsEnableDecoration,
			enableShapeDebug
		} = attributes;

		const svgViewBox = getBlobViewBox( attributes );
		const blobsStyles = getBlobStyles( attributes );

		const blobAtts = getBlobAttsFromAttributes( attributes, 'blob' );
		const blobMaskAtts = getBlobAttsFromAttributes( attributes, 'blobMask' );

		const svgMaskPath = generatePath( blobMaskAtts );
		const svgPath = generatePath( blobAtts );

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
											<Blob.Debug { ...blobMaskAtts } />
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
										<Blob.Debug { ...blobAtts } />
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
