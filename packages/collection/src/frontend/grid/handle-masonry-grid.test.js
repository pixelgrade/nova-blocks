/**
 * @jest-environment jsdom
 */

jest.mock( '@novablocks/utils', () => ( {
  addClass: ( element, className ) => element.classList.add( className ),
  removeClass: ( element, className ) => element.classList.remove( className ),
  below: jest.fn( () => false ),
  calculateFitColumnCount: ( {
    containerWidth,
    columnGap = 0,
    minColumnWidth = 0,
    maxColumns = 1,
  } ) => {
    const normalizedMax = Math.max( parseInt( maxColumns, 10 ) || 1, 1 );
    const normalizedMinWidth = Number.parseFloat( minColumnWidth );

    if ( ! Number.isFinite( normalizedMinWidth ) || normalizedMinWidth <= 0 ) {
      return normalizedMax;
    }

    const normalizedWidth = Math.max( Number.parseFloat( containerWidth ) || 0, 0 );
    const normalizedGap = Math.max( Number.parseFloat( columnGap ) || 0, 0 );
    const fitting = Math.floor( ( normalizedWidth + normalizedGap ) / ( normalizedMinWidth + normalizedGap ) );

    return Math.min( Math.max( fitting, 1 ), normalizedMax );
  },
} ) );

import { handleMasonryGrid } from './handle-masonry-grid';

