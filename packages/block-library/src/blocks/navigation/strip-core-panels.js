/**
 * Tame the embedded core/navigation for header editing. When the feature flag is
 * on, the embedded core/navigation only contributes its links/labels to the
 * projected classic menu — its color/typography/spacing/overlay/layout settings
 * have NO effect on the wp_nav_menu frontend, and enabling the overlay (mobile
 * menu) crashes the embedded preview (it unmounts and does not recover).
 *
 * So we (a) strip the style/layout supports, and (b) force overlayMenu to
 * 'never' at render time so the menu always stays inline and never crashes,
 * whatever the stored value. Scoped to the flag; Nova does not surface
 * core/navigation elsewhere.
 */
import { addFilter } from '@wordpress/hooks';
import { subscribe, select } from '@wordpress/data';

const ENABLED = typeof window !== 'undefined' && !! ( window.novablocksHeaderNav && window.novablocksHeaderNav.enabled );

if ( ENABLED ) {
  addFilter(
    'blocks.registerBlockType',
    'novablocks/strip-core-navigation-panels',
    ( settings, name ) => {
      if ( 'core/navigation' !== name ) {
        return settings;
      }

      return {
        ...settings,
        supports: {
          ...settings.supports,
          color: false,
          typography: false,
          spacing: false,
          dimensions: false,
          // Keep the flex layout but drop the justification / orientation
          // toolbar controls: they don't affect the wp_nav_menu frontend and
          // changing justification breaks the embedded preview.
          layout: {
            ...( settings.supports && settings.supports.layout ),
            allowJustification: false,
            allowOrientation: false,
            allowVerticalAlignment: false,
            allowSwitching: false,
            allowInheriting: false,
          },
        },
      };
    }
  );

  // Tag the document while the core/navigation block itself is selected, so an
  // admin stylesheet can hide its block-level setting panels (overlay / layout /
  // submenus). Those don't affect the wp_nav_menu frontend, and changing them
  // crashes the embedded preview irrecoverably. Menu-item editing (List View +
  // selecting an item) and the link/special-item controls are unaffected,
  // because the class is only present when the nav block — not a child — is
  // selected.
  if ( typeof document !== 'undefined' && document.body ) {
    let wasNavSelected = null;

    subscribe( () => {
      const block = select( 'core/block-editor' ).getSelectedBlock();
      const isNavSelected = !! ( block && 'core/navigation' === block.name );

      if ( isNavSelected !== wasNavSelected ) {
        wasNavSelected = isNavSelected;
        document.body.classList.toggle( 'nb-core-navigation-selected', isNavSelected );
      }
    } );
  }
}
