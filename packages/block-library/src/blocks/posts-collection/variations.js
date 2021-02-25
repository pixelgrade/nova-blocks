import { __ } from '@wordpress/i18n';

const variations = [
  {
    name: __('Posts Collection Carousel', '__plugin_txtd'),
    title: __( 'Carousel', '__plugin_txtd' ),
    description: __( 'Posts Collection displayed in a carousel layout', '__plugin_txtd' ),
    attributes: {
      layoutStyle:'carousel',
      carouselLayout: 'variable'
    }
  }
]

export default variations;
