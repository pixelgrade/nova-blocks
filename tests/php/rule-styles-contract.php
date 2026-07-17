<?php
/**
 * Contract: shared semantic rule style normalization.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

function nb_rule_expect( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

$integration_file = __DIR__ . '/../../lib/rule-styles.php';
nb_rule_expect( file_exists( $integration_file ), 'The shared rule style integration must exist.' );
require_once $integration_file;

nb_rule_expect(
	[] === novablocks_get_rule_style_properties( [], '--nb-example-rule', 'subtle' ),
	'Missing attributes must preserve shared token defaults.'
);
nb_rule_expect(
	[
		'--nb-example-rule-weight' => '2px',
		'--nb-example-rule-color'  => 'var(--nb-rule-strong-color)',
	] === novablocks_get_rule_style_properties(
		[ 'ruleWeight' => 2, 'ruleStrength' => 'strong' ],
		'--nb-example-rule',
		'subtle'
	),
	'Strong authored rules must map to Nova semantic mechanics.'
);
nb_rule_expect(
	[
		'--nb-example-rule-weight' => '4px',
		'--nb-example-rule-color'  => 'currentColor',
	] === novablocks_get_rule_style_properties(
		[ 'ruleWeight' => 20, 'ruleStrength' => 'solid' ],
		'--nb-example-rule',
		'strong'
	),
	'Rule weights must clamp and Solid must remain currentColor-based.'
);
nb_rule_expect(
	[] === novablocks_get_rule_style_properties(
		[ 'ruleWeight' => 'heavy', 'ruleStrength' => 'unknown' ],
		'--nb-example-rule',
		'strong'
	),
	'Invalid authored values must not reach CSS.'
);

echo "rule-styles-contract: all assertions passed\n";
