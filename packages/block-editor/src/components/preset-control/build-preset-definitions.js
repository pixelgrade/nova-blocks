/**
 * Converts a family's PHP-provided `{ label, value, preset }` preset option
 * list into managed-bundle engine definitions (`{ id, managedAttributes,
 * values }`), for callers that opt a `PresetControl` into engine-driven
 * apply/derive via the `managedAttributes` prop.
 *
 * The managed set is the union of every value key across ALL options shown
 * together in the control — not just the clicked option's own keys. A
 * "partial-looking" option (one that only asserts a subset of the family's
 * attributes, e.g. Shape Modeling's "Rectangle") still needs to CLEAR
 * whatever a previously-applied option left behind, so the same
 * `managedAttributes` array is attached to every definition in the family.
 * See `.ai/design-customization/stage-3a-preset-semantics.md` section 1 and
 * `../../preset-engine`.
 *
 * Pure logic only (no `@wordpress/*`, no JSX), split out from
 * `index.js` so it stays trivially testable without pulling in
 * `@wordpress/components`.
 *
 * @param {Array<{label: string, value: string, preset?: Object}>} options
 * @return {{ definitions: Array<Object>, managedAttributes: string[] }}
 */
export const buildPresetDefinitions = ( options ) => {
	const list = Array.isArray( options ) ? options : [];

	const managedAttributes = Array.from(
		list.reduce( ( keys, option ) => {
			Object.keys( option?.preset || {} ).forEach( ( key ) => keys.add( key ) );
			return keys;
		}, new Set() )
	);

	const definitions = list.map( ( option ) => ( {
		id: option.value,
		managedAttributes,
		values: option?.preset || {},
	} ) );

	return { definitions, managedAttributes };
};
