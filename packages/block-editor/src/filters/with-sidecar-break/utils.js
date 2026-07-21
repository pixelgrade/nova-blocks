/**
 * Per-block break control (Task 3.3): pure predicates shared by the
 * attribute registration, the inspector control gating, and the save filter.
 *
 * The target set is exactly the aligned-capable core blocks Nova already
 * augments with attributes (audited 2026-07-21: core/image via
 * with-deprecated-image, core/group via with-deprecated-group; no other core
 * block carries Nova-registered attributes).
 */

export const SIDECAR_BREAK_BLOCKS = [ 'core/image', 'core/group' ];

export const SIDECAR_BREAK_ALIGNMENTS = [ 'wide', 'full', 'left', 'right' ];

export const SIDECAR_BREAK_CLASSES = {
	always: 'nb-break-always',
	never: 'nb-break-never',
};

/**
 * A block can carry the control when it is a target block with a breakable
 * alignment. (The sidecar-context half of the gate is a separate, editor-only
 * question — see isInsideSidecarContent.)
 */
export const isSidecarBreakEligible = ( blockName, attributes ) => {
	return SIDECAR_BREAK_BLOCKS.includes( blockName )
		&& SIDECAR_BREAK_ALIGNMENTS.includes( attributes?.align );
};

/**
 * Whether a parent chain (ordered ancestor info: { name, attributes })
 * contains a Sidecar CONTENT area. Rails are deliberately excluded — rail
 * children do not participate in the alignment system.
 */
export const isInsideSidecarContent = ( parentChain ) => {
	return ( parentChain || [] ).some( ( parent ) =>
		parent?.name === 'novablocks/sidecar-area'
		&& parent?.attributes?.areaName === 'content'
	);
};

/**
 * The serialized class for a block's sidecarBreak attribute — or null.
 *
 * CRITICAL serialization rule: `auto` (the default), a missing attribute,
 * and any unknown value derive NO class, so default-valued blocks save
 * byte-identical markup to an unfiltered save and existing content can
 * never invalidate (napkin: Execution & Validation #5 — no deprecation
 * needed for the default path).
 */
export const getSidecarBreakClass = ( blockName, attributes ) => {
	if ( ! isSidecarBreakEligible( blockName, attributes ) ) {
		return null;
	}

	return SIDECAR_BREAK_CLASSES[ attributes?.sidecarBreak ] || null;
};
