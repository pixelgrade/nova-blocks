import { __ } from '@wordpress/i18n';

import { SelectControl } from '@wordpress/components';

import { ControlsGroup } from "../../../components";

const OPTIONS = [
  { value: 'smallest', label: __( 'Smallest', '__plugin_txtd' ) },
  { value: 'smaller', label: __( 'Smaller', '__plugin_txtd' ) },
  { value: 'normal', label: __( 'Normal', '__plugin_txtd' ) },
  { value: 'larger', label: __( 'Larger', '__plugin_txtd' ) },
  { value: 'largest', label: __( 'Largest', '__plugin_txtd' ) },
];

const CardDescriptionSize = ( props ) => {

  const {
    attributes: {
      cardDescriptionSize,
    },
    setAttributes,
  } = props;

  return (
    <ControlsGroup title={ __( 'Description Size', '__plugin_txtd' ) }>
      <SelectControl
        label={ __( 'Font Size', '__plugin_txtd' ) }
        help={ __( 'Overrides the layout-aware baseline for card description text.', '__plugin_txtd' ) }
        value={ cardDescriptionSize || 'normal' }
        options={ OPTIONS }
        onChange={ ( nextValue ) => setAttributes( { cardDescriptionSize: nextValue } ) }
      />
    </ControlsGroup>
  );
};

export default CardDescriptionSize;
