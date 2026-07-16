const fs = require( 'fs' );
const path = require( 'path' );

describe( 'withScrollingEffectWrapper', () => {
  it( 'creates one stable scrolling provider per enhanced component', () => {
    const source = fs.readFileSync(
      path.join( __dirname, 'with-scrolling-effect-wrapper.js' ),
      'utf8'
    );

    expect( source ).toMatch(
      /createHigherOrderComponent\( OriginalComponent => \{\s*const WrappedComponent = withScrollingEffectProvider\( OriginalComponent \);\s*return \( props \) => \{/
    );
    expect( source ).not.toMatch(
      /return \( props \) => \{[\s\S]*?const WrappedComponent = withScrollingEffectProvider\( OriginalComponent \);/
    );
  } );
} );
