/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import { getSvg, useSelectParent } from "@novablocks/block-editor";

import iconSvg from './icon.svg';
import attributes from "./attributes";

registerBlockType( 'novablocks/logo', {
  icon: getSvg( iconSvg ),
  attributes,
  save: function() {
    return false
  },
  edit: function( props ) {
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
