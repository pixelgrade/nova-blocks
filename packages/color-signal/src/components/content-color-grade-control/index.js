import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import { ColorGradesControl } from "../index";
import { getAbsoluteColorVariation, getSignalRelativeToVariation } from "../../utils";

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
