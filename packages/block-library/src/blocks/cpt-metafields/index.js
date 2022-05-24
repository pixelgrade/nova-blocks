/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import attributes from "./attributes";

registerBlockType( 'novablocks/cpt-metafields', {
  attributes,
  edit: function( props ) {

    const blockProps = useBlockProps();

    return (
      <div { ...blockProps }>
        <ServerSideRender
          block="novablocks/cpt-metafields"
          attributes={ props.attributes }
        />
      </div>
    )
  },
  save: function() {
    return false
  },
} );
