<?php
/**
 * `wp pixelgrade blocks patterns` — enumerate local + cloud block patterns.
 *
 * Wraps `WP_Block_Patterns_Registry` for locally-registered patterns and
 * `novablocks_fetch_cloud_block_patterns()` / `novablocks_get_allowed_cloud_block_pattern_tiers()`
 * (`lib/cloud-block-patterns.php`) for Pixelgrade Cloud patterns, per contract §1.4.
 *
 * Cache handling (contract: "bypasses the 6h `novablocks_cloud_block_patterns` cache" on
 * `--refresh`): without `--refresh` this command uses the same `novablocks_cloud_block_patterns`
 * option pair the rest of the site uses, refetching only when that cache is stale/absent.
 * `novablocks_get_cloud_block_patterns_data()` itself only refetches when
 * `novablocks_should_fetch_cloud_block_patterns()` allows it (admin/AJAX/REST requests only) — a
 * WP-CLI process is none of those, so calling that helper directly from here would silently return
 * stale/empty data forever on a CLI-only site. A CLI invocation of this command is an explicit,
 * intentional ask for cloud data, so the cache freshness check is reimplemented here against the
 * same option pair and `novablocks_fetch_cloud_block_patterns()` is called directly — bypassing
 * only the request-context gate, never the cache itself (a successful CLI fetch still warms the
 * real site cache for the next admin/editor request).
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
 * Enumerate local + cloud block patterns.
 *
 * ## OPTIONS
 *
 * [--source=<source>]
 * : Which patterns to list: local|cloud|all. An unrecognized value is an `invalid_params`
 * envelope (exit 1), not a bare WP-CLI parameter error — this flag deliberately carries no
 * WP-CLI `options:` synopsis enum, so a bad value still reaches the code path that emits the
 * contract §2 envelope on STDOUT under --format=json, instead of WP-CLI rejecting it before the
 * command runs and leaving STDOUT empty.
 * ---
 * default: all
 * ---
 *
 * [--refresh]
 * : Bypass the 6h `novablocks_cloud_block_patterns` cache and force a fresh Pixelgrade Cloud fetch.
 * Ignored when --source=local (no cloud call is made).
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
 * `ok` — the listing succeeded. `invalid_params` — an unknown `--source` value.
 * `cloud_fetch_failed` — Pixelgrade Cloud could not be reached (or returned an error/malformed
 * response) while `--source=cloud|all`; `retryable:true`. `permission_denied` — see EXIT CODES.
 *
 * ## EXIT CODES
 *
 * 0 ok · 1 invalid_params|cloud_fetch_failed (retryable:true) · 3 permission_denied
 *
 * ## EXAMPLES
 *
 *     wp pixelgrade blocks patterns --source=cloud --refresh --format=json --user=admin
 *     wp pixelgrade blocks patterns --source=local --format=json --user=admin
 *
 * @when after_wp_load
 *
 * @param array $args       Positional arguments. Unused.
 * @param array $assoc_args Associative arguments.
 */
