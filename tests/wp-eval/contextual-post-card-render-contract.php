<?php

if ( ! function_exists( 'novablocks_render_contextual_post_card_block' ) ) {
	require_once __DIR__ . '/../../packages/block-library/src/blocks/contextual-post-card/init.php';
}

$portfolio_posts = get_posts(
	[
		'post_type'      => 'portfolio',
		'post_status'    => 'publish',
		'posts_per_page' => 2,
		'orderby'        => 'date',
		'order'          => 'ASC',
	]
);

if ( count( $portfolio_posts ) < 2 ) {
	throw new RuntimeException( 'Expected at least two published portfolio posts for render test.' );
}

$context_post = $portfolio_posts[0];
$target_post  = $portfolio_posts[1];
$old_post     = $GLOBALS['post'] ?? null;

$original_project_color = get_post_meta( $target_post->ID, '_project_color', true );

update_post_meta( $target_post->ID, '_project_color', '#123456' );

$GLOBALS['post'] = $context_post;
setup_postdata( $context_post );

$block = new WP_Block(
	[
		'blockName'    => 'novablocks/contextual-post-card',
		'attrs'        => [
			'source'       => 'manual',
			'manualPostId' => $target_post->ID,
		],
		'innerBlocks'  => [],
		'innerHTML'    => '',
		'innerContent' => [],
	],
	[
		'postId' => $context_post->ID,
	]
);

$markup = novablocks_render_contextual_post_card_block(
	[
		'source'       => 'manual',
		'manualPostId' => $target_post->ID,
	],
	'',
	$block
);

if ( false === strpos( $markup, 'nb-collection__layout-item' ) ) {
	throw new RuntimeException( 'Expected render output to include the standard Nova collection card wrapper.' );
}

if ( false === strpos( $markup, 'nb-collection__layout nb-collection__layout--classic' ) ) {
	throw new RuntimeException( 'Expected render output to include the standard Nova collection layout wrapper.' );
}

if ( false === strpos( $markup, 'nb-supernova--1-columns' ) ) {
	throw new RuntimeException( 'Expected render output to mark the card as a single-column Nova collection item.' );
}

if ( false === strpos( $markup, 'nb-supernova-item__link' ) ) {
	throw new RuntimeException( 'Expected render output to include the standard Nova card link element.' );
}

if ( false === strpos( $markup, '--nb-contextual-post-card-project-color: #123456' ) ) {
	throw new RuntimeException( 'Expected render output to expose the target project color as a CSS variable.' );
}

if ( false === strpos( $markup, '--nb-contextual-post-card-min-height: 50vh' ) ) {
	throw new RuntimeException( 'Expected render output to default to the Pile-style 50vh height.' );
}

if ( false === strpos( $markup, 'data-color="#123456"' ) ) {
	throw new RuntimeException( 'Expected render output to expose the resolved contextual post color on the card link element.' );
}

if ( $old_post instanceof WP_Post ) {
	$GLOBALS['post'] = $old_post;
	setup_postdata( $old_post );
} else {
	wp_reset_postdata();
}

update_post_meta( $target_post->ID, '_project_color', $original_project_color );

echo "contextual-post-card render contract ok\n";
