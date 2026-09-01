<?php
/**
 * `wp pixelgrade blocks describe <block>` — the block VALUE-vocabulary surface (agentic-stack W9).
 *
 * `blocks list --attributes` (W6) answers "what attributes does this block have?" with type +
 * default only. `describe` answers the next question — "what VALUES are valid for each?" — by
 * merging the registered attribute schema with two vocabulary sources (gap report
 * `docs/plans/agentic-stack/nova-blocks-options-coverage.md` §4):
 *
 *   - BUNDLE  — the enums `novablocks_get_block_editor_settings()` already ships (style presets,
 *               motion presets, scrolling effects) + the collection layout recipes. Free.
 *   - CURATED — the ~12 JS control components' inline enums / RangeControl min/max/step, hand-
 *               harvested into `blocks-describe-vocabulary.php` with a file:line citation each.
 *
 * Every attribute carries a `vocabulary` slot and a `source` of "bundle" | "curated" | "none".
 * `source:"none"` with `vocabulary:null` is the HONEST disposition for an attribute we did not
 * curate — describe never invents an enum it did not verify (task honesty rule / contract §2's
 * "never lie" spirit).
 *
 * W11 also exposes whether the block needs a static save body. Nova's generated catalog is made
 * once by the agent harness from the real editor serializer; this runtime only reads those bytes.
 * A registered server renderer remains authoritative for `dynamic`; default-only serializer output
 * is withheld until every advertised save-affecting slot is parameterized.
 *
 * Surface split matches W6: the whole implementation lives in `novablocks_agent_blocks_describe_core()`,
 * called identically by this WP-CLI callback and by the `pixelgrade/describe-block` ability
 * (`lib/abilities/blocks-abilities.php`). Capability resolution (§3.0) belongs to the surface.
 *
 * @since   2.6.4
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/blocks-describe-vocabulary.php';

/**
 * Describe one registered block's attributes AND their valid value vocabulary.
 *
 * ## OPTIONS
 *
 * <block>
 * : The block to describe. Namespace-qualified (novablocks/hero) or the short name (hero, which
 * resolves to novablocks/hero, then core/hero). An unknown name is an `invalid_params` envelope
 * (exit 1) naming the closest registered matches — never a bare WP-CLI error.
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
 * `ok` — the block was found and described. `invalid_params` — no block resolved from <block>
 * (suggestions in data.suggestions). `permission_denied` — see EXIT CODES.
 *
 * ## EXIT CODES
 *
 * 0 ok · 1 invalid_params · 3 permission_denied
 *
 * ## EXAMPLES
 *
 *     wp pixelgrade blocks describe novablocks/hero --format=json --user=admin
 *     wp pixelgrade blocks describe supernova --format=json --user=admin | jq '.data.attributes.emphasisArea'
 *     wp pixelgrade blocks describe hero --format=json --user=admin | jq '.data.attributes | to_entries | map(select(.value.source=="curated")) | length'
 *
 * @when after_wp_load
 *
 * @param array $args       Positional arguments: [ <block> ].
 * @param array $assoc_args Associative arguments.
 */
function novablocks_cli_blocks_describe( $args, $assoc_args ) {
	novablocks_cli_require_capability( 'edit_posts', $assoc_args );

	novablocks_cli_emit_core_result(
		novablocks_agent_blocks_describe_core(
			[
				'block' => isset( $args[0] ) ? (string) $args[0] : '',
			]
		),
		$assoc_args
	);
}

/**
 * The whole of `blocks describe`, as a surface-agnostic core (W6 / SHARED-SPEC §4 pattern): block
 * resolution, the schema+vocabulary merge, and the §2 envelope pieces. The WP-CLI callback above
 * and `pixelgrade/describe-block` both call THIS — no second implementation exists.
 *
 * @param array $params `{ block: string }`.
 *
 * @return array `{ exit, code, summary, data, warnings }`.
 */
