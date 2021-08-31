import { ControlsGroup, ControlsSection, ControlsTab, PresetControl } from "../../../components";

import presets from "./presets";
import { getRandomAttributes } from "./utils";

import UniversalLayoutControls from "./universal-layout-controls";
import ParametricLayoutControls from "./parametric-layout-controls";
import CarouselLayoutControls from "./carousel-layout-controls";

const Controls = ( props ) => {

  const {
    attributes: {
      layoutStyle
    },
    setAttributes
  } = props;

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
        <ControlsGroup title={ __( 'Grid Anatomy' ) }>
          <RadioControl
            selected={ layoutStyle }
            className={ 'novablocks-collection-layout' }
            onChange={ ( layoutStyle ) => {
              setAttributes( { layoutStyle } );
            } }
            options={ [
              { label: 'Parametric Grid', value: 'parametric' },
              { label: 'Classic Grid', value: 'classic' },
              { label: 'Carousel', value: 'carousel' },
            ] }
          />
        </ControlsGroup>
        { layoutStyle === 'parametric' && <ParametricLayoutControls { ...props } /> }
        { layoutStyle !== 'parametric' && <UniversalLayoutControls { ...props } /> }
        { layoutStyle === 'carousel' && <CarouselLayoutControls { ...props } /> }
      </ControlsTab>
    </ControlsSection>
  );
};

export default Controls;
