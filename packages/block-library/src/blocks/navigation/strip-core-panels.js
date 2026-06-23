/**
 * When block-based header navigation editing is on, the embedded core/navigation
 * only contributes its links/labels to the projected classic menu — its color,
 * typography, spacing and overlay settings have NO effect on the wp_nav_menu
 * frontend. Strip those supports so the inspector doesn't offer controls that
 * silently do nothing.
 *
 * Scoped to the feature flag; Nova does not surface core/navigation elsewhere.
 */
import { addFilter } from '@wordpress/hooks';

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
        },
      };
    }
  );
}
