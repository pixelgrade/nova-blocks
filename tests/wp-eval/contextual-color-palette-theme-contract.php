<?php

$posts = get_posts(
	[
		'post_type'      => 'any',
		'post_status'    => 'publish',
		'posts_per_page' => 1,
		'post__not_in'   => [],
	]
);

if ( empty( $posts ) ) {
	throw new RuntimeException( 'Expected at least one published post to test contextual palette theme integration.' );
}

$post          = $posts[0];
$previous_post = $GLOBALS['post'] ?? null;
$original      = get_post_meta( $post->ID, '_project_color', true );

update_post_meta( $post->ID, '_project_color', '#123456' );

require_once ABSPATH . 'wp-admin/includes/screen.php';
set_current_screen( 'post' );

$previous_get_post = $_GET['post'] ?? null;
$_GET['post']      = (string) $post->ID;

$resolved_post_id = anima_get_contextual_palette_post_id();

if ( (int) $resolved_post_id !== (int) $post->ID ) {
	throw new RuntimeException( 'Expected admin contextual palette post resolution to use the current ?post= value.' );
}

$GLOBALS['post'] = $post;
setup_postdata( $post );

$palettes = apply_filters( 'style_manager/runtime_palettes', [], sm_get_saved_palettes() );

$contextual_palette = null;

foreach ( $palettes as $palette ) {
	if ( isset( $palette->id ) && (string) $palette->id === 'contextual-post' ) {
		$contextual_palette = $palette;
		break;
	}
}

if ( ! $contextual_palette ) {
	throw new RuntimeException( 'Expected theme integration to register a contextual runtime palette for the current post.' );
}

if ( '#123456' !== strtolower( (string) $contextual_palette->source[0] ) ) {
	throw new RuntimeException( 'Expected contextual runtime palette to be derived from the current post color.' );
}

if ( $previous_post instanceof WP_Post ) {
	$GLOBALS['post'] = $previous_post;
	setup_postdata( $previous_post );
} else {
	wp_reset_postdata();
}

update_post_meta( $post->ID, '_project_color', $original );

if ( null === $previous_get_post ) {
	unset( $_GET['post'] );
} else {
	$_GET['post'] = $previous_get_post;
}

echo "contextual color palette theme contract ok\n";
