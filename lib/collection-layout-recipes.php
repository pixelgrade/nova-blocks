<?php
/**
 * Generic collection layout recipe registry.
 *
 * @package NovaBlocks
 */

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
	$normalized        = [];
	$registered_ids    = [];

	foreach ( $recipes as $recipe ) {
		if ( ! is_array( $recipe ) ) {
			continue;
		}

		$id          = is_string( $recipe['id'] ?? null ) ? trim( $recipe['id'] ) : '';
		$label       = is_string( $recipe['label'] ?? null ) ? trim( $recipe['label'] ) : '';
		$base_layout = is_string( $recipe['baseLayout'] ?? null ) ? trim( $recipe['baseLayout'] ) : '';

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
			'thumbnail'    => is_string( $recipe['thumbnail'] ?? null ) && '' !== $recipe['thumbnail'] ? $recipe['thumbnail'] : $base_layout,
			'defaults'     => is_array( $recipe['defaults'] ?? null ) ? $recipe['defaults'] : [],
			'capabilities' => is_array( $recipe['capabilities'] ?? null ) ? $recipe['capabilities'] : [],
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
