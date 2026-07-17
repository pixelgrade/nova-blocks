<?php
/**
 * Contract: PHP and editor derive the same semantic card content regions.
 */

function add_filter() {}
function esc_attr( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ); }
function sanitize_html_class( $value ) { return preg_replace( '/[^A-Za-z0-9_-]/', '', (string) $value ); }
function wp_parse_args( $args, $defaults = [] ) { return array_merge( $defaults, $args ); }
function novablocks_kebab_case_to_camel_case( $value ) {
	return lcfirst( str_replace( ' ', '', ucwords( str_replace( '-', ' ', $value ) ) ) );
}

require_once dirname( __DIR__, 2 ) . '/lib/block-rendering.php';

function assert_card_regions( array $expected, array $order, bool $has_media, string $message ): void {
	$actual = novablocks_get_card_content_regions( $order, $has_media );

	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . "\nExpected: " . var_export( $expected, true ) . "\nActual: " . var_export( $actual, true )
		);
	}
}

assert_card_regions(
	[
		[
			'placement'  => 'after-media',
			'items'      => [ 'title', 'meta-primary' ],
			'classNames' => [
				'nb-supernova-item__content--after-media',
				'nb-supernova-item__content--contains-title',
				'nb-supernova-item__content--trailing-boundary',
			],
		],
	],
	[ 'media', 'title', 'meta-primary' ],
	true,
	'Media-first Lattice cards need one explicit trailing caption region.'
);

assert_card_regions(
	[
		[
			'placement'  => 'before-media',
			'items'      => [ 'meta-primary' ],
			'classNames' => [
				'nb-supernova-item__content--before-media',
				'nb-supernova-item__content--details-only',
				'nb-supernova-item__content--leading-boundary',
			],
		],
		[
			'placement'  => 'after-media',
			'items'      => [ 'title' ],
			'classNames' => [
				'nb-supernova-item__content--after-media',
				'nb-supernova-item__content--contains-title',
				'nb-supernova-item__content--trailing-boundary',
			],
		],
	],
	[ 'meta-primary', 'media', 'title' ],
	true,
	'Split cards need independently classified leading details and caption regions.'
);

assert_card_regions(
	[
		[
			'placement'  => 'content-only',
			'items'      => [ 'title', 'meta-primary' ],
			'classNames' => [
				'nb-supernova-item__content--content-only',
				'nb-supernova-item__content--contains-title',
				'nb-supernova-item__content--leading-boundary',
				'nb-supernova-item__content--trailing-boundary',
			],
		],
	],
	[ 'media', 'title', 'meta-primary' ],
	false,
	'Posts without renderable media must collapse into one semantic text plate.'
);

$surface_markup = novablocks_get_collection_card_surface_markup(
	'<div class="nb-supernova-item__media-wrapper">Media</div>',
	'<h2 class="nb-card__title">Title</h2><p class="nb-card__meta">Date</p>',
	[
		'cardLayout'                 => 'vertical',
		'cardMediaOpacity'           => 100,
		'contentPosition'            => 'bottom left',
		'contentType'                => 'auto',
		'palette'                    => 1,
		'paletteVariation'           => 1,
		'showMedia'                  => true,
		'showMeta'                   => true,
		'showTitle'                  => true,
		'showSubtitle'               => false,
		'showDescription'            => false,
		'showButtons'                => false,
		'useSourceColorAsReference'  => false,
	],
	'',
	novablocks_get_card_content_regions( [ 'media', 'title', 'meta-primary' ], true )
);

foreach ( [
	'nb-supernova-item__content--after-media',
	'nb-supernova-item__content--contains-title',
	'nb-supernova-item__content--trailing-boundary',
] as $expected_class ) {
	if ( false === strpos( $surface_markup, $expected_class ) ) {
		throw new RuntimeException( 'Card surface markup must emit semantic region class: ' . $expected_class );
	}
}

$split_regions = novablocks_get_card_content_regions( [ 'meta-primary', 'media', 'title' ], true );
$split_surface_markup = novablocks_get_collection_card_surface_markup(
	'<div class="nb-supernova-item__media-wrapper">Media</div>',
	'<h2 class="nb-card__title">Title</h2>',
	[
		'cardLayout'                 => 'stacked',
		'cardMediaOpacity'           => 100,
		'contentPosition'            => 'bottom left',
		'contentType'                => 'auto',
		'palette'                    => 1,
		'paletteVariation'           => 1,
		'showMedia'                  => true,
		'showMeta'                   => true,
		'showTitle'                  => true,
		'showSubtitle'               => false,
		'showDescription'            => false,
		'showButtons'                => false,
		'useSourceColorAsReference'  => false,
	],
	'<p class="nb-card__meta">Date</p>',
	$split_regions
);

if ( false === strpos( $split_surface_markup, 'nb-supernova-item--split-content' ) ) {
	throw new RuntimeException( 'Card surfaces with regions on both sides of Media need an explicit split-content class.' );
}

$rendering_source = file_get_contents( dirname( __DIR__, 2 ) . '/lib/block-rendering.php' );
$blueprint_source = file_get_contents( dirname( __DIR__, 2 ) . '/lib/post-format-card-blueprints.php' );

if ( ! preg_match( '/novablocks_get_collection_card_markup\([^;]+\$content_regions\s*\)/s', $rendering_source ) ) {
	throw new RuntimeException( 'Post-card rendering must pass semantic regions into the final surface markup.' );
}

if ( ! preg_match( '/novablocks_get_collection_card_surface_markup\([^;]+\$content_regions\s*\)/s', $blueprint_source ) ) {
	throw new RuntimeException( 'Post-format blueprints must preserve semantic regions on their item surface.' );
}

echo "card content regions contract ok\n";
