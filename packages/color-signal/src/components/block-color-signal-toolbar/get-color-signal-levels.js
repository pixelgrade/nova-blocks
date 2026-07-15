// Keep in sync with `defaultLabels` in the sidebar stepper (`SignalControl`
// in `@novablocks/block-editor`,
// packages/block-editor/src/components/signal-control/index.js). Deliberately
// kept free of `@wordpress/*` imports so this pure logic stays unit-testable
// with a plain `require()` under jest/node:test, with no WP runtime needed.
export const COLOR_SIGNAL_LEVEL_LABELS = [
  'None',
  'Low',
  'Medium',
  'High',
];

const DEFAULT_MIN = 0;
const DEFAULT_MAX = COLOR_SIGNAL_LEVEL_LABELS.length - 1;

/**
 * Build the list of selectable Color Signal levels for a block's toolbar
 * dropdown, clamped to the block's `minColorSignal` / `maxColorSignal`
 * support declarations (e.g. core/button and core/separator declare
 * `minColorSignal: 1`, so "None" must never be offered for them).
 *
 * This mirrors the min/max clamping `SignalControl` applies to the sidebar
 * stepper's +/- buttons, so the toolbar dropdown and the sidebar always agree
 * on which levels exist for a given block.
 *
 * @param colorSignalSupport the block's `supports.novaBlocks.colorSignal`
 *   value: either the boolean shorthand `true` (supported, no per-block
 *   limits), or a config object that may declare `minColorSignal` /
 *   `maxColorSignal`.
 * @returns {{value: number, label: string}[]}
 */
export const getColorSignalLevels = ( colorSignalSupport ) => {
  const support = colorSignalSupport && colorSignalSupport !== true ? colorSignalSupport : {};

  const min = Math.max(
    DEFAULT_MIN,
    Number.isInteger( support.minColorSignal ) ? support.minColorSignal : DEFAULT_MIN
  );
  const max = Math.min(
    DEFAULT_MAX,
    Number.isInteger( support.maxColorSignal ) ? support.maxColorSignal : DEFAULT_MAX
  );

  const levels = [];

  for ( let value = min; value <= max; value++ ) {
    levels.push( { value, label: COLOR_SIGNAL_LEVEL_LABELS[ value ] } );
  }

  return levels;
};
