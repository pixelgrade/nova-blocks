/**
 * Plus post-save honesty notices.
 *
 * After a successful save while gates are locked, tell the user — calmly and
 * truthfully — what happened to their trial refinements:
 * - save-guarded values the server reverted → the "savedWithoutGated" snackbar;
 * - render-gated values that persisted but preview only → "savedPreviewOnly".
 * Grandfathered content (gated values already in the saved entity) stays
 * silent: nothing happened to it.
 *
 * Mirrors Style Manager's mixed-save snackbar semantics: the editor keeps the
 * live sandbox state after saving; we only add the honest status line.
 */
import { parse } from '@wordpress/blocks';
import { dispatch, select, subscribe } from '@wordpress/data';

import { plusUpsellUrl } from '../components/plus-gate';
import { hasLockedRenderGatedValues, hasRevertedSaveGuardedValues } from './analyze';
import { initPlusSaveAffordance } from './save-affordance';

const NOTICE_ID = 'novablocks-plus-save-notice';

const getPlusPayload = () => window.wp?.novaBlocks?.settings?.plus;

const notifyAfterSave = () => {
  const plus = getPlusPayload();

  if ( ! plus || ! Object.values( plus.locked || {} ).some( Boolean ) ) {
    return;
  }

  const savedContent = select( 'core/editor' )?.getCurrentPost()?.content;

  if ( typeof savedContent !== 'string' || false === savedContent.includes( 'wp:novablocks/' ) ) {
    return;
  }

  const savedBlocks = parse( savedContent );
  const editorBlocks = select( 'core/block-editor' )?.getBlocks() || [];
  const motionPresetOptions = window.wp?.novaBlocks?.settings?.motionPresetOptions || [];

  let message = null;
  let context = '';

  if ( hasRevertedSaveGuardedValues( editorBlocks, savedBlocks, plus ) ) {
    message = plus.savedWithoutGated;
    context = 'saved-without-gated';
  } else if ( hasLockedRenderGatedValues( savedBlocks, plus, motionPresetOptions ) ) {
    message = plus.savedPreviewOnly;
    context = 'saved-preview-only';
  }

  if ( ! message ) {
    return;
  }

  dispatch( 'core/notices' )?.createNotice( 'info', message, {
    id: NOTICE_ID,
    type: 'snackbar',
    actions: plus.upsellUrl
      ? [ {
          label: plus.getPlusLabel || 'Get Plus',
          url: plusUpsellUrl( plus, { medium: 'save-plus', content: context } ),
        } ]
      : [],
  } );
};

// Cheap save-transition watcher: two selector reads per store update, acts
// only on the saving -> saved edge. (Heavier work runs only after a save.)
//
// The window flag keeps the subscription a singleton if this module ever
// gets bundled twice; the ORDER inside the listener is the critical part:
// dispatching (createNotice) emits synchronously and re-enters this listener,
// so the edge state MUST be updated before notifying or it recurses until
// the stack overflows.
if ( typeof window !== 'undefined' && ! window.__novablocksPlusSaveNoticesRegistered ) {
  window.__novablocksPlusSaveNoticesRegistered = true;

  // The pre-save "Save · Plus" button affordance (no-op when unlocked). The
  // payload is localized before this bundle runs; fall back to a late init
  // for safety if it somehow isn't yet.
  if ( getPlusPayload() ) {
    initPlusSaveAffordance( getPlusPayload() );
  } else {
    window.addEventListener( 'load', () => initPlusSaveAffordance( getPlusPayload() ), { once: true } );
  }

  let wasSaving = false;

  subscribe( () => {
    const editor = select( 'core/editor' );

    if ( ! editor?.isSavingPost ) {
      return;
    }

    const isSaving = editor.isSavingPost() && ! editor.isAutosavingPost();
    const savedJustNow = wasSaving && ! isSaving && editor.didPostSaveRequestSucceed();

    wasSaving = isSaving;

    if ( savedJustNow ) {
      notifyAfterSave();
    }
  } );
}
