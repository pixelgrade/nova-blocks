import { isSafari } from "../../utils";

import { GridItemCollection } from "./grid-item";
import { getGalleryStyle, getGridStyle } from "./util";
import AdvancedGallery from "./index";

const { useState, useEffect, useRef } = wp.element;

const AdvancedGalleryPreview = ( props ) => {

	const { attributes } = props;
	const gallery = ( attributes.gallery && attributes.gallery.length ) ? attributes.gallery : attributes.images;

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
					<AdvancedGalleryItem gridItem={ item } key={ index } />
				) ) }
			</div>
		</div>
	);
}

const AdvancedGalleryItem = ( { gridItem } ) => {

	const image = gridItem?.image;
	const imageURL = image?.sizes?.novablocks_medium?.url || image?.url;
	const imageCaption = image?.caption;

	return (
		<div className={ `novablocks-advanced-gallery__grid-item` } style={ gridItem.getStyle() }>
			<div className={ `novablocks-advanced-gallery__grid-item-media` } style={ gridItem.getImageStyle() }>
				<img className={ `novablocks-advanced-gallery__image` } src={ imageURL } />
			</div>
			{ typeof imageCaption === 'string' && <div className={ `novablocks-advanced-gallery__grid-item-caption` }>{ imageCaption }</div> }
		</div>
	);
};

export default AdvancedGalleryPreview;
