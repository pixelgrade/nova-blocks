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
      contentAlignment
    } = attributes;

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
          options={ [
            { label: 'None', value: 'none' },
            { label: 'Full', value: 'full' },
            { label: 'Wide', value: 'wide' },
            { label: 'Pull Left', value: 'pull-left' },
            { label: 'Pull Right', value: 'pull-right' },
          ] }
        />

      </ControlsTab>
    </ControlsSection>
    )
  }
}

export default Inspector;
