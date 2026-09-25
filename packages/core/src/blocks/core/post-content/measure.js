/**
 * The authored content width of a Post Content block (GitHub #650). Mirrors
 * `novablocks_get_post_content_measure()` in init.php: inherited layouts
 * (incl. the legacy `inherit: true`) have none, and only a safe CSS size is
 * returned.
 *
 * @param {Object} attributes Block attributes.
 * @return {string} CSS size, or '' when none is authored.
 */
export const getPostContentMeasure = ( attributes = {} ) => {
	const layout = attributes?.layout;

	if ( ! layout || typeof layout !== 'object' || layout.inherit ) {
		return '';
	}

	const size = String( layout.contentSize ?? '' ).trim();

	return /^[a-z0-9.%(),\s+*\/-]+$/i.test( size ) ? size : '';
};
