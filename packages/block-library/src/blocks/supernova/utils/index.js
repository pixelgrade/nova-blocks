const getPreviewAttributes = ( attributes ) => {

  if ( ! needsPreview( attributes ) ) {
    return Object.assign( {}, attributes, {
      preview: false,
    } );
  }

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

export const needsPreview = ( attributes ) => {
  return [ "parametric", "carousel" ].includes( attributes.layoutStyle ) && attributes.sourceType !== "content";
}

export const withPreviewAttributes = ( WrappedComponent => {
  return props => {
    return (
      <WrappedComponent { ...props } attributes={ getPreviewAttributes( props.attributes ) } />
    );
  }
} );
