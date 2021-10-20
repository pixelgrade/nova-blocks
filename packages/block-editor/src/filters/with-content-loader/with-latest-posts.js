import { createHigherOrderComponent, compose } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { withDispatch, useSelect } from "@wordpress/data";
import { STORE_NAME } from "./store";
import { useMemo } from "@wordpress/element";
import { isSpecificPostModeActive, queryCriteriaFromAttributes } from "./utils";

const withLatestPosts = createHigherOrderComponent( BlockEdit => {

  return ( props ) => {
    const { attributes, clientId } = props;
    const { preventDuplicatePosts } = attributes;
    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.contentLoader ) {
      return <BlockEdit { ...props } />
    }

    const postIdsToExclude = useSelect( select => {
      return select( STORE_NAME ).previousPostIds( clientId );
    }, [ attributes ] );

    const latestPostsQuery = useMemo( () => {
      const query = queryCriteriaFromAttributes( attributes );

      if ( ! isSpecificPostModeActive( attributes ) && preventDuplicatePosts ) {
        query.exclude = postIdsToExclude.join( ',' );
      }

      return query;
    }, [ attributes, postIdsToExclude ] );

    const posts = useSelect( select => {
      return select( 'core' ).getEntityRecords( 'postType', 'post', latestPostsQuery );
    }, [ latestPostsQuery ] );

    return (
      <BlockEdit { ...props } posts={ posts } />
    )
  }
}, 'withLatestPosts' );

const withMarkPostsAsDisplayed = withDispatch( ( dispatch, props ) => {
  const { attributes } = props;
  const { markPostsAsDisplayed, markSpecificPostsAsDisplayed } = dispatch( STORE_NAME );

  const markPosts = isSpecificPostModeActive( attributes ) ? markSpecificPostsAsDisplayed : markPostsAsDisplayed;

  return {
    markPostsAsDisplayed: markPosts
  }
} );

export default compose( [
  withLatestPosts,
  withMarkPostsAsDisplayed
] );
