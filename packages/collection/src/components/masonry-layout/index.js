import { Children } from "@wordpress/element";

const MasonryLayout = ( props ) => {
  const { attributes } = props;
  const children = Children.toArray( props.children );
  const { columns } = attributes;
  const normalizedColumns = Math.max( parseInt( columns, 10 ) || 1, 1 );
  const editorLayoutStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${ normalizedColumns }, minmax(0, 1fr))`,
    gap: 'var(--nb-grid-spacing)',
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
    <div className={ props.className } style={ editorLayoutStyle }>
      { groups.map( ( groupItems, index ) => {
        return (
          <div className={ 'nb-collection__layout-column' } key={ index }>
            { groupItems }
          </div>
        );
      } ) }
    </div>
  )
}

export default MasonryLayout;
