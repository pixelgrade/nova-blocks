import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import { ColorGradesControl } from "../index";
import { getAbsoluteColorVariation, getSignalRelativeToVariation } from "../../utils";
import { useSupports } from "@novablocks/block-editor";

const ContentColorGradeControl = props => {

  const {
    attributes,
    setAttributes,
    name
  } = props;

  const {
    palette,
    paletteVariation,
    contentPaletteVariation,
    contentColorSignal,
  } = attributes;

  const supports = useSupports( name );
  const colorSignalSupport = supports?.novaBlocks?.colorSignal;

  const onColorGradeChange = useCallback( nextContentPaletteVariation => {
    const absoluteVariation = getAbsoluteColorVariation( attributes );
    const nextContentColorSignal = getSignalRelativeToVariation( nextContentPaletteVariation, absoluteVariation, palette );

    setAttributes( {
      contentColorSignal: nextContentColorSignal,
      contentPaletteVariation: nextContentPaletteVariation
    } );

  }, [ attributes ] );

  if ( colorSignalSupport !== true && colorSignalSupport?.contentColorSignal !== true ) {
    return null;
  }

  return (
    <ColorGradesControl { ...props }
                        label={ __( 'Content Area Color Signal', '__plugin_txtd' ) }
                        value={ contentPaletteVariation }
                        signal={ contentColorSignal }
                        useReference={ false }
                        onChange={ onColorGradeChange }
                        parentVariation={ paletteVariation }
    />
  )
};

export default ContentColorGradeControl;
