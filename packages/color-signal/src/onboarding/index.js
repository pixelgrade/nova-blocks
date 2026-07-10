import insertPracticeSection from './insert-practice-section';

export { default as ColorSignalPracticeGuide } from './practice-guide';
export { default as insertPracticeSection } from './insert-practice-section';
export { findPracticeBlocks, derivePracticeSteps } from './derive-steps';
export { getPracticeSectionTemplate } from './practice-section';

// Companion seam: lets Pixelgrade Assistant (or the console) trigger the
// practice section without a Nova UI dependency — mirrors the Assistant's own
// window.pixelgradeAdminHub pattern.
if ( typeof window !== 'undefined' ) {
  window.novaBlocks = window.novaBlocks || {};
  window.novaBlocks.onboarding = {
    ...( window.novaBlocks.onboarding || {} ),
    insertColorSignalPracticeSection: insertPracticeSection,
  };
}
