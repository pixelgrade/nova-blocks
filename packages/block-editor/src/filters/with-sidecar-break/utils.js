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
