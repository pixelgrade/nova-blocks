import { RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { ControlsGroup } from "../../../components";
import withVisibility from "../../../components/with-visibility";

const MinimumContainerHeight = props => {

  const {
    attributes,
    setAttributes,
    settings
  } = props;

  const {
    minHeightFallback
  } = attributes;

  return (
    <ControlsGroup title={ __( 'Minimum Container Height', '__plugin_txtd' ) }>
      <RadioControl
        selected={ minHeightFallback }
        onChange={ minHeightFallback => {
          setAttributes( {
            minHeightFallback: parseFloat( minHeightFallback )
          } );
        } }
        options={ settings?.minimumHeightOptions }
      />
    </ControlsGroup>
  )
}

export default withVisibility( 'minimum-container-height', false )( MinimumContainerHeight );
