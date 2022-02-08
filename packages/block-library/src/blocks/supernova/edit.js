import classnames from 'classnames';

import {
  useBlockProps,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { Fragment, useCallback, useMemo } from '@wordpress/element';

import { useInnerBlocksCount, useInnerBlocks, useInnerBlocksLock, normalizeImages } from '@novablocks/block-editor';
import { Collection, CollectionHeader } from '@novablocks/collection';
import { BlockControls as MediaCompositionBlockControls } from '@novablocks/media-composition';

import BlockControls from './block-controls';

import { getAlignFromMatrix } from '@novablocks/utils';

import {
  PostsCollectionLayout,
  CardsCollectionLayout,
  withControlsVisibility,
} from './components';

const SupernovaEdit = props => {

  const { attributes, context, clientId } = props;

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

  useInnerBlocksCount( clientId, attributes, 'novablocks/supernova-item', cardAttributes );

  // Either lock or unlock supernova-items, depending on the content type.
  if ( 'auto' === attributes.contentType ) {
    // If we use a query to get posts, the inner supernova-items need to be locked.
    useInnerBlocksLock( clientId, { remove: true, move: true }, attributes, 'novablocks/supernova-item' );
  } else {
    // @todo Maybe we should just always lock supernova-items since we have controls for number of items?
    useInnerBlocksLock( clientId, { remove: false, move: false }, attributes, 'novablocks/supernova-item' );
  }

  const { queryId } = context;
  const isDescendentOfQueryLoop = Number.isFinite( queryId );

  let posts = false;

  if ( isDescendentOfQueryLoop ) {
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
  }

  return (
    <Fragment>
      <SupernovaPreview {...props} posts={posts} inQuery={isDescendentOfQueryLoop} key={'preview'}/>
      <BlockControls {...props} key={'block-controls'}/>
      <ChangeMediaBlockControls {...props} key={'media-composition-block-controls'}/>
    </Fragment>
  );
};

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
    contentType,
    cardLayout,
  } = attributes;

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

export default withControlsVisibility( SupernovaEdit );

