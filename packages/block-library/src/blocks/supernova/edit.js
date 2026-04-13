/**
 * WordPress dependencies
 */
import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';
import { select, useDispatch, useSelect, withDispatch } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { Fragment, useCallback, memo, useEffect, useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useMeta, useInnerBlocksCount, useInnerBlocks, useInnerBlocksLock, normalizeImages } from '@novablocks/block-editor';
import { Collection, CollectionHeader } from '@novablocks/collection';
import { BlockControls as MediaCompositionBlockControls } from '@novablocks/media-composition';

import { getAlignFromMatrix } from '@novablocks/utils';

import BlockControls from './block-controls';
import InspectorControls from './inspector-controls';

import {
  PostsCollectionLayout,
  CardsCollectionLayout,
  withControlsVisibility,
} from './components';

import { compileSupernovaItemAttributes } from './utils';

const normalizeVariationValue = ( value ) => ( value + 11 ) % 12 + 1;

const getSignalFromVariation = ( variation ) => {
  if ( variation === 1 ) {
    return 0;
  }

  if ( variation < 5 ) {
    return 1;
  }

  if ( variation < 9 ) {
    return 2;
  }

  return 3;
};

const getVariationFromSignal = ( signal ) => {
  if ( signal === 1 ) {
    return 3;
  }

  if ( signal === 2 ) {
    return 6;
  }

  if ( signal === 3 ) {
    return 10;
  }

  return 1;
};

const getSignalOptionsFromVariation = ( variation ) => {
  const blockSignal = getSignalFromVariation( variation );
  const variationOptions = [];

  for ( let index = 0; index < 4; index++ ) {
    if ( index === blockSignal ) {
      variationOptions.push( variation );
    } else {
      variationOptions.push( getVariationFromSignal( index ) );
    }
  }

  return variationOptions.sort( ( variation1, variation2 ) => {
    return Math.abs( variation - variation1 ) < Math.abs( variation - variation2 ) ? -1 : 1;
  } );
};

const getSiteVariationOffset = () => {
  const siteVariation = parseInt( window?.styleManager?.siteColorVariation, 10 );

  return Number.isNaN( siteVariation ) ? 0 : siteVariation - 1;
};

const getPaletteSourceIndex = ( paletteId ) => {
  const palettes = Array.isArray( window?.styleManager?.colorsConfig ) ? window.styleManager.colorsConfig : [];
  const palette = palettes.find( ( thisPalette ) => `${ thisPalette.id }` === `${ paletteId }` );
  const sourceIndex = parseInt( palette?.sourceIndex, 10 );

  return Number.isNaN( sourceIndex ) ? 6 : sourceIndex;
};

const getSlideshowHeroContentVariation = ( attributes, contentColorSignal ) => {
  const paletteVariation = parseInt( attributes.paletteVariation, 10 );
  const sourceIndex = getPaletteSourceIndex( attributes.palette );
  let offset = getSiteVariationOffset();

  if ( attributes.useSourceColorAsReference ) {
    offset = sourceIndex;
  }

  const referenceVariation = normalizeVariationValue( paletteVariation + offset );
  const signalOptions = getSignalOptionsFromVariation( referenceVariation );

  return normalizeVariationValue( signalOptions[ contentColorSignal ] - offset );
};

const shouldHealSlideshowHeroContentSignal = ( attributes ) => {
  return !! attributes.showMedia &&
    attributes.contentType === 'auto' &&
    attributes.layoutStyle === 'carousel' &&
    attributes.cardLayout === 'stacked' &&
    attributes.align === 'full' &&
    parseInt( attributes.columns, 10 ) === 1 &&
    parseInt( attributes.contentColorSignal, 10 ) === 0;
};

