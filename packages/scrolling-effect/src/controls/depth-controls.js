/**
 * The Cards tab's Depth controls — 3D Grid + Depth Parallax, moved here from
 * Collection Layout: they are effects on the cards themselves, not layout
 * fine-tuning. Everything on this tab is Plus, so the tab-level TryAndPlay
 * room provides the gating chrome — no per-control pills needed.
 *
 * "Depth Parallax" is the renamed "Parallax Scrolling" (pileParallaxAmount
 * unchanged) — the old name collided with the free Media parallax one tab
 * over. The Anima theme implements the scroll-linked movement.
 */
import { RangeControl, SelectControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const TARGET_OPTIONS = [
  { label: __( 'Individual items', '__plugin_txtd' ), value: 'item' },
  { label: __( 'Columns', '__plugin_txtd' ), value: 'column' },
];

const RULE_OPTIONS = [
  { label: __( 'Odd', '__plugin_txtd' ), value: 'odd' },
  { label: __( 'Even', '__plugin_txtd' ), value: 'even' },
];

const DepthControls = ( { attributes, setAttributes } ) => {
  const { pile3dEffect, pile3dTarget, pile3dTargetRule, pileParallaxAmount } = attributes;

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
      <RangeControl
        label={ __( 'Depth Parallax', '__plugin_txtd' ) }
        help={ __( 'Differential scroll movement between cards — works with the Anima theme.', '__plugin_txtd' ) }
        value={ pileParallaxAmount }
        onChange={ ( value ) => setAttributes( { pileParallaxAmount: value } ) }
        min={ 0 }
        max={ 120 }
        step={ 6 }
      />
    </>
  );
};

export default DepthControls;
