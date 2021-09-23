import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";
import { ControlsGroup } from "../../../components";
import { useSupports } from "../../../hooks";

const CardSpacing = props => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    blockTopSpacing,
    blockBottomSpacing,
    emphasisTopSpacing,
    emphasisBottomSpacing,
  } = attributes;

  const supports = useSupports( props.name );

  const BLOCK_SPACING_MIN_VALUE = - 3;
  const BLOCK_SPACING_MAX_VALUE = 3;
  const CONTENT_SPACING_MIN_VALUE = supports?.novaBlocks?.spaceAndSizing?.advancedSpacing ? - 3 : 0;
  const CONTENT_SPACING_MAX_VALUE = 3;

  return (
    <ControlsGroup title={ __( 'Block Spacing' ) }>
      <RangeControl
        value={ blockTopSpacing }
        onChange={ ( blockTopSpacing ) => setAttributes( { blockTopSpacing } ) }
        label={ __( 'Block Top Spacing' ) }
        min={ BLOCK_SPACING_MIN_VALUE }
        max={ BLOCK_SPACING_MAX_VALUE }
      />
      <RangeControl
        value={ blockBottomSpacing }
        onChange={ ( blockBottomSpacing ) => setAttributes( { blockBottomSpacing } ) }
        label={ __( 'Block Bottom Spacing' ) }
        min={ BLOCK_SPACING_MIN_VALUE }
        max={ BLOCK_SPACING_MAX_VALUE }
      />
      <RangeControl
        value={ emphasisTopSpacing }
        onChange={ ( emphasisTopSpacing ) => setAttributes( { emphasisTopSpacing } ) }
        label={ __( 'Content Top Spacing' ) }
        min={ CONTENT_SPACING_MIN_VALUE }
        max={ CONTENT_SPACING_MAX_VALUE }
      />
      <RangeControl
        value={ emphasisBottomSpacing }
        onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
        label={ __( 'Content Bottom Spacing' ) }
        min={ CONTENT_SPACING_MIN_VALUE }
        max={ CONTENT_SPACING_MAX_VALUE }
      />
    </ControlsGroup>
  )
}

export default CardSpacing;
