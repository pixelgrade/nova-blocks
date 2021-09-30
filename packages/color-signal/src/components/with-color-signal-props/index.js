import { useCallback } from "@wordpress/element";
import { useMemoryState } from "@novablocks/block-editor";
import { getParentVariation } from "../../editor/utils";
import {
  addSiteVariationOffset, computeColorSignal,
  getAbsoluteColorVariation,
  getSignalRelativeToVariation,
  getSourceIndexFromPaletteId, removeSiteVariationOffset
} from "../../utils";

const withColorSignalProps = OriginalComponent => {

  return props => {

    const { attributes, setAttributes, clientId } = props;
    const [ showFunctionalColors, setShowFunctionalColors ] = useMemoryState( 'showFunctionalColors', false );

    const updateBlock = useCallback( ( newAttributes, useSourceOnSameVariation = false, useSourceOnSameSignal = false ) => {
      const referenceVariation = getParentVariation( clientId );
      const nextAttributes = Object.assign( {}, attributes, newAttributes );
      const { palette, useSourceColorAsReference } = nextAttributes;
      const sourceIndex = getSourceIndexFromPaletteId( palette );
      const absoluteVariation = getAbsoluteColorVariation( nextAttributes );
      const nextSignal = getSignalRelativeToVariation( absoluteVariation, referenceVariation );
      const sourceVariation = addSiteVariationOffset( sourceIndex + 1 );
      const sourceSignal = getSignalRelativeToVariation( sourceVariation, referenceVariation );
      const nextSourceAsReference = useSourceColorAsReference ||
                                    ( useSourceOnSameSignal && nextSignal === sourceSignal ) ||
                                    ( useSourceOnSameVariation && absoluteVariation === sourceVariation );
      const nextVariation = computeColorSignal( referenceVariation, nextSignal, absoluteVariation );
      const finalVariation = removeSiteVariationOffset( nextVariation );

      const { contentColorSignal, contentPaletteVariation } = nextAttributes;
      const nextContentVariation = computeColorSignal( finalVariation, contentColorSignal, contentPaletteVariation );

      setAttributes( {
        palette: palette,
        paletteVariation: nextSourceAsReference ? 1 : finalVariation,
        useSourceColorAsReference: nextSourceAsReference,
        colorSignal: nextSignal,
        contentPaletteVariation: contentColorSignal === 0 ? finalVariation : nextContentVariation,
      } );

    }, [ attributes, clientId ] );

    return (
      <OriginalComponent
        { ...props }
        updateBlock={ updateBlock }
        showFunctionalColors={ showFunctionalColors }
        setShowFunctionalColors={ setShowFunctionalColors }
      />
    )
  }
}

export default withColorSignalProps;
