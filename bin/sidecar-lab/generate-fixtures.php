<?php
/**
 * sidecar-lab fixture generator (Task 1.2, Sidecar Subgrid Modernization plan).
 *
 * Generates the full fixture-page matrix from the design doc
 * (docs/plans/2026-07-21-sidecar-subgrid-modernization-design.md, Verification
 * section) on the dedicated `sidecar-lab` Studio site, plus one deterministic
 * fixture image, and writes a manifest for the capture harness (Task 1.3).
 *
 * Run (idempotent — safe to re-run; deletes `sidecar-lab-*` pages first,
 * reuses the fixture attachment):
 *
 *   studio wp --path=/Users/georgeolaru/Studio/pxg-smoke-sidecar-lab \
 *     eval-file "/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/bin/sidecar-lab/generate-fixtures.php"
 *
 * Manifest: .ai/sidecar-lab/fixtures-manifest.json (repo-relative; resolved
 * from this file's location, overridable via SIDECAR_LAB_MANIFEST env var).
 *
 * Matrix covered (grouped into ~16 family pages, not one page per combo):
 *   rails    {none, left, right, both-via-nesting}
 * x widths   {small, medium, large}
 * x sticky   {on, off}
 * x content  {wide img, full img, alignleft img, alignright img,
 *             Group-wrapped wide img, captioned img}
 * x rail fill {empty, short, long}
 * plus a nested-Hive page and a 3-level deep-nested page.
 *
 * NOTE (markup contract): novablocks/sidecar and novablocks/sidecar-area are
 * dynamic blocks (save = InnerBlocks.Content) — serialized markup is block
 * comments wrapping inner content only. Area order matches variations.js:
 * content area first, sidebar area second. core/image + core/group markup is
 * plain core save output; Nova's editor save filters (Color Signal etc.) may
 * add extra classes when these fixtures are opened in the editor — the
 * harness measures the FRONTEND, where saved static markup renders verbatim.
 */

if ( ! function_exists( 'wp_insert_post' ) ) {
	fwrite( STDERR, "This script must run inside WordPress via `wp eval-file`.\n" );
	exit( 1 );
}

// Act as admin so post content (block comments, style attrs) is not kses-mangled.
wp_set_current_user( 1 );

define( 'SL_SLUG_PREFIX', 'sidecar-lab-' );
define( 'SL_ATTACHMENT_SLUG', 'sidecar-lab-fixture' );

// -------------------------------------------------------------------------
// 1. Fixture image: deterministic 2400x1600 PNG, uploaded once, reused by ID.
// -------------------------------------------------------------------------

/**
 * Draw the deterministic fixture image with GD. No randomness: horizontal
 * gradient (crop-direction visible), rule-of-thirds lines, center circle,
 * distinct corner markers (mirroring visible), 200px tick marks (scale).
 */
function sl_draw_fixture_png( string $path ): void {
	$w  = 2400;
	$h  = 1600;
	$im = imagecreatetruecolor( $w, $h );

	// Horizontal gradient: deep blue (left) -> warm orange (right).
	for ( $x = 0; $x < $w; $x ++ ) {
		$t = $x / ( $w - 1 );
		$r = (int) round( 30 + $t * ( 235 - 30 ) );
		$g = (int) round( 60 + $t * ( 120 - 60 ) );
		$b = (int) round( 130 + $t * ( 40 - 130 ) );
		imagefilledrectangle( $im, $x, 0, $x, $h - 1, imagecolorallocate( $im, $r, $g, $b ) );
	}

	$white = imagecolorallocate( $im, 255, 255, 255 );

	// Rule-of-thirds lines + center cross.
	foreach ( [ (int) ( $w / 3 ), (int) ( 2 * $w / 3 ), (int) ( $w / 2 ) ] as $x ) {
		imagefilledrectangle( $im, $x - 2, 0, $x + 2, $h - 1, $white );
	}
	foreach ( [ (int) ( $h / 3 ), (int) ( 2 * $h / 3 ), (int) ( $h / 2 ) ] as $y ) {
		imagefilledrectangle( $im, 0, $y - 2, $w - 1, $y + 2, $white );
	}

	// Center circle (aspect distortion visible).
	imagesetthickness( $im, 8 );
	imageellipse( $im, (int) ( $w / 2 ), (int) ( $h / 2 ), 600, 600, $white );

	// Distinct corner markers: TL red, TR green, BL yellow, BR magenta.
	$s       = 160;
	$corners = [
		[ 0, 0, imagecolorallocate( $im, 220, 40, 40 ) ],
		[ $w - $s, 0, imagecolorallocate( $im, 40, 200, 80 ) ],
		[ 0, $h - $s, imagecolorallocate( $im, 240, 220, 40 ) ],
		[ $w - $s, $h - $s, imagecolorallocate( $im, 220, 40, 220 ) ],
	];
	foreach ( $corners as [ $cx, $cy, $col ] ) {
		imagefilledrectangle( $im, $cx, $cy, $cx + $s, $cy + $s, $col );
	}

	// 200px tick marks along top edge.
	for ( $x = 200; $x < $w; $x += 200 ) {
		imagefilledrectangle( $im, $x - 3, 0, $x + 3, 60, $white );
	}

	imagepng( $im, $path, 9 );
	imagedestroy( $im );
}

