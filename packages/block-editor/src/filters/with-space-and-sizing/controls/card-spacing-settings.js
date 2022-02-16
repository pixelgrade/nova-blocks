import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

import { ControlsGroup, withVisibility } from "../../../components";
import { useBlockTopSpacingIsDisabled, useSupports } from "../../../hooks";

const BlockSpacing = props => {

  const supports = useSupports( props.name );

  const newProps = Object.assign( {}, props, {
    blockSpacingMin: -3,
    blockSpacingMax: 3,
    contentSpacingMin: supports?.novaBlocks?.spaceAndSizing?.advancedSpacing ? - 3 : 0,
    contentSpacingMax: 3,
  } );

  return (
    <ControlsGroup title={ __( 'Block Spacing', '__plugin_txtd' ) }>
      <BlockTopSpacing { ...newProps } />
      <BlockBottomSpacing { ...newProps } />
      <ContentTopSpacing { ...newProps } />
      <ContentBottomSpacing { ...newProps } />
    </ControlsGroup>
  )
};

const BlockTopSpacing = withVisibility( 'block-top-spacing' )( props => {
  const { attributes, setAttributes, blockSpacingMin, blockSpacingMax, clientId } = props;
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
      disabled={ isDisabled }
    />
  )
} );

const BlockBottomSpacing = withVisibility( 'block-bottom-spacing' )( props => {
  const { attributes, setAttributes, blockSpacingMin, blockSpacingMax } = props;
  const { blockBottomSpacing } = attributes;

  return (
    <RangeControl
      value={ blockBottomSpacing }
      onChange={ ( blockBottomSpacing ) => setAttributes( { blockBottomSpacing } ) }
      label={ __( 'Block Bottom Spacing', '__plugin_txtd' ) }
      min={ blockSpacingMin }
      max={ blockSpacingMax }
    />
  )
} );

const ContentTopSpacing = withVisibility( 'content-top-spacing' )( props => {
  const { attributes, setAttributes, contentSpacingMin, contentSpacingMax } = props;
  const { emphasisTopSpacing } = attributes;

  return (
    <RangeControl
      value={ emphasisTopSpacing }
      onChange={ ( emphasisTopSpacing ) => setAttributes( { emphasisTopSpacing } ) }
      label={ __( 'Content Top Spacing', '__plugin_txtd' ) }
      min={ contentSpacingMin }
      max={ contentSpacingMax }
    />
  )
} );

const ContentBottomSpacing = withVisibility( 'content-bottom-spacing' )( props => {
  const { attributes, setAttributes, contentSpacingMin, contentSpacingMax } = props;
  const { emphasisBottomSpacing } = attributes;

  return (
    <RangeControl
      value={ emphasisBottomSpacing }
      onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
      label={ __( 'Content Bottom Spacing', '__plugin_txtd' ) }
      min={ contentSpacingMin }
      max={ contentSpacingMax }
    />
  )
} );

export default withVisibility( 'block-spacing' )( BlockSpacing );
