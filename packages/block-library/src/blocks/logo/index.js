/**
 * WordPress dependencies
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';
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
