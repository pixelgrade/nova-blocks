import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

const Tags = ( props ) => {
  const { termIds } = props;
  const [ tags, setTags ] = useState();

  useEffect( () => {
    if ( !termIds ) {
      return;
    }
    const currentTermIds = termIds.join(',');
    apiFetch( {
      path: addQueryArgs( '/wp/v2/tags', {
        page:1,
        per_page: 10,
        include: termIds,
      } ),
    } ).then( ( res ) => {
      // Stale requests will have the `currentTermIds` of an older closure.
      if ( currentTermIds === termIds.join(',') ) {
        setTags( res );
      }
    } );
  }, [ termIds ] );

  if ( !termIds || tags === undefined || !tags.length ) {
    return '';
  }

	return tags.map( tag => tag.name ).join( ', ' ) || '';

};

export default Tags;
