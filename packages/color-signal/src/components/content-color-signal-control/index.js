import { __ } from "@wordpress/i18n";

import { SignalControl, useSupports } from "@novablocks/block-editor";
import { computeColorSignal, getAbsoluteColorVariation, removeSiteVariationOffset } from "../../utils";

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
                     const { contentPaletteVariation } = attributes;
                     const absoluteVariation = getAbsoluteColorVariation( attributes );
                     const nextContentPaletteVariation = computeColorSignal( absoluteVariation, contentColorSignal, contentPaletteVariation );
                     const finalContentPaletteVariation = removeSiteVariationOffset( nextContentPaletteVariation );

                     setAttributes( {
                       contentColorSignal: contentColorSignal,
                       contentPaletteVariation: finalContentPaletteVariation,
                     } )
                   } } />
  )
}

export default ContentColorSignalControl;
