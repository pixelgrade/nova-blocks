/**
 * Header navigation "Dark Mode" special item. Projected to a classic menu item
 * with the `menu-item--dark-mode js-sm-dark-mode-toggle` classes so wp_nav_menu
 * renders it 1:1 on the frontend.
 */
import { __ } from '@wordpress/i18n';

import { registerNavigationSpecialItem } from '../navigation/special-item';
import metadata from './block.json';

registerNavigationSpecialItem( metadata, {
  defaultLabel: __( 'Dark Mode', 'nova-blocks' ),
  defaultVisualStyle: 'icon',
  panelTitle: __( 'Dark mode item', 'nova-blocks' ),
} );
