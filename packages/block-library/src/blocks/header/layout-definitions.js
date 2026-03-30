const { __ } = require( '@wordpress/i18n' );

const HEADER_LAYOUT_DEFINITIONS = [
  {
    name: 'logo-left',
    icon: 'logoLeft',
    title: __( 'Logo Left', '__plugin_txtd' ),
    description: __( 'Logo on the left with a single navigation on the right.', '__plugin_txtd' ),
    attributes: {
      layout: 'logo-left',
      logoHeight: 30,
    },
    innerBlocks: [
      [ 'novablocks/header-row', {
        slug: 'primary',
        label: __( 'Primary Navigation', '__plugin_txtd' ),
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/logo' ],
          [ 'novablocks/navigation', { slug: 'primary' } ],
        ] ],
    ],
  },
  {
    name: 'logo-left-center-right',
    icon: 'logoLeftCenterRight',
    title: __( 'Split Nav', '__plugin_txtd' ),
    description: __( 'Logo on the left with one navigation in the center and another on the right.', '__plugin_txtd' ),
    attributes: {
      layout: 'logo-left-center-right',
      logoHeight: 30,
    },
    innerBlocks: [
      [ 'novablocks/header-row', {
        slug: 'primary',
        label: __( 'Primary Navigation', '__plugin_txtd' ),
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/logo' ],
          [ 'novablocks/navigation', { slug: 'primary' } ],
          [ 'novablocks/navigation', { slug: 'secondary' } ],
        ] ],
    ],
  },
  {
    name: 'logo-center',
    icon: 'logoCenter',
    title: __( 'Centered Logo', '__plugin_txtd' ),
    description: __( 'Centered logo with a navigation on each side.', '__plugin_txtd' ),
    attributes: {
      layout: 'logo-center',
      logoHeight: 30,
    },
    innerBlocks: [
      [ 'novablocks/header-row', {
        slug: 'primary',
        label: __( 'Primary Navigation', '__plugin_txtd' ),
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/navigation', { slug: 'primary' } ],
          [ 'novablocks/logo' ],
          [ 'novablocks/navigation', { slug: 'secondary' } ],
        ] ],
    ],
  },
  {
    name: 'logo-center-two-rows',
    icon: 'logoCenterTwoRows',
    title: __( 'Two Rows', '__plugin_txtd' ),
    description: __( 'Centered logo row above a full-width primary navigation row.', '__plugin_txtd' ),
    attributes: {
      layout: 'logo-center-two-rows',
      logoHeight: 105,
      stickyHeaderSpacingMultiplier: 0.25,
    },
    innerBlocks: [
      [ 'novablocks/header-row', {
        slug: 'logo',
        label: __( 'Site Identity / Logo', '__plugin_txtd' ),
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 2,
        emphasisBottomSpacing: 2,
      },
        [
          [ 'novablocks/navigation', { slug: 'secondary' } ],
          [ 'novablocks/logo' ],
          [ 'novablocks/navigation', { slug: 'tertiary' } ],
        ] ],
      [ 'novablocks/header-row', {
        slug: 'primary',
        label: __( 'Primary Navigation', '__plugin_txtd' ),
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/navigation', { slug: 'primary' } ],
        ] ],
    ],
  },
  {
    name: 'logo-center-three-rows',
    icon: 'logoCenterThreeRows',
    title: __( 'Three Rows', '__plugin_txtd' ),
    description: __( 'Top secondary navigation, centered logo row, and primary navigation below.', '__plugin_txtd' ),
    attributes: {
      layout: 'logo-center-three-rows',
      logoHeight: 105,
      stickyHeaderSpacingMultiplier: 0.25,
    },
    innerBlocks: [
      [ 'novablocks/header-row', {
        slug: 'secondary',
        label: __( 'Secondary Navigation', '__plugin_txtd' ),
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/navigation', { slug: 'secondary' } ],
          [ 'novablocks/navigation', { slug: 'tertiary' } ],
        ] ],
      [ 'novablocks/header-row', {
        slug: 'logo',
        label: __( 'Site Identity / Logo', '__plugin_txtd' ),
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 3,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/logo' ],
        ] ],
      [ 'novablocks/header-row', {
        slug: 'primary',
        label: __( 'Primary Navigation', '__plugin_txtd' ),
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/navigation', { slug: 'primary' } ],
        ] ],
    ],
  },
];

module.exports = {
  HEADER_LAYOUT_DEFINITIONS,
};
