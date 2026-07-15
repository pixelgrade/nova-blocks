import { __ } from "@wordpress/i18n";

import {
  ControlsGroup,
  SignalControl,
  useSupports
} from "@novablocks/block-editor";

import { getContentSignalChangeAttributes } from "../../editor/utils";

import { getMaxSignal } from "../../utils";

const ContentColorSignalControl = ( props ) => {

  const { attributes, updateBlock, name, clientId } = props;
  const { contentColorSignal, palette } = attributes;
  const supports = useSupports( name );
  const colorSignalSupport = supports?.novaBlocks?.colorSignal;

  if ( colorSignalSupport !== true && colorSignalSupport?.contentColorSignal !== true ) {
    return null;
  }

  return (
    <ControlsGroup key={'content_color_signal_group'}>
      <SignalControl { ...props }
                     label={ __( 'Content Area Color Signal', '__plugin_txtd' ) }
                       max={ getMaxSignal( palette ) }
                       signal={ contentColorSignal }
                       onChange={ contentColorSignal => {
                       updateBlock( getContentSignalChangeAttributes( attributes, clientId, contentColorSignal ) )
                     } } />
    </ControlsGroup>
  )
};

export default ContentColorSignalControl;
