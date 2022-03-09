/**
 * WordPress dependencies
 */
import classnames from 'classnames';

import {
  useBlockProps,
} from '@wordpress/block-editor';
import { select, useDispatch, useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { Fragment, useCallback, memo, useEffect, useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useInnerBlocksCount, useInnerBlocks, useInnerBlocksLock, normalizeImages } from '@novablocks/block-editor';
import { Collection, CollectionHeader } from '@novablocks/collection';
import { BlockControls as MediaCompositionBlockControls } from '@novablocks/media-composition';

import BlockControls from './block-controls';
import InspectorControls from './inspector-controls';

import { getAlignFromMatrix } from '@novablocks/utils';

import {
  PostsCollectionLayout,
  CardsCollectionLayout,
  withControlsVisibility,
} from './components';

const ChangeMediaBlockControls = ( props ) => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
  const onSelectImages = useCallback( images => {
    normalizeImages( images ).then( newImages => {
      updateBlockAttributes( innerBlocks[0].clientId, { images: newImages } );
    } );
  } );

  if ( 1 !== innerBlocks.length ) {
    return null;
  }

  const passedProps = {
    ...props,
    attributes: {
      ...props.attributes,
      images: innerBlocks[0].attributes.images
    },
    onSelectImages,
  };

  return (
    <MediaCompositionBlockControls {...passedProps} />
  );
};

const SupernovaPreview = props => {

  const {
    attributes,
    clientId,
    inQuery,
  } = props;

  const {
    columns,
    headerPosition,
    showCollectionTitle,
    showCollectionSubtitle,
    showPagination,
    cardLayout,
  } = attributes;

  // Overwrite the contentType if we are in a query.
  const contentType = inQuery ? 'auto' : attributes?.contentType || 'fields';

  const contentAlign = getAlignFromMatrix( attributes?.contentPosition );

  const className = classnames(
    'supernova',
    `supernova--content-type-${contentType}`,
    `supernova--card-layout-${cardLayout}`,
    `supernova--${columns}-columns`,
    `supernova--valign-${contentAlign[0]}`,
    `supernova--halign-${contentAlign[1]}`,
    { 'supernova--show-pagination': showPagination },
    props.className,
    'nb-content-layout-grid',
    'alignfull'
  );

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

  return (
    <div {...blockProps}>
      <Collection {...props} key={'collection_' + clientId}>
        {0 === headerPosition && (showCollectionTitle || showCollectionSubtitle) &&
          <CollectionHeader {...props} key={'collection_header_' + clientId}/>}
        {inQuery
          ? <PostsCollectionLayout {...props} key={'posts_collection_layout_' + clientId}/>
          : <CardsCollectionLayout {...props} key={'cards_collection_layout_' + clientId}/>}
      </Collection>
    </div>
  );
};

const MemoizedSupernovaPreview = memo( SupernovaPreview );

