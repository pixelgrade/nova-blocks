<?php
/**
 * Build the WordPress half of the one-time describe-body generator request.
 *
 * Run through `wp eval-file` (or `studio wp … eval-file`) and pipe stdout into
 * generate-describe-bodies.cjs. The curated set is every server-registered Nova block backed by a
 * shipped editor bundle; site-specific generated blocks such as sidebars are deliberately omitted.
 *
 * @package NovaBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit( 1 );
}

$plugin_dir = rtrim( novablocks_get_plugin_path(), '/' );
$blocks     = [];

foreach ( WP_Block_Type_Registry::get_instance()->get_all_registered() as $name => $type ) {
	if ( 0 !== strpos( $name, 'novablocks/' ) ) {
		continue;
	}

	$slug = substr( $name, strlen( 'novablocks/' ) );
	if ( ! is_file( $plugin_dir . '/build/block-library/blocks/' . $slug . '/index.js' ) ) {
		continue;
	}

	$record = [
		'name'                => $name,
		'has_render_callback' => ! empty( $type->render_callback ) || ! empty( $type->render_template ),
	];

	// Placeholders make the generated Headline skeleton directly fillable without transcribing JSX.
	if ( 'novablocks/headline' === $name ) {
		$record['attributes'] = [
			'level'     => 6,
			'textAlign' => 'right',
			'align'     => 'full',
			'primary'   => '{{primary}}',
			'secondary' => '{{secondary}}',
		];
		$record['template_slots'] = [
			[ 'attribute' => 'level', 'kind' => 'heading_tag', 'value' => 6 ],
			[ 'attribute' => 'textAlign', 'kind' => 'class_suffix', 'prefix' => 'has-text-align-', 'value' => 'right' ],
			[ 'attribute' => 'align', 'kind' => 'class_suffix', 'prefix' => 'align', 'value' => 'full' ],
			[ 'attribute' => 'secondary', 'kind' => 'literal', 'value' => '{{secondary}}' ],
			[ 'attribute' => 'primary', 'kind' => 'literal', 'value' => '{{primary}}' ],
		];
		$record['template_constraints'] = [
			'className' => null,
		];
	}

	$blocks[] = $record;
}

echo wp_json_encode(
	[
		'site_bundles_meta'          => [
			'abspath'    => ABSPATH,
			'plugin_dir' => $plugin_dir,
			'site_url'   => home_url( '/' ),
		],
		'server_block_settings'      => function_exists( 'get_block_editor_server_block_settings' ) ? get_block_editor_server_block_settings() : [],
		'novablocks_editor_settings' => function_exists( 'novablocks_get_block_editor_settings' ) ? novablocks_get_block_editor_settings() : [],
		'blocks'                      => $blocks,
	]
);
