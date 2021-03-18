import {__} from '@wordpress/i18n';

const variations = [
  {
    name: __( 'Supernova - Posts Collection', '__plugin_txtd' ),
    title: __( 'Posts Collection', '__plugin_txtd' ),
    description: __( 'Posts Collection', '__plugin_txtd' ),
    attributes: {
      sourceType: 'content',
      layoutStyle: 'parametric',
      cardContentAlign: 'center left',

      postsToShow: 6,
      gridcolumns: 6,
      gridrows: 6,
      featuresize: 4,
      featureposition: 1,
      fragmentation: 1,
      imageweightleft: 1,
      imageweightright: 2,
      metadetailsleft: 10,
      metadetailsright: 6,
      boostfeature: false,
      subfeature: true,
      balancemdandiw: false,
      hierarchycrossing: 30,
      flipcolsrows: false,
      headerPosition: 0,
    }
  },
  {
    name: __( 'Supernova - Slideshow', '__plugin_txtd' ),
    title: __( 'Slideshow', '__plugin_txtd' ),
    description: __( 'Slideshow', '__plugin_txtd' ),
    attributes: {
      sourceType: 'content',
      layoutStyle: 'carousel',

      postsToShow: 3,
      columns: 1,
      showCollectionTitle: false,
      showCollectionSubtitle: false,

      cardLayout: 'stacked',
      cardContentAlign: 'center center',
      cardMediaOpacity: 40,

      paletteVariation: 12,
    }
  }
]

export default variations;
