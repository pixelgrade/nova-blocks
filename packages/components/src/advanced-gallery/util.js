import { debounce, isSafari } from "@novablocks/utils";
import $ from 'jquery';

export const getGalleryStyle = ( attributes ) => {
	let containerHeight = attributes.containerHeight / 50 - 1;
	let { verticalSpacing } = attributes;
	let numerator = 1;
	let denominator = 1;

	containerHeight = Math.min( Math.max( -1, containerHeight ), 1 );

	if ( containerHeight > 0 ) {
		numerator = 1 + containerHeight;
	}

	if ( containerHeight < 0 ) {
		denominator = 1 + Math.abs( containerHeight );
	}

	return {
		'--novablocks-advanced-gallery-vertical-spacing': `calc( ${ verticalSpacing * 5 } * var(--novablocks-spacing-unit, 10px) )`,
		paddingTop: `${ numerator * 100 / denominator }%`,
	}
}

export const getGridStyle = ( attributes ) => {
	const { elementsDistance } = attributes;

	return {
		'--novablocks-advanced-gallery-grid-gap': `${ elementsDistance }px`
	}
}

export const safariHeightFix = ( grid ) => {

	if ( ! isSafari ) {
		return;
	}

	const parent = grid.parentNode;
	const $grid = $( grid );
	const $parent = $( parent );

	const resetHeight = () => {
		const newHeight = $parent.outerHeight();

		$grid.css( 'height', newHeight );
	}

	const debouncedResetHeight = debounce( resetHeight, 30 );

	resetHeight();

	if ( typeof window.ResizeObserver !== "undefined" ) {
		const observer = new ResizeObserver( entries => {
			debouncedResetHeight();
		} );

		observer.observe( parent );
	} else {
		$( window ).on( 'resize', function() {
			debouncedResetHeight();
		} );
	}
}
