import { __ } from "@wordpress/i18n";

import { ControlsGroup, ControlsSection, ControlsTab, withVisibility } from "../../components";

import CardDescriptionSize from "../with-card-description-size/controls/card-description-size";

import {
  ButtonsStyle,
  CardTitleLevel,
  CollectionTitleLevel,
  ElementOrder,
  MetadataSource,
} from "./components";

const InspectorControls = ( props ) => {

  const { attributes } = props;
  const {
    postsToShow,
    columns,
  } = attributes;

  // Hide the "Collection" section when there is a single item in a single
  // column. Examples: Media Card, Hero Card.
  if ( postsToShow === 1 && columns === 1 ) {
    return null;
  }

  return (
    <ControlsSection
      id={ 'card-layout' }
      label={ __( 'Content Details', '__plugin_txtd' ) }
      group={ __( 'Card Anatomy', '__plugin_txtd' ) }
      order={ 20 }>
      <ControlsTab label={ __( 'Appearance', '__plugin_txtd' ) }>
        <AppearanceTab { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Structure', '__plugin_txtd' ) }>
        <ElementOrder { ...props } />
        <MetadataSource { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
};

const AppearanceTab = withVisibility( 'card-details-content' )( props => {
  return (
    <ControlsGroup title={ __( 'Typography', '__plugin_txtd' ) }>
      <CollectionTitleLevel { ...props } />
      <CardTitleLevel { ...props } />
      <CardDescriptionSize { ...props } />
      <ButtonsStyle { ...props } />
    </ControlsGroup>
  );
} );

export default withVisibility( 'card-details' )( InspectorControls );
