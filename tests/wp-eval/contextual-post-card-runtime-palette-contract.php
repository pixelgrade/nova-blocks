<?php

if ( ! function_exists( 'novablocks_get_contextual_post_card_palette_payload' ) ) {
	require_once __DIR__ . '/../../packages/block-library/src/blocks/contextual-post-card/init.php';
}

if ( ! function_exists( 'sm_get_palette_runtime_payload' ) ) {
	throw new RuntimeException( 'Expected sm_get_palette_runtime_payload() to exist.' );
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
	throw new RuntimeException( 'Expected at least two published portfolio posts for runtime palette test.' );
}

$target_post = $portfolio_posts[1];

$original_project_color = get_post_meta( $target_post->ID, '_project_color', true );

update_post_meta( $target_post->ID, '_project_color', '#123456' );

$payload = novablocks_get_contextual_post_card_palette_payload( $target_post );
$runtime_payload = sm_get_palette_runtime_payload(
	[
		'post_id'          => $target_post->ID,
		'contextual_color' => '#123456',
	]
);

if ( empty( $payload['attributes'] ) || ! is_array( $payload['attributes'] ) ) {
	throw new RuntimeException( 'Expected contextual post card palette payload to expose palette attributes.' );
}

if ( 'contextual-post' !== (string) $payload['attributes']['palette'] ) {
	throw new RuntimeException( 'Expected contextual post card palette payload to use the shared contextual-post palette id.' );
}

if ( (string) ( $payload['runtimeCss'] ?? '' ) !== (string) ( $runtime_payload['runtimeCss'] ?? '' ) ) {
	throw new RuntimeException( 'Expected contextual post card runtime CSS to reuse the shared Style Manager runtime payload.' );
}

$contextual_palette = null;

foreach ( (array) ( $runtime_payload['runtimePalettes'] ?? [] ) as $palette ) {
	if ( isset( $palette->id ) && 'contextual-post' === (string) $palette->id ) {
		$contextual_palette = $palette;
		break;
	}
}

if ( ! $contextual_palette ) {
	throw new RuntimeException( 'Expected shared runtime payload to include the contextual-post palette.' );
}

if ( empty( $payload['palette'] ) || 'contextual-post' !== (string) $payload['palette']->id ) {
	throw new RuntimeException( 'Expected contextual post card payload to expose the shared contextual-post palette object.' );
}

update_post_meta( $target_post->ID, '_project_color', $original_project_color );

echo "contextual-post-card runtime palette contract ok\n";
