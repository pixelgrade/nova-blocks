import classnames from "classnames";
import { getCardMediaPaddingTop, debounce, below } from "../../utils";
import { applyLayoutEngine } from "../../components/grid-generator/layoutEngine";
import {
	getAreaBaseClassname, getAreaClassnameByAspectRatio,
	getAreaClassnameByHeightRatio,
	getAreaClassnameByWidthRatio,
	getGridStyle
} from "../../components/grid-generator/utils";

import {
	redistributeCardsInAreas,
	isLandscape,
} from "../../components/grid-generator/utils";

(function($, window, undefined) {

	const defaultBlockWidth = 1162; // magic

	$( '.novablocks-grid' ).each( function( i, block ) {
		const $grid = $( block );
		const $block = $grid.closest( '.novablocks-block' );
		const $posts = $grid.children( '.novablocks-card' );
		const attributes = $grid.data();
		const cardsCount = $posts.length;
		const $title = $block.find( '.novablocks-collection__title' ).detach();
		const $subtitle = $block.find( '.novablocks-collection__subtitle' ).detach();

		let addedCards;

		if ( attributes.layoutstyle !== 'parametric' ) {
			$grid.removeClass( 'novablocks-grid' );
			$grid.addClass( 'novablocks-collection__layout spanac' );
			$grid.addClass( getAreaClassnameByWidthRatio( 1 / attributes.columns ) );
			return;
		}

		block.style.setProperty( '--card-media-padding', attributes.imagepadding );
		block.style.setProperty( '--card-media-padding-top', getCardMediaPaddingTop( attributes.containerheight ) );
		block.style.setProperty( '--card-media-object-fit', attributes.imageresizing === 'cropped' ? 'cover' : 'scale-down' );

		function createLayout() {

			let gridcolumns = attributes.gridcolumns;
			let gridrows = attributes.gridrows;
			let blockWidth = $grid.outerWidth();

			$posts.detach();
			$grid.empty();

			addedCards = 0;

			let areaColumns = applyLayoutEngine( attributes );
			let columnsCount = areaColumns.length;
			let firstSet = Math.floor( ( columnsCount - 1 ) / 2 );
			let secondSet = columnsCount - 1 - firstSet;

			if ( below( 'desktop' ) ) {

				for ( let i = 0; i < firstSet; i++ ) {
					gridcolumns -= removeSmallestColumn( areaColumns );
				}

				if ( below( 'lap' ) ) {

					for ( let i = 0; i < secondSet; i++ ) {
						gridcolumns -= removeSmallestColumn( areaColumns );
					}
				}
			}

			redistributeCardsInAreas( areaColumns, cardsCount, attributes );

			$grid.css( getGridStyle( Object.assign( {}, attributes, { gridcolumns } ) ) );
			$( '.js-collection-element-clone' ).remove();

			if ( below( 'desktop' ) || attributes.headerposition === 0 ) {
				$title.clone().addClass( 'js-collection-element-clone' ).appendTo( $grid );
				$subtitle.clone().addClass( 'js-collection-element-clone' ).appendTo( $grid );
			}

			for ( let i = 0; i < areaColumns.length; i++ ) {
				const areaColumn = areaColumns[i];
				const { areas, row, col, width, height } = areaColumn;

				const $column = $( '<div class="novablocks-grid__column">' );
				$column.css( 'grid-area', `${ row } / ${ col } / span ${ height } / span ${ width }` );

				for ( let j = 0; j < areas.length; j++ ) {
					const area = areas[j];
					const blockWidthRatio = Math.min( 1, blockWidth / defaultBlockWidth );

					const areaClassName = classnames([
						getAreaBaseClassname( area ),
						getAreaClassnameByWidthRatio( blockWidthRatio * width / gridcolumns ),
						getAreaClassnameByHeightRatio( height / gridrows ),
						getAreaClassnameByAspectRatio( area, attributes )
					]);
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

						if ( attributes.headerposition === addedCards - area.postsCount + i ) {
							const $header = $( '<div class="novablocks-grid__item js-collection-element-clone">' );
							$title.clone().appendTo( $header );
							$subtitle.clone().appendTo( $header );
							$header.prependTo( $area );
						}
					} );

					$area.appendTo( $column );
				}

				$column.appendTo( $grid );
			}
		}

		createLayout();

		function recreateLayout() {
			$grid.contents().replaceWith( $posts );

			$grid.css( {
				display: '',
				gridTemplateColumns: '',
				gridTemplateRowss: '',
			} );

			$posts.removeClass( 'novablocks-card--portrait' );
			$posts.removeClass( 'novablocks-card--landscape' );

			createLayout();
		}

		const onResize = debounce( recreateLayout, 100 );

		$( window ).on( 'resize', onResize );

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

		areaColumns.splice( indexToRemove, 1 );

		for ( let i = 0; i < areaColumns.length; i++ ) {
			if ( areaColumns[i].col > colToRemove ) {
				areaColumns[i].col -= widthToRemove;
			}
		}

		return widthToRemove;
	}

})(jQuery, window);
