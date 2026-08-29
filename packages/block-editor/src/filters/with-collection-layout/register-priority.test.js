/**
 * Source contract for the collection-layout filter registration order.
 *
 * The inspector controls MUST register at a priority above
 * withPreviewAttributes (20) so they sit OUTSIDE the preview boundary and
 * read the block's real stored attributes in a preview-capable layout's
 * Edit Mode. At the default priority they inherit the canvas-only forced
 * attributes (layoutStyle: 'classic', columns: 1), the Composition tab
 * claims Classic Grid is selected on a masonry/carousel block, and a preset
 * click there silently converts the stored layout. The canvas-side custom
 * props deliberately stay at the default priority.
 */
const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const registrationSource = fs.readFileSync( path.join( __dirname, 'index.js' ), 'utf8' );
const previewSource = fs.readFileSync(
  path.join( __dirname, '..', 'with-preview-attributes', 'index.js' ),
  'utf8'
);

test( 'collection layout inspector controls register outside the preview-attributes boundary', () => {
  assert.match(
    registrationSource,
    /addFilter\( 'editor\.BlockEdit', 'novablocks\/with-collection-layout-controls', withCollectionLayoutControls, 30 \)/
  );
  assert.match(
    previewSource,
    /addFilter\( 'editor\.BlockEdit', 'novablocks\/with-preview-attributes', withPreviewAttributes, 20 \)/
  );
  // The canvas-side custom props stay at the default priority (inside the boundary).
  assert.match(
    registrationSource,
    /addFilter\( 'editor\.BlockEdit', 'novablocks\/with-collection-layout-edit-custom-props', withCollectionLayoutEditCustomProps \)/
  );
} );

test( 'the dead misspelled setAttribtues wrapper stays out of the preview filter', () => {
  // Calling it threw (props.setAttribtues never existed), so its intended
  // "reset preview on the next write" behavior never ran; keep it deleted.
  assert.doesNotMatch( previewSource, /setAttribtues/ );
} );
