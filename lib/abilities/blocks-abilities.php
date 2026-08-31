<?php
/**
 * WordPress Abilities API registrations for Nova Blocks — the four `pixelgrade/*` block abilities.
 *
 * The agent-surface contract (`docs/plans/agentic-stack/CONTRACT.md` v0.4.0 §4) gives Nova Blocks
 * four of the stack's 21 abilities: `pixelgrade/list-blocks`, `pixelgrade/list-patterns`,
 * `pixelgrade/validate-post` and `pixelgrade/canonicalize-post`, each mapping 1:1 to a
 * `wp pixelgrade blocks …` command.
 *
 * **These abilities contain no logic of their own.** Every one of them calls the same
 * `novablocks_agent_blocks_*_core()` the WP-CLI callback calls (`lib/cli/blocks-cli-*.php`) and
 * only reshapes the result: the §2 envelope's pieces become a return value on `ok:true` (exit 0 or
 * 2) and a `WP_Error` carrying the command's closed machine token on `ok:false` (exit 1). A
 * parallel second implementation is the one thing §4 forbids outright, so the extraction — the
 * registry filter, the local-wins pattern merge, the per-post record assembly, and above all
 * canonicalize's WRITE path — went into the cores rather than being copied here.
 *
 * Registration is guarded by `function_exists( 'wp_register_ability' )`, so a pre-6.9 site is
 * unaffected and this file is inert.
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
 * Load the shared cores.
 *
 * `lib/cli/blocks-cli.php` requires these only inside a WP-CLI process — deliberately, so an
 * ordinary web request never pays for them. An ability call is an ordinary web request, so it has
 * to load them itself, and it does so lazily: at *call* time, not at registration time, because
 * registering four descriptors must not drag the harness plumbing into every admin page load.
 */
function novablocks_agent_blocks_bootstrap(): void {
	require_once dirname( __DIR__ ) . '/cli/blocks-cli-envelope.php';
	require_once dirname( __DIR__ ) . '/cli/blocks-cli-list-command.php';
	require_once dirname( __DIR__ ) . '/cli/blocks-cli-patterns-command.php';
	require_once dirname( __DIR__ ) . '/cli/blocks-cli-harness.php';
	require_once dirname( __DIR__ ) . '/cli/blocks-cli-validate-command.php';
	require_once dirname( __DIR__ ) . '/cli/blocks-cli-canonicalize-command.php';
}

// -------------------------------------------------------------------------------------------
// Category (SHARED-SPEC §2) — registered defensively and idempotently by each of the four
// Pixelgrade plugins, so the `pixelgrade` category exists with ANY subset of them active.
// -------------------------------------------------------------------------------------------

add_action(
	'wp_abilities_api_categories_init',
	static function () {
		if ( ! function_exists( 'wp_register_ability_category' ) || wp_has_ability_category( 'pixelgrade' ) ) {
			return;
		}

		wp_register_ability_category(
			'pixelgrade',
			[
				'label'       => __( 'Pixelgrade', '__plugin_txtd' ),
				'description' => __( 'Design system, licensing, starter content and block operations for the Pixelgrade stack.', '__plugin_txtd' ),
			]
		);
	}
);

add_action(
	'wp_abilities_api_init',
	static function () {
		novablocks_agent_blocks_register_abilities();
	}
);

/**
 * Register the four Nova Blocks abilities.
 *
 * @param array|null $definitions Optional descriptor set, defaulting to the shipped one. The
 *                                parameter exists so the entitlement seam below can be exercised
 *                                by a test with a descriptor that actually declares an
 *                                `entitlement` — the shipped set deliberately declares none.
 */
