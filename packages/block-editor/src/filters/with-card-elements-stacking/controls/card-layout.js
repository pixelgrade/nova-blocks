import { __ } from '@wordpress/i18n';

import { RadioControl } from '@wordpress/components';

const CardLayout = ( props ) => {

  const {
    attributes: {
      cardLayout
    },
    setAttributes
  } = props;

  return (
    <RadioControl
      selected={ cardLayout }
      options={ [
        { label: __( '↓ Vertical ', '__plugin_txtd' ), value: 'vertical' },
        { label: __( '↑ Vertical Reverse' , '__plugin_txtd' ), value: 'vertical-reverse' },
        { label: __( '→ Horizontal', '__plugin_txtd' ), value: 'horizontal' },
        { label: __( '← Horizontal Reverse', '__plugin_txtd' ), value: 'horizontal-reverse' },
        { label: __( '↺ Stacked' , '__plugin_txtd' ), value: 'stacked' },
      ] }
      onChange={ cardLayout => { setAttributes( { cardLayout } ) } }
    />
  )
};

export default CardLayout;
