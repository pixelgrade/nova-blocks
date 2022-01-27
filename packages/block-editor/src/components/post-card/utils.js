import {
  Fragment
} from "@wordpress/element";

import {
  __experimentalGetSettings,
  dateI18n,
  format
} from '@wordpress/date';

import Author from "./meta/author";
import Category from "./meta/category";
import Comments from "./meta/comments";
import Tags from "./meta/tags";
import ReadingTime from "./meta/reading-time";

export const getMeta = ( props ) => {

  const {
    attributes: {
      metadataPosition,
      primaryMetadata,
      secondaryMetadata,
    },
    post
  } = props;

  const primaryMeta = getMetadata( post, primaryMetadata );
  const secondaryMeta = getMetadata( post, secondaryMetadata );

  let combinedMeta;
  let metaAboveTitle;
  let metaBelowTitle;

  if ( primaryMeta && secondaryMeta ) {
    combinedMeta = (
      <Fragment>
        <span className={'nb-card__meta--primary'} key={'card_meta_primary_post_' + post.id}>{ primaryMeta }</span>
        <span className={'nb-card__meta-separator'} key={'card_meta_separator_post_' + post.id}></span>
        <span className={'nb-card__meta--secondary'} key={'card_meta_secondary_post_' + post.id}>{ secondaryMeta }</span>
      </Fragment>
    );
  } else {
    combinedMeta = primaryMeta || secondaryMeta;
  }

  if ( metadataPosition === 'above-title' ) {
    metaAboveTitle = combinedMeta;
  }

  if ( metadataPosition === 'below-title' ) {
    metaBelowTitle = combinedMeta;
  }

  if ( metadataPosition === 'split' ) {
    metaAboveTitle = primaryMeta;
    metaBelowTitle = secondaryMeta;
  }

  return {
    metaAboveTitle,
    metaBelowTitle
  }
};

export const getMetadata = ( post, meta ) => {

  if ( meta === 'author' ) {
    return post?.author && <Author id={ post.author } />
  }

  if ( meta === 'category' ) {
    return !! post?.categories?.length && <Category id={ post.categories[0] } />
  }

  if ( meta === 'comments' ) {
    return <Comments postId={ post.id } />
  }

  if ( meta === 'date' ) {
    const dateFormat = __experimentalGetSettings().formats.date;

    return (
      <time dateTime={ format( 'c', post.date_gmt ) }>
        { dateI18n( dateFormat, post.date_gmt ) }
      </time>
    )
  }

  if ( meta === 'tags' ) {
    return !! post?.tags?.length && <Tags tags={ post.tags } />
  }

  if ( meta === 'reading-time' ) {
    return <ReadingTime post={ post } />
  }

  return null;
};

export const sanitizeMediaResponse = ( mediaObject ) => {
  // We will refrain from using the full image size to avoid overloading the editor window.
  // The `novablocks_large` image size is sufficient, if present.

  return {
    type: mediaObject?.media_type,
    width: mediaObject?.media_details?.sizes?.novablocks_large?.width || mediaObject?.media_details?.width,
    height: mediaObject?.media_details?.sizes?.novablocks_large?.height || mediaObject?.media_details?.height,
    url: mediaObject?.media_details?.sizes?.novablocks_large?.source_url || mediaObject?.source_url,
  }
};