function novablocks_agent_blocks_register_abilities( ?array $definitions = null ): void {
	if ( ! function_exists( 'wp_register_ability' ) ) {
		return;
	}

	if ( null === $definitions ) {
		$definitions = novablocks_agent_blocks_ability_definitions();
	}

	foreach ( $definitions as $name => $definition ) {
		$entitlement = (string) ( $definition['entitlement'] ?? '' );

		// SHARED-SPEC §7 / §4's forward policy: an entitlement-gated ability is ABSENT from the
		// registry rather than present-and-refusing. The gated set is deliberately EMPTY today —
		// no Nova Blocks command is entitlement-gated, because Plus gating happens inside the
		// write as stripping (§3.2) — but the seam ships built so the first ability that needs it
		// does not have to invent it.
		if ( '' !== $entitlement && ! novablocks_agent_blocks_has_entitlement( $entitlement ) ) {
			continue;
		}

		wp_register_ability(
			$name,
			[
				'label'               => $definition['label'],
				'description'         => $definition['description'],
				'category'            => 'pixelgrade',
				'input_schema'        => $definition['input_schema'],
				'output_schema'       => $definition['output_schema'],
				'execute_callback'    => $definition['execute_callback'],
				// The entitlement is re-checked INSIDE the permission callback too: registration
				// happens at `init` while entitlement state can change afterwards (a license
				// activated mid-request, dev mode toggled), so a registration-time gate alone
				// would be a gate with a hole in it (§4).
				'permission_callback' => novablocks_agent_blocks_permission_callback( $definition['permission_callback'], $entitlement ),
				'meta'                => [
					'annotations' => $definition['annotations'],
					// Privacy (§4): every ability is PRIVATE by default. Opening one to the curated
					// MCP server is an explicit, reviewed change — and the whitelist is ONE list,
					// owned by Pixelgrade Assistant, reached through this filter. With Assistant
					// absent the filter returns [] and everything here stays private, which is the
					// correct default. Never hardcode a public ability in this plugin.
					'mcp'         => [ 'public' => novablocks_agent_blocks_is_public( (string) $name ) ],
				],
			]
		);
	}
}

/**
 * Whether an ability name is on the single reviewed MCP whitelist.
 *
 * @param string $name Fully-qualified ability name.
 *
 * @return bool
 */
function novablocks_agent_blocks_is_public( string $name ): bool {
	return in_array( $name, (array) apply_filters( 'pixelgrade/mcp/public_abilities', [] ), true );
}

/**
 * Whether the site holds a given entitlement, through the stack's shared seam.
 *
 * @param string $key Entitlement key.
 *
 * @return bool
 */
function novablocks_agent_blocks_has_entitlement( string $key ): bool {
	return (bool) apply_filters( 'pixelgrade/has_entitlement', false, $key );
}

/**
 * Wrap a base permission callback with the entitlement re-check.
 *
 * @param callable $base        The capability check.
 * @param string   $entitlement Entitlement key, or '' for none.
 *
 * @return callable
 */
function novablocks_agent_blocks_permission_callback( callable $base, string $entitlement ): callable {
	return static function ( $input = [] ) use ( $base, $entitlement ) {
		if ( '' !== $entitlement && ! novablocks_agent_blocks_has_entitlement( $entitlement ) ) {
			return new WP_Error(
				'permission_denied',
				sprintf(
					/* translators: %s: the entitlement key. */
					__( 'This ability requires the "%s" entitlement, which this site does not hold.', '__plugin_txtd' ),
					$entitlement
				)
			);
		}

		return call_user_func( $base, (array) $input );
	};
}

// -------------------------------------------------------------------------------------------
// Permission callbacks (SHARED-SPEC §6) — the SAME capability as the CLI verb, never more
// permissive (§4), and never auto-elevating (§3.0).
// -------------------------------------------------------------------------------------------

/**
 * `edit_posts` — the floor every `wp pixelgrade blocks` verb requires.
 *
 * @return bool|WP_Error
 */
function novablocks_agent_blocks_can_edit_posts( array $input = [] ) {
	if ( ! current_user_can( 'edit_posts' ) ) {
		return new WP_Error(
			'permission_denied',
			__( 'This ability requires the "edit_posts" capability.', '__plugin_txtd' )
		);
	}

	return true;
}

/**
 * `edit_posts` PLUS the per-post `edit_post` meta-cap on EVERY requested id.
 *
 * §1.4 (v0.3.12) extends that gate to `validate` as well as `canonicalize`, precisely because an
 * MCP-exposed read is where a confined caller is real: without it, an agent running as a
 * contributor could aim `validate-post` at any id and learn about other users' private posts.
 *
 * The check is not a second implementation — it runs `novablocks_agent_blocks_resolve_targets()`,
 * which is `novablocks_cli_resolve_target_posts()`, the exact loop the commands use, `all_parts`
 * expansion included. A resolution failure that is NOT a permission failure (an unknown id, a
 * `post_type` mismatch) deliberately passes here so the execute callback can answer with the
 * honest `invalid_params` rather than a misleading denial.
 *
 * @param array $input The ability's validated input.
 *
 * @return bool|WP_Error
 */
