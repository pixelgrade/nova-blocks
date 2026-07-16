const test = require('node:test');
const assert = require('node:assert/strict');

const {
  HEADER_LAYOUT_DEFINITIONS,
} = require('./layout-definitions');

test('exports the six header layout definitions used by the chooser', () => {
  assert.deepEqual(
    HEADER_LAYOUT_DEFINITIONS.map( ( definition ) => definition.name ),
    [
      'logo-left',
      'logo-left-center-right',
      'logo-center',
      'logo-center-two-rows',
      'logo-center-three-rows',
      'editorial-masthead',
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
      {
        name: 'editorial-masthead',
        title: 'Editorial Masthead',
        description: 'Fitted text wordmark and ruled tagline above the primary navigation.',
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

const collectBlockNames = ( blocks ) => {
  const names = [];

  blocks.forEach( ( entry ) => {
    if ( ! Array.isArray( entry ) ) {
      return;
    }

    const [ name, , children ] = entry;

    if ( typeof name === 'string' ) {
      names.push( name );
    }

    if ( Array.isArray( children ) ) {
      names.push( ...collectBlockNames( children ) );
    }
  } );

  return names;
};

test('keeps image-logo layouts on the inline-editable core/site-logo', () => {
  HEADER_LAYOUT_DEFINITIONS
    .filter( ( definition ) => definition.name !== 'editorial-masthead' )
    .forEach( ( definition ) => {
      const names = collectBlockNames( definition.innerBlocks );

      assert.ok(
        names.includes( 'core/site-logo' ),
        `${ definition.name } should use core/site-logo`
      );
      assert.ok(
        ! names.includes( 'novablocks/logo' ),
        `${ definition.name } should not use the legacy novablocks/logo`
      );
    } );
} );

const findBlock = ( blocks, targetName ) => {
  for ( const entry of blocks ) {
    if ( ! Array.isArray( entry ) ) {
      continue;
    }

    const [ name, attributes = {}, children = [] ] = entry;
    if ( name === targetName ) {
      return { name, attributes, children };
    }

    const childMatch = findBlock( children, targetName );
    if ( childMatch ) {
      return childMatch;
    }
  }

  return null;
};

test('composes the Editorial Masthead from semantic identity blocks and reusable styles', () => {
  const definition = HEADER_LAYOUT_DEFINITIONS.find( ( item ) => item.name === 'editorial-masthead' );
  const identity = findBlock( definition.innerBlocks, 'novablocks/site-identity' );
  const title = findBlock( definition.innerBlocks, 'core/site-title' );
  const tagline = findBlock( definition.innerBlocks, 'core/site-tagline' );
  const rows = definition.innerBlocks.filter( ( [ name ] ) => name === 'novablocks/header-row' );

  assert.equal( definition.icon, 'logoCenterTwoRows' );
  assert.equal( identity.attributes.identityWidth, 395 );
  assert.equal( title.attributes.level, 0 );
  assert.equal( title.attributes.fitText, true );
  assert.equal( title.attributes.fitTextWidth, 800 );
  assert.match( title.attributes.className, /\bis-style-wordmark\b/ );
  assert.equal( title.attributes.style.typography.letterSpacing, '-0.055em' );
  assert.match( tagline.attributes.className, /\bis-style-ruled-label\b/ );
  assert.equal( tagline.attributes.style.typography.letterSpacing, '0.32em' );
  assert.match( rows[1][1].className, /\bis-style-rule-above\b/ );
} );
