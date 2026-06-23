/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
import { useLayoutEffect, useRef } from '@wordpress/element';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { getSvg, useSelectParent } from '@novablocks/block-editor';

import iconSvg from './icon.svg';
import attributes from './attributes';
import { addSocialMenuClass } from './utils';
import './badge-filter';

// Localised by PHP (lib/header-nav-projection.php -> novablocks_header_nav_editor_data).
// `enabled` follows the novablocks/enable_block_nav_editing flag; `entities` maps
// each header location slug to its wp_navigation editing entity id (ref).
const headerNav = ( typeof window !== 'undefined' && window.novablocksHeaderNav ) || { enabled: false, entities: {} };

/**
 * Legacy preview: server-rendered wp_nav_menu. Used when block nav editing is
 * disabled or no editing entity exists for this slug.
 */
const LegacyNavigationPreview = ( props ) => {
  const containerRef = useRef( null );

  useLayoutEffect( () => {
    const container = containerRef.current;
    if ( ! container ) {
      return;
    }

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
  );
};

/**
 * Inline editing: mount the real core/navigation against this location's
 * wp_navigation entity. The block stays dynamic (save:false) and the frontend
 * keeps rendering wp_nav_menu — editing the entity projects to the classic menu
 * (see lib/header-nav-projection.php). overlayMenu:'never' suppresses core's own
 * responsive overlay since Nova's mobile menu drives the frontend.
 */
const NavigationEntityEdit = ( { attributes: blockAttributes, navRef } ) => {
  const { slug } = blockAttributes;

  const blockProps = useBlockProps( {
    className: classnames( 'nb-navigation', {
      [ `nb-navigation--${ slug }` ]: !! slug,
    } ),
  } );

  const innerBlocksProps = useInnerBlocksProps( blockProps, {
    template: [ [ 'core/navigation', { ref: navRef, overlayMenu: 'never' } ] ],
    templateLock: 'all',
    renderAppender: false,
  } );

  return <div { ...innerBlocksProps } />;
};

registerBlockType( 'novablocks/navigation', {
  icon: getSvg( iconSvg ),
  attributes,
  edit: function( props ) {
    useSelectParent( props );

    const { slug } = props.attributes;
    const navRef = headerNav.enabled && headerNav.entities ? headerNav.entities[ slug ] : undefined;

    if ( headerNav.enabled && navRef ) {
      return <NavigationEntityEdit { ...props } navRef={ navRef } />;
    }

    return <LegacyNavigationPreview { ...props } />;
  },
  save: function() {
    return false;
  },
} );
