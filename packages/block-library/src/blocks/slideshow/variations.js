import { __ } from '@wordpress/i18n';

const variations = [
  {
    name: __('Slideshow Me the Way Posts', '__plugin_txtd'),
    title: __( 'Posts Slideshow', '__plugin_txtd' ),
    description: __( 'Posts displayed in a slideshow layout', '__plugin_txtd' ),
    attributes: {
      source:'post',
    }
  }
]

export default variations;