function novablocks_cli_blocks_patterns( $args, $assoc_args ) {
	novablocks_cli_require_capability( 'edit_posts', $assoc_args );

	$source = (string) novablocks_cli_flag( $assoc_args, 'source', 'all' );
	if ( ! in_array( $source, [ 'local', 'cloud', 'all' ], true ) ) {
		novablocks_cli_emit(
			false,
			'invalid_params',
			sprintf(
				/* translators: %s: the offending --source value. */
				__( 'Unknown --source value "%s". Expected local|cloud|all.', '__plugin_txtd' ),
				$source
			),
			[],
			[],
			1,
			[],
			$assoc_args
		);

		return;
	}

	$refresh = novablocks_cli_bool_flag( $assoc_args, 'refresh' );

	// Keyed by pattern name throughout. Local is collected FIRST and cloud never overwrites an
	// already-present name (see the cloud branch below) — this mirrors
	// `novablocks_register_cloud_block_patterns()`'s own `WP_Block_Patterns_Registry::is_registered()`
	// skip: local/theme patterns register before init@30's cloud pass, so on a name collision the
	// cloud version is NEVER actually registered and the LOCAL pattern is what the site serves.
	// Attributing a colliding name to the cloud record (title/tier included) would describe
	// content the site does not serve.
	$records = [];

	if ( in_array( $source, [ 'local', 'all' ], true ) ) {
		// A warm cloud cache means `novablocks_register_cloud_block_patterns()` (init@30) may
		// already have registered NEW (non-colliding) cloud-origin patterns into
		// WP_Block_Patterns_Registry on this same request — so a bare `--source=local` must
		// exclude those by name, or a warm cache silently makes it double-report them (no tier,
		// double-counted against --source=cloud). The exclusion set is tier-filtered to mirror
		// exactly what init@30 registers (`novablocks_cli_known_cloud_pattern_names()`, cache-only,
		// never a network call) — a disallowed-tier cloud name was never registered by init@30 in
		// the first place, so a local pattern that happens to share that name must still appear
		// under --source=local. `--source=all` needs no such exclusion here: the cloud merge below
		// already yields to whatever name this loop collects.
		$exclude_names = ( 'local' === $source ) ? novablocks_cli_known_cloud_pattern_names() : [];

		foreach ( novablocks_cli_local_registered_patterns() as $name => $record ) {
			if ( in_array( $name, $exclude_names, true ) ) {
				continue;
			}

			$records[ $name ] = $record;
		}
	}

	if ( in_array( $source, [ 'cloud', 'all' ], true ) ) {
		$fetch = novablocks_cli_fetch_cloud_pattern_items( $refresh );

		if ( null === $fetch ) {
			novablocks_cli_emit(
				false,
				'cloud_fetch_failed',
				__( 'Could not reach Pixelgrade Cloud for block patterns. Nothing was returned.', '__plugin_txtd' ),
				[ 'source' => $source ],
				[],
				1,
				[ 'retryable' => true ],
				$assoc_args
			);

			return;
		}

		$allowed_tiers = function_exists( 'novablocks_get_allowed_cloud_block_pattern_tiers' )
			? novablocks_get_allowed_cloud_block_pattern_tiers()
			: [ 'free' ];

		foreach ( novablocks_cli_normalize_cloud_pattern_items( $fetch['items'], $allowed_tiers ) as $name => $record ) {
			if ( 'all' === $source && isset( $records[ $name ] ) ) {
				// H1: a name already collected above (from the local registry, in --source=all)
				// is what `novablocks_register_cloud_block_patterns()` actually kept — the cloud
				// version was skipped by its `is_registered()` guard. Keep the local record.
				continue;
			}

			$records[ $name ] = $record;
		}
	}

	$records = array_values( $records );
	usort(
		$records,
		static function ( $a, $b ) {
			return strcmp( (string) $a['name'], (string) $b['name'] );
		}
	);

	novablocks_cli_emit(
		true,
		'ok',
		sprintf(
			/* translators: 1: number of patterns, 2: --source value. */
			_n( 'Found %1$d block pattern (source: %2$s).', 'Found %1$d block patterns (source: %2$s).', count( $records ), '__plugin_txtd' ),
			count( $records ),
			$source
		),
		[
			'source'   => $source,
			'refresh'  => $refresh,
			'count'    => count( $records ),
			'patterns' => $records,
		],
		[],
		0,
		[],
		$assoc_args
	);
}

/**
 * Locally-registered block patterns (`WP_Block_Patterns_Registry`) — core, theme, and (until the
 * caller excludes them by name — see `novablocks_cli_known_cloud_pattern_names()`) any
 * cloud-registered patterns a warm cache produced via the site's own `init`@30 hook. Reported with
 * `source: "local"` and `tier: null` (the registry does not carry tier once a pattern is
 * registered — see `novablocks_parse_cloud_block_pattern_properties()`, which strips it).
 *
 * @return array Records keyed by pattern name.
 */
function novablocks_cli_local_registered_patterns(): array {
	if ( ! class_exists( 'WP_Block_Patterns_Registry' ) ) {
		return [];
	}

	$records = [];
	foreach ( WP_Block_Patterns_Registry::get_instance()->get_all_registered() as $pattern ) {
		if ( ! is_array( $pattern ) ) {
			continue;
		}

		$name = (string) ( $pattern['name'] ?? '' );
		if ( '' === $name ) {
			continue;
		}

		$records[ $name ] = [
			'name'       => $name,
			'title'      => (string) ( $pattern['title'] ?? '' ),
			'source'     => 'local',
			'categories' => array_values( array_map( 'strval', (array) ( $pattern['categories'] ?? [] ) ) ),
			'tier'       => null,
		];
	}

	return $records;
}

