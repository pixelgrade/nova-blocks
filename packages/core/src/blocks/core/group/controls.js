/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

const { RadioControl } = wp.components;

import {
  ControlsTab,
  ControlsSection
} from "@novablocks/block-editor";

class Inspector extends Component {

  render() {
    const {
      attributes,
      setAttributes
    } = this.props;

    const {
      contentAlignment,
      align
    } = attributes;

    const CAN_BE_PULLED = align === undefined;

    let DEFAULT_CONTENT_ALIGNMENT =[
      { label: 'None', value: 'pull-none' }
    ]

    if (CAN_BE_PULLED) {

      DEFAULT_CONTENT_ALIGNMENT.push(
        { label: 'Pull Left', value: 'pull-left' },
        { label: 'Pull Right', value: 'pull-right' },
      )
    }

    return (
    <ControlsSection label={ __( 'Layout' ) }>
      <ControlsTab label={ __( 'Alignments' ) }>
        <RadioControl
          key={ 'novablocks-card-layout-controls' }
          selected={ contentAlignment }
          className={ 'novablocks-card-layout' }
          onChange={ ( newAlignment ) => {
            setAttributes( { contentAlignment: newAlignment } );
          } }
          options={ DEFAULT_CONTENT_ALIGNMENT }
        />

      </ControlsTab>
    </ControlsSection>
    )
  }
}

export default Inspector;
