import { useSelect } from '@wordpress/data';

const getTaxonomySlug = ( postType ) => {
  switch ( postType ) {
    case 'product':
      return 'product_tag';
    case 'portfolio':
      // This is the CPT possibly registered by Pixelgrade Care.
      return 'portfolio_tag';
    case 'gallery':
      // This is the CPT possibly registered by Pixelgrade Care.
      return 'gallery_tag';
    case 'testimonial':
      // This is the CPT possibly registered by Pixelgrade Care.
      // Testimonials don't have tags.
      return null;
    default:
      return 'post_tag';
  }
};

const Tags = ( props ) => {
  const { termIds, postType } = props;
  const taxonomy = getTaxonomySlug( postType );

  const tags = useSelect(
    ( select ) => {
      if ( ! termIds || ! termIds.length || ! taxonomy ) {
        return [];
      }
      const { getEntityRecord } = select( 'core' );
      return termIds.map( ( id ) => getEntityRecord( 'taxonomy', taxonomy, id ) );
    },
    [ termIds, taxonomy ],
  );

  if ( ! termIds || ! termIds.length || ! taxonomy ) {
    return '';
  }

  // Wait until all terms have resolved so the visible list doesn't flicker.
  if ( tags.some( ( tag ) => tag === undefined ) ) {
    return '';
  }

  return tags.filter( Boolean ).map( ( tag ) => tag.name ).join( ', ' );

};

export default Tags;
