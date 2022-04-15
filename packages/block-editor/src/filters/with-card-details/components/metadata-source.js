import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";

import { ControlsGroup, withVisibility } from "../../../components";

const MetadataSource = ( props ) => {

  const {
    attributes: {
      primaryMetadata,
      secondaryMetadata,
      showMeta
    },
    setAttributes
  } = props;

  if ( ! showMeta ) {
    return null;
  }

  const metaSourceOptions = [
    { label: __( 'None', '__plugin_txtd' ), value: 'none' },
    { label: __( 'Author', '__plugin_txtd' ), value: 'author' },
    { label: __( 'Category', '__plugin_txtd' ), value: 'category' },
    { label: __( 'Comments', '__plugin_txtd' ), value: 'comments' },
    { label: __( 'Date', '__plugin_txtd' ), value: 'date' },
    { label: __( 'Tags', '__plugin_txtd' ), value: 'tags' },
    { label: __( 'Reading time', '__plugin_txtd' ), value:'reading-time'}
  ];

  return (
    <ControlsGroup title={ __( 'Additional Information', '__plugin_txtd' ) }>
      <SelectControl
        key={ 'primary-metadata-source' }
        label={ __( 'Primary Metadata', '__plugin_txtd' ) }
        value={ primaryMetadata }
        onChange={ primaryMetadata => {
          setAttributes( { primaryMetadata } )
        } }
        options={ metaSourceOptions }
      />
      <SelectControl
        key={ 'secondary-metadata-source' }
        label={ __( 'Secondary Metadata', '__plugin_txtd' ) }
        value={ secondaryMetadata }
        onChange={ secondaryMetadata => {
          setAttributes( { secondaryMetadata } )
        } }
        options={ metaSourceOptions }
      />
    </ControlsGroup>
  )
};

export default withVisibility( 'metadata-source' )( MetadataSource );
