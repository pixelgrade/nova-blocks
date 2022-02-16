import { __ } from "@wordpress/i18n";

import {
  ControlsSection,
  ControlsTab,
  PresetControl,
} from "../../../components";

import presets from "./presets";
import { getRandomAttributes } from "../utils";

import ParametricLayoutControls from "./parametric-layout-controls";
import ClassicLayoutControls from "./classic-layout-controls";
import CarouselLayoutControls from "./carousel-layout-controls";
import CollectionLayoutStyleControl from "./collection-layout-style-control";

const Controls = ( props ) => {

  const {
    attributes: {
      layoutStyle
    },
  } = props;

  return (
    <ControlsSection
      id={ 'collection-layout' }
      label={ __( 'Collection Layout', '__plugin_txtd' ) }
      group={ __( 'Block Anatomy', '__plugin_txtd' ) }
      order={ 20 }>
      {
        'parametric' === layoutStyle &&
        <ControlsTab label={ __( 'Presets', '__plugin_txtd' ) }>
          <PresetControl
            label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
            options={ presets }
            randomize={ getRandomAttributes }
            { ...props }
          />
        </ControlsTab>
      }
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <CollectionLayoutStyleControl { ...props } />
        <ParametricLayoutControls { ...props } />
        <ClassicLayoutControls { ...props } />
        <CarouselLayoutControls { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
};

export default Controls;
