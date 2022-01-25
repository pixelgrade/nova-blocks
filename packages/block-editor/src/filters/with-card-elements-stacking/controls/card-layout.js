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
        { label: 'Vertical', value: 'vertical' },
        { label: 'Vertical Reverse', value: 'vertical-reverse' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Horizontal Reverse', value: 'horizontal-reverse' },
        { label: 'Stacked', value: 'stacked' },
      ] }
      onChange={ cardLayout => { setAttributes( { cardLayout } ) } }
    />
  )
};

export default CardLayout;
