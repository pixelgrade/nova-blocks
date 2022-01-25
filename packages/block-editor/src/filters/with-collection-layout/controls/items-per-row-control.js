import { __ } from "@wordpress/i18n";
import { RangeControl } from '@wordpress/components';

const ItemsPerRowControl = ( props ) => {

  const {
    attributes: {
      columns
    },
    setAttributes
  } = props;

  return (
    <RangeControl
      value={ columns }
      onChange={ ( columns ) => {
        setAttributes( { columns } );
      } }
      label={ __( 'Number of Items per Row' ) }
      min={ 1 }
      max={ 4 }
    />
  )
};

export default ItemsPerRowControl;
