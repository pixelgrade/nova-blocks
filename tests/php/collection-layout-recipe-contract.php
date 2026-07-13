<?php
/**
 * Contract for theme-registered collection layout recipes.
 *
 * Run standalone: php tests/php/collection-layout-recipe-contract.php
 */

function add_filter() {}

function apply_filters( $hook, $value, ...$args ) {
	if ( 'novablocks_collection_layout_recipes' === $hook ) {
		return [
			[
				'id'           => 'anima-collage',
				'label'        => 'Collage Grid',
				'baseLayout'   => 'masonry',
				'thumbnail'    => 'masonry',
				'defaults'     => [ 'columns' => 4 ],
				'capabilities' => [
					'headerIntegration' => true,
					'linkedPostMetadata' => true,
					'readMoreAffordance' => true,
				],
			],
			[
				'id'         => 'anima-collage',
				'label'      => 'Duplicate recipe',
				'baseLayout' => 'parametric',
			],
			[
				'id'         => 'unsafe recipe<script>',
				'label'      => 'Unsafe recipe',
				'baseLayout' => 'masonry',
			],
			[
				'id'         => 'unsupported-layout',
				'label'      => 'Unsupported layout',
				'baseLayout' => 'collage',
			],
		];
	}

	if ( 'novablocks/card_metadata_style_default' === $hook ) {
		return 'accent-label';
	}

	return $value;
}

function sanitize_html_class( $value ) {
	$value = preg_replace( '|%[a-fA-F0-9][a-fA-F0-9]|', '', $value );

	return preg_replace( '/[^A-Za-z0-9_-]/', '', $value );
}

function sanitize_key( $value ) {
	return preg_replace( '/[^a-z0-9_\-]/', '', strtolower( $value ) );
}

require_once __DIR__ . '/../../lib/block-rendering.php';

if ( ! function_exists( 'novablocks_get_collection_layout_recipes' ) ) {
	throw new RuntimeException( 'Expected an authoritative PHP collection layout recipe registry.' );
}

if ( ! function_exists( 'novablocks_get_collection_layout_recipe' ) ) {
	throw new RuntimeException( 'Expected a collection layout recipe lookup helper.' );
}

if ( ! function_exists( 'novablocks_collection_layout_recipe_supports' ) ) {
	throw new RuntimeException( 'Expected a collection layout recipe capability helper.' );
}

if ( ! function_exists( 'novablocks_get_collection_layout_recipe_classes' ) ) {
	throw new RuntimeException( 'Expected a collection layout recipe class helper.' );
}

$recipes = novablocks_get_collection_layout_recipes();
if ( 1 !== count( $recipes )
	|| 'anima-collage' !== ( $recipes[0]['id'] ?? null )
	|| 'masonry' !== ( $recipes[0]['baseLayout'] ?? null )
	|| 'Collage Grid' !== ( $recipes[0]['label'] ?? null ) ) {
	throw new RuntimeException( 'Registry must reject invalid recipes and keep the first valid recipe for duplicate IDs.' );
}

$recipe = novablocks_get_collection_layout_recipe( 'anima-collage' );
if ( 'anima-collage' !== ( $recipe['id'] ?? null ) ) {
	throw new RuntimeException( 'Expected lookup to resolve a registered recipe.' );
}

if ( null !== novablocks_get_collection_layout_recipe( 'missing-recipe' ) ) {
	throw new RuntimeException( 'Unknown recipe IDs must fail closed.' );
}

$registered_attributes = [
	'layoutStyle'  => 'masonry',
	'layoutRecipe' => 'anima-collage',
];

if ( ! novablocks_collection_layout_recipe_supports( $registered_attributes, 'headerIntegration' )
	|| ! novablocks_collection_layout_recipe_supports( $registered_attributes, 'linkedPostMetadata' )
	|| ! novablocks_collection_layout_recipe_supports( $registered_attributes, 'readMoreAffordance' )
	|| novablocks_collection_layout_recipe_supports( $registered_attributes, 'unknownCapability' )
	|| novablocks_collection_layout_recipe_supports( [ 'layoutRecipe' => 'missing-recipe' ], 'headerIntegration' ) ) {
	throw new RuntimeException( 'Recipe capabilities must resolve only from an authoritative registered recipe.' );
}

$classes = novablocks_get_collection_layout_recipe_classes(
	[
		'layoutStyle'  => 'masonry',
		'layoutRecipe' => 'anima-collage',
		'gridGap'      => 35,
		'pile3dEffect' => true,
	]
);

if ( [ 'nb-supernova--layout-recipe-anima-collage' ] !== $classes ) {
	throw new RuntimeException( 'Expected one registered recipe class independent from the Masonry engine.' );
}

if ( [] !== novablocks_get_collection_layout_recipe_classes( [ 'layoutRecipe' => 'missing-recipe' ] )
	|| [] !== novablocks_get_collection_layout_recipe_classes( [ 'layoutRecipe' => 'anima-collage<script>' ] ) ) {
	throw new RuntimeException( 'Unknown or malformed recipes must preserve legacy class markup.' );
}

if ( [] !== novablocks_get_collection_layout_recipe_classes( [ 'layoutRecipe' => '' ] ) ) {
	throw new RuntimeException( 'The default recipe must not add a class.' );
}

