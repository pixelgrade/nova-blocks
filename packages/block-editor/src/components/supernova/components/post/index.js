import { __ } from "@wordpress/i18n";

import { withSelect } from "@wordpress/data";

import { getMeta, sanitizeMediaResponse } from './utils';

import {
  Card,
  CardMeta,
  CardTitle,
  CardDescription,
  CardFooter,
  CardButton,
} from "../card";

const withMedia = withSelect( ( select, ownProps ) => {
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
} );

export const PostCard = withMedia( props => {

  const {
    attributes,
    post
  } = props;

  const {
    showMeta,
    showTitle,
    showDescription,
    showButtons,
  } = attributes;

  const {
    metaAboveTitle,
    metaBelowTitle,
  } = getMeta( props );

  return (
    <Card { ...props }>
      <CardMeta show={ showMeta }>{ metaAboveTitle }</CardMeta>
      <CardTitle show={ showTitle }>{ post.title.raw }</CardTitle>
      <CardMeta show={ showMeta }>{ metaBelowTitle }</CardMeta>
      <CardDescription show={ showDescription }>{ post.excerpt.rendered }</CardDescription>
      <CardFooter show={ showButtons }>
        <CardButton>{ __( 'Read More' ) }</CardButton>
      </CardFooter>
    </Card>
  );
} )