function novablocks_agent_blocks_can_edit_target_posts( array $input = [] ) {
	$floor = novablocks_agent_blocks_can_edit_posts( $input );

	if ( true !== $floor ) {
		return $floor;
	}

	novablocks_agent_blocks_bootstrap();

	$targets = novablocks_agent_blocks_resolve_targets( novablocks_agent_blocks_target_params( $input ) );

	if ( is_wp_error( $targets ) && 'permission_denied' === $targets->get_error_code() ) {
		return $targets;
	}

	return true;
}

// -------------------------------------------------------------------------------------------
// Execute callbacks — parse/validate typed input, call the shared core, reshape the result.
// -------------------------------------------------------------------------------------------

/**
 * `pixelgrade/list-blocks` → `novablocks_agent_blocks_list_core()`.
 *
 * @param array $input Validated input.
 *
 * @return array|WP_Error
 */
function novablocks_agent_blocks_execute_list( array $input = [] ) {
	novablocks_agent_blocks_bootstrap();

	return novablocks_agent_blocks_ability_result(
		novablocks_agent_blocks_list_core(
			[
				'namespace'  => novablocks_agent_blocks_string_param( $input, 'namespace', 'novablocks' ),
				'attributes' => ! empty( $input['attributes'] ),
				'supports'   => ! empty( $input['supports'] ),
			]
		)
	);
}

/**
 * `pixelgrade/list-patterns` → `novablocks_agent_blocks_patterns_core()`.
 *
 * @param array $input Validated input.
 *
 * @return array|WP_Error
 */
function novablocks_agent_blocks_execute_patterns( array $input = [] ) {
	novablocks_agent_blocks_bootstrap();

	return novablocks_agent_blocks_ability_result(
		novablocks_agent_blocks_patterns_core(
			[
				'source'  => novablocks_agent_blocks_string_param( $input, 'source', 'all' ),
				'refresh' => ! empty( $input['refresh'] ),
			]
		)
	);
}

/**
 * `pixelgrade/validate-post` → `novablocks_agent_blocks_validate_core()`.
 *
 * @param array $input Validated input.
 *
 * @return array|WP_Error
 */
function novablocks_agent_blocks_execute_validate( array $input = [] ) {
	novablocks_agent_blocks_bootstrap();

	return novablocks_agent_blocks_ability_result(
		novablocks_agent_blocks_validate_core( novablocks_agent_blocks_target_params( $input ) )
	);
}

/**
 * `pixelgrade/canonicalize-post` → `novablocks_agent_blocks_canonicalize_core()`.
 *
 * The order here mirrors the CLI callback exactly: resolve the targets FIRST, so a caller with a
 * typo'd id learns that before being told to confirm a destructive write, and only then apply
 * §3.6's confirmation gate. `--via-editor` has no equivalent on purpose — the headless-Chrome
 * fallback is lab-only (§3.11) and must not be reachable from an MCP client.
 *
 * @param array $input Validated input.
 *
 * @return array|WP_Error
 */
function novablocks_agent_blocks_execute_canonicalize( array $input = [] ) {
	novablocks_agent_blocks_bootstrap();

	$params            = novablocks_agent_blocks_target_params( $input );
	$params['dry_run'] = ! empty( $input['dry_run'] );

	$targets = novablocks_agent_blocks_resolve_targets( $params );

	if ( is_wp_error( $targets ) ) {
		return novablocks_agent_blocks_ability_result( novablocks_agent_blocks_error_result( $targets ) );
	}

	// SHARED-SPEC §5: §3.6 binds confirmation to the OUTPUT FORMAT, and an ability is the machine
	// path — the same path on which `--yes` is strictly required and its absence is `ok:false`,
	// `confirmation_required`, exit 1. So `confirm: true` is required here in exactly the same
	// cases, and `dry_run: true` never requires it.
	if ( empty( $params['dry_run'] ) && true !== ( $input['confirm'] ?? false ) ) {
		return new WP_Error(
			'confirmation_required',
			sprintf(
				/* translators: %d: number of posts. */
				__( 'canonicalize-post rewrites stored post content on %d post(s) and is destructive. Pass confirm: true, or dry_run: true to preview without writing.', '__plugin_txtd' ),
				count( $targets )
			),
			[
				'data'     => [ 'posts' => count( $targets ) ],
				'warnings' => [],
			]
		);
	}

	$params['targets'] = $targets;

	return novablocks_agent_blocks_ability_result( novablocks_agent_blocks_canonicalize_core( $params ) );
}

