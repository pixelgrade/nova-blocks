/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import {
  ControlsTab,
  ControlsSection
} from "@novablocks/block-editor";

const Controls = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    contentAlignment,
    align
  } = attributes;

  const CAN_BE_PULLED = align === undefined;

  let DEFAULT_CONTENT_ALIGNMENT = [
    { label: 'None', value: 'pull-none' }
  ]

  if ( CAN_BE_PULLED ) {

    DEFAULT_CONTENT_ALIGNMENT.push(
      { label: 'Pull Left', value: 'pull-left' },
      { label: 'Pull Right', value: 'pull-right' },
    )
  }

  return (
    <ControlsSection id={ 'layout' } label={ __( 'Layout' ) }>
      <ControlsTab label={ __( 'Alignments' ) }>
        <RadioControl
          key={ 'nb-card-layout-controls' }
          selected={ contentAlignment }
          className={ 'nb-card-layout' }
          onChange={ ( newAlignment ) => {
            setAttributes( { contentAlignment: newAlignment } );
          } }
          options={ DEFAULT_CONTENT_ALIGNMENT }
        />

      </ControlsTab>
    </ControlsSection>
  )
}

export default Controls;
