import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import { ColorGradesControl } from "../index";

const BlockColorGradeControl = props => {

  const {
    attributes,
    updateBlock,
  } = props;

  const {
    paletteVariation,
    colorSignal
  } = attributes;

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
                        onChange={ onPaletteVariationChange } />
  )
}

export default BlockColorGradeControl;
