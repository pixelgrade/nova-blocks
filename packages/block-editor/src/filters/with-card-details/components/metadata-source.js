import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";

import { ControlsGroup } from "../../../components";

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

export default MetadataSource;
