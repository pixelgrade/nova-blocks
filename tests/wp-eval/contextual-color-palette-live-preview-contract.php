<?php

if ( ! function_exists( 'sm_get_palette_runtime_payload' ) ) {
	throw new RuntimeException( 'Expected sm_get_palette_runtime_payload() to exist.' );
}

$posts = get_posts(
	[
		'post_type'      => 'any',
		'post_status'    => 'publish',
		'posts_per_page' => 1,
	]
);

if ( empty( $posts ) ) {
	throw new RuntimeException( 'Expected at least one published post to test contextual palette live preview.' );
}

$post    = $posts[0];
$context = [
	'post_id'          => (int) $post->ID,
	'contextual_color' => '#abcdef',
];
$payload = sm_get_palette_runtime_preview_payload( $context );
$runtime_payload = sm_get_palette_runtime_payload( $context );

if ( wp_json_encode( $payload['palettes'] ) !== wp_json_encode( $runtime_payload['palettes'] ) ) {
	throw new RuntimeException( 'Expected live preview payload palettes to match the shared runtime payload helper.' );
}

if ( (string) $payload['runtimeCss'] !== (string) $runtime_payload['runtimeCss'] ) {
	throw new RuntimeException( 'Expected live preview runtime CSS to match the shared runtime payload helper.' );
}

$payload = sm_get_palette_runtime_preview_payload(
	[
		'post_id'          => (int) $post->ID,
		'contextual_color' => '#abcdef',
	]
);

if ( empty( $payload['palettes'] ) || ! is_array( $payload['palettes'] ) ) {
	throw new RuntimeException( 'Expected preview payload to contain the merged palettes array.' );
}

if ( ! array_key_exists( 'runtimeCss', $payload ) ) {
	throw new RuntimeException( 'Expected preview payload to expose runtime CSS.' );
}

$contextual_palette = null;

foreach ( $payload['palettes'] as $palette ) {
	if ( isset( $palette->id ) && 'contextual-post' === (string) $palette->id ) {
		$contextual_palette = $palette;
		break;
	}
}

if ( ! $contextual_palette ) {
	throw new RuntimeException( 'Expected live preview payload to include the contextual palette.' );
}

if ( '#abcdef' !== strtolower( (string) $contextual_palette->source[0] ) ) {
	throw new RuntimeException( 'Expected live preview payload to derive the contextual palette from the provided color.' );
}

if ( false === strpos( (string) $payload['runtimeCss'], '.sm-palette-contextual-post' ) ) {
	throw new RuntimeException( 'Expected live preview CSS to include the contextual palette selector.' );
}

echo "contextual color palette live preview contract ok\n";
