const { __ }  = wp.i18n;

const collectionToggles = [
  {
    label: __( 'Collection Title' ),
    attribute: 'showCollectionTitle'
  }, {
    label: __( 'Collection Subtitle' ),
    attribute: 'showCollectionSubtitle',
  },
]

const cardToggles = [
  {
    label: __( 'Media' ),
    attribute: 'showMedia',
  }, {
    label: __( 'Title' ),
    attribute: 'showTitle',
  }, {
    label: __( 'Subtitle' ),
    attribute: 'showSubtitle',
  }, {
    label: __( 'Description' ),
    attribute: 'showDescription',
  }, {
    label: __( 'Buttons' ),
    attribute: 'showButtons',
  }, {
    label: __( 'Meta' ),
    attribute: 'showMeta',
  }
]

const heroToggles = [
  {
    label: __( 'Position Indicators' ),
    attribute: 'positionIndicators'
  }, {
    label: __( 'Scroll Indicator' ),
    attribute: 'scrollIndicator'
  },
  {
    label: __( 'Inner Content' ),
    attribute: 'displayInnerContent'
  }
]

const carouselToggles = [
  {
    label: __( 'Show Pagination' ),
    attribute: 'showPagination'
  },
  {
    label: __( 'Show Arrows' ),
    attribute: 'showArrows'
  }
]

export {
  collectionToggles,
  cardToggles,
  heroToggles,
  carouselToggles
}
