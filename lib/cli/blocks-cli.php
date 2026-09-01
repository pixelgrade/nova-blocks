<?php
/**
 * WP-CLI subtree: `wp pixelgrade blocks …` — Nova Blocks introspection commands.
 *
 * The agent-surface contract's Nova Blocks slice (`docs/plans/agentic-stack/CONTRACT.md` v0.3.11,
 * §1.4): `list` (registered block types) and `patterns` (local + cloud block patterns). Per §1.4's
 * naming call, the subtree noun *is* `blocks`, so the registry listing is `wp pixelgrade blocks
 * list` (not `blocks blocks list`) and the pattern listing is `wp pixelgrade blocks patterns`.
 *
 * `validate <post-id>…` and `canonicalize <post-id>…` (W4) join them here. Their Node runtime is
 * NOT in the plugin: per §3.11 / Gate-1 it ships as a separate agent-tools package installed on
 * demand, and both verbs report `harness_unavailable` (exit 1, naming the install step) when it is
 * absent. Registration is unconditional so the failure is an envelope, not a missing command.
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
	require_once __DIR__ . '/blocks-cli-describe-command.php';
	require_once __DIR__ . '/blocks-cli-patterns-command.php';
	require_once __DIR__ . '/blocks-cli-harness.php';
	require_once __DIR__ . '/blocks-cli-validate-command.php';
	require_once __DIR__ . '/blocks-cli-canonicalize-command.php';

	\WP_CLI::add_command( 'pixelgrade blocks list', 'novablocks_cli_blocks_list' );
	\WP_CLI::add_command( 'pixelgrade blocks describe', 'novablocks_cli_blocks_describe' );
	\WP_CLI::add_command( 'pixelgrade blocks patterns', 'novablocks_cli_blocks_patterns' );
	\WP_CLI::add_command( 'pixelgrade blocks validate', 'novablocks_cli_blocks_validate' );
	\WP_CLI::add_command( 'pixelgrade blocks canonicalize', 'novablocks_cli_blocks_canonicalize' );
}
