<?php
/**
 * Agent-harness discovery and invocation for `wp pixelgrade blocks validate|canonicalize`.
 *
 * Per the agentic-stack contract (`docs/plans/agentic-stack/CONTRACT.md` v0.3.10) §3.11 and the
 * Gate-1 packaging decision, **neither verb carries its runtime in the plugin**. The canonical
 * serializer/validator is a Node program whose dependency is `jsdom` (~25 MB with its transitive
 * tree) — not something a WordPress plugin should carry into every install for a capability almost
 * no site uses. It therefore ships as a separate agent-tools package installed on demand on the
 * lab, agent hosts and CI, and is **excluded from the plugin zip** (see `.zipignore`).
 *
 * The consequence the contract states plainly: on a stock install with only the plugins, `sm`,
 * `plus` and `assist` work fully and these two `blocks` verbs report `harness_unavailable` until
 * the package is present. That is the intended shape, not a gap — so the failure is always
 * `ok:false`, `code:"harness_unavailable"`, exit 1, with a summary that NAMES the install step.
 * Never a stack trace, never a partial write, never a silent degrade to a non-canonical result.
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
 * Where the agent-tools package lives, in §3.11's discovery order.
 *
 * 1. The `PIXELGRADE_AGENT_HARNESS_PATH` constant, if defined.
 * 2. The `novablocks/agent_harness_path` filter.
 * 3. `<plugin>/tools/agent-harness` — present in a git checkout (the lab and CI case), absent
 *    from the distributed zip.
 *
 * @return string Absolute directory path (no trailing slash).
 */
function novablocks_cli_harness_path(): string {
	$path = '';

	if ( defined( 'PIXELGRADE_AGENT_HARNESS_PATH' ) && is_string( PIXELGRADE_AGENT_HARNESS_PATH ) ) {
		$path = PIXELGRADE_AGENT_HARNESS_PATH;
	}

	if ( '' === $path ) {
		$path = rtrim( novablocks_get_plugin_path(), '/' ) . '/tools/agent-harness';
	}

	/**
	 * Filters the directory holding the Pixelgrade agent-harness package.
	 *
	 * @since 2.6.0
	 *
	 * @param string $path Absolute directory path.
	 */
	$path = (string) apply_filters( 'novablocks/agent_harness_path', $path );

	return rtrim( $path, '/' );
}

/**
 * Resolve the Node binary, in §3.11's discovery order: the `PIXELGRADE_NODE_BINARY` constant, else
 * the `novablocks/node_binary` filter, else `node` on `PATH`.
 *
 * @return string Binary path or bare command name; empty string when nothing resolves.
 */
function novablocks_cli_node_binary(): string {
	$binary = '';

	if ( defined( 'PIXELGRADE_NODE_BINARY' ) && is_string( PIXELGRADE_NODE_BINARY ) ) {
		$binary = PIXELGRADE_NODE_BINARY;
	}

	/**
	 * Filters the Node binary used by the agent harness.
	 *
	 * @since 2.6.0
	 *
	 * @param string $binary Binary path or command name. Empty means "look on PATH".
	 */
	$binary = (string) apply_filters( 'novablocks/node_binary', $binary );

	if ( '' !== $binary ) {
		return $binary;
	}

	$found = novablocks_cli_which( 'node' );

	return null === $found ? '' : $found;
}

/**
 * Locate an executable on `PATH` without a shell.
 *
 * `exec( 'command -v node' )` would work, but it is a shell round-trip on a value that can come
 * from a filter — walking `PATH` in PHP keeps the untrusted string out of a shell entirely.
 *
 * @param string $command Command name.
 *
 * @return string|null Absolute path, or null.
 */
function novablocks_cli_which( string $command ): ?string {
	$path_env = (string) getenv( 'PATH' );
	$dirs     = array_filter( explode( PATH_SEPARATOR, $path_env ) );

	// A WP-CLI process started from a GUI/daemon context can inherit a minimal PATH that omits
	// the usual Node install locations, so those are probed after PATH rather than instead of it.
	$dirs = array_merge(
		$dirs,
		[ '/usr/local/bin', '/opt/homebrew/bin', '/usr/bin', rtrim( (string) getenv( 'HOME' ), '/' ) . '/.local/bin' ]
	);

	foreach ( $dirs as $dir ) {
		$candidate = rtrim( $dir, '/' ) . '/' . $command;
		if ( is_file( $candidate ) && is_executable( $candidate ) ) {
			return $candidate;
		}
	}

	return null;
}

