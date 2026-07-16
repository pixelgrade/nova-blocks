/**
 * Editor-context hook for the Row Surfaces tile family.
 *
 * Returns `{ options, managedAttributes }` for PresetCardsControl managed
 * mode, or `null` when the Presets tab must not render:
 *
 * - no roster exists for the block type (family registry gate — this is why
 *   no "not supernova" exclusion list is needed: supernova has no entry);
 * - the block's DIRECT parent has `contentColorSignal` support, in which case
 *   `update-blocks.js` force-syncs this block's palette variation to the
 *   parent's content story and a tile promise cannot hold (Gate 1 doc §1.5 —
 *   the check below mirrors update-blocks.js' own condition).
 *
 * Both `useSelect` mappings run unconditionally (hooks rules); the reference
 * variation is read through `useSelect` so tile selection re-derives when a
 * parent's variation changes — `getParentVariation` alone reads the store
 * non-reactively.
 */
import { useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import { getParentVariation } from '../editor/utils';
import {
  buildRowSurfaceOptions,
  COLOR_TILE_MANAGED_ATTRIBUTES,
  getRowSurfaceTiles,
} from './row-surfaces';

const useRowSurfaces = ( { name, clientId } ) => {
  const tiles = getRowSurfaceTiles( name );

  const parentForcesContentSync = useSelect( ( select ) => {
    if ( ! tiles || ! clientId ) {
      return false;
    }

    const { getBlockParents, getBlock } = select( 'core/block-editor' );
    const parents = getBlockParents( clientId );

    if ( ! Array.isArray( parents ) || ! parents.length ) {
      return false;
    }

    const parent = getBlock( parents[ parents.length - 1 ] );

    if ( ! parent?.name ) {
      return false;
    }

    const support = select( 'core/blocks' ).getBlockType( parent.name )?.supports?.novaBlocks?.colorSignal;

    return support === true || !! support?.contentColorSignal;
  }, [ clientId, tiles ] );

  const referenceVariation = useSelect( () => {
    return tiles ? getParentVariation( clientId ) : 1;
  }, [ clientId, tiles ] );

  // Memoized on the palettes payload reference (the overlay-filter picker's
  // exact pattern): thumbnails and resolved signals repaint when a fresh
  // payload arrives (editor reload), and on any context change above.
  const colorsConfig = window.styleManager?.colorsConfig;
  const options = useMemo( () => {
    return tiles ? buildRowSurfaceOptions( tiles, referenceVariation ) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ tiles, referenceVariation, colorsConfig ] );

  if ( ! tiles || parentForcesContentSync ) {
    return null;
  }

  return {
    options,
    managedAttributes: COLOR_TILE_MANAGED_ATTRIBUTES,
  };
};

export default useRowSurfaces;
