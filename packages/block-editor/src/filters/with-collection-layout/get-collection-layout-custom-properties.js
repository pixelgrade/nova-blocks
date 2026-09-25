const supportsPile3dEffect = (
  { layoutStyle, cardLayout, pile3dEffect },
  { supportsPile3d = true } = {}
) => {
  return supportsPile3d
    && [ 'classic', 'masonry' ].includes( layoutStyle )
    && 'stacked' === cardLayout
    && !! pile3dEffect;
};

const MEDIA_ALIGN_VERTICAL = [ 'top', 'center', 'bottom' ];
const MEDIA_ALIGN_HORIZONTAL = [ 'left', 'center', 'right' ];

/**
 * Media Alignment (#627): an alignment-matrix value ("bottom center") as a
 * CSS object-position ("center bottom"). The default "center center" is the
 * historical rendering and, like invalid values, returns '' so nothing is
 * emitted. Twin of novablocks_get_card_media_object_position() in
 * lib/block-rendering.php.
 */
const getMediaAlignObjectPosition = ( mediaAlign ) => {
  if ( typeof mediaAlign !== 'string' ) {
    return '';
  }

  const parts = mediaAlign.trim().split( /\s+/ );

  if ( parts.length !== 2
    || ! MEDIA_ALIGN_VERTICAL.includes( parts[ 0 ] )
    || ! MEDIA_ALIGN_HORIZONTAL.includes( parts[ 1 ] ) ) {
    return '';
  }

  if ( 'center' === parts[ 0 ] && 'center' === parts[ 1 ] ) {
    return '';
  }

  return `${ parts[ 1 ] } ${ parts[ 0 ] }`;
};

const getCollectionLayoutCustomProperties = ( attributes, options ) => {
  const { columns, gridGap, verticalGapModifier, mediaAlign } = attributes;
  const hasPile3dEffect = supportsPile3dEffect( attributes, options );
  const objectPosition = getMediaAlignObjectPosition( mediaAlign );

  const props = {
    '--nb-collection-columns-count': columns,
    '--nb-grid-spacing-modifier': gridGap,
    '--nb-grid-spacing-multiplier': hasPile3dEffect ? 2 : 1,
    '--nb-grid-row-spacing-multiplier': verticalGapModifier,
    '--nb-pile-3d-scale': hasPile3dEffect ? 0.82 : 1,
  };

  // Plain assignment, not object spread: Babel would import a runtime
  // helper for the spread, turning this CommonJS module into an ES module
  // whose `module.exports` is read-only (aborts the block-editor bundle).
  if ( objectPosition ) {
    props[ '--nb-card-media-object-position' ] = objectPosition;
  }

  return props;
};

module.exports = {
  getCollectionLayoutCustomProperties,
  getMediaAlignObjectPosition,
  supportsPile3dEffect,
};
