/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
import { useLayoutEffect } from "@wordpress/element";

/**
 * Internal dependencies
 */
import { getSvg, useSelectParent } from "@novablocks/block-editor";

import iconSvg from './icon.svg';
import attributes from "./attributes";
import { addSocialMenuClass } from "./utils";

registerBlockType( 'novablocks/navigation', {
  icon: getSvg( iconSvg ),
	attributes,
	edit: function( props ) {
    const { clientId } = props;

    useSelectParent( props );

    useLayoutEffect( () => {
      const element = document.querySelector( `.block-${ clientId }` );
      const parent = element ? element.parentElement : null;

      if ( parent ) {

        if ( ! window.MutationObserver ) {
          return
        }

        const observer = new MutationObserver( ( mutationsList ) => {
          addSocialMenuClass( parent );
        } );

        observer.observe( parent.parentElement, { childList: true, subtree: true } )

        return ( () => {
          observer.disconnect();
        } );
      }
    }, [] );

		return (
			<ServerSideRender
				block="novablocks/navigation"
				attributes={ props.attributes }
        className={ `block-${ clientId }` }
			/>
		)
	},
	save: function() {
	  return false
  },
} );
