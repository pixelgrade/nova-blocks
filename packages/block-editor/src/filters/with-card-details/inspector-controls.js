import { __ } from "@wordpress/i18n";
import { PanelRow } from "@wordpress/components";

import { getControlsClasses, getLevelAttributes } from "@novablocks/utils";

import { ControlsGroup, ControlsSection, ControlsTab, HeadingToolbar, withVisibility } from "../../components";

import {
  CardTitleLevel,
  CollectionTitleLevel,
  MetadataSource,
  MetadataPosition
} from "./components";

const InspectorControls = ( props ) => {

  const { attributes, setAttributes } = props;
  const { level } = attributes;

  return (
    <ControlsSection id={ 'card-layout' } label={ __( 'Card Details' ) }>
      <ControlsTab label={ __( 'Customize' ) }>
        <div className={ getControlsClasses( attributes, getLevelAttributes ) }>
          <PanelRow>
            <span>{ __( 'Title Starting Size', '__plugin_txtd' ) }</span>
            <HeadingToolbar
              minLevel={ 2 }
              maxLevel={ 4 }
              selectedLevel={ level }
              onChange={ level => {
                const newAttributes = getLevelAttributes( { ...attributes, level } );
                setAttributes( newAttributes );
              } }
            />
          </PanelRow>
        </div>
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <CardDetailsContent { ...props } />
        <MetadataSource { ...props } />
        <MetadataPosition { ...props } />
      </ControlsTab>
    </ControlsSection>
  )
}

export const CardDetailsContent = withVisibility( 'card-details-content' )( props => {
  return (
    <ControlsGroup title={ __( 'Content' ) }>
      <CollectionTitleLevel { ...props } />
      <CardTitleLevel { ...props } />
    </ControlsGroup>
  )
} );


export default withVisibility( 'card-details' )( InspectorControls );
