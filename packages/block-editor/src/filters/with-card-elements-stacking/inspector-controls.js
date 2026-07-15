import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import CardElementsStacking from './controls/card-elements-stacking';

const CardElementsStackingInspectorControls = ( props ) => {
  return (
    <InspectorControls>
      <PanelBody title={ __( 'Card Layout', '__plugin_txtd' ) }>
        <CardElementsStacking { ...props } />
      </PanelBody>
    </InspectorControls>
  );
};

export default CardElementsStackingInspectorControls;