/**
 * Probe whether the harness can run at all, before either verb does any other work.
 *
 * Availability means all three of: a Node binary resolves, the package directory carries the
 * entry point, and the runtime actually loads (`--selftest`). The third check is what separates
 * "installed" from "cloned but never `npm ci`-ed" — without it a missing `node_modules` would
 * surface much later as an opaque bootstrap failure instead of an honest `harness_unavailable`.
 *
 * @return array `{ available: bool, reason: string, path: string, node: string, install_step: string }`.
 */
function novablocks_cli_harness_probe(): array {
	$path         = novablocks_cli_harness_path();
	$node         = novablocks_cli_node_binary();
	$entry        = $path . '/bin/harness.cjs';
	$install_step = sprintf( 'npm ci --omit=dev --prefix %s', $path );

	$result = [
		'available'    => false,
		'reason'       => '',
		'path'         => $path,
		'node'         => $node,
		'install_step' => $install_step,
	];

	if ( '' === $node ) {
		$result['reason'] = 'no_node_binary';

		return $result;
	}

	if ( ! is_file( $entry ) ) {
		$result['reason'] = 'package_missing';

		return $result;
	}

	$selftest = novablocks_cli_harness_exec( $node, [ $entry, '--selftest' ], '' );

	if ( ! is_array( $selftest ) || empty( $selftest['stdout'] ) ) {
		$result['reason'] = 'selftest_failed';

		return $result;
	}

	$decoded = json_decode( $selftest['stdout'], true );

	if ( ! is_array( $decoded ) || empty( $decoded['ok'] ) ) {
		$result['reason']  = 'runtime_missing';
		$result['details'] = is_array( $decoded ) && isset( $decoded['error'] ) ? (string) $decoded['error'] : '';

		return $result;
	}

	$result['available'] = true;
	$result['reason']    = 'ok';

	return $result;
}

/**
 * Emit the §3.11 graceful-absence envelope and halt.
 *
 * @param array  $probe      A `novablocks_cli_harness_probe()` result.
 * @param array  $assoc_args The command's assoc_args (for --format).
 * @param string $extra      Optional extra sentence appended to the summary.
 */
function novablocks_cli_harness_unavailable( array $probe, array $assoc_args, string $extra = '' ): void {
	switch ( $probe['reason'] ) {
		case 'no_node_binary':
			$summary = __( 'No Node binary found. Set the PIXELGRADE_NODE_BINARY constant, filter "novablocks/node_binary", or put node on PATH.', '__plugin_txtd' );
			break;

		case 'package_missing':
			$summary = sprintf(
				/* translators: 1: expected package directory, 2: the install command. */
				__( 'The Pixelgrade agent-harness package is not installed at %1$s. It ships separately from the plugin — install it with: %2$s', '__plugin_txtd' ),
				$probe['path'],
				$probe['install_step']
			);
			break;

		default:
			$summary = sprintf(
				/* translators: 1: package directory, 2: the install command. */
				__( 'The Pixelgrade agent-harness package at %1$s is present but its runtime does not load (dependencies not installed?). Install them with: %2$s', '__plugin_txtd' ),
				$probe['path'],
				$probe['install_step']
			);
			break;
	}

	if ( '' !== $extra ) {
		$summary .= ' ' . $extra;
	}

	novablocks_cli_emit(
		false,
		'harness_unavailable',
		$summary,
		[
			'reason'       => (string) $probe['reason'],
			'harness_path' => (string) $probe['path'],
			'node_binary'  => (string) $probe['node'],
			'install_step' => (string) $probe['install_step'],
		],
		[],
		1,
		[],
		$assoc_args
	);
}

/**
 * Run the harness once with a JSON request on stdin.
 *
 * Both pipes are pumped in one non-blocking loop. Writing the whole request first would deadlock:
 * the request carries `get_block_editor_server_block_settings()` (~220 KB on a lab site), far past
 * a 64 KB pipe buffer, so the child must be allowed to drain stdin while PHP drains stdout.
 *
 * @param string $mode       `validate` or `canonicalize`.
 * @param array  $documents  `[ [ 'id' => …, 'content' => … ] ]`.
 *
 * @return array|WP_Error Decoded response, or WP_Error.
 */
