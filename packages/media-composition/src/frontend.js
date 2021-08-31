import $ from 'jquery';

import {
  getGridStyle,
  safariHeightFix,
  GridItemCollection
} from './utils';

$( function() {

	$( '.novablocks-advanced-gallery' ).each( ( i, gallery ) => {

		const $gallery = $( gallery );
		const $grid = $gallery.find( '.novablocks-advanced-gallery__grid' );
		const images = $gallery.find( '.novablocks-advanced-gallery__image' ).toArray();
		const attributes = $gallery.data();
		const gridItemsCollection = new GridItemCollection( images, attributes );

		gridItemsCollection.gridItems.map( ( gridItem, index ) => {
			let $image = $( gridItem.image ),
				$item = $image.closest( '.novablocks-advanced-gallery__grid-item' );

			$item.css( gridItem.getStyle() );
			$image.css( gridItem.getImageStyle() );
		} );

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

	$( '.novablocks-advanced-gallery__grid' ).each( function( i, obj ) {
		safariHeightFix( obj );
	} );

} );
