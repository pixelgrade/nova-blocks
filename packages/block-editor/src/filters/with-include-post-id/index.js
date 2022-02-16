import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const addIncludePosts = ( settings, name ) => {
  if ( 'core/query' !== name ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      query: {
        ...settings.attributes.query,
        include: {
          type: 'array',
          default: [],
        },
      },
    },
  };
};

addFilter(
  'blocks.registerBlockType',
  'required/query-block/include-posts',
  addIncludePosts
);

/**
 * Override the default edit UI to include a new query block inspector control for
 * limiting it to certain post IDs.
 *
 * @param {WPComponent} BlockEdit Original component.
 *
 * @return {WPComponent} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
  return ( props ) => {
    if ( 'core/query' !== props.name ) {
      return <BlockEdit { ...props } />;
    }

    const { query } = props.attributes;
    const include = query.include || [];

    return (
      <>
        <BlockEdit { ...props } />
        <InspectorControls>
          <PanelBody
            title={ __( 'Select Posts', '__plugin_txtd' ) }
            initialOpen={ true }
          >
            <TextControl
              label={ __( 'Posts',  '__plugin_txtd' ) }
              value={ include.join() }
              onChange={ ( value ) => {
                props.setAttributes(
                  {
                    query: {
                      ...query,
                      include: value.split( ',' )
                    }
                  }
                );
              } }
            />
          </PanelBody>
        </InspectorControls>
      </>
    );
  };
}, 'withInspectorControl' );

addFilter(
  'editor.BlockEdit',
  'required/query-block/with-include-posts-control',
  withInspectorControl
);
