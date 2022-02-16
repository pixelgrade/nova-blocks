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
    <ControlsSection id={ 'color-signal' } label={ __( 'Color Signal', '__plugin_txtd' ) } order={ 10 }>
      <ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
        <Notice
          key={ 'color-signal-quick-start' }
          id={ 'novablocks-color-signal-quick-start' }
          content={ <p><strong>{__( 'Quickstart:', '__plugin_txtd' )}</strong> {__('Use this tool to signal particular blocks on your page. A block with a higher color signal stands apart from the rest of your content.', '__plugin_txtd')}</p> }
          dismissLabel={ __( '✔ Ok, I get it!', '__plugin_txtd' ) }
        />
        <ControlsGroup>
          <BlockColorSignalControl { ...props } />
        </ControlsGroup>
        <ContentColorSignalControl { ...props } />
        <EmphasisAreaControl { ...props } />
        <ColorSignalCustomizeControls.Slot />
        <PalettePicker { ...props } />
        <ColorReferenceToggleControl { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <PalettePicker { ...props } />
        <ControlsGroup>
          <BlockColorGradeControl { ...props } />
          <ContentColorGradeControl { ...props } />
        </ControlsGroup>
        <MiscellaneousControls { ...props } />
      </ControlsTab>
    </ControlsSection>
  )
} );

export default Controls;
