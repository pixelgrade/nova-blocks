import { GridItemCollection } from "./grid-item";
import { getGalleryStyle, getGridStyle } from "./util";
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
				{ gridItemsCollection.gridItems.map( ( item ) => <AdvancedGalleryItem gridItem={ item } /> ) }
			</div>
		</div>
	);
}

const AdvancedGalleryItem = ( { gridItem } ) => {
	return (
		<div className={ `novablocks-advanced-gallery__grid-item` } style={ gridItem.getStyle() }>
			<img className={ `novablocks-advanced-gallery__image` } style={ gridItem.getImageStyle() } src={ gridItem.image.url } />
		</div>
	);
}

export default AdvancedGalleryPreview;
