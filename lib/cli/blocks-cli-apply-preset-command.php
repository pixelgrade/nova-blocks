<?php
/**
 * `wp pixelgrade blocks apply-preset <post-id> --preset=<id|role> --block=<selector>` — the agent
 * writer for Color Signal preset tiles (style-manager#210).
 *
 * An agent applies the SAME managed-bundle definitions the editor's Presets tab applies, by id
 * (`button-action`, `row-surface-whisper`, …) or by role (`action`, `light-surface`):
 *
 * 1. the tile resolves for the block's actual context (nearest active Color Signal ancestor,
 *    Palette Basis Offset, live palettes) through `lib/color-tiles.php`, the parity-tested twin
 *    of the editor resolver;
 * 2. the managed patch is applied to the block's comment attributes exactly as the editor's one
 *    `setAttributes()` + WordPress' serializer would leave them (omitted managed attributes back
 *    to their registered defaults, default-equal attributes dropped, nothing outside the
 *    family's boundary touched);
 * 3. the edited document is handed to `blocks canonicalize`'s core, which rebuilds the block's
 *    markup through the editor's own save (the harness), refuses anything that would lose text,
 *    writes once, reads back byte-for-byte and re-parses in a fresh process.
 *
 * The active tile is never stored: `data.preset.active_before|after` are DERIVED from the
 * attributes, as the editor derives them. A repeated identical call is a fixed point: the
 * attributes already match, nothing is written, `code: noop`.
 *
 * @since   2.6.8
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once dirname( __DIR__ ) . '/color-tiles.php';
require_once __DIR__ . '/blocks-describe-core-color-signal.php';

/**
 * Apply a Color Signal preset tile to one block of a post.
 *
 * ## OPTIONS
 *
 * <post-id>
 * : The post holding the block. Any post type — pages, posts, `wp_template`, `wp_template_part`.
 *
 * --preset=<preset>
 * : A tile id (`button-action`, `button-default`, `row-surface-plain` … `row-surface-secondary-bold`)
 * or a role (`action`, `light-surface`).
 *
 * --block=<selector>
 * : Which block: a dotted index path over named blocks (`0`, `2.0.1`), `anchor:<id>`, or
 * `class:<class-name>` (first match in document order).
 *
 * [--dry-run]
 * : Report the resolved patch and the predicted result without writing.
 *
 * [--yes]
 * : Required for a real write under `--format=json|yaml`.
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
 * `ok` — the tile was applied and the post re-parses clean. `noop` — the block already carries
 * the tile's values (fixed point); nothing was written. `unknown_preset`, `block_not_found`,
 * `block_mismatch` (the tile's family does not serve that block type), `preset_unavailable_here`
 * (a direct parent force-syncs this block's color, so no tile can hold — the editor hides the
 * Presets tab there) — exit 1, nothing written. Every `blocks canonicalize` code can also surface.
 *
 * ## EXAMPLES
 *
 *     wp pixelgrade blocks apply-preset 12 --preset=action --block=class:cta --yes --format=json --user=admin
 *     wp pixelgrade blocks apply-preset 12 --preset=light-surface --block=0 --dry-run --format=json --user=admin
 *
 * @when after_wp_load
 *
 * @param array $args       Positional arguments: one post id.
 * @param array $assoc_args Associative arguments.
 */
function novablocks_cli_blocks_apply_preset( $args, $assoc_args ) {
	novablocks_cli_require_capability( 'edit_posts', $assoc_args );

	$dry_run = novablocks_cli_bool_flag( $assoc_args, 'dry-run' );
	$targets = novablocks_cli_resolve_target_posts( array_slice( (array) $args, 0, 1 ), [], 'edit_post' );

	if ( is_wp_error( $targets ) ) {
		novablocks_cli_emit_wp_error( $targets, $assoc_args );

		return;
	}

	if ( ! $dry_run && ! novablocks_cli_confirm_destructive( $assoc_args, count( $targets ) ) ) {
		return;
	}

	novablocks_cli_emit_core_result(
		novablocks_agent_blocks_apply_preset_core(
			[
				'targets' => $targets,
				'preset'  => (string) novablocks_cli_flag( $assoc_args, 'preset', '' ),
				'block'   => (string) novablocks_cli_flag( $assoc_args, 'block', '' ),
				'dry_run' => $dry_run,
			]
		),
		$assoc_args
	);
}

/**
 * Surface-agnostic core shared by the CLI verb and `pixelgrade/apply-block-preset`.
 *
 * @param array $params `{ targets: array (one resolved target), preset: string, block: string,
 *                        dry_run?: bool, surface?: string, context?: array }`. `context` replaces
 *                        the live palette/registry context (tests).
 *
 * @return array `{ exit, code, summary, data, warnings }`.
 */
