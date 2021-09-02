import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const SwapShapesButton = ( props ) => {
  const { attributes, setAttributes } = props;
  const newAttributes = {};
  const atts = [ 'Sides', 'PatternSeed', 'Complexity', 'Smoothness' ];

  atts.forEach( att => {
    newAttributes[ `blob${ att }` ] = attributes[ `blobMask${ att }` ];
    newAttributes[ `blobMask${ att }` ] = attributes[ `blob${ att }` ];
  } );

  return (
    <Button
      isPrimary
      icon={ 'controls-repeat' }
      onClick={ () => { setAttributes( newAttributes ) } }
    >
      { __( 'Swap shapes', '__plugin_txtd' ) }
    </Button>
  )
};

export default SwapShapesButton;