/**
 * Find the existing fixture attachment, or generate + upload it once.
 */
function sl_get_fixture_attachment_id(): int {
	$existing = get_posts( [
		'post_type'      => 'attachment',
		'name'           => SL_ATTACHMENT_SLUG,
		'post_status'    => 'any',
		'posts_per_page' => 1,
		'fields'         => 'ids',
	] );
	if ( ! empty( $existing ) ) {
		return (int) $existing[0];
	}

	if ( ! function_exists( 'imagecreatetruecolor' ) ) {
		fwrite( STDERR, "GD is not available in this PHP; cannot generate the fixture image.\n" );
		exit( 1 );
	}

	$tmp = wp_tempnam( SL_ATTACHMENT_SLUG . '.png' );
	sl_draw_fixture_png( $tmp );

	$upload = wp_upload_bits( SL_ATTACHMENT_SLUG . '.png', null, file_get_contents( $tmp ) );
	@unlink( $tmp );
	if ( ! empty( $upload['error'] ) ) {
		fwrite( STDERR, 'Upload failed: ' . $upload['error'] . "\n" );
		exit( 1 );
	}

	$attachment_id = wp_insert_attachment( [
		'post_title'     => 'Sidecar Lab Fixture',
		'post_name'      => SL_ATTACHMENT_SLUG,
		'post_mime_type' => 'image/png',
		'post_status'    => 'inherit',
	], $upload['file'] );

	require_once ABSPATH . 'wp-admin/includes/image.php';
	wp_update_attachment_metadata( $attachment_id, wp_generate_attachment_metadata( $attachment_id, $upload['file'] ) );

	return (int) $attachment_id;
}

// -------------------------------------------------------------------------
// 2. Serialized-markup builders (deterministic — no randomness anywhere).
// -------------------------------------------------------------------------

/**
 * Deterministic editorial body copy: cycles a fixed sentence pool. Long
 * enough that every paragraph wraps at 375px viewports.
 */
function sl_paragraphs( int $count, int $seed = 0 ): string {
	$pool = [
		'The editorial grid holds every column to the same set of named lines, so a wide image and a measured paragraph agree about where the page begins and ends.',
		'Long-form body copy needs room to breathe, and the reading column earns that room by refusing to drift when a rail appears beside it.',
		'A layout engine is only honest when the computed values match the promise, which is why these fixtures measure rectangles instead of trusting variables.',
		'Sidebar rails carry the quiet material of a magazine page: bylines, pull quotes, footnotes, and the occasional advertisement that pays for the paper.',
		'When the viewport narrows to a phone, the rail folds beneath the content and the grid collapses to a single generous column of text.',
		'Alignment is a contract between blocks, and a contract only matters when a full-bleed image tries to escape past the rail and must decide whether to break.',
		'Deterministic fixtures make regressions visible: the same words, the same image, the same tracks, rendered by two different engines and compared to the pixel.',
		'Nothing in this paragraph is meaningful on its own, yet together these sentences stretch far enough to wrap on the smallest supported screen.',
	];
	$n    = count( $pool );
	$out  = '';
	for ( $p = 0; $p < $count; $p ++ ) {
		$sentences = [];
		for ( $s = 0; $s < 4; $s ++ ) {
			$sentences[] = $pool[ ( $seed + $p * 3 + $s ) % $n ];
		}
		$out .= "<!-- wp:paragraph -->\n<p>" . implode( ' ', $sentences ) . "</p>\n<!-- /wp:paragraph -->\n\n";
	}
	return $out;
}

