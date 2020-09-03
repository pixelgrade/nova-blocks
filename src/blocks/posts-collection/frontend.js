import { getCardMediaPaddingTop } from "../../utils";
import { applyLayoutEngine } from "../../components/grid-generator/layoutEngine";
import { getGridStyle } from "../../components/grid-generator/utils";

import {
	getParametricLayoutAreaClassName,
	redistributeCardsInAreas,
	isLandscape,
} from "../../components/grid-generator/utils";

(function($, window, undefined) {

	$( '.novablocks-grid' ).each( function( i, block ) {
		const $block = $( block );
		const $posts = $block.children( '.novablocks-card' );
		const attributes = $block.data();
		const cardsCount = $posts.length;

		let areaColumns = applyLayoutEngine( attributes );
		let addedCards = 0;

		if ( attributes.layoutstyle !== 'parametric' ) {
			$block.removeClass( 'novablocks-grid' );
			$block.addClass( 'novablocks-collection__layout' );
			return;
		}

		$posts.detach();

		let gridcolumns = attributes.gridcolumns;

		if ( window.innerWidth < 1280 ) {
			gridcolumns -= removeSmallestColumn( areaColumns );

			if ( window.innerWidth < 1024 ) {
				gridcolumns -= removeSmallestColumn( areaColumns );

				if ( window.innerWidth < 768 ) {
					// collapse all areas
				}
			}
		}

		redistributeCardsInAreas( areaColumns, cardsCount, attributes );

		$block.css( getGridStyle( Object.assign( {}, attributes, { gridcolumns } ) ) );
		block.style.setProperty( '--card-media-padding', attributes.imagepadding );
		block.style.setProperty( '--card-media-padding-top', getCardMediaPaddingTop( attributes.containerheight ) );
		block.style.setProperty( '--card-media-object-fit', attributes.imageresizing === 'cropped' ? 'cover' : 'scale-down' );

		for ( let i = 0; i < areaColumns.length; i++ ) {
			const areaColumn = areaColumns[i];
			const { areas, row, col, width, height } = areaColumn;

			const $column = $( '<div class="novablocks-grid__column">' );
			$column.css( 'grid-area', `${ row } / ${ col } / span ${ height } / span ${ width }` );

			for ( let j = 0; j < areas.length; j++ ) {
				const area = areas[j];
				const areaClassName = getParametricLayoutAreaClassName( area, attributes );
				addedCards += area.postsCount;

				const $area = $( `<div class="${ areaClassName }">` );

				Array.from( Array( area.postsCount ).keys() ).map( i => {
					const $gridItem = $( '<div class="novablocks-grid__item">' );
					const $card = $posts.eq( addedCards - area.postsCount + i );
					const landscape = isLandscape( area, attributes );

					$card.toggleClass( 'novablocks-card--landscape', !! landscape );
					$card.toggleClass( 'novablocks-card--portrait', ! landscape );

					$card.appendTo( $gridItem );
					$gridItem.appendTo( $area );
				} );

				$area.appendTo( $column );
			}

			$column.appendTo( $block );
		}

	} );

	function removeSmallestColumn( areaColumns ) {

		let data = areaColumns.map( ( area, index ) => {
			return {
				area,
				index,
			}
		} );

		data.sort( ( obj1, obj2 ) => {
			return obj1.area.width - obj2.area.width;
		} );

		let indexToRemove = data[0].index;

		if ( data[0].area.nth === 1 ) {
			indexToRemove = data[data.length].index;
		}

		let colToRemove = areaColumns[indexToRemove].col;
		let widthToRemove = areaColumns[indexToRemove].width;

		console.log( indexToRemove, colToRemove, widthToRemove );
		areaColumns.splice( indexToRemove, 1 );

		for ( let i = 0; i < areaColumns.length; i++ ) {
			if ( areaColumns[i].col > colToRemove ) {
				areaColumns[i].col -= widthToRemove;
			}
		}

		return widthToRemove;
	}

})(jQuery, window);
