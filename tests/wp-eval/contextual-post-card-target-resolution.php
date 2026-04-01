<?php

if ( ! function_exists( 'novablocks_resolve_contextual_post_card_post' ) ) {
	require_once __DIR__ . '/../../packages/block-library/src/blocks/contextual-post-card/init.php';
}

if ( ! function_exists( 'novablocks_resolve_contextual_post_card_post' ) ) {
	throw new RuntimeException( 'Expected novablocks_resolve_contextual_post_card_post() to exist.' );
}

$assert_same_post = static function ( $expected_post_id, $actual_post, $message ) {
	if ( ! ( $actual_post instanceof WP_Post ) ) {
		throw new RuntimeException( $message . ' Expected a WP_Post instance.' );
	}

	if ( (int) $actual_post->ID !== (int) $expected_post_id ) {
		throw new RuntimeException(
			sprintf(
				'%s Expected post ID %d, got %d.',
				$message,
				(int) $expected_post_id,
				(int) $actual_post->ID
			)
		);
	}
};

$portfolio_ids = get_posts(
	[
		'post_type'      => 'portfolio',
		'post_status'    => 'publish',
		'posts_per_page' => -1,
		'orderby'        => 'date',
		'order'          => 'ASC',
		'fields'         => 'ids',
	]
);

if ( count( $portfolio_ids ) < 3 ) {
	throw new RuntimeException( 'Expected at least three published portfolio posts for this test.' );
}

$oldest_portfolio_id = (int) $portfolio_ids[0];
$newest_portfolio_id = (int) $portfolio_ids[ count( $portfolio_ids ) - 1 ];
$middle_portfolio_id = (int) $portfolio_ids[ count( $portfolio_ids ) - 2 ];

$middle_next = novablocks_resolve_contextual_post_card_post(
	[
		'source' => 'auto',
		'direction' => 'next',
		'loopToFirst' => true,
	],
	$middle_portfolio_id
);

$assert_same_post( $newest_portfolio_id, $middle_next, 'Auto next should resolve the adjacent newer portfolio.' );

$wrapped_next = novablocks_resolve_contextual_post_card_post(
	[
		'source' => 'auto',
		'direction' => 'next',
		'loopToFirst' => true,
	],
	$newest_portfolio_id
);

$assert_same_post( $oldest_portfolio_id, $wrapped_next, 'Auto next should wrap to the oldest portfolio when looping is enabled.' );

$manual_post = novablocks_resolve_contextual_post_card_post(
	[
		'source' => 'manual',
		'manualPostId' => $oldest_portfolio_id,
	],
	$middle_portfolio_id
);

$assert_same_post( $oldest_portfolio_id, $manual_post, 'Manual mode should resolve the explicitly selected post.' );

echo "contextual-post-card target resolution ok\n";
