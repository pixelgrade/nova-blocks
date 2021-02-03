import {
  ControlsTab,
  ControlsSection
} from "@novablocks/block-editor";

import { capitalizeFirstLetter } from '@novablocks/utils';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {RadioControl, ToggleControl} from '@wordpress/components';
import { select} from "@wordpress/data";

const HeaderInspectorControls = function( props ) {
  const {
    attributes: {
      shouldBeSticky,
      stickyRow,
    },
    clientId,
    setAttributes
  } = props;

  const { getBlock } = select( 'core/block-editor' );
  const header = getBlock( clientId );
  const rows = header.innerBlocks;

  let stickyRowOptions = [ ];

  rows.forEach( element => stickyRowOptions.push({
    label: capitalizeFirstLetter(element['attributes']['headerRowType']),
    value: element['attributes']['headerRowType']
  }));

  return (
    <ControlsSection label={ __('Layout') }>
      <ControlsTab label={__('Settings') }>
        <ToggleControl
          label={__( 'Sticky', '__plugin_txtd' )}
          help={__( 'Use it if you want to make this row sticky.', '__plugin_txtd' )}
          checked={shouldBeSticky}
          onChange={() => setAttributes( {shouldBeSticky: !shouldBeSticky} )}
        />

        { shouldBeSticky &&<RadioControl
          key={ 'sticky-header-controls' }
          label={ __( 'Select sticky Row', '__plugin_txtd' ) }
          value={ stickyRow }
          selected={ stickyRow }
          options={ stickyRowOptions }
          onChange={ ( nextStickyRow ) => setAttributes( { stickyRow: nextStickyRow } ) }
          /> }
      </ControlsTab>
    </ControlsSection>
  )
};

export default HeaderInspectorControls;
