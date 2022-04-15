import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const Category = ( props ) => {
  const { termId } = props;
  const [ category, setCategory ] = useState();

  useEffect( () => {
    if ( !termId ) {
      return;
    }
    const currentTermId = termId;
    apiFetch( {
      path: `/wp/v2/categories/${ termId }`,
    } ).then( ( res ) => {
      // Stale requests will have the `currentTermId` of an older closure.
      if ( currentTermId === termId ) {
        setCategory( res );
      }
    } );
  }, [ termId ] );

  if ( !termId || category === undefined ) {
    return '';
  }

	return category?.name || '';

};

export default Category;
