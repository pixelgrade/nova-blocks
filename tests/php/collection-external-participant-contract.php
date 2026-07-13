<?php

function add_filter() {}

function apply_filters( $hook, $value ) {
	if ( 'novablocks_collection_layout_recipes' === $hook ) {
		return [
			[
				'id'           => 'anima-collage',
				'label'        => 'Collage Grid',
				'baseLayout'   => 'masonry',
				'capabilities' => [ 'headerIntegration' => true ],
			],
		];
	}

	return $value;
}

function sanitize_html_class( $value ) {
	return preg_replace( '/[^A-Za-z0-9_-]/', '', (string) $value );
}

function esc_attr( $value ) {
	return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' );
}

require_once dirname( __DIR__, 2 ) . '/lib/block-rendering.php';

$integrated = [
	'headerIntegration' => 'grid-item',
	'layoutStyle'       => 'masonry',
	'layoutRecipe'      => 'anima-collage',
];

$markup = novablocks_get_collection_external_participant_markup( $integrated );

if ( 1 !== substr_count( $markup, 'data-nb-external-participant="site-header"' ) ) {
	throw new RuntimeException( 'Expected exactly one site-header proxy.' );
}

if ( false === strpos( $markup, 'nb-collection__layout-item--external' )
	|| false === strpos( $markup, 'data-nb-collection-item-role="site-header-proxy"' )
	|| false === strpos( $markup, ' hidden' )
	|| false === strpos( $markup, 'aria-hidden="true"' )
	|| false === strpos( $markup, '--nb-external-participant-height' ) ) {
	throw new RuntimeException( 'Expected an empty semantic proxy with a measurable height.' );
}

if ( preg_match( '/<header\b/i', $markup ) || trim( strip_tags( $markup ) ) !== '' ) {
	throw new RuntimeException( 'The proxy must never contain Header markup or text.' );
}

if ( '' !== novablocks_get_collection_external_participant_markup( [
	'headerIntegration' => 'standard',
	'layoutStyle'       => 'masonry',
] ) ) {
	throw new RuntimeException( 'Standard mode must not render a proxy.' );
}

if ( '' !== novablocks_get_collection_external_participant_markup( [
	'headerIntegration' => 'grid-item',
	'layoutStyle'       => 'classic',
	'layoutRecipe'      => 'anima-collage',
] ) ) {
	throw new RuntimeException( 'Only the Masonry engine may render the proxy.' );
}

if ( '' !== novablocks_get_collection_external_participant_markup( [
	'headerIntegration' => 'grid-item',
	'layoutStyle'       => 'masonry',
	'layoutRecipe'      => 'missing-recipe',
] ) ) {
	throw new RuntimeException( 'An unknown recipe must preserve legacy markup without an external proxy.' );
}

if ( '' !== novablocks_get_collection_external_participant_markup( [
	'headerIntegration' => 'grid-item',
	'layoutStyle'       => 'masonry',
] ) ) {
	throw new RuntimeException( 'A legacy collection without a recipe must never gain an external proxy.' );
}

echo "collection external participant contract ok\n";
