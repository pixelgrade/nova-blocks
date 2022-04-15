import { __ } from '@wordpress/i18n';

const variations = [
  {
    name: 'novablocks/posts-collection/carousel-deprecated',
    title: __( 'Posts Carousel (Deprecated)', '__plugin_txtd' ),
    description: __( 'Posts Collection displayed as a carousel.', '__plugin_txtd' ),
    attributes: {
      layoutStyle:'carousel',
      carouselLayout: 'variable'
    }
  }
];

export default variations;