if ( [] !== novablocks_get_card_metadata_style_classes( [ 'cardMetadataStyle' => 'inherit' ] ) ) {
	throw new RuntimeException( 'Legacy Collections must remain Plain when the new metadata-style attribute is only its inherited default.' );
}

if ( [ 'nb-supernova--card-metadata-style-accent-label' ] !== novablocks_get_card_metadata_style_classes(
	[
		'layoutStyle'      => 'masonry',
		'layoutRecipe'     => 'anima-collage',
		'cardMetadataStyle' => 'inherit',
	]
) ) {
	throw new RuntimeException( 'A registered recipe may resolve its inherited metadata style through the theme default filter.' );
}

if ( [ 'nb-supernova--card-metadata-style-accent-label' ] !== novablocks_get_card_metadata_style_classes( [ 'cardMetadataStyle' => 'accent-label' ] ) ) {
	throw new RuntimeException( 'Explicit Accent Label metadata style must emit its presentation class.' );
}

if ( [] !== novablocks_get_card_metadata_style_classes( [ 'cardMetadataStyle' => 'accent-label<script>' ] ) ) {
	throw new RuntimeException( 'Unknown card metadata styles must fail safely to Plain.' );
}

if ( [] !== novablocks_get_card_metadata_style_classes( [ 'cardMetadataStyle' => 'plain' ] ) ) {
	throw new RuntimeException( 'Explicit Plain metadata style must override an Accent Label site default.' );
}

$card_details_attributes = json_decode( file_get_contents( __DIR__ . '/../../packages/block-editor/src/filters/with-card-details/attributes.json' ), true );
if ( 'inherit' !== ( $card_details_attributes['cardMetadataStyle']['default'] ?? null ) ) {
	throw new RuntimeException( 'Card metadata style must default to the site-wide setting.' );
}

$editor_settings_source = file_get_contents( __DIR__ . '/../../lib/block-editor-settings.php' );
if ( false === strpos( $editor_settings_source, "'collectionLayoutRecipes'" )
	|| false === strpos( $editor_settings_source, 'novablocks_get_collection_layout_recipes()' ) ) {
	throw new RuntimeException( 'Editor settings must derive collectionLayoutRecipes from the authoritative PHP registry.' );
}

$attributes = [
	'layoutStyle'        => 'masonry',
	'layoutRecipe'       => 'anima-collage',
	'columns'            => 4,
	'gridGap'            => 35,
	'verticalGapModifier' => 1.5,
	'pile3dEffect'       => true,
	'pile3dTarget'       => 'item',
	'pile3dTargetRule'   => 'odd',
	'cardLayout'         => 'stacked',
];

$css = novablocks_get_collection_layout_css( $attributes );

if ( ! in_array( '--nb-grid-spacing-modifier: 35', $css, true )
	|| ! in_array( '--nb-grid-row-spacing-multiplier: 1.5', $css, true )
	|| ! in_array( '--nb-pile-3d-scale: 0.82', $css, true ) ) {
	throw new RuntimeException( 'A recipe must preserve authored gap, vertical rhythm, and Masonry 3D behavior.' );
}

$supernova_source = file_get_contents( __DIR__ . '/../../packages/block-library/src/blocks/supernova/init.php' );
if ( false === strpos( $supernova_source, 'novablocks_get_supernova_data_attribute_names' ) ) {
	throw new RuntimeException( 'Supernova rendering must explicitly suppress inactive recipe defaults from legacy root markup.' );
}

$legacy_data_attributes = novablocks_get_supernova_data_attribute_names(
	[
		'columns'            => 4,
		'layoutStyle'        => 'masonry',
		'layoutRecipe'       => '',
		'headerIntegration'  => 'standard',
		'columnsFitMinWidth' => 0,
		'cardHoverEffect'    => 'none',
		'cardMetadataStyle'  => 'inherit',
	]
);

if ( [ 'columns', 'layoutStyle' ] !== $legacy_data_attributes ) {
	throw new RuntimeException( 'Legacy Collection data attribute names must remain exactly unchanged by inactive recipe defaults.' );
}

foreach ( [ 'layoutRecipe', 'headerIntegration', 'columnsFitMinWidth', 'cardHoverEffect', 'cardMetadataStyle' ] as $new_default_attribute ) {
	if ( in_array( $new_default_attribute, $legacy_data_attributes, true ) ) {
		throw new RuntimeException( sprintf( 'Legacy root markup must not gain data-%s from an inactive default.', $new_default_attribute ) );
	}
}

$active_data_attributes = novablocks_get_supernova_data_attribute_names(
	[
		'layoutStyle'        => 'masonry',
		'layoutRecipe'       => 'anima-collage',
		'headerIntegration'  => 'grid-item',
		'columnsFitMinWidth' => 300,
		'cardHoverEffect'    => 'reveal',
		'cardMetadataStyle'  => 'accent-label',
	]
);

foreach ( [ 'layoutRecipe', 'headerIntegration', 'columnsFitMinWidth', 'cardHoverEffect', 'cardMetadataStyle' ] as $active_attribute ) {
	if ( ! in_array( $active_attribute, $active_data_attributes, true ) ) {
		throw new RuntimeException( sprintf( 'An active recipe value must emit data-%s.', $active_attribute ) );
	}
}

echo "collection layout recipe contract ok\n";
