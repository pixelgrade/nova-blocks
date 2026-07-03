import {
  collectSaveGuardedValues,
  hasLockedRenderGatedValues,
  hasRevertedSaveGuardedValues,
  valuesMatch,
} from './analyze';

const PLUS = {
  locked: {
    advanced_block_controls: true,
    motion_controls: true,
  },
  gates: {
    'parametric-layout': {
      entitlement: 'advanced_block_controls',
      enforcement: 'render',
      blocks: [ 'novablocks/supernova' ],
      attributes: [ 'layoutStyle' ],
      gatedValues: { layoutStyle: [ 'parametric' ] },
      defaults: { layoutStyle: 'classic' },
    },
    'pile-3d-grid': {
      entitlement: 'advanced_block_controls',
      enforcement: 'save-guard',
      blocks: [ 'novablocks/supernova' ],
      attributes: [ 'pile3dEffect', 'pile3dTarget', 'pile3dTargetRule' ],
      defaults: { pile3dEffect: false, pile3dTarget: 'item', pile3dTargetRule: 'odd' },
    },
    doppler: {
      entitlement: 'motion_controls',
      enforcement: 'save-guard',
      blocks: [ 'novablocks/supernova', 'novablocks/supernova-item' ],
      attributes: [ 'scrollingEffect' ],
      gatedValues: { scrollingEffect: [ 'doppler' ] },
      defaults: { scrollingEffect: 'static' },
    },
    'motion-presets': {
      entitlement: 'motion_controls',
      enforcement: 'render',
      blocks: [ 'novablocks/supernova' ],
      attributes: [
        'motionPreset',
        'focalPoint',
        'finalFocalPoint',
        'initialBackgroundScale',
        'finalBackgroundScale',
        'followThroughStart',
        'followThroughEnd',
      ],
      defaults: {},
    },
  },
};

const MOTION_PRESETS = [
  {
    value: 'standard-dynamic',
    preset: {
      focalPoint: { x: 0.5, y: 0 },
      finalFocalPoint: { x: 0.5, y: 1 },
      initialBackgroundScale: 1.75,
      finalBackgroundScale: 1,
      followThroughStart: true,
      followThroughEnd: true,
    },
  },
  { value: 'custom' },
];

// Editor-shaped block (name/attributes); parsed shape (blockName/attrs) is
// exercised in the saved-tree arguments below.
const editorBlock = ( attributes, name = 'novablocks/supernova', innerBlocks = [] ) => ( {
  name,
  attributes,
  innerBlocks,
} );

const parsedBlock = ( attrs, blockName = 'novablocks/supernova', innerBlocks = [] ) => ( {
  blockName,
  attrs,
  innerBlocks,
} );

describe( 'valuesMatch', () => {
  test( 'matches numbers loosely and objects recursively', () => {
    expect( valuesMatch( 1.75, '1.75' ) ).toBe( true );
    expect( valuesMatch( { x: 0.5, y: 0 }, { x: '0.5', y: 0 } ) ).toBe( true );
    expect( valuesMatch( { x: 0.5, y: 0 }, { x: 0.5, y: 1 } ) ).toBe( false );
    expect( valuesMatch( true, 1 ) ).toBe( true );
    expect( valuesMatch( 'doppler', 'parallax' ) ).toBe( false );
  } );
} );

describe( 'hasRevertedSaveGuardedValues', () => {
  test( 'flags newly authored gated values missing from the saved entity', () => {
    const editor = [ editorBlock( { pile3dEffect: true } ) ];

    expect( hasRevertedSaveGuardedValues( editor, [], PLUS ) ).toBe( true );
  } );

  test( 'stays silent for grandfathered values present in the saved entity', () => {
    const editor = [ editorBlock( { scrollingEffect: 'doppler', pile3dEffect: true } ) ];
    const saved = [ parsedBlock( { scrollingEffect: 'doppler', pile3dEffect: true } ) ];

    expect( hasRevertedSaveGuardedValues( editor, saved, PLUS ) ).toBe( false );
  } );

  test( 'ignores free values under a gate with explicit gatedValues', () => {
    const editor = [ editorBlock( { scrollingEffect: 'parallax' } ) ];

    expect( hasRevertedSaveGuardedValues( editor, [], PLUS ) ).toBe( false );
  } );

  test( 'ignores gated features turned back to their defaults', () => {
    const editor = [ editorBlock( { pile3dEffect: false, pileParallaxAmount: 0 } ) ];

    expect( hasRevertedSaveGuardedValues( editor, [], PLUS ) ).toBe( false );
  } );

  test( 'walks nested inner blocks', () => {
    const editor = [
      editorBlock( {}, 'core/query', [
        editorBlock( { scrollingEffect: 'doppler' }, 'novablocks/supernova-item' ),
      ] ),
    ];

    expect( hasRevertedSaveGuardedValues( editor, [], PLUS ) ).toBe( true );
  } );

  test( 'does nothing when the entitlement is unlocked', () => {
    const unlocked = { ...PLUS, locked: { advanced_block_controls: false, motion_controls: false } };
    const editor = [ editorBlock( { pile3dEffect: true } ) ];

    expect( hasRevertedSaveGuardedValues( editor, [], unlocked ) ).toBe( false );
  } );
} );

describe( 'hasLockedRenderGatedValues', () => {
  test( 'flags persisted parametric layouts', () => {
    const saved = [ parsedBlock( { layoutStyle: 'parametric' } ) ];

    expect( hasLockedRenderGatedValues( saved, PLUS, MOTION_PRESETS ) ).toBe( true );
  } );

  test( 'ignores free layout styles', () => {
    const saved = [ parsedBlock( { layoutStyle: 'masonry' } ) ];

    expect( hasLockedRenderGatedValues( saved, PLUS, MOTION_PRESETS ) ).toBe( false );
  } );

  test( 'flags doppler frames that match a named preset bundle', () => {
    const saved = [
      parsedBlock( {
        scrollingEffect: 'doppler',
        motionPreset: 'standard-dynamic',
        focalPoint: { x: 0.5, y: 0 },
        finalFocalPoint: { x: 0.5, y: 1 },
        initialBackgroundScale: 1.75,
        finalBackgroundScale: 1,
        followThroughStart: true,
        followThroughEnd: true,
      } ),
    ];

    expect( hasLockedRenderGatedValues( saved, PLUS, MOTION_PRESETS ) ).toBe( true );
  } );

  test( 'ignores custom frames and inert preset names (the Mies/Pile shapes)', () => {
    const custom = [
      parsedBlock( { scrollingEffect: 'doppler', motionPreset: 'custom', initialBackgroundScale: 1.4 } ),
    ];
    const inertName = [
      parsedBlock( { scrollingEffect: 'doppler', motionPreset: 'standard-dynamic', initialBackgroundScale: 1.4 } ),
    ];

    expect( hasLockedRenderGatedValues( custom, PLUS, MOTION_PRESETS ) ).toBe( false );
    expect( hasLockedRenderGatedValues( inertName, PLUS, MOTION_PRESETS ) ).toBe( false );
  } );
} );

describe( 'collectSaveGuardedValues', () => {
  test( 'collects persisted gated values per attribute', () => {
    const saved = [
      parsedBlock( { scrollingEffect: 'doppler' } ),
      parsedBlock( { pile3dEffect: true }, 'novablocks/supernova' ),
    ];

    const values = collectSaveGuardedValues( saved, PLUS );

    expect( values.scrollingEffect ).toEqual( [ 'doppler' ] );
    expect( values.pile3dEffect ).toEqual( [ true ] );
  } );
} );
