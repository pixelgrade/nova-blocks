<?php
/**
 * Shared semantic rule style helpers.
 *
 * @package Nova_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Return safe component custom properties for authored rule controls.
 *
 * Curated defaults emit nothing and keep consuming the shared Nova tokens.
 * Components choose their default strength while the user can select another
 * semantic role without persisting an arbitrary color.
 *
 * @param array  $attributes       Block attributes.
 * @param string $property_prefix  Component custom-property prefix.
 * @param string $default_strength Curated strength for the component.
 * @return array<string, string>
 */
function novablocks_get_rule_style_properties( array $attributes, string $property_prefix, string $default_strength ): array {
	$properties = [];

	if ( array_key_exists( 'ruleWeight', $attributes ) && is_numeric( $attributes['ruleWeight'] ) ) {
		$weight = (int) round( (float) $attributes['ruleWeight'] );
		$weight = max( 1, min( 4, $weight ) );

		if ( 1 !== $weight ) {
			$properties[ $property_prefix . '-weight' ] = $weight . 'px';
		}
	}

	$strength = $attributes['ruleStrength'] ?? $default_strength;
	$colors   = [
		'subtle' => 'var(--nb-rule-color)',
		'strong' => 'var(--nb-rule-strong-color)',
		'solid'  => 'currentColor',
	];

	if ( isset( $colors[ $strength ] ) && $default_strength !== $strength ) {
		$properties[ $property_prefix . '-color' ] = $colors[ $strength ];
	}

	return $properties;
}
