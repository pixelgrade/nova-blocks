<?php
/**
 * Agent-harness discovery and invocation for `wp pixelgrade blocks validate|canonicalize`.
 *
 * Per the agentic-stack contract (`docs/plans/agentic-stack/CONTRACT.md` v0.3.11) §3.11 and the
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
 * The stdin/stdout protocol version this plugin speaks to the agent harness.
 *
 * Bump it whenever a field either side reads changes shape. Because the harness is a SEPARATELY
 * installed package (§3.11 / Gate-1), version skew between plugin and harness is this
 * architecture's routine failure mode: the handshake turns it into a named `harness_unavailable`
 * instead of silently-absent fields that a lenient reader would treat as "nothing to report".
 *
 * **2 (2026-09-01)** — the response gained `canonical` / `not_canonical_blocks` (`validate`'s
 * fixed-point post-condition) and `nested_paragraph_markup_before|after` (the §5 P3 (c) nested-<p>
 * guard, measured on the serialized bytes instead of the block model). The bump is load-bearing,
 * not ceremonial: against a protocol-1 harness the markup counts are simply absent, `0 > 0` is
 * false, and the nested-<p> gate silently reverts to the model-only comparison — which is the
 * comparison that reads a double-wrap detonation as an improvement and lets the write through.
 * A gate that quietly downgrades itself is worse than one that refuses to run.
 */
const NOVABLOCKS_CLI_HARNESS_PROTOCOL = 2;

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
	novablocks_cli_emit_core_result( novablocks_cli_harness_unavailable_result( $probe, $extra, 'cli' ), $assoc_args );
}

/**
 * The install command as prose, shaped by surface (security review LOW-2 item 2).
 *
 * On the CLI, an operator at a shell benefits from the real, absolute `--prefix` — that is
 * deliberate operator guidance and the landed `blocks-cli-*` contract tests pin its wording
 * verbatim. Over the wp-abilities/MCP surface the SAME summary is what an `edit_posts`-capable
 * remote client reads from the whitelisted `validate-post`/`canonicalize-post` abilities, and an
 * absolute filesystem path there is a server-directory-layout disclosure to that client, not
 * operator guidance. So the install command is named by PACKAGE and relative location on every
 * surface except `cli`, never by the resolved absolute path.
 *
 * @param string $path    The probed absolute harness directory (used only when `$surface` is `cli`).
 * @param string $surface `'cli'` or any other value (e.g. `'ability'`).
 *
 * @return string
 */
function novablocks_cli_harness_install_command_wording( string $path, string $surface ): string {
	if ( 'cli' === $surface ) {
		return sprintf( 'npm ci --omit=dev --prefix %s', $path );
	}

	return sprintf(
		/* translators: %s: the npm package name. */
		__( 'npm ci --omit=dev, run inside the plugin\'s "tools/agent-harness" directory (package %s)', '__plugin_txtd' ),
		'@pixelgrade/agent-harness'
	);
}

/**
 * The §3.11 graceful-absence envelope as core-result pieces, so the CLI and W7's
 * `pixelgrade/validate-post` / `pixelgrade/canonicalize-post` abilities report a missing harness
 * with the identical `code` — the machine contract stays IDENTICAL on both surfaces — while the
 * human-facing `summary` and `data` differ by `$surface` (security review LOW-2 item 2): the CLI
 * keeps its existing absolute-path wording verbatim (pinned by the landed `blocks-cli-*` contract
 * tests), while any other surface — the abilities go through this as `'ability'` — gets
 * relative/install-step wording that names the package and the install command without the site's
 * absolute directory layout. `novablocks_cli_harness_unavailable()` above is now just the CLI path
 * plus an emit.
 *
 * @param array  $probe   A `novablocks_cli_harness_probe()` result.
 * @param string $extra   Optional extra sentence appended to the summary.
 * @param string $surface `'cli'` (default) or `'ability'`.
 *
 * @return array Core-result pieces.
 */
