/**
 * SVG schematic thumbnails for visual preset cards and layout-style tiles.
 *
 * These are deliberately simplified projections — enough for an editor to
 * compare layouts at a glance, not pixel-accurate renders. The parametric
 * projection mirrors the engine's vocabulary (featured area, side-column
 * fragmentation, hierarchy crossing) without depending on the real engine.
 *
 * Accent cells read the active drawer accent so thumbnails follow each
 * section's color, like the rest of the drawer chrome.
 */

const THUMB_WIDTH = 60;
const THUMB_HEIGHT = 40;
const GAP = 2;

const BASE_FILL = 'var(--nb-preset-thumb-base, #c6c6d0)';
const ACCENT_FILL = 'var(--nb-section-controls-accent, #de1651)';

const clamp = ( value, min, max ) => Math.max( min, Math.min( max, value ) );

// Deterministic tiny PRNG so thumbnails never flicker between renders.
const mulberry32 = ( seed ) => {
  let a = seed | 0;

  return () => {
    a = ( a + 0x6D2B79F5 ) | 0;
    let t = Math.imul( a ^ ( a >>> 15 ), 1 | a );
    t = ( t + Math.imul( t ^ ( t >>> 7 ), 61 | t ) ) ^ t;
    return ( ( t ^ ( t >>> 14 ) ) >>> 0 ) / 4294967296;
  };
};

const Thumb = ( { children } ) => (
  <svg
    className="nb-preset-thumb"
    viewBox={ `0 0 ${ THUMB_WIDTH } ${ THUMB_HEIGHT }` }
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    { children }
  </svg>
);

const Cell = ( { x, y, width, height, accent = false } ) => (
  <rect
    x={ x }
    y={ y }
    width={ Math.max( 1, width ) }
    height={ Math.max( 1, height ) }
    rx="1.2"
    fill={ accent ? ACCENT_FILL : BASE_FILL }
    opacity={ accent ? 0.9 : 0.85 }
  />
);

export const ClassicThumb = ( { columns = 3, count = 6 } ) => {
  const cols = clamp( columns, 1, 4 );
  const rows = Math.max( 1, Math.ceil( count / cols ) );
  const cellWidth = ( THUMB_WIDTH - GAP * ( cols + 1 ) ) / cols;
  const cellHeight = ( THUMB_HEIGHT - GAP * ( rows + 1 ) ) / rows;
  const cells = [];

  for ( let i = 0; i < count; i++ ) {
    const c = i % cols;
    const r = Math.floor( i / cols );
    cells.push(
      <Cell
        key={ i }
        x={ GAP + c * ( cellWidth + GAP ) }
        y={ GAP + r * ( cellHeight + GAP ) }
        width={ cellWidth }
        height={ cellHeight }
      />
    );
  }

  return <Thumb>{ cells }</Thumb>;
};

export const MasonryThumb = ( { columns = 3 } ) => {
  const cols = clamp( columns, 2, 4 );
  const cellWidth = ( THUMB_WIDTH - GAP * ( cols + 1 ) ) / cols;
  const heightPatterns = [ [ 16, 20 ], [ 24, 12 ], [ 12, 24 ], [ 20, 16 ] ];
  const cells = [];

  for ( let c = 0; c < cols; c++ ) {
    let y = GAP;
    heightPatterns[ c % heightPatterns.length ].forEach( ( height, i ) => {
      cells.push(
        <Cell
          key={ `${ c }-${ i }` }
          x={ GAP + c * ( cellWidth + GAP ) }
          y={ y }
          width={ cellWidth }
          height={ height }
        />
      );
      y += height + GAP;
    } );
  }

  return <Thumb>{ cells }</Thumb>;
};

export const CarouselThumb = ( { visible = 3, variable = false } ) => {
  const widths = variable
    ? [ 22, 13, 18, 22 ]
    : Array( 4 ).fill( ( THUMB_WIDTH - GAP * 3 ) / clamp( visible, 1, 4 ) );
  const cells = [];
  let x = 1;

  widths.forEach( ( width, i ) => {
    cells.push( <Cell key={ i } x={ x } y={ 6 } width={ width } height={ 28 } /> );
    x += width + GAP;
  } );

  return <Thumb>{ cells }</Thumb>;
};

/**
 * Simplified projection of a parametric preset: a virtual cols×rows grid with
 * the featured area, an optional sub-feature underneath, fragmented side
 * columns, and hierarchy-crossing stagger.
 */
