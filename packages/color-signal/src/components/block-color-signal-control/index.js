import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import { SignalControl } from "@novablocks/block-editor";

import { getParentVariation } from "../../editor/utils";

import {
  computeColorSignal,
  getAbsoluteColorVariation,
  getMaxSignal,
  removeSiteVariationOffset
} from "../../utils";

const BlockColorSignal = props => {

  const {
    attributes,
    updateBlock,
    clientId,
  } = props;

  const {
    colorSignal,
    palette,
  } = attributes;

  const onSignalChange = useCallback( nextSignal => {
    const referenceVariation = getParentVariation( clientId );
    const absoluteVariation = getAbsoluteColorVariation( attributes );
    const nextVariation = computeColorSignal( referenceVariation, nextSignal, palette, absoluteVariation );
    const finalVariation = removeSiteVariationOffset( nextVariation );

    updateBlock( {
      paletteVariation: finalVariation,
      useSourceColorAsReference: false,
    }, true, true );

  }, [ palette, updateBlock ] );

  return (
    <SignalControl
      { ...props }
      max={ getMaxSignal( palette ) }
      label={ __( 'Block Color Signal', '__plugin_txtd' ) }
      signal={ colorSignal }
      onChange={ onSignalChange } />
  )
};

export default BlockColorSignal;
