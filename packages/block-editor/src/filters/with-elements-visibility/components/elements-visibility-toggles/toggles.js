import { __ } from "@wordpress/i18n";

const collectionToggles = [
  {
    label: __( 'Collection Title', '__plugin_txtd' ),
    attribute: 'showCollectionTitle'
  }, {
    label: __( 'Collection Subtitle', '__plugin_txtd' ),
    attribute: 'showCollectionSubtitle',
  },
]

const cardToggles = [
  {
    label: __( 'Media', '__plugin_txtd' ),
    attribute: 'showMedia',
  }, {
    label: __( 'Title', '__plugin_txtd' ),
    attribute: 'showTitle',
  }, {
    label: __( 'Subtitle', '__plugin_txtd' ),
    attribute: 'showSubtitle',
  }, {
    label: __( 'Description', '__plugin_txtd' ),
    attribute: 'showDescription',
  }, {
    label: __( 'Buttons', '__plugin_txtd' ),
    attribute: 'showButtons',
  }, {
    label: __( 'Meta', '__plugin_txtd' ),
    attribute: 'showMeta',
  }
]

const heroToggles = [
  {
    label: __( 'Position Indicators', '__plugin_txtd' ),
    attribute: 'positionIndicators'
  }, {
    label: __( 'Scroll Indicator', '__plugin_txtd' ),
    attribute: 'scrollIndicator'
  },
  {
    label: __( 'Inner Content', '__plugin_txtd' ),
    attribute: 'displayInnerContent'
  }
]

const carouselToggles = [
  {
    label: __( 'Pagination', '__plugin_txtd' ),
    attribute: 'showPagination'
  },
  {
    label: __( 'Arrows', '__plugin_txtd' ),
    attribute: 'showArrows'
  }
]

export {
  collectionToggles,
  cardToggles,
  heroToggles,
  carouselToggles
}
