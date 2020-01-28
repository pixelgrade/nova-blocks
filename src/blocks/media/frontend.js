import {
	getGalleryStyle,
	getGridStyle,
	getGridItemStyle,
	getImageStyle,
	addMetaToImagesArray,
	getStructuredImagesArray
} from "../../components/advanced-gallery/util";

(function($, window, undefined) {

	$( '.novablocks-advanced-gallery' ).each( ( i, gallery ) => {

		let $gallery = $( gallery ),
			$grid = $gallery.find( '.novablocks-advanced-gallery__grid' ),
			gridItems = $gallery.find( '.novablocks-advanced-gallery__grid-item' ).toArray(),
			structuredImagesArray = getStructuredImagesArray( gridItems );

		const attributes = {
			aspect: $gallery.data( 'aspect' ),
			aspectRatio: $gallery.data( 'aspectratio' ),
			offset: $gallery.data( 'offset' ),
			scale: $gallery.data( 'scale' ),
			rotate: $gallery.data( 'rotate' ),
			orientation: $gallery.data( 'orientation' ),
			gridGap: $gallery.data( 'gridgap' ),
		};

		$.each( structuredImagesArray, ( chunkIndex, chunk ) => {

			const chunkWithMeta = addMetaToImagesArray( chunk, attributes );

			$.each( chunkWithMeta, ( index, meta ) => {
				let { image } = meta,
					$item = $( image ),
					$image = $item.find( '.novablocks-advanced-gallery__image' );

				$item.css( getGridItemStyle( index, chunkWithMeta, attributes ) );
				$image.css( getImageStyle( index, attributes ) );
			} );
		} );

		$gallery.css( getGalleryStyle( attributes ) );
		$grid.css( getGridStyle( attributes ) );
	} );

})(jQuery, window);
