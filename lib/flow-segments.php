<?php
/**
 * Sidecar flow segmentation (Sidecar Subgrid Modernization, Task 4b.1 / 4b.2).
 *
 * The Sidecar content area is a grid; grid items cannot float, so a plain
 * aligned image can only ever produce a *band* (text squeezed beside it for
 * the image's whole height, dead space underneath). The two gate-approved
 * pull-out placements — **Content Around** and **Extend pull-out** — need real
 * CSS `float`, which only exists in normal flow.
 *
 * Flow segmentation is the render-time bridge: when a content-area child opts
 * into a wrap placement (via the `nb-wrap-around` / `nb-wrap-extend` className
 * marker written through the same className route as the break control,
 * Task 3.3), that block PLUS the following run of plain flow blocks
 * (paragraphs, lists, headings) are wrapped into ONE `.nb-flow-segment` div.
 * The segment is a normal (non-grid) flow container that is itself a plain
 * content-grid child, so it spans the same body-edge range as the surrounding
 * body copy; inside it the image floats and the copy wraps beside AND under it.
 *
 * NO-OP INVARIANT: this transform touches nothing unless a contained block
 * opts in. `novablocks_flow_segments_present()` is the gate the render path
 * checks — when it returns false the content area returns its inner HTML
 * unchanged, byte-for-byte, so existing content can never change output.
 *
 * Everything here is pure (parsed-block arrays in, structure/HTML out) so the
 * standalone contract (`tests/php/flow-segments-contract.php`) can exercise the
 * grouping and wrapping without a live WordPress.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_flow_segment_flow_blocks' ) ) {
	/**
	 * The allowlist of plain flow blocks pulled under a wrapping pull-out.
	 *
	 * Deliberately narrow: body-copy blocks that read as running text beside
	 * and under a floated image. Aligned-capable / structural blocks
	 * (image, group, quote, pullquote) and nested layout blocks are NOT flow —
	 * each of those instead ends a run and (for a wrap opt-in) starts its own
	 * segment.
	 *
	 * @return string[]
	 */
	function novablocks_flow_segment_flow_blocks() {
		return array( 'core/paragraph', 'core/heading', 'core/list' );
	}
}

if ( ! function_exists( 'novablocks_flow_segment_wrap_modes' ) ) {
	/**
	 * Wrap-marker className -> placement mode.
	 *
	 * @return array<string,string>
	 */
	function novablocks_flow_segment_wrap_modes() {
		return array(
			'nb-wrap-around' => 'around',
			'nb-wrap-extend' => 'extend',
		);
	}
}

if ( ! function_exists( 'novablocks_flow_segment_block_align' ) ) {
	/**
	 * Resolve a parsed block's alignment from its `align` attribute, falling
	 * back to the serialized `alignleft`/`alignright`/`alignwide`/`alignfull`
	 * className (WP writes align to a class on save).
	 *
	 * @param array $block Parsed block array.
	 *
	 * @return string 'left' | 'right' | 'wide' | 'full' | 'center' | ''.
	 */
	function novablocks_flow_segment_block_align( $block ) {
		$attrs = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();

		if ( ! empty( $attrs['align'] ) && is_string( $attrs['align'] ) ) {
			return $attrs['align'];
		}

		$class_name = isset( $attrs['className'] ) && is_string( $attrs['className'] ) ? $attrs['className'] : '';
		$classes    = preg_split( '/\s+/', trim( $class_name ) );

		foreach ( array( 'left', 'right', 'wide', 'full' ) as $align ) {
			if ( in_array( 'align' . $align, $classes, true ) ) {
				return $align;
			}
		}

		return '';
	}
}

