const RULE_STRENGTH_COLORS = {
	subtle: 'var(--nb-rule-color)',
	strong: 'var(--nb-rule-strong-color)',
	solid: 'currentColor',
};

export const getSiteTaglineRuleStyle = ( attributes = {} ) => {
	const style = {};

	if ( typeof attributes.ruleWeight === 'number' && isFinite( attributes.ruleWeight ) ) {
		const ruleWeight = Math.min( 4, Math.max( 1, Math.round( attributes.ruleWeight ) ) );
		if ( 1 !== ruleWeight ) {
			style[ '--nb-site-tagline-rule-weight' ] = `${ ruleWeight }px`;
		}
	}

	const ruleColor = RULE_STRENGTH_COLORS[ attributes.ruleStrength ];
	if ( ruleColor && 'strong' !== attributes.ruleStrength ) {
		style[ '--nb-site-tagline-rule-color' ] = ruleColor;
	}

	return style;
};
