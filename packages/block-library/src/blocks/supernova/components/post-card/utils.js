import {
  Fragment,
  RawHTML
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
        <span className={'novablocks-card__meta--primary'}>{ primaryMeta }</span>
        <RawHTML style={ { display: 'inline' } }>{ ' &mdash; ' }</RawHTML>
        <span className={'novablocks-card__meta--secondary'}>{ secondaryMeta }</span>
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
}

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

  return {
    type: mediaObject?.media_type,
    width: mediaObject?.media_details?.width,
    height: mediaObject?.media_details?.height,
    url: mediaObject?.source_url,
  }
};
