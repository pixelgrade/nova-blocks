import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";
import { useMemo } from "@wordpress/element";

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  PresetControl
} from "../../../components";

import presets from "./presets";
import { getRandomAttributes } from "../utils";

import ParametricLayoutControls from "./parametric-layout-controls";
import ClassicLayoutControls from "./classic-layout-controls";
import CarouselLayoutControls from "./carousel-layout-controls";

const Controls = ( props ) => {

  const {
    attributes: {
      layoutStyle
    },
    setAttributes
  } = props;

  const layoutStyleOptions = useMemo( () => [
    { label: __( 'Parametric Grid', '__plugin_txtd' ), value: 'parametric' },
    { label: __( 'Classic Grid', '__plugin_txtd' ), value: 'classic' },
    { label: __( 'Carousel', '__plugin_txtd' ), value: 'carousel' },
  ], [] );

  const currentLayoutStyleLabel = useMemo( () => {
    const currentLayoutStyleOption = layoutStyleOptions.find( style => style.value === layoutStyle );
    return currentLayoutStyleOption ? currentLayoutStyleOption.label : null;
  }, [ layoutStyle ] );

  return (
    <ControlsSection label={ __( 'Collection Layout' ) } group={ __( 'Block Anatomy', '__plugin_txtd' ) }>
      <ControlsTab label={ __( 'General' ) }>
        <PresetControl
          label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
          options={ presets }
          randomize={ getRandomAttributes }
        />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup title={ __( 'Collection Layout Style' ) }>
          <RadioControl
            selected={ layoutStyle }
            className={ 'novablocks-collection-layout' }
            onChange={ ( layoutStyle ) => {
              setAttributes( { layoutStyle } );
            } }
            options={ layoutStyleOptions }
          />
        </ControlsGroup>
        <ParametricLayoutControls { ...props } />
        <ClassicLayoutControls { ...props } />
        <CarouselLayoutControls { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
};

export default Controls;
