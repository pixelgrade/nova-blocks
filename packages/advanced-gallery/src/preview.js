import { isSafari } from "@novablocks/utils";

import { useState, useEffect, useRef } from '@wordpress/element';

import { GridItemCollection } from "./grid-item";
import { getGalleryStyle, getGridStyle } from "./utils";

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
					<AdvancedGalleryItem gridItem={ item } key={ index } />
				) ) }
			</div>
		</div>
	);
};

const AdvancedGalleryItem = ( props ) => {

	const { gridItem } = props;
	const image = gridItem?.image;
	const imageURL = image?.sizes?.novablocks_medium?.url || image?.url;
	const imageCaption = image?.caption;
	const imageDescription = image?.description;
	const styles = gridItem.getImageStyle();

	if ( ! image ) {
		return;
	}

	return (
		<div className={ `novablocks-advanced-gallery__grid-item` } style={ gridItem.getStyle() }>
			<div className={ `novablocks-advanced-gallery__grid-item-media` }>
				{ image.type !== 'video' &&
				  <img className={ `novablocks-advanced-gallery__image` } src={ imageURL } alt={ image?.alt } style={ styles } /> }
				{ image.type === 'video' &&
				  <video muted autoPlay loop playsInline className={ `novablocks-advanced-gallery__image` } style={ styles } src={ image.url } /> }
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
