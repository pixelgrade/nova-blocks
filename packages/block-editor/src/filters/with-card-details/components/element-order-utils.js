/**
 * Stable identifiers for the card elements the reorder list renders.
 * Every id in this set is individually movable — the list supports free
 * reordering of all card elements.
 */
export const ELEMENT = {
  META_PRIMARY:   'meta-primary',
  META_SECONDARY: 'meta-secondary',
  MEDIA:          'media',
  TITLE:          'title',
  SUBTITLE:       'subtitle',
  DESCRIPTION:    'description',
  BUTTONS:        'buttons',
};

// Canonical default order used when elementOrder hasn't been set yet.
// Keep in sync with the legacy hardcoded render sequence.
const DEFAULT_ORDER = [
  ELEMENT.MEDIA,
  ELEMENT.META_PRIMARY,
  ELEMENT.META_SECONDARY,
  ELEMENT.TITLE,
  ELEMENT.SUBTITLE,
  ELEMENT.DESCRIPTION,
  ELEMENT.BUTTONS,
];

const ALL_IDS = new Set( Object.values( ELEMENT ) );

/**
 * Is this element visible given the current attribute flags?
 * Used to hide rows that wouldn't render on the card anyway.
 */
export function isVisible( id, attributes ) {
  const { showMedia, showMeta, showTitle, showSubtitle, showDescription, showButtons } = attributes;
  switch ( id ) {
    case ELEMENT.MEDIA:          return !! showMedia;
    case ELEMENT.META_PRIMARY:   return !! showMeta;
    case ELEMENT.META_SECONDARY: return !! showMeta;
    case ELEMENT.TITLE:          return showTitle !== false;
    case ELEMENT.SUBTITLE:       return showSubtitle !== false;
    case ELEMENT.DESCRIPTION:    return showDescription !== false;
    case ELEMENT.BUTTONS:        return !! showButtons;
    default:                     return false;
  }
}

/**
 * Return the effective element order.
 *
 * - If the block has a non-empty `elementOrder` attribute, use it verbatim
 *   (but sanitise: drop unknown ids, deduplicate, append any missing defaults
 *   so new elements added upstream don't silently disappear).
 * - Otherwise derive a legacy order from `mediaPosition` + `metadataPosition`
 *   that matches the pre-elementOrder rendering.
 */
export function getEffectiveOrder( attributes ) {
  const { elementOrder } = attributes;

  if ( Array.isArray( elementOrder ) && elementOrder.length > 0 ) {
    // Sanitise: known ids only, no duplicates.
    const seen  = new Set();
    const clean = [];
    for ( const id of elementOrder ) {
      if ( ALL_IDS.has( id ) && ! seen.has( id ) ) {
        clean.push( id );
        seen.add( id );
      }
    }
    // Append any default ids that weren't in the saved order so newly
    // introduced elements surface in the list.
    for ( const id of DEFAULT_ORDER ) {
      if ( ! seen.has( id ) ) clean.push( id );
    }
    return clean;
  }

  // Legacy derivation from mediaPosition + metadataPosition.
  return deriveLegacyOrder( attributes );
}

function deriveLegacyOrder( attributes ) {
  const {
    mediaPosition    = 'before-title',
    metadataPosition = 'above-title',
  } = attributes;

  const items = [];

  // Media above everything when before-title.
  if ( mediaPosition === 'before-title' ) items.push( ELEMENT.MEDIA );

  // Meta above title.
  if ( metadataPosition === 'above-title' ) {
    items.push( ELEMENT.META_PRIMARY, ELEMENT.META_SECONDARY );
  } else if ( metadataPosition === 'split' ) {
    items.push( ELEMENT.META_PRIMARY );
  }

  items.push( ELEMENT.TITLE );

  // Media between halves when after-title.
  if ( mediaPosition === 'after-title' ) items.push( ELEMENT.MEDIA );

  items.push( ELEMENT.SUBTITLE );

  if ( metadataPosition === 'below-title' ) {
    items.push( ELEMENT.META_PRIMARY, ELEMENT.META_SECONDARY );
  }

  items.push( ELEMENT.DESCRIPTION );

  if ( metadataPosition === 'below-content' ) {
    items.push( ELEMENT.META_PRIMARY, ELEMENT.META_SECONDARY );
  } else if ( metadataPosition === 'split' ) {
    items.push( ELEMENT.META_SECONDARY );
  }

  items.push( ELEMENT.BUTTONS );

  return items;
}

/**
 * Return the effective order filtered to only items that are visible given
 * the current attribute flags. This is what the list UI renders and what the
 * card render walks — hidden elements are skipped everywhere.
 */
export function getVisibleOrder( attributes ) {
  return getEffectiveOrder( attributes ).filter( id => isVisible( id, attributes ) );
}

/**
 * Produce a new order that swaps the item at `index` with its neighbour in
 * `direction`. Returns null when the move is not possible (boundary).
 */
export function moveItem( order, index, direction ) {
  const target = direction === 'up' ? index - 1 : index + 1;
  if ( target < 0 || target >= order.length ) return null;
  const next = order.slice();
  [ next[ index ], next[ target ] ] = [ next[ target ], next[ index ] ];
  return next;
}

/**
 * Return true when meta-primary and meta-secondary are neighbours in the
 * ordering. This controls whether the card render collapses them into one
 * paragraph and whether the list UI visually connects the two rows.
 */
export function metasAreAdjacent( order ) {
  const i = order.indexOf( ELEMENT.META_PRIMARY );
  const j = order.indexOf( ELEMENT.META_SECONDARY );
  if ( i < 0 || j < 0 ) return false;
  return Math.abs( i - j ) === 1;
}
