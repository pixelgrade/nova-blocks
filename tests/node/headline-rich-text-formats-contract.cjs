const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const editPath = path.join(
  __dirname,
  '..',
  '..',
  'packages',
  'block-library',
  'src',
  'blocks',
  'headline',
  'edit.js'
);

const source = fs.readFileSync( editPath, 'utf8' );

function getAllowedFormats( className ) {
  const richText = source.match(
    new RegExp( `className="${ className }"[\\s\\S]*?allowedFormats=\\{([^}]+)\\}` )
  );

  assert.ok( richText, `${ className } must declare its RichText formats explicitly` );

  return richText[1].replace( /\s+/g, ' ' ).trim();
}

test( 'Headline primary supports the bold and italic emphasis trigger', () => {
  const formats = getAllowedFormats( 'c-headline__primary' );

  assert.match( formats, /'core\/bold'/ );
  assert.match( formats, /'core\/italic'/ );
} );

test( 'Headline kicker remains an unformatted accent-role label', () => {
  assert.equal( getAllowedFormats( 'c-headline__secondary' ), '[]' );
} );
