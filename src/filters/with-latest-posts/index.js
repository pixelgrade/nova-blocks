import { isUndefined, pickBy } from "lodash";

import QueryControls from '../../components/query-controls';

import {
	isSpecificPostModeActive,
	queryCriteriaFromAttributes
} from "./utils";

import { STORE_NAME, registerQueryStore } from "./store";
import {ControlsSection, ControlsTab} from "../../components/control-sections";

registerQueryStore( `novablocks/${ STORE_NAME }` );

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;

const {
	compose,
	createHigherOrderComponent
} = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;

const enablePostsQueryControlsOnBlocks = [ 'novablocks/posts-collection' ];

const withPostsQueryControls = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

		if ( ! enablePostsQueryControlsOnBlocks.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		const {
			attributes,
			setAttributes,
		} = props;

		const {
			postsToShow,
			loadingMode,
			specificPosts,
			authors,
			categories,
			tags,
		} = attributes;

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				<ControlsSection label={ __( 'Posts' ) }>
					<ControlsTab label={ __( 'Settings' ) }>
						<QueryControls
							enableSpecific={ true }
							numberOfItems={ postsToShow }
							onNumberOfItemsChange={ _postsToShow =>
								setAttributes( { postsToShow: _postsToShow } )
							}
							loadingMode={ loadingMode }
							onLoadingModeChange={ _loadingMode =>
								setAttributes( { loadingMode: _loadingMode } )
							}
							specificPosts={ specificPosts }
							onSpecificPostsChange={ _specificPosts =>
								setAttributes( { specificPosts: _specificPosts } )
							}
							authors={ authors }
							onAuthorsChange={
								_authors => setAttributes( { authors: _authors } )
							}
							categories={ categories }
							onCategoriesChange={
								_categories => setAttributes( { categories: _categories } )
							}
							tags={ tags }
							onTagsChange={ _tags => {
								setAttributes( { tags: _tags } );
							} }
						/>
					</ControlsTab>
				</ControlsSection>
			</Fragment>
		)
	}
} );

function withPostsQueryAttributes( block ) {

	if ( ! enablePostsQueryControlsOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes === 'undefined' ) {
		block.attributes = {};
	}

	block.attributes = Object.assign( block.attributes, {
		postsToShow: {
			type: "integer",
			default: 3
		},
		loadingMode: {
			type: "string",
			default: "automated"
		},
		specificPosts: {
			type: "array",
			default: [],
			items: {
				type: "integer"
			}
		},
		authors: {
			type: "array",
			default: [],
			items: {
				type: "integer"
			}
		},
		categories: {
			type: "array",
			default: [],
			items: {
				type: "integer"
			}
		},
		tags: {
			type: "array",
			default: [],
			items: {
				type: "integer"
			}
		},
	});

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-posts-query-attributes', withPostsQueryAttributes );

const withLatestPosts = compose( [
	withSelect( ( select, props ) => {
		const { attributes, clientId } = props;

		const latestPostsQuery = queryCriteriaFromAttributes( attributes );

		if ( ! isSpecificPostModeActive( attributes ) ) {
			const postIdsToExclude = select( STORE_NAME ).previousPostIds( clientId );
			latestPostsQuery.exclude = postIdsToExclude.join( ',' );
		}

		return {
			posts: select( 'core' ).getEntityRecords( 'postType', 'post', latestPostsQuery )
		};
	} ),
	withDispatch( ( dispatch, props ) => {
		const { attributes } = props;
		const markPostsAsDisplayed = isSpecificPostModeActive( attributes )
			? dispatch( STORE_NAME ).markSpecificPostsAsDisplayed
			: dispatch( STORE_NAME ).markPostsAsDisplayed;

		return {
			markPostsAsDisplayed,
		};
	} ),
	withPostsQueryControls
] );
addFilter( 'editor.BlockEdit', 'novablocks/with-latest-posts', withLatestPosts );

