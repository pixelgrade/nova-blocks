// Divider rule between content and rail (GitHub #658), on the #668 rule model.
//
// Mirrors novablocks_get_sidecar_rule_classes() and
// novablocks_get_sidecar_rule_style_properties() (sidecar/init.php, over
// novablocks_get_rule_role_style_properties() in lib/rule-styles.php); both
// runtimes are pinned to rule-cases.json. Off (no role) emits nothing, so
// existing Sidecars stay byte-identical. The colour and weight come from the
// chosen role's tokens (--nb-rule-{role}-color / -weight); an explicit weight
// (1-4) overrides only the weight.
export const RULE_ROLES = [ 'primary', 'secondary' ];

export const getRuleRole = ( role ) => RULE_ROLES.includes( role ) ? role : '';

export const getSidecarRuleClasses = ( attributes = {} ) => {
	const role = getRuleRole( attributes.ruleRole );

	return role ? [ 'nb-sidecar--has-rule', `nb-sidecar--rule-${ role }` ] : [];
};

export const getSidecarRuleStyle = ( attributes = {} ) => {
	const role = getRuleRole( attributes.ruleRole );

	if ( ! role ) {
		return {};
	}

	const { ruleWeight } = attributes;
	const weight = typeof ruleWeight === 'number' && isFinite( ruleWeight )
		? `${ Math.min( 4, Math.max( 1, Math.round( ruleWeight ) ) ) }px`
		: `var(--nb-rule-${ role }-weight)`;

	return {
		'--nb-sidecar-rule-color': `var(--nb-rule-${ role }-color)`,
		'--nb-sidecar-rule-weight': weight,
	};
};
