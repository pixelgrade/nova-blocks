<?php
/**
 * Contract: card expression classes (media ratio + content length).
 *
 * Post cards rendered in auto (Query Loop) mode expose their featured image's
 * natural orientation and their title/description length as card-level
 * modifier classes so themes can build ratio-adaptive card designs
 * (Patch-style collage grids being the driving case).
 *
 * Boundaries mirror the legacy Patch theme contract:
 *   media ratio (w/h): tall < 0.5625 <= portrait < 0.75 <= square <= 1.34
 *                      < landscape <= 1.78 < wide
 *   title chars:       short < 30 <= medium < 60 <= long
 *   description chars: short < 100 <= medium < 200 <= long
 *
 * Run standalone: php tests/php/card-expression-classes-contract.php
 */

function add_filter() {}
function apply_filters( $tag, $value ) { return $value; }

require_once __DIR__ . '/../../lib/block-rendering.php';

function nb_expect( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

// --- Media ratio classification (pure) ---

$ratio_cases = [
	[ 0.4,    'tall' ],
	[ 0.5624, 'tall' ],
	[ 0.5625, 'portrait' ],
	[ 0.74,   'portrait' ],
	[ 0.75,   'square' ],
	[ 1.0,    'square' ],
	[ 1.34,   'square' ],
	[ 1.35,   'landscape' ],
	[ 1.5,    'landscape' ],
	[ 1.78,   'landscape' ],
	[ 1.79,   'wide' ],
	[ 2.5,    'wide' ],
];

foreach ( $ratio_cases as list( $ratio, $expected ) ) {
	$actual = novablocks_classify_card_media_ratio( $ratio );
	nb_expect( $expected === $actual, "Ratio {$ratio} should classify as {$expected}, got {$actual}." );
}

// Degenerate ratios fall back to landscape (the safest neutral bucket).
nb_expect( 'landscape' === novablocks_classify_card_media_ratio( 0 ), 'Ratio 0 falls back to landscape.' );
nb_expect( 'landscape' === novablocks_classify_card_media_ratio( -1 ), 'Negative ratio falls back to landscape.' );

// --- Text length classification (pure) ---

$title_thresholds = [ 'short' => 30, 'medium' => 60 ];

nb_expect( 'short' === novablocks_classify_card_text_length( str_repeat( 'a', 29 ), $title_thresholds ), '29 chars = short.' );
nb_expect( 'medium' === novablocks_classify_card_text_length( str_repeat( 'a', 30 ), $title_thresholds ), '30 chars = medium.' );
nb_expect( 'medium' === novablocks_classify_card_text_length( str_repeat( 'a', 59 ), $title_thresholds ), '59 chars = medium.' );
nb_expect( 'long' === novablocks_classify_card_text_length( str_repeat( 'a', 60 ), $title_thresholds ), '60 chars = long.' );

// Multibyte: 29 two-byte chars must still be short.
nb_expect( 'short' === novablocks_classify_card_text_length( str_repeat( 'ă', 29 ), $title_thresholds ), '29 multibyte chars = short.' );

// Markup is stripped before measuring.
nb_expect( 'short' === novablocks_classify_card_text_length( '<strong>' . str_repeat( 'a', 20 ) . '</strong>', $title_thresholds ), 'Tags are stripped before measuring.' );

// --- Class assembly from plain values (WP-independent) ---

$classes = novablocks_get_card_expression_classes_from_values( [
	'media_width'  => 640,
	'media_height' => 960,
	'title'        => 'Short title',
	'description'  => str_repeat( 'lorem ', 25 ), // 150 chars = medium
] );

nb_expect( in_array( 'nb-card--media-portrait', $classes, true ), 'Expected nb-card--media-portrait (640x960).' );
nb_expect( in_array( 'nb-card--title-short', $classes, true ), 'Expected nb-card--title-short.' );
nb_expect( in_array( 'nb-card--description-medium', $classes, true ), 'Expected nb-card--description-medium.' );

// No media dimensions → the no-media marker.
$classes = novablocks_get_card_expression_classes_from_values( [
	'media_width'  => 0,
	'media_height' => 0,
	'title'        => str_repeat( 'T', 70 ),
	'description'  => '',
] );

nb_expect( in_array( 'nb-card--no-media', $classes, true ), 'Expected nb-card--no-media without dimensions.' );
nb_expect( in_array( 'nb-card--title-long', $classes, true ), 'Expected nb-card--title-long.' );
nb_expect( in_array( 'nb-card--description-none', $classes, true ), 'Expected nb-card--description-none for empty description.' );
nb_expect( ! in_array( 'nb-card--media-landscape', $classes, true ), 'No ratio class without media.' );

// Wide media lands in the wide bucket.
$classes = novablocks_get_card_expression_classes_from_values( [
	'media_width'  => 1200,
	'media_height' => 600,
	'title'        => '',
	'description'  => '',
] );

nb_expect( in_array( 'nb-card--media-wide', $classes, true ), 'Expected nb-card--media-wide (2:1).' );
nb_expect( in_array( 'nb-card--title-none', $classes, true ), 'Expected nb-card--title-none for empty title.' );

echo "card expression classes contract ok\n";
