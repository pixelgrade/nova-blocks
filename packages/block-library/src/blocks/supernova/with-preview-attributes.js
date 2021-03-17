const getPreviewAttributes = ( attributes ) => {

  if ( attributes?.preview ) {
    return attributes;
  }

  return Object.assign( {}, attributes, {
    layoutStyle: 'classic',
    columns: 1,
    cardLayout: 'horizontal',
    cardMediaOpacity: 100,
  } );
}

export const withPreviewAttributes = ( WrappedComponent => {
  return ( props => {
    return (
      <WrappedComponent { ...props } attributes={ getPreviewAttributes( props.attributes ) } />
    );
  } );
} );
