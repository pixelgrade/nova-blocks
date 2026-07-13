<?php
/**
 * Verifies that Post Meta does not recursively render itself while calculating
 * the current post's reading time.
 */

if ( ! function_exists( 'novablocks_get_post_reading_time_in_minutes' ) ) {
	throw new RuntimeException( 'Expected the Nova reading-time helper to be available.' );
}

$post_id = wp_insert_post(
	[
		'post_type'    => 'page',
		'post_status'  => 'draft',
		'post_title'   => 'Nova Post Meta reading-time contract',
		'post_author'  => 1,
		'post_content' => '<!-- wp:paragraph --><p>Reading-time contract body copy.</p><!-- /wp:paragraph -->'
			. '<!-- wp:novablocks/post-meta /-->',
	]
);

if ( is_wp_error( $post_id ) || empty( $post_id ) ) {
	throw new RuntimeException( 'Expected the reading-time fixture post to be created.' );
}

$post_meta_render_count = 0;
$detect_recursion       = static function ( $pre_render, array $parsed_block ) use ( &$post_meta_render_count ) {
	if ( 'novablocks/post-meta' !== ( $parsed_block['blockName'] ?? '' ) ) {
		return $pre_render;
	}

	// A non-null value means another callback already short-circuited this
	// nested Post Meta before its render callback could recurse.
	if ( null !== $pre_render ) {
		return $pre_render;
	}

	$post_meta_render_count++;

	if ( $post_meta_render_count > 1 ) {
		throw new RuntimeException( 'Post Meta recursively rendered itself while calculating reading time.' );
	}

	return $pre_render;
};

$previous_post   = $GLOBALS['post'] ?? null;
$GLOBALS['post'] = get_post( $post_id );
setup_postdata( $GLOBALS['post'] );

$block = new WP_Block(
	[
		'blockName'    => 'novablocks/post-meta',
		'attrs'        => [],
		'innerBlocks'  => [],
		'innerHTML'    => '',
		'innerContent' => [],
	],
	[
		'postId'   => $post_id,
		'postType' => 'page',
	]
);

add_filter( 'pre_render_block', $detect_recursion, 11, 2 );

try {
	$markup = novablocks_render_post_meta_block( [], '', $block );
} finally {
	remove_filter( 'pre_render_block', $detect_recursion, 11 );

	if ( $previous_post instanceof WP_Post ) {
		$GLOBALS['post'] = $previous_post;
		setup_postdata( $previous_post );
	} else {
		wp_reset_postdata();
	}

	wp_delete_post( $post_id, true );
}

if ( 0 !== $post_meta_render_count ) {
	throw new RuntimeException( 'Expected nested Post Meta blocks to be skipped during reading-time calculation.' );
}

if ( false === strpos( $markup, 'min read' ) ) {
	throw new RuntimeException( 'Expected the outer Post Meta block to render its reading-time label.' );
}

echo "post meta reading-time recursion contract ok\n";