/**
 * Names of every cloud-origin pattern init@30 (`novablocks_register_cloud_block_patterns()`)
 * would actually register from the current cache, read from the same
 * `novablocks_cloud_block_patterns` cache option `novablocks_get_cloud_block_patterns_config()`
 * reads — used to exclude cloud-origin entries from a `--source=local` listing (see the caller).
 *
 * Tier-filtered to MIRROR init@30's own `novablocks_convert_cloud_block_patterns_config()`, which
 * drops a disallowed tier before ever calling `register_block_pattern()`. A disallowed-tier
 * (e.g. locked pro) name is therefore never actually sitting in the registry as a cloud
 * registration — so it must NOT be excluded here: a local pattern that happens to share that name
 * is genuinely local and must still surface under `--source=local` (contract: `local` ∪ `cloud` =
 * `all`, verified by the pro-collision regression test).
 *
 * Cache-only and side-effect-free: `novablocks_get_cloud_block_patterns_config()` only ever
 * triggers a live fetch when `novablocks_should_fetch_cloud_block_patterns()` allows it
 * (admin/AJAX/REST requests), which is never true in a WP-CLI process — so this never touches the
 * network, it just reads whatever is already cached (possibly nothing, on a cold cache).
 *
 * @return string[] Cloud-origin pattern names, tier-filtered to the currently allowed set.
 */
function novablocks_cli_known_cloud_pattern_names(): array {
	if ( ! function_exists( 'novablocks_get_cloud_block_patterns_config' ) ) {
		return [];
	}

	$allowed_tiers = function_exists( 'novablocks_get_allowed_cloud_block_pattern_tiers' )
		? novablocks_get_allowed_cloud_block_pattern_tiers()
		: [ 'free' ];

	$names = [];
	foreach ( novablocks_get_cloud_block_patterns_config( false ) as $item ) {
		if ( ! is_array( $item ) || empty( $item['name'] ) ) {
			continue;
		}

		$tier = function_exists( 'novablocks_get_cloud_block_pattern_tier' ) ? novablocks_get_cloud_block_pattern_tier( $item ) : 'free';
		if ( ! in_array( $tier, $allowed_tiers, true ) ) {
			continue;
		}

		$names[] = (string) $item['name'];
	}

	return $names;
}

/**
 * Fetch cloud block pattern items, respecting the shared 6h cache unless `$refresh` bypasses it.
 *
 * Mirrors `novablocks_get_cloud_block_patterns_data()`'s cache logic against the same
 * `novablocks_get_cloud_block_patterns_cache_key()` option pair, but always attempts a live
 * fetch via `novablocks_fetch_cloud_block_patterns()` when the cache is stale/absent or `$refresh`
 * is set — a CLI caller has no "should I fetch on this request" ambiguity to resolve.
 *
 * @param bool $refresh Force a fresh fetch, bypassing a still-fresh cache.
 *
 * @return array{items: array, from_cache: bool}|null Null signals a fetch failure.
 */
function novablocks_cli_fetch_cloud_pattern_items( bool $refresh ): ?array {
	if ( ! function_exists( 'novablocks_get_cloud_block_patterns_cache_key' ) || ! function_exists( 'novablocks_fetch_cloud_block_patterns' ) ) {
		return null;
	}

	$cache_key      = novablocks_get_cloud_block_patterns_cache_key();
	$cached_data    = get_option( $cache_key );
	$cache_expires  = get_option( $cache_key . '_timestamp' );
	$cache_is_fresh = ( false !== $cached_data && false !== $cache_expires && time() <= (int) $cache_expires );

	if ( ! $refresh && $cache_is_fresh ) {
		$items = ( is_array( $cached_data ) && ! empty( $cached_data['items'] ) && is_array( $cached_data['items'] ) ) ? $cached_data['items'] : [];

		return [
			'items'      => novablocks_cli_apply_raw_items_filter( $items ),
			'from_cache' => true,
		];
	}

	$fetched = novablocks_fetch_cloud_block_patterns();
	if ( false === $fetched ) {
		return null;
	}

	$ttl = function_exists( 'novablocks_get_cloud_block_patterns_cache_ttl' ) ? novablocks_get_cloud_block_patterns_cache_ttl() : ( 6 * HOUR_IN_SECONDS );

	update_option( $cache_key, $fetched, false );
	update_option( $cache_key . '_timestamp', time() + $ttl, false );

	$items = ( is_array( $fetched ) && ! empty( $fetched['items'] ) && is_array( $fetched['items'] ) ) ? $fetched['items'] : [];

	return [
		'items'      => novablocks_cli_apply_raw_items_filter( $items ),
		'from_cache' => false,
	];
}

