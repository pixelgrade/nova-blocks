import { __ } from "@wordpress/i18n";

export const DEFAULT_FONT_SIZE = 'normal';

export const BLOCKS_WITH_FONT_SIZE_CONTROL = [
  'core/quote',
  'core/pullquote',
  'core/heading',
  'core/paragraph',
  'novablocks/headline'
];

export const replaceActiveFontSize = ( className, fontSize, nextFontSize ) => {

  if ( className ) {
    const regex = new RegExp( 'has-[a-z]+-font-size', 'gi' );
    className = className.replace( regex, '' ).trim();
  }

  const nextClassName = 'has-' + nextFontSize + '-font-size';

  return className ? className + ' ' + nextClassName : nextClassName;
}
