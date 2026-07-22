<?php
/**
 * Contract for Sidecar flow segmentation (Task 4b.1 / 4b.2 pull-outs).
 *
 * Flow segmentation is a render-time regrouping of a Sidecar content area's
 * direct children, applied ONLY when a contained aligned block opts into a
 * wrap placement (Content Around / Extend pull-out) via a className marker
 * (`nb-wrap-around` / `nb-wrap-extend`). The aligned block plus the following
 * run of plain flow blocks (paragraphs, lists, headings) become ONE
 * `.nb-flow-segment` grid item — a normal flow container inside which the
 * image floats, so text wraps beside AND under it. The segment spans the same
 * body-edge range as surrounding body copy (it is a plain content-grid child).
 *
 * CRITICAL INVARIANT: when NO contained block opts in, the transform is a
 * complete no-op — `novablocks_flow_segments_present()` is false and the
 * content area render returns its inner HTML byte-for-byte unchanged. Existing
 * content can therefore never change output.
 *
 * Run: "/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/flow-segments-contract.php
 */

define( 'ABSPATH', __DIR__ );

require dirname( __DIR__, 2 ) . '/lib/flow-segments.php';

$failures = [];

function fs_fail( $message ) {
	global $failures;
	$failures[] = $message;
}

function fs_assert_same( $label, $expected, $actual ) {
	if ( $expected !== $actual ) {
		fs_fail( "$label: expected " . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) );
	}
}

/** Build a parsed-block array shorthand. */
function fs_block( $name, $attrs = [] ) {
	return [ 'blockName' => $name, 'attrs' => $attrs ];
}

function fs_image( $align, $wrap = null ) {
	$attrs = [ 'align' => $align ];
	if ( null !== $wrap ) {
		$attrs['className'] = $wrap; // e.g. 'nb-wrap-around'
	}
	return fs_block( 'core/image', $attrs );
}

function fs_paragraph( $align = '' ) {
	$attrs = '' === $align ? [] : [ 'align' => $align ];
	return fs_block( 'core/paragraph', $attrs );
}

/* -------------------------------------------------------------------------- *
 * A. Pull-out trigger detection (align + wrap className).
 * -------------------------------------------------------------------------- */

fs_assert_same(
	'image alignright + around -> right/around',
	[ 'side' => 'right', 'mode' => 'around' ],
	novablocks_flow_segment_pullout( fs_image( 'right', 'nb-wrap-around' ) )
);

fs_assert_same(
	'image alignleft + extend -> left/extend',
	[ 'side' => 'left', 'mode' => 'extend' ],
	novablocks_flow_segment_pullout( fs_image( 'left', 'nb-wrap-extend' ) )
);

// Align lives in className only (WP serializes align to alignleft/alignright).
fs_assert_same(
	'image with alignleft class + wrap class -> left/around',
	[ 'side' => 'left', 'mode' => 'around' ],
	novablocks_flow_segment_pullout( fs_block( 'core/image', [ 'className' => 'alignleft nb-wrap-around' ] ) )
);

// No wrap class -> not a trigger (default aligned block keeps today's behavior).
fs_assert_same(
	'aligned image without a wrap class is not a trigger',
	null,
	novablocks_flow_segment_pullout( fs_image( 'right' ) )
);

// Wrap only makes sense for left/right; wide/full/center never trigger.
fs_assert_same(
	'wide image with a wrap class is not a trigger',
	null,
	novablocks_flow_segment_pullout( fs_image( 'wide', 'nb-wrap-around' ) )
);
fs_assert_same(
	'unaligned block with a wrap class is not a trigger',
	null,
	novablocks_flow_segment_pullout( fs_block( 'core/image', [ 'className' => 'nb-wrap-extend' ] ) )
);

/* -------------------------------------------------------------------------- *
 * B. Flow-block allowlist (what gets pulled under a wrapping pull-out).
 * -------------------------------------------------------------------------- */

