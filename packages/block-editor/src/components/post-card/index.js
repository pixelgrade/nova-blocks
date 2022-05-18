import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import { __unstableStripHTML as stripHTML } from '@wordpress/dom';
import { useEffect, useRef } from '@wordpress/element';

import {
  Card,
  CardMeta,
  CardTitle,
  CardDescription,
  CardFooter,
  CardButton,
  CardMediaWrapper,
} from "../index";

import { resizeDropcap } from "@novablocks/utils";

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
    <img className={ `nb-supernova-item__media` } src={ media.url } width={ media.width } height={ media.height }
         alt={ media?.alt } />
  )
};

export const PostCardLetter = props => {
  const { post } = props;
  const postTitle = post?.title?.raw || '';
  const ref = useRef( null );

  if ( ! postTitle ) {
    return null;
  }

  useEffect( () => {
    if ( ref.current ) {
      resizeDropcap( ref.current );
    }
  }, [ ref ] );

  return (
    <div className="nb-supernova-item__dropcap-wrapper sm-variation-11">
      <span className="nb-supernova-item__dropcap" ref={ ref }>{ postTitle.substring(0, 1) }</span>
    </div>
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
    <Card { ...props } key={ 'card_post_' + post.id }>
      {
        showMedia && props.media &&
        <CardMediaWrapper { ...props } key={ 'card_post_mediawrapper_' + post.id }>
          <PostCardLetter { ...props } />
          <Media { ...props } key={ 'card_post_media_' + post.id } />
        </CardMediaWrapper>
      }
      <div className={ 'nb-supernova-item__inner-container' } key={ 'card_post_innercontainer_' + post.id }>
        <CardMeta show={ showMeta } key={ 'card_post_metaabovetitle_' + post.id }>{ metaAboveTitle }</CardMeta>
        <CardTitle show={ showTitle } attributes={ attributes }
                   key={ 'card_post_title_' + post.id }>{ post?.title?.raw || '' }</CardTitle>
        <CardMeta show={ showMeta } key={ 'card_post_metabelowtitle_' + post.id }>{ metaBelowTitle }</CardMeta>
        <CardDescription show={ showDescription }
                         key={ 'card_post_description_' + post.id }>{ stripHTML( post?.excerpt?.rendered || '' ) }</CardDescription>
        <CardFooter show={ showButtons } key={ 'card_post_footer_' + post.id }>
          <CardButton attributes={ attributes } key={ 'card_post_footer_button_' + post.id }>{ __( 'Read More', '__plugin_txtd' ) }</CardButton>
        </CardFooter>
      </div>
    </Card>
  );
} );

export default PostCard;
