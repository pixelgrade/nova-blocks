/**
 * JS mirror of tests/php/card-expression-classes-contract.php — the two
 * runtimes must classify identically (dual-runtime contract).
 */
import {
  CARD_EXPRESSION_THRESHOLDS,
  classifyCardMediaRatio,
  classifyCardTextLength,
  getCardExpressionClassesFromValues,
} from './index';

describe( 'classifyCardMediaRatio', () => {
  const cases = [
    [ 0.4, 'tall' ],
    [ 0.5624, 'tall' ],
    [ 0.5625, 'portrait' ],
    [ 0.74, 'portrait' ],
    [ 0.75, 'square' ],
    [ 1.0, 'square' ],
    [ 1.34, 'square' ],
    [ 1.35, 'landscape' ],
    [ 1.5, 'landscape' ],
    [ 1.78, 'landscape' ],
    [ 1.79, 'wide' ],
    [ 2.5, 'wide' ],
  ];

  test.each( cases )( 'ratio %f → %s', ( ratio, expected ) => {
    expect( classifyCardMediaRatio( ratio ) ).toBe( expected );
  } );

  test( 'degenerate ratios fall back to landscape', () => {
    expect( classifyCardMediaRatio( 0 ) ).toBe( 'landscape' );
    expect( classifyCardMediaRatio( -1 ) ).toBe( 'landscape' );
    expect( classifyCardMediaRatio( NaN ) ).toBe( 'landscape' );
    expect( classifyCardMediaRatio( undefined ) ).toBe( 'landscape' );
  } );
} );

describe( 'classifyCardTextLength', () => {
  const thresholds = CARD_EXPRESSION_THRESHOLDS.title;

  test( 'boundaries at 30/60', () => {
    expect( classifyCardTextLength( 'a'.repeat( 29 ), thresholds ) ).toBe( 'short' );
    expect( classifyCardTextLength( 'a'.repeat( 30 ), thresholds ) ).toBe( 'medium' );
    expect( classifyCardTextLength( 'a'.repeat( 59 ), thresholds ) ).toBe( 'medium' );
    expect( classifyCardTextLength( 'a'.repeat( 60 ), thresholds ) ).toBe( 'long' );
  } );

  test( 'multibyte characters count as single characters', () => {
    expect( classifyCardTextLength( 'ă'.repeat( 29 ), thresholds ) ).toBe( 'short' );
  } );

  test( 'markup is stripped before measuring', () => {
    expect( classifyCardTextLength( `<strong>${ 'a'.repeat( 20 ) }</strong>`, thresholds ) ).toBe( 'short' );
  } );

  test( 'empty → none', () => {
    expect( classifyCardTextLength( '', thresholds ) ).toBe( 'none' );
    expect( classifyCardTextLength( '   ', thresholds ) ).toBe( 'none' );
    expect( classifyCardTextLength( null, thresholds ) ).toBe( 'none' );
  } );
} );

describe( 'getCardExpressionClassesFromValues', () => {
  test( 'portrait media + short title + medium description', () => {
    const classes = getCardExpressionClassesFromValues( {
      mediaWidth: 640,
      mediaHeight: 960,
      title: 'Short title',
      description: 'lorem '.repeat( 25 ),
    } );

    expect( classes ).toContain( 'nb-card--media-portrait' );
    expect( classes ).toContain( 'nb-card--title-short' );
    expect( classes ).toContain( 'nb-card--description-medium' );
  } );

  test( 'no media dimensions → no-media marker, no ratio class', () => {
    const classes = getCardExpressionClassesFromValues( {
      mediaWidth: 0,
      mediaHeight: 0,
      title: 'T'.repeat( 70 ),
      description: '',
    } );

    expect( classes ).toContain( 'nb-card--no-media' );
    expect( classes ).toContain( 'nb-card--title-long' );
    expect( classes ).toContain( 'nb-card--description-none' );
    expect( classes.join( ' ' ) ).not.toContain( 'nb-card--media-' );
  } );

  test( 'wide media', () => {
    const classes = getCardExpressionClassesFromValues( {
      mediaWidth: 1200,
      mediaHeight: 600,
      title: '',
      description: '',
    } );

    expect( classes ).toContain( 'nb-card--media-wide' );
    expect( classes ).toContain( 'nb-card--title-none' );
  } );
} );
