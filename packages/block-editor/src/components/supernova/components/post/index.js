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
  const { featured_media } = ownProps.post;

  if ( ! featured_media ) {
    return null;
  }

  const mediaObject = getMedia( featured_media );

  if ( ! mediaObject ) {
    return {};
  }

  return {
    media: sanitizeMediaResponse( mediaObject )
  }
} );

export const PostCard = withMedia( props => {

  const { post } = props;

  const {
    metaAboveTitle,
    metaBelowTitle,
  } = getMeta( props );

  return (
    <Card { ...props }>
      <CardMeta show={ true }>{ metaAboveTitle }</CardMeta>
      <CardTitle show={ true }>{ post.title.raw }</CardTitle>
      <CardMeta show={ true }>{ metaBelowTitle }</CardMeta>
      <CardDescription show={ true }>{ post.excerpt.rendered }</CardDescription>
      <CardFooter show={ true }>
        <CardButton>{ __( 'Read More' ) }</CardButton>
      </CardFooter>
    </Card>
  );
} )
