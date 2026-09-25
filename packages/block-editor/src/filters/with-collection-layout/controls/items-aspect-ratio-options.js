/**
 * Items Aspect Ratio — pure option data and logic (no JSX), so the contract
 * test can consume it directly.
 *
 * Two of the choices are lossless: Original sizes each media box to its own
 * picture, and Fit to Row (#627) sizes every box in a row to the row's
 * tallest picture, so nothing is cropped and captions still share one line.
 * The three preset ratios crop to a fixed box.
 */
import { __ } from '@wordpress/i18n';

export const MEDIA_ALIGN_DEFAULT = 'center center';

const PRESET_VALUES = {
  square:    { thumbnailAspectRatio: 50, thumbnailAspectRatioString: 'square', imageResizing: 'cropped' },
  landscape: { thumbnailAspectRatio: 42, thumbnailAspectRatioString: 'landscape', imageResizing: 'cropped' },
  portrait:  { thumbnailAspectRatio: 67, thumbnailAspectRatioString: 'portrait', imageResizing: 'cropped' },
  original:  { thumbnailAspectRatioString: 'original' },
  row:       { thumbnailAspectRatioString: 'row' },
};

/**
 * Fit to Row needs rows of cards whose media and caption stack: a Classic
 * grid of vertical (or vertical-reverse) cards. Masonry has no rows, and
 * stacked or side-by-side cards have no caption below the picture.
 */
export const supportsRowFitMediaBox = ( { layoutStyle, cardLayout } = {} ) => {
  return 'classic' === layoutStyle && [ 'vertical', 'vertical-reverse' ].includes( cardLayout );
};

export const getItemsAspectRatioOptions = ( attributes = {} ) => {
  const showRowFit = supportsRowFitMediaBox( attributes ) || 'row' === attributes.thumbnailAspectRatioString;

  return [
    { label: __( 'Original', '__plugin_txtd' ), value: 'original' },
    ...( showRowFit ? [ { label: __( 'Fit to Row (no crop)', '__plugin_txtd' ), value: 'row' } ] : [] ),
    { label: __( 'Square 1:1', '__plugin_txtd' ), value: 'square' },
    { label: __( 'Landscape 4:3', '__plugin_txtd' ), value: 'landscape' },
    { label: __( 'Portrait 3:4', '__plugin_txtd' ), value: 'portrait' },
  ];
};

export const detectItemsAspectRatio = ( { thumbnailAspectRatioString, thumbnailAspectRatio } = {} ) => {
  if ( 'original' === thumbnailAspectRatioString || 'row' === thumbnailAspectRatioString ) {
    return thumbnailAspectRatioString;
  }

  if ( thumbnailAspectRatio === 50 ) {
    return 'square';
  }

  if ( thumbnailAspectRatio >= 40 && thumbnailAspectRatio <= 44 ) {
    return 'landscape';
  }

  if ( thumbnailAspectRatio >= 65 && thumbnailAspectRatio <= 69 ) {
    return 'portrait';
  }

  return 'original';
};

export const getItemsAspectRatioPatch = ( value ) => PRESET_VALUES[ value ] || {};

/**
 * Media Alignment matters wherever the box and the picture can differ: a
 * fixed ratio (which part is kept) and Fit to Row (where the shorter pictures
 * sit). Original sizes the box to the picture, so it only stays visible there
 * when a value was already chosen, to keep it resettable.
 */
export const isMediaAlignRelevant = ( attributes = {} ) => {
  if ( 'original' !== attributes.thumbnailAspectRatioString ) {
    return true;
  }

  return !! attributes.mediaAlign && MEDIA_ALIGN_DEFAULT !== attributes.mediaAlign;
};
