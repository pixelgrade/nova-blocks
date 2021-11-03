import { __ } from '@wordpress/i18n';
import * as icons from './icons';

const variations = [ {
  name: 'sidebar-left',
  title: __( 'Sidebar Left with Content on the right', '__plugin_txtd' ),
  icon: icons.sidebarLeft,
  attributes: { sidebarPosition: 'left' },
  innerBlocks: [
    [ 'novablocks/sidecar-area', { areaName: 'content' } ],
    [ 'novablocks/sidecar-area', { areaName: 'sidebar' } ],
  ],
  scope: [ 'block' ],
}, {
  name: 'sidebar-right',
  title: __( 'Sidebar Right with Content on the left', '__plugin_txtd' ),
  icon: icons.sidebarRight,
  attributes: { sidebarPosition: 'right' },
  innerBlocks: [
    [ 'novablocks/sidecar-area', { areaName: 'content' } ],
    [ 'novablocks/sidecar-area', { areaName: 'sidebar' } ],
  ],
  scope: [ 'block' ],
} ];

export default variations;
