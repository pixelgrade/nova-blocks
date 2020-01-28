import { GridItemCollection } from "./grid-item";
import { getGalleryStyle, getGridStyle } from "./util";

const AdvancedGalleryPreview = ( props ) => {

	const {
		attributes,
	} = props;

	const {
		aspect,
		aspectRatio,
		images,
		offset,
		scale,
		rotate,
		orientation,
		gridGap,
	} = attributes;

	if ( ! images || ! images.length ) {
		return false;
	}

	const gridItemsCollection = new GridItemCollection( images, attributes );

	return (
		<div className={ `novablocks-advanced-gallery` } style={ getGalleryStyle( attributes ) }>
			<div className={ `novablocks-advanced-gallery__grid` } style={ getGridStyle( attributes ) }>
				{
					gridItemsCollection.gridItems.map( ( gridItem, index ) => {

						return (
							<div
								className={ `novablocks-advanced-gallery__grid-item` }
								style={ gridItem.getStyle() }
							>
								<img
									className={ `novablocks-advanced-gallery__image` }
									src={ gridItem.image.url }
									style={ gridItem.getImageStyle() }
								/>
							</div>
						);

					} )
				}
			</div>
		</div>
	);
}

export default AdvancedGalleryPreview;
