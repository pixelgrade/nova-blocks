import { useSelect } from '@wordpress/data';

import { getReservedAncestorRailSides } from './layout-recipes';

const useAncestorRailReservations = ( clientId ) =>
  useSelect( ( select ) => {
    const { getBlock, getBlockParents } = select( 'core/block-editor' );
    const ancestorSidecars = getBlockParents( clientId )
      .map( ( ancestorId ) => getBlock( ancestorId ) )
      .filter( ( block ) => block && block.name === 'novablocks/sidecar' );

    return getReservedAncestorRailSides( ancestorSidecars );
  }, [ clientId ] );

export default useAncestorRailReservations;
