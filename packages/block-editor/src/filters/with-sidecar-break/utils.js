/**
 * Per-block break control (Task 3.3): pure predicates shared by the
 * attribute registration and the inspector control.
 *
 * Serialization route (review round 2026-07-21): the class is written into
 * the block's `className` ATTRIBUTE on control interaction (the
 * with-font-size-picker precedent) — there is NO save filter. That gives
 * byte-identity for default-valued blocks by construction, puts the class on
 * the editor-canvas wrapper automatically (canvas parity), and keeps saved
 * markup valid if Nova is deactivated (the class lives inside the block's
 * own attribute, not in filtered save output).
 *
 * Target set: the aligned-capable core blocks. image/group support
 * pull-outs; quote/pullquote align all four ways; heading/paragraph break
 * as wide/full only. Nova already registers attributes on all of these
 * (image/group via the deprecation filters; quote, pullquote, heading and
 * paragraph carry the fontSize attribute via with-font-size-picker).
 */

export const SIDECAR_BREAK_ALIGNMENTS_BY_BLOCK = {
	'core/image': [ 'wide', 'full', 'left', 'right' ],
	'core/group': [ 'wide', 'full', 'left', 'right' ],
	'core/quote': [ 'wide', 'full', 'left', 'right' ],
	'core/pullquote': [ 'wide', 'full', 'left', 'right' ],
	'core/heading': [ 'wide', 'full' ],
	'core/paragraph': [ 'wide', 'full' ],
};

export const SIDECAR_BREAK_BLOCKS = Object.keys( SIDECAR_BREAK_ALIGNMENTS_BY_BLOCK );

export const SIDECAR_BREAK_CLASSES = {
	always: 'nb-break-always',
	never: 'nb-break-never',
};

/**
 * Text-wrap pull-out placements (Task 4b.2). Attribute-shape decision: ONE
 * enum `sidecarWrap` = none | around | extend (default none, byte-identical),
 * with the SIDE derived from the block's own core `align` (left/right) rather
 * than a second attribute — a wrap only exists on a side-floated block, so the
 * align already carries the side and a parallel placement attribute would be
 * redundant and could drift out of sync with align. `none` serializes nothing;
 * `around`/`extend` serialize `nb-wrap-around`/`nb-wrap-extend` into the
 * block's own className (the Task 3.3 route), which the PHP flow-segment render
 * reads to group the block + its trailing body copy into one floated segment.
 *
 * Only side-floatable blocks can wrap; heading/paragraph break wide/full only,
 * so they are excluded. The gate additionally requires align left/right (see
 * isSidecarWrapEligible).
 */
export const SIDECAR_WRAP_BLOCKS = [ 'core/image', 'core/group', 'core/quote', 'core/pullquote' ];

export const SIDECAR_WRAP_CLASSES = {
	around: 'nb-wrap-around',
	extend: 'nb-wrap-extend',
};

/**
 * A block can carry the control when it is a target block with a breakable
 * alignment. (The sidecar-context half of the gate is a separate, editor-only
 * question — see isDirectSidecarContentChild.)
 */
export const isSidecarBreakEligible = ( blockName, attributes ) => {
	const alignments = SIDECAR_BREAK_ALIGNMENTS_BY_BLOCK[ blockName ];
	return !! alignments && alignments.includes( attributes?.align );
};

/**
 * Whether the DIRECT parent is a Sidecar CONTENT area — matching what the
 * CSS placement rules and the measurement layer act on today (direct grid
 * children of the content area). Rails are excluded: rail children do not
 * participate in the alignment system. Phase 5 (Group pass-through) will
 * revisit the depth of this gate once Group children join the shared grid.
 */
export const isDirectSidecarContentChild = ( parent ) => {
	return parent?.name === 'novablocks/sidecar-area'
		&& parent?.attributes?.areaName === 'content';
};

/**
 * The serialized class for a sidecarBreak value — or null for `auto`, a
 * missing value, and anything unknown (the default path serializes NOTHING).
 */
export const getSidecarBreakClass = ( sidecarBreak ) => {
	return SIDECAR_BREAK_CLASSES[ sidecarBreak ] || null;
};