fs_assert_same( 'paragraph (no align) is a flow block', true, novablocks_is_flow_segment_flow_block( fs_paragraph() ) );
fs_assert_same( 'heading is a flow block', true, novablocks_is_flow_segment_flow_block( fs_block( 'core/heading' ) ) );
fs_assert_same( 'list is a flow block', true, novablocks_is_flow_segment_flow_block( fs_block( 'core/list' ) ) );

// An ALIGNED flow block breaks the run (it is a break block, not body copy).
fs_assert_same( 'wide paragraph is NOT a flow block', false, novablocks_is_flow_segment_flow_block( fs_paragraph( 'wide' ) ) );
fs_assert_same( 'right paragraph is NOT a flow block', false, novablocks_is_flow_segment_flow_block( fs_paragraph( 'right' ) ) );

// Structural / aligned-capable / nested blocks are never flow.
fs_assert_same( 'image is NOT a flow block', false, novablocks_is_flow_segment_flow_block( fs_image( 'right' ) ) );
fs_assert_same( 'group is NOT a flow block', false, novablocks_is_flow_segment_flow_block( fs_block( 'core/group' ) ) );
fs_assert_same( 'quote is NOT a flow block', false, novablocks_is_flow_segment_flow_block( fs_block( 'core/quote' ) ) );
fs_assert_same( 'nested sidecar is NOT a flow block', false, novablocks_is_flow_segment_flow_block( fs_block( 'novablocks/sidecar' ) ) );

/* -------------------------------------------------------------------------- *
 * C. Presence gate — the no-op invariant.
 * -------------------------------------------------------------------------- */

fs_assert_same(
	'no trigger -> not present (byte-neutral path)',
	false,
	novablocks_flow_segments_present( [ fs_paragraph(), fs_image( 'wide' ), fs_paragraph() ] )
);
fs_assert_same(
	'a trigger anywhere -> present',
	true,
	novablocks_flow_segments_present( [ fs_paragraph(), fs_image( 'right', 'nb-wrap-around' ), fs_paragraph() ] )
);
fs_assert_same( 'empty block list -> not present', false, novablocks_flow_segments_present( [] ) );

/* -------------------------------------------------------------------------- *
 * D. Grouping boundaries.
 * -------------------------------------------------------------------------- */

// Trigger + following flow run; the run stops at a wide (break) paragraph, and
// the trailing lone paragraph is its own passthrough.
$groups = novablocks_compute_flow_segments( [
	fs_image( 'right', 'nb-wrap-around' ), // 0 trigger
	fs_paragraph(),                        // 1 flow
	fs_paragraph(),                        // 2 flow
	fs_paragraph( 'wide' ),                // 3 break -> stops run
	fs_paragraph(),                        // 4 lone passthrough
] );
fs_assert_same( 'D1 group count', 3, count( $groups ) );
fs_assert_same( 'D1 g0 is a segment', 'segment', $groups[0]['type'] );
fs_assert_same( 'D1 g0 side', 'right', $groups[0]['side'] );
fs_assert_same( 'D1 g0 mode', 'around', $groups[0]['mode'] );
fs_assert_same( 'D1 g0 indices', [ 0, 1, 2 ], $groups[0]['indices'] );
fs_assert_same( 'D1 g1 passthrough (wide break)', 'passthrough', $groups[1]['type'] );
fs_assert_same( 'D1 g1 index', [ 3 ], $groups[1]['indices'] );
fs_assert_same( 'D1 g2 passthrough (trailing p)', 'passthrough', $groups[2]['type'] );
fs_assert_same( 'D1 g2 index', [ 4 ], $groups[2]['indices'] );

// Two triggers with body copy between and after; leading passthrough first.
$groups = novablocks_compute_flow_segments( [
	fs_paragraph(),                        // 0 passthrough
	fs_image( 'right', 'nb-wrap-around' ), // 1 trigger
	fs_paragraph(),                        // 2 flow
	fs_image( 'left', 'nb-wrap-extend' ),  // 3 trigger (also stops prev run: image not flow)
	fs_paragraph(),                        // 4 flow
] );
fs_assert_same( 'D2 group count', 3, count( $groups ) );
fs_assert_same( 'D2 g0 passthrough', 'passthrough', $groups[0]['type'] );
fs_assert_same( 'D2 g1 segment [1,2]', [ 1, 2 ], $groups[1]['indices'] );
fs_assert_same( 'D2 g1 side right', 'right', $groups[1]['side'] );
fs_assert_same( 'D2 g2 segment [3,4]', [ 3, 4 ], $groups[2]['indices'] );
fs_assert_same( 'D2 g2 side left', 'left', $groups[2]['side'] );
fs_assert_same( 'D2 g2 mode extend', 'extend', $groups[2]['mode'] );

