import { __ } from "@wordpress/i18n";

import { CollectionManager, ControlsGroup, ControlsSection, ControlsTab } from "../../components";

import { MetadataSource } from "./components";

const ElementsDisplaySection = ( props ) => {

  return (
    <ControlsSection label={ __( 'Elements Visibility' ) } group={ __( 'Input' ) } order={ 20 }>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
          <CollectionManager {...props}/>
        </ControlsGroup>

        <MetadataSource { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
}



export default ElementsDisplaySection;
