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
      // prepare attribute values to be used in computing next attributes
      const nextAttributes = Object.assign( {}, attributes, newAttributes );
      const { palette, useSourceColorAsReference } = nextAttributes;

      // find out the the reference (parent) color variation to compute signal on
      const referenceVariation = getParentVariation( clientId );

      // find out the next absolute value of the paletteVariation attribute
      const absoluteVariation = getAbsoluteColorVariation( nextAttributes );
      const nextSignal = getSignalRelativeToVariation( absoluteVariation, referenceVariation );
      const computedVariation = computeColorSignal( referenceVariation, nextSignal, absoluteVariation );
      const nextVariation = removeSiteVariationOffset( computedVariation );

      // determine what will be the value for the useSourceColorAsReference attribute
      const sourceIndex = getSourceIndexFromPaletteId( palette );
      const sourceVariation = addSiteVariationOffset( sourceIndex + 1 );
      const sourceSignal = getSignalRelativeToVariation( sourceVariation, referenceVariation );
      const nextSourceAsReference = useSourceColorAsReference ||
                                    ( useSourceOnSameSignal && nextSignal === sourceSignal ) ||
                                    ( useSourceOnSameVariation && absoluteVariation === sourceVariation );

      const finalVariation = nextSourceAsReference ? sourceVariation : nextVariation;
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
