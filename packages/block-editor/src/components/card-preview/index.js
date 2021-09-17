import {__} from "@wordpress/i18n";

import { getMeta } from './utils';

import { withSelect } from "@wordpress/data";

import {
  Card,
  CardMediaWrapper,
  CardMeta,
  CardTitle,
  CardDescription,
  CardFooter,
  CardButton
} from "../card";
import {sanitizeMediaResponse} from "../post-card/utils";

const withMedia = withSelect( (select, ownProps ) => {

  const { getMedia } = select( 'core' );
  const { post, attributes } = ownProps;
  const { showMedia } = attributes;
  const { featured_media } = post;

  if ( ! featured_media || ! showMedia ) {
    return null;
  }

  const mediaObject = getMedia( featured_media );

  if ( ! mediaObject ) {
    return null;
  }

  return {
    media: sanitizeMediaResponse( mediaObject )
  }
});

export const CardPreview = withMedia(( props, type ) => {

  const {
    attributes,
    post,
    media
  } = props;

  const {
    showMeta,
    showTitle,
    showDescription,
    showButtons,
    metaAboveTitle,
    metaBelowTitle,
    title,
    description,
    buttonText,
  } = attributes;

  const IS_FIELDS = type === 'fields'

  const cardTitle = IS_FIELDS ? title : post.title.raw;
  const cardDescription = IS_FIELDS ? description : post.excerpt.raw;
  const cardButton = IS_FIELDS ? buttonText : __( 'Read More' );

  return (
    <Card {...props} >
      <CardMediaWrapper media={ media } { ...props }/>
      <CardMeta show={showMeta}>{metaAboveTitle}</CardMeta>
      <CardTitle show={showTitle}>{cardTitle}</CardTitle>
      <CardMeta show={showMeta}>{metaBelowTitle}</CardMeta>
      <CardDescription show={showDescription}>{cardDescription}</CardDescription>
      <CardFooter show={showButtons}>
        <CardButton>{cardButton}</CardButton>
      </CardFooter>
    </Card>
  )
});


