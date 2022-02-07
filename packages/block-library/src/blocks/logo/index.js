/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import { getSvg, useSelectParent } from "@novablocks/block-editor";

import iconSvg from './logo-block.svg';
import attributes from "./attributes";

registerBlockType( 'novablocks/logo', {
  apiVersion: 2,
  title: __( 'Logo', '__plugin_txtd' ),
  description: __( 'Outputs custom logo markup.', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes,
  supports: {
    html: false
  },
  // Additional search terms
  keywords: [ __( 'branding', '__plugin_txtd' ) ],
  parent: [ 'novablocks/header-row' ],
  save: () => null,
  edit: ( props ) => {
    useSelectParent( props );

    const blockProps = useBlockProps();

    return (
      <div { ...blockProps }>
        <ServerSideRender
          block="novablocks/logo"
          attributes={ props.attributes }
        />
      </div>
    )
  },
} );
