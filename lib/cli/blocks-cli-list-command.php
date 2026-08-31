<?php
/**
 * `wp pixelgrade blocks list` — enumerate registered block types.
 *
 * Wraps `WP_Block_Type_Registry::get_instance()` AFTER `novablocks_register_block_types()`
 * (`lib/client-assets.php`, `init` @20) per contract §1.4. WP-CLI runs command callbacks under
 * `@when after_wp_load`, which fires after WordPress's own `init` action (including priority 20)
 * has already completed — so by the time this callback runs, every block Nova Blocks and core
 * register is already in the registry. No extra "wait for init" plumbing is needed.
 *
 * This is the introspection surface meant to replace the hand-harvested block reference: with
 * `--attributes`, an agent gets the real, live attribute schema straight from the registry instead
 * of a document that can drift from the code.
 *
 * @since   2.6.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enumerate registered Nova Blocks / core block types.
 *
 * ## OPTIONS
 *
 * [--namespace=<namespace>]
 * : Which registered block types to list: novablocks|core|all. An unrecognized value is an
 * `invalid_params` envelope (exit 1), not a bare WP-CLI parameter error — this flag deliberately
 * carries no WP-CLI `options:` synopsis enum, so a bad value still reaches the code path that
 * emits the contract §2 envelope on STDOUT under --format=json, instead of WP-CLI rejecting it
 * before the command runs and leaving STDOUT empty.
 * ---
 * default: novablocks
 * ---
 *
 * [--attributes]
 * : Include each block's full attribute schema (as registered — block.json `attributes`, or the
 * legacy `novablocks_get_*_attributes()` callback result). Omitted by default to keep plain output
 * light; use this instead of the hand-harvested block reference.
 *
 * [--supports]
 * : Include each block's `supports` config.
 *
 * [--format=<format>]
 * : Output format. Default: table.
 * ---
 * default: table
 * options:
 *   - table
 *   - json
 *   - yaml
 * ---
 *
 * ## CODES
 *
 * `ok` — the listing succeeded (always, once the permission gate passes; an empty registry for a
 * namespace is still `ok`, not an error). `invalid_params` — an unknown `--namespace` value.
 * `permission_denied` — see EXIT CODES.
 *
 * ## EXIT CODES
 *
 * 0 ok · 1 invalid_params · 3 permission_denied
 *
 * ## EXAMPLES
 *
 *     wp pixelgrade blocks list --format=json --user=admin
 *     wp pixelgrade blocks list --namespace=all --attributes --format=json --user=admin | jq '.data.blocks[] | select(.name=="novablocks/headline")'
 *
 * @when after_wp_load
 *
 * @param array $args       Positional arguments. Unused.
 * @param array $assoc_args Associative arguments.
 */
function novablocks_cli_blocks_list( $args, $assoc_args ) {
	novablocks_cli_require_capability( 'edit_posts', $assoc_args );

	novablocks_cli_emit_core_result(
		novablocks_agent_blocks_list_core(
			[
				'namespace'  => (string) novablocks_cli_flag( $assoc_args, 'namespace', 'novablocks' ),
				'attributes' => novablocks_cli_bool_flag( $assoc_args, 'attributes' ),
				'supports'   => novablocks_cli_bool_flag( $assoc_args, 'supports' ),
			]
		),
		$assoc_args
	);
}

/**
 * The whole of `blocks list`, as a surface-agnostic core: registry filter, sort, and the §2
 * envelope pieces. The WP-CLI callback above and `pixelgrade/list-blocks`
 * (`lib/abilities/blocks-abilities.php`) both call THIS — there is no second implementation of
 * the listing anywhere (W7 / SHARED-SPEC §4).
 *
 * The `namespace` enum is validated HERE rather than declared as a WP-CLI `options:` synopsis
 * enum or a JSON-Schema `enum`, for the same reason on both surfaces (§2's flag-validation
 * ruling): a rejection that happens before the callback runs produces a bare parameter error with
 * no envelope to parse, and its ability equivalent — `ability_invalid_input` — is exactly as
 * unhelpful. Naming the offending value and the accepted set is the contract.
 *
 * Capability resolution is deliberately NOT here: §3.0 belongs to the surface (the CLI halts with
 * exit 3; the ability's `permission_callback` denies before `execute_callback` is ever reached).
 *
 * @param array $params `{ namespace?: string, attributes?: bool, supports?: bool }`.
 *
 * @return array `{ exit, code, summary, data, warnings }`.
 */
