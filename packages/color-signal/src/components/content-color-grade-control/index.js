import { useCallback } from "@wordpress/element";

import { ColorGradesControl } from "../index";
import { getContentColorSignalLabel } from "../content-color-signal-control";
import { getAbsoluteColorVariation, getSignalRelativeToVariation } from "../../utils";
import { useSupports } from "@novablocks/block-editor";

const ContentColorGradeControl = props => {

  const {
    attributes,
    updateBlock,
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

    updateBlock( {
      contentColorSignal: nextContentColorSignal,
      contentPaletteVariation: nextContentPaletteVariation
    } );

  }, [ attributes, palette, updateBlock ] );

  if ( colorSignalSupport !== true && colorSignalSupport?.contentColorSignal !== true ) {
    return null;
  }

  return (
    <ColorGradesControl { ...props }
                        label={ getContentColorSignalLabel( colorSignalSupport ) }
                        value={ contentPaletteVariation }
                        signal={ contentColorSignal }
                        useReference={ false }
                        onChange={ onColorGradeChange }
                        parentVariation={ paletteVariation }
    />
  )
};

export default ContentColorGradeControl;
