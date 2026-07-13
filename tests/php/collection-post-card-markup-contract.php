<?php
/**
 * Contract for linked post metadata and a real Read More affordance.
 */

function add_filter() {}
function apply_filters( $hook, $value ) {
	if ( 'novablocks_collection_layout_recipes' === $hook ) {
		return [
			[
				'id'           => 'anima-collage',
				'label'        => 'Collage Grid',
				'baseLayout'   => 'masonry',
				'capabilities' => [
					'linkedPostMetadata' => true,
					'readMoreAffordance' => true,
				],
			],
		];
	}

	return $value;
}
function esc_html( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ); }
function esc_attr( $value ) { return esc_html( $value ); }
function esc_url( $value ) { return esc_attr( $value ); }
function esc_html__( $value ) { return 'escaped:' . $value; }
function esc_html_x( $value ) { return $value; }
function __( $value ) { return 'legacy:' . $value; }
function get_the_author_meta( $field, $author_id ) { return 'Ada Author'; }
function get_author_posts_url( $author_id ) { return 'https://example.test/author/ada/'; }
function get_the_category( $post_id ) { return [ (object) [ 'term_id' => 7, 'name' => 'Design', 'taxonomy' => 'category' ] ]; }
function get_term_link( $term ) { return 'https://example.test/category/design/'; }
function is_wp_error() { return false; }
function get_the_date( $format, $post ) { return 'c' === $format ? '2026-07-12T10:30:00+00:00' : 'July 12, 2026'; }
function get_day_link( $year, $month, $day ) { return 'https://example.test/2026/07/12/'; }
function get_post_time( $format, $gmt, $post ) {
	return [ 'Y' => '2026', 'm' => '07', 'd' => '12' ][ $format ];
}
function get_the_title( $post ) { return 'Post Title'; }
function get_the_excerpt( $post ) { return 'Post excerpt.'; }
function get_permalink( $post ) { return 'https://example.test/post/'; }
function wp_kses_post( $value ) { return $value; }

require_once dirname( __DIR__, 2 ) . '/lib/block-rendering.php';

$post = (object) [ 'ID' => 42, 'post_author' => 3, 'post_type' => 'post' ];
$recipe_attributes = [ 'layoutRecipe' => 'anima-collage' ];

$legacy_author = novablocks_get_post_card_meta( $post, 'author', [] );
if ( 'Ada Author' !== $legacy_author || false !== strpos( $legacy_author, '<a' ) ) {
	throw new RuntimeException( 'Legacy author metadata must remain byte-compatible plain text.' );
}

$legacy_category = novablocks_get_post_card_meta( $post, 'category', [] );
if ( 'Design' !== $legacy_category || false !== strpos( $legacy_category, '<a' ) ) {
	throw new RuntimeException( 'Legacy category metadata must remain byte-compatible plain text.' );
}

$legacy_date = novablocks_get_post_card_meta( $post, 'date', [] );
if ( 'July 12, 2026' !== $legacy_date || false !== strpos( $legacy_date, '<time' ) || false !== strpos( $legacy_date, '<a' ) ) {
	throw new RuntimeException( 'Legacy date metadata must remain byte-compatible plain text.' );
}

$legacy_author_date = novablocks_get_post_card_meta( $post, 'author-date', [] );
if ( 'By Ada Author / July 12, 2026' !== $legacy_author_date || false !== strpos( $legacy_author_date, '<a' ) ) {
	throw new RuntimeException( 'Legacy combined author/date metadata must remain byte-compatible plain text.' );
}

$unknown_recipe_author = novablocks_get_post_card_meta( $post, 'author', [ 'layoutRecipe' => 'missing-recipe' ] );
if ( 'Ada Author' !== $unknown_recipe_author ) {
	throw new RuntimeException( 'Unknown recipes must fail closed to legacy metadata markup.' );
}

$author = novablocks_get_post_card_meta( $post, 'author', $recipe_attributes );
if ( false === strpos( $author, '<a' ) || false === strpos( $author, 'https://example.test/author/ada/' ) || false === strpos( $author, 'Ada Author' ) ) {
	throw new RuntimeException( 'Author metadata must retain its archive link.' );
}

$category = novablocks_get_post_card_meta( $post, 'category', $recipe_attributes );
if ( false === strpos( $category, '<a' ) || false === strpos( $category, 'https://example.test/category/design/' ) || false === strpos( $category, 'Design' ) ) {
	throw new RuntimeException( 'Category metadata must retain its term link.' );
}

