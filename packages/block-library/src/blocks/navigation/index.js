/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { getSvg, useSelectParent } from "@novablocks/block-editor";
import iconSvg from './navigation-block.svg';
import attributes from "./attributes";

registerBlockType( 'novablocks/navigation', {
  icon: getSvg( iconSvg ),
	attributes,
	edit: function( props ) {
    useSelectParent( props );

		return (
			<wp.serverSideRender
				block="novablocks/navigation"
				attributes={ props.attributes }
			/>
		)
	},
	save: function() {
	  return false
  },
} );