function novablocks_agent_blocks_describe_core( array $params ): array {
	if ( ! class_exists( 'WP_Block_Type_Registry' ) ) {
		return [
			'exit'     => 1,
			'code'     => 'invalid_params',
			'summary'  => __( 'The block type registry is unavailable (the block editor is not loaded).', '__plugin_txtd' ),
			'data'     => [],
			'warnings' => [],
		];
	}

	$requested = isset( $params['block'] ) ? trim( (string) $params['block'] ) : '';

	if ( '' === $requested ) {
		return [
			'exit'     => 1,
			'code'     => 'invalid_params',
			'summary'  => __( 'No block name given. Pass a block, e.g. `describe novablocks/hero` or `describe hero`.', '__plugin_txtd' ),
			'data'     => [],
			'warnings' => [],
		];
	}

	$registry   = WP_Block_Type_Registry::get_instance();
	$block_name = novablocks_blocks_describe_resolve_block_name( $requested, $registry );

	if ( null === $block_name ) {
		$suggestions = novablocks_blocks_describe_suggest_names( $requested, $registry );

		return [
			'exit'     => 1,
			'code'     => 'invalid_params',
			'summary'  => sprintf(
				/* translators: 1: the requested block name, 2: comma-separated suggestions. */
				__( 'No registered block matches "%1$s". Closest: %2$s.', '__plugin_txtd' ),
				$requested,
				empty( $suggestions ) ? __( '(none)', '__plugin_txtd' ) : implode( ', ', $suggestions )
			),
			'data'     => [
				'requested'   => $requested,
				'suggestions' => $suggestions,
			],
			'warnings' => [],
		];
	}

	$block_type = $registry->get_registered( $block_name );
	$attributes = is_array( $block_type->attributes ) ? $block_type->attributes : [];

	$settings     = function_exists( 'novablocks_get_block_editor_settings' ) ? novablocks_get_block_editor_settings() : [];
	$curated      = novablocks_blocks_describe_curated_vocabulary();
	$bundle_vocab = novablocks_blocks_describe_bundle_vocabulary( is_array( $settings ) ? $settings : [] );

	$described = [];
	$coverage  = [ 'bundle' => 0, 'curated' => 0, 'none' => 0 ];

	foreach ( $attributes as $attr_name => $schema ) {
		$attr_name = (string) $attr_name;
		$schema    = is_array( $schema ) ? $schema : [];

		$resolved = novablocks_blocks_describe_resolve_vocabulary( $block_name, $attr_name, $curated, $bundle_vocab );

		$record = [
			'type'       => $schema['type'] ?? null,
			'default'    => array_key_exists( 'default', $schema ) ? $schema['default'] : null,
			'vocabulary' => $resolved['vocabulary'],
			'source'     => $resolved['source'],
		];

		// A registered enum (rare — 1 of 801 across the stack today) is authoritative: surface it
		// even where nothing is curated, and mark the source honestly as "schema".
		if ( isset( $schema['enum'] ) && is_array( $schema['enum'] ) && null === $record['vocabulary'] ) {
			$record['vocabulary'] = [ 'enum' => array_values( $schema['enum'] ) ];
			$record['source']     = 'schema';
		}

		// colorSignal's valid set is block-dependent: minColorSignal/maxColorSignal supports clamp
		// it (core/button, core/separator forbid 0/None). Clamp the emitted enum to the block's real
		// bounds so describe never advertises an invalid value.
		if ( 'colorSignal' === $attr_name && is_array( $record['vocabulary'] ) ) {
			$record = novablocks_blocks_describe_clamp_color_signal( $record, $block_name, $block_type->supports ?? null );
		}

		if ( '' !== $resolved['note'] ) {
			$record['note'] = $resolved['note'];
		}

		if ( isset( $coverage[ $record['source'] ] ) ) {
			$coverage[ $record['source'] ]++;
		}

		$described[ $attr_name ] = $record;
	}

	ksort( $described );

	$data = [
		'block'           => $block_name,
		'requested'       => $requested,
		'title'           => (string) ( $block_type->title ?? '' ),
		'attribute_count' => count( $described ),
		'coverage'        => $coverage,
		'attributes'      => empty( $described ) ? new stdClass() : $described,
	];

	$save_body         = novablocks_blocks_describe_save_body( $block_name, $block_type );
	$data['save_body'] = $save_body['save_body'];
	if ( 'static' === $save_body['save_body'] ) {
		$data['body_template'] = $save_body['body_template'];
		if ( isset( $save_body['body_template_slots'] ) ) {
			$data['body_template_slots'] = $save_body['body_template_slots'];
		}
		if ( isset( $save_body['note'] ) ) {
			$data['body_template_note'] = $save_body['note'];
		}
	}

	// The stylePreset numeric expansions (the whole point of "set the numbers, not the label") and
	// the collection layout recipes are high-value and cheap; attach them when the block actually
	// carries the governing attribute so the payload stays scoped.
	if ( isset( $described['stylePreset'] ) && is_array( $settings ) && ! empty( $settings['advancedGalleryPresetOptions'] ) ) {
		$data['style_presets'] = $settings['advancedGalleryPresetOptions'];
	}

	if ( ( isset( $described['layoutRecipe'] ) || isset( $described['layoutStyle'] ) ) && is_array( $settings ) ) {
		$data['recipes'] = $settings['collectionLayoutRecipes'] ?? [];
	}

	// Bundle option menus that don't map cleanly onto a single attribute name are surfaced
	// wholesale rather than guessed — an agent can still read them, and describe never pretends
	// they belong to an attribute they might not.
	if ( is_array( $settings ) ) {
		$data['bundle_options'] = array_filter(
			[
				'minimumHeightOptions'  => $settings['minimumHeightOptions'] ?? null,
				'contentPaddingOptions' => $settings['contentPaddingOptions'] ?? null,
				'contentWidthOptions'   => $settings['contentWidthOptions'] ?? null,
				'blobPresetOptions'     => $settings['blobPresetOptions'] ?? null,
				'spaceAndSizingPresets' => $settings['modules']['spaceAndSizing'] ?? null,
			],
			static function ( $value ) {
				return null !== $value;
			}
		);
	}

	return [
		'exit'     => 0,
		'code'     => 'ok',
		'summary'  => sprintf(
			/* translators: 1: block name, 2: attribute count, 3: bundle count, 4: curated count. */
			__( 'Described %1$s: %2$d attributes (%3$d bundle, %4$d curated vocabulary).', '__plugin_txtd' ),
			$block_name,
			count( $described ),
			$coverage['bundle'],
			$coverage['curated']
		),
		'data'     => $data,
		'warnings' => [],
	];
}

