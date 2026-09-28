<?php
/**
 * Contract: a stacked card's media covers the card in every aspect-ratio mode (#679).
 *
 * A stacked card layers its content over its media, and the content drives
 * the card height, so the media is the card's background. Original and Fit to
 * Row show a picture whole beside its caption (object-fit: contain); applied
 * to a stacked card they letterbox the background instead of covering it —
 * e.g. a post-format Quote blueprint card inside an Original-ratio masonry
 * grid, which inherits the grid's ratio mode. Stacked cards keep the Image
 * Resizing choice instead.
 *
 * Run standalone: php tests/php/stacked-card-media-cover-contract.php
 */

function add_filter() {}

function apply_filters( $hook, $value, ...$args ) {
	return $value;
}

function sanitize_html_class( $class ) {
	return preg_replace( '/[^A-Za-z0-9_-]/', '', (string) $class );
}

require_once __DIR__ . '/../../lib/block-rendering.php';

function nb_stacked_cover_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		fwrite( STDERR, "FAIL: {$message}\n" );
		exit( 1 );
	}
}

foreach ( [ 'original', 'row' ] as $mode ) {
	$stacked = novablocks_get_sizing_css( [
		'cardLayout'                 => 'stacked',
		'thumbnailAspectRatioString' => $mode,
		'thumbnailAspectRatio'       => 42,
		'imageResizing'              => 'cropped',
	] );

	nb_stacked_cover_assert( in_array( '--nb-card-media-object-fit: cover', $stacked, true ), "A stacked card in {$mode} mode covers the card with its media." );
	nb_stacked_cover_assert( ! in_array( '--nb-card-media-object-fit: contain', $stacked, true ), "A stacked card in {$mode} mode must not letterbox its media." );
	nb_stacked_cover_assert( ! preg_grep( '/^--nb-card-media-padding-top:/', $stacked ), "A stacked card in {$mode} mode still has no fixed ratio box." );

	$shrink = novablocks_get_sizing_css( [
		'cardLayout'                 => 'stacked',
		'thumbnailAspectRatioString' => $mode,
		'imageResizing'              => 'original',
	] );

	nb_stacked_cover_assert( in_array( '--nb-card-media-object-fit: scale-down', $shrink, true ), "A stacked card in {$mode} mode keeps an explicit Shrink to fit." );

	foreach ( [ 'vertical', 'horizontal', 'horizontal-reverse', 'vertical-reverse' ] as $layout ) {
		$side_by_side = novablocks_get_sizing_css( [
			'cardLayout'                 => $layout,
			'thumbnailAspectRatioString' => $mode,
			'imageResizing'              => 'cropped',
		] );

		nb_stacked_cover_assert( in_array( '--nb-card-media-object-fit: contain', $side_by_side, true ), "A {$layout} card in {$mode} mode keeps showing the picture whole." );
	}
}

$no_layout = novablocks_get_sizing_css( [ 'thumbnailAspectRatioString' => 'original', 'imageResizing' => 'cropped' ] );
nb_stacked_cover_assert( in_array( '--nb-card-media-object-fit: contain', $no_layout, true ), 'Without a card layout, Original keeps showing the picture whole.' );

echo "stacked card media cover contract ok\n";
