import { useCallback } from "@wordpress/element";

import { useMemoryState } from "@novablocks/block-editor";
import { useSupports } from "@novablocks/block-editor";

import {
  getUpdatedAttributes
} from "../../editor/utils";

const withColorSignalProps = OriginalComponent => {

  return props => {

    const { attributes, setAttributes, clientId } = props;
    const [ showFunctionalColors, setShowFunctionalColors ] = useMemoryState( 'showFunctionalColors', false );
    const supports = useSupports( props.name );
    const stickySourceColor = supports?.novaBlocks?.colorSignal?.stickySourceColor !== false;

    const updateBlock = useCallback( ( newAttributes, useSourceOnSameVariation = false, useSourceOnSameSignal = false ) => {
      const updatedAttributes = getUpdatedAttributes( attributes, clientId, newAttributes, stickySourceColor, useSourceOnSameVariation, useSourceOnSameSignal );
      setAttributes( updatedAttributes );
    }, [ attributes, clientId ] );

    return (
      <OriginalComponent
        { ...props }
        updateBlock={ updateBlock }
        stickySourceColor={ stickySourceColor }
        showFunctionalColors={ showFunctionalColors }
        setShowFunctionalColors={ setShowFunctionalColors }
      />
    )
  }
};

export default withColorSignalProps;
