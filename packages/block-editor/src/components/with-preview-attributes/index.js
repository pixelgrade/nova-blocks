import { createHigherOrderComponent } from "@wordpress/compose";
import { getPreviewAttributes, needsPreview } from "@novablocks/utils";

const withPreviewAttributes = createHigherOrderComponent( WrappedComponent => {

  return props => {

    const setAttribtues = ( attributes ) => {

      if ( ! needsPreview( attributes ) ) {
        Object.assign( attributes, {
          preview: false
        } );
      }

      props.setAttribtues( attributes );
    };

    const attributes = getPreviewAttributes( props.attributes );

    const newProps = {
      ...props,
      attributes,
      setAttribtues
    };

    return (
      <WrappedComponent { ...newProps } />
    );
  }
}, 'withPreviewAttributes' );

export default withPreviewAttributes;