/**
 * Read the generated Nova save-body catalog.
 *
 * The JSON is a distributable build-time artifact. Its static templates are serializer output,
 * not PHP copies of JSX; see `tools/agent-harness/bin/generate-describe-bodies.cjs`.
 *
 * @return array Catalog keyed by block name.
 */
function novablocks_blocks_describe_body_catalog(): array {
	static $catalog = null;

	if ( null !== $catalog ) {
		return $catalog;
	}

	$path    = __DIR__ . '/blocks-describe-body-templates.json';
	$decoded = is_readable( $path ) ? json_decode( (string) file_get_contents( $path ), true ) : null;
	$catalog = is_array( $decoded ) && 1 === (int) ( $decoded['schema_version'] ?? 0 ) && is_array( $decoded['blocks'] ?? null )
		? $decoded['blocks']
		: [];

	return $catalog;
}

/**
 * Classify a block's save body and attach its generated static skeleton when curated.
 *
 * A server render callback is authoritative: a block rendered by PHP is dynamic even when its
 * save() preserves fallback or InnerBlocks content. Otherwise the generated harness result records
 * whether the real save() emitted a body. Blocks outside Nova's curated catalog use the WordPress
 * registry definition; their static classification is honest, but no site/version-specific body is
 * invented, so the template is null with an explicit note.
 *
 * @param string        $block_name Registered block name.
 * @param WP_Block_Type $block_type Registered block type.
 *
 * @return array `{ save_body: static|dynamic, body_template?: string|null, body_template_slots?: string[], note?: string }`.
 */
