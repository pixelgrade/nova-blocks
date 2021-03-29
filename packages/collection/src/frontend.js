import classnames from "classnames";
import { getCardMediaPaddingTop, debounce, below } from "@novablocks/utils";

import {
	applyLayoutEngine,
} from './layout-engine';

import {
	getAreaBaseClassname,
	getAreaClassnameByAspectRatio,
	getAreaClassnameByHeightRatio,
	getAreaClassnameByWidthRatio,
	getGridStyle,
	getGridColumnsAndRows,
	redistributeCardsInAreas,
	isLandscape,
} from './utils';

(function($, window, undefined) {

	const defaultBlockWidth = 1152; // magic

  let $carousels = $( '[data-layoutstyle="carousel"]' );

	$( '.novablocks-grid' ).each( function( i, grid ) {
		const $grid = $( grid );
		const $block = $grid.closest( '.novablocks-block' );
		const $cards = $grid.closest( '.novablocks-collection__cards' );
		const $posts = $grid.children( '.novablocks-card' );
		const attributes = $grid.data();
		const cardsCount = $posts.length;

		console.log( grid );

		let addedCards;

		grid.style.setProperty( '--card-media-padding', attributes.imagepadding );
		grid.style.setProperty( '--card-media-padding-top', getCardMediaPaddingTop( attributes.thumbnailaspectratio ) );
		grid.style.setProperty( '--card-media-object-fit', attributes.imageresizing === 'cropped' ? 'cover' : 'scale-down' );

		if ( attributes.layoutstyle !== 'parametric' ) {
			$grid.removeClass( 'novablocks-grid' );
			$grid.addClass( 'novablocks-collection__layout' );
			$grid.addClass( `novablocks-grid__area--${ attributes.islandscape ? 'landscape' : 'portrait' }` );
			$grid.addClass( getAreaClassnameByWidthRatio( 1 / attributes.columns ) );

			$block.addClass( 'novablocks-block--ready' );
			return;
		}

		const $title = $block.find( '.novablocks-collection__title' ).detach();
		const $subtitle = $block.find( '.novablocks-collection__subtitle' ).detach();
		const onResize = debounce( recreateLayout, 100 );

		createLayout();

		$block.addClass( 'novablocks-block--ready' );
		$( window ).on( 'resize', onResize );

		function createLayout() {

			let blockWidth = $grid.outerWidth();

			$posts.detach();
			$grid.empty();

			$block.find( '.js-collection-element-clone' ).remove();

			addedCards = 0;

			let areaColumns = applyLayoutEngine( attributes );
			let columnsCount = areaColumns.length;
			let firstSet = Math.floor( ( columnsCount - 1 ) / 2 );
			let secondSet = columnsCount - 1 - firstSet;

			if ( below( 'lap' ) ) {

				for ( let i = 0; i < firstSet; i++ ) {
					removeSmallestColumn( areaColumns );
				}

				if ( below( 'tablet' ) ) {

					for ( let i = 0; i < secondSet; i++ ) {
						removeSmallestColumn( areaColumns );
					}
				}
			}

			normalizeColumns( areaColumns, attributes );
			redistributeCardsInAreas( areaColumns, cardsCount, attributes );

			let gridcolumns = attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns;
			let gridrows = attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows;

			let maxcolumns = areaColumns.reduce( ( acc, column ) => {
				return Math.max( acc, column.col + column.width - 1 );
			}, 0);

			let maxrows = areaColumns.reduce( ( acc, column ) => {
				return Math.max( acc, column.row + column.height - 1 );
			}, 0);

			gridcolumns = Math.min( gridcolumns, maxcolumns );
			gridrows = Math.min( gridrows, maxrows );

			const compiledAttributes = Object.assign( {}, attributes, {
				gridcolumns: attributes.flipcolsrows ? gridrows : gridcolumns,
				gridrows: attributes.flipcolsrows ? gridcolumns : gridrows,
			} );

			$grid.css( getGridStyle( compiledAttributes ) );

			if ( below( 'lap' ) || attributes.headerposition === 0 ) {
				$title.clone().addClass( 'js-collection-element-clone' ).insertBefore( $cards );
				$subtitle.clone().addClass( 'js-collection-element-clone' ).insertBefore( $cards );
			}

			for ( let i = 0; i < areaColumns.length; i++ ) {
				const areaColumn = areaColumns[i];
				const { areas, row, col, width, height } = areaColumn;

				const $column = $( '<div class="novablocks-grid__column">' );
				$column.css( 'grid-area', `${ row } / ${ col } / span ${ height } / span ${ width }` );
				$column.attr( 'data-area', `${ row } / ${ col } / span ${ height } / span ${ width }` );

				for ( let j = 0; j < areas.length; j++ ) {
					const area = areas[j];
					const blockWidthRatio = Math.min( 1, blockWidth / defaultBlockWidth );
					const areaClassName = getAreaClassname( area, attributes, blockWidthRatio );

					addedCards += area.postsCount;

					const $area = $( `<div class="${ areaClassName }">` );

					Array.from( Array( area.postsCount ).keys() ).map( i => {
						const $gridItem = $( '<div class="novablocks-grid__item">' );
						const $card = $posts.eq( addedCards - area.postsCount + i );
						const landscape = isLandscape( area, attributes );

						$card.toggleClass( 'novablocks-card--landscape', !! landscape );
						$card.toggleClass( 'novablocks-card--portrait', ! landscape );

						$card.appendTo( $gridItem );

						if ( ! below( 'lap' ) && attributes.headerposition === addedCards - area.postsCount + i + 1 ) {
							const $header = $( '<div class="novablocks-grid__item js-collection-element-clone">' );
							$title.clone().appendTo( $header );
							$subtitle.clone().appendTo( $header );
							$header.appendTo( $area );
						}

						$gridItem.appendTo( $area );
					} );

					$area.appendTo( $column );
				}

				$column.appendTo( $grid );
			}
		}

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

	} );

	function getAreaClassname( area, attributes, widthRatioMultiplier = 1 ) {
		const { width, height } = area;
		const { gridcolumns, gridrows } = getGridColumnsAndRows( attributes );

		return classnames([
			getAreaBaseClassname( area ),
			getAreaClassnameByWidthRatio( widthRatioMultiplier * width / gridcolumns ),
			getAreaClassnameByHeightRatio( height / gridrows ),
			getAreaClassnameByAspectRatio( area, attributes )
		]);

	}

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

		areaColumns.splice( indexToRemove, 1 );
	}

	function normalizeColumns( areaColumns, attributes ) {
		moveColumnsToLeft( areaColumns );
		growColumnsToRight( areaColumns, attributes );
		moveColumnsToTop( areaColumns );

		areaColumns.forEach( areaColumn => {
			areaColumn.areas.forEach( area => {
				area.col = areaColumn.col;
				area.width = areaColumn.width;
			} )
		} )
	}

	function moveColumnsToLeft( areaColumns ) {

		areaColumns.forEach( areaColumn => {
			let spaceLeft = 0;
			let movingLeft = true;

			while ( movingLeft ) {

				const overlapLeft = areaColumns.filter( compareColumn => compareColumn !== areaColumn ).some( compareColumn => {
					return ! ( areaColumn.col + areaColumn.width - 1 < compareColumn.col ||
					           areaColumn.row + areaColumn.height - 1 < compareColumn.row ||
					           areaColumn.row > compareColumn.row + compareColumn.height - 1 ||
					           areaColumn.col - ( spaceLeft + 1 ) > compareColumn.col + compareColumn.width - 1 );
				} );

				if ( overlapLeft || areaColumn.col - spaceLeft <= 1 ) {
					movingLeft = false;
				} else {
					spaceLeft++;
				}
			}

			areaColumn.col = areaColumn.col - spaceLeft;
		} );
	}

	function growColumnsToRight( areaColumns, attributes ) {
		const { gridcolumns } = attributes;

		areaColumns.forEach( areaColumn => {
			let spaceRight = 0;
			let growingRight = true;

			while ( growingRight ) {

				const overlapRight = areaColumns.filter( compareColumn => compareColumn !== areaColumn ).some( compareColumn => {
					return ! ( areaColumn.col + areaColumn.width + spaceRight < compareColumn.col ||
					           areaColumn.row + areaColumn.height - 1 < compareColumn.row ||
					           areaColumn.row > compareColumn.row + compareColumn.height - 1 ||
					           areaColumn.col > compareColumn.col + compareColumn.width - 1 );
				} );

				if ( overlapRight || areaColumn.col + areaColumn.width + spaceRight - 1 >= gridcolumns ) {
					growingRight = false;
				} else {
					spaceRight++;
				}
			}

			areaColumn.width = areaColumn.width + spaceRight;
		} );
	}

	function moveColumnsToTop( areaColumns ) {

		areaColumns.forEach( areaColumn => {
			let spaceTop = 0;
			let movingTop = true;

			while ( movingTop ) {

				const overlapTop = areaColumns.filter( compareColumn => compareColumn !== areaColumn ).some( compareColumn => {
					return ! ( areaColumn.col + areaColumn.width - 1 < compareColumn.col ||
					           areaColumn.row + areaColumn.height - 1 < compareColumn.row ||
					           areaColumn.row - ( spaceTop + 1 ) > compareColumn.row + compareColumn.height - 1 ||
					           areaColumn.col > compareColumn.col + compareColumn.width - 1 );
				} );

				if ( overlapTop || areaColumn.row - spaceTop <= 1 ) {
					movingTop = false;
				} else {
					spaceTop++;
				}
			}

			areaColumn.row = areaColumn.row - spaceTop;
		} );
	}

	function initCarousels() {

    $('.novablocks-collection--carousel .novablocks-collection__layout').each( function( i, carousel ) {

      let $carousel = $(carousel);

      const SLICK_OPTIONS = {
        slidesToShow: $carousel.data('columns' ),
        dots: $carousel.data('showpagination') === 1,
        variableWidth: $carousel.data('carousellayout') === 'variable',
        customPaging: function(slick,index) {
          return '<a>' + (index + 1) + '</a>';
        },
        infinite: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              infinite: true,
              slidesToShow: 1,
              variableWidth: false,
              centerPadding: '30px',
            }
          },
        ]
      }

      $carousel.slick(SLICK_OPTIONS);

    } );
  }

  initCarousels();

})(jQuery, window);
