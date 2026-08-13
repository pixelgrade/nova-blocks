<?php
/**
 * Contract: editor-shell scripts must not execute in the content iframe.
 */

$source = file_get_contents( __DIR__ . '/../../lib/client-assets.php' );

$assert = static function ( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
};

$assert(
	(bool) preg_match(
		"/add_action\(\s*'enqueue_block_editor_assets'\s*,\s*'novablocks_enqueue_package_editor_scripts'\s*\)/",
		$source
	),
	'Nova editor scripts must be enqueued from enqueue_block_editor_assets.'
);

$assert(
	(bool) preg_match(
		"/function\s+novablocks_enqueue_package_editor_scripts\s*\(\s*\)[\s\S]*?wp_enqueue_script\(\s*'novablocks-core'\s*\)[\s\S]*?wp_enqueue_script\(\s*'novablocks-tools'\s*\)/",
		$source
	),
	'The editor-shell callback must enqueue the Nova core and tools runtimes.'
);

preg_match(
	'/function\s+novablocks_enqueue_packages_scripts\s*\(\s*\)\s*\{([\s\S]*?)\n\s*\}\n\}/',
	$source,
	$block_assets_match
);

$assert(
	isset( $block_assets_match[1] ) && ! preg_match(
		"/wp_enqueue_script\(\s*'novablocks-(?:core|tools)'\s*\)/",
		$block_assets_match[1]
	),
	'The content-assets callback must not enqueue editor-shell JavaScript into the content iframe.'
);

echo "WordPress 7.1 editor iframe asset contract passed.\n";
