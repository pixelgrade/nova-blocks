import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { useEffect, useCallback } from "@wordpress/element";
import { select, useSelect } from "@wordpress/data";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import {
	ControlsGroup,
	ControlsSection,
	ControlsTab,
	ToggleGroup,
} from "@novablocks/block-editor";

import { getAlignmentClassnames, getColorSignalClassnames } from "@novablocks/utils";

import { withControlsVisibility } from "./components";
import heroAttributes from "./attributes";
import HeroPreview from "./preview";
import BlockControls from "./block-controls";

const HeroEdit = ( props ) => {

  const {
    attributes,
    setAttributes,
    settings
  } = props;

  const index = useSelect( select => {
    const { getBlocks, getSelectedBlockClientId } = select( "core/block-editor" );
    const heroBlocks = getBlocks().filter( block => block.name === 'novablocks/hero' );
    return heroBlocks.findIndex( block => block.clientId === getSelectedBlockClientId() );
  } );

  const toggles = [{
    label: __( 'Inner Content' ),
    attribute: 'displayInnerContent'
  }];

  if ( index === 0 ) {
    toggles.push({
      label: __( 'Position Indicators' ),
      attribute: 'positionIndicators'
    }, {
      label: __( 'Scroll Indicator' ),
      attribute: 'scrollIndicator'
    });
  }

	const getDefaults = useCallback( attributes => {
		const { scrollIndicator } = attributes;
		const defaults = {};

		if ( settings.usePostMetaAttributes ) {
			if ( ! scrollIndicator ) {
				defaults.scrollIndicator = heroAttributes.scrollIndicator.default;
			}
		}

		return defaults;
	}, [ settings ] );

	const getNewAttributes = useCallback( attributes => {
		const { scrollIndicator } = attributes;

		const newScrollIndicatorBlock = index === 0 && scrollIndicator;

		return {
			scrollIndicatorBlock: newScrollIndicatorBlock,
		};
	}, [ index ] );

	const updateAttributes = ( newAttributes = {} ) => {
		const defaults = getDefaults( attributes );
		const computedAttributes = getNewAttributes( { ...attributes, ...defaults, ...newAttributes } );
		setAttributes( Object.assign( {}, newAttributes, computedAttributes ) );
	}

  useEffect( updateAttributes, [] );

	const { contentPadding, contentWidth, overlayFilterStyle } = attributes;

  const blockProps = useBlockProps( {
    className: classnames(
      props.className,
      'novablocks-hero',
      `novablocks-u-spacing-${ contentPadding }`,
      `novablocks-u-content-width-${ contentWidth }`,
      `novablocks-u-background`,
      `novablocks-u-background-${ overlayFilterStyle }`,
      getAlignmentClassnames( attributes ),
      getColorSignalClassnames( attributes, true ),
      'alignfull',
    ),
    style: props.style,
  } );

  return (
    <div { ...blockProps }>
      <HeroPreview { ...props } />
      <BlockControls { ...props } />
      <ControlsSection id={ 'elements-visibility' } label={ __( 'Elements Visibility' ) } group={ __( 'Input' ) }>
        <ControlsTab label={ __( 'Settings' ) }>
          <ControlsGroup title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
            <ToggleGroup
              onChange={ updateAttributes }
              toggles={ toggles.map( toggle => {
                return {
                  ...toggle,
                  value: attributes[ toggle.attribute ]
                }
              } ) }
            />
          </ControlsGroup>
        </ControlsTab>
      </ControlsSection>
    </div>
  );
}

export default withControlsVisibility( HeroEdit );
