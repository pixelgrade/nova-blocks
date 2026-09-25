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

// #627 — the row-fit media box. Cards of a Classic grid are subgridded into
// the collection rows so the media track takes the row's tallest picture and
// every caption starts on one line; the picture is contained in its box and
// placed by Media Alignment.
const rowFitMatch = styleSource.match(
  /\/\/ ------ #ROW-FIT MEDIA BOX[\s\S]*?(?=\/\/ ------ #CARD MEDIA)/
);

test( 'row fit falls back to the natural flow of Original wherever rows do not apply', () => {
  assert.match(
    originalRatioRules,
    /:is\(\s*\.nb-supernova--aspect-ratio-original,\s*\.nb-supernova--aspect-ratio-row\s*\)/
  );
} );

test( 'row fit subgrids Classic cards into media and content rows', () => {
  assert.ok( rowFitMatch, 'expected a #ROW-FIT MEDIA BOX section before #CARD MEDIA' );
  const rowFit = rowFitMatch[ 0 ];

  assert.match( rowFit, /@supports \(grid-template-rows: subgrid\)/ );
  assert.match( rowFit, /\.nb-supernova--aspect-ratio-row \.nb-collection__layout--classic/ );
  assert.match( rowFit, /grid-row: span 2;/ );
  assert.match( rowFit, /grid-row: span 3;/ );
  assert.match( rowFit, /grid-template-rows: subgrid;/ );
  // Static cards carry supernova-item's `display: flex !important`.
  assert.match( rowFit, /grid-row: 1 \/ -1;/ );
  assert.match( rowFit, /display: grid !important;/ );
  // Captions keep their natural height against the media box edge: a
  // centred caption in a taller caption row would leave the shared line.
  assert.match( rowFit, />\s*\.nb-supernova-item__content\s*\{\s*align-self: start;/ );
  // vertical-reverse puts the caption row first, sitting on the media box.
  assert.match( rowFit, /\.nb-supernova-item--layout-vertical-reverse[\s\S]*?order: -1;\s*align-self: end;/ );
  // Pictures are whole and placed by Media Alignment.
  assert.match( rowFit, /object-fit: contain;/ );
  assert.match( rowFit, /object-position: var\(--nb-card-media-object-position, 50% 50%\);/ );
  // The media chain fills the row track, including the shape-modeling wrappers.
  assert.match( rowFit, /\.blob-mix/ );
  assert.match( rowFit, /\.novablocks-doppler__wrapper/ );
} );

test( 'Media Alignment positions every card picture, the default being the historical center', () => {
  assert.match(
    styleSource,
    /\.nb-supernova-item__media\[class\]\s*\{[\s\S]*?object-position: var\(--nb-card-media-object-position, 50% 50%\);/
  );
} );