function sl_short_paragraph( string $text ): string {
	return "<!-- wp:paragraph -->\n<p>" . $text . "</p>\n<!-- /wp:paragraph -->\n\n";
}

function sl_heading( string $text, int $level = 2 ): string {
	$attrs = 2 === $level ? '' : ' {"level":' . $level . '}';
	return '<!-- wp:heading' . $attrs . " -->\n<h" . $level . ' class="wp-block-heading">' . $text . "</h" . $level . ">\n<!-- /wp:heading -->\n\n";
}

/**
 * core/image markup for the fixture attachment.
 *
 * @param string $align   '' | 'wide' | 'full' | 'left' | 'right'
 * @param string $caption Optional caption text.
 */
function sl_image( int $id, string $align = '', string $caption = '' ): string {
	$size_slug = ( 'full' === $align ) ? 'full' : 'large';
	$src       = wp_get_attachment_image_url( $id, $size_slug );
	if ( ! $src ) {
		$src = wp_get_attachment_image_url( $id, 'full' );
	}

	$attrs = [ 'id' => $id, 'sizeSlug' => $size_slug, 'linkDestination' => 'none' ];
	$class = 'wp-block-image';
	$style = '';

	if ( in_array( $align, [ 'left', 'right' ], true ) ) {
		// Resized floats so text actually wraps around them.
		$attrs['width'] = '420px';
		$style          = ' style="width:420px"';
	}
	if ( '' !== $align ) {
		$attrs['align'] = $align;
		$class         .= ' align' . $align;
	}
	$class .= ' size-' . $size_slug;
	if ( '' !== $style ) {
		$class .= ' is-resized';
	}

	$caption_html = '' !== $caption ? '<figcaption class="wp-element-caption">' . $caption . '</figcaption>' : '';

	return '<!-- wp:image ' . wp_json_encode( $attrs ) . " -->\n"
		. '<figure class="' . $class . '"><img src="' . esc_url( $src ) . '" alt="Sidecar lab deterministic fixture" class="wp-image-' . $id . '"' . $style . '/>' . $caption_html . "</figure>\n"
		. "<!-- /wp:image -->\n\n";
}

function sl_group( string $inner ): string {
	return '<!-- wp:group {"layout":{"type":"constrained"}} -->' . "\n"
		. '<div class="wp-block-group">' . "\n" . $inner . "</div>\n"
		. "<!-- /wp:group -->\n\n";
}

/**
 * novablocks/sidecar wrapping its area blocks. Both blocks are dynamic:
 * serialized markup is block comments around inner content only.
 * Content area first, sidebar second (variations.js order).
 *
 * @param array       $attrs   Sidecar attributes (only non-defaults).
 * @param string      $content Content-area inner markup.
 * @param string|null $sidebar Sidebar-area inner markup; '' = present but
 *                             EMPTY rail; null = no sidebar area block.
 */
function sl_sidecar( array $attrs, string $content, ?string $sidebar = null ): string {
	$out = '<!-- wp:novablocks/sidecar ' . wp_json_encode( $attrs ) . " -->\n"
		. '<!-- wp:novablocks/sidecar-area {"areaName":"content"} -->' . "\n"
		. $content
		. "<!-- /wp:novablocks/sidecar-area -->\n\n";

	if ( null !== $sidebar ) {
		$out .= '<!-- wp:novablocks/sidecar-area {"areaName":"sidebar"} -->' . "\n"
			. $sidebar
			. "<!-- /wp:novablocks/sidecar-area -->\n\n";
	}

	return $out . "<!-- /wp:novablocks/sidecar -->\n";
}

/**
 * The full content-variant battery: every design-doc content variant as
 * successive sections inside one content area.
 */
function sl_content_battery( int $img ): string {
	return sl_paragraphs( 1, 0 )
		. sl_heading( 'Wide image' )
		. sl_paragraphs( 1, 1 )
		. sl_image( $img, 'wide' )
		. sl_paragraphs( 1, 2 )
		. sl_heading( 'Full image' )
		. sl_image( $img, 'full' )
		. sl_paragraphs( 1, 3 )
		. sl_heading( 'Left-aligned image' )
		. sl_image( $img, 'left' )
		. sl_paragraphs( 2, 4 )
		. sl_heading( 'Right-aligned image' )
		. sl_image( $img, 'right' )
		. sl_paragraphs( 2, 5 )
		. sl_heading( 'Group-wrapped wide image' )
		. sl_group( sl_image( $img, 'wide' ) . sl_paragraphs( 1, 6 ) )
		. sl_paragraphs( 1, 7 )
		. sl_heading( 'Captioned image' )
		. sl_image( $img, '', 'A deterministic caption under the fixture image, long enough to wrap on narrow viewports.' )
		. sl_paragraphs( 1, 0 );
}