export const ParametricThumb = ( { preset = {} } ) => {
  const cols = clamp( preset.gridcolumns || 6, 2, 12 );
  const rows = clamp( preset.gridrows || 6, 2, 12 );
  const featureSize = clamp( preset.featuresize || 4, 2, cols );
  const featurePosition = clamp( preset.featureposition || 1, 1, cols - featureSize + 1 );
  const fragmentation = clamp( preset.fragmentation || 0, 0, 3 );
  const crossing = clamp( preset.hierarchycrossing || 0, 0, 200 );
  const featureRows = clamp( Math.round( rows * ( preset.boostfeature ? 0.75 : 0.55 ) ), 2, rows );

  const seed = [ cols, rows, featureSize, featurePosition, fragmentation, crossing ]
    .reduce( ( acc, value ) => ( acc * 31 + Math.round( value * 7 ) + 7 ) | 0, 11 );
  const random = mulberry32( seed );

  const cellWidth = ( THUMB_WIDTH - 1.5 * ( cols + 1 ) ) / cols;
  const cellHeight = ( THUMB_HEIGHT - 1.5 * ( rows + 1 ) ) / rows;
  const cellX = ( column ) => 1.5 + ( column - 1 ) * ( cellWidth + 1.5 );
  const cellY = ( row ) => 1.5 + ( row - 1 ) * ( cellHeight + 1.5 );
  const spanWidth = ( span ) => span * cellWidth + ( span - 1 ) * 1.5;
  const spanHeight = ( span ) => span * cellHeight + ( span - 1 ) * 1.5;

  const cells = [ {
    c: featurePosition, r: 1, cs: featureSize, rs: featureRows, accent: true,
  } ];

  // Under the featured area: optional sub-feature plus smaller cells.
  if ( featureRows < rows ) {
    let startColumn = featurePosition;
    const endColumn = featurePosition + featureSize - 1;

    if ( preset.subfeature ) {
      const subWidth = Math.min( Math.max( 2, Math.round( featureSize / 2 ) ), featureSize );
      cells.push( { c: featurePosition, r: featureRows + 1, cs: subWidth, rs: rows - featureRows } );
      startColumn = featurePosition + subWidth;
    }

    for ( let c = startColumn; c <= endColumn; ) {
      const width = Math.min( 2, endColumn - c + 1 );
      const parts = clamp( 1 + Math.round( random() * fragmentation * 0.7 ), 1, 3 );
      const height = ( rows - featureRows ) / parts;

      for ( let p = 0; p < parts; p++ ) {
        cells.push( {
          c, r: featureRows + Math.round( p * height ) + 1, cs: width, rs: Math.max( 1, Math.round( height ) ),
        } );
      }

      c += width;
    }
  }

  // Side columns fragment into stacked cells.
  const sideColumns = [];
  for ( let c = 1; c < featurePosition; c++ ) sideColumns.push( c );
  for ( let c = featurePosition + featureSize; c <= cols; c++ ) sideColumns.push( c );

  const splits = clamp( 1 + fragmentation, 1, 4 );
  sideColumns.forEach( ( column ) => {
    const parts = clamp( Math.round( splits - random() * 1.4 ), 1, 4 );
    const height = rows / parts;

    for ( let p = 0; p < parts; p++ ) {
      cells.push( {
        c: column, r: Math.round( p * height ) + 1, cs: 1, rs: Math.max( 1, Math.round( height ) ),
      } );
    }
  } );

  return (
    <Thumb>
      { cells.map( ( cell, index ) => {
        const stagger = cell.accent ? 0 : ( index % 2 ? 1 : -1 ) * ( crossing / 200 ) * 3;

        return (
          <Cell
            key={ index }
            x={ cellX( cell.c ) }
            y={ cellY( cell.r ) + stagger }
            width={ spanWidth( Math.min( cell.cs, cols - cell.c + 1 ) ) }
            height={ spanHeight( Math.min( cell.rs, rows - cell.r + 1 ) ) }
            accent={ cell.accent }
          />
        );
      } ) }
    </Thumb>
  );
};

/**
 * The stacked-depth look: a grid where alternating cards sit visibly inset,
 * hinting at the 3D scale + parallax pairing.
 */
