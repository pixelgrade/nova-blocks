import { __ } from "@wordpress/i18n";
import { PanelRow, RadioControl } from "@wordpress/components";

import { getControlsClasses, getLevelAttributes } from "@novablocks/utils";

import { ControlsGroup, ControlsSection, ControlsTab, HeadingToolbar } from "../../components";
import { MetadataSource } from "./components";

const InspectorControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    name
  } = props;

  const {
    level, // title starting level
    collectionTitleLevel,
    cardTitleLevel,

    metadataPosition,
  } = attributes;

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
        <ControlsGroup title={ __( 'Content' ) }>
          <PanelRow>
            <span className={'components-base-control__label '}>{__( 'Collection Title Heading', '__plugin_txtd' )}</span>
            <HeadingToolbar
              minLevel={ 1 }
              maxLevel={ 5 }
              selectedLevel={ collectionTitleLevel }
              onChange={ collectionTitleLevel => {
                setAttributes( { collectionTitleLevel } );
              } }
            />
          </PanelRow>
          <PanelRow>
            <span className={ 'components-base-control__label' }>{__( 'Card Title Heading', '__plugin_txtd' )}</span>
            <HeadingToolbar
              minLevel={ 1 }
              maxLevel={ 5 }
              selectedLevel={ cardTitleLevel }
              onChange={ cardTitleLevel => {
                setAttributes( { cardTitleLevel } );
              } }
            />
          </PanelRow>
        </ControlsGroup>
        <MetadataSource { ...props } />
        <ControlsGroup title={ __( 'Metadata Position' ) }>
          <RadioControl
            key={ 'collection-image-resizing' }
            selected={ metadataPosition }
            onChange={ metadataPosition => {
              setAttributes( { metadataPosition } )
            } }
            options={ [
              { label: 'Above Title', value: 'above-title' },
              { label: 'Below Title', value: 'below-title' },
              { label: 'Split (Above Title / Below Content)', value: 'split' },
            ] }
          />
        </ControlsGroup>
      </ControlsTab>
    </ControlsSection>
  )
}

export default InspectorControls;