$date = novablocks_get_post_card_meta( $post, 'date', $recipe_attributes );
if ( false === strpos( $date, '<a' ) || false === strpos( $date, 'https://example.test/2026/07/12/' )
	|| false === strpos( $date, '<time datetime="2026-07-12T10:30:00+00:00">July 12, 2026</time>' ) ) {
	throw new RuntimeException( 'Date metadata must use linked semantic time markup.' );
}

$author_date = novablocks_get_post_card_meta( $post, 'author-date', $recipe_attributes );
if ( false === strpos( $author_date, 'https://example.test/author/ada/' )
	|| false === strpos( $author_date, 'https://example.test/2026/07/12/' )
	|| false === strpos( $author_date, '<time datetime="2026-07-12T10:30:00+00:00">' ) ) {
	throw new RuntimeException( 'Combined author/date metadata must retain both links.' );
}

$legacy_media = novablocks_get_collection_card_media_markup_wrapped( '<img alt="">', 'https://example.test/post/', 'P', 'Post Title', [] );
if ( false === strpos( $legacy_media, '<span class="nb-supernova-item__dropcap-more">legacy:Read More</span>' )
	|| false !== strpos( $legacy_media, 'nb-card__read-more' )
	|| false !== strpos( $legacy_media, 'screen-reader-text' ) ) {
	throw new RuntimeException( 'Legacy media links must retain their exact dropcap Read More markup.' );
}

$media = novablocks_get_collection_card_media_markup_wrapped( '<img alt="">', 'https://example.test/post/', 'P', 'Post Title', $recipe_attributes );
if ( 1 !== substr_count( $media, 'class="nb-card__read-more ' )
	|| false === strpos( $media, '>escaped:Read More<' )
	|| false === strpos( $media, 'screen-reader-text">: Post Title</span>' ) ) {
	throw new RuntimeException( 'Post media links need one real, translatable Read More affordance.' );
}

$legacy_items = novablocks_get_post_card_items_markup(
	$post,
	[ 'meta-primary' ],
	[
		'showMeta'         => true,
		'primaryMetadata'  => 'author',
		'secondaryMetadata' => 'none',
	]
);
if ( false !== strpos( $legacy_items, '<a' ) || false === strpos( $legacy_items, 'Ada Author' ) ) {
	throw new RuntimeException( 'The post-card renderer must preserve legacy metadata when no recipe is registered.' );
}

$recipe_items = novablocks_get_post_card_items_markup(
	$post,
	[ 'meta-primary' ],
	[
		'showMeta'          => true,
		'primaryMetadata'   => 'author',
		'secondaryMetadata' => 'none',
		'layoutRecipe'      => 'anima-collage',
	]
);
if ( false === strpos( $recipe_items, 'https://example.test/author/ada/' ) ) {
	throw new RuntimeException( 'The post-card renderer must pass registered recipe capabilities to metadata rendering.' );
}

$legacy_custom_meta = novablocks_get_card_items_markup(
	[ 'meta-secondary', 'meta-primary' ],
	[
		'showMeta'         => true,
		'metaAboveTitle'   => 'Primary value',
		'metaBelowContent' => 'Secondary value',
	]
);

if ( false !== strpos( $legacy_custom_meta, 'nb-card__meta--secondary' )
	|| false !== strpos( $legacy_custom_meta, 'nb-card__meta--primary' )
	|| ! preg_match( '/<span>Secondary value<.*<span>Primary value</s', $legacy_custom_meta ) ) {
	throw new RuntimeException( 'Legacy custom card metadata must retain unclassed paired spans.' );
}

$recipe_custom_meta = novablocks_get_card_items_markup(
	[ 'meta-secondary', 'meta-primary' ],
	[
		'showMeta'         => true,
		'metaAboveTitle'   => 'Primary value',
		'metaBelowContent' => 'Secondary value',
		'layoutRecipe'     => 'anima-collage',
	]
);

if ( ! preg_match( '/nb-card__meta--secondary[^>]*>Secondary value<.*nb-card__meta--primary[^>]*>Primary value</s', $recipe_custom_meta ) ) {
	throw new RuntimeException( 'Custom card metadata must preserve semantic Primary and Secondary roles when reordered.' );
}

echo "collection post card markup contract ok\n";
