<?php
/**
 * Generic collection layout recipe registry.
 *
 * @package NovaBlocks
 */

/**
 * Normalizes the options of a recipe-declared radio control.
 *
 * @param mixed $options Candidate options.
 * @return array Safe radio options.
 */
function novablocks_normalize_collection_layout_recipe_fine_tune_options( $options ): array {
	if ( ! is_array( $options ) ) {
		return [];
	}

	$normalized        = [];
	$registered_values = [];

	foreach ( $options as $option ) {
		if ( ! is_array( $option ) ) {
			continue;
		}

		$label = is_string( $option['label'] ?? null ) ? trim( $option['label'] ) : '';
		$value = $option['value'] ?? null;

		if ( '' === $label || ( ! is_string( $value ) && ! is_int( $value ) && ! is_float( $value ) ) ) {
			continue;
		}

		$value_key = gettype( $value ) . ':' . (string) $value;
		if ( isset( $registered_values[ $value_key ] ) ) {
			continue;
		}

		$registered_values[ $value_key ] = true;
		$normalized[]                    = [
			'label' => $label,
			'value' => $value,
		];
	}

	return $normalized;
}

/**
 * Normalizes one data-only recipe Fine-tune control.
 *
 * @param mixed $control Candidate control.
 * @return array|null Safe control, or null when unsupported.
 */
function novablocks_normalize_collection_layout_recipe_fine_tune_control( $control ): ?array {
	if ( ! is_array( $control ) ) {
		return null;
	}

	$attribute = is_string( $control['attribute'] ?? null ) ? trim( $control['attribute'] ) : '';
	$type      = is_string( $control['type'] ?? null ) ? trim( $control['type'] ) : '';
	$label     = is_string( $control['label'] ?? null ) ? trim( $control['label'] ) : '';
	$help      = is_string( $control['help'] ?? null ) ? trim( $control['help'] ) : '';

	if ( ! preg_match( '/^[a-z][A-Za-z0-9]*$/', $attribute )
		|| ! in_array( $type, [ 'radio', 'range' ], true )
		|| '' === $label ) {
		return null;
	}

	if ( 'radio' === $type ) {
		$options = novablocks_normalize_collection_layout_recipe_fine_tune_options( $control['options'] ?? null );

		if ( count( $options ) < 2 ) {
			return null;
		}

		return [
			'attribute' => $attribute,
			'type'      => $type,
			'label'     => $label,
			'help'      => $help,
			'options'   => $options,
		];
	}

	if ( ! is_numeric( $control['min'] ?? null ) || ! is_numeric( $control['max'] ?? null ) ) {
		return null;
	}

	$min  = 0 + $control['min'];
	$max  = 0 + $control['max'];
	$step = isset( $control['step'] ) && is_numeric( $control['step'] ) ? 0 + $control['step'] : 1;

	if ( $min > $max || $step <= 0 ) {
		return null;
	}

	return [
		'attribute' => $attribute,
		'type'      => $type,
		'label'     => $label,
		'help'      => $help,
		'min'       => $min,
		'max'       => $max,
		'step'      => $step,
	];
}

/**
 * Normalizes data-only Fine-tune groups declared by a collection recipe.
 *
 * @param mixed $groups Candidate groups.
 * @return array Safe Fine-tune groups.
 */
function novablocks_normalize_collection_layout_recipe_fine_tune( $groups ): array {
	if ( ! is_array( $groups ) ) {
		return [];
	}

	$normalized            = [];
	$registered_attributes = [];

	foreach ( $groups as $group ) {
		if ( ! is_array( $group ) ) {
			continue;
		}

		$label = is_string( $group['label'] ?? null ) ? trim( $group['label'] ) : '';
		if ( '' === $label || ! is_array( $group['controls'] ?? null ) ) {
			continue;
		}

		$controls = [];
		foreach ( $group['controls'] as $control ) {
			$normalized_control = novablocks_normalize_collection_layout_recipe_fine_tune_control( $control );

			if ( null === $normalized_control || isset( $registered_attributes[ $normalized_control['attribute'] ] ) ) {
				continue;
			}

			$registered_attributes[ $normalized_control['attribute'] ] = true;
			$controls[]                                                   = $normalized_control;
		}

		if ( ! empty( $controls ) ) {
			$normalized[] = [
				'label'    => $label,
				'controls' => $controls,
			];
		}
	}

	return $normalized;
}

