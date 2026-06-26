<?php
/**
 * One-time, self-healing content normalization for legacy CSS-unit drift.
 *
 * Older saved content (incl. imported starter content) serialized two shared
 * inline CSS custom props with a `px` unit:
 *   --nb-card-media-container-height:50px
 *   --nb-emphasis-area:100px
 * The block save now emits them unitless (matching the editor preview, the PHP
 * frontend render and the SCSS `calc()`), so any block saved with the old `px`
 * form fails editor block-validation ("unexpected or invalid content"). The
 * frontend is unaffected, but the editor shows recovery on those blocks.
 *
 * Because the unit is injected by a shared `getSaveContent.extraProps` filter, a
 * per-block `deprecated` entry cannot reproduce the `px` form, so this normalizes
 * the stored content instead: a precise, idempotent, version-gated rewrite that
 * runs in small batches on admin requests until every post is processed once.
 *
 * @since   2.1.19
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'NOVABLOCKS_CONTENT_NORMALIZATION_VERSION' ) ) {
	// Bump this when a new content-normalization pass is needed.
	define( 'NOVABLOCKS_CONTENT_NORMALIZATION_VERSION', 1 );
}

const NOVABLOCKS_CONTENT_NORMALIZATION_OPTION = 'novablocks_content_normalization_version';
const NOVABLOCKS_CONTENT_NORMALIZATION_CURSOR = 'novablocks_content_normalization_cursor';
const NOVABLOCKS_CONTENT_NORMALIZATION_BATCH  = 100;

/**
 * Post types whose `post_content` may carry the affected block markup.
 *
 * @return string[]
 */
function novablocks_content_normalization_post_types(): array {
	return apply_filters( 'novablocks/content_normalization_post_types', [
		'post',
		'page',
		'wp_template',
		'wp_template_part',
		'wp_block',
	] );
}

/**
 * Runs the normalization in small batches on admin requests until complete.
 *
 * Version-gated: once the stored version matches the current one, this returns
 * immediately, so the query only runs while there is work to do.
 *
 * @return void
 */
function novablocks_maybe_normalize_legacy_unit_content(): void {
	if ( wp_doing_ajax() || wp_doing_cron() ) {
		return;
	}

	if ( (int) get_option( NOVABLOCKS_CONTENT_NORMALIZATION_OPTION, 0 ) >= NOVABLOCKS_CONTENT_NORMALIZATION_VERSION ) {
		return;
	}

	/**
	 * Allows opting out of the automatic content normalization (e.g. to run it
	 * manually via WP-CLI instead).
	 *
	 * @param bool $enabled Whether the automatic normalization may run.
	 */
	if ( ! apply_filters( 'novablocks/normalize_legacy_unit_content', true ) ) {
		update_option( NOVABLOCKS_CONTENT_NORMALIZATION_OPTION, NOVABLOCKS_CONTENT_NORMALIZATION_VERSION, false );
		delete_option( NOVABLOCKS_CONTENT_NORMALIZATION_CURSOR );
		return;
	}

	$has_more = novablocks_normalize_legacy_unit_content_batch( NOVABLOCKS_CONTENT_NORMALIZATION_BATCH );

	if ( ! $has_more ) {
		update_option( NOVABLOCKS_CONTENT_NORMALIZATION_OPTION, NOVABLOCKS_CONTENT_NORMALIZATION_VERSION, false );
		delete_option( NOVABLOCKS_CONTENT_NORMALIZATION_CURSOR );
	}
}
add_action( 'admin_init', 'novablocks_maybe_normalize_legacy_unit_content' );

/**
 * Normalizes a single batch of posts, advancing a stored ID cursor.
 *
 * Cursor-based (not content-LIKE-based) progress, so a post whose `px` belongs to
 * an unrelated trailing value never traps the loop. Safe to call directly (e.g.
 * via WP-CLI) to run the whole migration in one process.
 *
 * @param int $limit Maximum posts to process this batch.
 * @return bool Whether more posts may remain.
 */
function novablocks_normalize_legacy_unit_content_batch( int $limit = NOVABLOCKS_CONTENT_NORMALIZATION_BATCH ): bool {
	global $wpdb;

	$post_types = novablocks_content_normalization_post_types();
	if ( empty( $post_types ) ) {
		return false;
	}

	$cursor       = (int) get_option( NOVABLOCKS_CONTENT_NORMALIZATION_CURSOR, 0 );
	$types_in     = implode( ',', array_fill( 0, count( $post_types ), '%s' ) );
	$placeholders = array_merge( [ $cursor ], $post_types, [
		'%--nb-card-media-container-height:%',
		'%--nb-emphasis-area:%',
		$limit,
	] );

	// Pre-filter on the var names (cheap LIKE); the regex below is the source of
	// truth for what actually changes.
	$ids = $wpdb->get_col( $wpdb->prepare(
		"SELECT ID FROM {$wpdb->posts}
		 WHERE ID > %d
		   AND post_type IN ( {$types_in} )
		   AND ( post_content LIKE %s OR post_content LIKE %s )
		 ORDER BY ID ASC
		 LIMIT %d",
		$placeholders
	) );

	if ( empty( $ids ) ) {
		return false;
	}

	$pattern = '/(--nb-(?:card-media-container-height|emphasis-area):\s*[0-9.]+)px/';

	foreach ( $ids as $id ) {
		$id      = (int) $id;
		$content = get_post_field( 'post_content', $id );
		$updated = preg_replace( $pattern, '$1', $content );

		if ( null !== $updated && $updated !== $content ) {
			$wpdb->update( $wpdb->posts, [ 'post_content' => $updated ], [ 'ID' => $id ] );
			clean_post_cache( $id );
		}
	}

	update_option( NOVABLOCKS_CONTENT_NORMALIZATION_CURSOR, (int) end( $ids ), false );

	return true;
}
