/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import iconSvg from './logo-block.svg';
import attributes from "./attributes";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {dispatch, select} from "@wordpress/data";

const {getBlockRootClientId} = select( 'core/block-editor' );
const {selectBlock, clearSelectedBlock} = dispatch( 'core/editor' );

registerBlockType( 'novablocks/logo', {
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
	parent: ['novablocks/header-row'],
	save: function() {
	  return false
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
				block="novablocks/logo"
				attributes={ props.attributes }
			/>
		)
	},
} );
