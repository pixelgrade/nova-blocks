import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

import { ControlsGroup, withVisibility } from "../../../components";
import { useBlockTopSpacingIsDisabled, useSupports } from "../../../hooks";

/**
 * The two OUTER spacing sliders (Block Top / Block Bottom) stay on whole steps:
 * they are the page's vertical rhythm between blocks, and a half-step there
 * reads as a mistake rather than a decision.
 *
 * The two INNER sliders (Content Top / Content Bottom) are band insets — the
 * padding that gives a section its presence — and real pages want 128-200px of
 * it. One step is ~32px at 1440px and spacing level 1, so a ceiling of 3 capped
 * the inset at 96px and collapsed every deeper band onto the same value. The
 * ceiling is 6 (~192px at that reference) and the granularity is a half step
 * (~16px), which is also what makes 176px reachable at 5.5.
 */
export const BLOCK_SPACING_MIN = -3;
export const BLOCK_SPACING_MAX = 3;
export const BLOCK_SPACING_STEP = 1;
export const CONTENT_SPACING_MIN = 0;
export const CONTENT_SPACING_MIN_ADVANCED = -3;
export const CONTENT_SPACING_MAX = 6;
export const CONTENT_SPACING_STEP = 0.5;

const BlockSpacing = withVisibility( 'block-spacing-settings' )( props => {

  const supports = useSupports( props.name );

  const newProps = Object.assign( {}, props, {
    blockSpacingMin: BLOCK_SPACING_MIN,
    blockSpacingMax: BLOCK_SPACING_MAX,
    blockSpacingStep: BLOCK_SPACING_STEP,
    contentSpacingMin: supports?.novaBlocks?.spaceAndSizing?.advancedSpacing ? CONTENT_SPACING_MIN_ADVANCED : CONTENT_SPACING_MIN,
    contentSpacingMax: CONTENT_SPACING_MAX,
    contentSpacingStep: CONTENT_SPACING_STEP,
  } );

  return (
    <ControlsGroup title={ __( 'Block Spacing', '__plugin_txtd' ) }>
      <BlockTopSpacing { ...newProps } />
      <BlockBottomSpacing { ...newProps } />
      <ContentTopSpacing { ...newProps } />
      <ContentBottomSpacing { ...newProps } />
    </ControlsGroup>
  )
} );

const BlockTopSpacing = withVisibility( 'block-top-spacing' )( props => {
  const { attributes, setAttributes, blockSpacingMin, blockSpacingMax, blockSpacingStep, clientId } = props;
  const { blockTopSpacing } = attributes;
  const clientIds = useSelect( 'core/block-editor' ).getClientIdsWithDescendants();
  const isDisabled = useBlockTopSpacingIsDisabled( clientId );

  return (
    <RangeControl
      value={ blockTopSpacing }
      onChange={ ( blockTopSpacing ) => setAttributes( { blockTopSpacing } ) }
      label={ __( 'Block Top Spacing', '__plugin_txtd' ) }
      min={ blockSpacingMin }
      max={ blockSpacingMax }
      step={ blockSpacingStep }
//      disabled={ isDisabled }
    />
  )
} );

const BlockBottomSpacing = withVisibility( 'block-bottom-spacing' )( props => {
  const { attributes, setAttributes, blockSpacingMin, blockSpacingMax, blockSpacingStep } = props;
  const { blockBottomSpacing } = attributes;

  return (
    <RangeControl
      value={ blockBottomSpacing }
      onChange={ ( blockBottomSpacing ) => setAttributes( { blockBottomSpacing } ) }
      label={ __( 'Block Bottom Spacing', '__plugin_txtd' ) }
      min={ blockSpacingMin }
      max={ blockSpacingMax }
      step={ blockSpacingStep }
    />
  )
} );

const ContentTopSpacing = withVisibility( 'content-top-spacing' )( props => {
  const { attributes, setAttributes, contentSpacingMin, contentSpacingMax, contentSpacingStep } = props;
  const { emphasisTopSpacing } = attributes;

  return (
    <RangeControl
      value={ emphasisTopSpacing }
      onChange={ ( emphasisTopSpacing ) => setAttributes( { emphasisTopSpacing } ) }
      label={ __( 'Content Top Spacing', '__plugin_txtd' ) }
      min={ contentSpacingMin }
      max={ contentSpacingMax }
      step={ contentSpacingStep }
    />
  )
} );

const ContentBottomSpacing = withVisibility( 'content-bottom-spacing' )( props => {
  const { attributes, setAttributes, contentSpacingMin, contentSpacingMax, contentSpacingStep } = props;
  const { emphasisBottomSpacing } = attributes;

  return (
    <RangeControl
      value={ emphasisBottomSpacing }
      onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
      label={ __( 'Content Bottom Spacing', '__plugin_txtd' ) }
      min={ contentSpacingMin }
      max={ contentSpacingMax }
      step={ contentSpacingStep }
    />
  )
} );

export default withVisibility( 'block-spacing' )( BlockSpacing );
