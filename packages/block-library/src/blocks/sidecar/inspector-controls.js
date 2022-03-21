/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RadioControl, ToggleControl, PanelBody, SelectControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { Fragment, useRef } from "@wordpress/element";
import { ControlsGroup, ControlsSection, ControlsTab, useInnerBlocks } from "@novablocks/block-editor";
import { useDispatch } from "@wordpress/data";
import { createBlock } from '@wordpress/blocks';

const SidecarInspectorControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    clientId,
  } = props;

  const {
    sidebarWidth,
    sidebarPosition,
    lastItemIsSticky,
    tagName: TagName = 'div'
  } = attributes;

  const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
  const innerBlocks = useInnerBlocks( clientId );
  const sidebarInnerBlocks = useRef( [] );

  const htmlElementMessages = {
    header: __(
      'The <header> element should represent introductory content, typically a group of introductory or navigational aids.', '__plugin_txtd'
    ),
    main: __(
      'The <main> element should be used for the primary content of your document only. ', '__plugin_txtd'
    ),
    section: __(
      'The <section> element should represent a standalone portion of the document that can\'t be better represented by another element.', '__plugin_txtd'
    ),
    article: __(
      'The <article> element should represent a self contained, syndicatable portion of the document.', '__plugin_txtd'
    ),
    aside: __(
      'The <aside> element should represent a portion of a document whose content is only indirectly related to the document\'s main content.', '__plugin_txtd'
    ),
    footer: __(
      'The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).', '__plugin_txtd'
    ),
  };

  return (
    <Fragment>
      <ControlsSection
        id={ 'layout' }
        order={ 10 }
        label={ __( 'Sidecar Layout', '__plugin_txtd' ) }
        group={ __( 'Block Anatomy', '__plugin_txtd' ) }
        key={ 'sidecar_layout' }>
        <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>

          <ControlsGroup>

            <RadioControl
              key={ 'sidecar-sidebar-position' }
              label={ __( 'Sidebar Position', '__plugin_txtd' ) }
              selected={ sidebarPosition }
              options={
                [
                  { label: __( 'Show sidebar on left', '__plugin_txtd' ), value: 'left' },
                  { label: __( 'Show sidebar on right', '__plugin_txtd' ), value: 'right' },
                  { label: __( 'No sidebar', '__plugin_txtd' ), value: 'none' }
                ]
              }
              onChange={ ( nextSidebarPosition ) => {
                if ( nextSidebarPosition === 'none' ) {
                  const sidebar = innerBlocks.find( block => block.attributes.areaName === 'sidebar' );
                  sidebarInnerBlocks.current = sidebar?.innerBlocks || [];
                  replaceInnerBlocks( clientId, innerBlocks.filter( block => block.attributes.areaName !== 'sidebar' ) );
                } else {
                  const sidebar = createBlock( 'novablocks/sidecar-area', { areaName: 'sidebar' }, sidebarInnerBlocks.current );
                  replaceInnerBlocks( clientId, innerBlocks.concat( [ sidebar ] ) );
                }
                setAttributes( { sidebarPosition: nextSidebarPosition } );
              } }
            />

            <RadioControl
              key={ 'sidecar-sidebar-controls' }
              label={ __( 'Sidebar Size', '__plugin_txtd' ) }
              selected={ sidebarWidth }
              options={
                [
                  { label: __( 'Small', '__plugin_txtd' ), value: 'small' },
                  { label: __( 'Medium', '__plugin_txtd' ), value: 'medium' },
                  { label: __( 'Large', '__plugin_txtd' ), value: 'large' },
                ]
              }
              onChange={ ( nextSidebarWidth ) => {
                setAttributes( { sidebarWidth: nextSidebarWidth } );
              } }
            />
          </ControlsGroup>

          { sidebarPosition !== 'none' &&
            <ControlsGroup>
              <ToggleControl
                label={ __( 'Enable sticky sidebar on scroll', '__plugin_txtd' ) }
                help={
                  lastItemIsSticky
                    ? __( 'The last item inside sidebar will be sticky on scroll.', '__plugin_txtd' )
                    : __( 'All blocks inside sidebar will be static.', '__plugin_txtd' )
                }
                checked={ lastItemIsSticky }
                onChange={ () => setAttributes( { lastItemIsSticky: !lastItemIsSticky } ) }
              />
            </ControlsGroup>
          }

          <FontSizeControls { ...props } />

        </ControlsTab>
      </ControlsSection>

      <InspectorControls __experimentalGroup="advanced">
        <SelectControl
          label={ __( 'HTML element', '__plugin_txtd' ) }
          options={ [
            { label: __( 'Default (<div>)', '__plugin_txtd' ), value: 'div' },
            { label: '<header>', value: 'header' },
            { label: '<main>', value: 'main' },
            { label: '<section>', value: 'section' },
            { label: '<article>', value: 'article' },
            { label: '<aside>', value: 'aside' },
            { label: '<footer>', value: 'footer' },
          ] }
          value={ TagName }
          onChange={ ( value ) =>
            setAttributes( { tagName: value } )
          }
          help={ htmlElementMessages[ TagName ] }
        />
      </InspectorControls>
    </Fragment>
  );
};

const FontSizeControls = ( props ) => {

  const { attributes, setAttributes } = props;
  const { contentFontSize, sidebarFontSize } = attributes;

  const options = [
    { label: __( 'Smallest', '__plugin_txtd' ), value: 'smallest' },
    { label: __( 'Smaller', '__plugin_txtd' ), value: 'smaller' },
    { label: __( 'Normal', '__plugin_txtd' ), value: 'normal' },
    { label: __( 'Larger', '__plugin_txtd' ), value: 'larger' },
    { label: __( 'Largest', '__plugin_txtd' ), value: 'largest' },
  ];

  return (
    <ControlsGroup>
      <SelectControl
        key={ 'sidecar-content-font-controls' }
        label={ __( 'Content Font Size', '__plugin_txtd' ) }
        value={ contentFontSize }
        options={ options }
        onChange={ contentFontSize => {
          setAttributes( { contentFontSize } );
        } }
      />
      <SelectControl
        key={ 'sidecar-sidebar-font-controls' }
        label={ __( 'Sidebar Font Size', '__plugin_txtd' ) }
        value={ sidebarFontSize }
        options={ options }
        onChange={ sidebarFontSize => {
          setAttributes( { sidebarFontSize } );
        } }
      />
    </ControlsGroup>
  )
}

export default SidecarInspectorControls;
