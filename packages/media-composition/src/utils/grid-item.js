const GRID_ITEM_SIZE = 20;

// --- Chain arrangement (corner-chain / staircase) --------------------------
//
// Media Composition has TWO arrangements, selected by the `arrangement`
// attribute — a real point in the configuration span, NOT a preset fork:
//
//   "grid"  (default) — the classic 2-column placement math. Byte-identical
//                       to what every classic preset has always produced.
//   "chain"           — a generalized corner-chain: item N's top-left corner
//                       is placed at item N-1's bottom-right corner, forming a
//                       staircase. Aspect alternates portrait / landscape down
//                       the chain for editorial rhythm.
//
// In "chain" all four shared sliders stay live and reinterpret cleanly:
//   elementsDistance   -> the gap at each meeting corner
//                         ( 0 = corners touch, + = gap, - = overlap )
//   sizeContrast       -> the size progression along the chain: portrait
//                         members recede while landscape members anchor,
//                         deepening the alternating contrast
//   placementVariation -> the four mirror forms (flipX / flipY, unchanged)
//   positionShift      -> slides each stepped item ALONG its touching edge,
//                         morphing strict corner-to-corner toward stacked
//                         offset arrangements
//
// `stylePreset` is a bundle-identity label only and is never read here for
// math. The Editorial Pair preset is simply a bundle that sets
// arrangement:"chain" (plus tuned contrast / variation).
const CHAIN_BASE_HEIGHT = 33;      // base item height in grid-line units
const CHAIN_PORTRAIT_ASPECT = 0.65; // portrait members (even indices)
const CHAIN_LANDSCAPE_ASPECT = 1.35; // landscape members (odd indices)
const CHAIN_CONTRAST_K = 0.4;      // how strongly sizeContrast shrinks portraits
const CHAIN_GAP_DIVISOR = 10;      // elementsDistance -> corner gap in grid units
const CHAIN_SHIFT_MAX = 20;        // positionShift full -> slide along the edge

export const isChainArrangement = ( attributes ) =>
  attributes?.arrangement === 'chain';

// The (width, height) of a chain item, independent of its position. index 0 is
// portrait; the aspect alternates every step. sizeContrast shrinks portraits
// (landscapes keep anchoring the chain), which is the "size progression".
export const getChainItemSize = ( index, attributes ) => {
  const isPortrait = index % 2 === 0;
  const aspect = isPortrait ? CHAIN_PORTRAIT_ASPECT : CHAIN_LANDSCAPE_ASPECT;
  const sizeContrastNorm = ( attributes.sizeContrast || 0 ) / 100;
  const heightScale = isPortrait ? ( 1 - CHAIN_CONTRAST_K * sizeContrastNorm ) : 1;
  const height = Math.round( CHAIN_BASE_HEIGHT * heightScale );
  const width = Math.round( height * aspect );

  return { width, height };
};

export class GridItemCollection {

  constructor( images, attributes ) {

    if ( isChainArrangement( attributes ) ) {
      this.buildChain( images, attributes );
      return;
    }

    this.buildGrid( images, attributes );
  }

  // Classic grid placement — unchanged from the original implementation.
  buildGrid( images, attributes ) {
    const placementVariation = attributes.placementVariation / 25 - 1;

    this.gridItems = images.map( ( image, index ) => {
      const groupStart = Math.floor( index / 4 ) * 4;
      const groupEnd = Math.min( groupStart + 4, images.length );
      const isGroupOfThree = groupEnd - groupStart === 3;

      return new GridItem( image, index, attributes, isGroupOfThree );
    } );

    this.removeExtra();

    if ( placementVariation === 1 || placementVariation === 3 ) {
      this.flipX();
    }

    if ( placementVariation === 2 || placementVariation === 3 ) {
      this.flipY();
    }
  }

  // Corner-chain placement. Each item carries its own (non-square) span; the
  // chain steps diagonally, and elementsDistance / positionShift shape the
  // meeting corner. Mirrors reuse the same flipX / flipY as the grid.
  buildChain( images, attributes ) {
    const placementVariation = attributes.placementVariation / 25 - 1;
    const gap = Math.round( ( attributes.elementsDistance || 0 ) / CHAIN_GAP_DIVISOR );
    const slide = Math.round( ( ( attributes.positionShift || 0 ) / 100 ) * CHAIN_SHIFT_MAX );

    this.gridItems = images.map( ( image, index ) =>
      new GridItem( image, index, attributes, false, 'chain' ) );

    // Cumulative stepping: item i's top-left corner meets item i-1's
    // bottom-right corner (offset by the gap), then slides along the edge.
    this.gridItems.forEach( ( item, index ) => {
      if ( index === 0 ) {
        item.x = 1;
        item.y = 1;
        return;
      }

      const prev = this.gridItems[ index - 1 ];
      item.x = prev.x + prev.width + gap - slide;
      item.y = prev.y + prev.height + gap;
    } );

    this.normalizeChain();

    if ( placementVariation === 1 || placementVariation === 3 ) {
      this.flipX();
    }

    if ( placementVariation === 2 || placementVariation === 3 ) {
      this.flipY();
    }
  }

