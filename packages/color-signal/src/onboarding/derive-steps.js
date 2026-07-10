import {
  PRACTICE_SECTION_CLASSNAME,
  PRACTICE_INTRO_CLASSNAME,
  PRACTICE_CTA_CLASSNAME,
} from './constants';

const hasClass = ( block, className ) =>
  typeof block?.attributes?.className === 'string' &&
  block.attributes.className.split( /\s+/ ).includes( className );

const isMarkedGroup = ( block, className ) =>
  block?.name === 'core/group' && hasClass( block, className );

// The practice section is a wide grid group wrapping the intro and call-to-action groups.
// Search the top level plus the wrapper's children, and tolerate a missing wrapper (the user
// may have ungrouped it) by also scanning one level of any top-level group.
export const findPracticeBlocks = ( blocks = [] ) => {
  const candidates = blocks.concat(
    blocks.flatMap( block => ( block?.name === 'core/group' && block.innerBlocks ) || [] )
  );

  return {
    wrapper: blocks.find( block => isMarkedGroup( block, PRACTICE_SECTION_CLASSNAME ) ) ?? null,
    intro: candidates.find( block => isMarkedGroup( block, PRACTICE_INTRO_CLASSNAME ) ) ?? null,
    cta: candidates.find( block => isMarkedGroup( block, PRACTICE_CTA_CLASSNAME ) ) ?? null,
  };
};

// Color signal attributes are absent on groups until the user touches the control — an absent
// value reads as the default (None), never as NaN.
const signal = value => parseInt( value ?? 0, 10 );

export const derivePracticeSteps = ( { intro, cta, paletteBaseline } ) => {
  const introQuiet = !! intro && signal( intro.attributes.colorSignal ) === 0;
  const ctaHigh = !! cta && signal( cta.attributes.colorSignal ) === 3;
  const paletteSwitched =
    ( !! intro && !! paletteBaseline?.intro && intro.attributes.palette !== paletteBaseline.intro ) ||
    ( !! cta && !! paletteBaseline?.cta && cta.attributes.palette !== paletteBaseline.cta );

  return {
    introQuiet,
    ctaHigh,
    paletteSwitched,
    complete: introQuiet && ctaHigh && paletteSwitched,
  };
};
