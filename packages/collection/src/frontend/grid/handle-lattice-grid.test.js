/**
 * @jest-environment jsdom
 */

import fs from 'fs';

jest.mock( '@novablocks/utils', () => ( {
  addClass: ( element, className ) => element.classList.add( className ),
  removeClass: ( element, className ) => element.classList.remove( className ),
} ) );

import { calculateLatticeGeometry, handleLatticeGrid } from './handle-lattice-grid';

const rectangle = ( width = 0, height = 0 ) => ( {
  x: 0,
  y: 0,
  top: 0,
  right: width,
  bottom: height,
  left: 0,
  width,
  height,
  toJSON: () => ( {} ),
} );

const createObserverHarness = () => {
  const resizeObservers = [];
  const mutationObservers = [];

  class ResizeObserverHarness {
    constructor( callback ) {
      this.callback = callback;
      this.observed = new Set();
      this.disconnected = false;
      resizeObservers.push( this );
    }

    observe( element ) {
      this.observed.add( element );
    }

    disconnect() {
      this.disconnected = true;
      this.observed.clear();
    }

    trigger( entries = [] ) {
      this.callback( entries );
    }
  }

  class MutationObserverHarness {
    constructor( callback ) {
      this.callback = callback;
      this.disconnected = false;
      mutationObservers.push( this );
    }

    observe( element, options ) {
      this.element = element;
      this.options = options;
      this.disconnected = false;
    }

    disconnect() {
      this.disconnected = true;
    }

    trigger( records = [] ) {
      this.callback( records );
    }
  }

  return {
    MutationObserverHarness,
    ResizeObserverHarness,
    mutationObservers,
    resizeObservers,
  };
};

const createFixture = ( {
  width = 1074,
  captionHeights = [],
  classes = [
    'is-sticky-post',
    'nb-card--media-wide',
    'nb-card--media-landscape',
    'nb-card--media-square',
    'nb-card--no-media',
  ],
} = {} ) => {
  const block = document.createElement( 'section' );
  const grid = document.createElement( 'div' );

  block.className = 'nb-supernova--card-layout-vertical';
  block.dataset.layoutStyle = 'classic';
  block.dataset.layoutStrategy = 'lattice';
  grid.className = 'nb-collection__layout';
  grid.style.columnGap = '26px';
  grid.style.rowGap = '26px';
  grid.style.setProperty( '--nb-lattice-caption-height', '50px' );
  let renderedWidth = width;
  grid.getBoundingClientRect = () => rectangle( renderedWidth );

  classes.forEach( ( className, index ) => {
    const card = document.createElement( 'article' );
    card.className = `nb-collection__layout-item ${ className }`;
    card.dataset.cardId = String.fromCharCode( 97 + index );

    if ( captionHeights[ index ] ) {
      const caption = document.createElement( 'div' );
      caption.className = 'nb-supernova-item__content--contains-title';
      Object.defineProperty( caption, 'scrollHeight', {
        configurable: true,
        get: () => 'function' === typeof captionHeights[ index ] ?
          captionHeights[ index ]() : captionHeights[ index ],
      } );
      card.appendChild( caption );
    }

    grid.appendChild( card );
  } );

  block.appendChild( grid );
  document.body.appendChild( block );

  return {
    block,
    grid,
    items: Array.from( grid.children ),
    setRenderedWidth: nextWidth => {
      renderedWidth = nextWidth;
    },
  };
};

