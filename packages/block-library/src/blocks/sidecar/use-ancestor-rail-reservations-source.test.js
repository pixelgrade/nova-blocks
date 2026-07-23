const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const sourcePath = path.join( __dirname, 'use-ancestor-rail-reservations.js' );

test( 'the reservation hook derives topology from every ancestor Sidecar', () => {
  assert.equal( fs.existsSync( sourcePath ), true );

  const source = fs.readFileSync( sourcePath, 'utf8' );

  assert.match( source, /getBlockParents\(\s*clientId\s*\)/ );
  assert.match( source, /getBlock\(\s*ancestorId\s*\)/ );
  assert.match( source, /block\.name === 'novablocks\/sidecar'/ );
  assert.match( source, /getReservedAncestorRailSides\(\s*ancestorSidecars\s*\)/ );
} );
