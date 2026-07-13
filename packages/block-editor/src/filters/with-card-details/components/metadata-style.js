import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { ControlsGroup, withVisibility } from '../../../components';

const MetadataStyle = ( props ) => {
  const { attributes, setAttributes } = props;
  const { cardMetadataStyle, showMeta } = attributes;

  if ( ! showMeta ) {
    return null;
  }

  return (
    <ControlsGroup title={ __( 'Metadata', '__plugin_txtd' ) }>
      <SelectControl
        label={ __( 'Metadata Style', '__plugin_txtd' ) }
        help={ __( 'Use the site-wide style or override this collection.', '__plugin_txtd' ) }
        value={ cardMetadataStyle || 'inherit' }
        onChange={ ( cardMetadataStyle ) => setAttributes( { cardMetadataStyle } ) }
        options={ [
          { label: __( 'Use site style', '__plugin_txtd' ), value: 'inherit' },
          { label: __( 'Plain', '__plugin_txtd' ), value: 'plain' },
          { label: __( 'Accent Label', '__plugin_txtd' ), value: 'accent-label' },
        ] }
      />
    </ControlsGroup>
  );
};

export default withVisibility( 'metadata-style' )( MetadataStyle );