if ( ! function_exists( 'novablocks_flow_segment_pullout' ) ) {
	/**
	 * If a parsed block is a wrapping pull-out trigger, return its
	 * `[ 'side' => 'left'|'right', 'mode' => 'around'|'extend' ]`; else null.
	 *
	 * A trigger carries one of the wrap-marker classes AND is aligned left or
	 * right (wrap only makes sense on a side-floated block — wide/full/center
	 * never trigger). The wrap class is the opt-in; without it, an aligned
	 * block keeps today's grid-band behavior and this returns null (the
	 * byte-neutral default path).
	 *
	 * @param array $block Parsed block array.
	 *
	 * @return array|null
	 */
	function novablocks_flow_segment_pullout( $block ) {
		if ( empty( $block['attrs'] ) || ! is_array( $block['attrs'] ) ) {
			return null;
		}

		$class_name = isset( $block['attrs']['className'] ) && is_string( $block['attrs']['className'] )
			? $block['attrs']['className']
			: '';
		$classes    = preg_split( '/\s+/', trim( $class_name ) );

		$mode = null;
		foreach ( novablocks_flow_segment_wrap_modes() as $class => $candidate ) {
			if ( in_array( $class, $classes, true ) ) {
				$mode = $candidate;
				break;
			}
		}

		if ( null === $mode ) {
			return null;
		}

		$align = novablocks_flow_segment_block_align( $block );
		if ( 'left' !== $align && 'right' !== $align ) {
			return null;
		}

		return array( 'side' => $align, 'mode' => $mode );
	}
}

if ( ! function_exists( 'novablocks_is_flow_segment_flow_block' ) ) {
	/**
	 * Whether a parsed block is a plain flow block eligible to be pulled under
	 * a preceding wrapping pull-out: in the allowlist AND unaligned (an aligned
	 * paragraph/heading is a break block that ends the run).
	 *
	 * @param array $block Parsed block array.
	 *
	 * @return bool
	 */
	function novablocks_is_flow_segment_flow_block( $block ) {
		if ( empty( $block['blockName'] ) ) {
			return false;
		}

		if ( ! in_array( $block['blockName'], novablocks_flow_segment_flow_blocks(), true ) ) {
			return false;
		}

		return '' === novablocks_flow_segment_block_align( $block );
	}
}

if ( ! function_exists( 'novablocks_flow_segments_present' ) ) {
	/**
	 * Whether any block in the list opts into a wrap placement. This is the
	 * gate the render path checks BEFORE touching content — false means the
	 * content area returns its inner HTML unchanged (the no-op invariant).
	 *
	 * @param array[] $blocks Parsed block arrays.
	 *
	 * @return bool
	 */
	function novablocks_flow_segments_present( array $blocks ) {
		foreach ( $blocks as $block ) {
			if ( null !== novablocks_flow_segment_pullout( $block ) ) {
				return true;
			}
		}

		return false;
	}
}

if ( ! function_exists( 'novablocks_compute_flow_segments' ) ) {
	/**
	 * Group a content area's direct children into segments and passthroughs.
	 *
	 * A wrapping pull-out at index i opens a segment covering block i plus the
	 * following contiguous run of flow blocks; the run stops at the first
	 * non-flow block (the next aligned/wide/full block, another pull-out,
	 * a group, a nested sidecar — none of which are in the flow allowlist).
	 * Every other block is its own passthrough group.
	 *
	 * @param array[] $blocks Parsed block arrays.
	 *
	 * @return array[] Ordered groups. Each is either
	 *                 [ 'type' => 'segment', 'side' => …, 'mode' => …, 'indices' => int[] ]
	 *                 (first index is the trigger) or
	 *                 [ 'type' => 'passthrough', 'indices' => [ int ] ].
	 */
	function novablocks_compute_flow_segments( array $blocks ) {
		$groups = array();
		$count  = count( $blocks );
		$i      = 0;

		while ( $i < $count ) {
			$pullout = novablocks_flow_segment_pullout( $blocks[ $i ] );

			if ( null !== $pullout ) {
				$indices = array( $i );
				$j       = $i + 1;

				while ( $j < $count && novablocks_is_flow_segment_flow_block( $blocks[ $j ] ) ) {
					$indices[] = $j;
					$j++;
				}

				$groups[] = array(
					'type'    => 'segment',
					'side'    => $pullout['side'],
					'mode'    => $pullout['mode'],
					'indices' => $indices,
				);
				$i = $j;
				continue;
			}

			$groups[] = array(
				'type'    => 'passthrough',
				'indices' => array( $i ),
			);
			$i++;
		}

		return $groups;
	}
}

if ( ! function_exists( 'novablocks_flow_segment_classes' ) ) {
	/**
	 * The `.nb-flow-segment` wrapper class string for a side + mode.
	 *
	 * @param string $side 'left' | 'right'.
	 * @param string $mode 'around' | 'extend'.
	 *
	 * @return string
	 */
	function novablocks_flow_segment_classes( $side, $mode ) {
		return 'nb-flow-segment nb-flow-segment--' . $side . ' nb-flow-segment--' . $mode;
	}
}