// A nested / non-allowlist block stops the run.
$groups = novablocks_compute_flow_segments( [
	fs_image( 'right', 'nb-wrap-around' ), // 0 trigger
	fs_paragraph(),                        // 1 flow
	fs_block( 'novablocks/sidecar' ),      // 2 nested -> stops run
	fs_paragraph(),                        // 3 lone passthrough
] );
fs_assert_same( 'D3 group count', 3, count( $groups ) );
fs_assert_same( 'D3 g0 segment [0,1]', [ 0, 1 ], $groups[0]['indices'] );
fs_assert_same( 'D3 g1 nested passthrough', [ 2 ], $groups[1]['indices'] );
fs_assert_same( 'D3 g2 passthrough', [ 3 ], $groups[2]['indices'] );

// No trigger at all -> every block is its own passthrough (and present() false).
$groups = novablocks_compute_flow_segments( [ fs_paragraph(), fs_image( 'wide' ), fs_paragraph() ] );
fs_assert_same( 'D4 all passthrough', [ 'passthrough', 'passthrough', 'passthrough' ], array_column( $groups, 'type' ) );

// D5 edge: a trigger as the LAST block -> a single-index segment (no flow run).
$groups = novablocks_compute_flow_segments( [
	fs_paragraph(),                        // 0 passthrough
	fs_image( 'right', 'nb-wrap-around' ), // 1 trigger, nothing follows
] );
fs_assert_same( 'D5 group count', 2, count( $groups ) );
fs_assert_same( 'D5 g0 passthrough', 'passthrough', $groups[0]['type'] );
fs_assert_same( 'D5 g1 single-index segment', 'segment', $groups[1]['type'] );
fs_assert_same( 'D5 g1 indices', [ 1 ], $groups[1]['indices'] );

// D6 edge: two ADJACENT triggers -> two separate single-index segments (the
// second image is not a flow block, so it ends the first run and starts its own).
$groups = novablocks_compute_flow_segments( [
	fs_image( 'right', 'nb-wrap-around' ), // 0 trigger
	fs_image( 'left', 'nb-wrap-extend' ),  // 1 trigger
	fs_paragraph(),                        // 2 flow -> belongs to the SECOND segment
] );
fs_assert_same( 'D6 group count', 2, count( $groups ) );
fs_assert_same( 'D6 g0 single-index segment', [ 0 ], $groups[0]['indices'] );
fs_assert_same( 'D6 g0 side right', 'right', $groups[0]['side'] );
fs_assert_same( 'D6 g1 segment [1,2]', [ 1, 2 ], $groups[1]['indices'] );
fs_assert_same( 'D6 g1 side left', 'left', $groups[1]['side'] );
fs_assert_same( 'D6 g1 mode extend', 'extend', $groups[1]['mode'] );

/* -------------------------------------------------------------------------- *
 * E. Segment wrapper classes (side + mode signal for the SCSS).
 * -------------------------------------------------------------------------- */

fs_assert_same(
	'segment classes right/around',
	'nb-flow-segment nb-flow-segment--right nb-flow-segment--around',
	novablocks_flow_segment_classes( 'right', 'around' )
);
fs_assert_same(
	'segment classes left/extend',
	'nb-flow-segment nb-flow-segment--left nb-flow-segment--extend',
	novablocks_flow_segment_classes( 'left', 'extend' )
);

/* -------------------------------------------------------------------------- *
 * F. Render integration — segment wrapping + byte-neutral passthrough.
 * -------------------------------------------------------------------------- */

