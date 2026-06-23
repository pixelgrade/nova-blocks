/**
 * Shared editor for the header navigation special items (search / cart /
 * dark-mode). They carry no frontend output of their own — the projection maps
 * them to classic menu items with the Anima marker classes and meta, so
 * wp_nav_menu renders them 1:1. The inspector exposes the two fields that
 * project: the Anima visual style and an optional badge.
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export const registerNavigationSpecialItem = ( metadata, { defaultLabel, defaultVisualStyle, panelTitle, icon } ) => {
  registerBlockType( metadata.name, {
    attributes: metadata.attributes,
    edit: ( { attributes, setAttributes } ) => {
      const blockProps = useBlockProps( {
        className: 'wp-block-navigation-item nb-navigation-special-item',
      } );

      const visualStyle = attributes.novablocksVisualStyle || defaultVisualStyle;
      const showIcon = 'icon' === visualStyle || 'label_icon' === visualStyle;
      const showLabel = 'label' === visualStyle || 'label_icon' === visualStyle;
      const badge = attributes.novablocksBadge;

      return (
        <Fragment>
          <InspectorControls>
            <PanelBody title={ panelTitle }>
              <TextControl
                label={ __( 'Label', 'nova-blocks' ) }
                value={ attributes.label || '' }
                placeholder={ defaultLabel }
                onChange={ ( label ) => setAttributes( { label } ) }
              />
              <SelectControl
                label={ __( 'Visual style', 'nova-blocks' ) }
                help={ __( 'How this item appears in the navigation.', 'nova-blocks' ) }
                value={ visualStyle }
                options={ [
                  { label: __( 'Label', 'nova-blocks' ), value: 'label' },
                  { label: __( 'Icon', 'nova-blocks' ), value: 'icon' },
                  { label: __( 'Label with icon', 'nova-blocks' ), value: 'label_icon' },
                ] }
                onChange={ ( novablocksVisualStyle ) => setAttributes( { novablocksVisualStyle } ) }
              />
              <TextControl
                label={ __( 'Badge text', 'nova-blocks' ) }
                help={ __( 'Optional badge (e.g. a cart count or "New").', 'nova-blocks' ) }
                value={ badge || '' }
                onChange={ ( novablocksBadge ) => setAttributes( { novablocksBadge } ) }
              />
            </PanelBody>
          </InspectorControls>
          <div { ...blockProps }>
            <span className="wp-block-navigation-item__content nb-navigation-special-item__content">
              { showIcon && icon && (
                <span className="nb-navigation-special-item__icon">{ icon }</span>
              ) }
              { showLabel && (
                <RichText
                  tagName="span"
                  identifier="label"
                  className="nb-navigation-special-item__label"
                  value={ attributes.label || '' }
                  placeholder={ defaultLabel }
                  onChange={ ( label ) => setAttributes( { label } ) }
                  allowedFormats={ [] }
                />
              ) }
              { badge && (
                <span className="nb-navigation-special-item__badge">{ badge }</span>
              ) }
            </span>
          </div>
        </Fragment>
      );
    },
    save: () => null,
  } );
};
