<?php
/**
 * Contract for Nova Blocks issue #665, all three asks on `novablocks/post-meta`:
 *
 *  1. Discuss accepts core `comments` / `post-comments-form`, not only Nova's
 *     own `novablocks/post-comments`, while keeping the `comments_open()` gate.
 *  2. Avatar size (Small/Medium/Large em steps) only emits CSS custom
 *     properties for the non-default steps; the default ("medium") must
 *     serialize nothing and keep the pre-existing 2em/2.6em size intact via
 *     the SCSS fallback.
 *  3. `get_block_wrapper_attributes()` is used to build the block wrapper,
 *     merging the block's own class/style with whatever WordPress' align/
 *     className support attaches — without disturbing the pre-existing
 *     spacing/sizing style output.
 *
 * Standalone: run with `php tests/php/post-meta-discuss-avatar-align-contract.php`
 * (no WordPress) — every WP function the render callback touches is stubbed
 * below, matching the `tests/php/*-contract.php` convention picked up by
 * `bin/run-fast-tests.cjs` / `npm test`.
 *
 * @package NovaBlocks
 */

define( 'ABSPATH', __DIR__ . '/' );

class WP_Post {
	public $ID;
	public $post_author;
	public function __construct( $id, $author ) {
		$this->ID          = $id;
		$this->post_author = $author;
	}
}

class WP_Block {
	public $context;
	public function __construct( array $context = [] ) {
		$this->context = $context;
	}
}

// --- i18n / escaping stand-ins -------------------------------------------------
function __( $text, $domain = null ) { return $text; }
function esc_html__( $text, $domain = null ) { return $text; }
function esc_html( $text ) { return htmlspecialchars( (string) $text, ENT_QUOTES, 'UTF-8' ); }
function esc_attr( $text ) { return esc_html( $text ); }
function esc_url( $text ) { return esc_attr( $text ); }

// --- Nova helpers this file does not exercise directly -------------------------
function novablocks_maybe_enqueue_block_frontend_scripts( $block ) {}
function novablocks_get_post_reading_time_in_minutes( $post, $wpm = 250 ) { return 3; }
function novablocks_merge_attributes_from_array( array $paths ) {
	// The real function reads attributes.json files off disk; the contract only
	// cares that the post-meta attributes.json declares avatarSize correctly,
	// so read that one file for real and stub the space-and-sizing companion.
	$plugin_root = dirname( __DIR__, 2 );
	$own         = json_decode( file_get_contents( $plugin_root . '/' . $paths[0] ), true );
	return array_merge( $own, [
		'blockTopSpacing'       => [ 'type' => 'number', 'default' => 1 ],
		'blockBottomSpacing'    => [ 'type' => 'number', 'default' => 0 ],
		'emphasisTopSpacing'    => [ 'type' => 'number', 'default' => 0 ],
		'emphasisBottomSpacing' => [ 'type' => 'number', 'default' => 0 ],
	] );
}
function novablocks_get_attributes_with_defaults( array $attributes, array $config ) {
	foreach ( $config as $key => $value ) {
		if ( ! isset( $attributes[ $key ] ) && isset( $value['default'] ) ) {
			$attributes[ $key ] = $value['default'];
		}
	}
	return $attributes;
}
function novablocks_get_space_and_sizing_css( array $attributes ) {
	// Mirrors lib/block-rendering.php's novablocks_get_spacing_css() shape
	// closely enough to prove avatarSize CSS is additive, not a replacement.
	return [
		'--nb-block-top-spacing: ' . $attributes['blockTopSpacing'],
		'--nb-block-bottom-spacing: ' . $attributes['blockBottomSpacing'],
		'--nb-emphasis-top-spacing: ' . $attributes['emphasisTopSpacing'],
		'--nb-emphasis-bottom-spacing: ' . $attributes['emphasisBottomSpacing'],
	];
}

// --- WordPress core stand-ins ---------------------------------------------------
$GLOBALS['nb_pm_fixture'] = [
	'comments_open'    => true,
	'template_blocks'  => [],
	'wrapper_extra'    => null, // captures the last get_block_wrapper_attributes() call
];