/** Reduced battery for nested pages (keeps page weight sane). */
function sl_content_battery_reduced( int $img ): string {
	return sl_paragraphs( 1, 2 )
		. sl_image( $img, 'wide' )
		. sl_paragraphs( 1, 3 )
		. sl_image( $img, 'full' )
		. sl_paragraphs( 1, 4 );
}

// Rail fills.
function sl_rail_short(): string {
	return sl_short_paragraph( 'A short rail note: one paragraph only, the lightest possible sidebar.' );
}

function sl_rail_long( int $img ): string {
	return sl_heading( 'Rail notes', 3 )
		. sl_paragraphs( 8, 3 )
		. sl_image( $img, '' )
		. sl_paragraphs( 2, 6 );
}

/** Sticky rail: short items, then a Group as the sticky :last-child. */
function sl_rail_sticky(): string {
	return sl_short_paragraph( 'First rail item above the sticky block.' )
		. sl_short_paragraph( 'Second rail item, still above the sticky block.' )
		. sl_group( sl_heading( 'Sticky card', 3 ) . sl_short_paragraph( 'This Group is the last rail item, so it becomes sticky while the content scrolls.' ) );
}

// -------------------------------------------------------------------------
// 3. Page matrix.
// -------------------------------------------------------------------------

/** @return array<string, array{title:string, description:string, families:string[], content:string}> keyed by slug */
function sl_page_definitions( int $img ): array {
	$battery = sl_content_battery( $img );

	$pages = [];

	// --- No rail (centered) x width invariance ------------------------------
	$pages['none-small'] = [
		'title'       => 'Sidecar Lab — No Rail, Small',
		'description' => 'sidebarPosition:none, sidebarWidth:small; full content battery in the centered column.',
		'families'    => [ 'rail-none', 'width-small', 'sticky-off', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'none', 'sidebarWidth' => 'small' ], $battery ),
	];
	$pages['none-large'] = [
		'title'       => 'Sidecar Lab — No Rail, Large',
		'description' => 'sidebarPosition:none with sidebarWidth:large — width must be inert without a rail (invariance check vs none-small).',
		'families'    => [ 'rail-none', 'width-large', 'sticky-off', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'none', 'sidebarWidth' => 'large' ], $battery ),
	];

	// --- Left rail x widths x sticky x rail fill ----------------------------
	$pages['left-small'] = [
		'title'       => 'Sidecar Lab — Left Rail, Small',
		'description' => 'Left rail, small width, short rail fill; full content battery.',
		'families'    => [ 'rail-left', 'width-small', 'sticky-off', 'rail-short', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'left', 'sidebarWidth' => 'small' ], $battery, sl_rail_short() ),
	];
	$pages['left-medium'] = [
		'title'       => 'Sidecar Lab — Left Rail, Medium',
		'description' => 'Left rail, medium width, long rail fill; full content battery.',
		'families'    => [ 'rail-left', 'width-medium', 'sticky-off', 'rail-long', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'left', 'sidebarWidth' => 'medium' ], $battery, sl_rail_long( $img ) ),
	];
	$pages['left-large'] = [
		'title'       => 'Sidecar Lab — Left Rail, Large',
		'description' => 'Left rail, large width, short rail fill; full content battery.',
		'families'    => [ 'rail-left', 'width-large', 'sticky-off', 'rail-short', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'left', 'sidebarWidth' => 'large' ], $battery, sl_rail_short() ),
	];
	$pages['left-small-sticky'] = [
		'title'       => 'Sidecar Lab — Left Rail, Small, Sticky',
		'description' => 'Left rail, small width, lastItemIsSticky:true; sticky Group as last rail item; full content battery.',
		'families'    => [ 'rail-left', 'width-small', 'sticky-on', 'rail-short', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'left', 'sidebarWidth' => 'small', 'lastItemIsSticky' => true ], $battery, sl_rail_sticky() ),
	];
	$pages['left-empty-rail'] = [
		'title'       => 'Sidecar Lab — Left Rail, Empty',
		'description' => 'Left rail present but EMPTY (sidecar-area with no inner blocks), medium width; full content battery. Phase 3 :has() empty-rail target.',
		'families'    => [ 'rail-left', 'width-medium', 'sticky-off', 'rail-empty', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'left', 'sidebarWidth' => 'medium' ], $battery, '' ),
	];

	// --- Right rail x widths x sticky x rail fill ---------------------------
	$pages['right-small'] = [
		'title'       => 'Sidecar Lab — Right Rail, Small',
		'description' => 'Right rail, small width, short rail fill; full content battery.',
		'families'    => [ 'rail-right', 'width-small', 'sticky-off', 'rail-short', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'small' ], $battery, sl_rail_short() ),
	];
	$pages['right-medium'] = [
		'title'       => 'Sidecar Lab — Right Rail, Medium',
		'description' => 'Right rail, medium width, long rail fill; full content battery.',
		'families'    => [ 'rail-right', 'width-medium', 'sticky-off', 'rail-long', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ], $battery, sl_rail_long( $img ) ),
	];
	$pages['right-large'] = [
		'title'       => 'Sidecar Lab — Right Rail, Large',
		'description' => 'Right rail, large width, short rail fill; full content battery.',
		'families'    => [ 'rail-right', 'width-large', 'sticky-off', 'rail-short', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'large' ], $battery, sl_rail_short() ),
	];
	$pages['right-small-sticky'] = [
		'title'       => 'Sidecar Lab — Right Rail, Small, Sticky',
		'description' => 'Right rail, small width, lastItemIsSticky:true; sticky Group as last rail item; full content battery.',
		'families'    => [ 'rail-right', 'width-small', 'sticky-on', 'rail-short', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'small', 'lastItemIsSticky' => true ], $battery, sl_rail_sticky() ),
	];
	$pages['right-medium-sticky'] = [
		'title'       => 'Sidecar Lab — Right Rail, Medium, Sticky',
		'description' => 'Right rail, medium width, lastItemIsSticky:true; sticky Group as last rail item; full content battery.',
		'families'    => [ 'rail-right', 'width-medium', 'sticky-on', 'rail-short', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium', 'lastItemIsSticky' => true ], $battery, sl_rail_sticky() ),
	];
	$pages['right-empty-rail'] = [
		'title'       => 'Sidecar Lab — Right Rail, Empty',
		'description' => 'Right rail present but EMPTY, small width; full content battery. Phase 3 :has() empty-rail target.',
		'families'    => [ 'rail-right', 'width-small', 'sticky-off', 'rail-empty', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'small' ], $battery, '' ),
	];
	$pages['right-long-rail'] = [
		'title'       => 'Sidecar Lab — Right Rail Longer Than Content',
		'description' => 'Right rail whose content is LONGER than the main column (rail-overflow edge case), small width.',
		'families'    => [ 'rail-right', 'width-small', 'sticky-off', 'rail-long', 'rail-overflow', 'content-reduced' ],
		'content'     => sl_sidecar(
			[ 'sidebarPosition' => 'right', 'sidebarWidth' => 'small' ],
			sl_paragraphs( 2, 1 ) . sl_image( $img, 'wide' ) . sl_paragraphs( 1, 2 ),
			sl_rail_long( $img ) . sl_paragraphs( 4, 7 )
		),
	];

	// --- Both rails via nesting (Hive) --------------------------------------
	$pages['nested-hive'] = [
		'title'       => 'Sidecar Lab — Nested Hive',
		'description' => 'Both rails via nesting: outer sidebarPosition:left sidecar (short rail) whose content area holds an inner sidebarPosition:right sidecar with rail content and a sticky last item.',
		'families'    => [ 'rail-nested', 'nested-hive', 'rail-left', 'rail-right', 'sticky-on', 'content-reduced' ],
		'content'     => sl_sidecar(
			[ 'sidebarPosition' => 'left', 'sidebarWidth' => 'medium' ],
			sl_paragraphs( 1, 0 )
			. sl_sidecar(
				[ 'sidebarPosition' => 'right', 'sidebarWidth' => 'small', 'lastItemIsSticky' => true ],
				sl_content_battery_reduced( $img ),
				sl_rail_sticky()
			),
			sl_rail_short()
		),
	];

	// --- Deep nesting: 3 levels ---------------------------------------------
	$pages['nested-deep'] = [
		'title'       => 'Sidecar Lab — Deep Nested (3 levels)',
		'description' => 'Three nested sidecars: left/large > right/medium > left/small, each with a short rail; wide image at the deepest level.',
		'families'    => [ 'rail-nested', 'nested-deep', 'rail-left', 'rail-right', 'sticky-off', 'content-reduced' ],
		'content'     => sl_sidecar(
			[ 'sidebarPosition' => 'left', 'sidebarWidth' => 'large' ],
			sl_paragraphs( 1, 1 )
			. sl_sidecar(
				[ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ],
				sl_paragraphs( 1, 2 )
				. sl_sidecar(
					[ 'sidebarPosition' => 'left', 'sidebarWidth' => 'small' ],
					sl_paragraphs( 2, 3 ) . sl_image( $img, 'wide' ) . sl_paragraphs( 1, 4 ),
					sl_rail_short()
				),
				sl_rail_short()
			),
			sl_rail_short()
		),
	];

	return $pages;
}

