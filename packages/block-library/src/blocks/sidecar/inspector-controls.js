/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RadioControl, ToggleControl, PanelBody, SelectControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const SidecarInspectorControls = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    sidebarWidth,
    sidebarPosition,
    lastItemIsSticky,
    tagName: TagName = 'div'
  } = attributes;

  const htmlElementMessages = {
    header: __(
      'The <header> element should represent introductory content, typically a group of introductory or navigational aids.'
    ),
    main: __(
      'The <main> element should be used for the primary content of your document only. '
    ),
    section: __(
      'The <section> element should represent a standalone portion of the document that can\'t be better represented by another element.'
    ),
    article: __(
      'The <article> element should represent a self contained, syndicatable portion of the document.'
    ),
    aside: __(
      'The <aside> element should represent a portion of a document whose content is only indirectly related to the document\'s main content.'
    ),
    footer: __(
      'The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).'
    ),
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__( 'Settings' )}>
          <RadioControl
            key={'sidecar-sidebar-controls'}
            label={__( 'Sidebar Size', '__plugin_txtd' )}
            selected={sidebarWidth}
            options={
              [
                { label: 'Small', value: 'small' },
                { label: 'Medium', value: 'medium' },
                { label: 'Large', value: 'large' },
              ]
            }
            onChange={( nextSidebarWidth ) => {
              setAttributes( { sidebarWidth: nextSidebarWidth } );
            }}
          />

          <RadioControl
            key={'sidecar-sidebar-position'}
            label={__( 'Sidebar Position', '__plugin_txtd' )}
            selected={sidebarPosition}
            options={
              [
                { label: 'Show sidebar on left', value: 'left' },
                { label: 'Show sidebar on right', value: 'right' }
              ]
            }
            onChange={( nextSidebarPosition ) => {
              setAttributes( { sidebarPosition: nextSidebarPosition } );
            }}
          />

          <ToggleControl
            label={__( 'Enable sticky sidebar on scroll', '__plugin_txtd' )}
            help={
              lastItemIsSticky
                ? __( 'The last item inside sidebar will be sticky on scroll.', '__plugin_txtd' )
                : __( 'All blocks inside sidebar will be static.', '__plugin_txtd' )
            }
            checked={lastItemIsSticky}
            onChange={() => setAttributes( { lastItemIsSticky: !lastItemIsSticky } )}
          />
        </PanelBody>
      </InspectorControls>

      <InspectorControls __experimentalGroup="advanced">
        <SelectControl
          label={__( 'HTML element' )}
          options={[
            { label: __( 'Default (<div>)' ), value: 'div' },
            { label: '<header>', value: 'header' },
            { label: '<main>', value: 'main' },
            { label: '<section>', value: 'section' },
            { label: '<article>', value: 'article' },
            { label: '<aside>', value: 'aside' },
            { label: '<footer>', value: 'footer' },
          ]}
          value={TagName}
          onChange={( value ) =>
            setAttributes( { tagName: value } )
          }
          help={htmlElementMessages[TagName]}
        />
      </InspectorControls>
    </>
  );
};

export default SidecarInspectorControls;
