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

const RULE_STRENGTH_COLORS = {
  subtle: 'var(--nb-rule-color)',
  strong: 'var(--nb-rule-strong-color)',
  solid: 'currentColor',
};

export const getHeaderRowLayoutStyle = ( attributes = {} ) => {
  const spacing = attributes.navigationLinkVerticalSpacing;
  const style = {};

  if ( typeof spacing === 'number' && isFinite( spacing ) && Math.round( spacing ) !== 75 ) {
    style[ '--nb-navigation-link-vertical-spacing-setting' ] = Math.round( spacing );
  }

  if ( typeof attributes.ruleWeight === 'number' && isFinite( attributes.ruleWeight ) ) {
    const ruleWeight = Math.min( 4, Math.max( 1, Math.round( attributes.ruleWeight ) ) );
    if ( 1 !== ruleWeight ) {
      style[ '--nb-header-row-rule-weight' ] = `${ ruleWeight }px`;
    }
  }

  const ruleColor = RULE_STRENGTH_COLORS[ attributes.ruleStrength ];
  if ( ruleColor && 'subtle' !== attributes.ruleStrength ) {
    style[ '--nb-header-row-rule-color' ] = ruleColor;
  }

  return style;
};
