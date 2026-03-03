/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
import { useLayoutEffect, useRef } from "@wordpress/element";

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
    const containerRef = useRef( null );

    useSelectParent( props );

    useLayoutEffect( () => {
      const container = containerRef.current;
      if ( ! container ) return;

      addSocialMenuClass( container );

      if ( ! window.MutationObserver ) {
        return;
      }

      const observer = new MutationObserver( () => {
        addSocialMenuClass( container );
      } );

      observer.observe( container, { childList: true, subtree: true } );

      return () => {
        observer.disconnect();
      };
    }, [] );

		return (
			<div ref={ containerRef }>
				<ServerSideRender
					block="novablocks/navigation"
					attributes={ props.attributes }
				/>
			</div>
		)
	},
	save: function() {
	  return false
  },
} );
