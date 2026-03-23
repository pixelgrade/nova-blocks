const test = require('node:test');
const assert = require('node:assert/strict');

const {
  shouldRealignForMutations,
} = require('./aligned-blocks-subscription');

const createElementNode = ( options = {} ) => ( {
  nodeType: 1,
  className: options.className || '',
  matches: ( selector ) => {
    const classes = new Set( ( options.className || '' ).split( /\s+/ ).filter( Boolean ) );
    return selector
      .split( ',' )
      .map( entry => entry.trim().replace( /^\./, '' ) )
      .some( className => classes.has( className ) );
  },
  querySelector: () => options.containsRelevant ? {} : null,
} );

test('ignores text-only child list mutations', () => {
  const mutations = [
    {
      type: 'childList',
      addedNodes: [ { nodeType: 3 } ],
      removedNodes: [],
    },
  ];

  assert.equal( shouldRealignForMutations( mutations ), false );
} );

test('re-aligns when block structure changes with element nodes', () => {
  const mutations = [
    {
      type: 'childList',
      addedNodes: [ createElementNode() ],
      removedNodes: [],
    },
  ];

  assert.equal( shouldRealignForMutations( mutations ), true );
} );

test('re-aligns when an align-related class changes', () => {
  const mutations = [
    {
      type: 'attributes',
      attributeName: 'class',
      oldValue: 'wp-block-group',
      target: createElementNode( { className: 'wp-block-group alignwide' } ),
    },
  ];

  assert.equal( shouldRealignForMutations( mutations ), true );
} );

test('ignores unrelated class changes', () => {
  const mutations = [
    {
      type: 'attributes',
      attributeName: 'class',
      oldValue: 'wp-block-group',
      target: createElementNode( { className: 'wp-block-group is-selected' } ),
    },
  ];

  assert.equal( shouldRealignForMutations( mutations ), false );
} );

test('ignores break-align bookkeeping class changes', () => {
  const mutations = [
    {
      type: 'attributes',
      attributeName: 'class',
      oldValue: 'wp-block-group alignwide break-align-left',
      target: createElementNode( { className: 'wp-block-group alignwide break-align-left break-align-right' } ),
    },
  ];

  assert.equal( shouldRealignForMutations( mutations ), false );
} );