function novablocks_blocks_describe_save_body( string $block_name, WP_Block_Type $block_type ): array {
	$has_renderer = ! empty( $block_type->render_callback ) || ! empty( $block_type->render_template );
	if ( $has_renderer ) {
		return [ 'save_body' => 'dynamic' ];
	}

	$catalog = novablocks_blocks_describe_body_catalog();
	$record  = isset( $catalog[ $block_name ] ) && is_array( $catalog[ $block_name ] ) ? $catalog[ $block_name ] : null;

	if ( is_array( $record ) && in_array( $record['save_body'] ?? '', [ 'static', 'dynamic' ], true ) ) {
		if ( 'dynamic' === $record['save_body'] ) {
			return [ 'save_body' => 'dynamic' ];
		}

		if ( isset( $record['body_template'] ) && is_string( $record['body_template'] ) && '' !== $record['body_template'] ) {
			$result = [
				'save_body'    => 'static',
				'body_template' => $record['body_template'],
			];
			if ( isset( $record['body_template_slots'] ) && is_array( $record['body_template_slots'] ) ) {
				$result['body_template_slots'] = array_values( array_filter( $record['body_template_slots'], 'is_string' ) );
			}
			return $result;
		}

		return [
			'save_body'    => 'static',
			'body_template' => null,
			'note'          => is_string( $record['body_template_note'] ?? null )
				? $record['body_template_note']
				: __( 'The serializer identifies this as a static block, but no fillable body template is curated. Do not author it from describe alone; obtain canonical markup from the editor or harness, then validate/canonicalize.', '__plugin_txtd' ),
		];
	}

	return [
		'save_body'    => 'static',
		'body_template' => null,
		'note'          => __( 'No harness-generated body template is curated for this block. Use validate/canonicalize rather than inventing saved markup.', '__plugin_txtd' ),
	];
}

/**
 * Resolve a requested block name to a registered one.
 *
 * A namespace-qualified name is taken as-is. A bare name is tried as `novablocks/<name>` first
 * (this subtree's own blocks are the common case) then `core/<name>`.
 *
 * @param string                  $requested Raw requested name.
 * @param WP_Block_Type_Registry $registry  The registry.
 *
 * @return string|null The registered block name, or null when none matches.
 */
function novablocks_blocks_describe_resolve_block_name( string $requested, WP_Block_Type_Registry $registry ): ?string {
	$candidates = ( false !== strpos( $requested, '/' ) )
		? [ $requested ]
		: [ 'novablocks/' . $requested, 'core/' . $requested ];

	foreach ( $candidates as $candidate ) {
		if ( $registry->is_registered( $candidate ) ) {
			return $candidate;
		}
	}

	return null;
}

/**
 * Suggest the registered block names closest to an unresolved request — so an unknown name is a
 * helpful `invalid_params` rather than a dead end. Matches on substring first, then Levenshtein
 * distance on the un-namespaced slug.
 *
 * @param string                  $requested Raw requested name.
 * @param WP_Block_Type_Registry $registry  The registry.
 * @param int                     $limit     Max suggestions.
 *
 * @return string[]
 */
function novablocks_blocks_describe_suggest_names( string $requested, WP_Block_Type_Registry $registry, int $limit = 5 ): array {
	$needle = strtolower( $requested );
	$slug   = ( false !== strpos( $needle, '/' ) ) ? substr( $needle, strpos( $needle, '/' ) + 1 ) : $needle;

	$scored = [];
	foreach ( array_keys( $registry->get_all_registered() ) as $name ) {
		$name       = (string) $name;
		$name_slug  = ( false !== strpos( $name, '/' ) ) ? substr( $name, strpos( $name, '/' ) + 1 ) : $name;
		$name_lower = strtolower( $name );

		if ( '' !== $slug && ( false !== strpos( $name_lower, $slug ) || false !== strpos( $slug, strtolower( $name_slug ) ) ) ) {
			$distance = 0; // Substring match ranks first.
		} else {
			$distance = levenshtein( $slug, strtolower( $name_slug ) );
		}

		$scored[ $name ] = $distance;
	}

	asort( $scored );

	// Keep only reasonably close matches: a huge Levenshtein distance is noise, not a suggestion.
	$suggestions = [];
	foreach ( $scored as $name => $distance ) {
		if ( $distance > 6 && count( $suggestions ) > 0 ) {
			break;
		}
		$suggestions[] = $name;
		if ( count( $suggestions ) >= $limit ) {
			break;
		}
	}

	return $suggestions;
}