function novablocks_agent_blocks_list_core( array $params ): array {
	if ( ! class_exists( 'WP_Block_Type_Registry' ) ) {
		return [
			'exit'     => 1,
			'code'     => 'invalid_params',
			'summary'  => __( 'The block type registry is unavailable (the block editor is not loaded).', '__plugin_txtd' ),
			'data'     => [],
			'warnings' => [],
		];
	}

	$namespace = isset( $params['namespace'] ) ? (string) $params['namespace'] : 'novablocks';

	if ( ! in_array( $namespace, [ 'novablocks', 'core', 'all' ], true ) ) {
		return [
			'exit'     => 1,
			'code'     => 'invalid_params',
			'summary'  => sprintf(
				/* translators: %s: the offending --namespace value. */
				__( 'Unknown --namespace value "%s". Expected novablocks|core|all.', '__plugin_txtd' ),
				$namespace
			),
			'data'     => [],
			'warnings' => [],
		];
	}

	$include_attributes = ! empty( $params['attributes'] );
	$include_supports   = ! empty( $params['supports'] );

	$blocks = [];
	foreach ( WP_Block_Type_Registry::get_instance()->get_all_registered() as $name => $block_type ) {
		$name = (string) $name;

		if ( 'novablocks' === $namespace && 0 !== strpos( $name, 'novablocks/' ) ) {
			continue;
		}

		if ( 'core' === $namespace && 0 !== strpos( $name, 'core/' ) ) {
			continue;
		}

		$blocks[] = novablocks_cli_describe_block_type( $block_type, $include_attributes, $include_supports );
	}

	usort(
		$blocks,
		static function ( $a, $b ) {
			return strcmp( (string) $a['name'], (string) $b['name'] );
		}
	);

	return [
		'exit'     => 0,
		'code'     => 'ok',
		'summary'  => sprintf(
			/* translators: 1: number of block types, 2: --namespace value. */
			_n( 'Found %1$d block type (namespace: %2$s).', 'Found %1$d block types (namespace: %2$s).', count( $blocks ), '__plugin_txtd' ),
			count( $blocks ),
			$namespace
		),
		'data'     => [
			'namespace' => $namespace,
			'count'     => count( $blocks ),
			'blocks'    => $blocks,
		],
		'warnings' => [],
	];
}

/**
 * Describe one registered block type for the `data.blocks[]` payload.
 *
 * Pinned schema (contract §4, "W6 `blocks list --attributes`"): every entry always carries
 * `{name, title, api_version, has_render_callback, attribute_count}`; `attributes` / `supports`
 * are added only when the matching flag is passed.
 *
 * @param WP_Block_Type $block_type          The registered block type.
 * @param bool           $include_attributes Whether to include the full attribute schema.
 * @param bool           $include_supports   Whether to include the `supports` config.
 *
 * @return array
 */
function novablocks_cli_describe_block_type( WP_Block_Type $block_type, bool $include_attributes, bool $include_supports ): array {
	$attributes = is_array( $block_type->attributes ) ? $block_type->attributes : [];

	$record = [
		'name'                => (string) $block_type->name,
		'title'               => (string) ( $block_type->title ?? '' ),
		'api_version'         => (int) ( $block_type->api_version ?? 1 ),
		'has_render_callback' => ! empty( $block_type->render_callback ) || ! empty( $block_type->render_template ),
		'attribute_count'     => count( $attributes ),
	];

	if ( $include_attributes ) {
		$record['attributes'] = empty( $attributes ) ? new stdClass() : $attributes;
	}

	if ( $include_supports ) {
		$supports              = is_array( $block_type->supports ) ? $block_type->supports : [];
		$record['supports'] = empty( $supports ) ? new stdClass() : $supports;
	}

	return $record;
}
