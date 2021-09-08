import {createHigherOrderComponent} from "@wordpress/compose";
import {useSupports} from "@novablocks/block-editor";

const withMediaCompositionEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const {attributes} = props;

    const {elementsDistance} = attributes;

    const style = props.style ? props.style : {};

    if ( supports?.novaBlocks?.mediaComposition ) {

      let mediaCompositionProps = {'--novablocks-advanced-gallery-grid-gap': `${elementsDistance}px`}

      Object.assign( style, mediaCompositionProps );
    }

    return (
      <OriginalComponent {...props} style={style}/>
    )
  };
}, "withMediaCompositionEditCustomProps" );

export default withMediaCompositionEditCustomProps;
