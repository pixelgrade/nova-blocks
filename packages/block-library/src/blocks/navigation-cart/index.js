/**
 * Header navigation "Cart" special item. Projected to a classic menu item with
 * the `menu-item--cart` class (and the WooCommerce cart URL resolved at
 * projection time) so wp_nav_menu renders it 1:1 on the frontend.
 */
import { __ } from '@wordpress/i18n';

import { registerNavigationSpecialItem } from '../navigation/special-item';
import { CartIcon } from '../navigation/special-item-icons';
import metadata from './block.json';

registerNavigationSpecialItem( metadata, {
  defaultLabel: __( 'Cart', 'nova-blocks' ),
  defaultVisualStyle: 'icon',
  panelTitle: __( 'Cart item', 'nova-blocks' ),
  icon: CartIcon,
} );
