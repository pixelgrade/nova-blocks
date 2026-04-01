import { useCallback } from "@wordpress/element";

import { useMemoryState } from "@novablocks/block-editor";
import { useSupports } from "@novablocks/block-editor";

import { useCurrentColorSignalAttributes } from "../use-current-color-signal-attributes";
import {
  getUpdatedAttributes
} from "../../editor/utils";

const withColorSignalProps = OriginalComponent => {

  return props => {

    const { attributes, setAttributes, clientId } = props;
    const currentAttributes = useCurrentColorSignalAttributes( clientId, attributes );
    const liveAttributes = {
      ...attributes,
      ...currentAttributes,
    };
    const memoryStateKey = clientId ? `showFunctionalColors:${ clientId }` : `showFunctionalColors:${ props.name }`;
    const [ showFunctionalColors, setShowFunctionalColors ] = useMemoryState( memoryStateKey, false );
    const supports = useSupports( props.name );
    const stickySourceColor = supports?.novaBlocks?.colorSignal?.stickySourceColor !== false;

    const updateBlock = useCallback( ( newAttributes, useSourceOnSameVariation = false, useSourceOnSameSignal = false ) => {
      const updatedAttributes = getUpdatedAttributes( currentAttributes, clientId, newAttributes, stickySourceColor, useSourceOnSameVariation, useSourceOnSameSignal );
      setAttributes( updatedAttributes );
    }, [ clientId, currentAttributes, setAttributes, stickySourceColor ] );

    return (
      <OriginalComponent
        { ...props }
        attributes={ liveAttributes }
        updateBlock={ updateBlock }
        stickySourceColor={ stickySourceColor }
        showFunctionalColors={ showFunctionalColors }
        setShowFunctionalColors={ setShowFunctionalColors }
      />
    )
  }
};

export default withColorSignalProps;
