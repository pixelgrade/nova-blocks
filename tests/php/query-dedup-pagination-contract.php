<?php
/**
 * "Prevent duplicate posts" pagination contract (#646).
 *
 * The page-level dedup switch makes a Nova collection skip posts rendered
 * higher on the page. The Query Loop's counting blocks (pagination numbers,
 * next, no-results, total) rebuild the query through
 * `build_query_vars_from_query_block()`, so the same exclusion must be applied
 * at that shared step, or the pager counts posts the collection never shows.
 *
 * Standalone: run with the Local PHP CLI; no WordPress bootstrap is required.
 */

declare( strict_types=1 );

define( 'ABSPATH', __DIR__ . '/../../' );

$GLOBALS['nb_test_filters']  = [];
$GLOBALS['nb_test_failures'] = [];
$GLOBALS['nb_test_meta']     = [];

class WP_Block {
	public $name = '';
	public $context = [];
	public $parsed_block = [];

	public function __construct( string $name = '', array $context = [] ) {
		$this->name    = $name;
		$this->context = $context;
	}
}

function add_filter( string $hook, string $callback, int $priority = 10, int $accepted_args = 1 ): void {
	$GLOBALS['nb_test_filters'][ $hook ][] = [ $callback, $priority, $accepted_args ];
}
function get_the_ID() { return 42; }
function get_post_meta( $id, $key, $single ) { return $GLOBALS['nb_test_meta'][ $key ] ?? ''; }

function nb_expect_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		$GLOBALS['nb_test_failures'][] = $message . "\nExpected: " . var_export( $expected, true ) . "\nActual: " . var_export( $actual, true );
	}
}

require_once __DIR__ . '/../../lib/block-rendering.php';

$registered = static function ( string $hook, string $callback ): bool {
	foreach ( $GLOBALS['nb_test_filters'][ $hook ] ?? [] as $filter ) {
		if ( $callback === $filter[0] ) {
			return true;
		}
	}
	return false;
};

nb_expect_same( true, $registered( 'render_block_data', 'novablocks_record_query_dedup_exclusions' ), 'The exclusion list must be recorded when a Query Loop starts rendering.' );
nb_expect_same( true, $registered( 'query_loop_block_query_vars', 'novablocks_apply_query_dedup_exclusions' ), 'The exclusion must be applied at the shared Query Loop build step.' );

$collection_query = static function ( int $query_id, string $inner = 'novablocks/supernova' ): array {
	return [
		'blockName'   => 'core/query',
		'attrs'       => [ 'queryId' => $query_id, 'query' => [ 'perPage' => 11 ] ],
		'innerBlocks' => [
			[ 'blockName' => 'core/group', 'attrs' => [], 'innerBlocks' => [
				[ 'blockName' => $inner, 'attrs' => [], 'innerBlocks' => [] ],
			] ],
			[ 'blockName' => 'core/query-pagination', 'attrs' => [], 'innerBlocks' => [] ],
		],
	];
};
$counting = static function ( int $query_id, string $name = 'core/query-pagination-numbers' ): WP_Block {
	return new WP_Block( $name, [ 'queryId' => $query_id, 'query' => [ 'perPage' => 11 ] ] );
};

$GLOBALS['novablocks_rendered_posts_ids'] = [ 1, 2, 3 ];

// 1. Dedup off: nothing recorded, queries untouched.
$parsed = $collection_query( 7 );
nb_expect_same( $parsed, novablocks_record_query_dedup_exclusions( $parsed ), 'Recording must return the parsed block unchanged.' );
nb_expect_same( [ 'paged' => 1 ], novablocks_apply_query_dedup_exclusions( [ 'paged' => 1 ], $counting( 7 ), 1 ), 'Without the page switch the Query Loop is untouched.' );