const SupernovaEdit = props => {

  const { attributes, setAttributes, context, clientId } = props;

  const { queryId } = context;
  const isDescendentOfQueryLoop = Number.isFinite( queryId );

  // Make sure that the contentType attribute is set.
  // We will leave it for now, but it might not be needed
  // since right now it is deduced from the fact that the Supernova block is or is not inside a query block.
  if ( isDescendentOfQueryLoop && attributes.contentType !== 'auto' ) {
    setAttributes( { contentType: 'auto' } );
  } else if ( !isDescendentOfQueryLoop && ![ 'fields', 'custom', ].includes( attributes.contentType ) ) {
    setAttributes( { contentType: 'fields' } );
  }

  const cardAttributes = useMemo( () => {

    const {
      title,
      subtitle,
      contentColorSignal,
      contentPaletteVariation,
      contentType,
      ...cardAttributes
    } = attributes;

    return Object.assign( {}, cardAttributes, {
      colorSignal: contentColorSignal,
      paletteVariation: contentPaletteVariation,
      useSourceColorAsReference: false,
    } );

  }, [ attributes ] );

  // Make sure that we keep the number of inner Supernova Items in sync with the number of items.
  useInnerBlocksCount( clientId, attributes, 'novablocks/supernova-item', cardAttributes );

  // Either lock or unlock supernova-items depending on whether we are in a query or not.
  if ( isDescendentOfQueryLoop ) {
    // If we use a query to get posts, the inner supernova-items need to be locked.
    useInnerBlocksLock( clientId, { remove: true, move: true }, attributes, 'novablocks/supernova-item' );
  } else {
    // @todo Maybe we should just always lock supernova-items since we have controls for number of items?
    useInnerBlocksLock( clientId, { remove: false, move: false }, attributes, 'novablocks/supernova-item' );
  }

  let posts = false;

  /**
   * Logic taken from the core post-template block.
   */
  const {
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

  ({ posts } = useSelect(
    ( select ) => {
      if ( !isDescendentOfQueryLoop ) {
        return {
          posts: false,
        };
      }

      const { getEntityRecords, getTaxonomies } = select( coreStore );
      const query = {
        postType: postType || 'post',
        offset: perPage ? perPage * (page - 1) + offset : 0,
        order,
        orderby: orderBy,
      };
      if ( taxQuery ) {
        const taxonomies = getTaxonomies( {
          type: postType,
          per_page: -1,
          context: 'view',
        } );

        // We have to build the tax query for the REST API and use as
        // keys the taxonomies `rest_base` with the `term ids` as values.
        const builtTaxQuery = Object.entries( taxQuery ).reduce(
          ( accumulator, [ taxonomySlug, terms ] ) => {
            const taxonomy = taxonomies?.find(
              ( { slug } ) => slug === taxonomySlug
            );
            if ( taxonomy?.rest_base ) {
              accumulator[taxonomy?.rest_base] = terms;
            }
            return accumulator;
          },
          {}
        );
        if ( !!Object.keys( builtTaxQuery ).length ) {
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
        }
      }
      return {
        posts: getEntityRecords( 'postType', query.postType, query ),
      };
    },
    [
      isDescendentOfQueryLoop,
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
  ));

  // If Supernova is a descendent of a Query Loop and it is the only one of its kind,
  // sync the Query Loop's perPage and Supernova's postsToShow.
  let syncQueryAndSupernova = false;
  const {
    getBlockParentsByBlockName,
    getClientIdsOfDescendants,
    getBlockName
  } = select( 'core/block-editor' );
  const parentQueryClientId = getBlockParentsByBlockName( clientId, 'core/query' );
  if ( isDescendentOfQueryLoop ) {
    // Now, determine if there is only one Supernova descendent of the Query Loop.
    const parentQueryDescendantsClientIds = getClientIdsOfDescendants( [ parentQueryClientId ] );
    const descendentSupernovas = parentQueryDescendantsClientIds.filter(
      ( descendentClientId ) => getBlockName( descendentClientId ) === 'novablocks/supernova'
    );
    if ( descendentSupernovas.length === 1 && descendentSupernovas[0] === clientId ) {
      // We can safely sync.
      syncQueryAndSupernova = true;
    }
  }

  // We need to hook regardless to avoid error related to varying number of hooks.
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
  // First, change the Query Loop's perPage attribute when Supernova's postsToShow changes.
  useEffect( () => {
    if ( syncQueryAndSupernova && !!parentQueryClientId && parseInt( attributes.postsToShow ) !== parseInt( perPage ) ) {
      updateBlockAttributes( parentQueryClientId, {
        query: {
          ...context.query,
          perPage: parseInt( attributes.postsToShow ),
        }
      } );
    }
  }, [ attributes ] );
  // Second, change the Supernova's postsToShow attribute when Query Loop's perPage changes.
  useEffect( () => {
    if ( syncQueryAndSupernova && !!parentQueryClientId && parseInt( attributes.postsToShow ) !== parseInt( context.query.perPage ) ) {
      setAttributes( {
        postsToShow: parseInt( context.query.perPage ),
      } );
    }
  }, [ context ] );

  return (
    <Fragment>
      <MemoizedSupernovaPreview {...props} posts={posts} inQuery={isDescendentOfQueryLoop} key={'preview'}/>
      <BlockControls {...props} inQuery={isDescendentOfQueryLoop} key={'block-controls'}/>
      <InspectorControls {...props} inQuery={isDescendentOfQueryLoop} key={'inspector-controls'}/>
      <ChangeMediaBlockControls {...props} key={'media-composition-block-controls'}/>
    </Fragment>
  );
};

export default withControlsVisibility( SupernovaEdit );

