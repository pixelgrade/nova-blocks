import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { useSelect } from "@wordpress/data";
import { STORE_NAME } from "./store";
import { useMemo } from "@wordpress/element";
import { isSpecificPostModeActive, queryCriteriaFromAttributes } from "./utils";

const withLatestPosts = createHigherOrderComponent( BlockEdit => {

  return ( props ) => {
    const { attributes, clientId } = props;
    const { preventDuplicatePosts } = attributes;
    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.latestPosts ) {
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
    }, [ latestPostsQuery ] )

    return (
      <BlockEdit { ...props } posts={ posts } />
    )
  }
}, 'withLatestPosts' );

export default withLatestPosts;
