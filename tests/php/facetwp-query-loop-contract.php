<?php
/**
 * FacetWP Query Loop opt-in contract.
 *
 * Standalone: run with the Local PHP CLI; no WordPress bootstrap is required.
 */

declare( strict_types=1 );

define( 'ABSPATH', __DIR__ . '/../../' );

$GLOBALS['nb_test_filters']  = [];
$GLOBALS['nb_test_failures'] = [];

class WP_Block {
	public $context = [];
	public $parsed_block = [];
}

function add_filter( string $hook, string $callback, int $priority = 10, int $accepted_args = 1 ): void {
	$GLOBALS['nb_test_filters'][ $hook ][] = [ $callback, $priority, $accepted_args ];
}

function FWP() {}

function nb_expect_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		$GLOBALS['nb_test_failures'][] = $message . "\nExpected: " . var_export( $expected, true ) . "\nActual: " . var_export( $actual, true );
	}
}

require_once __DIR__ . '/../../lib/block-rendering.php';

$group = [
	'blockName'   => 'core/group',
	'attrs'       => [],
	'innerBlocks' => [
		[
			'blockName'   => 'core/query',
			'attrs'       => [
				'className' => 'listing facetwp-template alignwide',
				'query'     => [ 'perPage' => 9 ],
			],
			'innerBlocks' => [],
		],
	],
];

$query = $group['innerBlocks'][0];
$marked = novablocks_mark_facetwp_query_loop_context( $query );
nb_expect_same( true, $marked['attrs']['query']['facetwp'] ?? null, 'A Query Loop with the exact template class must be marked.' );
nb_expect_same( 9, $marked['attrs']['query']['perPage'] ?? null, 'Marking must preserve existing Query Loop arguments.' );

$partial_class = [
	'blockName'   => 'core/query',
	'attrs'       => [
		'className' => 'not-facetwp-template',
		'query'     => [],
	],
	'innerBlocks' => [],
];
nb_expect_same( $partial_class, novablocks_mark_facetwp_query_loop_context( $partial_class ), 'A partial class-name match must not opt a query into filtering.' );

$parent = new WP_Block();
$parent_query = [
	'blockName'   => 'core/query',
	'attrs'       => [
		'className' => 'facetwp-template',
		'query'     => [],
	],
	'innerBlocks' => [],
];
$nested_marked = novablocks_mark_facetwp_query_loop_context( $parent_query, null, $parent );
nb_expect_same( true, $nested_marked['attrs']['query']['facetwp'] ?? null, 'A nested render_block_data call must mark its Query Loop across dynamic block boundaries.' );

$parent->parsed_block = $parent_query;
nb_expect_same( true, function_exists( 'novablocks_enable_facetwp_query_loop_child_context' ), 'Nova must register a Query Loop child-context bridge.' );
if ( function_exists( 'novablocks_enable_facetwp_query_loop_child_context' ) ) {
	$child_context = novablocks_enable_facetwp_query_loop_child_context(
		[ 'query' => [ 'perPage' => 9 ] ],
		[ 'blockName' => 'novablocks/supernova' ],
		$parent
	);
	nb_expect_same( true, $child_context['query']['facetwp'] ?? null, 'A marked Query Loop must pass its opt-in across a dynamic parent boundary.' );
	nb_expect_same( 9, $child_context['query']['perPage'] ?? null, 'The child-context bridge must preserve existing Query Loop arguments.' );
}

$query_block                    = new WP_Block();
$query_block->context['query']  = [ 'facetwp' => true ];
$enabled_query                  = novablocks_enable_facetwp_query_loop( [ 'posts_per_page' => 9 ], $query_block, 1 );
nb_expect_same( true, $enabled_query['facetwp'] ?? null, 'A marked Query Loop must pass FacetWP its explicit custom-query opt-in.' );
nb_expect_same( 9, $enabled_query['posts_per_page'] ?? null, 'The FacetWP opt-in must preserve the built query arguments.' );

$plain_block = new WP_Block();
nb_expect_same( [ 'posts_per_page' => 9 ], novablocks_enable_facetwp_query_loop( [ 'posts_per_page' => 9 ], $plain_block, 1 ), 'An unmarked Query Loop must remain untouched.' );

nb_expect_same(
	[ 'novablocks_mark_facetwp_query_loop_context', 10, 3 ],
	$GLOBALS['nb_test_filters']['render_block_data'][1] ?? null,
	'The context marker must receive the parent block argument.'
);
nb_expect_same(
	[ 'novablocks_enable_facetwp_query_loop_child_context', 10, 3 ],
	$GLOBALS['nb_test_filters']['render_block_context'][0] ?? null,
	'The child-context bridge must receive the parent block argument.'
);
nb_expect_same(
	[ 'novablocks_enable_facetwp_query_loop', 10, 3 ],
	$GLOBALS['nb_test_filters']['query_loop_block_query_vars'][0] ?? null,
	'The query opt-in must receive the Query Loop block instance.'
);

if ( $GLOBALS['nb_test_failures'] ) {
	fwrite( STDERR, implode( "\n\n", $GLOBALS['nb_test_failures'] ) . "\n" );
	exit( 1 );
}

echo "FacetWP Query Loop contract OK\n";