/**
 * Apply the same `novablocks/cloud_block_patterns_raw_items` extension point
 * `novablocks_get_cloud_block_patterns_config()` applies, so a site using that filter sees the
 * same items in this listing as in what actually gets registered (M2: this listing bypasses that
 * helper for its own cache/refresh handling — see the file docblock — so the filter has to be
 * re-applied explicitly here rather than inherited for free).
 *
 * The second extension point, `novablocks/cloud_block_patterns`, is deliberately NOT re-applied:
 * it runs on the fully-converted `{name, properties}` registration shape (after
 * `novablocks_convert_cloud_block_patterns_config()`), not on raw items, and this listing's
 * payload shape (`{name, title, source, categories, tier}`) is not that shape.
 *
 * @param array $items Raw cloud pattern config items.
 *
 * @return array Filtered items.
 */
function novablocks_cli_apply_raw_items_filter( array $items ): array {
	if ( ! function_exists( 'apply_filters' ) ) {
		return $items;
	}

	$filtered = apply_filters( 'novablocks/cloud_block_patterns_raw_items', $items );

	return is_array( $filtered ) ? $filtered : $items;
}

/**
 * Normalize raw cloud pattern config items into the pinned `data.patterns[]` shape, applying tier
 * filtering via `novablocks_get_allowed_cloud_block_pattern_tiers()` (contract requirement:
 * "Respect tier filtering"). Reuses the plugin's own tier/property parsing
 * (`novablocks_get_cloud_block_pattern_tier()`, `novablocks_parse_cloud_block_pattern_properties()`)
 * so this listing can never drift from what `novablocks_register_cloud_block_patterns()` would
 * actually register.
 *
 * @param array    $raw_items     Raw `items` from the cloud response/cache (keyed or list, either
 *                                 works — only values are read).
 * @param string[] $allowed_tiers Tiers this site may see.
 *
 * @return array Records keyed by pattern name.
 */
function novablocks_cli_normalize_cloud_pattern_items( array $raw_items, array $allowed_tiers ): array {
	$records = [];

	foreach ( $raw_items as $item ) {
		if ( ! is_array( $item ) || empty( $item['name'] ) || empty( $item['properties'] ) || ! is_array( $item['properties'] ) ) {
			continue;
		}

		$name = (string) $item['name'];

		$tier = function_exists( 'novablocks_get_cloud_block_pattern_tier' ) ? novablocks_get_cloud_block_pattern_tier( $item ) : 'free';
		if ( ! in_array( $tier, $allowed_tiers, true ) ) {
			continue;
		}

		$properties = function_exists( 'novablocks_parse_cloud_block_pattern_properties' )
			? novablocks_parse_cloud_block_pattern_properties( $item['properties'] )
			: $item['properties'];

		if ( false === $properties || ! is_array( $properties ) ) {
			continue;
		}

		$categories = array_values( array_map( 'strval', (array) ( $properties['categories'] ?? [] ) ) );
		if ( empty( $categories ) && ! empty( $item['categories'] ) && is_array( $item['categories'] ) ) {
			foreach ( $item['categories'] as $category ) {
				if ( ! is_array( $category ) ) {
					continue;
				}

				if ( ! empty( $category['slug'] ) && function_exists( 'sanitize_title' ) ) {
					$categories[] = sanitize_title( (string) $category['slug'] );
				} elseif ( ! empty( $category['name'] ) && function_exists( 'sanitize_title_with_dashes' ) ) {
					$categories[] = sanitize_title_with_dashes( (string) $category['name'] );
				}
			}

			$categories = array_values( array_unique( array_filter( $categories ) ) );
		}

		$records[ $name ] = [
			'name'       => $name,
			'title'      => (string) ( $properties['title'] ?? '' ),
			'source'     => 'cloud',
			'categories' => $categories,
			'tier'       => $tier,
		];
	}

	return $records;
}
