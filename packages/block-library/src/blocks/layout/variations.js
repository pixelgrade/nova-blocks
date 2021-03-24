import { __ } from '@wordpress/i18n';
import * as icons from './icons';

const variations = [
  {
    name: 'sidebar-left',
    title: __('Sidebar Left with Content on the right', '__plugin_txtd' ),
    icon: icons.sidebarLeft,
    innerBlocks: [
      ['novablocks/layout-area', {
        className: 'novablocks-sidebar novablocks-sidebar--left'
      }],
      ['novablocks/layout-area', {
        className: 'novablocks-content'
      }],
    ],
    scope: [ 'block' ],
  },
  {
    name: 'sidebar-right',
    title: __('Sidebar Right with Content on the left', '__plugin_txtd' ),
    icon: icons.sidebarRight,
    innerBlocks: [
      ['novablocks/layout-area', {
        className: 'novablocks-content'
      }],
      ['novablocks/layout-area', {
        className: 'novablocks-sidebar novablocks-sidebar--right'
      }],
    ],
    scope: [ 'block' ],
  },
  {
    name: 'complex',
    title: __('Sidebar on Left and Right with Content on center', '__plugin_txtd' ),
    icon: icons.sidebarLeftRight,
    innerBlocks: [
      ['novablocks/layout-area', {
        className: 'novablocks-sidebar novablocks-sidebar--left'
      }],
      ['novablocks/layout-area', {
        className: 'novablocks-content'
      }],
      ['novablocks/layout-area', {
        className: 'novablocks-sidebar novablocks-sidebar--right'
      }],
    ],
    scope: [ 'block' ],
  }

];

export default variations;