// A renderer stub that emits a stable marker per block by index.
$render = function ( $block, $index ) {
	return '[' . $index . ':' . $block['blockName'] . ']';
};

// With a trigger: the segment wraps trigger + flow run; passthroughs render bare.
$html = novablocks_render_flow_segments(
	[
		fs_image( 'right', 'nb-wrap-around' ), // 0
		fs_paragraph(),                        // 1
		fs_paragraph(),                        // 2
		fs_paragraph( 'wide' ),                // 3 break
	],
	$render
);
$expected =
	'<div class="nb-flow-segment nb-flow-segment--right nb-flow-segment--around">'
	. '[0:core/image][1:core/paragraph][2:core/paragraph]'
	. '</div>'
	. '[3:core/paragraph]';
fs_assert_same( 'F1 rendered segmentation', $expected, $html );

// Without a trigger: render is a plain concatenation (no wrappers introduced) —
// the caller uses present() to skip this path entirely, but the renderer itself
// must never inject a segment when none exists.
$html = novablocks_render_flow_segments(
	[ fs_paragraph(), fs_image( 'wide' ), fs_paragraph() ],
	$render
);
fs_assert_same(
	'F2 no-trigger render is plain concatenation',
	'[0:core/paragraph][1:core/image][2:core/paragraph]',
	$html
);

// F3 SINGLE-RENDER: the assembler must invoke the per-block renderer EXACTLY
// once per index — never twice (blocks with unique-ID / enqueue-once side
// effects must not double). A counting renderer proves it.
$render_counts = [];
$counting = function ( $block, $index ) use ( &$render_counts ) {
	$render_counts[ $index ] = ( isset( $render_counts[ $index ] ) ? $render_counts[ $index ] : 0 ) + 1;
	return '[' . $index . ']';
};
novablocks_render_flow_segments(
	[
		fs_paragraph(),                        // 0 passthrough
		fs_image( 'right', 'nb-wrap-around' ), // 1 trigger
		fs_paragraph(),                        // 2 flow (in segment)
		fs_paragraph(),                        // 3 flow (in segment)
		fs_image( 'left', 'nb-wrap-extend' ),  // 4 trigger (single-index segment)
	],
	$counting
);
fs_assert_same( 'F3 every block rendered exactly once', [ 1, 1, 1, 1, 1 ], [
	$render_counts[0] ?? 0, $render_counts[1] ?? 0, $render_counts[2] ?? 0, $render_counts[3] ?? 0, $render_counts[4] ?? 0,
] );
fs_assert_same( 'F3 total render calls == block count (no doubles)', 5, array_sum( $render_counts ) );

/* -------------------------------------------------------------------------- *
 * G. Render-once integration — the pre_render_block short-circuit renders each
 *    child EXACTLY once (WP's own inner render is skipped) and returns null for
 *    a pull-out-free area so WordPress renders it normally (byte-neutral).
 * -------------------------------------------------------------------------- */

