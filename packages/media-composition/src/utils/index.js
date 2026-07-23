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

export const getMediaCompositionCSSProps = ( attributes ) => {

  const { elementsDistance, stylePreset } = attributes;

  // The Editorial Pair preset reinterprets `elementsDistance` as a diagonal
  // corner offset expressed in grid units (see grid-item.js), so the CSS gap
  // — which would otherwise add a second, uniform spacing between every track
  // — is pinned to 0 to keep the pair's corners meeting exactly. Mirror of the
  // PHP twin novablocks_get_media_composition_css().
  if ( stylePreset === 'editorial-pair' ) {
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
