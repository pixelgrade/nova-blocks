import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const Category = ( props ) => {
  const { termId, postType } = props;
  const [ category, setCategory ] = useState();

  useEffect( () => {
    if ( !termId ) {
      return;
    }
    const currentTermId = termId;
    let path = `/wp/v2/categories/${ termId }`;
    switch ( postType ) {
      case 'product':
        path = `/wp/v2/product_cat/${ termId }`;
        break;
      case 'portfolio':
        // This is the CPT possibly registered by Pixelgrade Care.
        path = `/wp/v2/portfolio_type/${ termId }`;
        break;
      case 'gallery':
        // This is the CPT possibly registered by Pixelgrade Care.
        path = `/wp/v2/gallery_type/${ termId }`;
        break;
      case 'testimonial':
        // This is the CPT possibly registered by Pixelgrade Care.
        // Testimonials don't have categories.
        break;
      default:
        break;
    }

    apiFetch( {
      path: path,
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