/**
 * Returns the block's next `className` attribute for a sidecarBreak value:
 * strips any existing nb-break-* marker, appends the new one when the value
 * is non-default, and returns undefined instead of an empty string so the
 * className attribute is REMOVED rather than serialized empty.
 *
 * Sync policy: the sidecarBreak attribute is the source of truth and this
 * helper runs ONLY on control interaction. If the user hand-edits the class
 * out of (or into) the Additional CSS Classes field, nothing fights them
 * reactively — the next control interaction re-syncs.
 */
export const replaceSidecarBreakClass = ( className, sidecarBreak ) => {
	const cleaned = ( className || '' )
		.split( /\s+/ )
		.filter( ( c ) => c && c !== SIDECAR_BREAK_CLASSES.always && c !== SIDECAR_BREAK_CLASSES.never );

	const nextClass = getSidecarBreakClass( sidecarBreak );
	if ( nextClass ) {
		cleaned.push( nextClass );
	}

	return cleaned.length ? cleaned.join( ' ' ) : undefined;
};

/**
 * Whether a block can carry the text-wrap control: a side-floatable target
 * block (SIDECAR_WRAP_BLOCKS) aligned left or right. Wrap has no meaning on
 * wide/full/center — the placement IS a side float. (The sidecar-context half
 * of the gate is the same editor-only parent check the break control uses.)
 */
export const isSidecarWrapEligible = ( blockName, attributes ) => {
	if ( ! SIDECAR_WRAP_BLOCKS.includes( blockName ) ) {
		return false;
	}
	return attributes?.align === 'left' || attributes?.align === 'right';
};

/**
 * The serialized class for a sidecarWrap value — or null for `none`, a missing
 * value, and anything unknown (the default path serializes NOTHING).
 */
export const getSidecarWrapClass = ( sidecarWrap ) => {
	return SIDECAR_WRAP_CLASSES[ sidecarWrap ] || null;
};

/**
 * Returns the block's next `className` attribute for a sidecarWrap value:
 * strips any existing nb-wrap-* marker, appends the new one when non-default,
 * and returns undefined instead of an empty string so the className attribute
 * is REMOVED rather than serialized empty. Same sync policy as the break class:
 * the attribute is the source of truth and this runs only on control
 * interaction — a hand-edited class field is never fought reactively.
 */
export const replaceSidecarWrapClass = ( className, sidecarWrap ) => {
	const cleaned = ( className || '' )
		.split( /\s+/ )
		.filter( ( c ) => c && c !== SIDECAR_WRAP_CLASSES.around && c !== SIDECAR_WRAP_CLASSES.extend );

	const nextClass = getSidecarWrapClass( sidecarWrap );
	if ( nextClass ) {
		cleaned.push( nextClass );
	}

	return cleaned.length ? cleaned.join( ' ' ) : undefined;
};

/** Whether a text-wrap placement (around/extend) is active. */
export const isSidecarWrapActive = ( attributes ) => {
	return [ 'around', 'extend' ].includes( attributes?.sidecarWrap );
};

/**
 * The Sidecar Layout panel's control visibility for a block. Pure so the
 * wrap-wins rule is unit-testable.
 *
 * WRAP-WINS (product ruling 2026-07-22): Never/Always + a wrap placement is
 * contradictory — the wrap owns the geometry. When a wrap is active the
 * "Extend over sidebar" (break) control is HIDDEN, so no new contradiction can
 * be authored. The serialized `sidecarBreak` attribute is left untouched (no
 * data loss); the break control reappears the moment wrap returns to `none`.
 *
 * Each control also shows whenever its own attribute carries a non-default
 * value regardless of context, so a stranded decision always has UI to reset —
 * EXCEPT the break control while a wrap is active (wrap-wins takes priority
 * over even a stranded break decision; clearing wrap brings it back).
 */
export const getSidecarLayoutControlVisibility = ( { name, attributes, inSidecarContent } ) => {
	const breakEligible = isSidecarBreakEligible( name, attributes );
	const wrapEligible = isSidecarWrapEligible( name, attributes );
	const hasActiveBreak = [ 'always', 'never' ].includes( attributes?.sidecarBreak );
	const hasActiveWrap = [ 'around', 'extend' ].includes( attributes?.sidecarWrap );
	const wrapActive = isSidecarWrapActive( attributes );

	const showWrap = ( wrapEligible && inSidecarContent ) || hasActiveWrap;
	const showBreak = ( ( breakEligible && inSidecarContent ) || hasActiveBreak ) && ! wrapActive;

	return { showBreak, showWrap };
};
