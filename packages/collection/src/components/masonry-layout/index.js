import { Children, useLayoutEffect, useRef } from "@wordpress/element";

import { handleMasonryGrid } from '../../frontend/grid/handle-masonry-grid';

const MasonryLayout = ( props ) => {
  const children = Children.toArray( props.children );
  const containerRef = useRef( null );
  const controllerRef = useRef( null );

  useLayoutEffect( () => {
    const grid = containerRef.current;

    if ( ! grid ) {
      return;
    }

    const block = grid.closest( '[data-layout-style]' ) || grid;
    controllerRef.current = handleMasonryGrid( grid, block, props.attributes );
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

export default MasonryLayout;
