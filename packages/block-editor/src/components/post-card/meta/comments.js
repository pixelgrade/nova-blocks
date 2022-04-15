import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';

const Comments = ( props ) => {
  const { postId } = props;
  const [ commentsCount, setCommentsCount ] = useState();

  useEffect( () => {
    if ( !postId ) {
      return;
    }
    const currentPostId = postId;
    apiFetch( {
      path: addQueryArgs( '/wp/v2/comments', {
        post: postId,
      } ),
      parse: false,
    } ).then( ( res ) => {
      // Stale requests will have the `currentPostId` of an older closure.
      if ( currentPostId === postId ) {
        setCommentsCount( res.headers.get( 'X-WP-Total' ) );
      }
    } );
  }, [ postId ] );

  if ( !postId || commentsCount === undefined ) {
    return '';
  }

  return !commentsCount ? __( 'No Comments', '__plugin_txtd' ) : `${commentsCount} Comment${commentsCount > 1 ? 's' : ''}`;

};

export default Comments;
