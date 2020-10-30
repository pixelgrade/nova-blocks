import { isSafari } from "@novablocks/utils";
import { Blob } from "../index";
import { Spring, animated } from 'react-spring/renderprops';
import { GridItemCollection } from "./grid-item";
import { getGalleryStyle, getGridStyle } from "./util";

import { Fragment, useState, useEffect, useRef } from '@wordpress/element';

const AdvancedGalleryPreview = ( props ) => {

	const { attributes } = props;
	const gallery = attributes?.images;

	const [ height, setHeight ] = useState(0);
	const ref = useRef( null );

	useEffect(() => {
		setHeight( !! ref.current ? ref.current.clientHeight : 0 );
	});

	if ( ! gallery || ! gallery.length ) {
		return null;
	}

	const gridItemsCollection = new GridItemCollection( gallery, attributes );
	const gridStyle = getGridStyle( attributes );

	if ( !! isSafari ) {
		Object.assign( gridStyle, { height } );
	}

	return (
		<div className={ `novablocks-advanced-gallery` } style={ getGalleryStyle( attributes ) } ref={ ref }>
			<div className={ `novablocks-advanced-gallery__grid` } style={ gridStyle }>
				{ gridItemsCollection.gridItems.map( ( item, index ) => (
					<AdvancedGalleryItem gridItem={ item } key={ index } index={ index } { ...props } />
				) ) }
			</div>
		</div>
	);
};

const AdvancedGalleryItem = ( props ) => {

	const {
		attributes,
		gridItem,
		index,
	} = props;

	const image = gridItem?.image;
	const imageURL = image?.sizes?.novablocks_medium?.url || image?.url;
	const imageCaption = image?.caption;
	const imageDescription = image?.description;
	const styles = gridItem.getImageStyle();

	const { generatePath } = Blob.Utils;

	const {
		blobMixingStyle,
		blobMaskPreset,
		blobMaskComplexity,
		blobMaskSmoothness,
		blobPreset,
		blobComplexity,
		blobSmoothness,

		blobsSizeBalance,
		blobsHorizontalDisplacement,
		blobsVerticalDisplacement,

		blobsEnableMask,
		blobsEnableDecoration
	} = attributes;

	const svgMaskPath = generatePath( blobMaskPreset + index, blobMaskComplexity, blobMaskSmoothness );
	const svgPath = generatePath( blobPreset + index, blobComplexity, blobSmoothness );


	const xOffset = blobsEnableDecoration ? blobsHorizontalDisplacement : 50;
	const yOffset = blobsEnableDecoration ? blobsVerticalDisplacement : 50;
	const scaleRatio = blobsEnableDecoration ? blobsSizeBalance : 50;

	const scaleDiff = 0.4 * ( 50 - scaleRatio ) / 50;

	const xScale = 1 - Math.abs( 50 - xOffset ) / 100;
	const yScale = 1 - Math.abs( 50 - yOffset ) / 100;
	const scale = Math.min( xScale, yScale );

	const mediaScale = scale - scaleDiff;
	const decorationScale = scale + scaleDiff;

	function getBlobTransform( scale, horizontalDisplacement, verticalDisplacement ) {
		return `translate( ${ ( 1 - scale ) * horizontalDisplacement }%, ${ ( 1 - scale ) * verticalDisplacement }% ) scale( ${ scale } )`
	}

	const blobsStyles = {
		'--blob-mix-media-transform': getBlobTransform( mediaScale, xOffset, yOffset ),
		'--blob-mix-decoration-transform': getBlobTransform( decorationScale, 100 - xOffset, 100 - yOffset ),
	};

	if ( ! image ) {
		return;
	}

	return (
		<div className={ `novablocks-advanced-gallery__grid-item` } style={ gridItem.getStyle() }>
			<div className={ `novablocks-advanced-gallery__grid-item-media  blob-mix  blob-mix--style-${ blobMixingStyle }` } style={ blobsStyles }>
				<Spring to={ { path: svgMaskPath } }>
					{ props => {

						const svgString = `<svg viewBox='0 0 20 20' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'><path d='${ props.path }'></path></svg>`;
						const svgDataURI = `url("data:image/svg+xml;utf8,${svgString}")`;

						const gridItemStyle = {
							maskImage: svgDataURI,
							maskSize: '100% 100%',
							WebkitMaskImage: svgDataURI,
							WebkitMaskSize: '100% 100%',
						};

						return (
							<animated.div className={ `novablocks-advanced-gallery__grid-item-mask  blob-mix__media` } style={ blobsEnableMask ? gridItemStyle : {} }>
								{ image.type !== 'video' &&
								  <img className={ `novablocks-advanced-gallery__image` } src={ imageURL } alt={ image?.alt } style={ styles } /> }
								{ image.type === 'video' &&
								  <video muted autoPlay loop playsInline className={ `novablocks-advanced-gallery__image` } style={ styles } src={ image.url } /> }
							</animated.div>
						);
					} }
				</Spring>
				{
					blobsEnableDecoration &&
					<Spring to={ { path: svgPath } }>
						{ props => {

							return (
								<svg className={ `novablocks-advanced-gallery__grid-item-shape  blob-mix__decoration` } viewBox='0 0 20 20' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' version='1.1'>
									<animated.path d={ props.path }></animated.path>
								</svg>
							);
						} }
					</Spring>
				}
			</div>
			<div className="novablocks-advanced-gallery__grid-item-info">
				{ typeof imageCaption === 'string' && <div
					className={ `novablocks-advanced-gallery__grid-item-caption` }
					dangerouslySetInnerHTML={ { __html: imageCaption } }>
				</div> }
				{ typeof imageDescription === 'string' && <div
					className={ `novablocks-advanced-gallery__grid-item-description` }
					dangerouslySetInnerHTML={ { __html: imageDescription } }>
				</div> }
			</div>
		</div>
	);
};

export default AdvancedGalleryPreview;