/**
 * Returns normalized theme/plugin collection layout recipes.
 *
 * @return array Registered recipes.
 */
function novablocks_get_collection_layout_recipes(): array {
	$recipes = apply_filters( 'novablocks_collection_layout_recipes', [] );

	if ( ! is_array( $recipes ) ) {
		return [];
	}

	$supported_layouts = [ 'classic', 'masonry', 'carousel', 'parametric' ];
	$supported_strategies = [ 'lattice' ];
	$normalized        = [];
	$registered_ids    = [];

	foreach ( $recipes as $recipe ) {
		if ( ! is_array( $recipe ) ) {
			continue;
		}

		$id          = is_string( $recipe['id'] ?? null ) ? trim( $recipe['id'] ) : '';
		$label       = is_string( $recipe['label'] ?? null ) ? trim( $recipe['label'] ) : '';
		$base_layout = is_string( $recipe['baseLayout'] ?? null ) ? trim( $recipe['baseLayout'] ) : '';
		$layout_strategy = is_string( $recipe['layoutStrategy'] ?? null ) ? trim( $recipe['layoutStrategy'] ) : '';

		if ( ! preg_match( '/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $id )
			|| '' === $label
			|| ! in_array( $base_layout, $supported_layouts, true )
			|| isset( $registered_ids[ $id ] ) ) {
			continue;
		}

		$normalized[] = [
			'id'           => $id,
			'label'        => $label,
			'baseLayout'   => $base_layout,
			'layoutStrategy' => in_array( $layout_strategy, $supported_strategies, true ) ? $layout_strategy : '',
			'thumbnail'    => is_string( $recipe['thumbnail'] ?? null ) && '' !== $recipe['thumbnail'] ? $recipe['thumbnail'] : $base_layout,
			'defaults'     => is_array( $recipe['defaults'] ?? null ) ? $recipe['defaults'] : [],
			'capabilities' => is_array( $recipe['capabilities'] ?? null ) ? $recipe['capabilities'] : [],
			'fineTune'     => novablocks_normalize_collection_layout_recipe_fine_tune( $recipe['fineTune'] ?? null ),
			'gateId'       => is_string( $recipe['gateId'] ?? null ) ? $recipe['gateId'] : '',
		];
		$registered_ids[ $id ] = true;
	}

	return $normalized;
}

/**
 * Returns one registered collection layout recipe.
 *
 * @param string $recipe_id Recipe identifier.
 * @return array|null Registered recipe, or null when unknown.
 */
function novablocks_get_collection_layout_recipe( string $recipe_id ): ?array {
	foreach ( novablocks_get_collection_layout_recipes() as $recipe ) {
		if ( $recipe_id === $recipe['id'] ) {
			return $recipe;
		}
	}

	return null;
}

/**
 * Returns the registered recipe active for collection attributes.
 *
 * @param array $attributes Collection attributes.
 * @return array|null Active recipe, or null for unknown/mismatched recipes.
 */
function novablocks_get_active_collection_layout_recipe( array $attributes ): ?array {
	$recipe_id = is_string( $attributes['layoutRecipe'] ?? null ) ? $attributes['layoutRecipe'] : '';
	$recipe    = novablocks_get_collection_layout_recipe( $recipe_id );

	if ( null === $recipe ) {
		return null;
	}

	if ( isset( $attributes['layoutStyle'] ) && $recipe['baseLayout'] !== $attributes['layoutStyle'] ) {
		return null;
	}

	return $recipe;
}

/**
 * Returns the placement strategy declared by the active registered recipe.
 *
 * @param array $attributes Collection attributes.
 * @return string Supported strategy name, or an empty string for the base layout.
 */
function novablocks_get_collection_layout_strategy( array $attributes ): string {
	$recipe = novablocks_get_active_collection_layout_recipe( $attributes );

	return is_array( $recipe ) ? (string) ( $recipe['layoutStrategy'] ?? '' ) : '';
}

/**
 * Checks whether the active recipe declares a capability.
 *
 * @param array  $attributes Collection attributes.
 * @param string $capability Capability key.
 * @return bool Whether the capability is enabled.
 */
function novablocks_collection_layout_recipe_supports( array $attributes, string $capability ): bool {
	$recipe = novablocks_get_active_collection_layout_recipe( $attributes );

	return null !== $recipe && ! empty( $recipe['capabilities'][ $capability ] );
}
