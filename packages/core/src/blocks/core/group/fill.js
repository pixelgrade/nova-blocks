/**
 * A Group whose nested blocks fill it (GitHub #657).
 *
 * Core's "Inner blocks use content width" toggle OFF writes
 * `layout: { type: 'default' }`, which core renders as a flow layout whose
 * nested blocks fill the Group. Nova caps a Group's default-aligned children
 * at the content width (and, inside the layout grid, puts them on the content
 * track), which overrode that choice: a Wide header Group capped its meta row
 * short of its Wide title and image. Only that explicit choice is marked, so
 * a legacy Group without a layout (also flow in core) stays byte-identical.
 * Mirrors `novablocks_group_fills_width()` in init.php.
 */
export const GROUP_FILL_CLASS = 'nb-group--fill';

/**
 * Whether a Group authors core's flow layout ("Inner blocks use content
 * width" OFF). Core renders a legacy `inherit` or `contentSize` as
 * constrained whatever the type, so those do not count.
 *
 * @param {Object} attributes Block attributes.
 * @return {boolean} Whether the nested blocks fill the Group.
 */
export const isGroupFill = ( attributes = {} ) => {
	const layout = attributes?.layout;

	if ( ! layout || typeof layout !== 'object' ) {
		return false;
	}

	return layout.type === 'default' && ! layout.inherit && ! layout.contentSize;
};

/**
 * Editor twin of `novablocks_render_group_fill()`: the BlockListBlock props
 * carrying the marker class, or null when the Group does not fill.
 *
 * @param {Object} props BlockListBlock props.
 * @return {Object|null} Next props, or null to render unchanged.
 */
export const getGroupFillProps = ( props ) => {
	if ( props.name !== 'core/group' || ! isGroupFill( props.attributes ) ) {
		return null;
	}

	return {
		...props,
		className: [ props.className, GROUP_FILL_CLASS ].filter( Boolean ).join( ' ' ),
	};
};
