const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const postsSource = fs.readFileSync( path.join( __dirname, 'posts-collection-layout', 'index.js' ), 'utf8' );
const cardsSource = fs.readFileSync( path.join( __dirname, 'not-posts-collection-layout', 'index.js' ), 'utf8' );

// Leading-items wrappers passed unconditionally become blank slides in carousel
// layouts (react-slick turns every child element into a slide), so every mount
// must be guarded by the editor hook actually resolving items.
test( 'post collections mount leading items only when the editor resolves some', () => {
  assert.match( postsSource, /useEditorCollectionLeadingItems/ );

  assert.equal(
    ( postsSource.match( /<CollectionLeadingItems/g ) || [] ).length,
    ( postsSource.match( /leadingItems\.length > 0 &&\s*<CollectionLeadingItems/g ) || [] ).length
  );

  assert.equal( ( postsSource.match( /<CollectionLeadingItems/g ) || [] ).length, 1 );
} );

test( 'cards collections mount leading items only when the editor resolves some', () => {
  assert.match( cardsSource, /useEditorCollectionLeadingItems/ );

  assert.equal( ( cardsSource.match( /<CollectionLeadingItems/g ) || [] ).length, 2 );

  assert.equal(
    ( cardsSource.match( /leadingItems\.length > 0 &&\s*<CollectionLeadingItems/g ) || [] ).length,
    2
  );
} );
