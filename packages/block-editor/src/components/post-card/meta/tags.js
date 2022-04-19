import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

const Tags = ( props ) => {
  const { termIds, postType } = props;
  const [ tags, setTags ] = useState();

  useEffect( () => {
    if ( !termIds ) {
      return;
    }
    const currentTermIds = termIds.join(',');
    let url = '/wp/v2/tags';
    switch ( postType ) {
      case 'product':
        url = '/wp/v2/product_tag';
        break;
      case 'portfolio':
        // This is the CPT possibly registered by Pixelgrade Care.
        url = '/wp/v2/portfolio_tag';
        break;
      case 'gallery':
        // This is the CPT possibly registered by Pixelgrade Care.
        url = '/wp/v2/gallery_tag';
        break;
      case 'testimonial':
        // This is the CPT possibly registered by Pixelgrade Care.
        // Testimonials don't have categories.
        break;
      default:
        break;
    }

    apiFetch( {
      path: addQueryArgs( url, {
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
