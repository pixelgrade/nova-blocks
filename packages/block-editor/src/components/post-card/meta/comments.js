import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';

// Core-data has no selector that exposes the X-WP-Total comment count header,
// so we keep apiFetch but dedupe at the module level: identical card mounts
// share the same in-flight promise and reuse the cached count.
const countCache = new Map();
const inflight = new Map();

const fetchCommentsCount = ( postId ) => {
  if ( countCache.has( postId ) ) {
    return Promise.resolve( countCache.get( postId ) );
  }
  if ( inflight.has( postId ) ) {
    return inflight.get( postId );
  }
  const promise = apiFetch( {
    path: addQueryArgs( '/wp/v2/comments', {
      post: postId,
      per_page: 1,
      _fields: 'id',
    } ),
    parse: false,
  } ).then( ( res ) => {
    const count = res.headers.get( 'X-WP-Total' );
    countCache.set( postId, count );
    inflight.delete( postId );
    return count;
  } ).catch( ( err ) => {
    inflight.delete( postId );
    throw err;
  } );
  inflight.set( postId, promise );
  return promise;
};

const Comments = ( props ) => {
  const { postId } = props;
  const [ commentsCount, setCommentsCount ] = useState( () => countCache.get( postId ) );

  useEffect( () => {
    if ( ! postId ) {
      return;
    }
    const currentPostId = postId;
    fetchCommentsCount( postId ).then( ( count ) => {
      // Stale requests will have the `currentPostId` of an older closure.
      if ( currentPostId === postId ) {
        setCommentsCount( count );
      }
    } );
  }, [ postId ] );

  if ( ! postId || commentsCount === undefined ) {
    return '';
  }

  return ! commentsCount ? __( 'No Comments', '__plugin_txtd' ) : `${ commentsCount } Comment${ commentsCount > 1 ? 's' : '' }`;

};

export default Comments;
