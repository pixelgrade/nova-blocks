import { __ } from '@wordpress/i18n';
import * as icons from './icons';

const variations = [
  {
    name: 'sidebar-left',
    title: __( 'Sidebar Left with Content on the right', '__plugin_txtd' ),
    icon: icons.sidebarLeft,
    attributes: {
      sidebarPosition: 'left',
    },
    innerBlocks: [
      [ 'novablocks/sidecar-area', { areaName: 'content' } ],
      [ 'novablocks/sidecar-area', { areaName: 'sidebar' } ],
    ],
    scope: [ 'block' ],
  }, {
    name: 'sidebar-right',
    title: __( 'Sidebar Right with Content on the left', '__plugin_txtd' ),
    icon: icons.sidebarRight,
    attributes: {
      sidebarPosition: 'right',
    },
    innerBlocks: [
      [ 'novablocks/sidecar-area', { areaName: 'content' } ],
      [ 'novablocks/sidecar-area', { areaName: 'sidebar' } ],
    ],
    scope: [ 'block' ],
  }, {
    // Task 4.1 (three-area block model): optional left rail, content, optional
    // right rail. Uses EXPLICIT per-side area names so a single sidecar carries
    // both rails (the layout is driven by rail presence, not sidebarPosition).
    // The curated recipe picker that replaces these raw variations is Task 4.2.
    name: 'both',
    title: __( 'Left Rail, Content, and Right Rail', '__plugin_txtd' ),
    icon: icons.sidebarBoth,
    attributes: {
      sidebarPosition: 'none',
    },
    innerBlocks: [
      [ 'novablocks/sidecar-area', { areaName: 'sidebar-left' } ],
      [ 'novablocks/sidecar-area', { areaName: 'content' } ],
      [ 'novablocks/sidecar-area', { areaName: 'sidebar-right' } ],
    ],
    scope: [ 'block' ],
  }, {
    name: 'none',
    isDefault: true,
    title: __( 'Centered Content with no Sidebar', '__plugin_txtd' ),
    icon: icons.sidebarNone,
    attributes: {
      sidebarPosition: 'none',
    },
    innerBlocks: [
      [ 'novablocks/sidecar-area', { areaName: 'content' } ],
    ],
    scope: [ 'block' ],
  }
];

export default variations;
