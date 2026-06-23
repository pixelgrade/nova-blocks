/**
 * Adds a "Badge" control to core/navigation-link and core/navigation-submenu so
 * editors can attach an Anima-style badge (projected to the _menu_item_badge
 * meta — see lib/header-nav-projection.php). Only active when block-based header
 * navigation editing is enabled.
 */
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

const ENABLED = typeof window !== 'undefined' && !! ( window.novablocksHeaderNav && window.novablocksHeaderNav.enabled );
const TARGET_BLOCKS = [ 'core/navigation-link', 'core/navigation-submenu' ];

if ( ENABLED ) {
  addFilter(
    'blocks.registerBlockType',
    'novablocks/nav-badge-attribute',
    ( settings, name ) => {
      if ( ! TARGET_BLOCKS.includes( name ) ) {
        return settings;
      }

      return {
        ...settings,
        attributes: {
          ...settings.attributes,
          novablocksBadge: { type: 'string' },
        },
      };
    }
  );

  const withBadgeControl = createHigherOrderComponent( ( BlockEdit ) => ( props ) => {
    if ( ! TARGET_BLOCKS.includes( props.name ) ) {
      return <BlockEdit { ...props } />;
    }

    const { attributes, setAttributes } = props;

    return (
      <Fragment>
        <BlockEdit { ...props } />
        <InspectorControls>
          <PanelBody title={ __( 'Badge', 'nova-blocks' ) } initialOpen={ false }>
            <TextControl
              label={ __( 'Badge text', 'nova-blocks' ) }
              help={ __( 'Shown as a small badge next to the menu item (e.g. New, Sale).', 'nova-blocks' ) }
              value={ attributes.novablocksBadge || '' }
              onChange={ ( novablocksBadge ) => setAttributes( { novablocksBadge } ) }
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }, 'withBadgeControl' );

  addFilter( 'editor.BlockEdit', 'novablocks/nav-badge-control', withBadgeControl );
}
