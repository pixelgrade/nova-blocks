// Pure builder for the practice guide payload pushed into the Pixelgrade
// Assistant floating docs window via pixelgradeAdminHub.docs.openGuide().
// Serializable only (HTML string + action descriptors) — the window dispatches
// `pixelgrade-docs:guide-action` events for the action buttons AND for clicks
// on elements carrying a data-guide-action attribute inside the content.
import { PRACTICE_GUIDE_ID, SIGNAL_LABELS } from './constants';

const signalLabel = ( value ) => SIGNAL_LABELS[ value ] ?? SIGNAL_LABELS[ 0 ];

const selectLink = ( target, label ) =>
  ` <a href="#" data-guide-action="select-${ target }">${ label }</a>`;

const STEPS = [
  {
    key: 'introQuiet',
    pending: ( { introSignal } ) =>
      `Lower the intro’s Color Signal from <strong>${ signalLabel( introSignal ) }</strong> to <strong>None</strong> so it blends into the page.` +
      selectLink( 'intro', 'Show me the block' ),
    done: () => 'The intro rests at <strong>None</strong> — it blends into the page.',
  },
  {
    key: 'ctaHigh',
    pending: ( { ctaSignal } ) =>
      `Raise the call-to-action’s Color Signal from <strong>${ signalLabel( ctaSignal ) }</strong> to <strong>High</strong> — it’s the one thing visitors should act on.` +
      selectLink( 'cta', 'Show me the block' ),
    done: () => 'The call-to-action stands apart at <strong>High</strong>.',
  },
  {
    key: 'paletteSwitched',
    pending: () => 'Switch to a different <strong>palette</strong> — notice the hierarchy holds.',
    done: () => 'Palette switched — the hierarchy held.',
  },
];

const stepItem = ( step, done, current ) =>
  `<li class="novablocks-practice-step${ done ? ' is-done' : '' }">` +
  `<span aria-hidden="true">${ done ? '✔' : '○' }</span> ` +
  ( done ? step.done( current ) : step.pending( current ) ) +
  `</li>`;

export const buildGuideContent = ( steps, current = {} ) => {
  const items = STEPS.map( step => stepItem( step, !! steps[ step.key ], current ) ).join( '' );

  const closing = steps.complete
    ? '<p><strong>That’s the whole idea:</strong> you assign attention, and the design system resolves the right backgrounds, text, and contrast — on every palette. Dive deeper with the articles below.</p>'
    : '';

  const content =
    '<p>Color Signal isn’t a color picker. You tell the page what deserves attention, and the design system does the rest. Work through these steps on the practice section — in any order:</p>' +
    `<ol class="novablocks-practice-steps">${ items }</ol>` +
    closing;

  const actions = [
    ...( steps.complete
      ? [
          { id: 'read-using-color-signal', label: 'Using the Color Signal' },
          { id: 'read-color-system', label: 'Setting up the Color System' },
        ]
      : [] ),
    { id: 'remove-practice', label: 'Remove practice section', isDestructive: true },
  ];

  return {
    id: PRACTICE_GUIDE_ID,
    title: 'Color Signal Practice',
    content,
    actions,
  };
};
