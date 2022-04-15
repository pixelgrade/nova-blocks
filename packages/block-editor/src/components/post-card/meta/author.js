import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const Author = ( props ) => {
  const { userId } = props;
  const [ author, setAuthor ] = useState();

  useEffect( () => {
    if ( !userId ) {
      return;
    }
    const currentUserId = userId;
    apiFetch( {
      path: `/wp/v2/users/${ props.id }`,
    } ).then( ( res ) => {
      // Stale requests will have the `currentUserId` of an older closure.
      if ( currentUserId === userId ) {
        setAuthor( res );
      }
    } );
  }, [ userId ] );

  if ( !userId || author === undefined ) {
    return '';
  }

	return author?.name || '';

};

export default Author;
