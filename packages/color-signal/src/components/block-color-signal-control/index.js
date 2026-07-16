import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import { SignalControl } from "@novablocks/block-editor";

import { getSignalChangeAttributes } from "../../editor/utils";

import { getMaxSignal } from "../../utils";

const BlockColorSignal = props => {

  const {
    attributes,
    updateBlock,
    clientId,
    inheritParentPalette,
  } = props;

  const {
    colorSignal,
    palette,
  } = attributes;

  const onSignalChange = useCallback( nextSignal => {
    updateBlock( getSignalChangeAttributes( attributes, clientId, nextSignal, inheritParentPalette ), true, true );
  }, [ attributes, clientId, inheritParentPalette, updateBlock ] );

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
