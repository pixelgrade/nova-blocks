import { Button, TextControl } from '@wordpress/components';
import { useCallback } from '@wordpress/element';

const MarkersList = props => {
  const { attributes, setAttributes, clientId } = props;
  const { markers } = attributes;

  const renameMaker = useCallback( ( index, newName ) => {
    const newMarkers = markers.slice();
    newMarkers[ index ].name = newName;
    setAttributes( { markers: newMarkers } );
  }, [ markers ] );

  const deleteMarker = useCallback( ( index ) => {
    const newMarkers = markers.slice();
    newMarkers.splice( index, 1 );
    setAttributes( { markers: newMarkers } );
  }, [ markers ] );

  return (
    <div className={ 'novablocks-markers-list' }>
      {
        markers.map( ( marker, index ) => {
          return (
            <div className={ 'novablocks-markers-list-item' } key={ `${ clientId }-marker-${ index }` }>
              <TextControl
                value={ marker.name }
                onChange={ newName => { renameMaker( index, newName ) } }
              />
              <Button isDestructive onClick={ () => { deleteMarker( index ) } }>Delete</Button>
            </div>
          )
        } )
      }
    </div>
  )
}

export default MarkersList;
