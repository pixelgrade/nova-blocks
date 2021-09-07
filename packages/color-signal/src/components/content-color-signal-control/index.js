import { __ } from "@wordpress/i18n";

import { SignalControl, useSupports } from "@novablocks/block-editor";

const ContentColorSignalControl = ( props ) => {

  const { attributes, setAttributes, name } = props;
  const { contentColorSignal } = attributes;
  const supports = useSupports( name );
  const colorSignalSupport = supports?.novaBlocks?.colorSignal;

  if ( colorSignalSupport !== true && colorSignalSupport?.contentColorSignal !== true ) {
    return null;
  }

  return (
    <SignalControl { ...props }
                   label={ __( 'Content Area Color Signal', '__plugin_txtd' ) }
                   signal={ contentColorSignal }
                   onChange={ contentColorSignal => {
                     setAttributes( { contentColorSignal: contentColorSignal } )
                   } } />
  )
}

export default ContentColorSignalControl;
