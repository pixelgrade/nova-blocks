import { store as blockEditorStore } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback, useEffect } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { store as noticesStore } from '@wordpress/notices';
import { registerPlugin } from '@wordpress/plugins';

import { recoverAllBlocks } from './recover-blocks';

const NOTICE_ID = 'novablocks-recover-blocks';

const RecoverBlocksNotice = () => {
  const invalidCount = useSelect( select => {
    const { getClientIdsWithDescendants, isBlockValid } = select( blockEditorStore );
    return getClientIdsWithDescendants().filter( clientId => ! isBlockValid( clientId ) ).length;
  }, [] );

  const { createWarningNotice, createSuccessNotice, removeNotice } = useDispatch( noticesStore );

  // The warning notice is not removed here: the effect below removes it once
  // the invalid count actually drops to zero, so a failed recovery keeps the hint.
  const onRecoverAll = useCallback( () => {
    const attemptedCount = recoverAllBlocks();
    createSuccessNotice(
      sprintf(
        /* translators: %d: number of blocks a recovery was attempted for. */
        _n( 'Attempted recovery for %d block.', 'Attempted recovery for %d blocks.', attemptedCount, '__plugin_txtd' ),
        attemptedCount
      ),
      { type: 'snackbar', id: 'novablocks-recover-blocks-success' }
    );
  }, [] );

  useEffect( () => {
    if ( ! invalidCount ) {
      removeNotice( NOTICE_ID );
      return;
    }

    createWarningNotice(
      sprintf(
        /* translators: %d: number of blocks with invalid content. */
        _n(
          '%d block on this page contains unexpected or invalid content.',
          '%d blocks on this page contain unexpected or invalid content.',
          invalidCount,
          '__plugin_txtd'
        ),
        invalidCount
      ),
      {
        id: NOTICE_ID,
        isDismissible: true,
        actions: [
          {
            label: __( 'Attempt recovery for all', '__plugin_txtd' ),
            onClick: onRecoverAll,
          },
        ],
      }
    );
  }, [ invalidCount, onRecoverAll ] );

  return null;
};

registerPlugin( 'novablocks-tools', { render: RecoverBlocksNotice } );
