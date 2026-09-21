<?php
/**
 * The editorial ordinal is generated from the query order, not authored text.
 * Run standalone: php tests/php/editorial-hero-ordinal-contract.php
 */

function add_filter() {}
function esc_html( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES ); }
require_once __DIR__ . '/../../lib/block-rendering.php';

$base = [
	'contentType' => 'auto',
	'layoutStyle' => 'carousel',
	'className' => 'is-style-editorial-hero',
	'showTitle' => true,
	'_collectionOrdinal' => 1,
];

if ( novablocks_get_editorial_card_ordinal_markup( $base ) !== '<span class="nb-card__ordinal" aria-hidden="true">01</span>' ) {
	throw new RuntimeException( 'The first query item needs a leading-zero ordinal.' );
}
if ( novablocks_get_editorial_card_ordinal_markup( array_merge( $base, [ '_collectionOrdinal' => 11 ] ) ) !== '<span class="nb-card__ordinal" aria-hidden="true">11</span>' ) {
	throw new RuntimeException( 'Two-digit positions must remain intact.' );
}
foreach ( [
	[ 'className' => '' ],
	[ 'className' => 'is-style-editorial-hero-other' ],
	[ 'layoutStyle' => 'classic' ],
	[ 'contentType' => 'custom' ],
	[ '_collectionOrdinal' => 0 ],
] as $change ) {
	if ( novablocks_get_editorial_card_ordinal_markup( array_merge( $base, $change ) ) !== '' ) {
		throw new RuntimeException( 'An unrelated Card must not get an ordinal.' );
	}
}

echo "editorial-hero-ordinal-contract: PASS\n";
