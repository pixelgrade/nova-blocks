import { __ } from '@wordpress/i18n';

import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';

import { arrowDown, arrowLeft, arrowRight, arrowUp, stack } from '@wordpress/icons';

export const CARD_LAYOUT_OPTIONS = [
  { value: 'vertical', label: __( 'Vertical', '__plugin_txtd' ), icon: arrowDown },
  { value: 'vertical-reverse', label: __( 'Vertical Reverse', '__plugin_txtd' ), icon: arrowUp },
  { value: 'horizontal', label: __( 'Horizontal', '__plugin_txtd' ), icon: arrowRight },
  { value: 'horizontal-reverse', label: __( 'Horizontal Reverse', '__plugin_txtd' ), icon: arrowLeft },
  { value: 'stacked', label: __( 'Stacked', '__plugin_txtd' ), icon: stack },
];

const CardLayout = ( props ) => {

  const {
    attributes: {
      cardLayout
    },
    setAttributes
  } = props;

  return (
    <ToggleGroupControl
      __nextHasNoMarginBottom
      isBlock
      label={ __( 'Elements Stacking', '__plugin_txtd' ) }
      value={ cardLayout }
      onChange={ cardLayout => { setAttributes( { cardLayout } ) } }
    >
      { CARD_LAYOUT_OPTIONS.map( ( { value, label, icon } ) => (
        <ToggleGroupControlOptionIcon
          key={ value }
          value={ value }
          label={ label }
          icon={ icon }
        />
      ) ) }
    </ToggleGroupControl>
  )
};

export default CardLayout;
