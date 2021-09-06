import { __ } from "@wordpress/i18n";

import { CardsManager, ControlsGroup, ControlsSection, ControlsTab, ToggleGroup } from "../../components";

import { MetadataSource } from "./components";

const { toggles } = CardsManager;

const ElementsDisplaySection = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  return (
    <ControlsSection label={ __( 'Elements Visibility' ) } group={ __( 'Input' ) } order={ 20 }>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
          <ToggleGroup
            onChange={ setAttributes }
            toggles={ toggles.filter( toggle => {
              return toggle.attribute !== 'showSubtitle';
            } ).map( toggle => {
              return {
                ...toggle,
                value: attributes[ toggle.attribute ]
              }
            } ) }
          />
        </ControlsGroup>

        <MetadataSource { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
}



export default ElementsDisplaySection;
