import { __ } from '@wordpress/i18n';

import { SelectControl } from '@wordpress/components';

import { useSupports } from "../../../hooks";

const OPTIONS = [
  { value: 'smallest', label: __( 'Smallest', '__plugin_txtd' ) },
  { value: 'smaller',  label: __( 'Smaller',  '__plugin_txtd' ) },
  { value: 'normal',   label: __( 'Normal',   '__plugin_txtd' ) },
  { value: 'larger',   label: __( 'Larger',   '__plugin_txtd' ) },
  { value: 'largest',  label: __( 'Largest',  '__plugin_txtd' ) },
];

/**
 * Renders just the Description Size SelectControl. The outer grouping is
 * handled by the caller so this control can sit inside an existing
 * Typography group alongside other card-text controls.
 *
 * Respects the block's novaBlocks.cardDescriptionSize support flag and
 * renders null when the host block does not opt in.
 */
const CardDescriptionSize = ( props ) => {

  const {
    name,
    attributes: { cardDescriptionSize },
    setAttributes,
  } = props;

  const supports = useSupports( name );

  if (
    supports?.novaBlocks?.cardDescriptionSize !== true &&
    supports?.novaBlocks?.cardDescriptionSize?.controls !== true
  ) {
    return null;
  }

  return (
    <SelectControl
      label={ __( 'Description Size', '__plugin_txtd' ) }
      help={ __( 'Overrides the layout-aware baseline for card description text.', '__plugin_txtd' ) }
      value={ cardDescriptionSize || 'normal' }
      options={ OPTIONS }
      onChange={ ( nextValue ) => setAttributes( { cardDescriptionSize: nextValue } ) }
    />
  );
};

export default CardDescriptionSize;
