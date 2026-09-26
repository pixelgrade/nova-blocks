// Rule weight for lined separator styles (pixelgrade/anima#610).
//
// Mirrors novablocks_get_separator_rule_style_properties() in init.php; both
// are pinned to rule-weight-cases.json. The registered default (3, the theme's
// line thickness) emits nothing, and no rule colour is ever emitted because the
// separator's colour belongs to Color Signal.
import attributes from './attributes.json';

const DEFAULT_RULE_WEIGHT = attributes.ruleWeight.default;

// Styles that draw a line: Simple (one rule) and Elaborate (lines + arrows,
// whose arrowheads scale with the line). Decorative draws only the symbol,
// Blank draws nothing, and Grade ramp paints its own band.
export const SEPARATOR_RULE_WEIGHT_STYLES = [ 'simple', 'elaborate' ];

export const hasSeparatorRuleWeight = ( className = '' ) => {
	const classes = ( className || '' ).split( /\s+/ );
	return SEPARATOR_RULE_WEIGHT_STYLES.some( style => classes.includes( `is-style-${ style }` ) );
};

export const getSeparatorRuleStyle = ( { ruleWeight } = {} ) => {
	if ( typeof ruleWeight !== 'number' || ! isFinite( ruleWeight ) ) {
		return {};
	}

	const weight = Math.min( 4, Math.max( 1, Math.round( ruleWeight ) ) );

	return weight === DEFAULT_RULE_WEIGHT ? {} : { '--nb-separator-rule-weight': `${ weight }px` };
};
