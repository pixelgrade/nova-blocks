import classnames from 'classnames';

import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import { __unstableStripHTML as stripHTML } from '@wordpress/dom';

import {
  Card,
  CardMeta,
  CardTitle,
  CardDescription,
  CardFooter,
  CardButton,
  CardMediaWrapper,
} from "../index";

import { getColorSignalClassnames } from "@novablocks/utils";

import { getMeta, sanitizeMediaResponse } from './utils';

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

export const PostCardMedia = ( props ) => {

  const { media } = props;

  if ( ! media ) {
    return null;
  }

  return (
    <img className={ `supernova-item__media` } src={ media.url } width={ media.width } height={ media.height }/>
  )
}

export const PostCard = withMedia( props => {

  const {
    attributes,
    post,
  } = props;

  const {
    showMeta,
    showTitle,
    showDescription,
    showButtons,
    showMedia,
  } = attributes;

  const {
    metaAboveTitle,
    metaBelowTitle,
  } = getMeta( props );

  const Media = props.Media || PostCardMedia;

  return (
    <Card { ...props }>
      {
        showMedia &&
        <CardMediaWrapper { ...props }>
          <Media { ...props } />
        </CardMediaWrapper>
      }
      <div className={ 'supernova-item__inner-container' }>
        <CardMeta show={ showMeta }>{ metaAboveTitle }</CardMeta>
        <CardTitle show={ showTitle }>{ post.title.raw }</CardTitle>
        <CardMeta show={ showMeta }>{ metaBelowTitle }</CardMeta>
        <CardDescription show={ showDescription }>{ stripHTML( post.excerpt.rendered ) }</CardDescription>
        <CardFooter show={ showButtons }>
          <CardButton>{ __( 'Read More' ) }</CardButton>
        </CardFooter>
      </div>
    </Card>
  );
} );

export default PostCard;
