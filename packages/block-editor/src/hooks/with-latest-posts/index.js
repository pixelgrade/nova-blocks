import postsQueryAttributes from './attributes';

import {
	isSpecificPostModeActive,
	queryCriteriaFromAttributes
} from "./utils";

import { STORE_NAME, registerQueryStore } from "./store";

import {
	ControlsSection,
	ControlsTab,
	QueryControls,
} from "../../components";

registerQueryStore( `novablocks/${ STORE_NAME }` );

import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

import {
	compose,
	createHigherOrderComponent
} from '@wordpress/compose';

import {
	withSelect,
	withDispatch,
} from '@wordpress/data';

const enablePostsQueryControlsOnBlocks = [
  'novablocks/supernova',
  'novablocks/posts-collection'
];

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
			preventDuplicatePosts,
		} = attributes;

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				<ControlsSection label={ __( 'Content Loader' ) } group={ __( 'Cards Manager' ) }>
					<ControlsTab label={ __( 'Settings' ) }>
						<QueryControls
							key={ 'query-controls' }
							enableSpecific={ true }
							preventDuplicatePosts={ preventDuplicatePosts }
							onPreventDuplicatePostsChange={ _preventDuplicatePosts => {
								setAttributes( { preventDuplicatePosts: _preventDuplicatePosts } )
							} }
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

	block.attributes = Object.assign( block.attributes, postsQueryAttributes );

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-posts-query-attributes', withPostsQueryAttributes );

const withLatestPosts = compose( [
	withSelect( ( select, props ) => {
		const { attributes, clientId } = props;
		const { preventDuplicatePosts } = attributes;

		const latestPostsQuery = queryCriteriaFromAttributes( attributes );

		if ( ! isSpecificPostModeActive( attributes ) && preventDuplicatePosts ) {
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

