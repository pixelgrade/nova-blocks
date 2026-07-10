import { getPracticeSectionTemplate } from './practice-section';

import {
  PRACTICE_SECTION_CLASSNAME,
  PRACTICE_INTRO_CLASSNAME,
  PRACTICE_CTA_CLASSNAME,
  INSERTED_INTRO_SIGNAL,
} from './constants';

const classNames = block => ( block[ 1 ].className || '' ).split( /\s+/ );
const innerBlocks = block => block[ 2 ] || [];

describe( 'getPracticeSectionTemplate', () => {

  const template = getPracticeSectionTemplate();
  const [ wrapper ] = template;
  const [ intro, cta ] = innerBlocks( wrapper );

  test( 'produces one wide two-column grid group wrapping the intro and call-to-action groups', () => {
    expect( template ).toHaveLength( 1 );
    expect( wrapper[ 0 ] ).toBe( 'core/group' );
    expect( wrapper[ 1 ].align ).toBe( 'wide' );
    expect( wrapper[ 1 ].layout ).toMatchObject( { type: 'grid', columnCount: 2 } );

    expect( intro[ 0 ] ).toBe( 'core/group' );
    expect( cta[ 0 ] ).toBe( 'core/group' );
  } );

  test( 'marks the wrapper and both inner groups', () => {
    expect( classNames( wrapper ) ).toContain( PRACTICE_SECTION_CLASSNAME );
    expect( classNames( intro ) ).toContain( PRACTICE_INTRO_CLASSNAME );
    expect( classNames( cta ) ).toContain( PRACTICE_CTA_CLASSNAME );
  } );

  test( 'inserts a corrective starting point: intro over-signaled, call-to-action fully quiet', () => {
    expect( intro[ 1 ].colorSignal ).toBe( INSERTED_INTRO_SIGNAL );
    expect( INSERTED_INTRO_SIGNAL ).toBeGreaterThan( 0 );

    // Both Block and Content Area signals start at None on the call-to-action.
    expect( cta[ 1 ].colorSignal ?? 0 ).toBe( 0 );
    expect( cta[ 1 ].contentColorSignal ?? 0 ).toBe( 0 );
  } );

  test( 'the call-to-action is built around an action: it carries a button', () => {
    const names = innerBlocks( cta ).map( inner => inner[ 0 ] );

    expect( names ).toContain( 'core/buttons' );
  } );

  test( 'both groups carry instructional heading and paragraph content', () => {
    [ intro, cta ].forEach( group => {
      const names = innerBlocks( group ).map( inner => inner[ 0 ] );

      expect( names ).toContain( 'core/heading' );
      expect( names ).toContain( 'core/paragraph' );
    } );
  } );

  test( 'the copy teaches direction: intro lowers to None, call-to-action raises to High', () => {
    const textOf = group => JSON.stringify( innerBlocks( group ) );

    expect( textOf( intro ) ).toMatch( /None/ );
    expect( textOf( cta ) ).toMatch( /High/ );
  } );

} );
