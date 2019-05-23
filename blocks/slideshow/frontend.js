import { debounce } from '../utils';

const BLOCK_SELECTOR = '.nova-slideshow';
const SLIDER_SELECTOR = '.nova-slideshow__slider';

(function($, window, undefined) {

	const $blocks = $( BLOCK_SELECTOR );

	$blocks.each( function( index, block ) {
		var $block = $( block ),
			$slider = $block.find( SLIDER_SELECTOR ),
			$arrowContainer;

		if ( $slider.children().length > 1 ) {
			$arrowContainer = $( '<div class="nova-slideshow__controls">' ).appendTo( $block );

			$slider.slick({
				rows: 0,
				prevArrow: '<div class="nova-slideshow__arrow nova-slideshow__arrow--prev"></div>',
				nextArrow: '<div class="nova-slideshow__arrow nova-slideshow__arrow--next"></div>',
				appendArrows: $arrowContainer,
			});
		}
	});

	function onResize() {
		$blocks.each( function( index, block ) {
			$( block ).find( SLIDER_SELECTOR ).slick( 'refresh' );
		});
	}

	$( window ).on( 'resize', debounce( onResize, 300 ) );

})(jQuery, window);