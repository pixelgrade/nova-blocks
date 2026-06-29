import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export const CURRENT_ITEM_FEATURED_IMAGE_MEDIA_SOURCE = 'current-item-featured-image';

const TEMPLATE_POST_TYPES = [
  'wp_template',
  'wp_template_part',
  'wp_navigation',
];

export const isCurrentItemFeaturedImageMediaSource = attributes => {
  return attributes?.mediaSource === CURRENT_ITEM_FEATURED_IMAGE_MEDIA_SOURCE;
};

export const getCurrentItemPreviewPostType = ( context = {} ) => {
  const templateSlug = context?.templateSlug || '';

  if ( templateSlug === 'single' || templateSlug === 'single-post' ) {
    return 'post';
  }

  if ( templateSlug.startsWith( 'single-' ) ) {
    return templateSlug.replace( 'single-', '' ) || 'post';
  }

  if ( templateSlug.startsWith( 'page' ) ) {
    return 'page';
  }

  if ( context?.postType && ! TEMPLATE_POST_TYPES.includes( context.postType ) ) {
    return context.postType;
  }

  return 'post';
};

const sanitizeMediaResponse = mediaObject => {
  if ( ! mediaObject ) {
    return null;
  }

  const sizes = Object.entries( mediaObject?.media_details?.sizes || {} ).reduce(
    ( accumulator, [ name, size ] ) => {
      accumulator[ name ] = {
        url: size?.source_url,
        width: size?.width,
        height: size?.height,
      };

      return accumulator;
    },
    {}
  );

  return {
    type: 'image',
    id: mediaObject.id,
    width: mediaObject?.media_details?.sizes?.novablocks_large?.width || mediaObject?.media_details?.width,
    height: mediaObject?.media_details?.sizes?.novablocks_large?.height || mediaObject?.media_details?.height,
    url: mediaObject?.media_details?.sizes?.novablocks_large?.source_url || mediaObject?.source_url,
    sizes,
    alt: mediaObject?.alt_text || mediaObject?.media_details?.alt || mediaObject?.alt || '',
  };
};

export const useCurrentItemFeaturedImage = ( context = {}, enabled = true ) => {
  return useSelect(
    select => {
      if ( ! enabled ) {
        return null;
      }

      const { getEntityRecord, getEntityRecords } = select( coreStore );
      const contextPostType = context?.postType || '';
      const canUseContextPost = !! context?.postId && !! contextPostType && ! TEMPLATE_POST_TYPES.includes( contextPostType );
      const post = canUseContextPost
        ? getEntityRecord( 'postType', contextPostType, context.postId )
        : getEntityRecords( 'postType', getCurrentItemPreviewPostType( context ), {
          per_page: 1,
          order: 'desc',
          orderby: 'date',
        } )?.[0];

      const featuredMediaId = post?.featured_media;
      if ( ! featuredMediaId ) {
        return null;
      }

      return sanitizeMediaResponse( getEntityRecord( 'root', 'media', featuredMediaId ) );
    },
    [
      enabled,
      context?.postId,
      context?.postType,
      context?.templateSlug,
    ]
  );
};
