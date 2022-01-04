import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import { ColorGradesControl } from "../index";
import { getParentVariation } from "../../editor/utils";

const BlockColorGradeControl = props => {

  const {
    attributes,
    updateBlock,
    clientId,
  } = props;

  const {
    paletteVariation,
    colorSignal
  } = attributes;

  const parentVariation = getParentVariation( clientId );

  const onPaletteVariationChange = useCallback( nextVariation => {

    updateBlock( {
      paletteVariation: nextVariation,
      useSourceColorAsReference: false,
    }, true, false );

  }, [ updateBlock ] );

  return (
    <ColorGradesControl { ...props }
                        label={ __( 'Block Color Signal', '__plugin_txtd' ) }
                        value={ paletteVariation }
                        signal={ colorSignal }
                        useReference={ true }
                        onChange={ onPaletteVariationChange }
                        parentVariation={ parentVariation }
    />
  )
}

export default BlockColorGradeControl;
