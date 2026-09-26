/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import attributes from "./attributes";

registerBlockType( 'novablocks/post-meta', {
  attributes,
  edit: function( props ) {

    const blockProps = useBlockProps();
    const { avatarSize = 'medium' } = props.attributes;

    return (
      <>
        <InspectorControls>
          <PanelBody title={ __( 'Avatar', '__plugin_txtd' ) }>
            <RadioControl
              label={ __( 'Avatar size', '__plugin_txtd' ) }
              selected={ avatarSize }
              options={ [
                { label: __( 'Small', '__plugin_txtd' ), value: 'small' },
                { label: __( 'Medium', '__plugin_txtd' ), value: 'medium' },
                { label: __( 'Large', '__plugin_txtd' ), value: 'large' },
              ] }
              onChange={ ( nextAvatarSize ) => props.setAttributes( { avatarSize: nextAvatarSize } ) }
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
          <ServerSideRender
            block="novablocks/post-meta"
            attributes={ props.attributes }
          />
        </div>
      </>
    )
  },
  save: function() {
    return false
  },
} );
