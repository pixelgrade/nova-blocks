/**
 * Native replacements for the lodash collection helpers the editor UI used
 * (`orderBy`, `groupBy`; #485). Kept internal to the block-editor package.
 */

const compareValues = ( a, b ) => {
	if ( a < b ) {
		return -1;
	}

	return a > b ? 1 : 0;
};

/**
 * Returns a new array sorted by `iteratee( item )`, like lodash
 * `orderBy( list, iteratee, [ direction ] )`. The sort is stable: items with
 * equal keys keep their original relative order in both directions.
 *
 * @param {Array}           list
 * @param {Function}        iteratee
 * @param {'asc'|'desc'}    [direction='asc']
 * @return {Array} A sorted copy; the input is not mutated.
 */
export const sortByKey = ( list, iteratee, direction = 'asc' ) => {
	const sign = 'desc' === direction ? -1 : 1;

	return Array.from( list || [] ).sort( ( a, b ) => sign * compareValues( iteratee( a ), iteratee( b ) ) );
};

/**
 * Groups items into `{ key: items[] }` by `iteratee( item )`, like lodash
 * `groupBy`. Keys are created in first-seen order and each group keeps the
 * input order.
 *
 * @param {Array}    list
 * @param {Function} iteratee
 * @return {Object} Groups keyed by the (stringified) iteratee result.
 */
export const groupBy = ( list, iteratee ) => Array.from( list || [] ).reduce( ( groups, item ) => {
	const key = iteratee( item );

	if ( ! Object.prototype.hasOwnProperty.call( groups, key ) ) {
		groups[ key ] = [];
	}

	groups[ key ].push( item );

	return groups;
}, {} );
