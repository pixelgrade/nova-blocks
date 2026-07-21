import attributes from './attributes.json';
import { SIDECAR_BREAK_BLOCKS } from './utils';

/**
 * Registers the sidecarBreak attribute on the aligned-capable core blocks
 * Nova augments. Every editor-written attribute must exist in the block
 * registration metadata or serialization silently drops it and immediately
 * re-dirties the post (napkin: Execution & Validation #6).
 */
const withSidecarBreakAttributes = ( settings, name ) => {
	if ( ! SIDECAR_BREAK_BLOCKS.includes( name ) ) {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			...attributes,
		},
	};
};

export default withSidecarBreakAttributes;
