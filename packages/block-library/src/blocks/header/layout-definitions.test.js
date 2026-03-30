const test = require('node:test');
const assert = require('node:assert/strict');

const {
  HEADER_LAYOUT_DEFINITIONS,
} = require('./layout-definitions');

test('exports the five header layout definitions used by the chooser', () => {
  assert.deepEqual(
    HEADER_LAYOUT_DEFINITIONS.map( ( definition ) => definition.name ),
    [
      'logo-left',
      'logo-left-center-right',
      'logo-center',
      'logo-center-two-rows',
      'logo-center-three-rows',
    ]
  );
} );

test('provides short chooser titles and descriptions for each layout', () => {
  assert.deepEqual(
    HEADER_LAYOUT_DEFINITIONS.map( ( definition ) => ( {
      name: definition.name,
      title: definition.title,
      description: definition.description,
    } ) ),
    [
      {
        name: 'logo-left',
        title: 'Logo Left',
        description: 'Logo on the left with a single navigation on the right.',
      },
      {
        name: 'logo-left-center-right',
        title: 'Split Nav',
        description: 'Logo on the left with one navigation in the center and another on the right.',
      },
      {
        name: 'logo-center',
        title: 'Centered Logo',
        description: 'Centered logo with a navigation on each side.',
      },
      {
        name: 'logo-center-two-rows',
        title: 'Two Rows',
        description: 'Centered logo row above a full-width primary navigation row.',
      },
      {
        name: 'logo-center-three-rows',
        title: 'Three Rows',
        description: 'Top secondary navigation, centered logo row, and primary navigation below.',
      },
    ]
  );
} );

test('keeps the structural block templates attached to each definition', () => {
  HEADER_LAYOUT_DEFINITIONS.forEach( ( definition ) => {
    assert.ok( definition.attributes );
    assert.ok( Array.isArray( definition.innerBlocks ) );
    assert.ok( definition.innerBlocks.length > 0 );
  } );
} );
