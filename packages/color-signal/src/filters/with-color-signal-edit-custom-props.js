import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "@novablocks/block-editor";

const withColorSignalEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const { attributes } = props;
    const { emphasisArea } = attributes;

    const style = props.style ? props.style : {};

    if ( !! supports?.novaBlocks?.colorSignal ) {

      let colorSignal = {
        '--nb-emphasis-area': emphasisArea
      }

      Object.assign( style, colorSignal );
    }

    return (
      <OriginalComponent { ...props } style={ style } />
    )
  };
}, "withColorSignalEditCustomProps" );

export default withColorSignalEditCustomProps;
