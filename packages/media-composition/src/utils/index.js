import $ from 'jquery';
import { debounce, isSafari, getRandomBetween } from "@novablocks/utils";

export * from './grid-item';

export const getRandomAttributes = () => {
	return {
		arrangement: 'grid',
		sizeContrast: getRandomBetween(0, 5) * 20,
		positionShift: getRandomBetween(0, 20) * 5,
		elementsDistance: getRandomBetween(0, 5) * 20,
		placementVariation: getRandomBetween(1, 4) * 25,
		stylePreset: 'just-my-style',
	};
};

export const getMediaCompositionCSSProps = ( attributes ) => {

  const { elementsDistance, arrangement } = attributes;

  // In the "chain" arrangement `elementsDistance` is the diagonal corner gap,
  // expressed in grid units and applied per meeting corner in grid-item.js.
  // The uniform CSS grid gap — which would otherwise add a second, even spacing
  // between every track — is pinned to 0 so the chain's corners meet exactly.
  // Mirror of the PHP twin novablocks_get_media_composition_css().
  if ( arrangement === 'chain' ) {
    return {
      '--nb-media-composition-gap': '0px'
    }
  }

	return {
		'--nb-media-composition-gap': `${ elementsDistance }px`
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
