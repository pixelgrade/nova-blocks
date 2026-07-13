<?php
/**
 * Contract: Header Row attribute-driven content layout classes.
 *
 * The Header Row block derives layout modifier classes from its
 * `contentDirection`, `contentAlignment`, and `navigationColumns` attributes.
 * Default values must emit NO classes so rows saved before these attributes
 * existed keep the positional first/last/center child distribution.
 *
 * The JS mirror lives in
 * packages/block-library/src/blocks/header-row/layout-classes.js
 * (layout-classes.test.js pins the same cases).
 *
 * Run standalone: php tests/php/header-row-layout-classes-contract.php
 */

define( 'ABSPATH', __DIR__ );

require_once __DIR__ . '/../../packages/block-library/src/blocks/header-row/init.php';

function nb_expect( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

// Defaults emit no classes (legacy rows stay untouched).
nb_expect(
	[] === novablocks_get_header_row_layout_classes( [] ),
	'Empty attributes emit no layout classes.'
);
nb_expect(
	[] === novablocks_get_header_row_layout_classes( [
		'contentDirection'  => 'row',
		'contentAlignment'  => '',
		'navigationColumns' => 1,
	] ),
	'Default attribute values emit no layout classes.'
);

// Direction.
nb_expect(
	[ 'nb-header-row--direction-column' ] === novablocks_get_header_row_layout_classes( [ 'contentDirection' => 'column' ] ),
	'Column direction emits the direction modifier.'
);
nb_expect(
	[] === novablocks_get_header_row_layout_classes( [ 'contentDirection' => 'diagonal' ] ),
	'Unknown direction values emit nothing.'
);

// Alignment.
foreach ( [ 'start', 'center', 'end' ] as $alignment ) {
	nb_expect(
		[ 'nb-header-row--align-' . $alignment ] === novablocks_get_header_row_layout_classes( [ 'contentAlignment' => $alignment ] ),
		"Alignment {$alignment} emits its modifier."
	);
}
nb_expect(
	[] === novablocks_get_header_row_layout_classes( [ 'contentAlignment' => 'justify' ] ),
	'Unknown alignment values emit nothing.'
);

// Navigation columns: 1 is the no-op default, 2–3 emit, higher values clamp to 3.
nb_expect(
	[] === novablocks_get_header_row_layout_classes( [ 'navigationColumns' => 1 ] ),
	'Single column emits nothing.'
);
nb_expect(
	[ 'nb-header-row--nav-columns-2' ] === novablocks_get_header_row_layout_classes( [ 'navigationColumns' => 2 ] ),
	'Two columns emit the two-column modifier.'
);
nb_expect(
	[ 'nb-header-row--nav-columns-3' ] === novablocks_get_header_row_layout_classes( [ 'navigationColumns' => 3 ] ),
	'Three columns emit the three-column modifier.'
);
nb_expect(
	[ 'nb-header-row--nav-columns-3' ] === novablocks_get_header_row_layout_classes( [ 'navigationColumns' => 7 ] ),
	'Column counts above three clamp to three.'
);
nb_expect(
	[] === novablocks_get_header_row_layout_classes( [ 'navigationColumns' => 'two' ] ),
	'Non-numeric column counts emit nothing.'
);

// Combined (Patch primary row shape).
nb_expect(
	[ 'nb-header-row--align-start', 'nb-header-row--nav-columns-2' ] === novablocks_get_header_row_layout_classes( [
		'contentAlignment'  => 'start',
		'navigationColumns' => 2,
	] ),
	'Patch primary row emits alignment + columns modifiers.'
);

echo "header-row-layout-classes-contract: all assertions passed\n";
