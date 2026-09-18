/**
 * WordPress dependencies
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import iconSvg from './icon.svg';
import attributes from "./attributes";

registerBlockType( 'novablocks/logo', {
  icon: getSvg( iconSvg ),
  attributes,
  transforms: {
    to: [
      {
        type: 'block',
        blocks: [ 'core/site-logo' ],
        // novablocks/logo carries no logo data of its own (it reflects the
        // `custom_logo` theme mod), so the inline-editable core/site-logo is a
        // clean drop-in replacement. Preserve any custom className.
        transform: ( { className } ) => createBlock( 'core/site-logo', className ? { className } : {} ),
      },
    ],
  },
  save: function() {
    return false
  },
  edit: function( props ) {
    const blockProps = useBlockProps();
    const siteText = attributes.siteText.enum.includes( props.attributes.siteText ) ? props.attributes.siteText : 'inherit';

    return (
      <>
        <InspectorControls>
          <PanelBody title={ __( 'Site Text', 'nova-blocks' ) }>
            <SelectControl
              label={ __( 'Site Text', 'nova-blocks' ) }
              help={ __( 'Choose the text shown by this logo. Inherit follows the site setting.', 'nova-blocks' ) }
              value={ siteText }
              options={ [
                { value: 'inherit', label: __( 'Inherit site setting', 'nova-blocks' ) },
                { value: 'title-tagline', label: __( 'Title and tagline', 'nova-blocks' ) },
                { value: 'title', label: __( 'Title only', 'nova-blocks' ) },
                { value: 'tagline', label: __( 'Tagline only', 'nova-blocks' ) },
                { value: 'none', label: __( 'No text', 'nova-blocks' ) },
              ] }
              onChange={ value => props.setAttributes( { siteText: value } ) }
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
          <ServerSideRender
            block="novablocks/logo"
            attributes={ props.attributes }
          />
        </div>
      </>
    )
  },
} );
