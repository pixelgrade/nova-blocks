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
 * Matrix covered — 31 fixture pages (17 Phase 1-3 family pages + 14 Phase 4b
 * re-baseline additions, Task 4b.3):
 *   rails    {none, left, right, both-via-nesting, three-area}
 * x widths   {small, medium, large}
 * x sticky   {on, off}
 * x content  {wide img, full img, alignleft img, alignright img,
 *             Group-wrapped wide img, captioned img}
 * x rail fill {empty, short, long}
 * plus nested-Hive, 3-level deep-nested, and the Phase 4b additions:
 *   - pull-outs: Content Around / Extend, left+right, over filled AND empty
 *     rails, plus a wrap-wins coexistence (Around + Never) page (a)
 *   - per-block break: nb-break-always over a filled rail, nb-break-never over
 *     an empty rail (e)
 *   - three-area single-block Hive + none-position+legacy-sidebar edge (f)
 *   - pass-through consumers: core/query loop + Supernova (b)
 *   - header-nested grid: wrapper-sides substitution context (c) — currently
 *     KNOWN-BROKEN (overflow), captured as a finding; see expected-changes.md
 * Harness probe roles added for this baseline: `root` (post-content /
 * template-part / #main — rail-var zeroing) and `passthrough` (.wp-block-query,
 * .nb-supernova) — Task 4b.3 (d).
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
 *
 * NOTE (empty rail): even with $sidebar === '', the rendered rail div
 * contains WHITESPACE (the newlines around the serialized area comments
 * survive into the dynamic block's $content), so Phase 3 empty-rail
 * selectors must stay `:not(:has(*))`-based — `:empty` would NOT match.
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

/**
 * Sticky rail with LONG content above the sticky last item — the sticky
 * offset starts much further down than with three short items.
 */
function sl_rail_sticky_long( int $img ): string {
	return sl_heading( 'Rail notes', 3 )
		. sl_paragraphs( 6, 5 )
		. sl_image( $img, '' )
		. sl_paragraphs( 2, 1 )
		. sl_group( sl_heading( 'Sticky card', 3 ) . sl_short_paragraph( 'This Group follows long rail content and is still the sticky last item.' ) );
}

/** Outer-Hive rail per the plan: one short paragraph + the sticky test block. */
function sl_rail_hive_outer(): string {
	return sl_short_paragraph( 'Outer rail note: a single short paragraph above the outer sticky test block.' )
		. sl_group( sl_heading( 'Outer sticky card', 3 ) . sl_short_paragraph( 'This Group is the outer rail\'s last item; it must stay sticky while spanning the nested inner sidecar.' ) );
}

// -------------------------------------------------------------------------
// 2b. Phase 4b builders — pull-outs, per-block break, three areas, and the
//     pass-through / substitution-context fixtures (Task 4b.3).
// -------------------------------------------------------------------------

/**
 * A core/image carrying an alignleft/alignright plus a Nova marker class in its
 * OWN className attribute (the Task 3.3/4b.2 serialization route). `$marker` is
 * e.g. 'nb-wrap-around', 'nb-wrap-extend', 'nb-break-always', 'nb-break-never',
 * or a space-separated combination (the wrap-wins coexistence pin).
 */
function sl_marked_image( int $id, string $align, string $marker ): string {
	$src   = wp_get_attachment_image_url( $id, 'large' );
	$attrs = [
		'id'              => $id,
		'sizeSlug'        => 'large',
		'linkDestination' => 'none',
		'align'           => $align,
		'className'       => $marker,
	];
	$class = 'wp-block-image align' . $align . ' size-large';
	$style = '';
	// Resized floats so wrap text actually has something to flow around.
	if ( in_array( $align, [ 'left', 'right' ], true ) ) {
		$attrs['width'] = '420px';
		$style          = ' style="width:420px"';
		$class         .= ' is-resized';
	}
	$class .= ' ' . $marker;

	return '<!-- wp:image ' . wp_json_encode( $attrs ) . " -->\n"
		. '<figure class="' . $class . '"><img src="' . esc_url( $src ) . '" alt="Sidecar lab deterministic fixture" class="wp-image-' . $id . '"' . $style . '/></figure>' . "\n"
		. "<!-- /wp:image -->\n\n";
}

/**
 * Pull-out content: a plain "before" paragraph (a body-edge reference for the
 * differ), then the marked image followed by the run of body copy the flow
 * segmenter pulls under it (paragraphs wrap beside AND under on the frontend).
 */
function sl_pullout_content( int $id, string $align, string $marker ): string {
	return sl_short_paragraph( 'Before the pull-out: a plain paragraph whose edges are the body-edge reference for the wrapped segment that follows.' )
		. sl_marked_image( $id, $align, $marker )
		. sl_paragraphs( 4, 2 );
}

/**
 * A single Sidecar with THREE explicit areas (sidebar-left, content,
 * sidebar-right) — the Hive-recipe shape. Area order mirrors the recipe
 * reconciliation: left rail, content, right rail.
 */
function sl_sidecar_three( array $attrs, string $left, string $content, string $right ): string {
	return '<!-- wp:novablocks/sidecar ' . wp_json_encode( $attrs ) . " -->\n"
		. '<!-- wp:novablocks/sidecar-area {"areaName":"sidebar-left"} -->' . "\n" . $left . "<!-- /wp:novablocks/sidecar-area -->\n\n"
		. '<!-- wp:novablocks/sidecar-area {"areaName":"content"} -->' . "\n" . $content . "<!-- /wp:novablocks/sidecar-area -->\n\n"
		. '<!-- wp:novablocks/sidecar-area {"areaName":"sidebar-right"} -->' . "\n" . $right . "<!-- /wp:novablocks/sidecar-area -->\n\n"
		. "<!-- /wp:novablocks/sidecar -->\n";
}

/** A core/query pass-through fixture over the deterministic lab posts. */
function sl_query( array $post_ids ): string {
	$include = implode( ',', array_map( 'intval', $post_ids ) );
	$query   = [
		'perPage'  => count( $post_ids ),
		'pages'    => 0,
		'offset'   => 0,
		'postType' => 'post',
		'order'    => 'desc',
		'orderBy'  => 'date',
		'inherit'  => false,
		'include'  => $include,
	];
	return '<!-- wp:query {"queryId":4200,"query":' . wp_json_encode( $query ) . ',"displayLayout":{"type":"list"}} -->' . "\n"
		. '<div class="wp-block-query">' . "\n"
		. '<!-- wp:post-template -->' . "\n"
		. '<!-- wp:post-title {"isLink":true} /-->' . "\n"
		. '<!-- wp:post-excerpt /-->' . "\n"
		. '<!-- wp:post-featured-image /-->' . "\n"
		. '<!-- /wp:post-template -->' . "\n"
		. '</div>' . "\n"
		. "<!-- /wp:query -->\n";
}

/**
 * A page-level Supernova (Cards Collection) pass-through fixture — static
 * `fields` cards so it needs no posts and renders deterministically. The
 * page-level `.nb-supernova` is a subgrid pass-through consumer (raised :is()
 * specificity, 4.1 review Minor #3).
 */
function sl_supernova(): string {
	$common = '"contentType":"fields","layoutStyle":"classic","columns":3,"postsToShow":3,"loadingMode":"manual","showButtons":false,"imageResizing":"original","thumbnailAspectRatio":25';
	$item   = static function ( $title, $desc ) use ( $common ) {
		return '<!-- wp:novablocks/supernova-item {"title":' . wp_json_encode( $title ) . ',"description":' . wp_json_encode( $desc ) . ',"defaultsGenerated":true,' . $common . '} /-->' . "\n";
	};
	return '<!-- wp:novablocks/supernova {"title":"Pass-through collection","subtitle":"Static fields","showSubtitle":false,' . $common . '} -->' . "\n"
		. $item( 'First card', 'A deterministic static card in the Supernova pass-through fixture.' )
		. $item( 'Second card', 'Another static card, no posts query, no remote images.' )
		. $item( 'Third card', 'A third static card so the collection renders three columns.' )
		. "<!-- /wp:novablocks/supernova -->\n";
}

/**
 * A Nova Header whose header row locally overrides `--nb-wrapper-sides-spacings`
 * (headerSidesSpacing), with a nested Sidecar inside it. This exercises the
 * substitution-context edge from Task 2.2 review: the nested Nova layout grid
 * computes `--nb-actual-container-width` under the header's overridden
 * wrapper-sides value.
 */
function sl_header_nested( int $img ): string {
	$inner_sidecar = sl_sidecar(
		[ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ],
		sl_paragraphs( 1, 2 ) . sl_image( $img, 'wide' ) . sl_paragraphs( 1, 3 ),
		sl_rail_short()
	);
	return '<!-- wp:novablocks/header {"headerSidesSpacing":150} -->' . "\n"
		. '<!-- wp:novablocks/header-row -->' . "\n"
		. $inner_sidecar
		. "<!-- /wp:novablocks/header-row -->\n"
		. "<!-- /wp:novablocks/header -->\n";
}

// -------------------------------------------------------------------------
// 3. Page matrix.
// -------------------------------------------------------------------------

/** @return array<string, array{title:string, description:string, families:string[], content:string}> keyed by slug */
function sl_page_definitions( int $img, array $post_ids = [] ): array {
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

	$pages['right-large-sticky-long'] = [
		'title'       => 'Sidecar Lab — Right Rail, Large, Sticky After Long Rail',
		'description' => 'Right rail, large width, lastItemIsSticky:true with LONG rail content above the sticky last item (different sticky offset math than short rails); full content battery.',
		'families'    => [ 'rail-right', 'width-large', 'sticky-on', 'rail-long', 'content-battery' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'large', 'lastItemIsSticky' => true ], $battery, sl_rail_sticky_long( $img ) ),
	];

	// --- Both rails via nesting (Hive) --------------------------------------
	// Per the plan: the OUTER left sidecar carries the sticky (rail: one short
	// paragraph + sticky test block) — an outer sticky spanning a nested inner
	// sidecar is a distinct measurement scenario. The inner right sidecar
	// keeps its own sticky too.
	$pages['nested-hive'] = [
		'title'       => 'Sidecar Lab — Nested Hive',
		'description' => 'Both rails via nesting: outer sidebarPosition:left sidecar with lastItemIsSticky:true (rail: short paragraph + sticky Group spanning the nested inner sidecar) whose content area holds an inner sidebarPosition:right sidecar with rail content and its own sticky last item.',
		'families'    => [ 'rail-nested', 'nested-hive', 'rail-left', 'rail-right', 'sticky-on', 'content-reduced' ],
		'content'     => sl_sidecar(
			[ 'sidebarPosition' => 'left', 'sidebarWidth' => 'medium', 'lastItemIsSticky' => true ],
			sl_paragraphs( 1, 0 )
			. sl_sidecar(
				[ 'sidebarPosition' => 'right', 'sidebarWidth' => 'small', 'lastItemIsSticky' => true ],
				sl_content_battery_reduced( $img ),
				sl_rail_sticky()
			),
			sl_rail_hive_outer()
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

	// =====================================================================
	// Phase 4b re-baseline additions (Task 4b.3). NEW capabilities with no
	// old-engine behavior to preserve — they enter the matrix now that
	// baseline-v2 (new engine) is the canonical reference.
	// =====================================================================

	// --- (a) Pull-outs: Content Around / Extend, left+right, over filled AND
	//         empty rails, plus the Never+wrap coexistence (wrap-wins) pin. ---
	$pages['wrap-around-right'] = [
		'title'       => 'Sidecar Lab — Wrap Around, Right rail',
		'description' => 'Content Around pull-out (alignright + nb-wrap-around) over a FILLED right rail; text wraps beside AND under the float; segment aligns to the body edge.',
		'families'    => [ 'rail-right', 'width-medium', 'pullout', 'wrap-around', 'align-right', 'rail-short' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ], sl_pullout_content( $img, 'right', 'nb-wrap-around' ), sl_rail_short() ),
	];
	$pages['wrap-around-left'] = [
		'title'       => 'Sidecar Lab — Wrap Around, Left rail',
		'description' => 'Content Around pull-out (alignleft + nb-wrap-around) over a FILLED left rail; mirror of wrap-around-right.',
		'families'    => [ 'rail-left', 'width-medium', 'pullout', 'wrap-around', 'align-left', 'rail-short' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'left', 'sidebarWidth' => 'medium' ], sl_pullout_content( $img, 'left', 'nb-wrap-around' ), sl_rail_short() ),
	];
	$pages['wrap-extend-right'] = [
		'title'       => 'Sidecar Lab — Wrap Extend, Right rail',
		'description' => 'Extend pull-out (alignright + nb-wrap-extend) over a FILLED right rail; the float is pulled over the rail toward the wide edge via track-var margins.',
		'families'    => [ 'rail-right', 'width-medium', 'pullout', 'wrap-extend', 'align-right', 'rail-short' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ], sl_pullout_content( $img, 'right', 'nb-wrap-extend' ), sl_rail_short() ),
	];
	$pages['wrap-extend-left'] = [
		'title'       => 'Sidecar Lab — Wrap Extend, Left rail',
		'description' => 'Extend pull-out (alignleft + nb-wrap-extend) over a FILLED left rail; mirror of wrap-extend-right.',
		'families'    => [ 'rail-left', 'width-medium', 'pullout', 'wrap-extend', 'align-left', 'rail-short' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'left', 'sidebarWidth' => 'medium' ], sl_pullout_content( $img, 'left', 'nb-wrap-extend' ), sl_rail_short() ),
	];
	$pages['wrap-extend-empty-right'] = [
		'title'       => 'Sidecar Lab — Wrap Extend over EMPTY Right rail',
		'description' => 'Extend pull-out (alignright + nb-wrap-extend) over an EMPTY right rail; the track-var margin still resolves (rail width reserved) so the float pulls over the empty rail region.',
		'families'    => [ 'rail-right', 'width-medium', 'pullout', 'wrap-extend', 'align-right', 'rail-empty' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ], sl_pullout_content( $img, 'right', 'nb-wrap-extend' ), '' ),
	];
	$pages['wrap-around-empty-left'] = [
		'title'       => 'Sidecar Lab — Wrap Around over EMPTY Left rail',
		'description' => 'Content Around pull-out (alignleft + nb-wrap-around) over an EMPTY left rail; the segment still body-edge-aligns and the float wraps beside/under.',
		'families'    => [ 'rail-left', 'width-medium', 'pullout', 'wrap-around', 'align-left', 'rail-empty' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'left', 'sidebarWidth' => 'medium' ], sl_pullout_content( $img, 'left', 'nb-wrap-around' ), '' ),
	];
	$pages['wrap-coexist-never-right'] = [
		'title'       => 'Sidecar Lab — Wrap-wins coexistence (Around + Never)',
		'description' => 'A block carrying BOTH nb-wrap-around AND nb-break-never over a filled right rail. Wrap-wins: it must render as Content Around (float in a .nb-flow-segment), the break class inert.',
		'families'    => [ 'rail-right', 'width-medium', 'pullout', 'wrap-around', 'wrap-wins', 'break-never', 'align-right', 'rail-short' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ], sl_pullout_content( $img, 'right', 'nb-wrap-around nb-break-never' ), sl_rail_short() ),
	];

	// --- (e) Per-block break dimension: Always over a filled rail, Never over
	//         an empty rail (Task 3.3 had zero automated visual coverage). ---
	$pages['break-always-filled-right'] = [
		'title'       => 'Sidecar Lab — Break Always over filled Right rail',
		'description' => 'A wide image pinned nb-break-always over a FILLED right rail: it must extend over the rail regardless of measurement.',
		'families'    => [ 'rail-right', 'width-medium', 'break-always', 'rail-long' ],
		'content'     => sl_sidecar(
			[ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ],
			sl_paragraphs( 1, 1 ) . sl_marked_image( $img, 'wide', 'nb-break-always' ) . sl_paragraphs( 2, 2 ),
			sl_rail_long( $img )
		),
	];
	$pages['break-never-empty-right'] = [
		'title'       => 'Sidecar Lab — Break Never over empty Right rail',
		'description' => 'A wide image pinned nb-break-never over an EMPTY right rail: the layer-2 :has() flip would open the span, but Never must keep it CONSTRAINED (cs/ce).',
		'families'    => [ 'rail-right', 'width-medium', 'break-never', 'rail-empty' ],
		'content'     => sl_sidecar(
			[ 'sidebarPosition' => 'right', 'sidebarWidth' => 'medium' ],
			sl_paragraphs( 1, 1 ) . sl_marked_image( $img, 'wide', 'nb-break-never' ) . sl_paragraphs( 2, 2 ),
			''
		),
	];

	// --- (f) Three-area (single-block Hive) + the none-position+legacy-sidebar
	//         back-compat edge (4.1 review Minor #1). ------------------------
	$pages['three-area-hive'] = [
		'title'       => 'Sidecar Lab — Three-area (single-block Hive)',
		'description' => 'A single Sidecar with THREE explicit areas (sidebar-left + content + sidebar-right), sidebarPosition:none, small width. Both rails present -> neither absence class; content narrows on both sides.',
		'families'    => [ 'rail-both', 'three-area', 'hive', 'width-small', 'rail-short', 'content-reduced' ],
		'content'     => sl_sidecar_three(
			[ 'sidebarPosition' => 'none', 'sidebarWidth' => 'small' ],
			sl_rail_short(),
			sl_content_battery_reduced( $img ),
			sl_rail_short()
		),
	];
	$pages['none-legacy-sidebar'] = [
		'title'       => 'Sidecar Lab — None position + legacy sidebar area',
		'description' => 'sidebarPosition:none PLUS a retained legacy `sidebar` area (back-compat edge, 4.1 review Minor #1): the presence-driven engine renders the present sidebar as a right rail (the old engine hid it).',
		'families'    => [ 'rail-right', 'legacy-sidebar', 'none-position', 'width-medium', 'rail-short', 'content-reduced' ],
		'content'     => sl_sidecar( [ 'sidebarPosition' => 'none', 'sidebarWidth' => 'medium' ], sl_content_battery_reduced( $img ), sl_rail_short() ),
	];

	// --- (b) Pass-through consumers: query-loop and Supernova (ship-decision
	//         condition 2 — zero prior harness coverage). --------------------
	if ( ! empty( $post_ids ) ) {
		$pages['query-loop'] = [
			'title'       => 'Sidecar Lab — Query Loop pass-through',
			'description' => 'A core/query (inherit:false) over the deterministic lab posts. .wp-block-query is a subgrid pass-through consumer; it must resolve subgrid (or the fallback template) without collapsing or overflowing.',
			'families'    => [ 'passthrough', 'query-loop', 'no-rail' ],
			'content'     => sl_query( $post_ids ),
		];
	}
	$pages['supernova'] = [
		'title'       => 'Sidecar Lab — Supernova pass-through',
		'description' => 'A page-level Supernova (Cards Collection) with static `fields` cards. .nb-supernova is a subgrid pass-through consumer under the raised :is() specificity (4.1 review Minor #3).',
		'families'    => [ 'passthrough', 'supernova', 'no-rail' ],
		'content'     => sl_supernova(),
	];

	// --- (c) Header-nested grid: a Nova header row overrides
	//         --nb-wrapper-sides-spacings; a Sidecar nested inside computes its
	//         tracks under that substitution (Task 2.2 review, uncovered edge). ---
	$pages['header-nested-grid'] = [
		'title'       => 'Sidecar Lab — Header-nested grid (wrapper-sides override)',
		'description' => 'A novablocks/header (headerSidesSpacing:150 overrides --nb-wrapper-sides-spacings) with a novablocks/header-row containing a nested Sidecar. KNOWN-BROKEN as of baseline-v2 (Task 4b.3 finding): the header row is an unconstrained/max-content sizing context, so the nested grid\'s --nb-actual-container-width (100%-wrapper-sides*2) + the override blow up — the nested sidecar computes ~3608px sides and overflows to ~8341px wide at 1440px. Captured as-is; a Phase 5/6 fix (or an explicit sidecar-in-header-unsupported ruling) will show as an annotated diff. See expected-changes.md.',
		'families'    => [ 'header-nested', 'substitution-context', 'known-broken', 'rail-right', 'width-medium' ],
		'content'     => sl_header_nested( $img ),
	];

	return $pages;
}

