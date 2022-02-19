import { __ } from "@wordpress/i18n";

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  Notice,
} from "@novablocks/block-editor";

import {
  ColorReferenceToggleControl,
  ContentColorSignalControl,
  MiscellaneousControls,
  PalettePicker,
  BlockColorSignalControl,
  BlockColorGradeControl,
  ContentColorGradeControl,
  ColorSignalCustomizeControls,
  withColorSignalProps,
  EmphasisAreaControl,
} from "../components";

const Controls = withColorSignalProps( props => {

  return (
    <ControlsSection id={ 'color-signal' } label={ __( 'Color Signal', '__plugin_txtd' ) } order={ 10 } key={'color_signal_controls_section'}>
      <ControlsTab label={ __( 'Customize', '__plugin_txtd' ) } key={'color_signal_customize_tab'}>
        <Notice
          key={ 'color-signal-quick-start' }
          id={ 'novablocks-color-signal-quick-start' }
          content={ <p><strong>{__( 'Quickstart:', '__plugin_txtd' )}</strong> {__('Use this tool to signal particular blocks on your page. A block with a higher color signal stands apart from the rest of your content.', '__plugin_txtd')}</p> }
          dismissLabel={ __( '✔ Ok, I get it!', '__plugin_txtd' ) }
        />
        <ControlsGroup key={'block_color_signal_group'}>
          <BlockColorSignalControl { ...props } key={'block_color_signal'}/>
        </ControlsGroup>
        <ContentColorSignalControl { ...props } key={'content_color_signal'}/>
        <EmphasisAreaControl { ...props } key={'emphasis_area'}/>
        <ColorSignalCustomizeControls.Slot key={'color_signal_customize'}/>
        <PalettePicker { ...props } />
        <ColorReferenceToggleControl { ...props } key={'color_reference_toggle'}/>
      </ControlsTab>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) } key={'color_signal_settings_tab'}>
        <PalettePicker { ...props } />
        <ControlsGroup key={'color_grade_group'}>
          <BlockColorGradeControl { ...props } key={'block_color_grade'}/>
          <ContentColorGradeControl { ...props } key={'content_color_grade'}/>
        </ControlsGroup>
        <MiscellaneousControls { ...props } key={'miscellaneous'}/>
      </ControlsTab>
    </ControlsSection>
  )
} );

export default Controls;