// 2. Dedup on: a collection loop records the posts rendered above it; its counting blocks exclude them.
$GLOBALS['nb_test_meta']['supernova_prevent_duplicate'] = '1';
novablocks_record_query_dedup_exclusions( $collection_query( 7 ) );
foreach ( [ 'core/query-pagination-numbers', 'core/query-pagination-next', 'core/query-no-results', 'core/query-total' ] as $name ) {
	nb_expect_same( [ 3, 1, 2 ], novablocks_apply_query_dedup_exclusions( [ 'post__not_in' => [ 3 ] ], $counting( 7, $name ), 2 )['post__not_in'] ?? null, "{$name} must count the deduplicated set, keeping the loop's own exclusions." );
}

// Snapshot timing: posts the collection renders later don't change the list a pager above it already used...
$GLOBALS['novablocks_rendered_posts_ids'][] = 4;
nb_expect_same( [ 1, 2, 3 ], novablocks_apply_query_dedup_exclusions( [], $counting( 7 ), 1 )['post__not_in'] ?? null, 'The list is the one taken when the loop started.' );
// ...and the collection refreshes it when it starts, so cards and counters stay in step.
novablocks_set_query_dedup_exclusions( 7, [ 1, 2, 3, 9 ] );
nb_expect_same( [ 1, 2, 3, 9 ], novablocks_apply_query_dedup_exclusions( [], $counting( 7 ), 1 )['post__not_in'] ?? null, 'The collection can refresh its loop\'s list.' );

// 3. Only loops holding a Nova collection are deduplicated (a plain Post Template loop keeps core behaviour).
novablocks_record_query_dedup_exclusions( $collection_query( 8, 'core/post-template' ) );
nb_expect_same( [], novablocks_apply_query_dedup_exclusions( [], $counting( 8 ), 1 ), 'A loop without a Nova collection is untouched.' );

// 4. Other loops, blocks without a query id, and an empty list are untouched.
nb_expect_same( [], novablocks_apply_query_dedup_exclusions( [], $counting( 99 ), 1 ), 'An unrecorded loop is untouched.' );
nb_expect_same( [], novablocks_apply_query_dedup_exclusions( [], new WP_Block( 'core/query-pagination-numbers' ), 1 ), 'A block without a query id is untouched.' );
$GLOBALS['novablocks_rendered_posts_ids'] = [];
novablocks_record_query_dedup_exclusions( $collection_query( 10 ) );
nb_expect_same( [], novablocks_apply_query_dedup_exclusions( [], $counting( 10 ), 1 ), 'Nothing rendered above: no post__not_in is added.' );

// 5. Non-query blocks are ignored.
$group = [ 'blockName' => 'core/group', 'attrs' => [ 'queryId' => 11 ], 'innerBlocks' => [ [ 'blockName' => 'novablocks/supernova', 'attrs' => [], 'innerBlocks' => [] ] ] ];
$GLOBALS['novablocks_rendered_posts_ids'] = [ 5 ];
novablocks_record_query_dedup_exclusions( $group );
nb_expect_same( [], novablocks_apply_query_dedup_exclusions( [], $counting( 11 ), 1 ), 'Only core/query blocks record a list.' );

// 6. The cards query merges the exclusion instead of overwriting the loop's own `exclude` list.
$source = file_get_contents( __DIR__ . '/../../lib/block-rendering.php' );
preg_match( '/function novablocks_get_posts_collection_cards_markup\(.*?\n}\n/s', $source, $cards_function );
nb_expect_same( 1, count( $cards_function ), 'The collection cards renderer must exist.' );
nb_expect_same( 0, preg_match( '/\$query_args\[\s*\'post__not_in\'\s*\]\s*=/', $cards_function[0] ?? '' ), 'The cards query must not overwrite post__not_in.' );
nb_expect_same( 1, preg_match( '/novablocks_set_query_dedup_exclusions\(.*?build_query_vars_from_query_block/s', $cards_function[0] ?? '' ), 'The collection refreshes its loop\'s list before building its query.' );

if ( $GLOBALS['nb_test_failures'] ) {
	fwrite( STDERR, implode( "\n\n", $GLOBALS['nb_test_failures'] ) . "\n" );
	exit( 1 );
}

echo "query dedup pagination contract ok\n";
