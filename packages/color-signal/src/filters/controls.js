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
} from "../components";

const Controls = withColorSignalProps( props => {

  return (
    <ControlsSection label={ __( 'Color Signal' ) } order={ 10 }>
      <ControlsTab label={ __( 'Customize' ) }>
        <Notice
          key={ 'color-signal-quick-start' }
          id={ 'novablocks-color-signal-quick-start' }
          content={ <p><strong>Quickstart:</strong> Use this tool to signal particular blocks on your page. A block with a higher color signal stands apart from the rest of your content.</p> }
          dismissLabel={ '✔ Ok, I get it!' }
        />
        <ControlsGroup>
          <BlockColorSignalControl { ...props } />
        </ControlsGroup>
        <ControlsGroup>
          <ContentColorSignalControl { ...props } />
        </ControlsGroup>
        <ControlsGroup>
          <ColorSignalCustomizeControls.Slot />
        </ControlsGroup>
        <PalettePicker { ...props } />
        <ColorReferenceToggleControl { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
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
