import { __ } from '@wordpress/i18n';

const cardAttributes = {
  sourceType: 'fields',
  cardLayout: 'vertical',
  contentPadding: 0,
  layoutGutter: 10,
  title: 'Title',
  description: 'This is just an example of what a description for this card could look like',
  buttonText: 'Button',
};

const mediaCardAttributes = {
  sourceType: 'blocks',
  contentPadding: 100,
  layoutGutter: 10,
  cardLayout: 'horizontal',
};

const mediaCardContent = [
  [ 'novablocks/headline', { level: 2, className: "has-larger-font-size", fontSize: "larger" } ],
  [ 'core/separator', {} ],
  [
    'core/paragraph',
    { content: 'We have always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to make the unknown known.' }
  ],
];

const variations = [
  {
    name: __( 'Posts Collection', '__plugin_txtd' ),
    title: __( 'Posts Collection', '__plugin_txtd' ),
    description: __( 'Posts Collection', '__plugin_txtd' ),
    attributes: {
      sourceType: 'content',
      layoutStyle: 'parametric',
      cardContentAlign: 'center left',
      contentPadding: 0,
      postsToShow: 6,
    }
  },
  {
    name: __( 'Slideshow me the Way', '__plugin_txtd' ),
    title: __( 'Slideshow me the Way', '__plugin_txtd' ),
    description: __( 'Slideshow me the Way', '__plugin_txtd' ),
    attributes: {
      align: 'full',
      sourceType: 'content',
      layoutStyle: 'carousel',
      contentPadding: 100,

      postsToShow: 3,
      columns: 1,

      showCollectionTitle: false,
      showCollectionSubtitle: false,

      cardLayout: 'stacked',
      cardContentAlign: 'center center',
      cardMediaOpacity: 40,
      paletteVariation: 12,
    }
  },
  {
    name: __( 'Hero of the Galaxy', '__plugin_txtd' ),
    title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
    description: __( 'Hero of the Galaxy', '__plugin_txtd' ),
    attributes: {
      sourceType: 'blocks',
      layoutStyle: 'classic',
      contentPadding: 100,

      postsToShow: 3,
      columns: 1,

      showCollectionTitle: false,
      showCollectionSubtitle: false,

      cardLayout: 'stacked',
      cardContentAlign: 'bottom center',
      cardMediaOpacity: 40,

      paletteVariation: 12,

      align: 'full',
      emphasisTopSpacing: 0,
      emphasisBottomSpacing: 0,
      scrollingEffect: 'parallax',
    },
    innerBlocks: [
      [ 'novablocks/supernova-item', {
        sourceType: 'blocks',
        layoutStyle: 'classic',
        contentPadding: 100,
        layoutGutter: 10,
        cardLayout: 'stacked',
      }, [
        [ 'novablocks/headline', { level: 2, className: "has-larger-font-size", fontSize: "larger" } ],
        [ 'core/separator', {} ],
        [
          'core/paragraph',
          { content: 'We have always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to make the unknown known.' }
        ],
      ]]
    ]
  },
  {
    name: __( 'Media Card Constellation', '__plugin_txtd' ),
    title: __( 'Media Card Constellation', '__plugin_txtd' ),
    description: __( 'Media Card Constellation', '__plugin_txtd' ),
    attributes: {
      sourceType: 'blocks',
      layoutStyle: 'classic',
      contentPadding: 100,
      layoutGutter: 10,

      postsToShow: 1,
      columns: 1,

      showCollectionTitle: false,
      showCollectionSubtitle: false,

      cardLayout: 'horizontal',
      cardContentAlign: 'center center',
      cardMediaOpacity: 100,
    },
    innerBlocks: [
      [ 'novablocks/supernova-item', mediaCardAttributes, mediaCardContent ]
    ]
  },
  {
    name: __( 'Cards Collection', '__plugin_txtd' ),
    title: __( 'Cards Collection', '__plugin_txtd' ),
    description: __( 'Cards Collection', '__plugin_txtd' ),
    attributes: {
      sourceType: 'fields',
      layoutStyle: 'classic',
      contentPadding: 0,
      layoutGutter: 10,

      postsToShow: 3,
      columns: 3,

      cardLayout: 'vertical',
      cardContentAlign: 'center left',
      cardMediaOpacity: 100,
    },
    innerBlocks: [
      [ 'novablocks/supernova-item', cardAttributes ],
      [ 'novablocks/supernova-item', cardAttributes ],
      [ 'novablocks/supernova-item', cardAttributes ],
    ]
  },
  {
    name: __( 'Advanced Gallery', '__plugin_txtd' ),
    title: __( 'Advanced Gallery', '__plugin_txtd' ),
    description: __( 'Advanced Gallery', '__plugin_txtd' ),
    attributes: {
      sourceType: 'fields',
      layoutStyle: 'classic',
      contentPadding: 0,
      layoutGutter: 0,

      postsToShow: 1,
      columns: 1,

      cardLayout: 'vertical',
      cardContentAlign: 'center left',
      cardMediaOpacity: 100,

      showCollectionTitle: false,
      showCollectionSubtitle: false,
      showMeta: false,
      showTitle: false,
      showSubtitle: false,
      showDescription: false,
      showButtons: false,
    },
    innerBlocks: [
      [ 'novablocks/supernova-item', { multiplePlaceholderImages: true } ]
    ]
  }
];

export default variations;
