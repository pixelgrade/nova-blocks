/**
 * Internal dependencies
 */
import iconSvg from './navigation-block.svg';
import attributes from "./attributes";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getSvg } from "@novablocks/block-editor";

import { dispatch, select } from "@wordpress/data";

const { getBlockRootClientId } = select( 'core/block-editor' );
const { selectBlock, clearSelectedBlock } = dispatch( 'core/editor' );

registerBlockType( 'novablocks/navigation', {
	title: __( 'Space Navigation', '__plugin_txtd' ),
	description: __( 'Outputs chosen navigation menu markup.', '__plugin_txtd' ),
	category: 'nova-blocks',
  icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [ __( 'menu', '__plugin_txtd' ), __( 'site menu', '__plugin_txtd' ), __( 'primary', '__plugin_txtd' ), __( 'secondary', '__plugin_txtd' ) ],
	parent: ['novablocks/header-row'],
	attributes,
  supports: {
    html: false
  },
	edit: function( props ) {

    const {
      clientId,
      isSelected
    } = props;

    const parentClientId = getBlockRootClientId(clientId);

    if ( isSelected ) {
      clearSelectedBlock().then(() => {
        selectBlock( parentClientId );
      });
    }

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