// -------------------------------------------------------------------------
// 4. Idempotent regeneration.
// -------------------------------------------------------------------------

// Delete every page whose slug starts with the prefix (any status, incl. trash).
$all_pages = get_posts( [
	'post_type'      => 'page',
	'post_status'    => [ 'publish', 'draft', 'pending', 'private', 'future', 'trash' ],
	'posts_per_page' => - 1,
] );
$deleted   = 0;
foreach ( $all_pages as $p ) {
	if ( 0 === strpos( $p->post_name, SL_SLUG_PREFIX ) ) {
		wp_delete_post( $p->ID, true );
		$deleted ++;
	}
}
echo 'Deleted ' . $deleted . " existing sidecar-lab page(s).\n";

$attachment_id = sl_get_fixture_attachment_id();
echo 'Fixture attachment ID: ' . $attachment_id . ' (' . wp_get_attachment_image_url( $attachment_id, 'full' ) . ")\n";

$definitions = sl_page_definitions( $attachment_id );
$manifest    = [];

foreach ( $definitions as $slug_suffix => $def ) {
	$slug    = SL_SLUG_PREFIX . $slug_suffix;
	$post_id = wp_insert_post( [
		'post_type'      => 'page',
		'post_status'    => 'publish',
		'post_name'      => $slug,
		'post_title'     => $def['title'],
		'post_content'   => $def['content'],
		'comment_status' => 'closed',
		'ping_status'    => 'closed',
	], true );

	if ( is_wp_error( $post_id ) ) {
		fwrite( STDERR, 'Failed to create ' . $slug . ': ' . $post_id->get_error_message() . "\n" );
		exit( 1 );
	}

	$manifest[] = [
		'slug'        => $slug,
		'url'         => get_permalink( $post_id ),
		'description' => $def['description'],
		'families'    => $def['families'],
	];
	echo 'Created page ' . $slug . ' (#' . $post_id . ")\n";
}

