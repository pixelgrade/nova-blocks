<?php
/**
 * Contract: core Separator rule weight (pixelgrade/anima#610).
 *
 * The frontend and the editor must emit the same `--nb-separator-rule-weight`
 * for the same attributes, and the registered default must emit nothing so
 * untouched separators stay byte-identical.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['nb_separator_filters'] = [];
function add_filter( string $hook, $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['nb_separator_filters'][ $hook ][] = $callback;
	return true;
}

function nb_separator_expect( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

$root = dirname( __DIR__, 2 );
require_once $root . '/lib/rule-styles.php';
require_once $root . '/packages/core/src/blocks/core/separator/init.php';

nb_separator_expect(
	function_exists( 'novablocks_get_separator_rule_style_properties' ),
	'The separator must expose its rule style properties to the render.'
);

$attributes = json_decode( file_get_contents( $root . '/packages/core/src/blocks/core/separator/attributes.json' ), true );
nb_separator_expect(
	[ 'type' => 'number', 'default' => 3 ] === ( $attributes['ruleWeight'] ?? null ),
	'The separator must register ruleWeight with the theme default of 3 (shared by JS and PHP through attributes.json).'
);
nb_separator_expect(
	[] === novablocks_get_separator_rule_style_properties( [ 'ruleWeight' => $attributes['ruleWeight']['default'] ] ),
	'The registered default weight must emit nothing.'
);

// Same fixture as rule-style.test.js: PHP and JS must agree on every case.
$cases = json_decode( file_get_contents( $root . '/packages/core/src/blocks/core/separator/rule-weight-cases.json' ), true );
nb_separator_expect( count( $cases ) >= 8, 'The shared parity fixture must load.' );
foreach ( $cases as $case ) {
	$actual = novablocks_get_separator_rule_style_properties( $case['attributes'] );
	nb_separator_expect(
		$case['style'] === $actual,
		sprintf( 'PHP/JS parity failed for "%s": got %s', $case['label'], json_encode( $actual ) )
	);
}

// Existing rule consumers keep their one-pixel no-output default.
nb_separator_expect(
	[] === novablocks_get_rule_style_properties( [ 'ruleWeight' => 1 ], '--nb-example-rule', 'subtle' ),
	'The shared helper must keep 1 as its default weight.'
);

// The render must write the property into the separator's own style attribute.
$render_source = file_get_contents( $root . '/packages/core/src/blocks/core/separator/init.php' );
nb_separator_expect(
	false !== strpos( $render_source, 'novablocks_get_separator_rule_style_properties( $attributes )' ),
	'The separator render must apply the rule style properties.'
);

echo "separator-rule-weight-contract: all assertions passed\n";
