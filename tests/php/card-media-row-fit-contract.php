<?php
/**
 * Contract for the row-fit media box and Media Alignment (#627).
 *
 * Run standalone: php tests/php/card-media-row-fit-contract.php
 */

function add_filter() {}

function apply_filters( $hook, $value, ...$args ) {
	return $value;
}

function sanitize_html_class( $class ) {
	return preg_replace( '/[^A-Za-z0-9_-]/', '', (string) $class );
}

require_once __DIR__ . '/../../lib/block-rendering.php';
require_once __DIR__ . '/../../lib/collection-layout-recipes.php';

function nb_row_fit_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		fwrite( STDERR, "FAIL: {$message}\n" );
		exit( 1 );
	}
}

$layout_attributes = json_decode( file_get_contents( __DIR__ . '/../../packages/block-editor/src/filters/with-collection-layout/attributes.json' ), true );

nb_row_fit_assert(
	isset( $layout_attributes['mediaAlign'] ) && 'string' === $layout_attributes['mediaAlign']['type'] && 'center center' === $layout_attributes['mediaAlign']['default'],
	'mediaAlign is registered on the collection layout attributes with the historical center center default.'
);

// 1. The row-fit box has no fixed ratio: no padding-top ratio, pictures contained.
$row_css = novablocks_get_sizing_css( [
	'thumbnailAspectRatioString' => 'row',
	'thumbnailAspectRatio'       => 42,
	'imageResizing'              => 'cropped',
] );

nb_row_fit_assert( ! preg_grep( '/^--nb-card-media-padding-top:/', $row_css ), 'Row fit must not emit a fixed ratio padding-top.' );
nb_row_fit_assert( ! preg_grep( '/^--nb-card-media-aspect-ratio:/', $row_css ), 'Row fit must not emit a fixed aspect ratio.' );
nb_row_fit_assert( in_array( '--nb-card-media-object-fit: contain', $row_css, true ), 'Row fit shows every picture whole (object-fit: contain).' );

$landscape_css = novablocks_get_sizing_css( [
	'thumbnailAspectRatioString' => 'landscape',
	'thumbnailAspectRatio'       => 42,
	'imageResizing'              => 'cropped',
] );

nb_row_fit_assert( (bool) preg_grep( '/^--nb-card-media-padding-top:/', $landscape_css ), 'Preset ratios keep their ratio box.' );
nb_row_fit_assert( in_array( '--nb-card-media-object-fit: cover', $landscape_css, true ), 'Preset ratios keep cropping.' );

// 2. The collection announces the mode with one class; defaults add nothing.
nb_row_fit_assert( [ 'nb-supernova--aspect-ratio-row' ] === novablocks_get_collection_aspect_ratio_classes( [ 'thumbnailAspectRatioString' => 'row' ] ), 'Row fit adds its collection class.' );
nb_row_fit_assert( [ 'nb-supernova--aspect-ratio-original' ] === novablocks_get_collection_aspect_ratio_classes( [ 'thumbnailAspectRatioString' => 'original' ] ), 'Original keeps its collection class.' );
nb_row_fit_assert( [] === novablocks_get_collection_aspect_ratio_classes( [ 'thumbnailAspectRatioString' => 'landscape' ] ), 'Preset ratios add no collection class.' );
nb_row_fit_assert( [] === novablocks_get_collection_aspect_ratio_classes( [] ), 'A missing ratio adds no collection class.' );

// 3. Media Alignment: an object-position only for a non-default, valid value.
$layout_base = [
	'columns'             => 3,
	'gridGap'             => 50,
	'verticalGapModifier' => 1,
	'layoutStyle'         => 'classic',
	'cardLayout'          => 'vertical',
];

$default_layout_css = novablocks_get_collection_layout_css( $layout_base );
nb_row_fit_assert( ! preg_grep( '/object-position/', $default_layout_css ), 'No mediaAlign adds nothing.' );
nb_row_fit_assert( $default_layout_css === novablocks_get_collection_layout_css( $layout_base + [ 'mediaAlign' => 'center center' ] ), 'The default mediaAlign is byte-identical to no mediaAlign.' );
nb_row_fit_assert( $default_layout_css === novablocks_get_collection_layout_css( $layout_base + [ 'mediaAlign' => 'top; color: red' ] ), 'An invalid mediaAlign is ignored.' );
nb_row_fit_assert(
	in_array( '--nb-card-media-object-position: center bottom', novablocks_get_collection_layout_css( $layout_base + [ 'mediaAlign' => 'bottom center' ] ), true ),
	'bottom center maps to object-position center bottom.'
);
nb_row_fit_assert(
	in_array( '--nb-card-media-object-position: left top', novablocks_get_collection_layout_css( $layout_base + [ 'mediaAlign' => 'top left' ] ), true ),
	'top left maps to object-position left top.'
);

// 4. The data-* attribute list only carries mediaAlign when it was changed.
$names_default = novablocks_get_supernova_data_attribute_names( [ 'mediaAlign' => 'center center', 'columns' => 3 ] );
$names_custom  = novablocks_get_supernova_data_attribute_names( [ 'mediaAlign' => 'bottom center', 'columns' => 3 ] );
nb_row_fit_assert( ! in_array( 'mediaAlign', $names_default, true ), 'Default mediaAlign must not print a data attribute.' );
nb_row_fit_assert( in_array( 'mediaAlign', $names_custom, true ), 'A chosen mediaAlign prints its data attribute.' );

// 5. The collection render consumes the shared class helper.
$init_source = file_get_contents( __DIR__ . '/../../packages/block-library/src/blocks/supernova/init.php' );
nb_row_fit_assert( false !== strpos( $init_source, 'novablocks_get_collection_aspect_ratio_classes( $attributes )' ), 'The Supernova render uses the aspect ratio class helper.' );

echo "card media row fit contract ok\n";
