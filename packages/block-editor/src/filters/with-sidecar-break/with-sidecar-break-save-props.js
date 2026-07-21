import classnames from 'classnames';

import { getSidecarBreakClass } from './utils';

/**
 * Serializes the per-block break decision as a class — ONLY for the
 * non-default values. For `auto` (or a missing/unknown value) the incoming
 * extraProps object is returned UNTOUCHED, so default-valued blocks produce
 * byte-identical save output to an unfiltered save: existing content never
 * invalidates and the default path needs no deprecation
 * (napkin: Execution & Validation #5).
 */
const withSidecarBreakSaveProps = ( extraProps, blockType, attributes ) => {
	const breakClass = getSidecarBreakClass( blockType?.name, attributes );

	if ( ! breakClass ) {
		return extraProps;
	}

	return {
		...extraProps,
		className: classnames( extraProps.className, breakClass ),
	};
};

export default withSidecarBreakSaveProps;
