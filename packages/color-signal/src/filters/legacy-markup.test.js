const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const classnamesSource = fs.readFileSync(
  path.join( __dirname, 'with-color-signal-save-classnames.js' ),
  'utf8'
);
const dataAttributesSource = fs.readFileSync(
  path.join( __dirname, 'with-color-signal-save-data-attributes.js' ),
  'utf8'
);

test( 'Color Signal class augmentation preserves styleless legacy markup', () => {
  assert.match(
    classnamesSource,
    /if \( attributes\?\.__novablocksLegacySpacing\?\.noSpacingMarkup[\s\S]*?! attributes\?\.__novablocksLegacySpacing\?\.hasColorSignalMarkup \) \{[\s\S]*?return extraProps;[\s\S]*?\}/
  );
} );

test( 'Color Signal data augmentation preserves styleless legacy markup', () => {
  assert.match(
    dataAttributesSource,
    /if \( attributes\?\.__novablocksLegacySpacing\?\.noSpacingMarkup[\s\S]*?! attributes\?\.__novablocksLegacySpacing\?\.hasColorSignalMarkup \) \{[\s\S]*?return element;[\s\S]*?\}/
  );
} );
