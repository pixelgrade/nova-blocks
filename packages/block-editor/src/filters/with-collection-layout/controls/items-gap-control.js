import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

const ItemsGapControl = ( props ) => {

  const {
    attributes: {
      gridGap
    },
    setAttributes
  } = props;

  return (
    <RangeControl
      value={ gridGap }
      onChange={ ( gridGap ) => {
        setAttributes( { gridGap } );
      } }
      label={ __( 'Items Gap' ) }
      min={ 0 }
      max={ 100 }
      step={ 25 }
    />
  )
}

export default ItemsGapControl;
