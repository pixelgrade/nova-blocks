import { __ } from "@wordpress/i18n";

import {
  ControlsGroup,
  SignalControl,
  useSupports
} from "@novablocks/block-editor";

import {
  computeColorSignal,
  getAbsoluteColorVariation,
  getMaxSignal,
  removeSiteVariationOffset,
} from "../../utils";

const ContentColorSignalControl = ( props ) => {

  const { attributes, setAttributes, name } = props;
  const { contentColorSignal, palette } = attributes;
  const supports = useSupports( name );
  const colorSignalSupport = supports?.novaBlocks?.colorSignal;

  if ( colorSignalSupport !== true && colorSignalSupport?.contentColorSignal !== true ) {
    return null;
  }

  return (
    <ControlsGroup>
      <SignalControl { ...props }
                     label={ __( 'Content Area Color Signal', '__plugin_txtd' ) }
                     max={ getMaxSignal( palette ) }
                     signal={ contentColorSignal }
                     onChange={ contentColorSignal => {
                       const { contentPaletteVariation } = attributes;
                       const absoluteVariation = getAbsoluteColorVariation( attributes );
                       const nextContentPaletteVariation = computeColorSignal( absoluteVariation, contentColorSignal, palette, contentPaletteVariation );
                       const finalContentPaletteVariation = removeSiteVariationOffset( nextContentPaletteVariation );

                       setAttributes( {
                         contentColorSignal: contentColorSignal,
                         contentPaletteVariation: finalContentPaletteVariation,
                       } )
                     } } />
    </ControlsGroup>
  )
}

export default ContentColorSignalControl;
