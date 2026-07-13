<?php
/**
 * Contract: collections expose structured leading-item descriptors plus the
 * legacy raw-markup filter. Structured items are normalized, de-duplicated,
 * collection-targeted, and rendered before cards inside flow layouts.
 *
 * Run standalone: php tests/php/collection-leading-items-contract.php
 */

$GLOBALS['structured_leading_items_filter_calls'] = 0;

function add_filter() {}

function apply_filters( $tag, $value ) {
	if ( 'novablocks/collection_leading_items' === $tag ) {
		$GLOBALS['structured_leading_items_filter_calls']++;
		return [
			[
				'id'               => 'site-header',
				'role'             => 'site-header',
				'className'        => 'theme-header-brick',
				'markup'           => '<div>STRUCTURED-HEADER</div>',
				'supportedLayouts' => [ 'masonry', 'classic' ],
				'requiredCollectionClassName' => 'has-theme-header',
				'editorPreview'    => true,
			],
			[
				'id'       => 'site-header',
				'role'     => 'duplicate',
				'markup'   => '<div>DUPLICATE-HEADER</div>',
			],
			[
				'id'       => 'bad id',
				'className' => 'good-class bad@class',
				'markup'   => '<div>NORMALIZED-ITEM</div>',
			],
			[
				'id'       => 'classic-only',
				'role'     => 'notice',
				'markup'   => '<div>CLASSIC-ONLY</div>',
				'supportedLayouts' => [ 'classic' ],
			],
			[
				'id'                          => 'zero-markup',
				'role'                        => 'zero',
				'className'                   => '0',
				'markup'                      => '0',
				'requiredCollectionClassName' => '0',
			],
			[
				'id'                          => 'null-requirement',
				'role'                        => 'invalid',
				'markup'                      => '<div>NULL-REQUIREMENT</div>',
				'requiredCollectionClassName' => null,
			],
		];
	}

	if ( 'novablocks/collection_leading_items_markup' === $tag ) {
		return '<div class="nb-collection__layout-item nb-collection__layout-item--legacy">LEGACY-HEADER</div>';
	}

	return $value;
}

function esc_attr( $value ) { return $value; }
function esc_html( $value ) { return $value; }
function wp_kses_post( $value ) { return $value; }

require_once __DIR__ . '/../../lib/block-rendering.php';

function sanitize_html_class( $value ) {
	$value = preg_replace( '|%[a-fA-F0-9][a-fA-F0-9]|', '', $value );
	return preg_replace( '/[^A-Za-z0-9_-]/', '', $value );
}

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
	'className'               => 'has-theme-header 0',
];

$card_content = '<div class="nb-collection__layout-item">CARD</div>';

$output = novablocks_get_collection_output( $attributes, $card_content, null );

if ( false === strpos( $output, 'STRUCTURED-HEADER' ) ) {
	throw new RuntimeException( 'Expected the structured leading item to be rendered.' );
}

if ( false === strpos( $output, 'LEGACY-HEADER' ) ) {
	throw new RuntimeException( 'Expected legacy leading-item markup to remain supported.' );
}

if ( false === strpos( $output, 'data-nb-collection-item-role="site-header"' ) ) {
	throw new RuntimeException( 'Expected the structured item role data attribute.' );
}

if ( false === strpos( $output, 'data-nb-collection-item-id="site-header"' ) ) {
	throw new RuntimeException( 'Expected the structured item id data attribute.' );
}

if ( false === strpos( $output, 'nb-collection__layout-item--leading theme-header-brick' ) ) {
	throw new RuntimeException( 'Expected the semantic and provider classes on the wrapper.' );
}

if ( 1 !== substr_count( $output, 'STRUCTURED-HEADER' ) || false !== strpos( $output, 'DUPLICATE-HEADER' ) ) {
	throw new RuntimeException( 'Structured descriptor ids must be first-wins and de-duplicated.' );
}

if ( false === strpos( $output, 'data-nb-collection-item-id="badid"' )
	|| false === strpos( $output, 'data-nb-collection-item-role="badid"' )
	|| false === strpos( $output, 'good-class badclass' ) ) {
	throw new RuntimeException( 'Structured ids, default roles, and provider classes must be normalized.' );
}

if ( false !== strpos( $output, 'CLASSIC-ONLY' ) ) {
	throw new RuntimeException( 'Per-item supported layouts must be enforced.' );
}

if ( false === strpos( $output, 'data-nb-collection-item-id="zero-markup"' )
	|| false === strpos( $output, 'class="nb-collection__layout-item nb-collection__layout-item--leading 0"' )
	|| false === strpos( $output, '>0</div>' ) ) {
	throw new RuntimeException( 'Strict string normalization must preserve valid zero-like markup and classes.' );
}

if ( false !== strpos( $output, 'NULL-REQUIREMENT' ) ) {
	throw new RuntimeException( 'An explicitly invalid required collection class must be rejected.' );
}

$unmarked_attributes              = $attributes;
$unmarked_attributes['className'] = 'another-collection';
$unmarked_output                  = novablocks_get_collection_output( $unmarked_attributes, $card_content, null );

if ( false !== strpos( $unmarked_output, 'STRUCTURED-HEADER' ) || false === strpos( $unmarked_output, 'LEGACY-HEADER' ) ) {
	throw new RuntimeException( 'Required collection classes must target structured items without changing legacy behavior.' );
}

$leading_pos = strpos( $output, 'STRUCTURED-HEADER' );
$card_pos    = strpos( $output, 'CARD' );

if ( $leading_pos > $card_pos ) {
	throw new RuntimeException( 'Leading items must render BEFORE the card items.' );
}

$layout_pos = strpos( $output, 'nb-collection__layout ' );

if ( false === $layout_pos || $leading_pos < $layout_pos ) {
	throw new RuntimeException( 'Leading items must render INSIDE the layout container.' );
}

$classic_attributes                = $attributes;
$classic_attributes['layoutStyle'] = 'classic';
$classic_output                    = novablocks_get_collection_output( $classic_attributes, $card_content, null );

if ( false === strpos( $classic_output, 'STRUCTURED-HEADER' ) ) {
	throw new RuntimeException( 'Expected Classic to accept flow leading items.' );
}

if ( false === strpos( $classic_output, 'CLASSIC-ONLY' ) ) {
	throw new RuntimeException( 'Expected a Classic-only descriptor in Classic.' );
}

$empty_output = novablocks_get_collection_output( $attributes, '', null );
if ( false === strpos( $empty_output, 'STRUCTURED-HEADER' ) ) {
	throw new RuntimeException( 'A structured leading item must keep an otherwise empty collection visible.' );
}

$parametric_attributes                = $attributes;
$parametric_attributes['layoutStyle'] = 'parametric';
$filter_calls_before_parametric       = $GLOBALS['structured_leading_items_filter_calls'];
$parametric_output                    = novablocks_get_collection_output( $parametric_attributes, $card_content, null );

if ( false !== strpos( $parametric_output, 'STRUCTURED-HEADER' ) ) {
	throw new RuntimeException( 'Expected Parametric to reject flow leading items.' );
}

if ( false === strpos( $parametric_output, 'LEGACY-HEADER' ) ) {
	throw new RuntimeException( 'Expected the layout-neutral legacy markup filter to remain backward compatible.' );
}

if ( $filter_calls_before_parametric !== $GLOBALS['structured_leading_items_filter_calls'] ) {
	throw new RuntimeException( 'Unsupported layouts must not invoke leading-item providers.' );
}

echo "collection leading items contract ok\n";
