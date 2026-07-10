import { buildGuideContent } from './build-guide-content';
import { PRACTICE_GUIDE_ID } from './constants';

const noSteps = {
  introQuiet: false,
  ctaHigh: false,
  paletteSwitched: false,
  complete: false,
};

const allSteps = {
  introQuiet: true,
  ctaHigh: true,
  paletteSwitched: true,
  complete: true,
};

const freshSignals = { introSignal: 3, ctaSignal: 0 };

describe( 'buildGuideContent', () => {

  test( 'produces a serializable guide payload with the stable guide id', () => {
    const guide = buildGuideContent( noSteps, freshSignals );

    expect( guide.id ).toBe( PRACTICE_GUIDE_ID );
    expect( typeof guide.title ).toBe( 'string' );
    expect( typeof guide.content ).toBe( 'string' );
    expect( Array.isArray( guide.actions ) ).toBe( true );
  } );

  test( 'renders all three steps as a checklist (groups have no Content Area Color Signal)', () => {
    const { content } = buildGuideContent( noSteps, freshSignals );

    expect( ( content.match( /<li/g ) || [] ).length ).toBe( 3 );
    expect( content ).not.toMatch( /Content Area/ );
  } );

  test( 'pending steps name the block’s CURRENT signal so the user knows where they start from', () => {
    expect( buildGuideContent( noSteps, freshSignals ).content )
      .toMatch( /from <strong>High<\/strong> to <strong>None<\/strong>/ );
    expect( buildGuideContent( noSteps, freshSignals ).content )
      .toMatch( /from <strong>None<\/strong> to <strong>High<\/strong>/ );

    // The label follows the attribute live: a half-lowered intro reads "from Low".
    expect( buildGuideContent( noSteps, { introSignal: 1, ctaSignal: 0 } ).content )
      .toMatch( /from <strong>Low<\/strong> to <strong>None<\/strong>/ );
  } );

  test( 'pending steps carry a select-target link the window wires back as a guide action', () => {
    const { content } = buildGuideContent( noSteps, freshSignals );

    expect( ( content.match( /data-guide-action="select-intro"/g ) || [] ).length ).toBe( 1 );
    expect( ( content.match( /data-guide-action="select-cta"/g ) || [] ).length ).toBe( 1 );
  } );

  test( 'completed steps switch to past-tense copy and drop their select link', () => {
    const done = buildGuideContent( { ...noSteps, introQuiet: true }, { introSignal: 0, ctaSignal: 0 } );

    expect( ( done.content.match( /is-done/g ) || [] ).length ).toBe( 1 );
    expect( done.content ).not.toMatch( /is-done[^<]*<[^>]*select-intro/ );
    expect( done.content ).not.toMatch( /from <strong>None<\/strong> to <strong>None<\/strong>/ );
  } );

  test( 'always offers the remove action; article actions appear only on completion', () => {
    expect( buildGuideContent( noSteps, freshSignals ).actions.map( a => a.id ) )
      .toEqual( [ 'remove-practice' ] );
    expect( buildGuideContent( allSteps, { introSignal: 0, ctaSignal: 3 } ).actions.map( a => a.id ) )
      .toEqual( [ 'read-using-color-signal', 'read-color-system', 'remove-practice' ] );
  } );

  test( 'completion adds the closing lesson to the content', () => {
    expect( buildGuideContent( noSteps, freshSignals ).content ).not.toMatch( /assign attention/ );
    expect( buildGuideContent( allSteps, { introSignal: 0, ctaSignal: 3 } ).content ).toMatch( /assign attention/ );
  } );

} );
