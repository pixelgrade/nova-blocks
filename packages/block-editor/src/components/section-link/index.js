/**
 * SectionLink — a subtle cross-section shortcut inside a drawer.
 *
 * Opens another Design Customization drawer in place (e.g. Collection Layout
 * pointing at Motion & Effects for the depth effects that moved there).
 * Drives the same memory-state keys the Drawers component reads, so the
 * navigation is native to the drawer framework.
 */
import { useCallback } from '@wordpress/element';

import { useMemoryState } from '../../index';

const SectionLink = ( { sectionId, children } ) => {
  const [ , setActiveDrawerId ] = useMemoryState( 'drawerActiveId' );
  const [ , setDrawerOpen ] = useMemoryState( 'drawerOpen' );

  const openSection = useCallback( () => {
    setActiveDrawerId( sectionId );
    setDrawerOpen( true );
  }, [ sectionId, setActiveDrawerId, setDrawerOpen ] );

  return (
    <button type="button" className="nb-section-link" onClick={ openSection }>
      { children } &rarr;
    </button>
  );
};

export default SectionLink;