// Minimal WP doubles for the sidecar-area wrapper render path.
if ( ! class_exists( 'WP_Block' ) ) {
	class WP_Block {
		public $parsed_block;
		public $context;
		public $available_context;
		public $attributes;
		public function __construct( $parsed_block = [], $context = [] ) {
			$this->parsed_block      = $parsed_block;
			$this->context           = $context;
			$this->available_context = $context;
			$this->attributes        = isset( $parsed_block['attrs'] ) ? $parsed_block['attrs'] : [];
		}
	}
}
if ( ! function_exists( 'novablocks_merge_attributes_from_array' ) ) {
	function novablocks_merge_attributes_from_array( $paths ) {
		return [ 'areaName' => [ 'type' => 'string', 'default' => 'content' ] ];
	}
}
if ( ! function_exists( 'novablocks_get_attributes_with_defaults' ) ) {
	function novablocks_get_attributes_with_defaults( $attributes, $config ) {
		foreach ( $config as $name => $def ) {
			if ( ! array_key_exists( $name, $attributes ) ) {
				$attributes[ $name ] = $def['default'];
			}
		}
		return $attributes;
	}
}
if ( ! function_exists( 'novablocks_maybe_enqueue_block_frontend_scripts' ) ) {
	function novablocks_maybe_enqueue_block_frontend_scripts() {}
}
if ( ! function_exists( 'esc_attr' ) ) {
	function esc_attr( $value ) { return htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' ); }
}

// A counting core render_block() double.
$GLOBALS['fs_render_block_calls'] = [];
if ( ! function_exists( 'render_block' ) ) {
	function render_block( $parsed ) {
		$name = isset( $parsed['blockName'] ) ? $parsed['blockName'] : '?';
		$GLOBALS['fs_render_block_calls'][] = $name;
		return '<R:' . $name . '>';
	}
}

require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/sidecar-area/init.php';

// G1: pull-out present -> short-circuits (non-null), each child render_block'd once.
$GLOBALS['fs_render_block_calls'] = [];
$content_parsed = [
	'blockName'   => 'novablocks/sidecar-area',
	'attrs'       => [ 'areaName' => 'content' ],
	'innerBlocks' => [
		fs_paragraph(),                        // 0
		fs_image( 'right', 'nb-wrap-around' ), // 1 trigger
		fs_paragraph(),                        // 2 flow
	],
];
$parent = new WP_Block( [ 'blockName' => 'novablocks/sidecar' ], [ 'novablocks/sidebarPosition' => 'right' ] );
$out    = novablocks_flow_segments_pre_render_block( null, $content_parsed, $parent );

if ( ! is_string( $out ) || '' === $out ) {
	fs_fail( 'G1: pull-out area must short-circuit to a rendered string' );
}
if ( false === strpos( (string) $out, 'nb-flow-segment' ) ) {
	fs_fail( 'G1: short-circuit output must contain the segment wrapper' );
}
if ( false === strpos( (string) $out, 'nb-sidecar-area--content' ) ) {
	fs_fail( 'G1: short-circuit output must carry the content-area classes' );
}
fs_assert_same( 'G1 each child render_block\'d exactly once (single render)', 3, count( $GLOBALS['fs_render_block_calls'] ) );
$counts = array_count_values( $GLOBALS['fs_render_block_calls'] );
fs_assert_same( 'G1 image rendered once', 1, $counts['core/image'] ?? 0 );
fs_assert_same( 'G1 paragraphs rendered once each', 2, $counts['core/paragraph'] ?? 0 );

// G2: NO pull-out -> returns null (WordPress renders normally; our code renders 0).
$GLOBALS['fs_render_block_calls'] = [];
$plain_parsed = [
	'blockName'   => 'novablocks/sidecar-area',
	'attrs'       => [ 'areaName' => 'content' ],
	'innerBlocks' => [ fs_paragraph(), fs_image( 'wide' ), fs_paragraph() ],
];
$out2 = novablocks_flow_segments_pre_render_block( null, $plain_parsed, $parent );
fs_assert_same( 'G2 pull-out-free area returns null (byte-neutral)', null, $out2 );
fs_assert_same( 'G2 our code renders zero children on the neutral path', 0, count( $GLOBALS['fs_render_block_calls'] ) );

// G3: not a content area (a rail) -> untouched (null), even with a stray wrap class.
$rail_parsed = [
	'blockName'   => 'novablocks/sidecar-area',
	'attrs'       => [ 'areaName' => 'sidebar' ],
	'innerBlocks' => [ fs_image( 'right', 'nb-wrap-around' ) ],
];
fs_assert_same( 'G3 rail area is never segmented', null, novablocks_flow_segments_pre_render_block( null, $rail_parsed, $parent ) );

// G4: an earlier short-circuit value is respected (not overwritten).
fs_assert_same( 'G4 respects a prior short-circuit', 'PRIOR', novablocks_flow_segments_pre_render_block( 'PRIOR', $content_parsed, $parent ) );

if ( $failures ) {
	foreach ( $failures as $failure ) {
		fwrite( STDERR, "flow segments contract failed: $failure\n" );
	}
	exit( 1 );
}

echo "flow segments contract ok\n";
