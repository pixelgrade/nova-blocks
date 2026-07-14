const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const stylePath = path.join( __dirname, 'scss', '_card.scss' );
const styleSource = fs.readFileSync( stylePath, 'utf8' );
const originalRatioRules = styleSource.match(
  /\/\/ ------ #ORIGINAL ASPECT RATIO[\s\S]*?(?=\/\/ ------ #CARD MEDIA)/
)[ 0 ];

test( 'post title wrappers neutralize the block editor break-word cascade', () => {
  assert.match(
    styleSource,
    /\.nb-supernova-item__link\s*\{[\s\S]*?display:\s*block;[\s\S]*?overflow-wrap:\s*normal;/
  );
} );

test( 'original-ratio cards restore default static media to natural flow', () => {
  assert.match(
    originalRatioRules,
    /\.nb-supernova-item--scrolling-effect-static/
  );
  assert.match(
    originalRatioRules,
    /\.nb-supernova-item--scrolling-effect-none/
  );
  assert.match(
    originalRatioRules,
    /\.nb-supernova-item__media\[class\]\[class\]\s*\{[\s\S]*?position:\s*static;[\s\S]*?width:\s*100%;[\s\S]*?height:\s*auto;/
  );
} );
