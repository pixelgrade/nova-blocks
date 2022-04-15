import { __ } from "@wordpress/i18n";
import { RangeControl } from '@wordpress/components';

const ItemsCountControl = ( props ) => {

  const {
    postsToShow,
    setAttributes,
  } = props;

  return (
    <RangeControl
      key={ 'collection-items-count' }
      label={ __( 'Items Count', '__plugin_txtd' ) }
      value={ postsToShow }
      onChange={ postsToShow => { setAttributes( { postsToShow } ) } }
      min={ 1 }
      max={ 20 }
      step={ 1 }
    />
  );
};

export default ItemsCountControl;
