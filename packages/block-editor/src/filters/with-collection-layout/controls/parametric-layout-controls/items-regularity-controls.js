import { __ } from "@wordpress/i18n";
import { RangeControl } from '@wordpress/components';

import { ControlsGroup } from "../../../../components";

const ItemsRegularityControls = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    imageweightleft,
    imageweightright,
    metadetailsleft,
    metadetailsright,
  } = attributes;

  return (
    <ControlsGroup title={ __( 'Items Regularity', '__plugin_txtd' ) }>
      <RangeControl
        label={ __( `Start of Image Variance`, '__plugin_txtd' ) }
        value={ imageweightleft }
        onChange={ imageweightleft => {
          if ( typeof imageweightleft !== "undefined" ) {
            setAttributes( { imageweightleft } )
          }
        } }
        min={ 0 }
        max={ 10 }
      />
      <RangeControl
        label={ __( `End of Image Variance`, '__plugin_txtd' ) }
        value={ imageweightright }
        onChange={ imageweightright => {
          if ( typeof imageweightright !== "undefined" ) {
            setAttributes( { imageweightright } )
          }
        } }
        min={ 0 }
        max={ 10 }
      />
      <RangeControl
        label={ __( `Start of Meta Fidelity`, '__plugin_txtd' ) }
        value={ metadetailsleft }
        onChange={ metadetailsleft => {
          if ( typeof metadetailsleft !== "undefined" ) {
            setAttributes( { metadetailsleft } )
          }
        } }
        min={ 0 }
        max={ 10 }
      />
      <RangeControl
        label={ __( `End of Meta Fidelity`, '__plugin_txtd' ) }
        value={ metadetailsright }
        onChange={ metadetailsright => {
          if ( typeof metadetailsright !== "undefined" ) {
            setAttributes( { metadetailsright } )
          }
        } }
        min={ 0 }
        max={ 10 }
      />
    </ControlsGroup>
  )
};

export default ItemsRegularityControls;
