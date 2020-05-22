/**
 * External dependencies
 */
import { isUndefined, pickBy } from 'lodash';

/**
 * Checks whether the specific post mode is active.
 *
 * @param {Object} attributes block attributes
 * @return {boolean} specific mode active flag
 */
export const isSpecificPostModeActive = ( { loadingMode, specificPosts } ) =>
	'manual' === loadingMode && specificPosts && specificPosts.length;

/**
 * Builds query criteria from given attributes.
 *
 * @param {Object} attributes block attributes
 * @return {Object} criteria
 */
export const queryCriteriaFromAttributes = attributes => {
	const { postsToShow, authors, categories, tags, specificPosts, tagExclusions } = attributes;
	const criteria = pickBy(
		isSpecificPostModeActive( attributes )
			? {
				include: specificPosts,
				orderby: 'include',
				per_page: specificPosts.length,
			}
			: {
				per_page: postsToShow,
				categories,
				author: authors,
				tags,
				tags_exclude: tagExclusions,
			},
		value => ! isUndefined( value )
	);
	return criteria;
};
