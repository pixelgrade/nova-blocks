/**
 * WordPress dependencies
 */

const { __ } = wp.i18n;
const { Component } = wp.element;

const { Panel, PanelBody, PanelRow, RadioControl } = wp.components;

const { InspectorControls } = wp.blockEditor;

class Inspector extends Component {
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;

    const {
      listStyle,
      listConnection
    } = attributes;

    return (
        <InspectorControls>
          { !attributes.ordered && <Panel>
            <PanelBody title='Marker Settings' initialOpen={true}>

              <PanelRow>
                <RadioControl
                  key={'novablocks-list-icon-controls'}
                  selected={listStyle}
                  className={'novablocks-list-style'}
                  onChange={( newListStyle ) => {
                    setAttributes( {listStyle: newListStyle} );
                  }}
                  options={[
                    {label: 'None', value: 'list-no-marker'},
                    {label: 'Bullet', value: 'list-bullet-style'},
                    {label: 'Checkmark', value: 'list-checkmark-style'}
                  ]}
                />
              </PanelRow>

            </PanelBody>
          </Panel>
          }

          <Panel>
            <PanelBody title='List Items Connection' initialOpen = {true}>

              <PanelRow>
                <RadioControl
                  key = {'novablocks-list-icon-controls' }
                  selected = { listConnection }
                  className = { 'novablocks-connection-style' }
                  onChange = { (newListConnection) => {
                    setAttributes( {listConnection: newListConnection} );
                  }}
                  options = {[
                    {label: 'None', value: 'is-style-no-connection'},
                    {label: 'Divider', value: 'is-style-divider'},
                    {label: 'Timeline', value: 'is-style-timeline'}
                  ]}
                />
              </PanelRow>

            </PanelBody>
          </Panel>
        </InspectorControls>
    )
  }
}

export default Inspector;
