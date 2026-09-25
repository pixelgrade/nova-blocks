/**
 * Structural deep equality for block attribute values — the native
 * replacement for lodash `isEqual` (#485).
 *
 * Block attributes are JSON-shaped data (primitives, arrays, plain objects),
 * so this helper covers exactly the lodash `isEqual` semantics those shapes
 * rely on:
 *
 *   - primitives compare with SameValueZero (`NaN` equals `NaN`, `0` equals
 *     `-0`), so `1` never equals `'1'`;
 *   - arrays are equal when they have the same length and deep-equal items
 *     in the same order; an array never equals a plain object;
 *   - objects are equal when they own the same set of enumerable keys and
 *     every value deep-equals — a key holding `undefined` is NOT the same as
 *     a missing key (`{ a: undefined }` differs from `{}`), exactly as in
 *     lodash;
 *   - objects with different prototypes are not equal; `Date` values compare
 *     by timestamp.
 *
 * Pure logic, no dependencies, so the preset engine stays unit testable.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean} Whether both values are structurally equal.
 */
export const deepEqual = ( a, b ) => {
	if ( a === b || ( a !== a && b !== b ) ) { // eslint-disable-line no-self-compare
		return true;
	}

	if (
		null === a || null === b ||
		'object' !== typeof a || 'object' !== typeof b
	) {
		return false;
	}

	if ( Object.getPrototypeOf( a ) !== Object.getPrototypeOf( b ) ) {
		return false;
	}

	if ( a instanceof Date ) {
		return deepEqual( a.getTime(), b.getTime() );
	}

	if ( Array.isArray( a ) ) {
		return a.length === b.length && a.every( ( item, index ) => deepEqual( item, b[ index ] ) );
	}

	const keysA = Object.keys( a );

	if ( keysA.length !== Object.keys( b ).length ) {
		return false;
	}

	return keysA.every( ( key ) =>
		Object.prototype.hasOwnProperty.call( b, key ) && deepEqual( a[ key ], b[ key ] )
	);
};

/**
 * Deep clone for JSON-shaped attribute values — the native replacement for
 * lodash `cloneDeep` (#485) where the preset engine copies registered
 * defaults into a patch.
 *
 * Arrays and plain objects are copied recursively; primitives, and any other
 * object (which JSON-shaped block.json defaults never contain), are returned
 * as-is. `structuredClone` is not used because the jsdom test environment
 * does not provide it.
 *
 * @param {*} value
 * @return {*} A structurally equal copy that shares no array/object references.
 */
export const deepClone = ( value ) => {
	if ( Array.isArray( value ) ) {
		return value.map( deepClone );
	}

	if ( null !== value && 'object' === typeof value && Object.getPrototypeOf( value ) === Object.prototype ) {
		return Object.fromEntries(
			Object.entries( value ).map( ( [ key, item ] ) => [ key, deepClone( item ) ] )
		);
	}

	return value;
};
