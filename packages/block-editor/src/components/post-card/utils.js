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
        <span className={'nb-card__meta-separator'} key={'card_meta_separator_post_' + post.id}/>
        <span className={'nb-card__meta--secondary'} key={'card_meta_secondary_post_' + post.id}>{ secondaryMeta }</span>
      </Fragment>
    );
  } else {
    combinedMeta = primaryMeta || secondaryMeta;
  }

  switch ( metadataPosition ) {
    case 'above-title':
      metaAboveTitle = combinedMeta;
      break;
    case 'below-title':
      metaBelowTitle = combinedMeta;
      break;
    case 'split':
      metaAboveTitle = primaryMeta;
      metaBelowTitle = secondaryMeta;
      break;
    default:
      break;
  }

  return {
    metaAboveTitle,
    metaBelowTitle
  }
};

export const getMetadata = ( post, meta ) => {

  switch ( meta ) {
    case 'author':
      return post?.author && <Author userId={ post.author } />;
    case 'category':
      return !! post?.categories?.length && <Category termId={ post.categories[0] } />;
    case 'comments':
      return !!post?.id && <Comments postId={ post.id } />;
    case 'date':
      const dateFormat = __experimentalGetSettings().formats.date;

      return !!post?.date_gmt && (
        <time dateTime={ format( 'c', post.date_gmt ) }>
          { dateI18n( dateFormat, post.date_gmt ) }
        </time>
      );
    case 'tags':
      return !! post?.tags?.length && <Tags termIds={ post.tags } />;
    case 'reading-time':
      return <ReadingTime post={ post } />;
    default:
      return null;
  }
};

export const sanitizeMediaResponse = ( mediaObject ) => {
  // We will refrain from using the full image size to avoid overloading the editor window.
  // The `novablocks_large` image size is sufficient, if present.

  return {
    type: mediaObject?.media_type,
    width: mediaObject?.media_details?.sizes?.novablocks_large?.width || mediaObject?.media_details?.width,
    height: mediaObject?.media_details?.sizes?.novablocks_large?.height || mediaObject?.media_details?.height,
    url: mediaObject?.media_details?.sizes?.novablocks_large?.source_url || mediaObject?.source_url,
    alt: mediaObject?.media_details?.alt || mediaObject?.alt || '',
  }
};