const getHealedSlideshowHeroContentSignalAttributes = ( attributes ) => {
  if ( ! shouldHealSlideshowHeroContentSignal( attributes ) ) {
    return null;
  }

  return {
    contentColorSignal: 3,
    contentPaletteVariation: getSlideshowHeroContentVariation( attributes, 3 ),
  };
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
    align,
    columns,
    headerPosition,
    showCollectionTitle,
    showCollectionSubtitle,
    showPagination,
    cardLayout,
    carouselLayout,
    layoutStyle,
    thumbnailAspectRatioString,
    pileParallaxAmount,
    pile3dEffect,
  } = attributes;

  // Overwrite the contentType if we are in a query.
  const contentType = inQuery ? 'auto' : attributes?.contentType || 'fields';

  const contentAlign = getAlignFromMatrix( attributes?.contentPosition );

  const className = classnames(
    'nb-supernova',
    `nb-supernova--content-type-${ contentType }`,
    `nb-supernova--card-layout-${ cardLayout }`,
    `nb-supernova--layout-${ layoutStyle }`,
    `nb-supernova--${ columns }-columns`,
    `nb-supernova--valign-${ contentAlign[ 0 ] }`,
    `nb-supernova--halign-${ contentAlign[ 1 ] }`,
    `nb-supernova--align-${ align }`,
    { 'nb-supernova--show-pagination': showPagination },
    { [ `nb-supernova--carousel-layout-${ carouselLayout }` ]: layoutStyle === 'carousel' },
    { 'nb-supernova--aspect-ratio-original': thumbnailAspectRatioString === 'original' },
    { 'nb-supernova--pile-parallax': pileParallaxAmount > 0 },
    { 'nb-supernova--pile-3d': !! pile3dEffect },
    { [ `nb-supernova--pile-3d-target-${ attributes.pile3dTarget }` ]: !! pile3dEffect },
    { [ `nb-supernova--pile-3d-rule-${ attributes.pile3dTargetRule }` ]: !! pile3dEffect },
    props.className,
    'alignfull'
  );

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

  return (
    <div { ...blockProps }>
      <Collection { ...props } key={ 'collection_' + clientId }>
        { 0 === headerPosition && ( showCollectionTitle || showCollectionSubtitle ) &&
          <CollectionHeader { ...props } key={ 'collection_header_' + clientId }/> }
        { inQuery
          ? <PostsCollectionLayout { ...props } key={ 'posts_collection_layout_' + clientId }/>
          : <CardsCollectionLayout { ...props } key={ 'cards_collection_layout_' + clientId }/> }
      </Collection>
    </div>
  );
};

const MemoizedSupernovaPreview = memo( SupernovaPreview );

const SupernovaEdit = props => {

  const { attributes, setAttributes, context, clientId } = props;
  const { postsToShow } = attributes;
  const healedSlideshowHeroAttributes = useMemo(
    () => getHealedSlideshowHeroContentSignalAttributes( attributes ),
    [ attributes ]
  );
  const previewAttributes = useMemo(
    () => healedSlideshowHeroAttributes ? {
      ...attributes,
      ...healedSlideshowHeroAttributes
    } : attributes,
    [ attributes, healedSlideshowHeroAttributes ]
  );

  const { queryId } = context;
  const isDescendentOfQueryLoop = Number.isFinite( queryId );
  const [ preventDuplicatePosts, setPreventDuplicatePosts ] = useMeta( 'supernova_prevent_duplicate' );
  const postIdsToExclude = useSelect( select => {
    return select( 'novablocks/displayed-posts' ).previousPostIds( clientId );
  }, [ attributes ] );

  // Make sure that the contentType attribute is set.
  // We will leave it for now, but it might not be needed
  // since right now it is deduced from the fact that the Supernova block is or is not inside a query block.
  if ( isDescendentOfQueryLoop && attributes.contentType !== 'auto' ) {
    setAttributes( { contentType: 'auto' } );
  } else if ( !isDescendentOfQueryLoop && ![ 'fields', 'custom', ].includes( attributes.contentType ) ) {
    setAttributes( { contentType: 'fields' } );
  }

  useEffect( () => {
    if ( healedSlideshowHeroAttributes ) {
      setAttributes( healedSlideshowHeroAttributes );
    }
  }, [ healedSlideshowHeroAttributes, setAttributes ] );

  const innerBlocksAttributes = useMemo( () => {
    return compileSupernovaItemAttributes( previewAttributes );
  }, [ previewAttributes ] );

  // Make sure that we keep the number of inner Supernova Items in sync with the number of items.
  useInnerBlocksCount( clientId, postsToShow, 'novablocks/supernova-item', innerBlocksAttributes );

  // Either lock or unlock nb-supernova-items depending on whether we are in a query or not.
  if ( isDescendentOfQueryLoop ) {
    // If we use a query to get posts, the inner nb-supernova-items need to be locked.
    useInnerBlocksLock( clientId, { remove: true, move: true }, attributes, 'novablocks/supernova-item' );
  } else {
    // @todo Maybe we should just always lock nb-supernova-items since we have controls for number of items?
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

      if ( preventDuplicatePosts ) {
        query.exclude = postIdsToExclude.join( ',' );
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
      preventDuplicatePosts,
      postIdsToExclude,
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

  const { markPostsAsDisplayed, markSpecificPostsAsDisplayed } = useDispatch( 'novablocks/displayed-posts' );

  const markPosts = useCallback( ( clientId, posts ) => {
    markPostsAsDisplayed( clientId, posts );
  }, [ attributes ] );

  markPosts( clientId, posts );

  return (
    <Fragment>
      <SupernovaPreview { ...props } attributes={ previewAttributes } posts={ posts } inQuery={ isDescendentOfQueryLoop } key={ 'preview' }/>
      <BlockControls { ...props } inQuery={ isDescendentOfQueryLoop } key={ 'block-controls' }/>
      <InspectorControls { ...props } inQuery={ isDescendentOfQueryLoop } key={ 'inspector-controls' }/>
      <ChangeMediaBlockControls { ...props } key={ 'media-composition-block-controls' }/>
    </Fragment>
  );
};

export default withControlsVisibility( SupernovaEdit );
