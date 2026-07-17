/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RadioControl, RangeControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
  ControlsGroup,
  RuleControls,
  ControlsTab,
  ControlsSection,
} from "@novablocks/block-editor";

const HeaderRowInspectorControls = ( props ) => {

  const { attributes, setAttributes, clientId } = props;

  // Direction only matters when the row holds more than one block; with a
  // single child both values render identically, so hide the dead control.
  const innerBlocksCount = useSelect(
    select => select( 'core/block-editor' ).getBlockCount( clientId ),
    [ clientId ]
  );

  const {
    contentDirection,
    contentAlignment,
    navigationColumns,
    navigationLinkVerticalSpacing,
    ruleWeight,
    ruleStrength,
  } = attributes;
  const hasRuleAbove = ( attributes.className || '' ).split( /\s+/ ).includes( 'is-style-rule-above' );

  return (
    <Fragment>
      <ControlsSection id={ 'row-layout' } label={ __( 'Row Layout', '__plugin_txtd' ) } placement={ 'settings' } key={ 'header_row_layout' }>
        <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) } key={ 'header_row_layout_settings' }>
          <ControlsGroup>
            { innerBlocksCount > 1 && <RadioControl
              key={ 'header-row-content-direction' }
              label={ __( 'Content Direction', '__plugin_txtd' ) }
              help={ __( 'Stack this row’s blocks vertically instead of laying them out side by side. Applies on desktop; the mobile header keeps its own layout.', '__plugin_txtd' ) }
              selected={ contentDirection === 'column' ? 'column' : 'row' }
              onChange={ value => setAttributes( { contentDirection: value } ) }
              options={ [
                { label: __( 'Horizontal', '__plugin_txtd' ), value: 'row' },
                { label: __( 'Vertical', '__plugin_txtd' ), value: 'column' },
              ] }
            /> }
            <RadioControl
              key={ 'header-row-content-alignment' }
              label={ __( 'Content Alignment', '__plugin_txtd' ) }
              help={ __( 'Auto keeps the classic distribution: first block left, last block right, a single block centered.', '__plugin_txtd' ) }
              selected={ [ 'start', 'center', 'end' ].includes( contentAlignment ) ? contentAlignment : '' }
              onChange={ value => setAttributes( { contentAlignment: value } ) }
              options={ [
                { label: __( 'Auto', '__plugin_txtd' ), value: '' },
                { label: __( 'Start', '__plugin_txtd' ), value: 'start' },
                { label: __( 'Center', '__plugin_txtd' ), value: 'center' },
                { label: __( 'End', '__plugin_txtd' ), value: 'end' },
              ] }
            />
            <RangeControl
              label={ __( 'Navigation Menu Columns', '__plugin_txtd' ) }
              help={ __( 'Split the menu items of this row’s navigation into columns on desktop.', '__plugin_txtd' ) }
              value={ navigationColumns }
              onChange={ navigationColumns => setAttributes( { navigationColumns } ) }
              min={ 1 }
              max={ 3 }
              step={ 1 }
            />
            <RangeControl
              label={ __( 'Navigation Link Vertical Spacing', '__plugin_txtd' ) }
              help={ __( 'Adjust the vertical breathing room around each navigation link, relative to its font size.', '__plugin_txtd' ) }
              value={ navigationLinkVerticalSpacing }
              onChange={ navigationLinkVerticalSpacing => setAttributes( { navigationLinkVerticalSpacing } ) }
              min={ 0 }
              max={ 150 }
              step={ 5 }
            />
          </ControlsGroup>
        </ControlsTab>
      </ControlsSection>
      { hasRuleAbove && (
        <ControlsSection id={ 'row-rule' } label={ __( 'Rule', '__plugin_txtd' ) } placement={ 'settings' } key={ 'header_row_rule' }>
          <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) } key={ 'header_row_rule_settings' }>
            <ControlsGroup>
              <RuleControls
                ruleWeight={ ruleWeight }
                ruleStrength={ ruleStrength }
                setAttributes={ setAttributes }
              />
            </ControlsGroup>
          </ControlsTab>
        </ControlsSection>
      ) }
    </Fragment>
  );
};

export default HeaderRowInspectorControls;
