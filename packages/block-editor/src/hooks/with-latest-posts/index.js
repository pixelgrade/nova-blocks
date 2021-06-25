import attributes from './attributes';
import InpectorControls from './inspector-controls';

import {
	isSpecificPostModeActive,
	queryCriteriaFromAttributes
} from "./utils";

import { STORE_NAME, registerQueryStore } from "./store";

registerQueryStore( `novablocks/${ STORE_NAME }` );

import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

import {
	compose,
	createHigherOrderComponent
} from '@wordpress/compose';

import {
  select,
	withSelect,
	withDispatch,
} from '@wordpress/data';

const enableLatestPostsOnBlocks = [
  'novablocks/supernova',
  'novablocks/posts-collection'
];

const withPostsQueryControls = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

    return (
			<Fragment>
				<OriginalComponent { ...props } />
        <InpectorControls { ...props } />
			</Fragment>
		)
	}
} );

function withPostsQueryAttributes( block ) {

	return {
	  ...block,
    attributes: {
	    ...block.attributes,
      ...attributes,
    }
  };
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-posts-query-attributes', withPostsQueryAttributes );

const withMarkPostsAsDisplayed = withDispatch( ( dispatch, props ) => {
  const { attributes } = props;
  const markPostsAsDisplayed = isSpecificPostModeActive( attributes )
    ? dispatch( STORE_NAME ).markSpecificPostsAsDisplayed
    : dispatch( STORE_NAME ).markPostsAsDisplayed;

  return {
    markPostsAsDisplayed,
  };
} );

const withPosts = withSelect( ( select, props ) => {
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
} );

const withLatestPosts = compose( [
	withPosts,
  withMarkPostsAsDisplayed,
	withPostsQueryControls
] );

const maybeWithLatestPosts = createHigherOrderComponent( BlockEdit => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! enableLatestPostsOnBlocks.includes( props.name ) && ! supports?.novaBlocks?.latestPosts ) {
      return <BlockEdit { ...props } />
    }

    const BlockEditWithLatestPosts = withLatestPosts( BlockEdit );

    return <BlockEditWithLatestPosts { ...props } />
  }
} );
addFilter( 'editor.BlockEdit', 'novablocks/with-latest-posts', maybeWithLatestPosts );

