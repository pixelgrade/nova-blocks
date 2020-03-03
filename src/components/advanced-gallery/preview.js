import { Spring, animated } from 'react-spring/renderprops';

import { GridItemCollection } from "./grid-item";
import { getGalleryStyle, getGridStyle } from "./util";
import { generatePath } from '../../components/blob/util';

import AdvancedGallery from "./index";

const { Fragment } = wp.element;

const AdvancedGalleryPreview = ( props ) => {

	const { images, ...attributes } = props.attributes;

	if ( ! images || ! images.length ) {
		return false;
	}

	const gridItemsCollection = new GridItemCollection( images, attributes );

	return (
		<div className={ `novablocks-advanced-gallery` } style={ getGalleryStyle( attributes ) }>
			<div className={ `novablocks-advanced-gallery__grid` } style={ getGridStyle( attributes ) }>
				{ gridItemsCollection.gridItems.map( ( item, index ) => (
					<AdvancedGalleryItem gridItem={ item } index={ index } props={ props } key={ index } />
				) ) }
			</div>
		</div>
	);
}

const AdvancedGalleryItem = ( { gridItem, index, props } ) => {

	const {
		attributes: {
			preset,
			complexity,
			smoothness,
		}
	} = props;

	const clipPathId = `blob-preset-${ preset + index }-complexity-${ complexity }-smoothness-${ smoothness }`;

	return (
		<Fragment>
			<Spring to={ { path: generatePath( preset, complexity, smoothness, index ) } }>
				{ props => {

					const svgString = `<svg viewBox='0 0 20 20' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'><path d='${ props.path }'></path></svg>`;
					const svgBase64 = btoa(svgString);
					const svgDataURI = `url("data:image/svg+xml;utf8,${svgString}")`;

					const gridItemStyle = {
						...gridItem.getStyle(),
						maskImage: svgDataURI,
						maskSize: '100% 100%',
						WebkitMaskImage: svgDataURI,
						WebkitMaskSize: '100% 100%',
					}

					return (
						<animated.div className={ `novablocks-advanced-gallery__grid-item` } style={ gridItemStyle }>
							<img className={ `novablocks-advanced-gallery__image` } style={ gridItem.getImageStyle() } src={ gridItem.image.url } />
						</animated.div>
					);
				} }
			</Spring>
			{ false && <svg className={ `novablocks-advanced-gallery__image` } viewBox={ '0 0 20 20' }>
				<defs>
					<clipPath id={ clipPathId }>
						<Spring to={ { path: generatePath( preset, complexity, smoothness, index ) } }>
							{ props => <animated.path d={ props.path } /> }
						</Spring>
					</clipPath>
				</defs>
				<image preserveAspectRatio="xMidYMid slice" clipPath={ `url(#${ clipPathId })` } height="20" width="20" xlinkHref={ gridItem.image.url } />
			</svg> }
		</Fragment>
	);
}

export default AdvancedGalleryPreview;
