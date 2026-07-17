import { __ } from "@wordpress/i18n";
import { RangeControl } from '@wordpress/components';

const ItemsPerRowControl = ( props ) => {

  const {
    attributes: {
      columns
    },
    setAttributes,
    min = 1,
    max = 4,
  } = props;

  return (
    <RangeControl
      value={ columns }
      onChange={ ( columns ) => {
        setAttributes( { columns } );
      } }
      label={ __( 'Number of Items per Row', '__plugin_txtd' ) }
      min={ min }
      max={ max }
    />
  )
};

export default ItemsPerRowControl;
