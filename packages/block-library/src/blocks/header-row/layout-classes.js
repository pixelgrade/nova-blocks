/**
 * Attribute-driven content layout classes and inline style for a Header Row.
 *
 * Default values (`row` direction, empty alignment, single navigation column,
 * link vertical spacing 75) emit nothing, so rows saved before these
 * attributes existed keep the positional first/last/center distribution.
 *
 * Mirrors `novablocks_get_header_row_layout_classes()` in `init.php`.
 */

export const getHeaderRowLayoutClassnames = ( attributes = {} ) => {
  const classes = [];

  if ( attributes.contentDirection === 'column' ) {
    classes.push( 'nb-header-row--direction-column' );
  }

  if ( [ 'start', 'center', 'end' ].includes( attributes.contentAlignment ) ) {
    classes.push( `nb-header-row--align-${ attributes.contentAlignment }` );
  }

  const columns = parseInt( attributes.navigationColumns, 10 ) || 1;
  if ( columns >= 2 ) {
    classes.push( `nb-header-row--nav-columns-${ Math.min( columns, 3 ) }` );
  }

  return classes;
};

export const getHeaderRowLayoutStyle = ( attributes = {} ) => {
  const spacing = attributes.navigationLinkVerticalSpacing;

  if ( typeof spacing === 'number' && isFinite( spacing ) && Math.round( spacing ) !== 75 ) {
    return { '--nb-navigation-link-vertical-spacing-setting': Math.round( spacing ) };
  }

  return {};
};
