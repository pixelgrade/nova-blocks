import $ from 'jquery';
import { debounce, isSafari, getRandomBetween } from "@novablocks/utils";

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

/**
 * Returns a Duotone Presets Array.
 * @param palettes
 * @param currentPalette
 * @param currentVariation
 * @returns {array}
 */
export const generateDuotoneFromPalettes = ( palettes, currentPalette, currentVariation ) => {

  let presets = []

  const activePalettes = palettes.filter( palette => typeof palette['id'] === 'number' ),
    selectedPalette = activePalettes[currentPalette - 1];

  // Generate Duotone Presets based on current background color
  // and another color from every palette, 6 position on the right,
  // or left depending on current background color position.

  activePalettes.forEach( userPalette => {

    let colors = userPalette['colors'],
      shadows,
      highlights = selectedPalette['colors'][currentVariation - 1]['value'];

    if ( currentVariation >= 6 ) {
      shadows = colors[currentVariation - 6]['value'];
      [highlights, shadows] = [shadows, highlights];
    } else {
      shadows = colors[currentVariation + 6]['value'];
    }

    let mixPaletteColors = [shadows, highlights];

    presets.push( {
        'name': `Color ${currentVariation} and Color ${currentVariation + 6}`,
        'colors': mixPaletteColors
      }
    );

  } )

  return presets;
}
