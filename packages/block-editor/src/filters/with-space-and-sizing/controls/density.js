import { __ } from '@wordpress/i18n';
import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import { DENSITY_VALUES } from '@novablocks/utils';

import { ControlsGroup } from '../../../components';

const DensityControl = props => {
  if ( props.name !== 'core/group' ) {
    return null;
  }

  const { attributes, setAttributes } = props;
  const {
    density,
    spacingModifier,
    spacingMultiplierOverride,
  } = attributes;
  const hasFineTune = spacingModifier !== 1 || spacingMultiplierOverride !== 1;
  const help = hasFineTune
    ? density
      ? __( 'Fine-tune spacing overrides this density.', '__plugin_txtd' )
      : __( 'Custom spacing is active in the fine-tune controls.', '__plugin_txtd' )
    : __( 'Scale the Group rhythm from the site spacing.', '__plugin_txtd' );

  return (
    <ControlsGroup title={ __( 'Density', '__plugin_txtd' ) }>
      <ToggleGroupControl
        label={ __( 'Density', '__plugin_txtd' ) }
        value={ density }
        onChange={ value => setAttributes( { density: value } ) }
        help={ help }
        isBlock
        isDeselectable
      >
        { DENSITY_VALUES.map( value => (
          <ToggleGroupControlOption
            key={ value }
            value={ value }
            label={ value.toUpperCase() }
          />
        ) ) }
      </ToggleGroupControl>
    </ControlsGroup>
  );
};

export default DensityControl;
