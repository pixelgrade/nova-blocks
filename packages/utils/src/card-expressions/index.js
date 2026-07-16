/**
 * Card expression classes: classify a post card's media orientation and
 * content length so themes can build ratio-adaptive card designs
 * (collage/masonry grids).
 *
 * Dual-runtime contract — keep in sync with the PHP mirror in
 * `lib/block-rendering.php` (`novablocks_classify_card_media_ratio`,
 * `novablocks_classify_card_text_length`,
 * `novablocks_get_card_expression_classes_from_values`) and the boundaries
 * asserted in `tests/php/card-expression-classes-contract.php`.
 */

export const CARD_EXPRESSION_THRESHOLDS = {
  media: { tall: 0.5625, portrait: 0.75, square: 1.34, landscape: 1.78 },
  title: { short: 30, medium: 60 },
  description: { short: 100, medium: 200 },
  recency: { freshDays: 30 },
};

export const classifyCardMediaRatio = ( ratio, thresholds = CARD_EXPRESSION_THRESHOLDS.media ) => {
  const value = Number( ratio );

  if ( ! Number.isFinite( value ) || value <= 0 ) {
    return 'landscape';
  }

  if ( value < thresholds.tall ) {
    return 'tall';
  }

  if ( value < thresholds.portrait ) {
    return 'portrait';
  }

  if ( value <= thresholds.square ) {
    return 'square';
  }

  if ( value <= thresholds.landscape ) {
    return 'landscape';
  }

  return 'wide';
};

const stripMarkup = ( text ) => String( text ?? '' ).replace( /<[^>]*>/g, '' ).trim();

export const classifyCardTextLength = ( text, thresholds ) => {
  const plain = stripMarkup( text );

  if ( ! plain.length ) {
    return 'none';
  }

  // Measure user-perceived characters; [...str] counts code points, matching
  // PHP's mb_strlen for the common multibyte cases.
  const length = [ ...plain ].length;

  if ( length < thresholds.short ) {
    return 'short';
  }

  if ( length < thresholds.medium ) {
    return 'medium';
  }

  return 'long';
};

export const getCardExpressionClassesFromValues = ( values, thresholds = CARD_EXPRESSION_THRESHOLDS ) => {
  const classes = [];
  const width = Number( values?.mediaWidth ) || 0;
  const height = Number( values?.mediaHeight ) || 0;

  if ( width > 0 && height > 0 ) {
    classes.push( `nb-card--media-${ classifyCardMediaRatio( width / height, thresholds.media ) }` );
  } else {
    classes.push( 'nb-card--no-media' );
  }

  classes.push( `nb-card--title-${ classifyCardTextLength( values?.title, thresholds.title ) }` );
  classes.push( `nb-card--description-${ classifyCardTextLength( values?.description, thresholds.description ) }` );

  // Recency is anchored to the newest post in the same rendered collection
  // (never the wall clock) so the class set stays deterministic per content
  // set and page-cache-stable. Both timestamps are UNIX seconds, matching the
  // PHP mirror's strtotime() values.
  const postTimestamp = Number( values?.postTimestamp ) || 0;
  const newestTimestamp = Number( values?.newestTimestamp ) || 0;
  const freshDays = thresholds.recency?.freshDays ?? CARD_EXPRESSION_THRESHOLDS.recency.freshDays;

  if ( postTimestamp > 0 && newestTimestamp > 0
    && ( newestTimestamp - postTimestamp ) <= freshDays * 86400 ) {
    classes.push( 'nb-card--fresh' );
  }

  return classes;
};