// -------------------------------------------------------------------------
// 5. Manifest for the Task 1.3 harness.
// -------------------------------------------------------------------------

$manifest_path = getenv( 'SIDECAR_LAB_MANIFEST' );
if ( ! $manifest_path ) {
	// Resolved from this file's repo location when eval-file preserves __DIR__;
	// hardcoded fallback otherwise (documented in bin/sidecar-lab/README.md).
	if ( substr( __DIR__, - strlen( '/bin/sidecar-lab' ) ) === '/bin/sidecar-lab' ) {
		$manifest_path = dirname( __DIR__, 2 ) . '/.ai/sidecar-lab/fixtures-manifest.json';
	} else {
		$manifest_path = '/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/.ai/sidecar-lab/fixtures-manifest.json';
	}
}

if ( ! is_dir( dirname( $manifest_path ) ) ) {
	mkdir( dirname( $manifest_path ), 0755, true );
}
$written = file_put_contents( $manifest_path, wp_json_encode( $manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES ) . "\n" );
if ( false === $written ) {
	fwrite( STDERR, 'Could not write manifest to ' . $manifest_path . " — JSON follows:\n" );
	echo wp_json_encode( $manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES ) . "\n";
	exit( 1 );
}

echo "\nSummary\n";
echo '  pages created : ' . count( $manifest ) . "\n";
echo '  attachment ID : ' . $attachment_id . "\n";
echo '  manifest      : ' . $manifest_path . "\n";
