/**
 * SectionLink — a subtle cross-section shortcut inside a drawer.
 *
 * Opens another Design Customization drawer in place (e.g. Collection Layout
 * pointing at Motion & Effects for the depth effects that moved there).
 * Drives the same memory-state keys the Drawers component reads, so the
 * navigation is native to the drawer framework.
 */
import { useCallback, useContext } from '@wordpress/element';

import { useMemoryState } from '../../index';
import ControlsSectionsScopeContext from '../controls-sections/scope-context';
import { getControlsSectionsScopeKey } from '../controls-sections/utils';

const SectionLink = ( { sectionId, children } ) => {
  // Deep-links only ever point at another section in the same tab (Settings
  // or Styles) for the same block type, so it reads/writes the exact same
  // scoped memory-state keys the Drawers instance around it uses.
  const scope = useContext( ControlsSectionsScopeContext );
  const scopeKey = getControlsSectionsScopeKey( scope );

  const [ , setActiveDrawerId ] = useMemoryState( `drawerActiveId:${ scopeKey }` );
  const [ , setDrawerOpen ] = useMemoryState( `drawerOpen:${ scopeKey }` );

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
