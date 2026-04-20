import { useSelect } from '@wordpress/data';

const getTaxonomySlug = ( postType ) => {
  switch ( postType ) {
    case 'product':
      return 'product_cat';
    case 'portfolio':
      // This is the CPT possibly registered by Pixelgrade Care.
      return 'portfolio_type';
    case 'gallery':
      // This is the CPT possibly registered by Pixelgrade Care.
      return 'gallery_type';
    case 'testimonial':
      // This is the CPT possibly registered by Pixelgrade Care.
      // Testimonials don't have categories.
      return null;
    default:
      return 'category';
  }
};

const Category = ( props ) => {
  const { termId, postType } = props;
  const taxonomy = getTaxonomySlug( postType );

  const category = useSelect(
    ( select ) => ( termId && taxonomy )
      ? select( 'core' ).getEntityRecord( 'taxonomy', taxonomy, termId )
      : null,
    [ termId, taxonomy ],
  );

  if ( ! termId || ! taxonomy ) {
    return '';
  }

  return category?.name || '';

};

export default Category;
