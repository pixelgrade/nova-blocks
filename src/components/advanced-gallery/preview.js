import { GridItemCollection } from "./grid-item";
import { getGalleryStyle, getGridStyle } from "./util";
import { generatePath } from '../../components/blob/util';

import AdvancedGallery from "./index";

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
	const gridItemImageStyle = gridItem.getImageStyle();
	const blobClipStyle = { clipPath: `url(#${clipPathId})` };
	const imageStyle = { ...gridItemImageStyle, ...blobClipStyle };

	return (
		<div className={ `novablocks-advanced-gallery__grid-item` } style={ gridItem.getStyle() }>
			<img className={ `novablocks-advanced-gallery__image` } style={ imageStyle } src={ gridItem.image.url } hidden />
			<svg className={ `novablocks-advanced-gallery__image` } viewBox={ '0 0 20 20' }>
				<defs>
					<clipPath id={ clipPathId }>
						<path d={ generatePath( preset, complexity, smoothness, index ) } />
					</clipPath>
				</defs>
				<image preserveAspectRatio="xMidYMid slice" clipPath={ `url(#${ clipPathId })` } height="20" width="20" xlinkHref={ gridItem.image.url } />
			</svg>
		</div>
	);
}

export default AdvancedGalleryPreview;