// -------------------------------------------------------------------------
// 4. Idempotent regeneration.
// -------------------------------------------------------------------------

// Delete every page AND post whose slug starts with the prefix (any status,
// incl. trash) — posts back the query-loop pass-through fixture.
$all_posts = get_posts( [
	'post_type'      => [ 'page', 'post' ],
	'post_status'    => [ 'publish', 'draft', 'pending', 'private', 'future', 'trash' ],
	'posts_per_page' => - 1,
] );
$deleted   = 0;
foreach ( $all_posts as $p ) {
	if ( 0 === strpos( $p->post_name, SL_SLUG_PREFIX ) ) {
		wp_delete_post( $p->ID, true );
		$deleted ++;
	}
}
echo 'Deleted ' . $deleted . " existing sidecar-lab page(s)/post(s).\n";

$attachment_id = sl_get_fixture_attachment_id();
echo 'Fixture attachment ID: ' . $attachment_id . ' (' . wp_get_attachment_image_url( $attachment_id, 'full' ) . ")\n";

// Deterministic lab posts for the query-loop pass-through fixture (featured
// image = the fixture attachment; excerpt is fixed text). Recreated each run.
$post_ids = [];
for ( $i = 1; $i <= 3; $i ++ ) {
	$pid = wp_insert_post( [
		'post_type'    => 'post',
		'post_status'  => 'publish',
		'post_name'    => SL_SLUG_PREFIX . 'post-' . $i,
		'post_title'   => 'Sidecar Lab Post ' . $i,
		'post_excerpt' => 'Deterministic excerpt for lab post ' . $i . ', used by the query-loop pass-through fixture.',
		'post_content' => '<!-- wp:paragraph --><p>Body of deterministic lab post ' . $i . '.</p><!-- /wp:paragraph -->',
	], true );
	if ( ! is_wp_error( $pid ) ) {
		set_post_thumbnail( $pid, $attachment_id );
		$post_ids[] = (int) $pid;
	}
}
echo 'Created ' . count( $post_ids ) . " lab post(s) for the query fixture.\n";

$definitions = sl_page_definitions( $attachment_id, $post_ids );
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
