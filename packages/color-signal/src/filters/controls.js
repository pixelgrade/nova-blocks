import { __ } from "@wordpress/i18n";

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  Notice,
  PresetCardsControl,
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

import { ColorSignalPracticeGuide } from "../onboarding";
import { RowSurfaceThumb, useRowSurfaces } from "../presets";

const Controls = withColorSignalProps( props => {
  // Row Surfaces (Stage 3a Phase 3): managed-bundle surface tiles, rendered
  // as the FIRST tab only for blocks with a roster in the family registry
  // (core/group today) and outside contentColorSignal-forcing parents — see
  // use-row-surfaces.js. `null` keeps every other block's section unchanged.
  const rowSurfaces = useRowSurfaces( props );

  return (
    <ControlsSection id={ 'color-signal' } label={ __( 'Color Signal', '__plugin_txtd' ) } order={ 10 } key={'color_signal_controls_section'}>
      { !! rowSurfaces && (
        <ControlsTab label={ __( 'Presets', '__plugin_txtd' ) } key={'color_signal_presets_tab'}>
          <PresetCardsControl
            key={ 'row-surface-presets' }
            label={ __( 'Surface presets', '__plugin_txtd' ) }
            options={ rowSurfaces.options.map( ( option ) => ( {
              ...option,
              thumbnail: <RowSurfaceThumb palette={ option.palette } variation={ option.variation } />,
            } ) ) }
            managedAttributes={ rowSurfaces.managedAttributes }
            { ...props }
          />
        </ControlsTab>
      ) }
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
        <ColorSignalPracticeGuide key={'color_signal_practice_guide'} />
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
