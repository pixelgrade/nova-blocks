import { Children } from "@wordpress/element";

const MasonryLayout = ( props ) => {
  const { attributes } = props;
  const children = Children.toArray( props.children );
  const { columns } = attributes;

  const groups = children.reduce( ( acc, curr, index ) => {
    if ( ! acc[ index % columns ] ) {
      acc[ index % columns ] = [];
    }
    acc[ index % columns ].push( curr );
    return acc;
  }, [] );

  return (
    <div className={ props.className }>
      { groups.map( groupItems => {
        return (
          <div className={ 'nb-collection__layout-column' }>
            { groupItems }
          </div>
        );
      } ) }
    </div>
  )
}

export default MasonryLayout;
