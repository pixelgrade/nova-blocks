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

registerBlockType( 'novablocks/post-navigation', {
  attributes,
  edit: props => {

    const blockProps = useBlockProps( {
      className: props.className,
      style: props.style
    } );

    return (
      <div { ...blockProps }>
        <ServerSideRender
          block="novablocks/post-navigation"
          attributes={ props.attributes }
        />
      </div>
    )
  },
  save: function() {
    return false
  },
} );
