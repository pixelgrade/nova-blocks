<?php
/**
 * FacetWP Query Loop no-engine contract.
 *
 * Standalone: run with the Local PHP CLI; no WordPress bootstrap is required.
 */

declare( strict_types=1 );

define( 'ABSPATH', __DIR__ . '/../../' );

$GLOBALS['nb_test_failures'] = [];

class WP_Block {
	public $context = [];
}

function add_filter( string $hook, string $callback, int $priority = 10, int $accepted_args = 1 ): void {}

function nb_expect_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		$GLOBALS['nb_test_failures'][] = $message . "\nExpected: " . var_export( $expected, true ) . "\nActual: " . var_export( $actual, true );
	}
}

require_once __DIR__ . '/../../lib/block-rendering.php';

$parsed_block = [
	'blockName'   => 'core/group',
	'attrs'       => [],
	'innerBlocks' => [
		[
			'blockName'   => 'core/query',
			'attrs'       => [
				'className' => 'facetwp-template',
				'query'     => [ 'perPage' => 9 ],
			],
			'innerBlocks' => [],
		],
	],
];

nb_expect_same( $parsed_block, novablocks_mark_facetwp_query_loop_context( $parsed_block ), 'Without the filtering engine, parsed block data must remain byte-for-byte equivalent.' );

$block                   = new WP_Block();
$block->context['query'] = [ 'facetwp' => true ];
nb_expect_same( [ 'posts_per_page' => 9 ], novablocks_enable_facetwp_query_loop( [ 'posts_per_page' => 9 ], $block, 1 ), 'Without the filtering engine, query arguments must remain unchanged even if context is marked.' );

if ( $GLOBALS['nb_test_failures'] ) {
	fwrite( STDERR, implode( "\n\n", $GLOBALS['nb_test_failures'] ) . "\n" );
	exit( 1 );
}

echo "FacetWP Query Loop no-engine contract OK\n";