  // Shift the whole chain so its top-left grid line sits at (1, 1). Unlike the
  // grid's removeExtra, there is no group-of-four stacking to unwind here.
  normalizeChain() {
    const minX = Math.min( ...this.gridItems.map( gridItem => gridItem.x ) );
    const minY = Math.min( ...this.gridItems.map( gridItem => gridItem.y ) );

    this.gridItems.forEach( gridItem => {
      gridItem.x = gridItem.x - minX + 1;
      gridItem.y = gridItem.y - minY + 1;
    } );
  }

  removeExtra() {
    const extraLeft = this.getExtraLeft();
    const extraTop = this.getExtraTop();
    const extraBetween = this.getExtraBetween();

    this.gridItems = this.gridItems.map( ( gridItem, index ) => {
      const groupIndex = Math.floor( index / 4 );

      gridItem.x = gridItem.x - extraLeft;
      gridItem.y = gridItem.y - extraTop - groupIndex * extraBetween;

      return gridItem;
    } );
  }

  flipX() {
    const maxX = Math.max( ...this.gridItems.map( gridItem => gridItem.x + gridItem.width ) );

    this.gridItems = this.gridItems.map( ( gridItem, index ) => {
      gridItem.x = maxX - gridItem.x - gridItem.width + 1;
      return gridItem;
    } );
  }

  flipY() {
    const maxY = Math.max( ...this.gridItems.map( gridItem => gridItem.y + gridItem.height ) );

    this.gridItems = this.gridItems.map( ( gridItem, index ) => {
      gridItem.y = maxY - gridItem.y - gridItem.height + 1;
      return gridItem;
    } );
  }

  getExtraLeft() {
    return Math.min( ...this.gridItems.map( gridItem => gridItem.x ) ) - 1;
  }

  getExtraTop() {
    return Math.min( ...this.gridItems.map( gridItem => gridItem.y ) ) - 1;
  }

  getExtraBetween() {
    const firstGroup = this.gridItems.slice( 0, 4 );
    const maxBottom = Math.max( ...firstGroup.map( gridItem => gridItem.y + gridItem.height ) );

    return GRID_ITEM_SIZE * 2 - maxBottom + 1;
  }
}

export class GridItem {

  constructor( image, index, attributes, isGroupOfThree, arrangement = 'grid' ) {
    this.sizeContrast = attributes.sizeContrast / 20;
    this.positionShift = attributes.positionShift / 5;
    this.objectPosition = attributes.objectPosition;
    this.imageResizing = attributes.imageResizing;
    this.imageRotation = attributes.imageRotation;

    this.image = image;
    this.index = index;

    // Chain items carry a per-item (non-square) span and are positioned by the
    // collection's cumulative stepping pass; the constructor only resolves the
    // size here. col / row alternate so getImageStyle() can still resolve
    // objectPosition (odd items read as the mirrored cell).
    if ( arrangement === 'chain' ) {
      this.col = index % 2;
      this.row = index % 2;

      const { width, height } = getChainItemSize( index, attributes );

      this.width = width;
      this.height = height;

      return;
    }

    this.idx = this.getIndex( index );
    this.col = this.idx % 2;
    this.row = Math.floor( index / 2 );

    if ( !! isGroupOfThree ) {

      if ( index === 0 ) {
        this.positionShift = Math.min( this.positionShift, 10 );
      }

      if ( index === 2 ) {
        this.positionShift = Math.max( this.positionShift, 10 );
      }

    }

    let { offsetX, offsetY } = this.getOffsets();
    const size = GRID_ITEM_SIZE - this.sizeContrast * ( index % 4 );

    this.x = GRID_ITEM_SIZE * this.col + 1 + offsetX;
    this.y = GRID_ITEM_SIZE * this.row + 1 + offsetY;

    this.width = size;
    this.height = size;
  }

  getOffsets() {
    const { row, col, index, sizeContrast, positionShift } = this;

    // offset for positioning
    let offsetX = ( 1 - col % 2 ) * ( index % 4 ) * sizeContrast;
    let offsetY = ( 1 - row % 2 ) * ( index % 4 ) * sizeContrast;

    // offset from offset
    // move 1st to right
    offsetX += ( 1 - col % 2 ) * ( 1 - row % 2 ) * positionShift;
    // move 3rd to left
    offsetX -= ( col % 2 ) * ( row % 2 ) * positionShift;
    // move 2nd down
    offsetY -= ( 1 - col % 2 ) * ( row % 2 ) * positionShift;
    // move 4th up
    offsetY += ( col % 2 ) * ( 1 - row % 2 ) * positionShift;

    return {
      offsetX,
      offsetY,
    }
  }

  // reoder to display items clockwise
  getIndex( index ) {
    if ( index % 4 === 3 ) return index - 1;
    if ( index % 4 === 2 ) return index + 1;

    return index;
  }

  getStyle() {
    const { index, x, y, width, height, imageRotation } = this;
    const rotation = `rotate(${ ( index % 2 - 0.5 ) * imageRotation / 10 }deg)`;

    return {
      gridColumnStart: x + '',
      gridColumnEnd: `span ${ width }`,
      gridRowStart: y + '',
      gridRowEnd: `span ${ height }`,
      transform: rotation,
    };
  }

  getImageStyle() {
    const { row, col, objectPosition, imageResizing } = this;
    const positionY = row % 2 === 0 ? 100 - objectPosition : objectPosition;
    const positionX = col % 2 === 0 ? 100 - objectPosition : objectPosition;

    return {
      objectFit: imageResizing === 'cropped' ? 'cover' : 'scale-down',
      objectPosition: `${ positionX }% ${ positionY }%`,
    }
  }
}