function novablocks_cli_harness_unavailable_result( array $probe, string $extra = '', string $surface = 'cli' ): array {
	$is_cli        = ( 'cli' === $surface );
	$install_step  = $is_cli ? (string) $probe['install_step'] : novablocks_cli_harness_install_command_wording( (string) $probe['path'], $surface );

	switch ( $probe['reason'] ) {
		case 'no_node_binary':
			$summary = __( 'No Node binary found. Set the PIXELGRADE_NODE_BINARY constant, filter "novablocks/node_binary", or put node on PATH.', '__plugin_txtd' );
			break;

		case 'package_missing':
			$summary = $is_cli
				? sprintf(
					/* translators: 1: expected package directory, 2: the install command. */
					__( 'The Pixelgrade agent-harness package is not installed at %1$s. It ships separately from the plugin — install it with: %2$s', '__plugin_txtd' ),
					$probe['path'],
					$install_step
				)
				: sprintf(
					/* translators: %s: the install command. */
					__( 'The Pixelgrade agent-harness package is not installed. It ships separately from the plugin, in the plugin\'s "tools/agent-harness" directory — install it with: %s', '__plugin_txtd' ),
					$install_step
				);
			break;

		default:
			$summary = $is_cli
				? sprintf(
					/* translators: 1: package directory, 2: the install command. */
					__( 'The Pixelgrade agent-harness package at %1$s is present but its runtime does not load (dependencies not installed?). Install them with: %2$s', '__plugin_txtd' ),
					$probe['path'],
					$install_step
				)
				: sprintf(
					/* translators: %s: the install command. */
					__( 'The Pixelgrade agent-harness package is present but its runtime does not load (dependencies not installed?). Install them with: %s', '__plugin_txtd' ),
					$install_step
				);
			break;
	}

	if ( '' !== $extra ) {
		$summary .= ' ' . $extra;
	}

	$data = [
		'reason'       => (string) $probe['reason'],
		'install_step' => $install_step,
	];

	// The absolute directory and the resolved Node binary path are operator-useful ONLY on the
	// CLI (§3.11's "deliberate operator guidance"); on any other surface they are the exact
	// server-directory-layout disclosure LOW-2 item 2 names, so they are omitted from `data` too —
	// a path hidden from the summary but left in `data` would be the same leak one field over.
	if ( $is_cli ) {
		$data['harness_path'] = (string) $probe['path'];
		$data['node_binary']  = (string) $probe['node'];
	}

	return [
		'exit'     => 1,
		'code'     => 'harness_unavailable',
		'summary'  => $summary,
		'data'     => $data,
		'warnings' => [],
	];
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
 * @param string $surface    `'cli'` (default) or `'ability'` — see
 *                            `novablocks_cli_harness_install_command_wording()`; governs only the
 *                            wording of the protocol-mismatch error's install command below, the
 *                            one other place this function's own message could carry the absolute
 *                            harness path (security review LOW-2 item 2).
 *
 * @return array|WP_Error Decoded response, or WP_Error.
 */
function novablocks_cli_harness_invoke( string $mode, array $documents, string $surface = 'cli' ) {
	$path = novablocks_cli_harness_path();
	$node = novablocks_cli_node_binary();

	if ( '' === $node ) {
		return new WP_Error( 'harness_unavailable', __( 'No Node binary resolved.', '__plugin_txtd' ) );
	}

	$request = [
		'protocol'          => NOVABLOCKS_CLI_HARNESS_PROTOCOL,
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

	if ( ! empty( $result['timed_out'] ) ) {
		return new WP_Error(
			'harness_timeout',
			sprintf(
				/* translators: %d: the wall-clock budget in seconds. */
				__( 'The agent harness did not finish within %d seconds and was terminated. Nothing was written.', '__plugin_txtd' ),
				(int) $result['timeout']
			)
		);
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

	// Protocol handshake (§3.11's "never a silent degrade", applied to the one failure mode a
	// separately-installed package makes routine). A harness speaking a different protocol may
	// omit fields this side reads — including the innerText digests the §5 P3 (c) gate depends on —
	// so version skew is refused up front rather than discovered as absent data.
	$protocol = isset( $decoded['protocol'] ) ? (int) $decoded['protocol'] : 0;

	if ( NOVABLOCKS_CLI_HARNESS_PROTOCOL !== $protocol ) {
		return new WP_Error(
			'harness_unavailable',
			sprintf(
				/* translators: 1: plugin protocol, 2: harness protocol, 3: the install command. */
				__( 'Agent-harness protocol mismatch: this plugin speaks protocol %1$d, the installed harness speaks %2$d. Update the agent-tools package: %3$s', '__plugin_txtd' ),
				NOVABLOCKS_CLI_HARNESS_PROTOCOL,
				$protocol,
				novablocks_cli_harness_install_command_wording( $path, $surface )
			)
		);
	}

	if ( empty( $decoded['ok'] ) ) {
		$code = isset( $decoded['code'] ) ? (string) $decoded['code'] : 'harness_failed';

		if ( 'harness_degraded' === $code ) {
			return new WP_Error(
				'harness_degraded',
				sprintf(
					/* translators: %s: the harness's own description of the failed bundles. */
					__( 'The agent harness could not load the site\'s full editor bundle set, so the block registry is incomplete and neither validation nor serialization would be trustworthy. Nothing was written. %s', '__plugin_txtd' ),
					isset( $decoded['error'] ) ? (string) $decoded['error'] : ''
				)
			);
		}

		return new WP_Error(
			'protocol_mismatch' === $code ? 'harness_unavailable' : 'harness_failed',
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
 * The wall-clock budget for one harness invocation, in seconds.
 *
 * Scales with the payload, because a 200-block page legitimately takes longer than a footer part,
 * and is filterable for pathological corpora.
 *
 * @param int $payload_bytes Size of the request being sent.
 *
 * @return int Seconds.
 */
function novablocks_cli_harness_timeout( int $payload_bytes ): int {
	$timeout = (int) max( 60, 30 + ceil( $payload_bytes / MB_IN_BYTES ) * 10 );

	/**
	 * Filters the wall-clock budget for one agent-harness invocation.
	 *
	 * @since 2.6.0
	 *
	 * @param int $timeout       Seconds.
	 * @param int $payload_bytes Size of the request.
	 */
	return (int) apply_filters( 'novablocks/agent_harness_timeout', $timeout, $payload_bytes );
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

	// A wall-clock deadline, not a per-wait one. `stream_select()` returns **0** on timeout, not
	// `false`, so a `false` check never fires on a hang: a child that keeps its pipes open simply
	// makes the loop re-select forever. And `proc_close()` blocks until the child exits, so
	// breaking out of the loop is not enough either — the process has to be killed.
	$timeout   = novablocks_cli_harness_timeout( $length );
	$deadline  = microtime( true ) + $timeout;
	$timed_out = false;

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

		$remaining = $deadline - microtime( true );

		if ( $remaining <= 0 ) {
			$timed_out = true;
			break;
		}

		$ready = @stream_select( $read, $write, $except, (int) max( 1, min( 5, ceil( $remaining ) ) ) );

		if ( false === $ready ) {
			break;
		}

		// 0 means "nothing became ready in that window" — normal while the harness is booting
		// jsdom. It is progress toward the deadline, never a reason to spin freely.
		if ( 0 === $ready ) {
			continue;
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

	if ( $timed_out ) {
		// SIGTERM, a short grace period, then SIGKILL. Without the escalation a child that ignores
		// or blocks on SIGTERM would still wedge `proc_close()` below.
		@proc_terminate( $process, defined( 'SIGTERM' ) ? SIGTERM : 15 );

		$grace = microtime( true ) + 5;
		while ( microtime( true ) < $grace ) {
			$status = @proc_get_status( $process );
			if ( ! is_array( $status ) || empty( $status['running'] ) ) {
				break;
			}
			usleep( 100000 );
		}

		$status = @proc_get_status( $process );
		if ( is_array( $status ) && ! empty( $status['running'] ) ) {
			@proc_terminate( $process, defined( 'SIGKILL' ) ? SIGKILL : 9 );
		}
	}

	foreach ( [ 0, 1, 2 ] as $index ) {
		if ( isset( $pipes[ $index ] ) && is_resource( $pipes[ $index ] ) ) {
			fclose( $pipes[ $index ] );
		}
	}

	$code = proc_close( $process );

	return [
		'code'      => $code,
		'stdout'    => $stdout,
		'stderr'    => $stderr,
		'timed_out' => $timed_out,
		'timeout'   => $timeout,
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
 * Resolve targets from the abilities' TYPED parameter shape.
 *
 * A thin adapter, on purpose: `novablocks_cli_resolve_target_posts()` above stays the single
 * implementation of id parsing, `--post-type` assertion, `--all-parts` expansion **and the
 * per-post `edit_post` meta-cap loop** (§1.4 v0.3.12, which extends that gate to `validate` too).
 * W7's permission callbacks and cores both come through here, so there is exactly one place where
 * "may this user touch this post?" is answered for this subtree — never a second copy that could
 * drift more permissive than the command.
 *
 * @param array  $params     `{ post_ids: int[], post_type?: ?string, all_parts?: bool }`.
 * @param string $capability Per-post meta capability, or '' to skip the per-post check.
 *
 * @return array|WP_Error Target records, or WP_Error.
 */
function novablocks_agent_blocks_resolve_targets( array $params, string $capability = 'edit_post' ) {
	$post_type = isset( $params['post_type'] ) && null !== $params['post_type'] ? (string) $params['post_type'] : '';

	return novablocks_cli_resolve_target_posts(
		array_values( (array) ( $params['post_ids'] ?? [] ) ),
		[
			'post-type' => $post_type,
			'all-parts' => ! empty( $params['all_parts'] ),
		],
		$capability
	);
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
 * Name every source, other than WordPress core and the verified Pixelgrade stack, that hooks
 * `enqueue_block_editor_assets` **in this WP-CLI request**.
 *
 * This is the spike's own minimum mitigation for its highest-severity risk. The harness loads WP
 * core plus Nova Blocks and nothing else, so a third-party plugin registering a
 * `blocks.registerBlockType` or `blocks.getSaveContent.extraProps` filter would change what the
 * real editor serializes while the harness carried on producing its own answer — parity would
 * break **invisibly**. Detection does not fix that (loading arbitrary third-party editor bundles is
 * a later lane), but it turns "wrong for no visible reason" into "wrong, and here is the suspect".
 *
 * Nothing is executed to find out: the hook's registered callbacks are resolved to their defining
 * FILE by reflection, and the file path is matched against the allow-list. Running
 * `do_action( 'enqueue_block_editor_assets' )` to enumerate handles would have side effects on a
 * site this command is only supposed to read.
 *
 * The default allow-list records what the W4 spike verified by grep: on this stack, none of Anima
 * LT, Style Manager, Pixelgrade Plus or Pixelgrade Assistant registers a `blocks.*` filter. It is
 * filterable so a site that has verified another plugin can silence it deliberately, rather than
 * learning to ignore a permanent warning.
 *
 * ## WHAT THIS DETECTOR DOES NOT COVER — read before trusting its silence
 *
 * It reflects over `$GLOBALS['wp_filter']` **inside the WP-CLI request**, and a WP-CLI request is
 * not an admin request. `is_admin()` is false, `current_screen` never fires, and
 * `admin_enqueue_scripts` is never reached — so a plugin that registers its editor assets behind
 * any of those, which is how a well-written plugin does it, **has no callback here to find**. The
 * narrowed, accurate promise is therefore:
 *
 * > This names third-party sources that hook `enqueue_block_editor_assets` UNCONDITIONALLY, at
 * > plugin-load time. It cannot see registrations gated on `is_admin()` / `current_screen`, and it
 * > does not inspect `admin_enqueue_scripts` at all.
 *
 * Measured on the about-athletics lab site: the CLI hook dump listed core, Nova Blocks, Pixelgrade
 * Plus, Anima LT and Pixelgrade Assistant, and the detector was correctly silent. The real Site
 * Editor page on that same site loaded `style-manager/dist/js/site-editor.js`, four
 * `carbon-fields/build/gutenberg/*` bundles, `anima-lt/dist/js/admin/site-editor-style-manager.min.js`
 * and `pixelgrade-assistant/admin/build/docs-window.js` — none of which this function can reach,
 * because Style Manager registers those screens inside `if ( is_admin() )`. (On that stack the
 * verdict was unaffected: the only non-core, non-Nova save filter present was
 * `carbon-fields/blocks`, which is inert for anything outside `carbon-fields/*`. That is a fact
 * about that site, not a property of this detector.)
 *
 * Enumerating the real editor page as an authenticated admin request would close the gap and is
 * the honest fix; it is deliberately NOT done here, because it means credentials, an HTTP round
 * trip and a running web server inside a command whose entire value is that it needs none of the
 * three. So the promise is narrowed instead, and every emitted warning carries the caveat in its
 * own text — see `novablocks_cli_third_party_editor_warnings()`.
 *
 * @return string[] Distinct source labels (plugin/theme directory names, or file paths). An EMPTY
 *                  array means "no unconditional third-party registration was found", never "no
 *                  third party is involved".
 */
function novablocks_cli_third_party_editor_asset_sources(): array {
	if ( empty( $GLOBALS['wp_filter']['enqueue_block_editor_assets'] ) ) {
		return [];
	}

	$allowed = [ 'nova-blocks', 'style-manager', 'pixelgrade-plus', 'pixelgrade-assistant', 'anima' ];

	/**
	 * Filters the path fragments whose `enqueue_block_editor_assets` callbacks the agent harness
	 * treats as verified-safe. WordPress core (`wp-includes`, `wp-admin`) is always allowed.
	 *
	 * @since 2.6.0
	 *
	 * @param string[] $allowed Path fragments.
	 */
	$allowed = (array) apply_filters( 'novablocks/agent_harness_editor_asset_allowlist', $allowed );
	$allowed = array_merge( $allowed, [ 'wp-includes', 'wp-admin' ] );

	$hook    = $GLOBALS['wp_filter']['enqueue_block_editor_assets'];
	$sources = [];

	foreach ( novablocks_cli_hook_callbacks( $hook ) as $callback ) {
		$file = novablocks_cli_callback_file( $callback );

		if ( '' === $file ) {
			continue;
		}

		$normalized = str_replace( '\\', '/', $file );

		foreach ( $allowed as $fragment ) {
			if ( '' !== $fragment && false !== strpos( $normalized, '/' . $fragment ) ) {
				continue 2;
			}
		}

		$sources[ novablocks_cli_source_label( $normalized ) ] = true;
	}

	return array_keys( $sources );
}

/**
 * Flatten a WP hook's registered callables, tolerating both `WP_Hook` and a plain priority array.
 *
 * @param mixed $hook The `$wp_filter` entry.
 *
 * @return array Callables.
 */
function novablocks_cli_hook_callbacks( $hook ): array {
	$buckets = is_object( $hook ) && isset( $hook->callbacks ) ? $hook->callbacks : $hook;

	if ( ! is_array( $buckets ) ) {
		return [];
	}

	$callbacks = [];

	foreach ( $buckets as $priority ) {
		if ( ! is_array( $priority ) ) {
			continue;
		}
		foreach ( $priority as $registered ) {
			if ( isset( $registered['function'] ) ) {
				$callbacks[] = $registered['function'];
			}
		}
	}

	return $callbacks;
}

/**
 * Resolve a callable to the file that defines it.
 *
 * @param mixed $callback A WP hook callable.
 *
 * @return string Absolute file path, or '' when it cannot be resolved.
 */
function novablocks_cli_callback_file( $callback ): string {
	try {
		if ( is_string( $callback ) && false !== strpos( $callback, '::' ) ) {
			$callback = explode( '::', $callback, 2 );
		}

		if ( is_array( $callback ) && 2 === count( $callback ) ) {
			$reflection = new ReflectionMethod( is_object( $callback[0] ) ? get_class( $callback[0] ) : (string) $callback[0], (string) $callback[1] );
		} elseif ( is_object( $callback ) && ! $callback instanceof Closure ) {
			$reflection = new ReflectionMethod( $callback, '__invoke' );
		} else {
			$reflection = new ReflectionFunction( $callback );
		}

		return (string) $reflection->getFileName();
	} catch ( Throwable $error ) {
		// An unresolvable callback is not evidence of a third party; skip it rather than
		// manufacturing a suspect.
		return '';
	}
}

/**
 * Label a file by the plugin or theme directory it lives in.
 *
 * @param string $file Normalized absolute path.
 *
 * @return string Label.
 */
function novablocks_cli_source_label( string $file ): string {
	if ( preg_match( '#/(?:plugins|themes|mu-plugins)/([^/]+)/#', $file, $matches ) ) {
		return $matches[1];
	}

	return $file;
}

/**
 * Build the `third_party_editor_scripts` warning, when there is anything to name.
 *
 * The message carries a STANDING note about the detector's blind spot, not just the suspects it
 * happened to find. A warning that lists two plugins reads as an exhaustive list unless it says
 * otherwise, and this one cannot be exhaustive: `is_admin()`-gated editor registrations do not
 * exist in a WP-CLI request at all. See
 * `novablocks_cli_third_party_editor_asset_sources()`'s docblock for the measured example.
 *
 * The note rides on the warning rather than becoming a warning of its own on every run: a
 * permanent unconditional warning is a warning people learn to skip, which is the failure mode
 * this whole lane is trying to stop repeating.
 *
 * @return array Warnings (zero or one entry).
 */
function novablocks_cli_third_party_editor_warnings(): array {
	$sources = novablocks_cli_third_party_editor_asset_sources();

	if ( empty( $sources ) ) {
		return [];
	}

	return [
		[
			'code'     => 'third_party_editor_scripts',
			'message'  => sprintf(
				/* translators: %s: comma-separated plugin/theme names. */
				__( 'These sources add block-editor assets the harness does not load: %s. If any of them registers a blocks.registerBlockType or blocks.getSaveContent filter, the real editor serializes differently from this result and the verdict is unreliable. Verify, then allow-list them via the "novablocks/agent_harness_editor_asset_allowlist" filter. NOTE: this list covers only UNCONDITIONAL registrations — editor assets a plugin registers behind is_admin() or current_screen, or through admin_enqueue_scripts, do not exist in a WP-CLI request and cannot be enumerated headless, so this list is a floor and never a complete inventory.', '__plugin_txtd' ),
				implode( ', ', $sources )
			),
			'sources'  => array_values( $sources ),
			// Machine-readable form of the caveat above, so a consumer branching on warnings does
			// not have to parse prose to learn the list is a floor.
			'complete' => false,
		],
	];
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

// ---------------------------------------------------------------------------------------
// Shared by both verbs. These live here rather than in either command file: `canonicalize`
// consumes all of them, and defining them in `validate`'s file made the pair depend on
// blocks-cli.php's require ORDER — a coupling nothing declared and nothing tested.
// ---------------------------------------------------------------------------------------

/**
 * Shape target records into the harness's `documents` array.
 *
 * @param array $targets Target records.
 *
 * @return array Documents.
 */
function novablocks_cli_harness_documents( array $targets ): array {
	$documents = [];

	foreach ( $targets as $target ) {
		$documents[] = [
			'id'      => (int) $target['post_id'],
			'content' => (string) $target['content'],
		];
	}

	return $documents;
}

/**
 * Index a harness response's documents by id.
 *
 * @param array $response Harness response.
 *
 * @return array `[ id => document ]`.
 */
function novablocks_cli_index_harness_documents( array $response ): array {
	$by_id = [];

	foreach ( (array) ( $response['documents'] ?? [] ) as $document ) {
		if ( isset( $document['id'] ) ) {
			$by_id[ (int) $document['id'] ] = $document;
		}
	}

	return $by_id;
}

/**
 * Build the §3.8 `preset_detected` warnings for a target set.
 *
 * @param array $targets Target records.
 *
 * @return array Warnings.
 */
function novablocks_cli_preset_warnings( array $targets ): array {
	$presets = novablocks_cli_detect_presets( $targets );

	if ( empty( $presets ) ) {
		return [];
	}

	$tokens = [];
	foreach ( $presets as $hits ) {
		$tokens = array_merge( $tokens, $hits );
	}

	return [
		[
			'code'       => 'preset_detected',
			'message'    => sprintf(
				/* translators: 1: comma-separated post ids, 2: comma-separated attribute/class tokens. */
				__( 'theme.json preset residue found in post(s) %1$s (%2$s). Passed through unchanged — this command never rewrites presets (§3.8) — but Pixelgrade surfaces are Color Signal, not presets.', '__plugin_txtd' ),
				implode( ', ', array_keys( $presets ) ),
				implode( ', ', array_values( array_unique( $tokens ) ) )
			),
			'post_ids'   => array_map( 'intval', array_keys( $presets ) ),
			'attributes' => array_values( array_unique( $tokens ) ),
		],
	];
}

/**
 * Map a WP_Error from the shared resolution/invocation helpers onto the §2 envelope.
 *
 * `permission_denied` keeps exit 3 (§2's permission row); everything else is exit 1.
 *
 * @param WP_Error $error      The error.
 * @param array    $assoc_args The command's assoc_args (for --format).
 */
function novablocks_cli_emit_wp_error( WP_Error $error, array $assoc_args ): void {
	novablocks_cli_emit_core_result( novablocks_agent_blocks_error_result( $error ), $assoc_args );
}
