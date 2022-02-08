import { createHigherOrderComponent, compose } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { withDispatch, useSelect } from "@wordpress/data";
import { store as coreStore } from '@wordpress/core-data';
import { Spinner } from '@wordpress/components';

const withPostsFromQuery = createHigherOrderComponent( BlockEdit => {

  return ( props ) => {

    const { attributes, context, clientId } = props;
    const { queryId } = context;
    const isDescendentOfQueryLoop = Number.isFinite( queryId );
    if ( ! isDescendentOfQueryLoop ) {
      return <BlockEdit { ...props } />
    }

    /**
     * Logic taken from the core post-template block.
     */
    let {
      query: {
        perPage,
        offset,
        postType,
        order,
        orderBy,
        author,
        search,
        exclude,
        sticky,
        inherit,
        taxQuery,
      } = {},
      queryContext = [ { page: 1 } ],
      templateSlug
    } = context;

    const [ { page } ] = queryContext;

    const { posts } = useSelect(
      ( select ) => {
        const { getEntityRecords, getTaxonomies } = select( coreStore );
        const taxonomies = getTaxonomies( {
          type: postType,
          per_page: -1,
          context: 'view',
        } );
        const query = {
          offset: perPage ? perPage * ( page - 1 ) + offset : 0,
          order,
          orderby: orderBy,
        };
        if ( taxQuery ) {
          // We have to build the tax query for the REST API and use as
          // keys the taxonomies `rest_base` with the `term ids` as values.
          const builtTaxQuery = Object.entries( taxQuery ).reduce(
            ( accumulator, [ taxonomySlug, terms ] ) => {
              const taxonomy = taxonomies?.find(
                ( { slug } ) => slug === taxonomySlug
              );
              if ( taxonomy?.rest_base ) {
                accumulator[ taxonomy?.rest_base ] = terms;
              }
              return accumulator;
            },
            {}
          );
          if ( !! Object.keys( builtTaxQuery ).length ) {
            Object.assign( query, builtTaxQuery );
          }
        }
        if ( perPage ) {
          query.per_page = perPage;
        }
        if ( author ) {
          query.author = author;
        }
        if ( search ) {
          query.search = search;
        }
        if ( exclude?.length ) {
          query.exclude = exclude;
        }
        // If sticky is not set, it will return all posts in the results.
        // If sticky is set to `only`, it will limit the results to sticky posts only.
        // If it is anything else, it will exclude sticky posts from results. For the record the value stored is `exclude`.
        if ( sticky ) {
          query.sticky = 'only' === sticky;
        }
        // If `inherit` is truthy, adjust conditionally the query to create a better preview.
        if ( inherit ) {
          // Change the post-type if needed.
          if ( templateSlug?.startsWith( 'archive-' ) ) {
            query.postType = templateSlug.replace( 'archive-', '' );
            postType = query.postType;
          }
        }
        return {
          posts: getEntityRecords( 'postType', postType, query ),
        };
      },
      [
        perPage,
        page,
        offset,
        order,
        orderBy,
        clientId,
        author,
        search,
        postType,
        exclude,
        sticky,
        inherit,
        templateSlug,
        taxQuery,
      ]
    );

    if ( ! posts ) {
      return (
        <p { ...props }>
          <Spinner />
        </p>
      );
    }

    return (
      <BlockEdit { ...props } posts={ posts } />
    )
  }
}, 'withPostsFromQuery' );

export default withPostsFromQuery;
