import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import { ColorGradesControl } from "../index";
import { getAbsoluteColorVariation, getSignalRelativeToVariation } from "../../utils";
import { useSupports } from "@novablocks/block-editor";

const ContentColorGradeControl = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    palette,
    paletteVariation,
    contentPaletteVariation,
    contentColorSignal
  } = attributes;

  const supports = useSupports( name );
  const colorSignalSupport = supports?.novaBlocks?.colorSignal;

  if ( colorSignalSupport !== true && colorSignalSupport?.contentColorSignal !== true ) {
    return null;
  }

  const onColorGradeChange = useCallback( nextContentPaletteVariation => {

    const absoluteVariation = getAbsoluteColorVariation( {
      palette,
      paletteVariation: nextContentPaletteVariation,
      useSourceColorAsReference: false
    } );

    const nextContentColorSignal = getSignalRelativeToVariation( absoluteVariation, paletteVariation );

    setAttributes( {
      contentColorSignal: nextContentColorSignal,
      contentPaletteVariation: nextContentPaletteVariation
    } );

  }, [ palette, paletteVariation ] );

  return (
    <ColorGradesControl { ...props }
                        label={ __( 'Content Area Color Signal', '__plugin_txtd' ) }
                        value={ contentPaletteVariation }
                        signal={ contentColorSignal }
                        onChange={ onColorGradeChange }/>
  )
}

export default ContentColorGradeControl;