function novablocks_cli_harness_invoke( string $mode, array $documents ) {
	$path = novablocks_cli_harness_path();
	$node = novablocks_cli_node_binary();

	if ( '' === $node ) {
		return new WP_Error( 'harness_unavailable', __( 'No Node binary resolved.', '__plugin_txtd' ) );
	}

	$request = [
		'mode'              => $mode,
		'site_bundles_meta' => [
			'abspath'    => ABSPATH,
			'plugin_dir' => rtrim( novablocks_get_plugin_path(), '/' ),
			'site_url'   => home_url( '/' ),
		],
		// The two blobs the spike proved are load-bearing: attribute sets AND their key order come
		// from PHP (block.json declares `attributes: {}`), and core/separator's save() reads the
		// novablocks store, so serialization is not pure without it.
		'server_block_settings'      => function_exists( 'get_block_editor_server_block_settings' ) ? get_block_editor_server_block_settings() : [],
		'novablocks_editor_settings' => function_exists( 'novablocks_get_block_editor_settings' ) ? novablocks_get_block_editor_settings() : [],
		'documents'                  => array_values( $documents ),
	];

	$payload = wp_json_encode( $request );

	if ( false === $payload ) {
		return new WP_Error( 'invalid_params', __( 'Could not encode the harness request as JSON.', '__plugin_txtd' ) );
	}

	$result = novablocks_cli_harness_exec( $node, [ $path . '/bin/harness.cjs' ], $payload );

	if ( ! is_array( $result ) ) {
		return new WP_Error( 'harness_unavailable', __( 'The agent harness could not be started.', '__plugin_txtd' ) );
	}

	$decoded = json_decode( (string) $result['stdout'], true );

	if ( ! is_array( $decoded ) ) {
		return new WP_Error(
			'harness_failed',
			sprintf(
				/* translators: %s: the harness's stderr output, truncated. */
				__( 'The agent harness returned no parsable response. Details: %s', '__plugin_txtd' ),
				substr( trim( (string) $result['stderr'] ), 0, 500 )
			)
		);
	}

	if ( empty( $decoded['ok'] ) ) {
		return new WP_Error(
			'harness_failed',
			sprintf(
				/* translators: %s: the harness's own error message. */
				__( 'The agent harness failed: %s', '__plugin_txtd' ),
				isset( $decoded['error'] ) ? (string) $decoded['error'] : __( 'unknown error', '__plugin_txtd' )
			)
		);
	}

	return $decoded;
}

/**
 * Execute a binary with argv (no shell), feeding stdin and collecting stdout/stderr.
 *
 * @param string   $binary Executable.
 * @param string[] $args   Arguments.
 * @param string   $stdin  Data to write to stdin.
 *
 * @return array|null `{ code, stdout, stderr }`, or null when the process could not start.
 */
