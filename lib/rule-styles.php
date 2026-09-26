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
 * @param int    $default_weight   Curated weight, in pixels, that emits nothing.
 * @return array<string, string>
 */
function novablocks_get_rule_style_properties( array $attributes, string $property_prefix, string $default_strength, int $default_weight = 1 ): array {
	$properties = [];

	if ( array_key_exists( 'ruleWeight', $attributes ) && is_numeric( $attributes['ruleWeight'] ) ) {
		$weight = (int) round( (float) $attributes['ruleWeight'] );
		$weight = max( 1, min( 4, $weight ) );

		if ( $default_weight !== $weight ) {
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

/**
 * Return the custom properties for a rule drawn in one of the two rule roles.
 *
 * The rule model (GitHub #668): a rule is Primary or Secondary, each role a
 * weight token plus a colour token (--nb-rule-{role}-weight / -color). An
 * explicit numeric `ruleWeight` (clamped to 1-4) overrides only the weight.
 * Numeric strings are ignored, like the editor: block JSON carries numbers.
 * No role (Off, or an unknown value) returns nothing.
 *
 * @param array  $attributes      Block attributes (`ruleRole`, `ruleWeight`).
 * @param string $property_prefix Component custom-property prefix.
 * @return array<string, string>
 */
function novablocks_get_rule_role_style_properties( array $attributes, string $property_prefix ): array {
	$role = novablocks_get_rule_role( $attributes['ruleRole'] ?? '' );

	if ( '' === $role ) {
		return [];
	}

	$weight = $attributes['ruleWeight'] ?? null;
	if ( ( is_int( $weight ) || is_float( $weight ) ) && is_finite( (float) $weight ) ) {
		$weight = max( 1, min( 4, (int) round( (float) $weight ) ) ) . 'px';
	} else {
		$weight = 'var(--nb-rule-' . $role . '-weight)';
	}

	return [
		$property_prefix . '-color'  => 'var(--nb-rule-' . $role . '-color)',
		$property_prefix . '-weight' => $weight,
	];
}

/**
 * Normalize a rule role: 'primary', 'secondary', or '' (Off).
 *
 * @param mixed $role Raw attribute value.
 * @return string
 */
function novablocks_get_rule_role( $role ): string {
	return in_array( $role, [ 'primary', 'secondary' ], true ) ? $role : '';
}
