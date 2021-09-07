import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import { SignalControl } from "@novablocks/block-editor";

import { getParentVariation } from "../../editor/utils";

import { computeColorSignal, getAbsoluteColorVariation, removeSiteVariationOffset } from "../../utils";

const BlockColorSignal = props => {

  const {
    attributes,
    updateBlock,
    clientId,
  } = props;

  const {
    colorSignal
  } = attributes;

  const onSignalChange = useCallback( nextSignal => {
    const referenceVariation = getParentVariation( clientId );
    const absoluteVariation = getAbsoluteColorVariation( attributes );
    const nextVariation = computeColorSignal( referenceVariation, nextSignal, absoluteVariation );
    const finalVariation = removeSiteVariationOffset( nextVariation );

    updateBlock( {
      paletteVariation: finalVariation,
      useSourceColorAsReference: false,
    }, true, true );

  }, [ updateBlock ] );

  return (
    <SignalControl { ...props } label={ __( 'Block Color Signal', '__plugin_txtd' ) } signal={ colorSignal } onChange={ onSignalChange } />
  )
}

export default BlockColorSignal;