const rectangle = ( { width = 0, height = 0 } = {} ) => ( {
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
      this.unobserved = [];
      this.disconnected = false;
      resizeObservers.push( this );
    }

    observe( element ) {
      this.observed.add( element );
    }

    unobserve( element ) {
      this.observed.delete( element );
      this.unobserved.push( element );
    }

    disconnect() {
      this.disconnected = true;
      this.observed.clear();
    }

    trigger() {
      this.callback( [] );
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

const createFixture = ( doc, { width = 410, heights = [ 100, 100, 10 ] } = {} ) => {
  const block = doc.createElement( 'section' );
  const grid = doc.createElement( 'div' );

  block.dataset.layoutStyle = 'masonry';
  grid.className = 'nb-collection__layout nb-collection__layout--masonry';
  grid.style.columnGap = '10px';
  grid.style.rowGap = '20px';
  grid.getBoundingClientRect = () => rectangle( { width } );

  heights.forEach( ( height, index ) => {
    const item = doc.createElement( 'div' );
    item.className = 'nb-collection__layout-item';
    item.dataset.itemIndex = String( index );
    item.dataset.itemHeight = String( height );
    item.getBoundingClientRect = () => rectangle( {
      width: Number.parseFloat( item.style.width ) || width,
      height: Number.parseFloat( item.dataset.itemHeight ),
    } );
    grid.appendChild( item );
  } );

  block.appendChild( grid );
  doc.body.appendChild( block );

  return { block, grid, items: Array.from( grid.children ) };
};

describe( 'handleMasonryGrid', () => {
  let animationFrames;
  let fontListeners;
  let observerHarness;
  let originalDocumentFonts;
  let originalMutationObserver;
  let originalMatchMedia;
  let originalResizeObserver;
  let originalWindowMutationObserver;
  let originalWindowResizeObserver;

  const flushPromises = () => Promise.resolve().then( () => Promise.resolve() );

  const flushAnimationFrames = () => {
    const callbacks = Array.from( animationFrames.values() );
    animationFrames.clear();
    callbacks.forEach( callback => callback() );
  };

  beforeEach( () => {
    document.body.innerHTML = '';
    animationFrames = new Map();
    fontListeners = new Map();
    observerHarness = createObserverHarness();
    originalResizeObserver = global.ResizeObserver;
    originalMutationObserver = global.MutationObserver;
    originalWindowResizeObserver = window.ResizeObserver;
    originalWindowMutationObserver = window.MutationObserver;
    originalMatchMedia = window.matchMedia;
    originalDocumentFonts = Object.getOwnPropertyDescriptor( document, 'fonts' );

    let nextFrameId = 1;
    window.requestAnimationFrame = jest.fn( callback => {
      const frameId = nextFrameId;
      nextFrameId += 1;
      animationFrames.set( frameId, callback );
      return frameId;
    } );
    window.cancelAnimationFrame = jest.fn( frameId => animationFrames.delete( frameId ) );
    window.ResizeObserver = observerHarness.ResizeObserverHarness;
    window.MutationObserver = observerHarness.MutationObserverHarness;
    window.matchMedia = jest.fn( () => ( {
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    } ) );
    global.ResizeObserver = observerHarness.ResizeObserverHarness;
    global.MutationObserver = observerHarness.MutationObserverHarness;
    Object.defineProperty( document, 'fonts', {
      configurable: true,
      value: {
        addEventListener: jest.fn( ( eventName, callback ) => fontListeners.set( eventName, callback ) ),
        removeEventListener: jest.fn( ( eventName, callback ) => {
          if ( fontListeners.get( eventName ) === callback ) {
            fontListeners.delete( eventName );
          }
        } ),
      },
    } );
  } );

  afterEach( () => {
    global.ResizeObserver = originalResizeObserver;
    global.MutationObserver = originalMutationObserver;
    window.ResizeObserver = originalWindowResizeObserver;
    window.MutationObserver = originalWindowMutationObserver;
    window.matchMedia = originalMatchMedia;

    if ( originalDocumentFonts ) {
      Object.defineProperty( document, 'fonts', originalDocumentFonts );
    } else {
      delete document.fonts;
    }
  } );

  test( 'uses one observer and preserves strict source-order shortest-column placement', async () => {
    const { block, grid, items } = createFixture( document );
    const eventOrder = [];
    window.addEventListener( 'nb:masonry-layout', () => eventOrder.push( 'detailed' ), { once: true } );
    window.addEventListener( 'nb:layout', () => eventOrder.push( 'base' ), { once: true } );

    const controller = handleMasonryGrid( grid, block, { columns: 2 } );

    await flushPromises();
    flushAnimationFrames();

    expect( controller ).toEqual( expect.objectContaining( {
      destroy: expect.any( Function ),
      layout: expect.any( Function ),
      refresh: expect.any( Function ),
      update: expect.any( Function ),
    } ) );
    expect( observerHarness.resizeObservers ).toHaveLength( 1 );
    expect( observerHarness.resizeObservers[ 0 ].observed ).toEqual( new Set( [ grid, ...items ] ) );
    expect( items.map( item => item.style.transform ) ).toEqual( [
      'translate(0px, 0px)',
      'translate(210px, 0px)',
      'translate(0px, 120px)',
    ] );
    expect( items.map( item => item.classList.contains( 'nb-collection__layout-item--col-0' ) ) ).toEqual( [ true, false, true ] );
    expect( grid.style.height ).toBe( '130px' );
    expect( eventOrder ).toEqual( [ 'detailed', 'base' ] );
  } );

  test( 'observes appended items and refreshes without destructive reinitialization', async () => {
    const { block, grid, items } = createFixture( document );
    const firstController = handleMasonryGrid( grid, block, { columns: 2 } );

    await flushPromises();
    flushAnimationFrames();
    const prefixTransforms = items.map( item => item.style.transform );
    const appendedItem = document.createElement( 'div' );
    appendedItem.className = 'nb-collection__layout-item';
    appendedItem.dataset.itemHeight = '50';
    appendedItem.getBoundingClientRect = () => rectangle( {
      width: Number.parseFloat( appendedItem.style.width ) || 410,
      height: 50,
    } );
    grid.appendChild( appendedItem );

    expect( observerHarness.mutationObservers[ 0 ].options ).toEqual( expect.objectContaining( {
      attributes: true,
      childList: true,
      subtree: true,
    } ) );
    observerHarness.mutationObservers[ 0 ].trigger( [ { addedNodes: [ appendedItem ] } ] );
    flushAnimationFrames();

    expect( observerHarness.resizeObservers[ 0 ].observed.has( appendedItem ) ).toBe( true );
    expect( appendedItem.style.position ).toBe( 'absolute' );
    expect( items.map( item => item.style.transform ) ).toEqual( prefixTransforms );

    const secondController = handleMasonryGrid( grid, block, { columns: 2 } );
    expect( secondController ).toBe( firstController );
    expect( observerHarness.resizeObservers ).toHaveLength( 1 );
    expect( observerHarness.resizeObservers[ 0 ].disconnected ).toBe( false );

    grid.removeChild( appendedItem );
    observerHarness.mutationObservers[ 0 ].trigger( [ { removedNodes: [ appendedItem ] } ] );
    expect( observerHarness.resizeObservers[ 0 ].unobserved ).toContain( appendedItem );
    expect( appendedItem.style.position ).toBe( '' );
    expect( appendedItem.style.transform ).toBe( '' );
  } );

  test( 'waits for pending media and treats image errors and decode failures as settled', async () => {
    const { block, grid, items } = createFixture( document );
    const pendingImage = document.createElement( 'img' );
    Object.defineProperty( pendingImage, 'complete', { configurable: true, value: false } );
    items[ 0 ].appendChild( pendingImage );

    const controller = handleMasonryGrid( grid, block, { columns: 2 } );
    await flushPromises();
    expect( animationFrames.size ).toBe( 0 );

    pendingImage.dispatchEvent( new Event( 'error' ) );
    await flushPromises();
    expect( animationFrames.size ).toBe( 1 );
    flushAnimationFrames();
    expect( grid.classList.contains( 'nb-collection__layout--masonry-ready' ) ).toBe( true );
    controller.destroy();

    const secondFixture = createFixture( document );
    const decodedImage = document.createElement( 'img' );
    Object.defineProperty( decodedImage, 'complete', { configurable: true, value: true } );
    decodedImage.decode = jest.fn( () => Promise.reject( new Error( 'decode failed' ) ) );
    secondFixture.items[ 0 ].appendChild( decodedImage );
    handleMasonryGrid( secondFixture.grid, secondFixture.block, { columns: 2 } );

    await flushPromises();
    expect( decodedImage.decode ).toHaveBeenCalledTimes( 1 );
    expect( animationFrames.size ).toBe( 1 );
  } );

  test( 'coalesces resize, mutation, font, and transition signals into one frame', async () => {
    const { block, grid, items } = createFixture( document );
    handleMasonryGrid( grid, block, { columns: 2 } );

    await flushPromises();
    flushAnimationFrames();

    observerHarness.resizeObservers[ 0 ].trigger();
    observerHarness.mutationObservers[ 0 ].trigger();
    fontListeners.get( 'loadingdone' )();
    const transitionEvent = new Event( 'transitionend', { bubbles: true } );
    Object.defineProperty( transitionEvent, 'propertyName', { value: 'height' } );
    items[ 0 ].dispatchEvent( transitionEvent );

    expect( animationFrames.size ).toBe( 1 );
  } );

  test( 'teardown removes all lifecycle work and restores ordinary flow', async () => {
    const { block, grid, items } = createFixture( document );
    const controller = handleMasonryGrid( grid, block, { columns: 2 } );

    await flushPromises();
    flushAnimationFrames();
    controller.refresh();
    expect( animationFrames.size ).toBe( 1 );

    controller.destroy();

    expect( animationFrames.size ).toBe( 0 );
    expect( observerHarness.resizeObservers[ 0 ].disconnected ).toBe( true );
    expect( observerHarness.mutationObservers[ 0 ].disconnected ).toBe( true );
    expect( document.fonts.removeEventListener ).toHaveBeenCalledWith( 'loadingdone', expect.any( Function ) );
    expect( fontListeners.has( 'loadingdone' ) ).toBe( false );
    expect( grid.__nbMasonryLayoutController ).toBeUndefined();
    expect( grid.__nbDestroyMasonryLayout ).toBeUndefined();
    expect( grid.style.height ).toBe( '' );
    expect( grid.classList.contains( 'nb-collection__layout--masonry-ready' ) ).toBe( false );
    items.forEach( item => {
      expect( item.style.position ).toBe( '' );
      expect( item.style.width ).toBe( '' );
      expect( item.style.transform ).toBe( '' );
    } );
  } );

  test( 'restores one-column flow and dispatches reset events in order', async () => {
    const { block, grid, items } = createFixture( document );
    const controller = handleMasonryGrid( grid, block, { columns: 2 } );

    await flushPromises();
    flushAnimationFrames();
    const eventOrder = [];
    window.addEventListener( 'nb:masonry-layout', event => eventOrder.push( `detailed:${ event.detail.activeColumns }` ), { once: true } );
    window.addEventListener( 'nb:layout', () => eventOrder.push( 'base' ), { once: true } );
    grid.getBoundingClientRect = () => rectangle( { width: 300 } );

    controller.update( block, { columns: 4, columnsFitMinWidth: 350 } ).refresh();
    flushAnimationFrames();

    expect( grid.style.height ).toBe( '' );
    expect( grid.classList.contains( 'nb-collection__layout--masonry-ready' ) ).toBe( false );
    expect( items.every( item => item.style.position === '' && item.style.transform === '' ) ).toBe( true );
    expect( eventOrder ).toEqual( [ 'detailed:1', 'base' ] );
  } );

  test( 'uses the grid owner document realm for observers, frames, styles, and events', async () => {
    const iframe = document.createElement( 'iframe' );
    document.body.appendChild( iframe );
    const ownerDocument = iframe.contentDocument;
    const ownerWindow = iframe.contentWindow;
    const realmObservers = createObserverHarness();
    const realmFrames = new Map();
    let nextFrameId = 1;
    let detailedEvents = 0;

    ownerWindow.ResizeObserver = realmObservers.ResizeObserverHarness;
    ownerWindow.MutationObserver = realmObservers.MutationObserverHarness;
    ownerWindow.requestAnimationFrame = callback => {
      const frameId = nextFrameId;
      nextFrameId += 1;
      realmFrames.set( frameId, callback );
      return frameId;
    };
    ownerWindow.cancelAnimationFrame = frameId => realmFrames.delete( frameId );
    const { block, grid } = createFixture( ownerDocument );
    ownerWindow.addEventListener( 'nb:masonry-layout', () => {
      detailedEvents += 1;
    } );

    const controller = handleMasonryGrid( grid, block, { columns: 2 } );
    await flushPromises();
    const callbacks = Array.from( realmFrames.values() );
    realmFrames.clear();
    callbacks.forEach( callback => callback() );

    expect( realmObservers.resizeObservers ).toHaveLength( 1 );
    expect( observerHarness.resizeObservers ).toHaveLength( 0 );
    expect( detailedEvents ).toBe( 1 );
    controller.destroy();
    iframe.remove();
  } );

  test( 'uses the grid owner window breakpoint for non-fit masonry columns', async () => {
    const iframe = document.createElement( 'iframe' );
    document.body.appendChild( iframe );
    const ownerDocument = iframe.contentDocument;
    const ownerWindow = iframe.contentWindow;
    const realmObservers = createObserverHarness();
    const realmFrames = new Map();
    let nextFrameId = 1;

    ownerWindow.ResizeObserver = realmObservers.ResizeObserverHarness;
    ownerWindow.MutationObserver = realmObservers.MutationObserverHarness;
    ownerWindow.requestAnimationFrame = callback => {
      const frameId = nextFrameId;
      nextFrameId += 1;
      realmFrames.set( frameId, callback );
      return frameId;
    };
    ownerWindow.cancelAnimationFrame = frameId => realmFrames.delete( frameId );
    ownerWindow.matchMedia = jest.fn( () => ( {
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    } ) );
    const { block, grid, items } = createFixture( ownerDocument );

    handleMasonryGrid( grid, block, { columns: 2 } );
    await flushPromises();
    const callbacks = Array.from( realmFrames.values() );
    realmFrames.clear();
    callbacks.forEach( callback => callback() );

    expect( ownerWindow.matchMedia ).toHaveBeenCalledWith( '(min-width: 768px)' );
    expect( grid.style.height ).toBe( '' );
    expect( items.every( item => item.style.position === '' && item.style.transform === '' ) ).toBe( true );
    iframe.remove();
  } );
} );