function novablocks_agent_blocks_apply_preset_core( array $params ): array {
	$dry_run = ! empty( $params['dry_run'] );
	$surface = isset( $params['surface'] ) ? (string) $params['surface'] : 'cli';
	$targets = array_values( (array) ( $params['targets'] ?? [] ) );
	$target  = $targets[0] ?? null;
	$fail    = static function ( string $code, string $summary, array $data = [] ): array {
		return [
			'exit'     => 1,
			'code'     => $code,
			'summary'  => $summary,
			'data'     => $data,
			'warnings' => [],
		];
	};

	if ( ! is_array( $target ) ) {
		return $fail( 'invalid_params', __( 'Exactly one post id is required.', '__plugin_txtd' ) );
	}

	$found = novablocks_color_tiles_find( (string) ( $params['preset'] ?? '' ) );

	if ( null === $found ) {
		return $fail(
			'unknown_preset',
			sprintf(
				/* translators: 1: the requested preset, 2: comma-separated valid presets. */
				__( 'Unknown preset "%1$s". Valid presets: %2$s.', '__plugin_txtd' ),
				(string) ( $params['preset'] ?? '' ),
				implode( ', ', array_keys( novablocks_color_tiles_catalog() ) )
			),
			[ 'presets' => novablocks_color_tiles_catalog() ]
		);
	}

	$content  = (string) $target['content'];
	$blocks   = parse_blocks( $content );
	$location = novablocks_color_tiles_locate( $blocks, (string) ( $params['block'] ?? '' ) );

	if ( null === $location ) {
		return $fail(
			'block_not_found',
			sprintf(
				/* translators: 1: selector, 2: post id. */
				__( 'No block matches "%1$s" in post %2$d. Use a dotted index path over named blocks (0, 2.0.1), anchor:<id> or class:<name>.', '__plugin_txtd' ),
				(string) ( $params['block'] ?? '' ),
				(int) $target['post_id']
			)
		);
	}

	$block      = novablocks_color_tiles_get_block( $blocks, $location['path'] );
	$block_name = (string) $block['blockName'];

	if ( $block_name !== $found['block'] ) {
		return $fail(
			'block_mismatch',
			sprintf(
				/* translators: 1: preset id, 2: the block type it serves, 3: the selected block type. */
				__( 'Preset "%1$s" applies to %2$s blocks; the selected block is %3$s.', '__plugin_txtd' ),
				(string) $found['tile']['id'],
				$found['block'],
				$block_name
			),
			[
				'expected_block' => $found['block'],
				'block_name'     => $block_name,
			]
		);
	}

	$ctx = isset( $params['context'] ) && is_array( $params['context'] ) ? $params['context'] : novablocks_color_tiles_live_context();

	if ( novablocks_color_tiles_parent_forces_sync( $ctx, $location['ancestors'] ) ) {
		return $fail(
			'preset_unavailable_here',
			__( 'The block\'s direct parent force-syncs its color signal (content color signal), so no preset tile can hold here. The editor hides the Presets tab in this position too.', '__plugin_txtd' )
		);
	}

	$family    = $found['family'];
	$managed   = (array) $family['managedAttributes'];
	$defaults  = (array) call_user_func( $ctx['defaults'], $block_name );
	$reference = novablocks_color_tiles_reference( $ctx, $location['ancestors'] );
	$values    = novablocks_color_tiles_resolve( $ctx, $family, $found['tile'], $reference );

	$definitions = [];
	foreach ( (array) $family['tiles'] as $tile ) {
		$definitions[ (string) $tile['id'] ] = novablocks_color_tiles_resolve( $ctx, $family, $tile, $reference );
	}

	$before = (array) ( $block['attrs'] ?? [] );

	// The patched block: managed attributes applied, the editor's mount normalization reproduced
	// (novablocks_color_tiles_mount_normalize()), and any Color Signal save-output classes dropped
	// from the root element and `className` (novablocks_color_tiles_strip_output_classes()).
	$patched          = $block;
	$patched['attrs'] = novablocks_color_tiles_mount_normalize(
		novablocks_color_tiles_apply( $before, $managed, $values, $defaults ),
		$defaults,
		call_user_func( $ctx['support'], $block_name )
	);
	$patched          = novablocks_color_tiles_strip_output_classes( $patched );
	$after            = $patched['attrs'];

	$preset = [
		'id'                  => (string) $found['tile']['id'],
		'version'             => (int) $found['tile']['version'],
		'role'                => $found['role'],
		'block_name'          => $block_name,
		'block'               => (string) $params['block'],
		'reference_variation' => $reference,
		'values'              => (object) $values,
		'attributes_before'   => (object) $before,
		'attributes_after'    => (object) $after,
		'active_before'       => novablocks_color_tiles_derive( $definitions, $managed, $before, $defaults ),
		'active_after'        => novablocks_color_tiles_derive( $definitions, $managed, $after, $defaults ),
	];

	// The fixed point: the block already carries exactly these attributes — write nothing.
	if ( $after === $before ) {
		return [
			'exit'     => 0,
			'code'     => 'noop',
			'summary'  => sprintf(
				/* translators: 1: preset id, 2: post id. */
				__( 'Block already carries preset "%1$s" in post %2$d; nothing written.', '__plugin_txtd' ),
				$preset['id'],
				(int) $target['post_id']
			),
			'data'     => [
				'post_id' => (int) $target['post_id'],
				'dry_run' => $dry_run,
				'preset'  => $preset,
			],
			'warnings' => [],
		];
	}

	$edited                   = $target;
	$edited['stored_content'] = $content;
	$edited['content']        = serialize_blocks( novablocks_color_tiles_replace_block( $blocks, $location['path'], $patched ) );

	$result = novablocks_agent_blocks_canonicalize_core(
		[
			'targets' => [ $edited ],
			'dry_run' => $dry_run,
			'surface' => $surface,
		]
	);

	$result['data']            = (array) ( $result['data'] ?? [] );
	$result['data']['preset']  = $preset;
	$result['data']['post_id'] = (int) $target['post_id'];

	if ( 0 === (int) ( $result['exit'] ?? 1 ) ) {
		$result['summary'] = sprintf(
			/* translators: 1: preset id, 2: block selector, 3: post id, 4: canonicalize summary. */
			__( 'Applied preset "%1$s" to block %2$s in post %3$d. %4$s', '__plugin_txtd' ),
			$preset['id'],
			$preset['block'],
			(int) $target['post_id'],
			(string) ( $result['summary'] ?? '' )
		);
	}

	return $result;
}
