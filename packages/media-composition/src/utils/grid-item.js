const GRID_ITEM_SIZE = 20;

// --- Editorial Pair (corner-stagger) preset ---------------------------------
//
// A curated 2-image formation (formation.bio "pair" anatomy): a smaller
// portrait image pinned top-left and a larger landscape image shifted right +
// dropped so that image 2's top-left corner meets image 1's bottom-right
// corner exactly. It reinterprets the shared attributes:
//
//   elementsDistance -> DIAGONAL offset at the meeting corner
//                       ( 0 = corners touch, + = gap, - = overlap )
//   sizeContrast     -> how much smaller image 1 is than image 2
//   placementVariation -> the four mirror forms (handled generically by the
//                         collection's flipX/flipY, unchanged)
//
// The layout is expressed in the SAME integer grid-line space used by the
// classic math, but the two items carry per-item (non-square) spans, which is
// the aspect extension of GridItem. This branch is purely additive: it only
// runs when `stylePreset === EDITORIAL_PAIR_PRESET` AND there are exactly two
// images; every other composition falls through to the untouched classic math.
export const EDITORIAL_PAIR_PRESET = 'editorial-pair';

// Large item (image 2): landscape 4:3, the fixed anchor of the pair.
const EDITORIAL_LARGE_WIDTH = 44;
const EDITORIAL_LARGE_HEIGHT = 33;
// Small item (image 1): portrait; width derived from height by this ratio.
const EDITORIAL_SMALL_ASPECT = 0.65;
// How strongly sizeContrast (0..100) shrinks the small item's height.
const EDITORIAL_CONTRAST_K = 0.4;
// elementsDistance (px-ish) -> diagonal offset in grid units.
const EDITORIAL_OFFSET_DIVISOR = 10;

export const isEditorialPair = ( attributes, imageCount ) =>
  attributes?.stylePreset === EDITORIAL_PAIR_PRESET && imageCount === 2;

// Returns the un-normalized { x, y, width, height } for an editorial item in
// its base (small-top-left) orientation. index 0 = small, index 1 = large.
export const getEditorialPlacement = ( index, attributes ) => {
  const sizeContrast = attributes.sizeContrast || 0;
  const elementsDistance = attributes.elementsDistance || 0;

  const smallHeight = Math.round(
    EDITORIAL_LARGE_HEIGHT * ( 1 - EDITORIAL_CONTRAST_K * ( sizeContrast / 100 ) )
  );
  const smallWidth = Math.round( smallHeight * EDITORIAL_SMALL_ASPECT );

  // Diagonal offset at the meeting corner. 0 = corners touch exactly.
  const offset = Math.round( elementsDistance / EDITORIAL_OFFSET_DIVISOR );

  if ( index === 0 ) {
    return { x: 1, y: 1, width: smallWidth, height: smallHeight };
  }

  // Image 2's top-left corner meets image 1's bottom-right corner ( + offset ).
  return {
    x: 1 + smallWidth + offset,
    y: 1 + smallHeight + offset,
    width: EDITORIAL_LARGE_WIDTH,
    height: EDITORIAL_LARGE_HEIGHT,
  };
};

export class GridItemCollection {

  constructor( images, attributes ) {
    const placementVariation = attributes.placementVariation / 25 - 1;
    const editorial = isEditorialPair( attributes, images.length );

    this.gridItems = images.map( ( image, index ) => {
      const groupStart = Math.floor( index / 4 ) * 4;
      const groupEnd = Math.min( groupStart + 4, images.length );
      const isGroupOfThree = groupEnd - groupStart === 3;

      return new GridItem( image, index, attributes, isGroupOfThree, editorial );
    } );

    this.removeExtra();

    if ( placementVariation === 1 || placementVariation === 3 ) {
      this.flipX();
    }

    if ( placementVariation === 2 || placementVariation === 3 ) {
      this.flipY();
    }
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

  constructor( image, index, attributes, isGroupOfThree, editorial = false ) {
    this.sizeContrast = attributes.sizeContrast / 20;
    this.positionShift = attributes.positionShift / 5;
    this.objectPosition = attributes.objectPosition;
    this.imageResizing = attributes.imageResizing;
    this.imageRotation = attributes.imageRotation;

    this.image = image;
    this.index = index;

    // Editorial Pair takes an entirely separate placement path. It still needs
    // col/row so getImageStyle() can resolve objectPosition; the small item
    // reads as the top-left cell (col 0/row 0), the large item as the
    // bottom-right cell (col 1/row 1).
    if ( editorial ) {
      this.col = index % 2;
      this.row = index % 2;

      const placement = getEditorialPlacement( index, attributes );

      this.x = placement.x;
      this.y = placement.y;
      this.width = placement.width;
      this.height = placement.height;

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