export const DepthThumb = () => {
  const cols = 3;
  const rows = 2;
  const cellWidth = ( THUMB_WIDTH - GAP * ( cols + 1 ) ) / cols;
  const cellHeight = ( THUMB_HEIGHT - GAP * ( rows + 1 ) ) / rows;
  const cells = [];

  for ( let i = 0; i < cols * rows; i++ ) {
    const c = i % cols;
    const r = Math.floor( i / cols );
    const inset = i % 2 === 0 ? 3 : 0;

    cells.push(
      <Cell
        key={ i }
        x={ GAP + c * ( cellWidth + GAP ) + inset }
        y={ GAP + r * ( cellHeight + GAP ) + inset }
        width={ cellWidth - 2 * inset }
        height={ cellHeight - 2 * inset }
        accent={ i % 2 === 0 }
      />
    );
  }

  return <Thumb>{ cells }</Thumb>;
};

/**
 * The randomizer card: a fixed collage that reads as "your own mix".
 */
export const JustMyStyleThumb = () => (
  <Thumb>
    <Cell x={ 2 } y={ 2 } width={ 26 } height={ 36 } accent />
    <Cell x={ 31 } y={ 2 } width={ 12 } height={ 17 } />
    <Cell x={ 46 } y={ 2 } width={ 12 } height={ 17 } />
    <Cell x={ 31 } y={ 22 } width={ 27 } height={ 16 } />
  </Thumb>
);

/* ---------- motion recipe glyphs (Motion & Effects) ----------
 * The SUBJECT is the picture: arrows inside one card's media area mean the
 * image moves; whole cards drifting mean the cards themselves move.
 */

const VArrow = ( { x, from, to } ) => {
  const direction = to < from ? -1 : 1;

  return (
    <g>
      <line x1={ x } y1={ from } x2={ x } y2={ to - 3 * direction } stroke={ ACCENT_FILL } strokeWidth="1.6" />
      <polygon
        points={ `${ x - 2.6 },${ to - 3 * direction } ${ x + 2.6 },${ to - 3 * direction } ${ x },${ to }` }
        fill={ ACCENT_FILL }
      />
    </g>
  );
};

const MediaCardFrame = () => (
  <g>
    <rect x="8" y="4" width="44" height="22" rx="1.5" fill={ BASE_FILL } opacity="0.85" />
    <rect x="8" y="30" width="30" height="3" rx="1.5" fill={ BASE_FILL } opacity="0.55" />
    <rect x="8" y="35" width="20" height="3" rx="1.5" fill={ BASE_FILL } opacity="0.4" />
  </g>
);

/**
 * One card, the media inside it marked with the motion the recipe applies.
 * kind: 'static' | 'parallax' | 'doppler' | 'zoom' | 'reveal'
 */
export const MediaMotionThumb = ( { kind = 'static' } ) => (
  <Thumb>
    <MediaCardFrame />
    { 'parallax' === kind && <VArrow x={ 30 } from={ 22 } to={ 8 } /> }
    { 'doppler' === kind && (
      <g>
        <VArrow x={ 24 } from={ 22 } to={ 8 } />
        <VArrow x={ 36 } from={ 8 } to={ 22 } />
      </g>
    ) }
    { 'zoom' === kind && (
      <g>
        <circle cx="30" cy="15" r="5.5" fill="none" stroke={ ACCENT_FILL } strokeWidth="1.6" />
        <line x1="34" y1="19" x2="39" y2="24" stroke={ ACCENT_FILL } strokeWidth="1.6" />
      </g>
    ) }
    { 'reveal' === kind && (
      <g>
        <rect x="8" y="4" width="44" height="9" fill={ BASE_FILL } />
        <VArrow x={ 30 } from={ 23 } to={ 13 } />
      </g>
    ) }
    { 'static' === kind && <circle cx="30" cy="15" r="2" fill={ BASE_FILL } /> }
  </Thumb>
);

/**
 * Three whole cards drifting at different speeds — motion on the cards
 * themselves (the stacked-depth recipe).
 */
export const CardsMotionThumb = () => (
  <Thumb>
    <Cell x={ 4 } y={ 9 } width={ 13 } height={ 23 } />
    <Cell x={ 23 } y={ 4 } width={ 13 } height={ 23 } accent />
    <Cell x={ 42 } y={ 12 } width={ 13 } height={ 23 } />
    <VArrow x={ 10.5 } from={ 21 } to={ 13 } />
    <VArrow x={ 29.5 } from={ 14 } to={ 22 } />
    <VArrow x={ 48.5 } from={ 25 } to={ 17 } />
  </Thumb>
);
