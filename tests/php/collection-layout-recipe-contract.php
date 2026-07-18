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
				'id'             => 'anima-lattice',
				'label'          => 'Lattice',
				'baseLayout'     => 'classic',
				'layoutStrategy' => 'lattice',
				'thumbnail'      => 'lattice',
				'defaults'       => [ 'columns' => 5 ],
				'fineTune'       => [
					[
						'label'    => 'Lattice Anatomy',
						'controls' => [
							[
								'attribute' => 'latticeModuleShape',
								'type'      => 'radio',
								'label'     => 'Module Shape',
								'options'   => [
									[ 'label' => 'Portrait 3:4', 'value' => 'portrait' ],
									[ 'label' => 'Square 1:1', 'value' => 'square' ],
								],
							],
							[
								'attribute' => 'latticePackingWindow',
								'type'      => 'range',
								'label'     => 'Packing Flexibility',
								'min'       => 0,
								'max'       => 6,
								'step'      => 1,
							],
							[
								'attribute' => 'unsafe attribute',
								'type'      => 'component',
								'label'     => 'Unsafe',
							],
						],
					],
				],
			],
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
			[
				'id'             => 'unsafe-strategy',
				'label'          => 'Unsafe strategy',
				'baseLayout'     => 'classic',
				'layoutStrategy' => 'masonry<script>',
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
if ( 3 !== count( $recipes )
	|| 'anima-lattice' !== ( $recipes[0]['id'] ?? null )
	|| 'lattice' !== ( $recipes[0]['layoutStrategy'] ?? null )
	|| 'anima-collage' !== ( $recipes[1]['id'] ?? null )
	|| 'masonry' !== ( $recipes[1]['baseLayout'] ?? null )
	|| 'Collage Grid' !== ( $recipes[1]['label'] ?? null )
	|| '' !== ( $recipes[2]['layoutStrategy'] ?? null ) ) {
	throw new RuntimeException( 'Registry must reject invalid recipes and keep the first valid recipe for duplicate IDs.' );
}

$fine_tune = $recipes[0]['fineTune'] ?? [];
if ( 1 !== count( $fine_tune )
	|| 'Lattice Anatomy' !== ( $fine_tune[0]['label'] ?? null )
	|| 2 !== count( $fine_tune[0]['controls'] ?? [] )
	|| 'latticeModuleShape' !== ( $fine_tune[0]['controls'][0]['attribute'] ?? null )
	|| 'radio' !== ( $fine_tune[0]['controls'][0]['type'] ?? null )
	|| 'latticePackingWindow' !== ( $fine_tune[0]['controls'][1]['attribute'] ?? null )
	|| 6 !== ( $fine_tune[0]['controls'][1]['max'] ?? null ) ) {
	throw new RuntimeException( 'Recipe Fine-tune groups must be normalized as safe data-only controls.' );
}

if ( ! function_exists( 'novablocks_get_collection_layout_strategy' ) ) {
	throw new RuntimeException( 'Expected an authoritative collection layout strategy helper.' );
}

if ( 'lattice' !== novablocks_get_collection_layout_strategy(
	[
		'layoutStyle'  => 'classic',
		'layoutRecipe' => 'anima-lattice',
	]
) ) {
	throw new RuntimeException( 'The active Lattice recipe must project its registered placement strategy.' );
}

if ( '' !== novablocks_get_collection_layout_strategy(
	[
		'layoutStyle'  => 'classic',
		'layoutRecipe' => 'unsafe-strategy',
	]
) || '' !== novablocks_get_collection_layout_strategy(
	[
		'layoutStyle'  => 'masonry',
		'layoutRecipe' => 'anima-lattice',
	]
) ) {
	throw new RuntimeException( 'Unknown strategies and recipe/base-layout mismatches must preserve Classic fallback behavior.' );
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

$layout_attributes = json_decode( file_get_contents( __DIR__ . '/../../packages/block-editor/src/filters/with-collection-layout/attributes.json' ), true );
foreach ( [
	'latticeModuleShape'       => 'portrait',
	'latticePackingWindow'     => 3,
	'latticeStickyFeatureSize' => 2,
	'latticeTallMediaSpan'     => 2,
	'latticePanoramaSpan'      => 3,
	'latticeLandscapeSpan'     => 2,
	'latticePortraitSpan'      => 1,
	'latticeTextPlateSpan'     => 1,
	'latticeQuoteSpan'         => 2,
] as $attribute => $default ) {
	if ( $default !== ( $layout_attributes[ $attribute ]['default'] ?? null ) ) {
		throw new RuntimeException( 'Missing stable Lattice engine attribute default: ' . $attribute );
	}
}

$editor_settings_source = file_get_contents( __DIR__ . '/../../lib/block-editor-settings.php' );
if ( false === strpos( $editor_settings_source, "'collectionLayoutRecipes'" )
	|| false === strpos( $editor_settings_source, 'novablocks_get_collection_layout_recipes()' ) ) {
	throw new RuntimeException( 'Editor settings must derive collectionLayoutRecipes from the authoritative PHP registry.' );
}

if ( false === strpos( $editor_settings_source, "'postFormatCardBlueprints'" )
	|| false === strpos( $editor_settings_source, 'novablocks_get_post_format_card_blueprint_editor_settings()' ) ) {
	throw new RuntimeException( 'Editor settings must expose the theme-resolved post-format card blueprints.' );
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

if ( false === strpos( $supernova_source, 'novablocks_get_collection_layout_strategy' )
	|| false === strpos( $supernova_source, 'data-layout-strategy' ) ) {
	throw new RuntimeException( 'Supernova rendering must project an active registered placement strategy block-locally.' );
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
		'latticeModuleShape' => 'portrait',
		'latticePackingWindow' => 3,
		'latticeStickyFeatureSize' => 2,
		'latticeTallMediaSpan' => 2,
		'latticePanoramaSpan' => 3,
		'latticeLandscapeSpan' => 2,
		'latticePortraitSpan' => 1,
		'latticeTextPlateSpan' => 1,
		'latticeQuoteSpan' => 2,
	]
);

if ( [ 'columns', 'layoutStyle' ] !== $legacy_data_attributes ) {
	throw new RuntimeException( 'Legacy Collection data attribute names must remain exactly unchanged by inactive recipe defaults.' );
}

foreach ( [ 'layoutRecipe', 'headerIntegration', 'columnsFitMinWidth', 'cardHoverEffect', 'cardMetadataStyle', 'latticeModuleShape', 'latticePackingWindow', 'latticeStickyFeatureSize', 'latticeTallMediaSpan', 'latticePanoramaSpan', 'latticeLandscapeSpan', 'latticePortraitSpan', 'latticeTextPlateSpan', 'latticeQuoteSpan' ] as $new_default_attribute ) {
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

$lattice_data_attributes = novablocks_get_supernova_data_attribute_names(
	[
		'layoutStyle'               => 'classic',
		'layoutRecipe'              => 'anima-lattice',
		'latticeModuleShape'        => 'square',
		'latticeLandscapeSpan'      => 1,
		'latticePortraitSpan'       => 2,
		'latticeTextPlateSpan'      => 2,
		'latticeQuoteSpan'          => 1,
	]
);

foreach ( [ 'latticeModuleShape', 'latticeLandscapeSpan', 'latticePortraitSpan', 'latticeTextPlateSpan', 'latticeQuoteSpan' ] as $lattice_attribute ) {
	if ( ! in_array( $lattice_attribute, $lattice_data_attributes, true ) ) {
		throw new RuntimeException( sprintf( 'An active Lattice recipe must emit data-%s.', $lattice_attribute ) );
	}
}

foreach ( [ 'latticePackingWindow', 'latticeStickyFeatureSize', 'latticeTallMediaSpan', 'latticePanoramaSpan' ] as $retired_lattice_attribute ) {
	if ( in_array( $retired_lattice_attribute, $lattice_data_attributes, true ) ) {
		throw new RuntimeException( sprintf( 'Retired Lattice tuning data must not leak as data-%s.', $retired_lattice_attribute ) );
	}
}

echo "collection layout recipe contract ok\n";
