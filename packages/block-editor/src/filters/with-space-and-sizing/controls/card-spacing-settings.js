import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

import { ControlsGroup, withVisibility } from "../../../components";
import { useSupports } from "../../../hooks";

const BlockSpacing = props => {

  const supports = useSupports( props.name );

  const newProps = Object.assign( {}, props, {
    blockSpacingMin: -3,
    blockSpacingMax: 3,
    contentSpacingMin: supports?.novaBlocks?.spaceAndSizing?.advancedSpacing ? - 3 : 0,
    contentSpacingMax: 3,
  } );

  return (
    <ControlsGroup title={ __( 'Block Spacing' ) }>
      <BlockTopSpacing { ...newProps } />
      <BlockBottomSpacing { ...newProps } />
      <ContentTopSpacing { ...newProps } />
      <ContentBottomSpacing { ...newProps } />
    </ControlsGroup>
  )
}

const BlockTopSpacing = withVisibility( 'block-top-spacing' )( props => {
  const { attributes, setAttributes, blockSpacingMin, blockSpacingMax } = props;
  const { blockTopSpacing } = attributes;

  return (
    <RangeControl
      value={ blockTopSpacing }
      onChange={ ( blockTopSpacing ) => setAttributes( { blockTopSpacing } ) }
      label={ __( 'Block Top Spacing' ) }
      min={ blockSpacingMin }
      max={ blockSpacingMax }
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
      label={ __( 'Block Bottom Spacing' ) }
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
      label={ __( 'Content Top Spacing' ) }
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
      label={ __( 'Content Bottom Spacing' ) }
      min={ contentSpacingMin }
      max={ contentSpacingMax }
    />
  )
} );

export default withVisibility( 'block-spacing' )( BlockSpacing );