describe( 'handleLatticeGrid', () => {
  let animationFrames;
  let nextFrameId;
  let observerHarness;
  let originalInnerWidth;
  let originalMutationObserver;
  let originalResizeObserver;

  const flushAnimationFrames = () => {
    const callbacks = Array.from( animationFrames.values() );
    animationFrames.clear();
    callbacks.forEach( callback => callback() );
  };

  beforeEach( () => {
    document.body.innerHTML = '';
    animationFrames = new Map();
    nextFrameId = 1;
    observerHarness = createObserverHarness();
    originalResizeObserver = window.ResizeObserver;
    originalMutationObserver = window.MutationObserver;
    originalInnerWidth = Object.getOwnPropertyDescriptor( window, 'innerWidth' );

    window.requestAnimationFrame = jest.fn( callback => {
      const frameId = nextFrameId++;
      animationFrames.set( frameId, callback );
      return frameId;
    } );
    window.cancelAnimationFrame = jest.fn( frameId => animationFrames.delete( frameId ) );
    window.ResizeObserver = observerHarness.ResizeObserverHarness;
    window.MutationObserver = observerHarness.MutationObserverHarness;
    Object.defineProperty( window, 'innerWidth', { configurable: true, value: 1280 } );
  } );

  afterEach( () => {
    document.querySelectorAll( '.nb-collection__layout' ).forEach( grid => {
      if ( 'function' === typeof grid.__nbDestroyLatticeLayout ) {
        grid.__nbDestroyLatticeLayout();
      }
    } );
    window.ResizeObserver = originalResizeObserver;
    window.MutationObserver = originalMutationObserver;

    if ( originalInnerWidth ) {
      Object.defineProperty( window, 'innerWidth', originalInnerWidth );
    }
  } );

  test( 'reorders DOM into visual placement order and emits detailed then generic events', () => {
    const { block, grid, items } = createFixture();
    const events = [];
    let detail;
    window.addEventListener( 'nb:lattice-layout', event => {
      events.push( 'detailed' );
      detail = event.detail;
    }, { once: true } );
    window.addEventListener( 'nb:layout', () => events.push( 'generic' ), { once: true } );

    const controller = handleLatticeGrid( grid, block, { columns: 4 } );
    flushAnimationFrames();

    expect( controller ).toEqual( expect.objectContaining( {
      destroy: expect.any( Function ),
      layout: expect.any( Function ),
      refresh: expect.any( Function ),
      update: expect.any( Function ),
    } ) );
    expect( Array.from( grid.children ).map( child => child.dataset.cardId ) )
      .toEqual( [ 'a', 'c', 'd', 'e', 'b' ] );
    expect( items[2].style.gridColumn ).toBe( '3 / span 2' );
    expect( items[2].style.gridRow ).toBe( '1 / span 1' );
    expect( grid.style.gridTemplateColumns ).toBe( 'repeat(4, minmax(0, 1fr))' );
    expect( Number.parseFloat( grid.style.gridAutoRows ) ).toBeCloseTo( 382 );
    expect( detail ).toEqual( expect.objectContaining( {
      activeColumns: 4,
      columnWidth: 249,
      rowHeight: 382,
      grid,
      block,
    } ) );
    expect( detail.placements[1] ).toEqual( expect.objectContaining( {
      item: items[2],
      pulledForward: true,
    } ) );
    expect( events ).toEqual( [ 'detailed', 'generic' ] );
    expect( grid.classList.contains( 'nb-collection__layout--lattice-ready' ) ).toBe( true );
    expect( block.classList.contains( 'novablocks-block--ready' ) ).toBe( true );
  } );

  test.each( [
    [ 'portrait', 382 ],
    [ 'square', 299 ],
    [ 'landscape', 249.2 ],
  ] )( 'uses the %s shared module shape while preserving the caption shelf', ( moduleShape, expectedRowHeight ) => {
    expect( calculateLatticeGeometry( {
      containerWidth: 1074,
      columnCount: 4,
      columnGap: 26,
      captionHeight: 50,
      moduleShape,
    } ).rowHeight ).toBeCloseTo( expectedRowHeight );
  } );

  test( 'passes every authored Fine-tune value into geometry and placement', () => {
    const { block, grid, items } = createFixture( {
      classes: [
        'is-sticky-post',
        'nb-card--media-wide',
        'nb-card--media-tall',
      ],
    } );
    let detail;
    window.addEventListener( 'nb:lattice-layout', event => {
      detail = event.detail;
    }, { once: true } );

    handleLatticeGrid( grid, block, {
      columns: 5,
      latticeModuleShape: 'square',
      latticePackingWindow: 0,
      latticeStickyFeatureSize: 1,
      latticeTallMediaSpan: 1,
      latticePanoramaSpan: 2,
    } );
    flushAnimationFrames();

    expect( detail.moduleShape ).toBe( 'square' );
    expect( detail.rowHeight ).toBeCloseTo( 244 );
    expect( detail.placements.map( placement => [
      placement.item,
      placement.columnSpan,
      placement.rowSpan,
    ] ) ).toEqual( [
      [ items[0], 1, 1 ],
      [ items[1], 2, 1 ],
      [ items[2], 1, 1 ],
    ] );
  } );

  test( 'progresses through three and two tablet columns before the one-module phone flow', () => {
    const { block, grid, items, setRenderedWidth } = createFixture( { width: 900 } );
    let detail;
    window.addEventListener( 'nb:lattice-layout', event => {
      detail = event.detail;
    } );

    Object.defineProperty( window, 'innerWidth', { configurable: true, value: 900 } );
    const controller = handleLatticeGrid( grid, block, { columns: 5 } );
    flushAnimationFrames();

    expect( detail.activeColumns ).toBe( 3 );
    expect( grid.style.gridTemplateColumns ).toBe( 'repeat(3, minmax(0, 1fr))' );
    expect( items[0].style.gridColumn ).toBe( '1 / span 2' );
    expect( items[3].style.gridColumn ).toBe( '3 / span 1' );

    setRenderedWidth( 700 );
    Object.defineProperty( window, 'innerWidth', { configurable: true, value: 700 } );
    window.dispatchEvent( new Event( 'resize' ) );
    flushAnimationFrames();

    expect( detail.activeColumns ).toBe( 2 );
    expect( grid.style.gridTemplateColumns ).toBe( 'repeat(2, minmax(0, 1fr))' );

    setRenderedWidth( 375 );
    Object.defineProperty( window, 'innerWidth', { configurable: true, value: 375 } );
    window.dispatchEvent( new Event( 'resize' ) );

    expect( animationFrames.size ).toBe( 1 );
    flushAnimationFrames();

    expect( detail.activeColumns ).toBe( 1 );
    expect( Array.from( grid.children ) ).toEqual( items );
    items.forEach( card => {
      expect( card.style.gridColumn ).toBe( '1 / span 1' );
      expect( card.style.gridRow ).toMatch( /^\d+ \/ span 1$/ );
    } );
  } );

  test( 'uses the rendered Site Editor canvas instead of a misleading outer window width', () => {
    const { block, grid } = createFixture( { width: 900 } );
    let detail;
    window.addEventListener( 'nb:lattice-layout', event => {
      detail = event.detail;
    }, { once: true } );

    Object.defineProperty( window, 'innerWidth', { configurable: true, value: 375 } );
    handleLatticeGrid( grid, block, { columns: 5 } );
    flushAnimationFrames();

    expect( detail.activeColumns ).toBe( 3 );
    expect( grid.style.gridTemplateColumns ).toBe( 'repeat(3, minmax(0, 1fr))' );
  } );

  test( 'ignores height-only grid resizes after layout while retaining width reactivity', () => {
    const { block, grid, setRenderedWidth } = createFixture( { width: 1074 } );
    let layoutCount = 0;
    window.addEventListener( 'nb:lattice-layout', () => {
      layoutCount++;
    } );

    handleLatticeGrid( grid, block, { columns: 5 } );
    flushAnimationFrames();

    expect( layoutCount ).toBe( 1 );

    observerHarness.resizeObservers[0].trigger( [ {
      target: grid,
      contentRect: rectangle( 1074, 2400 ),
    } ] );

    expect( animationFrames.size ).toBe( 0 );
    expect( layoutCount ).toBe( 1 );

    setRenderedWidth( 900 );
    observerHarness.resizeObservers[0].trigger( [ {
      target: grid,
      contentRect: rectangle( 900, 2400 ),
    } ] );

    expect( animationFrames.size ).toBe( 1 );
    flushAnimationFrames();
    expect( layoutCount ).toBe( 2 );
  } );

  test( 'settles a responsive caption measurement once after the rendered width changes', () => {
    let measuredCaptionHeight = 50;
    const { block, grid, setRenderedWidth } = createFixture( {
      width: 1074,
      captionHeights: [ () => measuredCaptionHeight ],
    } );
    const captionHeights = [];
    window.addEventListener( 'nb:lattice-layout', event => {
      captionHeights.push( event.detail.captionHeight );
    } );

    handleLatticeGrid( grid, block, { columns: 5 } );
    flushAnimationFrames();

    expect( captionHeights ).toEqual( [ 50 ] );

    setRenderedWidth( 375 );
    measuredCaptionHeight = 271;
    window.dispatchEvent( new Event( 'resize' ) );
    flushAnimationFrames();

    expect( captionHeights ).toEqual( [ 50, 271 ] );
    expect( animationFrames.size ).toBe( 1 );

    measuredCaptionHeight = 82;
    flushAnimationFrames();

    expect( captionHeights ).toEqual( [ 50, 271, 82 ] );
    expect( grid.style.getPropertyValue( '--nb-lattice-caption-height' ) ).toBe( '82px' );
    expect( animationFrames.size ).toBe( 0 );

    flushAnimationFrames();
    expect( captionHeights ).toEqual( [ 50, 271, 82 ] );
  } );

  test( 'ignores its own ready-class mutation but retains card classification reactivity', () => {
    const { block, grid, items } = createFixture();

    handleLatticeGrid( grid, block, { columns: 5 } );
    flushAnimationFrames();

    observerHarness.mutationObservers[0].trigger( [ {
      type: 'attributes',
      target: grid,
      attributeName: 'class',
      oldValue: grid.className,
    } ] );

    expect( animationFrames.size ).toBe( 0 );

    const oldClassName = items[1].className;
    items[1].classList.add( 'nb-card--media-tall' );
    observerHarness.mutationObservers[0].trigger( [ {
      type: 'attributes',
      target: items[1],
      attributeName: 'class',
      oldValue: oldClassName,
    } ] );

    expect( animationFrames.size ).toBe( 1 );
  } );

  test( 'measures one shared caption shelf from real title regions before calculating rows', () => {
    const { block, grid } = createFixture( {
      captionHeights: [ 80, 250, 90, 120, 400 ],
    } );
    let detail;
    window.addEventListener( 'nb:lattice-layout', event => {
      detail = event.detail;
    }, { once: true } );

    const controller = handleLatticeGrid( grid, block, { columns: 4 } );
    flushAnimationFrames();

    expect( detail.captionHeight ).toBe( 250 );
    expect( grid.style.getPropertyValue( '--nb-lattice-caption-height' ) ).toBe( '250px' );
    expect( Number.parseFloat( grid.style.gridAutoRows ) ).toBeCloseTo( 582 );

    controller.destroy();
    expect( grid.style.getPropertyValue( '--nb-lattice-caption-height' ) ).toBe( '' );
  } );

  test( 'accepts an updated explicit content order for retained and inserted editor cards', () => {
    const { block, grid, items } = createFixture();
    items.forEach( ( item, index ) => {
      item.dataset.nbLatticeSourceIndex = String( index );
    } );
    const controller = handleLatticeGrid( grid, block, { columns: 4 } );
    flushAnimationFrames();

    const inserted = document.createElement( 'article' );
    inserted.className = 'nb-collection__layout-item nb-card--media-square';
    inserted.dataset.cardId = 'f';
    grid.appendChild( inserted );

    [ items[2], inserted, items[0], items[1], items[3], items[4] ].forEach( ( item, index ) => {
      item.dataset.nbLatticeSourceIndex = String( index );
    } );
    controller.refresh();
    flushAnimationFrames();
    controller.destroy();

    expect( Array.from( grid.children ).map( child => child.dataset.cardId ) )
      .toEqual( [ 'c', 'f', 'a', 'b', 'd', 'e' ] );
  } );

  test( 'captures appended Load More cards in source order and relayouts through one observer frame', () => {
    const { block, grid, items } = createFixture();
    const controller = handleLatticeGrid( grid, block, { columns: 4 } );
    flushAnimationFrames();

    const appended = document.createElement( 'article' );
    appended.className = 'nb-collection__layout-item nb-card--media-square';
    appended.dataset.cardId = 'f';
    grid.appendChild( appended );
    observerHarness.mutationObservers[0].trigger( [ { addedNodes: [ appended ] } ] );

    expect( animationFrames.size ).toBe( 1 );
    flushAnimationFrames();

    expect( observerHarness.resizeObservers[0].observed ).toEqual( new Set( [ grid ] ) );
    controller.destroy();
    expect( Array.from( grid.children ) ).toEqual( [ ...items, appended ] );
  } );

  test( 'destroy cancels observers, restores source order, and removes every inline placement', () => {
    const { block, grid, items } = createFixture();
    const controller = handleLatticeGrid( grid, block, { columns: 4 } );
    flushAnimationFrames();

    controller.destroy();

    expect( Array.from( grid.children ) ).toEqual( items );
    expect( observerHarness.resizeObservers[0].disconnected ).toBe( true );
    expect( observerHarness.mutationObservers[0].disconnected ).toBe( true );
    expect( grid.style.gridTemplateColumns ).toBe( '' );
    expect( grid.style.gridAutoRows ).toBe( '' );
    expect( grid.classList.contains( 'nb-collection__layout--lattice-ready' ) ).toBe( false );
    window.dispatchEvent( new Event( 'resize' ) );
    expect( animationFrames.size ).toBe( 0 );
    items.forEach( card => {
      expect( card.style.gridColumn ).toBe( '' );
      expect( card.style.gridRow ).toBe( '' );
    } );
  } );

  test( 'frontend initialization gives the recipe strategy precedence over Classic', () => {
    const source = fs.readFileSync( require.resolve( './index' ), 'utf8' );

    expect( source ).toMatch( /layoutStrategy[^\n]*lattice|lattice[^\n]*layoutStrategy/ );
    expect( source ).toMatch( /handleLatticeGrid/ );
  } );
} );
