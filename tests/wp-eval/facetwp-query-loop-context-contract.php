<?php
/**
 * FacetWP Query Loop context propagation contract.
 *
 * Run inside WordPress with Nova Blocks and Pixelgrade Filters active.
 */

if ( ! function_exists( 'FWP' ) ) {
	throw new RuntimeException( 'Pixelgrade Filters must be active for the Query Loop context contract.' );
}

/**
 * Build a parsed Group > Query > Supernova tree without serialized block markup.
 *
 * @param string $class_name Query Loop class name.
 * @return array Parsed block tree.
 */
function novablocks_test_facetwp_query_tree( string $class_name ): array {
	return [
		'blockName'    => 'core/group',
		'attrs'        => [],
		'innerBlocks'  => [
			[
				'blockName'    => 'core/query',
				'attrs'        => [
					'className' => $class_name,
					'query'     => [
						'perPage'  => 9,
						'pages'    => 0,
						'offset'   => 0,
						'postType' => 'post',
						'order'    => 'desc',
						'orderBy'  => 'date',
						'author'   => '',
						'subtype'  => '',
						'sticky'   => '',
						'inherit'  => false,
					],
				],
				'innerBlocks'  => [
					[
						'blockName'    => 'novablocks/supernova',
						'attrs'        => [ 'contentType' => 'auto' ],
						'innerBlocks'  => [],
						'innerHTML'    => '',
						'innerContent' => [],
					],
				],
				'innerHTML'    => '',
				'innerContent' => [ null ],
			],
		],
		'innerHTML'    => '',
		'innerContent' => [ null ],
	];
}

$captures = [];
$capture_query = static function ( array $query, $block, int $page ) use ( &$captures ): array {
	if ( $block instanceof WP_Block && 'novablocks/supernova' === ( $block->parsed_block['blockName'] ?? '' ) ) {
		$captures[] = [
			'context' => $block->context['query'] ?? [],
			'query'   => $query,
		];
	}

	return $query;
};

add_filter( 'query_loop_block_query_vars', $capture_query, 100, 3 );

$marked_tree  = novablocks_test_facetwp_query_tree( 'listing facetwp-template alignwide' );
$marked_block = new WP_Block( $marked_tree );
$marked_block->render();

if ( 1 !== count( $captures ) ) {
	throw new RuntimeException( 'Expected the marked parsed tree to build exactly one Supernova query.' );
}

if ( true !== ( $captures[0]['context']['facetwp'] ?? null ) ) {
	throw new RuntimeException( 'Expected core/query to provide the FacetWP marker to nested Supernova context.' );
}

if ( true !== ( $captures[0]['query']['facetwp'] ?? null ) ) {
	throw new RuntimeException( 'Expected the nested Supernova query arguments to opt into FacetWP.' );
}

if ( 9 !== ( $captures[0]['query']['posts_per_page'] ?? null ) ) {
	throw new RuntimeException( 'Expected the marked query to preserve its per-page argument.' );
}

$captures = [];
$unmarked_tree  = novablocks_test_facetwp_query_tree( 'listing alignwide' );
$unmarked_block = new WP_Block( $unmarked_tree );
$unmarked_block->render();
remove_filter( 'query_loop_block_query_vars', $capture_query, 100 );

if ( 1 !== count( $captures ) ) {
	throw new RuntimeException( 'Expected the unmarked parsed tree to build exactly one Supernova query.' );
}

if ( array_key_exists( 'facetwp', $captures[0]['context'] ) || array_key_exists( 'facetwp', $captures[0]['query'] ) ) {
	throw new RuntimeException( 'Expected an unmarked Query Loop to remain outside the FacetWP integration.' );
}

echo "FacetWP Query Loop context contract OK\n";
