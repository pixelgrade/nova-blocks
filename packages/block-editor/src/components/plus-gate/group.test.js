/**
 * Contract: the merged Try & Play boundary (one boundary per tab).
 *
 * Pins the structural invariants of TryAndPlayGroup / TrialBoundary in
 * index.js and the Composition call site — the interaction spec lives in
 * pixelgrade-plus/docs/plus-gating-ui-contract.md ("merged groups").
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const componentSource = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');
const compositionSource = fs.readFileSync(
  path.join(
    __dirname,
    '../../filters/with-collection-layout/controls/composition/index.js'
  ),
  'utf8'
);

test('TryAndPlayGroup renders one boundary around its locked member gates', () => {
  assert.match(componentSource, /export const TryAndPlayGroup/);
  // The group hands the shared chrome the full locked membership...
  assert.match(
    componentSource,
    /<TrialBoundary[^>]*gates=\{ lockedGates \}/
  );
  // ...and tells member mounts (via context) to render bare.
  assert.match(componentSource, /PlusGateGroupContext\.Provider value=\{ lockedIds \}/);
  assert.match(
    componentSource,
    /if \( groupGateIds && groupGateIds\.has\( gateId \) \) \{\s*return children;/
  );
  // Fail open: no locked member, no chrome.
  assert.match(componentSource, /if \( ! lockedGates\.length \) \{\s*return children;/);
});

test('revealing the boundary persists and broadcasts every member gate', () => {
  assert.match(
    componentSource,
    /gateIds\.forEach\( \( id \) => \{\s*persistReveal\( id \);/
  );
  assert.match(
    componentSource,
    /gateIds\.forEach\( \( id \) => \{\s*window\.dispatchEvent\( new CustomEvent\( REVEAL_EVENT, \{ detail: \{ gateId: id \} \} \) \);/
  );
});

test('the boundary counts as revealed only when every member gate is', () => {
  assert.match(componentSource, /const allRevealed = \(\) => gateIds\.every\( wasRevealed \);/);
  assert.match(
    componentSource,
    /if \( gateIds\.every\( \( id \) => revealedIdsRef\.current\.has\( id \) \) \)/
  );
});

test('a merged boundary speaks generically; a single gate keeps its own voice', () => {
  assert.match(componentSource, /const isMerged = gates\.length > 1;/);
  assert.match(
    componentSource,
    /\? \( plus\.groupOverlayNote \|\| plus\.bannerText \)\s*: gates\[ 0 \]\.gate\.overlayNote/
  );
  assert.match(
    componentSource,
    /\? plus\.bannerText\s*: \( gates\[ 0 \]\.gate\.note \|\| plus\.bannerText \)/
  );
});

test('upsell links carry feature attribution (utm contract)', () => {
  // The helper pins the canonical params (plus-gating-copy.md contract).
  assert.match(componentSource, /export const plusUpsellUrl/);
  assert.match(componentSource, /utm_source: 'nova-blocks'/);
  assert.match(componentSource, /utm_campaign: 'try-and-play'/);
  // The trial banner names the boundary's gate(s); merged boundaries join ids.
  assert.match(
    componentSource,
    /plusUpsellUrl\( plus, \{ content: gateIds\.join\( ',' \) \} \)/
  );
  // The post-save snackbar attributes the honesty branch that fired.
  const snackbarSource = fs.readFileSync(
    path.join(__dirname, '../../plus-gating/index.js'),
    'utf8'
  );
  assert.match(
    snackbarSource,
    /plusUpsellUrl\( plus, \{ medium: 'save-plus', content: context \} \)/
  );
  assert.match(snackbarSource, /'saved-without-gated'/);
  assert.match(snackbarSource, /'saved-preview-only'/);
});

test('the Composition tab merges its gated tail into one group', () => {
  const groupMatches = compositionSource.match(/<TryAndPlayGroup gateIds=\{/g) || [];
  assert.equal(groupMatches.length, 1);
  // Free presets stay ABOVE the group — never under the shared scrim.
  assert.ok(
    compositionSource.indexOf('options={ freePresets }')
      < compositionSource.indexOf('<TryAndPlayGroup'),
    'Free presets must render before (outside) the merged boundary.'
  );
  // Membership mirrors what actually renders.
  assert.match(
    compositionSource,
    /'parametric' === layoutStyle \? \[ 'parametric-layout' \] : \[\]/
  );
  assert.match(compositionSource, /depthPresets \? \[ depthGateId \] : \[\]/);
});