function novablocks_cli_harness_exec( string $binary, array $args, string $stdin ): ?array {
	if ( ! function_exists( 'proc_open' ) ) {
		return null;
	}

	$descriptors = [
		0 => [ 'pipe', 'r' ],
		1 => [ 'pipe', 'w' ],
		2 => [ 'pipe', 'w' ],
	];

	$command = array_merge( [ $binary ], $args );
	$process = @proc_open( $command, $descriptors, $pipes );

	if ( ! is_resource( $process ) ) {
		return null;
	}

	stream_set_blocking( $pipes[0], false );
	stream_set_blocking( $pipes[1], false );
	stream_set_blocking( $pipes[2], false );

	$stdout  = '';
	$stderr  = '';
	$written = 0;
	$length  = strlen( $stdin );

	if ( 0 === $length ) {
		// Nothing to send: close stdin at once so a child that waits on EOF (the harness's normal
		// read path) is not left hanging on an empty request.
		fclose( $pipes[0] );
		$pipes[0] = null;
	}

	while ( true ) {
		$read   = [];
		$write  = [];
		$except = null;

		if ( is_resource( $pipes[1] ) ) {
			$read[] = $pipes[1];
		}
		if ( is_resource( $pipes[2] ) ) {
			$read[] = $pipes[2];
		}
		if ( is_resource( $pipes[0] ) && $written < $length ) {
			$write[] = $pipes[0];
		}

		if ( empty( $read ) && empty( $write ) ) {
			break;
		}

		if ( false === @stream_select( $read, $write, $except, 30 ) ) {
			break;
		}

		foreach ( $write as $pipe ) {
			// Suppressed: a child that exits before draining stdin makes this a broken pipe, which
			// is a normal outcome here (the response is already on stdout), not a PHP warning the
			// operator needs to see mixed into the envelope's stream.
			$chunk = @fwrite( $pipe, substr( $stdin, $written, 65536 ) );
			if ( false === $chunk ) {
				$written = $length;
				break;
			}
			$written += $chunk;
			if ( $written >= $length ) {
				fclose( $pipes[0] );
				$pipes[0] = null;
			}
		}

		foreach ( $read as $pipe ) {
			$chunk = fread( $pipe, 65536 );
			if ( '' === $chunk || false === $chunk ) {
				if ( feof( $pipe ) ) {
					if ( isset( $pipes[1] ) && $pipe === $pipes[1] ) {
						fclose( $pipes[1] );
						$pipes[1] = null;
					} elseif ( isset( $pipes[2] ) && $pipe === $pipes[2] ) {
						fclose( $pipes[2] );
						$pipes[2] = null;
					}
				}
				continue;
			}

			if ( isset( $pipes[1] ) && $pipe === $pipes[1] ) {
				$stdout .= $chunk;
			} else {
				$stderr .= $chunk;
			}
		}

		if ( empty( $pipes[1] ) && empty( $pipes[2] ) ) {
			break;
		}
	}

	foreach ( [ 0, 1, 2 ] as $index ) {
		if ( isset( $pipes[ $index ] ) && is_resource( $pipes[ $index ] ) ) {
			fclose( $pipes[ $index ] );
		}
	}

	$code = proc_close( $process );

	return [
		'code'   => $code,
		'stdout' => $stdout,
		'stderr' => $stderr,
	];
}

/**
 * Resolve the posts a `blocks validate|canonicalize` invocation targets.
 *
 * @param array  $args       Positional post ids.
 * @param array  $assoc_args Associative arguments (`--post-type`, `--all-parts`).
 * @param string $capability Per-post meta capability to require, or '' to skip the per-post check.
 *
 * @return array|WP_Error `[ [ 'post_id', 'post_type', 'content', 'origin' ] ]`, or WP_Error.
 */
function novablocks_cli_resolve_target_posts( array $args, array $assoc_args, string $capability = '' ) {
	$ids = [];

	foreach ( $args as $arg ) {
		if ( ! is_numeric( $arg ) || (int) $arg <= 0 ) {
			return new WP_Error(
				'invalid_params',
				sprintf(
					/* translators: %s: the offending argument. */
					__( '"%s" is not a post id.', '__plugin_txtd' ),
					(string) $arg
				)
			);
		}
		$ids[] = (int) $arg;
	}

	if ( empty( $ids ) ) {
		return new WP_Error( 'invalid_params', __( 'At least one post id is required.', '__plugin_txtd' ) );
	}

	$expected_type = novablocks_cli_flag( $assoc_args, 'post-type', '' );
	$expected_type = is_string( $expected_type ) ? trim( $expected_type ) : '';

	$targets = [];
	$unknown = [];

	foreach ( array_unique( $ids ) as $id ) {
		$post = get_post( $id );

		if ( ! $post instanceof WP_Post ) {
			$unknown[] = $id;
			continue;
		}

		if ( '' !== $expected_type && $expected_type !== $post->post_type ) {
			return new WP_Error(
				'invalid_params',
				sprintf(
					/* translators: 1: post id, 2: its actual post type, 3: the requested --post-type. */
					__( 'Post %1$d is a "%2$s", not a "%3$s" — refusing to act on a set --post-type does not describe.', '__plugin_txtd' ),
					$id,
					$post->post_type,
					$expected_type
				)
			);
		}

		$targets[ $post->ID ] = [
			'post_id'   => (int) $post->ID,
			'post_type' => (string) $post->post_type,
			'content'   => (string) $post->post_content,
			'origin'    => 'argument',
		];
	}

	if ( ! empty( $unknown ) ) {
		return new WP_Error(
			'invalid_params',
			sprintf(
				/* translators: %s: comma-separated post ids. */
				__( 'No such post(s): %s.', '__plugin_txtd' ),
				implode( ', ', $unknown )
			)
		);
	}

	if ( novablocks_cli_bool_flag( $assoc_args, 'all-parts' ) ) {
		foreach ( novablocks_cli_collect_template_posts() as $part ) {
			if ( ! isset( $targets[ $part['post_id'] ] ) ) {
				$targets[ $part['post_id'] ] = $part;
			}
		}
	}

	// Contract §1.4 gives `canonicalize` the capability `edit_posts` PLUS a per-post `edit_post`.
	// The per-post check runs over the RESOLVED set, `--all-parts` additions included: a template
	// part is a post like any other, and a user who may not edit it must not have it rewritten.
	if ( '' !== $capability ) {
		$denied = [];
		foreach ( $targets as $target ) {
			if ( ! current_user_can( $capability, $target['post_id'] ) ) {
				$denied[] = $target['post_id'];
			}
		}

		if ( ! empty( $denied ) ) {
			return new WP_Error(
				'permission_denied',
				sprintf(
					/* translators: 1: capability, 2: comma-separated post ids. */
					__( 'The current user lacks "%1$s" on post(s): %2$s.', '__plugin_txtd' ),
					$capability,
					implode( ', ', $denied )
				)
			);
		}
	}

	return array_values( $targets );
}

