<?php
/**
 * Contract: collections expose a `novablocks/collection_leading_items_markup`
 * filter that lets themes prepend non-card bricks (e.g. a Patch-style site
 * header brick) INSIDE the layout container, before the card items, so layout
 * engines (masonry) pack them like any other brick.
 *
 * Run standalone: php tests/php/collection-leading-items-contract.php
 */

function add_filter() {}

function apply_filters( $tag, $value ) {
	if ( 'novablocks/collection_leading_items_markup' === $tag ) {
		return '<div class="nb-collection__layout-item nb-collection__layout-item--leading">HEADER-BRICK</div>';
	}

	return $value;
}

function esc_attr( $value ) { return $value; }
function esc_html( $value ) { return $value; }
function wp_kses_post( $value ) { return $value; }

require_once __DIR__ . '/../../lib/block-rendering.php';

function sanitize_html_class( $value ) { return $value; }

$attributes = [
	'contentType'             => 'custom',
	'layoutStyle'             => 'masonry',
	'carouselLayout'          => 'fixed',
	'align'                   => 'full',
	'showCollectionTitle'     => false,
	'showCollectionSubtitle'  => false,
	'collectionTitleLevel'    => 2,
	'collectionTitleFontSize' => 'large',
	'title'                   => '',
	'subtitle'                => '',
];

$card_content = '<div class="nb-collection__layout-item">CARD</div>';

$output = novablocks_get_collection_output( $attributes, $card_content, null );

if ( false === strpos( $output, 'HEADER-BRICK' ) ) {
	throw new RuntimeException( 'Expected the leading items markup to be rendered.' );
}

$leading_pos = strpos( $output, 'HEADER-BRICK' );
$card_pos    = strpos( $output, 'CARD' );

if ( $leading_pos > $card_pos ) {
	throw new RuntimeException( 'Leading items must render BEFORE the card items.' );
}

$layout_pos = strpos( $output, 'nb-collection__layout ' );

if ( false === $layout_pos || $leading_pos < $layout_pos ) {
	throw new RuntimeException( 'Leading items must render INSIDE the layout container.' );
}

echo "collection leading items contract ok\n";
