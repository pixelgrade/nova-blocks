import $ from 'jquery';
import { debounce, isSafari, getRandomBetween } from "@novablocks/utils";

export * from './grid-item';

export const getRandomAttributes = () => {
	return {
		sizeContrast: getRandomBetween(0, 5) * 20,
		positionShift: getRandomBetween(0, 20) * 5,
		elementsDistance: getRandomBetween(0, 5) * 20,
		placementVariation: getRandomBetween(1, 4) * 25,
		stylePreset: 'just-my-style',
	};
};

export const getGridStyle = ( attributes ) => {

  const { elementsDistance } = attributes;

	return {
		'--novablocks-advanced-gallery-grid-gap': `${ elementsDistance }px`
	}
};

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
	};

	const debouncedResetHeight = debounce( resetHeight, 30 );

	resetHeight();

	if ( typeof window.ResizeObserver !== "undefined" ) {
		const observer = new window.ResizeObserver( entries => {
			debouncedResetHeight();
		} );

		observer.observe( parent );
	} else {
		$( window ).on( 'resize', function() {
			debouncedResetHeight();
		} );
	}
};