/**
 * Every database-resident `wp_template` / `wp_template_part` belonging to the active theme.
 *
 * `--all-parts` exists because "the recurring failure is a missed footer part" (§1.4). Two
 * deliberate scoping choices:
 *
 * - **Database-resident only.** A file-based theme template is not a post; there is nothing to
 *   re-parse into and nothing to write back. Only user/agent-authored templates — the ones a
 *   `wp post create` flow produced, which is exactly what §3.9 warns about — are posts.
 * - **All of them, not just the ones that render the named page.** Over-inclusion is safe:
 *   canonicalization is idempotent, so an already-canonical part is reported `unchanged` and costs
 *   one parse. Under-inclusion is the bug the flag exists to prevent, and resolving "which
 *   template renders post N" outside a real query is exactly the guesswork that produces a missed
 *   part.
 *
 * @return array Target records.
 */
function novablocks_cli_collect_template_posts(): array {
	if ( ! function_exists( 'get_posts' ) ) {
		return [];
	}

	$posts = get_posts(
		[
			'post_type'        => [ 'wp_template', 'wp_template_part' ],
			'post_status'      => [ 'publish', 'draft', 'auto-draft', 'pending', 'private' ],
			'numberposts'      => -1,
			'suppress_filters' => false,
			'tax_query'        => [
				[
					'taxonomy' => 'wp_theme',
					'field'    => 'name',
					'terms'    => [ get_stylesheet(), get_template() ],
				],
			],
		]
	);

	$records = [];

	foreach ( $posts as $post ) {
		$records[] = [
			'post_id'   => (int) $post->ID,
			'post_type' => (string) $post->post_type,
			'content'   => (string) $post->post_content,
			'origin'    => 'all-parts',
		];
	}

	return $records;
}

/**
 * Detect theme.json preset residue in content (contract §3.8).
 *
 * `validate` and `canonicalize` pass EXISTING content through: they neither reject nor rewrite
 * presets they encounter — a legacy post or a Pixelgrade demo payload carrying one must still
 * canonicalize. The finding is surfaced as a `preset_detected` warning and the command exits
 * normally. (The rejection half of §3.8 binds commands that take agent-authored markup as input;
 * neither of these does.)
 *
 * @param array $targets Target records.
 *
 * @return array `[ post_id => [ tokens ] ]` for posts carrying preset residue.
 */
function novablocks_cli_detect_presets( array $targets ): array {
	$patterns = [
		'backgroundColor'    => '/"backgroundColor"\s*:/',
		'textColor'          => '/"textColor"\s*:/',
		'gradient'           => '/"gradient"\s*:/',
		'has-*-background-color' => '/\bhas-[a-z0-9-]+-background-color\b/',
		'var:preset|color'   => '/var:preset\|color\|/',
		'--wp--preset--spacing' => '/--wp--preset--spacing--/',
	];

	$found = [];

	foreach ( $targets as $target ) {
		$hits = [];
		foreach ( $patterns as $label => $pattern ) {
			if ( preg_match( $pattern, $target['content'] ) ) {
				$hits[] = $label;
			}
		}
		if ( ! empty( $hits ) ) {
			$found[ (int) $target['post_id'] ] = $hits;
		}
	}

	return $found;
}