// -------------------------------------------------------------------------------------------
// Input / output plumbing.
// -------------------------------------------------------------------------------------------

/**
 * The `{post_ids, post_type, all_parts}` triple both post-scoped abilities take, normalized.
 *
 * Ids are passed through as scalars rather than pre-filtered, so a bad one is reported by the
 * shared resolver's own `invalid_params` message ("X is not a post id") instead of vanishing.
 * A non-scalar (which the schema already rejects) becomes an empty string, which that same
 * resolver names rather than fataling on an array-to-string conversion.
 *
 * @param array $input Validated input.
 *
 * @return array Core params.
 */
function novablocks_agent_blocks_target_params( array $input ): array {
	$ids = [];
	foreach ( (array) ( $input['post_ids'] ?? [] ) as $id ) {
		$ids[] = is_scalar( $id ) ? $id : '';
	}

	return [
		'post_ids'  => $ids,
		'post_type' => novablocks_agent_blocks_string_param( $input, 'post_type', '' ),
		'all_parts' => ! empty( $input['all_parts'] ),
	];
}

/**
 * Read a string input, tolerating null (absent) and refusing to stringify a structure.
 *
 * @param array  $input   Validated input.
 * @param string $key     Key.
 * @param string $default Default when absent or null.
 *
 * @return string
 */
function novablocks_agent_blocks_string_param( array $input, string $key, string $default ): string {
	if ( ! array_key_exists( $key, $input ) || null === $input[ $key ] ) {
		return $default;
	}

	return is_scalar( $input[ $key ] ) ? (string) $input[ $key ] : '';
}

/**
 * Map a shared core's result onto the Abilities return channel (SHARED-SPEC §4).
 *
 * `ok:true` (exit 0 or 2) returns the WHOLE §2 envelope — a strict superset of "the `data` object
 * plus `warnings`" that additionally preserves `code`, the closed machine token an agent must
 * branch on to notice an exit-2 finding (invalid blocks, a refusal, a non-converging document).
 * Hoisting `data`'s keys to the top level would collide with `warnings` and would mean
 * re-deriving the pinned schemas, which §4 forbids.
 *
 * `ok:false` (exit 1) returns a `WP_Error` whose code is the command's machine token verbatim —
 * the honest mapping of "the machinery did not complete" onto the error channel. Exit 3 never
 * gets here: the permission callback denies first.
 *
 * @param array $result Core-result pieces.
 *
 * @return array|WP_Error
 */
function novablocks_agent_blocks_ability_result( array $result ) {
	$exit     = (int) ( $result['exit'] ?? 1 );
	$code     = (string) ( $result['code'] ?? 'invalid_params' );
	$summary  = (string) ( $result['summary'] ?? '' );
	$data     = (array) ( $result['data'] ?? [] );
	$warnings = array_values( (array) ( $result['warnings'] ?? [] ) );

	if ( 0 === $exit || 2 === $exit ) {
		$envelope = [
			'ok'       => true,
			'code'     => $code,
			'summary'  => $summary,
			'data'     => $data,
			'warnings' => $warnings,
		];

		if ( array_key_exists( 'retryable', (array) ( $result['extra'] ?? [] ) ) ) {
			$envelope['retryable'] = (bool) $result['extra']['retryable'];
		}

		return $envelope;
	}

	$error_data = [
		'data'     => $data,
		'warnings' => $warnings,
	];

	if ( array_key_exists( 'retryable', (array) ( $result['extra'] ?? [] ) ) ) {
		$error_data['retryable'] = (bool) $result['extra']['retryable'];
	}

	return new WP_Error( $code, $summary, $error_data );
}

