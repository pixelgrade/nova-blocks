<?php

function add_filter() {}

require_once __DIR__ . '/../../lib/block-rendering.php';

$duotone_css = novablocks_get_overlay_filter_css(
	[
		'overlayFilterType'     => 'duotone',
		'overlayFilterStrength' => 90,
	]
);

if ( ! in_array( '--nb-overlay-filter-strength: 0', $duotone_css, true ) ) {
	throw new RuntimeException( 'Expected duotone overlay filter strength to render as 0.' );
}

$unitone_css = novablocks_get_overlay_filter_css(
	[
		'overlayFilterType'     => 'unitone',
		'overlayFilterStrength' => 90,
	]
);

if ( ! in_array( '--nb-overlay-filter-strength: 0.9', $unitone_css, true ) ) {
	throw new RuntimeException( 'Expected unitone overlay filter strength to preserve the stored value.' );
}

echo "overlay filter strength contract ok\n";