function get_post( $id ) {
	return new WP_Post( $id, 7 );
}
function get_the_author_meta( $field, $author ) { return $author; }
function get_userdata( $id ) {
	return (object) [ 'user_email' => 'author@example.test', 'display_name' => 'Nova Author' ];
}
function get_avatar_url( $email, $args = [] ) { return 'https://example.test/avatar.png'; }
function get_avatar( $email, $size = 96, $default = '' ) { return '<img class="avatar" src="https://example.test/avatar.png">'; }
function get_author_posts_url( $id ) { return 'https://example.test/author/' . $id . '/'; }
function get_the_date( $format, $post ) { return '2026-09-26'; }
function do_blocks( $content ) { return ''; } // Sharing overlay markup is irrelevant to this contract.
function comments_open( $post_id ) { return $GLOBALS['nb_pm_fixture']['comments_open']; }
function get_comments_number( $post_id ) { return 4; }
function has_block( $block_name, $content ) {
	return in_array( $block_name, $GLOBALS['nb_pm_fixture']['template_blocks'], true );
}
function get_block_wrapper_attributes( $extra_attributes = [] ) {
	$GLOBALS['nb_pm_fixture']['wrapper_extra'] = $extra_attributes;
	// A stand-in for WordPress' own merge: always contributes the generated
	// classname support (wp-block-{name}), same as the real function would.
	$class = trim( 'wp-block-novablocks-post-meta ' . ( $extra_attributes['class'] ?? '' ) );
	$style = trim( $extra_attributes['style'] ?? '' );
	$attrs = 'class="' . esc_attr( $class ) . '"';
	if ( '' !== $style ) {
		$attrs .= ' style="' . esc_attr( $style ) . '"';
	}
	return $attrs;
}

require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/post-meta/init.php';

function nb_pm_expect( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}
function nb_pm_render( $attributes = [] ) {
	$block = new WP_Block( [ 'postId' => 42, 'postType' => 'post' ] );
	return novablocks_render_post_meta_block( $attributes, '', $block );
}

// ── Ask 1: Discuss accepts core `comments` / `post-comments-form`, and links
//          to whichever anchor that template shape actually renders (#666
//          follow-up: a form-only template has no id="comments", only core's
//          own id="respond" on the comment-respond wrapper) ──────────────────

$discuss_cases = [
	// label                          => [ blocks on the template,                                  expected anchor or null when Discuss must be hidden ]
	'Nova post-comments only'        => [ [ 'novablocks/post-comments' ], 'comments' ],
	'core/comments only'             => [ [ 'core/comments' ], 'comments' ],
	'core/post-comments-form only'   => [ [ 'core/post-comments-form' ], 'respond' ],
	'core/comments plus unrelated'   => [ [ 'core/paragraph', 'core/comments' ], 'comments' ],
	'core/comments plus bare form'   => [ [ 'core/comments', 'core/post-comments-form' ], 'comments' ],
	'Nova post-comments plus form'   => [ [ 'novablocks/post-comments', 'core/post-comments-form' ], 'comments' ],
	'no comments block'              => [ [ 'core/paragraph' ], null ],
	'empty template'                 => [ [], null ],
];

foreach ( $discuss_cases as $label => [ $blocks, $expected_anchor ] ) {
	$GLOBALS['nb_pm_fixture']['comments_open']   = true;
	$GLOBALS['nb_pm_fixture']['template_blocks'] = $blocks;
	global $_wp_current_template_content;
	$_wp_current_template_content = empty( $blocks ) ? '' : '<!-- template markup -->';

	$html = nb_pm_render();
	$has_discuss = false !== strpos( $html, 'Discuss' );
	nb_pm_expect( ( null !== $expected_anchor ) === $has_discuss, "Discuss visibility for [$label] must be " . ( $expected_anchor ? 'shown' : 'hidden' ) . '.' );

	if ( null !== $expected_anchor ) {
		nb_pm_expect( false !== strpos( $html, 'href="#' . $expected_anchor . '"' ), "[$label]: Discuss must link to #$expected_anchor." );
		$other_anchor = 'comments' === $expected_anchor ? 'respond' : 'comments';
		nb_pm_expect( false === strpos( $html, 'href="#' . $other_anchor . '"' ), "[$label]: Discuss must not link to #$other_anchor." );
	}
}

