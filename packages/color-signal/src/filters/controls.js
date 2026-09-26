import { __ } from "@wordpress/i18n";

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  Notice,
  PresetCardsControl,
  useSupports,
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
import { ButtonTileThumb, getColorTileMountPatch, RowSurfaceThumb, useColorTiles } from "../presets";

const Controls = withColorSignalProps( props => {
  // Color tiles: managed-bundle preset tiles, rendered as the FIRST tab only
  // for blocks with a family in the registry (Row Surfaces on core/group,
  // Button roles on core/button — color-tiles.json) and outside
  // contentColorSignal-forcing parents — see use-color-tiles.js. `null`
  // keeps every other block's section unchanged.
  const colorTiles = useColorTiles( props );
  const isButtonFamily = 'button' === colorTiles?.thumbnail;
  const colorSignalSupport = useSupports( props.name )?.novaBlocks?.colorSignal;
  // Still ONE setAttributes() patch: the tile values plus the content
  // variation the editor would otherwise rewrite on the next mount.
  const setTileAttributes = ( patch ) => props.setAttributes(
    getColorTileMountPatch( patch, props.attributes, colorSignalSupport )
  );

  return (
    <ControlsSection id={ 'color-signal' } label={ __( 'Color Signal', '__plugin_txtd' ) } order={ 10 } key={'color_signal_controls_section'}>
      { !! colorTiles && (
        <ControlsTab label={ __( 'Presets', '__plugin_txtd' ) } key={'color_signal_presets_tab'}>
          <PresetCardsControl
            key={ isButtonFamily ? 'button-role-presets' : 'row-surface-presets' }
            label={ isButtonFamily ? __( 'Button presets', '__plugin_txtd' ) : __( 'Surface presets', '__plugin_txtd' ) }
            options={ colorTiles.options.map( ( option ) => ( {
              ...option,
              thumbnail: isButtonFamily
                ? <ButtonTileThumb kind={ option.kind } palette={ option.palette } variation={ option.variation } />
                : <RowSurfaceThumb palette={ option.palette } variation={ option.variation } />,
            } ) ) }
            managedAttributes={ colorTiles.managedAttributes }
            { ...props }
            setAttributes={ setTileAttributes }
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
