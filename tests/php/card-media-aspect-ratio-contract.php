<?php

function add_filter() {}

require_once __DIR__ . '/../../lib/block-rendering.php';

$attributes_path = __DIR__ . '/../../packages/block-editor/src/filters/with-space-and-sizing/attributes.json';
$attributes      = json_decode( file_get_contents( $attributes_path ), true );

if ( 'landscape' !== $attributes['thumbnailAspectRatioString']['default'] || 42 !== $attributes['thumbnailAspectRatio']['default'] ) {
	throw new RuntimeException( 'Expected the default landscape preset to use its 4:3 numeric value.' );
}

$expected_landscape_padding = 75.757575757576;
$actual_landscape_padding   = novablocks_get_card_media_padding_top( 42 );

if ( abs( $expected_landscape_padding - $actual_landscape_padding ) > 0.000001 ) {
	throw new RuntimeException( 'Expected frontend card media padding to match the editor landscape calculation.' );
}

echo "card media aspect ratio contract ok\n";
