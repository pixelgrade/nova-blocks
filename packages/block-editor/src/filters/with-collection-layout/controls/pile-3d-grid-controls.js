import { ToggleControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const TARGET_OPTIONS = [
  { label: __( 'Individual items', '__plugin_txtd' ), value: 'item' },
  { label: __( 'Columns', '__plugin_txtd' ), value: 'column' },
];

const RULE_OPTIONS = [
  { label: __( 'Odd', '__plugin_txtd' ), value: 'odd' },
  { label: __( 'Even', '__plugin_txtd' ), value: 'even' },
];

const Pile3dGridControls = ( { attributes, setAttributes } ) => {
  const { pile3dEffect, pile3dTarget, pile3dTargetRule } = attributes;

  return (
    <>
      <ToggleControl
        label={ __( 'Enable 3D Grid', '__plugin_txtd' ) }
        checked={ pile3dEffect }
        onChange={ ( value ) => setAttributes( { pile3dEffect: value } ) }
      />
      { pile3dEffect && (
        <>
          <SelectControl
            label={ __( 'Apply the rules on', '__plugin_txtd' ) }
            value={ pile3dTarget }
            options={ TARGET_OPTIONS }
            onChange={ ( value ) => setAttributes( { pile3dTarget: value } ) }
          />
          <SelectControl
            label={ __( 'Pattern', '__plugin_txtd' ) }
            value={ pile3dTargetRule }
            options={ RULE_OPTIONS }
            onChange={ ( value ) => setAttributes( { pile3dTargetRule: value } ) }
          />
        </>
      ) }
    </>
  );
};

export default Pile3dGridControls;
