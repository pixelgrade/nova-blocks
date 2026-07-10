import { findPracticeBlocks, derivePracticeSteps } from './derive-steps';

const makeIntro = ( attributes = {} ) => ( {
  clientId: 'intro-client-id',
  name: 'core/group',
  attributes: {
    className: 'is-nb-practice-intro',
    colorSignal: 3,
    palette: '1',
    ...attributes,
  },
  innerBlocks: [],
} );

const makeCta = ( attributes = {} ) => ( {
  clientId: 'cta-client-id',
  name: 'core/group',
  attributes: {
    className: 'is-nb-practice-cta',
    palette: '1',
    ...attributes,
  },
  innerBlocks: [],
} );

const makeSection = ( intro = makeIntro(), cta = makeCta() ) => ( {
  clientId: 'wrapper-client-id',
  name: 'core/group',
  attributes: { className: 'is-nb-practice-section', align: 'wide' },
  innerBlocks: [ intro, cta ].filter( Boolean ),
} );

const freshBaseline = { intro: '1', cta: '1' };

describe( 'findPracticeBlocks', () => {

  test( 'finds the wrapper at the top level and the intro/cta groups inside it', () => {
    const intro = makeIntro();
    const cta = makeCta();
    const wrapper = makeSection( intro, cta );
    const blocks = [ { name: 'core/paragraph', attributes: {}, innerBlocks: [] }, wrapper ];

    expect( findPracticeBlocks( blocks ) ).toEqual( { wrapper, intro, cta } );
  } );

  test( 'still finds intro/cta at the top level if the user ungrouped the wrapper', () => {
    const intro = makeIntro();
    const cta = makeCta();

    expect( findPracticeBlocks( [ intro, cta ] ) ).toEqual( { wrapper: null, intro, cta } );
  } );

  test( 'returns nulls when no practice blocks exist', () => {
    expect( findPracticeBlocks( [ { name: 'core/group', attributes: { className: 'plain' }, innerBlocks: [] } ] ) )
      .toEqual( { wrapper: null, intro: null, cta: null } );
    expect( findPracticeBlocks( [] ) ).toEqual( { wrapper: null, intro: null, cta: null } );
    expect( findPracticeBlocks() ).toEqual( { wrapper: null, intro: null, cta: null } );
  } );

  test( 'ignores non-group blocks carrying a stray marker class', () => {
    const blocks = [
      { name: 'core/paragraph', attributes: { className: 'is-nb-practice-intro' }, innerBlocks: [] },
    ];

    expect( findPracticeBlocks( blocks ).intro ).toBeNull();
  } );

  test( 'does not match marker names as substrings of longer class names', () => {
    const blocks = [
      { name: 'core/group', attributes: { className: 'is-nb-practice-intro-custom' }, innerBlocks: [] },
    ];

    expect( findPracticeBlocks( blocks ).intro ).toBeNull();
  } );

} );

describe( 'derivePracticeSteps', () => {

  test( 'a freshly inserted practice section has no completed steps', () => {
    const steps = derivePracticeSteps( {
      intro: makeIntro(),
      cta: makeCta(),
      paletteBaseline: freshBaseline,
    } );

    expect( steps ).toEqual( {
      introQuiet: false,
      ctaHigh: false,
      paletteSwitched: false,
      complete: false,
    } );
  } );

  test( 'lowering the intro to None completes the first step, including string attribute values', () => {
    expect( derivePracticeSteps( {
      intro: makeIntro( { colorSignal: 0 } ),
      cta: makeCta(),
      paletteBaseline: freshBaseline,
    } ).introQuiet ).toBe( true );

    expect( derivePracticeSteps( {
      intro: makeIntro( { colorSignal: '0' } ),
      cta: makeCta(),
      paletteBaseline: freshBaseline,
    } ).introQuiet ).toBe( true );
  } );

  test( 'raising the call-to-action to High completes the second step', () => {
    expect( derivePracticeSteps( {
      intro: makeIntro(),
      cta: makeCta( { colorSignal: 3 } ),
      paletteBaseline: freshBaseline,
    } ).ctaHigh ).toBe( true );
  } );

  test( 'an absent colorSignal attribute counts as None and never produces NaN', () => {
    // Groups carry no explicit colorSignal until the user touches the control.
    expect( derivePracticeSteps( {
      intro: makeIntro( { colorSignal: undefined } ),
      cta: makeCta(),
      paletteBaseline: freshBaseline,
    } ).introQuiet ).toBe( true );
  } );

  test( 'switching the palette on either block completes the palette step', () => {
    expect( derivePracticeSteps( {
      intro: makeIntro( { palette: '2' } ),
      cta: makeCta(),
      paletteBaseline: freshBaseline,
    } ).paletteSwitched ).toBe( true );

    expect( derivePracticeSteps( {
      intro: makeIntro(),
      cta: makeCta( { palette: '3' } ),
      paletteBaseline: freshBaseline,
    } ).paletteSwitched ).toBe( true );
  } );

  test( 'a missing palette baseline re-arms the palette step instead of completing it', () => {
    expect( derivePracticeSteps( {
      intro: makeIntro( { palette: '2' } ),
      cta: makeCta( { palette: '3' } ),
      paletteBaseline: null,
    } ).paletteSwitched ).toBe( false );
  } );

  test( 'complete only when all three steps are done', () => {
    const allDone = {
      intro: makeIntro( { colorSignal: 0 } ),
      cta: makeCta( { colorSignal: 3, palette: '2' } ),
      paletteBaseline: freshBaseline,
    };

    expect( derivePracticeSteps( allDone ).complete ).toBe( true );

    expect( derivePracticeSteps( {
      ...allDone,
      intro: makeIntro( { colorSignal: 2 } ),
    } ).complete ).toBe( false );
  } );

  test( 'missing blocks never throw and leave their steps incomplete', () => {
    expect( derivePracticeSteps( { intro: null, cta: null, paletteBaseline: null } ) ).toEqual( {
      introQuiet: false,
      ctaHigh: false,
      paletteSwitched: false,
      complete: false,
    } );
  } );

} );
