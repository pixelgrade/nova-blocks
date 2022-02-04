import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const addIncludePosts = ( settings, name ) => {
  if ( name !== 'core/query' ) {
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
 * Override the default edit UI to include a new block inspector control for
 * assigning the anchor ID, if block supports anchor.
 *
 * @param {WPComponent} BlockEdit Original component.
 *
 * @return {WPComponent} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
  return ( props ) => {
    if ( props.name !== 'core/query' ) {
      return <BlockEdit { ...props } />;
    }

    const { query } = props.attributes;
    const include = query.include || [];

    return (
      <>
        <BlockEdit { ...props } />
        <InspectorControls>
          <PanelBody
            title={ __( 'Select Posts', 'ph-blocks' ) }
            initialOpen={ true }
          >
            <TextControl
              label={ __( 'Posts', 'ph-blocks' ) }
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
