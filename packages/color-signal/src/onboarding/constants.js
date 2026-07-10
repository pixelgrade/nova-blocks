export const PRACTICE_SECTION_CLASSNAME = 'is-nb-practice-section';
export const PRACTICE_INTRO_CLASSNAME = 'is-nb-practice-intro';
export const PRACTICE_CTA_CLASSNAME = 'is-nb-practice-cta';

// Signals the practice blocks are inserted with. The lesson is corrective:
// the intro starts OVER-signaled (lower it to None), the call-to-action starts
// at None (raise it to High), so these must NOT equal the targets.
export const INSERTED_INTRO_SIGNAL = 3;
export const INSERTED_CTA_SIGNAL = 0;

export const SIGNAL_LABELS = [ 'None', 'Low', 'Medium', 'High' ];

export const PRACTICE_GUIDE_ID = 'novablocks-color-signal-practice';

export const KB_USING_COLOR_SIGNAL_URL = 'https://pixelgrade.com/docs/anima-lt/design-and-style/using-color-signal/';
export const KB_COLOR_SYSTEM_URL = 'https://pixelgrade.com/docs/anima-lt/design-and-style/color-system-lt/';
