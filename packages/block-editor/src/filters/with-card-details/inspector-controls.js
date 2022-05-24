import { __ } from "@wordpress/i18n";
import { PanelRow } from "@wordpress/components";

import { getControlsClasses, getLevelAttributes } from "@novablocks/utils";

import { ControlsGroup, ControlsSection, ControlsTab, HeadingToolbar, withVisibility } from "../../components";

import {
  ButtonsStyle,
  CardTitleLevel,
  CollectionTitleLevel,
  MetadataSource,
  MetadataPosition
} from "./components";

const InspectorControls = ( props ) => {

  const { attributes, setAttributes } = props;
  const { 
    level,
    postsToShow,
    columns
  } = attributes;

  // Hide the "Collection" section when there is 
  // a single item in a single column 
  // Examples: Media Card, Hero Card
  if ( postsToShow === 1 && columns === 1 ) {
    return null;
  }

  return (
    <ControlsSection 
      id={ 'card-layout' } 
      label={ __( 'Content Details', '__plugin_txtd' ) }
      group={ __( 'Card Anatomy', '__plugin_txtd' ) }
      order={ 20 }>
      {/*<ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
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
      </ControlsTab>*/}
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <CardDetailsContent { ...props } />
        <MetadataSource { ...props } />
        <MetadataPosition { ...props } />
      </ControlsTab>
    </ControlsSection>
  )
};

export const CardDetailsContent = withVisibility( 'card-details-content' )( props => {
  return (
    <ControlsGroup title={ __( 'Content', '__plugin_txtd' ) }>
      <CollectionTitleLevel { ...props } />
      <CardTitleLevel { ...props } />
      <ButtonsStyle { ...props } />
    </ControlsGroup>
  )
} );


export default withVisibility( 'card-details' )( InspectorControls );
