import {
	getGalleryStyle,
	getGridStyle,
} from "../../components/advanced-gallery/util";

import { GridItemCollection } from "../../components/advanced-gallery/grid-item";

(function($, window, undefined) {

	$( '.novablocks-advanced-gallery' ).each( ( i, gallery ) => {

		let $gallery = $( gallery ),
			$grid = $gallery.find( '.novablocks-advanced-gallery__grid' ),
			images = $gallery.find( '.novablocks-advanced-gallery__image' ).toArray();

		const attributes = {
			aspect: $gallery.data( 'aspect' ),
			aspectRatio: $gallery.data( 'aspectratio' ),
			offset: $gallery.data( 'offset' ),
			scale: $gallery.data( 'scale' ),
			rotate: $gallery.data( 'rotate' ),
			orientation: $gallery.data( 'orientation' ),
			gridGap: $gallery.data( 'gridgap' ),
			verticalSpacing: $gallery.data( 'verticalspacing' ),
			objectPosition: $gallery.data( 'objectposition' ),
		};

		const gridItemsCollection = new GridItemCollection( images, attributes );

		gridItemsCollection.gridItems.map( ( gridItem, index ) => {
			let $image = $( gridItem.image ),
				$item = $image.closest( '.novablocks-advanced-gallery__grid-item' );

			$item.css( gridItem.getStyle() );
			$image.css( gridItem.getImageStyle() );
		} );

		const galleryStyle = getGalleryStyle( attributes );

		for ( let propertyName in galleryStyle ) {
			$gallery.css( galleryStyle );

			if ( propertyName.indexOf( '--' ) === 0 ) {
				gallery.style.setProperty( propertyName, galleryStyle[ propertyName ] );
			}
		}

		if ( $grid.length ) {

			const gridStyle = getGridStyle( attributes );

			$grid.css( gridStyle );

			for ( let propertyName in gridStyle ) {
				if ( propertyName.indexOf( '--' ) === 0 ) {
					$grid.get( 0 ).style.setProperty( propertyName, gridStyle[propertyName] );
				}
			}
		}
	} );

})(jQuery, window);
