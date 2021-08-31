import { CardsManager, ControlsGroup, ControlsSection, ControlsTab, ToggleGroup } from "../../components";
import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";

const { toggles } = CardsManager;

const ElementsDisplaySection = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const { showMeta } = attributes;

  return (
    <ControlsSection label={ __( 'Elements Visibility' ) } group={ __( 'Cards Manager' ) }>
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

        { showMeta && <MetaSource { ...props } /> }
      </ControlsTab>
    </ControlsSection>
  );
}

const MetaSource = ( props ) => {

  const {
    attributes: {
      primaryMetadata,
      secondaryMetadata,
    },
    setAttributes
  } = props;

  const metaSourceOptions = [
    { label: 'None', value: 'none' },
    { label: 'Author', value: 'author' },
    { label: 'Category', value: 'category' },
    { label: 'Comments', value: 'comments' },
    { label: 'Date', value: 'date' },
    { label: 'Tags', value: 'tags' },
    { label: 'Reading time', value:'reading-time'}
  ];

  return (
    <ControlsGroup title={ __( 'Additional Information', '__plugin_txtd' ) }>
      <SelectControl
        key={ 'primary-metadata-source' }
        label={ __( 'Primary Metadata' ) }
        value={ primaryMetadata }
        onChange={ primaryMetadata => {
          setAttributes( { primaryMetadata } )
        } }
        options={ metaSourceOptions }
      />
      <SelectControl
        key={ 'secondary-metadata-source' }
        label={ __( 'Secondary Metadata' ) }
        value={ secondaryMetadata }
        onChange={ secondaryMetadata => {
          setAttributes( { secondaryMetadata } )
        } }
        options={ metaSourceOptions }
      />
    </ControlsGroup>
  )
};

export default ElementsDisplaySection;
