/**
 * Header navigation "Search" special item. Projected to a classic menu item with
 * the `menu-item--search` class so wp_nav_menu renders it 1:1 on the frontend.
 */
import { __ } from '@wordpress/i18n';

import { registerNavigationSpecialItem } from '../navigation/special-item';
import { SearchIcon } from '../navigation/special-item-icons';
import metadata from './block.json';

registerNavigationSpecialItem( metadata, {
  defaultLabel: __( 'Search', 'nova-blocks' ),
  defaultVisualStyle: 'label_icon',
  panelTitle: __( 'Search item', 'nova-blocks' ),
  icon: SearchIcon,
} );
