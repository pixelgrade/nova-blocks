const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

// Issue #636: only post-driven (query) cards emit the dropcap letter and its
// "Read More" label, and those cards render no novablocks/supernova-item
// blocks. WordPress loads a block's stylesheet only when that block renders,
// so the dropcap rules (hidden by default, revealed by the theme's collection
// hover effect) must ship with the parent Cards Collection stylesheet. In the
// item stylesheet they never reached query-driven cards, and the unstyled
// markup printed "W Read More" in an ink bar over the media.

const blocksDir = path.join( __dirname, '..' );
const read = relative => fs.readFileSync( path.join( blocksDir, relative ), 'utf8' );
const imports = source => [ ...source.matchAll( /@import\s+['"]([^'"]+)['"]/g ) ].map( match => match[ 1 ] );

test( 'the Cards Collection stylesheet owns the card dropcap rules', () => {
  assert.ok(
    imports( read( 'supernova/style.scss' ) ).some( entry => /(^|\/)_?dropcap$/.test( entry ) ),
    'supernova/style.scss must import the dropcap partial'
  );

  const partial = read( 'supernova/scss/_dropcap.scss' );

  assert.match(
    partial,
    /\.nb-supernova-item__dropcap-wrapper,\s*\.nb-supernova-item__dropcap-more,\s*\.nb-supernova-item__dropcap-line,\s*\.nb-supernova-item__dropcap\s*\{\s*display:\s*none;/,
    'the dropcap and its Read More stay hidden unless a hover effect reveals them'
  );
} );

test( 'the Card item stylesheet does not carry a second copy of the dropcap rules', () => {
  assert.ok(
    ! imports( read( 'supernova-item/style.scss' ) ).some( entry => /dropcap/.test( entry ) ),
    'supernova-item/style.scss must not import the dropcap partial'
  );
  assert.equal( fs.existsSync( path.join( blocksDir, 'supernova-item/scss/_dropcap.scss' ) ), false );
} );
