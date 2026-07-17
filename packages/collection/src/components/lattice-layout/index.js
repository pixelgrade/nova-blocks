import { Children, cloneElement, isValidElement, useLayoutEffect, useRef } from '@wordpress/element';

import { handleLatticeGrid } from '../../frontend/grid/handle-lattice-grid';

const LatticeLayout = ( props ) => {
  const children = Children.toArray( props.children ).map( ( child, sourceIndex ) => (
    isValidElement( child )
      ? cloneElement( child, { 'data-nb-lattice-source-index': sourceIndex } )
      : child
  ) );
  const containerRef = useRef( null );
  const controllerRef = useRef( null );

  useLayoutEffect( () => {
    const grid = containerRef.current;

    if ( ! grid ) {
      return;
    }

    const block = grid.closest( '[data-layout-style]' ) || grid;
    controllerRef.current = handleLatticeGrid( grid, block, props.attributes );
  }, [ props.attributes, props.children ] );

  useLayoutEffect( () => () => {
    if ( controllerRef.current ) {
      controllerRef.current.destroy();
      controllerRef.current = null;
    }
  }, [] );

  return (
    <div className={ props.className } ref={ containerRef }>
      { children }
    </div>
  );
};

export default LatticeLayout;
