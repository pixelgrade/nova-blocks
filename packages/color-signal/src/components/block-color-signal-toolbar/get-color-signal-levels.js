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
 * control, clamped to the block's `minColorSignal` / `maxColorSignal`
 * support declarations (e.g. core/button and core/separator declare
 * `minColorSignal: 1`, so "None" must never be offered for them).
 *
 * This mirrors the min/max clamping `SignalControl` applies to the sidebar
 * stepper's +/- buttons, so the toolbar control and the sidebar always agree
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

/**
 * Return the level a single toolbar click should activate.
 *
 * The cycle wraps inside the already-clamped level list. If the current value
 * falls outside that list (for example after a block support change), recover
 * to the first valid level instead of emitting an unsupported value.
 *
 * @param {{value: number, label: string}[]} levels Valid levels for the block.
 * @param {number} currentValue The block's current Color Signal value.
 * @returns {{value: number, label: string}|undefined} The next valid level.
 */
export const getNextColorSignalLevel = ( levels, currentValue ) => {
  if ( ! levels.length ) {
    return undefined;
  }

  const currentIndex = levels.findIndex( level => level.value === currentValue );

  return levels[ ( currentIndex + 1 ) % levels.length ] || levels[ 0 ];
};
