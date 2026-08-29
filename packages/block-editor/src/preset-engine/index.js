/**
 * Managed-bundle preset engine.
 *
 * Implements the "authoritative managed bundles" contract from
 * `.ai/design-customization/stage-3a-preset-semantics.md` (section 1):
 *
 *   - a preset definition is `{ id, version, managedAttributes, values }`,
 *     immutable per `id` + `version`;
 *   - applying a preset is ONE `setAttributes()` patch that writes every
 *     value the preset declares, clears every managed attribute it omits
 *     (back to its registered default, or `undefined` when no default is
 *     known), and leaves every attribute outside the managed set untouched;
 *   - selection is derived, never stored: normalize each managed attribute
 *     through its registered default, strict-compare against each
 *     definition's complete value set, first exact match in definition
 *     order wins, otherwise the UI is Custom (`null`).
 *
 * Pure logic only (no `@wordpress/*`, no JSX) so it is trivially unit
 * testable and safe to import from any family's controls (space-and-sizing,
 * shape-modeling, future families) without pulling in editor runtime code.
 */
import { cloneDeep, isEqual } from 'lodash';

/**
 * Resolves the union of every attribute declared across a family's preset
 * definitions — the family's explicit ownership boundary.
 *
 * Every definition in a coherent family is expected to declare the exact
 * same `managedAttributes` set (that is the whole point of an "immutable
 * managed bundle": every option in the list is a complete decision over the
 * same domain). This function still unions defensively instead of trusting
 * only the first definition, and warns in dev when definitions disagree,
 * since a silent mismatch would make `deriveActivePresetId()` compare some
 * definitions against attributes they never declared an opinion on.
 *
 * @param {Array<{id: string, managedAttributes?: string[]}>} definitions
 * @return {string[]} The ordered union of every declared managed attribute.
 */
export const getManagedAttributes = ( definitions ) => {
	const list = Array.isArray( definitions ) ? definitions : [];
	const union = [];
	const seen = new Set();

	list.forEach( ( definition ) => {
		( definition?.managedAttributes || [] ).forEach( ( attribute ) => {
			if ( ! seen.has( attribute ) ) {
				seen.add( attribute );
				union.push( attribute );
			}
		} );
	} );

	if (
		typeof process !== 'undefined' &&
		process.env &&
		process.env.NODE_ENV !== 'production'
	) {
		const disagreeing = list.filter( ( definition ) => {
			const attributes = definition?.managedAttributes || [];
			return (
				attributes.length !== union.length ||
				attributes.some( ( attribute ) => ! seen.has( attribute ) )
			);
		} );

		if ( disagreeing.length ) {
			// eslint-disable-next-line no-console
			console.warn(
				'getManagedAttributes(): preset definitions in this family disagree on ' +
				'their `managedAttributes` set. Using the union of every declared ' +
				`attribute: [${ union.join( ', ' ) }]. Definitions with a mismatched ` +
				`set: ${ disagreeing.map( ( d ) => d?.id ?? '(unknown id)' ).join( ', ' ) }.`
			);
		}
	}

	return union;
};

/**
 * Builds the single `setAttributes()` patch for applying a preset.
 *
 * The patch writes every value the definition declares and clears every
 * managed attribute the definition omits — restoring that attribute's
 * REGISTERED DEFAULT when `registeredDefaults` knows one, and falling back
 * to an explicit `undefined` when it does not. It never touches an
 * attribute outside `definition.managedAttributes`, so merging the patch
 * over the block's current attributes automatically preserves everything
 * outside the family's declared domain.
 *
 * Why the defaults matter: in the LIVE editor a `undefined` written through
 * `setAttributes()` stays a literal `undefined` on the block — registered
 * block.json defaults only re-materialize when the post is saved and the
 * markup is reparsed. Components that read a cleared attribute therefore see
 * `undefined` (falsy) and can render nothing at all until a reload. Writing
 * the registered default instead is serialization-neutral: WP's serializer
 * omits any attribute whose value deep-equals its registered default, so the
 * saved markup is byte-identical to the `undefined` clear. Preset detection
 * is unaffected too — `deriveActivePresetId()` normalizes both sides of its
 * comparison through the very same registered defaults.
 *
 * Defaults are deep-cloned: registry defaults for object/array attributes
 * are shared references and must never leak into block state.
 *
 * `currentAttributes` is accepted for API symmetry with
 * `deriveActivePresetId()` and to leave room for a future no-op short
 * circuit; the returned patch does not depend on it today because a clear
 * is unconditional — a managed attribute the preset omits must always be
 * reset, regardless of its current value.
 *
 * @param {{id: string, managedAttributes?: string[], values?: Object}} definition
 * @param {Object} [currentAttributes] Unused today; see note above.
 * @param {Object} [registeredDefaults] Map of attribute name to its
 *                 registered default value (e.g. from the `core/blocks`
 *                 registry). Omitted (or missing a key) = that attribute
 *                 clears to an explicit `undefined`, as before.
 * @return {Object} The complete patch — safe to pass directly to a single
 *                   `setAttributes()` call.
 */
export const getPresetApplyPatch = ( definition, currentAttributes = {}, registeredDefaults ) => { // eslint-disable-line no-unused-vars
	const managedAttributes = definition?.managedAttributes || [];
	const values = definition?.values || {};
	const defaults = registeredDefaults && 'object' === typeof registeredDefaults
		? registeredDefaults
		: {};
	const patch = {};

	managedAttributes.forEach( ( attribute ) => {
		if ( Object.prototype.hasOwnProperty.call( values, attribute ) ) {
			patch[ attribute ] = values[ attribute ];
			return;
		}

		patch[ attribute ] = undefined !== defaults[ attribute ]
			? cloneDeep( defaults[ attribute ] )
			: undefined;
	} );

	return patch;
};

/**
 * Derives the active preset id for a block, or `null` for Custom.
 *
 * No `presetId` is ever stored on the block (see the binding contract's
 * rejected-alternatives list). Instead, for every managed attribute:
 *
 *   - the current value is normalized through its registered default
 *     (`attributes[attr] ?? registeredDefaults[attr]`);
 *   - the definition's target value is the same normalization applied to
 *     `values[attr]` when present, or to `undefined` (i.e. the registered
 *     default) when the definition omits that attribute — mirroring exactly
 *     what `getPresetApplyPatch()` would have written/cleared.
 *
 * The first definition (in array order) whose every managed attribute
 * matches wins; no match returns `null` (Custom).
 *
 * @param {Array<{id: string, managedAttributes?: string[], values?: Object}>} definitions
 * @param {Object} attributes The block's current attributes.
 * @param {Object} [registeredDefaults] Map of attribute name to its
 *                 registered default value (e.g. from block.json/attributes
 *                 schema), used to normalize both sides of the comparison.
 * @return {string|null} The matching definition's `id`, or `null` if Custom.
 */
export const deriveActivePresetId = ( definitions, attributes = {}, registeredDefaults = {} ) => {
	const list = Array.isArray( definitions ) ? definitions : [];
	const managedAttributes = getManagedAttributes( list );

	const resolve = ( value, attribute ) =>
		value !== undefined ? value : registeredDefaults[ attribute ];

	const match = list.find( ( definition ) => {
		const values = definition?.values || {};

		return managedAttributes.every( ( attribute ) => {
			const normalizedCurrent = resolve( attributes[ attribute ], attribute );
			const target = resolve(
				Object.prototype.hasOwnProperty.call( values, attribute )
					? values[ attribute ]
					: undefined,
				attribute
			);

			return isEqual( normalizedCurrent, target );
		} );
	} );

	return match ? match.id : null;
};
