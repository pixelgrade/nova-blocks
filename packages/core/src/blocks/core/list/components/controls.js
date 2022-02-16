/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import {
  ControlsGroup,
  ControlsTab,
  ControlsSection
} from "@novablocks/block-editor";

const Controls = ( props ) => {

  return (
      <ControlsSection id={ 'display' } label={ __( 'Display', '__plugin_txtd' ) }>
        <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
          <MarkerSettings { ...props } />
          <ListItemsConnectionControl { ...props } />
        </ControlsTab>
      </ControlsSection>
  )
};

const MarkerSettings = ( props ) => {

  const { attributes, setAttributes } = props;
  const { listStyle, ordered } = attributes;

  if ( ordered ) {
    return null;
  }

  return (
    <ControlsGroup title={ __( 'Marker Settings', '__plugin_txtd' ) }>
      <RadioControl
        key={ 'novablocks-list-icon-controls' }
        selected={ listStyle }
        className={ 'novablocks-list-style' }
        onChange={ ( newListStyle ) => {
          setAttributes( { listStyle: newListStyle } );
        } }
        options={ [
          { label: 'None', value: 'list-no-marker' },
          { label: 'Bullet', value: 'list-bullet-style' },
          { label: 'Checkmark', value: 'list-checkmark-style' }
        ] }
      />
    </ControlsGroup>
  )
};

const ListItemsConnectionControl = ( props ) => {

  const { attributes, setAttributes } = props;
  const { listConnection } = attributes;

  return (
    <ControlsGroup title={ __( 'List Items Connection', '__plugin_txtd' ) }>
      <RadioControl
        key={ 'novablocks-list-icon-controls' }
        selected={ listConnection }
        className={ 'novablocks-connection-style' }
        onChange={ ( newListConnection ) => {
          setAttributes( { listConnection: newListConnection } );
        } }
        options={ [
          { label: 'None', value: 'is-style-no-connection' },
          { label: 'Divider', value: 'is-style-divider' },
          { label: 'Timeline', value: 'is-style-timeline' }
        ] }
      />
    </ControlsGroup>
  )
};

export default Controls;
