// NOTE: deliberately free of @wordpress/* imports so the template stays a pure,
// jest-testable data module. The strings below are inserted page content
// (starter-content style), not UI chrome, so they skip i18n.
//
// The composition mirrors George's reference markup (2026-07-09): a wide two-column
// grid group wrapping two constrained groups — Nova augments core/group with the
// full Color Signal support, so the practice section stays light (no Supernova).
import {
  PRACTICE_SECTION_CLASSNAME,
  PRACTICE_INTRO_CLASSNAME,
  PRACTICE_CTA_CLASSNAME,
  INSERTED_INTRO_SIGNAL,
} from './constants';

export const getPracticeSectionTemplate = () => ( [
  [ 'core/group', {
    className: PRACTICE_SECTION_CLASSNAME,
    align: 'wide',
    layout: { type: 'grid', columnCount: 2, minimumColumnWidth: '0rem' },
  }, [

    [ 'core/group', {
      className: PRACTICE_INTRO_CLASSNAME,
      layout: { type: 'constrained', justifyContent: 'center' },
      blockTopSpacing: 0,
      colorSignal: INSERTED_INTRO_SIGNAL,
      paletteVariation: 11,
      contentPaletteVariation: 11,
    }, [
      [ 'core/heading', { level: 3, fontSize: 'normal', content: 'This intro is louder than it needs to be' } ],
      [ 'core/paragraph', { fontSize: 'normal', content: 'An introduction should set the scene, not compete with the important content below. Select this block and lower its Color Signal to None — watch it blend into the page.' } ],
    ] ],

    [ 'core/group', {
      className: PRACTICE_CTA_CLASSNAME,
      layout: { type: 'constrained' },
      blockTopSpacing: 3,
    }, [
      [ 'core/heading', { level: 3, fontSize: 'normal', content: 'Book your seat at the workshop' } ],
      [ 'core/paragraph', { fontSize: 'normal', content: 'This is the one thing you want every visitor to act on — yet right now it whispers. Select this block and raise its Color Signal to High so it stands apart from everything around it. Then switch the palette — the hierarchy holds.' } ],
      [ 'core/buttons', {}, [
        [ 'core/button', { text: 'Reserve a spot', contentPaletteVariation: 4 } ],
      ] ],
    ] ],

  ] ],
] );
