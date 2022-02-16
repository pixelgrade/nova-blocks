import { RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useSettings } from "../../../hooks";
import { ControlsGroup } from "../../../components";
import withVisibility from "../../../components/with-visibility";

const MinimumContainerHeight = props => {

  const novablocksSettings = useSettings();

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    minHeightFallback,
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
        options={ novablocksSettings?.minimumHeightOptions }
      />
    </ControlsGroup>
  )
};

export default withVisibility( 'minimum-container-height', false )( MinimumContainerHeight );