/**
 * The §2 envelope as an `output_schema`, with `data` typed to one command's pinned payload.
 *
 * Nested payloads this plugin does not fully own (attribute schemas, harness bootstrap facts,
 * warning bodies) stay permissive on purpose: SHARED-SPEC §0 warns that an over-tight schema
 * turns a legitimate result into `ability_invalid_output`, which is a worse failure than a loose
 * description.
 *
 * @param array $data_properties The command's pinned `data` properties.
 *
 * @return array
 */
function novablocks_agent_blocks_output_schema( array $data_properties ): array {
	return [
		'type'                 => 'object',
		'properties'           => [
			'ok'        => [ 'type' => 'boolean' ],
			'code'      => [
				'type'        => 'string',
				'description' => 'Closed machine token. "ok" means nothing to inspect; any other value on a successful call is a FINDING you must read (contract §2 exit 2).',
			],
			'summary'   => [ 'type' => 'string' ],
			'data'      => [
				'type'                 => 'object',
				'properties'           => $data_properties,
				'additionalProperties' => true,
			],
			'warnings'  => [
				'type'  => 'array',
				'items' => [
					'type'                 => 'object',
					'additionalProperties' => true,
				],
			],
			'retryable' => [ 'type' => 'boolean' ],
		],
		'additionalProperties' => true,
	];
}

/**
 * A permissive array-of-objects schema node.
 *
 * @return array
 */
function novablocks_agent_blocks_object_list_schema(): array {
	return [
		'type'  => 'array',
		'items' => [
			'type'                 => 'object',
			'additionalProperties' => true,
		],
	];
}

/**
 * The four ability descriptors.
 *
 * Annotations are §4's table, as data: `list-blocks`/`list-patterns`/`validate-post` are
 * `readonly` and `idempotent`; `canonicalize-post` is `destructive` and `idempotent` (a canonical
 * post canonicalizes to itself — idempotence is a property of the fixed point, which is exactly
 * why the command reaches it rather than reporting progress toward it).
 *
 * Enumerated inputs (`namespace`, `source`) carry their accepted values in prose and are validated
 * inside the core, NOT as a JSON-Schema `enum` — the ability-side reading of §2's flag-validation
 * ruling. A schema rejection produces `ability_invalid_input`, a generic message with no envelope
 * and no accepted set, which is the same unhelpful failure a WP-CLI `options:` enum produces on
 * the CLI side and for the same reason.
 *
 * @return array Descriptors keyed by ability name.
 */
