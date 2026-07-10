import classnames from 'classnames';

import { Children, useEffect, useRef, useState } from "@wordpress/element";

import { calculateFitColumnCount } from '@novablocks/utils';

const MasonryLayout = ( props ) => {
  const { attributes } = props;
  const children = Children.toArray( props.children );
  const { columns, columnsFitMinWidth } = attributes;
  const containerRef = useRef( null );
  const [ measured, setMeasured ] = useState( { width: 0, gap: 0 } );

  const fitMinWidth = Number.parseFloat( columnsFitMinWidth ) || 0;

  // Fit-based responsive columns (columnsFitMinWidth > 0): mirror the
  // frontend engine — measure the available width and let the container
  // decide how many min-width columns fit, capped at the authored count.
  useEffect( () => {
    if ( fitMinWidth <= 0 || ! containerRef.current || typeof ResizeObserver !== 'function' ) {
      return;
    }

    const observer = new ResizeObserver( () => {
      if ( ! containerRef.current ) {
        return;
      }

      const styles = window.getComputedStyle( containerRef.current );

      setMeasured( {
        width: containerRef.current.getBoundingClientRect().width,
        gap: Number.parseFloat( styles.columnGap ) || 0,
      } );
    } );

    observer.observe( containerRef.current );

    return () => observer.disconnect();
  }, [ fitMinWidth ] );

  const authoredColumns = Math.max( parseInt( columns, 10 ) || 1, 1 );
  const normalizedColumns = fitMinWidth > 0 && measured.width > 0
    ? calculateFitColumnCount( {
        containerWidth: measured.width,
        columnGap: measured.gap,
        minColumnWidth: fitMinWidth,
        maxColumns: authoredColumns,
      } )
    : authoredColumns;

  const editorLayoutStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${ normalizedColumns }, minmax(0, 1fr))`,
    columnGap: 'var(--nb-grid-spacing)',
    alignItems: 'start',
  };

  const groups = children.reduce( ( acc, curr, index ) => {
    if ( ! acc[ index % normalizedColumns ] ) {
      acc[ index % normalizedColumns ] = [];
    }
    acc[ index % normalizedColumns ].push( curr );
    return acc;
  }, [] );

  return (
    <div className={ props.className } style={ editorLayoutStyle } ref={ containerRef }>
      { groups.map( ( groupItems, index ) => {
        // Column parity classes mirror the frontend's per-item
        // nb-collection__layout-item--col-* classes so column-aware theme
        // styling (mirrored cards, z-index layering) previews in the editor.
        const columnClassNames = classnames(
          'nb-collection__layout-column',
          `nb-collection__layout-column--col-${ index }`,
          `nb-collection__layout-column--col-${ index % 2 === 0 ? 'even' : 'odd' }`
        );

        return (
          <div className={ columnClassNames } key={ index }>
            { groupItems }
          </div>
        );
      } ) }
    </div>
  )
}

export default MasonryLayout;
