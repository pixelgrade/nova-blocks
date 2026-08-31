<?php
/**
 * WP-CLI subtree: `wp pixelgrade blocks …` — Nova Blocks introspection commands.
 *
 * Read-only slice of the agent-surface contract (`docs/plans/agentic-stack/CONTRACT.md` v0.3.5,
 * §1.4): `list` (registered block types) and `patterns` (local + cloud block patterns). Per §1.4's
 * naming call, the subtree noun *is* `blocks`, so the registry listing is `wp pixelgrade blocks
 * list` (not `blocks blocks list`) and the pattern listing is `wp pixelgrade blocks patterns`.
 *
 * `validate <post-id>…` and `canonicalize <post-id>…` are a separate build lane (W4) and are
 * deliberately NOT registered from here.
 *
 * Registration is guarded by `class_exists( '\WP_CLI' )`, matching the shipped precedent
 * (`Provider\CliCommands::register_hooks()` in Style Manager) — this file is inert outside
 * WP-CLI and adds no new distributable.
 *
 * @since   2.6.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( class_exists( '\WP_CLI' ) ) {
	require_once __DIR__ . '/blocks-cli-envelope.php';
	require_once __DIR__ . '/blocks-cli-list-command.php';
	require_once __DIR__ . '/blocks-cli-patterns-command.php';

	\WP_CLI::add_command( 'pixelgrade blocks list', 'novablocks_cli_blocks_list' );
	\WP_CLI::add_command( 'pixelgrade blocks patterns', 'novablocks_cli_blocks_patterns' );
}