// comments_open() gate must still apply even with a comments block present.
$GLOBALS['nb_pm_fixture']['comments_open']   = false;
$GLOBALS['nb_pm_fixture']['template_blocks'] = [ 'core/comments' ];
$_wp_current_template_content = '<!-- template markup -->';
nb_pm_expect( false === strpos( nb_pm_render(), 'Discuss' ), 'Closed comments must hide Discuss even with core/comments present.' );
$GLOBALS['nb_pm_fixture']['comments_open'] = true;

// A missing/empty global template must not fatal and must hide Discuss.
unset( $GLOBALS['_wp_current_template_content_unused'] );
$_wp_current_template_content = null;
$GLOBALS['nb_pm_fixture']['template_blocks'] = [ 'core/comments' ];
nb_pm_expect( false === strpos( nb_pm_render(), 'Discuss' ), 'A null template global must hide Discuss without erroring.' );
$_wp_current_template_content = '<!-- template markup -->';

// ── Ask 2: Avatar size steps, default emits nothing ────────────────────────────

$rendered_default = nb_pm_render();
nb_pm_expect( false === strpos( $rendered_default, '--nb-meta-avatar-size' ), 'Default (medium) avatar size must not emit any avatar CSS variable.' );
nb_pm_expect( $rendered_default === nb_pm_render( [ 'avatarSize' => 'medium' ] ), 'Explicit "medium" must render byte-identically to the default.' );

$rendered_small = nb_pm_render( [ 'avatarSize' => 'small' ] );
nb_pm_expect( false !== strpos( $rendered_small, '--nb-meta-avatar-size: 1.5em' ), 'Small must emit the 1.5em base avatar size.' );
nb_pm_expect( false !== strpos( $rendered_small, '--nb-meta-avatar-size--lap: 2em' ), 'Small must emit the 2em above-lap avatar size.' );

$rendered_large = nb_pm_render( [ 'avatarSize' => 'large' ] );
nb_pm_expect( false !== strpos( $rendered_large, '--nb-meta-avatar-size: 3em' ), 'Large must emit the 3em base avatar size.' );
nb_pm_expect( false !== strpos( $rendered_large, '--nb-meta-avatar-size--lap: 4.1em' ), 'Large must emit the 4.1em above-lap avatar size.' );

foreach ( [ '', 'huge', null, 1, [], true ] as $invalid ) {
	nb_pm_expect( $rendered_default === nb_pm_render( [ 'avatarSize' => $invalid ] ), 'Invalid avatarSize must fall back to the default (medium) rendering.' );
}

// Existing spacing vars must survive avatarSize being set (additive, not a replacement).
nb_pm_expect( false !== strpos( $rendered_small, '--nb-block-top-spacing: 1' ), 'Space-and-sizing vars must still render alongside a custom avatar size.' );

// avatarSize schema itself: registered default and enum, so unrelated posts serialize nothing.
$schema = novablocks_get_post_meta_attributes();
nb_pm_expect(
	[ 'type' => 'string', 'enum' => [ 'small', 'medium', 'large' ], 'default' => 'medium' ] === ( $schema['avatarSize'] ?? null ),
	'avatarSize must register the three em-step choices with a medium default.'
);

// ── Ask 3: get_block_wrapper_attributes() wiring ───────────────────────────────

$GLOBALS['nb_pm_fixture']['wrapper_extra'] = null;
$html = nb_pm_render();
$extra = $GLOBALS['nb_pm_fixture']['wrapper_extra'];
nb_pm_expect( is_array( $extra ), 'The render must call get_block_wrapper_attributes().' );
nb_pm_expect( 'c-meta' === ( $extra['class'] ?? null ), 'The block must keep contributing its own "c-meta" class into the wrapper merge.' );
nb_pm_expect( false !== strpos( $extra['style'] ?? '', '--nb-block-top-spacing: 1' ), 'The block must keep contributing its space-and-sizing style into the wrapper merge.' );
nb_pm_expect( false !== strpos( $html, 'class="wp-block-novablocks-post-meta c-meta"' ), 'The rendered wrapper must carry both the generated classname and "c-meta".' );
nb_pm_expect( false === strpos( $html, '<div class="c-meta" style=' ), 'The old bare "c-meta"-only wrapper markup must be gone.' );

echo "post meta discuss/avatar/align contract ok\n";
