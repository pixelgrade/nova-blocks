/**
 * Source contract for the Edit Mode preview boundary (#642).
 *
 * withPreviewAttributes (editor.BlockEdit priority 20) hands everything it
 * wraps canvas-only forced attributes (layoutStyle 'classic', columns 1,
 * cardLayout 'horizontal', cardMediaOpacity 100) for masonry / carousel /
 * parametric collections. Anything that shows or edits the STORED design
 * must therefore sit outside it:
 *
 * - inspector filters register above 20 (the collection-layout precedent),
 *   while their canvas-side edit props stay inside;
 * - Supernova's own inspector and toolbar sections, rendered from its edit
 *   (always inside), receive the stored attributes that the boundary passes
 *   down as `storedAttributes`.
 *
 * Otherwise Elements Stacking shows Horizontal on a stacked carousel, the
 * Scroll Indicator toggle disappears, Hover Border Size vanishes on
 * multi-column collections, Card Styles highlights the wrong preset, and the
 * flip-media toolbar can overwrite a stacked layout.
 */
const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const filtersRoot = path.join( __dirname, '..' );
const read = ( ...segments ) => fs.readFileSync( path.join( ...segments ), 'utf8' );

const previewSource = read( __dirname, 'index.js' );
const supernovaEditSource = read( filtersRoot, '..', '..', '..', 'block-library', 'src', 'blocks', 'supernova', 'edit.js' );

const OUTSIDE = 30;

test( 'the preview boundary stays at priority 20', () => {
  assert.match(
    previewSource,
    /addFilter\( 'editor\.BlockEdit', 'novablocks\/with-preview-attributes', withPreviewAttributes, 20 \)/
  );
} );

for ( const [ folder, hook, component ] of [
  [ 'with-card-elements-stacking', 'novablocks/with-card-elements-stacking-controls', 'withCardElementsStackingControls' ],
  [ 'with-card-elements-visibility', 'novablocks/with-card-elements-visibility-controls', 'withCardElementsVisibilityControls' ],
  [ 'with-card-details', 'novablocks/with-card-details-controls', 'withCardDetailsControls' ],
  [ 'with-overlay-filter', 'novablocks/with-overlay-filter-controls', 'withOverlayFilterControls' ],
] ) {
  test( `${ folder } inspector controls sit outside the preview boundary`, () => {
    const source = read( filtersRoot, folder, 'index.js' );
    const escapedHook = hook.replace( /\//g, '\\/' );

    assert.match(
      source,
      new RegExp( `addFilter\\( 'editor\\.BlockEdit', '${ escapedHook }', ${ component }, ${ OUTSIDE } \\)` )
    );
  } );
}

test( 'canvas-side overlay filter props stay inside the boundary', () => {
  assert.match(
    read( filtersRoot, 'with-overlay-filter', 'index.js' ),
    /addFilter\( 'editor\.BlockEdit', 'novablocks\/with-overlay-filter-edit-custom-props', withOverlayFilterEditCustomProps \)/
  );
} );

test( 'the boundary passes the stored attributes down with the forced ones', () => {
  assert.match(
    previewSource,
    /const newProps = \{\s*\.\.\.props,\s*attributes: newAttributes,\s*storedAttributes: attributes,\s*\};/
  );
} );

test( "Supernova's inspector and toolbar sections read the stored attributes", () => {
  assert.match(
    supernovaEditSource,
    /const storedProps = props\.storedAttributes \? \{ \.\.\.props, attributes: props\.storedAttributes \} : props;/
  );

  for ( const section of [ 'BlockControls', 'InspectorControls', 'CardStyleControls' ] ) {
    assert.match(
      supernovaEditSource,
      new RegExp( `<${ section } \\{ \\.\\.\\.storedProps \\}` ),
      `${ section } must receive the stored attributes`
    );
  }

  // The canvas keeps rendering the Edit Mode view.
  assert.match( supernovaEditSource, /<SupernovaPreview \{ \.\.\.props \} attributes=\{ previewAttributes \}/ );
} );
