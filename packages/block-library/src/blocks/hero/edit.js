import classnames from "classnames";

import { __ } from "@wordpress/i18n";
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

import { getAlignmentClassnames } from "@novablocks/utils";

import { withControlsVisibility } from "./components";
import HeroPreview from "./preview";
import BlockControls from "./block-controls";

const HeroEdit = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const toggles = [
    {
      label: __( 'Inner Content' ),
      attribute: 'displayInnerContent'
    }, {
      label: __( 'Position Indicators' ),
      attribute: 'positionIndicators'
    }, {
      label: __( 'Scroll Indicator' ),
      attribute: 'scrollIndicatorBlock'
    }
  ];

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
              onChange={ setAttributes }
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
