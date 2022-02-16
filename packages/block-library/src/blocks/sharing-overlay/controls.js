import { __ } from "@wordpress/i18n";
import { ControlsGroup, ControlsSection, ControlsTab, HeadingToolbar, ToggleGroup } from "@novablocks/block-editor";
import services from "./services";

const toggles = services.map( service => {
  const label = service.charAt( 0 ).toUpperCase() + service.slice( 1 );
  const attribute = `show${ label }`;

  return {
    label,
    attribute
  }
} );

const sectionToggles = [ {
  label: __( 'Copy Link', '__plugin_txtd' ),
  attribute: 'showCopy'
}, {
  label: __( 'Share Privately', '__plugin_txtd' ),
  attribute: 'showSharePrivately'
}, {
  label: __( 'Social Icons', '__plugin_txtd' ),
  attribute: 'showSocialIcons'
}, {
  label: __( 'Show Print', '__plugin_txtd' ),
  attribute: 'showShareInPerson'
} ];

const Controls = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    headingLevel,
    showSocialIcons
  } = attributes;

  return (
    <ControlsSection id={ 'display' } label={ __( 'Display', '__plugin_txtd' ) }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <HeadingToolbar minLevel={ 2 } maxLevel={ 5 } selectedLevel={ headingLevel } onChange={ ( newLevel ) => setAttributes( { headingLevel: newLevel } ) } />
        <ControlsGroup title={ __( 'Set up sections for this block', '__plugin_txtd' ) }>
          <ToggleGroup
            onChange={ setAttributes }
            toggles={ sectionToggles.map( sectionToggle => {
              return {
                ...sectionToggle,
                value: attributes[ sectionToggle.attribute ]
              }
            } ) }
          />
        </ControlsGroup>
        {
          showSocialIcons &&
          <ControlsGroup title={ __( 'Set up social icons', '__plugin_txtd' ) }>
            <ToggleGroup
              onChange={ setAttributes }
              toggles={ toggles.map( toggle => {
                return {
                  ...toggle,
                  value: attributes[ toggle.attribute ]
                }
              } ) }
            />
          </ControlsGroup>
        }
      </ControlsTab>
    </ControlsSection>
  )
};

export default Controls;