function novablocks_agent_blocks_ability_definitions(): array {
	return [
		'pixelgrade/list-blocks'        => [
			'label'               => __( 'List blocks', '__plugin_txtd' ),
			'description'         => __( 'List the block types actually registered on this site, read live from the WordPress block registry. This is the authoritative block reference — use it instead of any hand-written block documentation, which drifts from the code. Reach for it before authoring or repairing block markup: "attributes": true returns each block\'s real attribute schema and "supports": true its supports config, both omitted by default to keep the payload small. "namespace" selects "novablocks" (Pixelgrade\'s own blocks — the default), "core", or "all"; any other value comes back as invalid_params naming the accepted set. Reads only; writes nothing.', '__plugin_txtd' ),
			'annotations'         => [
				'readonly'    => true,
				'destructive' => false,
				'idempotent'  => true,
			],
			'permission_callback' => 'novablocks_agent_blocks_can_edit_posts',
			'execute_callback'    => 'novablocks_agent_blocks_execute_list',
			'input_schema'        => [
				'type'                 => 'object',
				'properties'           => [
					'namespace'  => [
						'type'        => 'string',
						'default'     => 'novablocks',
						'description' => 'Which registered block types to list. Accepted: "novablocks" (default), "core", "all".',
					],
					'attributes' => [
						'type'        => 'boolean',
						'default'     => false,
						'description' => 'Include each block\'s full attribute schema as registered.',
					],
					'supports'   => [
						'type'        => 'boolean',
						'default'     => false,
						'description' => 'Include each block\'s supports config.',
					],
				],
				'additionalProperties' => false,
			],
			'output_schema'       => novablocks_agent_blocks_output_schema(
				[
					'namespace' => [ 'type' => 'string' ],
					'count'     => [ 'type' => 'integer' ],
					'blocks'    => novablocks_agent_blocks_object_list_schema(),
				]
			),
		],

		'pixelgrade/list-patterns'      => [
			'label'               => __( 'List block patterns', '__plugin_txtd' ),
			'description'         => __( 'List the block patterns available on this site: the locally registered ones (core, theme, plugin) and the Pixelgrade Cloud ones. On a name collision the LOCAL pattern wins and is reported with source "local", because that is the one the site actually serves. "source" accepts "local", "cloud" or "all" (the default); any other value comes back as invalid_params naming the accepted set. "refresh": true bypasses the 6-hour cloud cache and forces a fresh fetch. IMPORTANT: this ability is annotated readonly under the contract\'s cache carve-out, but it is NOT write-free — with source "cloud" or "all", a cache miss (or refresh) performs a network call to Pixelgrade Cloud and WRITES the novablocks_cloud_block_patterns option pair, warming the cache the site itself reads. If the cloud cannot be reached the call fails with code "cloud_fetch_failed" and retryable true; nothing else on the site changes.', '__plugin_txtd' ),
			'annotations'         => [
				'readonly'    => true,
				'destructive' => false,
				'idempotent'  => true,
			],
			'permission_callback' => 'novablocks_agent_blocks_can_edit_posts',
			'execute_callback'    => 'novablocks_agent_blocks_execute_patterns',
			'input_schema'        => [
				'type'                 => 'object',
				'properties'           => [
					'source'  => [
						'type'        => 'string',
						'default'     => 'all',
						'description' => 'Which patterns to list. Accepted: "local", "cloud", "all" (default).',
					],
					'refresh' => [
						'type'        => 'boolean',
						'default'     => false,
						'description' => 'Bypass the 6-hour cloud pattern cache and refetch. Ignored when source is "local". Writes the cache option pair on success.',
					],
				],
				'additionalProperties' => false,
			],
			'output_schema'       => novablocks_agent_blocks_output_schema(
				[
					'source'   => [ 'type' => 'string' ],
					'refresh'  => [ 'type' => 'boolean' ],
					'count'    => [ 'type' => 'integer' ],
					'patterns' => novablocks_agent_blocks_object_list_schema(),
				]
			),
		],

		'pixelgrade/validate-post'      => [
			'label'               => __( 'Validate post blocks', '__plugin_txtd' ),
			'description'         => __( 'Check whether the blocks stored in one or more posts parse the way the block editor would parse them. This is the fact that settles "does this markup actually load in the editor?" — rendering correctly on the front end does not prove it, and content written through the REST API or WP-CLI routinely parses invalid while looking fine. Give it "post_ids"; "post_type" asserts every id is of that type (a mismatch is invalid_params, not a silent skip), and "all_parts": true also walks the site\'s database-resident wp_template and wp_template_part posts, where the recurring failure is a missed footer part. Writes nothing. Findings come back as a successful call with code "invalid_blocks" and data.invalid[] entries of {post_id, index, block_name, reason_code} — block identity only, never any of the stored content. PRECONDITION: this needs the separately-installed Pixelgrade agent-tools harness, a Node package that ships apart from the plugin; without it the call fails with code "harness_unavailable" and a summary naming the install step. Requires edit_posts, plus edit_post on every requested id.', '__plugin_txtd' ),
			'annotations'         => [
				'readonly'    => true,
				'destructive' => false,
				'idempotent'  => true,
			],
			'permission_callback' => 'novablocks_agent_blocks_can_edit_target_posts',
			'execute_callback'    => 'novablocks_agent_blocks_execute_validate',
			'input_schema'        => [
				'type'                 => 'object',
				'properties'           => [
					'post_ids'  => [
						'type'        => 'array',
						'items'       => [ 'type' => 'integer' ],
						'minItems'    => 1,
						'description' => 'One or more post ids. Any post type — pages, posts, wp_template, wp_template_part.',
					],
					'post_type' => [
						'type'        => [ 'string', 'null' ],
						'default'     => null,
						'description' => 'Assert that every given id is of this post type. An id whose type differs fails the whole call.',
					],
					'all_parts' => [
						'type'        => 'boolean',
						'default'     => false,
						'description' => 'Also walk the active theme\'s database-resident wp_template / wp_template_part posts.',
					],
				],
				'required'             => [ 'post_ids' ],
				'additionalProperties' => false,
			],
			'output_schema'       => novablocks_agent_blocks_output_schema(
				[
					'posts'   => novablocks_agent_blocks_object_list_schema(),
					'invalid' => novablocks_agent_blocks_object_list_schema(),
					'harness' => [
						'type'                 => 'object',
						'additionalProperties' => true,
					],
				]
			),
		],

		'pixelgrade/canonicalize-post'  => [
			'label'               => __( 'Canonicalize post blocks', '__plugin_txtd' ),
			'description'         => __( 'Rewrite the stored markup of one or more posts into exactly what the block editor would have saved, then prove it by re-reading the posts from the database and re-parsing them in a fresh process. DESTRUCTIVE: it replaces post_content, so it requires "confirm": true — except under "dry_run": true, which reports the same predicted result and writes nothing. Behaviour you must understand before calling it: it iterates internally to a fixed point, bounded at 3 passes, and a document still moving after 3 passes gets NOTHING written and comes back with code "not_yet_stable"; a rewrite that would change the post\'s visible innerText or nest a <p> inside a paragraph is REFUSED before the write, leaving the post byte-identical, and comes back with code "content_altered" and data.refused[] naming {post_id, lost_length, blocks}; success requires BOTH byte-stability and zero invalid blocks on the fresh re-parse. If the save path mutates the bytes on the way to the database that is an error, code "write_mutated", not a finding. Diagnostics carry post id, block name and index only — never any of the stored content. There is deliberately no via-editor option: that headless-Chrome fallback is lab-only and is not reachable from here. PRECONDITION: needs the separately-installed Pixelgrade agent-tools harness; without it the call fails with code "harness_unavailable" and a summary naming the install step. Requires edit_posts, plus edit_post on every requested id.', '__plugin_txtd' ),
			'annotations'         => [
				'readonly'    => false,
				'destructive' => true,
				'idempotent'  => true,
			],
			'permission_callback' => 'novablocks_agent_blocks_can_edit_target_posts',
			'execute_callback'    => 'novablocks_agent_blocks_execute_canonicalize',
			'input_schema'        => [
				'type'                 => 'object',
				'properties'           => [
					'post_ids'  => [
						'type'        => 'array',
						'items'       => [ 'type' => 'integer' ],
						'minItems'    => 1,
						'description' => 'One or more post ids. Any post type — pages, posts, wp_template, wp_template_part.',
					],
					'post_type' => [
						'type'        => [ 'string', 'null' ],
						'default'     => null,
						'description' => 'Assert that every given id is of this post type. An id whose type differs fails the whole call.',
					],
					'all_parts' => [
						'type'        => 'boolean',
						'default'     => false,
						'description' => 'Also canonicalize the active theme\'s database-resident wp_template / wp_template_part posts — the page AND its chrome.',
					],
					'dry_run'   => [
						'type'        => 'boolean',
						'default'     => false,
						'description' => 'Report the predicted result without writing. Never requires confirm.',
					],
					'confirm'   => [
						'type'        => 'boolean',
						'default'     => false,
						'description' => 'Required for a real write. Without it the call fails with code "confirmation_required" and nothing is touched.',
					],
				],
				'required'             => [ 'post_ids' ],
				'additionalProperties' => false,
			],
			'output_schema'       => novablocks_agent_blocks_output_schema(
				[
					'dry_run'        => [ 'type' => 'boolean' ],
					'posts'          => novablocks_agent_blocks_object_list_schema(),
					'updated'        => [
						'type'  => 'array',
						'items' => [ 'type' => 'integer' ],
					],
					'unchanged'      => [
						'type'  => 'array',
						'items' => [ 'type' => 'integer' ],
					],
					'invalid_before' => novablocks_agent_blocks_object_list_schema(),
					'invalid_after'  => novablocks_agent_blocks_object_list_schema(),
					'not_converged'  => [
						'type'  => 'array',
						'items' => [ 'type' => 'integer' ],
					],
					'not_yet_stable' => [
						'type'  => 'array',
						'items' => [ 'type' => 'integer' ],
					],
					'refused'        => novablocks_agent_blocks_object_list_schema(),
					'harness'        => [
						'type'                 => 'object',
						'additionalProperties' => true,
					],
				]
			),
		],
	];
}
