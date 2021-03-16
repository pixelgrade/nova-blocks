import $ from 'jquery';
import { normalizeImages } from "@novablocks/block-editor";
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

export const getGalleryStyle = ( attributes ) => {

	return {
		paddingTop: `${ getPaddingTopFromContainerHeight( attributes.containerHeight ) }%`,
	}
};

export const getPaddingTopFromContainerHeight = ( containerHeight ) => {
  let height = containerHeight / 50 - 1;
  let numerator = 1;
  let denominator = 1;

  height = Math.min( Math.max( -1, height ), 1 );

  if ( height > 0 ) {
    numerator = 1 + height;
  }

  if ( height < 0 ) {
    denominator = 1 + Math.abs( height );
  }

  return numerator * 100 / denominator;
}

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

const onSelectImages = ( images ) => {
  normalizeImages( images ).then( newImages => {
    setAttributes( { images: newImages } );
  } )
};

export const withOnSelectImages = ( WrappedComponent => {

  return ( props ) => {
    return <WrappedComponent { ...props } onSelectImages={ onSelectImages } />
  }

} );
