import $ from 'jquery';

import {
  getMediaCompositionCSSProps,
  safariHeightFix,
  GridItemCollection
} from './utils';

$( function() {

	$( '.novablocks-media-composition' ).each( ( i, gallery ) => {
		const $gallery = $( gallery );
		const $grid = $gallery.find( '.novablocks-media-composition__grid' );

		const $block = $gallery.closest( '[data-size-contrast]' );
		const attributes = $block.data();

		const images = $gallery.find( '.novablocks-media-composition__image' ).toArray();
		const gridItemsCollection = new GridItemCollection( images, attributes );

		gridItemsCollection.gridItems.map( ( gridItem, index ) => {
			let $image = $( gridItem.image ),
				$item = $image.closest( '.novablocks-media-composition__grid-item' );

			$item.css( gridItem.getStyle() );
			$image.css( gridItem.getImageStyle() );
		} );

		if ( $grid.length ) {

			const gridStyle = getMediaCompositionCSSProps( attributes );

			$grid.css( gridStyle );

			for ( let propertyName in gridStyle ) {
				if ( propertyName.indexOf( '--' ) === 0 ) {
					$grid.get( 0 ).style.setProperty( propertyName, gridStyle[propertyName] );
				}
			}
		}

	} );

	$( '.novablocks-media-composition__grid' ).each( function( i, obj ) {
		safariHeightFix( obj );
	} );

} );
