import {createHigherOrderComponent} from "@wordpress/compose";
import {useSupports} from "../../hooks";

const withEmphasisAreaEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const colorSignalSupport = supports?.novaBlocks?.colorSignal;
    const {attributes} = props;

    const {emphasisArea} = attributes;

    const style = props.style ? props.style : {};

    if ( colorSignalSupport === true ) {

      let colorSignalProps = {'--nb-collection-emphasis-area': emphasisArea,}

      Object.assign( style, colorSignalProps );
    }

    return (
      <OriginalComponent {...props} style={style}/>
    )
  };
}, 'withEmphasisAreaEditCustomProps' )

export default withEmphasisAreaEditCustomProps;
