import { useCallback } from "@wordpress/element";
import { select } from "@wordpress/data";

import { useMemoryState } from "@novablocks/block-editor";
import { useSupports } from "@novablocks/block-editor";

import { useCurrentColorSignalAttributes } from "../use-current-color-signal-attributes";
import {
  getUpdatedAttributes
} from "../../editor/utils";
import { getColorSignalAdoptionAttributes } from "../../editor/core-color-adoption";
import {
  shouldInheritParentPalette,
  supportsPaletteSelection,
} from "../../utils";

const withColorSignalProps = OriginalComponent => {

  return props => {

    const { attributes, setAttributes, clientId } = props;
    const supports = useSupports( props.name );
    const colorSignalSupport = supports?.novaBlocks?.colorSignal;
    const currentAttributes = useCurrentColorSignalAttributes( clientId, attributes, colorSignalSupport?.activationAttribute );
    const liveAttributes = {
      ...attributes,
      ...currentAttributes,
    };
    const memoryStateKey = clientId ? `showFunctionalColors:${ clientId }` : `showFunctionalColors:${ props.name }`;
    const [ showFunctionalColors, setShowFunctionalColors ] = useMemoryState( memoryStateKey, false );
    const stickySourceColor = colorSignalSupport?.stickySourceColor !== false;
    const paletteInheritanceAttribute = colorSignalSupport?.paletteInheritanceAttribute;
    const inheritParentPalette = shouldInheritParentPalette( colorSignalSupport, currentAttributes );
    const minColorSignal = colorSignalSupport?.minColorSignal || 0;
    const paletteSelectionEnabled = supportsPaletteSelection( colorSignalSupport );

    const updateBlock = useCallback( ( newAttributes, useSourceOnSameVariation = false, useSourceOnSameSignal = false ) => {
      const storedAttributes = clientId
        ? select( 'core/block-editor' )?.getBlockAttributes?.( clientId )
        : undefined;
      const adoptionSourceAttributes = storedAttributes && 'object' === typeof storedAttributes
        ? { ...liveAttributes, ...storedAttributes }
        : liveAttributes;
      const requestedAttributes = {
        ...newAttributes,
        ...getColorSignalAdoptionAttributes( adoptionSourceAttributes, colorSignalSupport ),
      };

      if ( paletteInheritanceAttribute
        && Object.prototype.hasOwnProperty.call( requestedAttributes, 'palette' )
        && ! Object.prototype.hasOwnProperty.call( requestedAttributes, paletteInheritanceAttribute ) ) {
        requestedAttributes[ paletteInheritanceAttribute ] = false;
      }

      const nextInheritance = shouldInheritParentPalette( colorSignalSupport, {
        ...currentAttributes,
        ...requestedAttributes,
      } );
      const updatedAttributes = getUpdatedAttributes( currentAttributes, clientId, requestedAttributes, stickySourceColor, useSourceOnSameVariation, useSourceOnSameSignal, nextInheritance, minColorSignal );

      if ( paletteInheritanceAttribute ) {
        updatedAttributes[ paletteInheritanceAttribute ] = Object.prototype.hasOwnProperty.call( requestedAttributes, paletteInheritanceAttribute )
          ? requestedAttributes[ paletteInheritanceAttribute ]
          : ( currentAttributes[ paletteInheritanceAttribute ] ?? nextInheritance );
      }

      setAttributes( {
        ...requestedAttributes,
        ...updatedAttributes,
      } );
    }, [ clientId, colorSignalSupport, currentAttributes, liveAttributes, minColorSignal, paletteInheritanceAttribute, setAttributes, stickySourceColor ] );

    return (
      <OriginalComponent
        { ...props }
        attributes={ liveAttributes }
        updateBlock={ updateBlock }
        inheritParentPalette={ inheritParentPalette }
        stickySourceColor={ stickySourceColor }
        paletteSelectionEnabled={ paletteSelectionEnabled }
        showFunctionalColors={ showFunctionalColors }
        setShowFunctionalColors={ setShowFunctionalColors }
      />
    )
  }
};

export default withColorSignalProps;