if ( ! function_exists( 'novablocks_render_flow_segments' ) ) {
	/**
	 * Render a content area's children with flow segmentation applied.
	 *
	 * Segments wrap their blocks in a `.nb-flow-segment` div; passthroughs
	 * render bare. The per-block renderer is injected so this stays pure and
	 * testable, and it is invoked EXACTLY ONCE per child index (single-render):
	 * the `pre_render_block` integration below passes a renderer that calls the
	 * core `render_block()` once per child, and WP's own inner-block render is
	 * short-circuited, so each child renders exactly once in total.
	 *
	 * @param array[]  $blocks       Parsed block arrays (metadata for grouping).
	 * @param callable $render_block fn( array $block, int $index ) : string.
	 *
	 * @return string
	 */
	function novablocks_render_flow_segments( array $blocks, callable $render_block ) {
		$html = '';

		foreach ( novablocks_compute_flow_segments( $blocks ) as $group ) {
			if ( 'segment' === $group['type'] ) {
				$inner = '';
				foreach ( $group['indices'] as $index ) {
					$inner .= call_user_func( $render_block, $blocks[ $index ], $index );
				}
				$html .= '<div class="' . novablocks_flow_segment_classes( $group['side'], $group['mode'] ) . '">' . $inner . '</div>';
				continue;
			}

			$index = $group['indices'][0];
			$html .= call_user_func( $render_block, $blocks[ $index ], $index );
		}

		return $html;
	}
}

if ( ! function_exists( 'novablocks_flow_segments_pre_render_block' ) ) {
	/**
	 * Render-once short-circuit for a Sidecar content area that contains a
	 * pull-out.
	 *
	 * `pre_render_block` fires for every inner block BEFORE WordPress renders it
	 * (WP_Block::render inner loop). Returning non-null makes WP use our output
	 * and skip its own render of that block ENTIRELY — no inner-block render, no
	 * second render callback. So for a pull-out content area we render each
	 * child exactly once (via core `render_block()`), assemble the segments, and
	 * wrap with the normal area classes. Every other block (and every
	 * pull-out-free content area) returns null → WordPress renders it normally,
	 * byte-for-byte unchanged.
	 *
	 * @param string|null   $pre_render   Short-circuit value from earlier filters.
	 * @param array         $parsed_block The block about to render.
	 * @param WP_Block|null $parent_block The parent block instance, if any.
	 *
	 * @return string|null
	 */
	function novablocks_flow_segments_pre_render_block( $pre_render, $parsed_block, $parent_block = null ) {
		// Respect an earlier short-circuit and only act on Sidecar content areas.
		if ( null !== $pre_render ) {
			return $pre_render;
		}
		if ( empty( $parsed_block['blockName'] ) || 'novablocks/sidecar-area' !== $parsed_block['blockName'] ) {
			return $pre_render;
		}
		$area_name = isset( $parsed_block['attrs']['areaName'] ) ? $parsed_block['attrs']['areaName'] : 'content';
		if ( 'content' !== $area_name ) {
			return $pre_render;
		}

		$inner = ( isset( $parsed_block['innerBlocks'] ) && is_array( $parsed_block['innerBlocks'] ) )
			? $parsed_block['innerBlocks']
			: array();

		// No pull-out → hand back null so WordPress renders normally (the
		// byte-neutral path; existing content is never touched).
		if ( ! novablocks_flow_segments_present( $inner ) ) {
			return $pre_render;
		}

		// Single render: each child through core render_block() exactly once.
		$segmented = novablocks_render_flow_segments(
			$inner,
			static function ( $child, $index ) {
				unset( $index );
				return render_block( $child );
			}
		);

		// A context-carrying instance for the wrapper (side classes + one enqueue).
		// available_context may be null on some parents — WP_Block::__construct
		// array_merges the context, so it must be an array.
		$context = ( $parent_block instanceof WP_Block && is_array( $parent_block->available_context ) )
			? $parent_block->available_context
			: array();
		$area_block = new WP_Block( $parsed_block, $context );

		return novablocks_render_sidecar_area_block( $area_block->attributes, $segmented, $area_block );
	}
}

// Registered at file load (this file is required from nova-blocks.php at plugin
// bootstrap, before block init.php files). Priority 10, three args.
if ( function_exists( 'add_filter' ) ) {
	add_filter( 'pre_render_block', 'novablocks_flow_segments_pre_render_block', 10, 3 );
}
