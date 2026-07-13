const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const stylePath = path.join( __dirname, 'scss', '_card.scss' );
const styleSource = fs.readFileSync( stylePath, 'utf8' );

test( 'post title wrappers neutralize the block editor break-word cascade', () => {
  assert.match(
    styleSource,
    /\.nb-supernova-item__link\s*\{[\s\S]*?display:\s*block;[\s\S]*?overflow-wrap:\s*normal;/
  );
} );
