import { getControlsClasses } from "@novablocks/utils";
import { BlockVerticalAlignmentToolbar, ControlsGroup, ControlsSection, ControlsTab } from "../../components";
import { __ } from "@wordpress/i18n";
import { PanelRow, RangeControl, ToggleControl } from "@wordpress/components";
import { select } from "@wordpress/data";
import { useSupports } from "../../hooks";

const SpaceAndSizingControls = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    blockTopSpacing,
    blockBottomSpacing,
    emphasisTopSpacing,
    emphasisBottomSpacing,

    emphasisBySpace,
    enableOverlapping,
    contentPosition,
  } = attributes;

  const supports = useSupports( props.name );
  const showVerticalAlignment = shouldShowVerticalAlignment( props );
  const BLOCK_SPACING_MIN_VALUE = -3;
  const BLOCK_SPACING_MAX_VALUE = 3;
  const CONTENT_SPACING_MIN_VALUE = supports?.novaBlocks?.spaceAndSizing?.advancedSpacing ? -3 : 0;
  const CONTENT_SPACING_MAX_VALUE = 3;

  return (
      <ControlsSection label={ __( 'Space and Sizing' ) }>
        <ControlsTab label={ __( 'Customize' ) }>
          <div key={ 'space-and-sizing-customize-1' } className={ getControlsClasses( attributes, ( atts ) => {
            return getEmphasisAttributes( atts.emphasisBySpace, atts.enableOverlapping, atts.contentPosition );
          } ) }>
            <RangeControl
              value={ emphasisBySpace }
              onChange={ ( emphasisBySpace ) => {
                const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition );
                setAttributes( newAttributes );
              } }
              label={ __( 'Emphasis by Space' ) }
              min={ 0 }
              max={ 3 }
            />
            <ToggleControl
              label={ __( 'Enable Overlapping' ) }
              checked={ enableOverlapping }
              onChange={ enableOverlapping => {
                const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition );
                setAttributes( newAttributes );
              } }
            />
            { showVerticalAlignment && <VerticalAnchoringCustomize { ...props } /> }
          </div>
        </ControlsTab>
        <ControlsTab label={ __( 'Settings' ) }>
          <div key={ 'space-and-sizing-settings-1' }>
            { showVerticalAlignment && <VerticalAnchoringSettings { ...props } /> }
            <ControlsGroup title={ __( 'Block Spacing' ) }>
              <RangeControl
                key={ 'media-card-block-top-spacing' }
                value={ blockTopSpacing }
                onChange={ ( blockTopSpacing ) => setAttributes( { blockTopSpacing } ) }
                label={ __( 'Top' ) }
                min={ BLOCK_SPACING_MIN_VALUE }
                max={ BLOCK_SPACING_MAX_VALUE }
              />
              <RangeControl
                key={ 'media-card-block-bottom-spacing' }
                value={ blockBottomSpacing }
                onChange={ ( blockBottomSpacing ) => setAttributes( { blockBottomSpacing } ) }
                label={ __( 'Bottom' ) }
                min={ BLOCK_SPACING_MIN_VALUE }
                max={ BLOCK_SPACING_MAX_VALUE }
              />
            </ControlsGroup>
            <ControlsGroup title={ __( 'Content Area Spacing' ) }>
              <div key={ 'space-and-sizing-settings-2' }>
                <RangeControl
                  key={ 'media-card-content-top-spacing' }
                  value={ emphasisTopSpacing }
                  onChange={ ( emphasisTopSpacing ) => setAttributes( { emphasisTopSpacing } ) }
                  label={ __( 'Top' ) }
                  min={ CONTENT_SPACING_MIN_VALUE }
                  max={ CONTENT_SPACING_MAX_VALUE }
                />
                <RangeControl
                  key={ 'media-card-content-bottom-spacing' }
                  value={ emphasisBottomSpacing }
                  onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
                  label={ __( 'Bottom' ) }
                  min={ CONTENT_SPACING_MIN_VALUE }
                  max={ CONTENT_SPACING_MAX_VALUE }
                />
              </div>
            </ControlsGroup>
          </div>
        </ControlsTab>
      </ControlsSection>
  )
}

const VerticalAnchoringCustomize = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    emphasisBySpace,
    enableOverlapping
  } = attributes;

  const contentPosition = typeof attributes.contentPosition === "string" ? attributes.contentPosition : 'center center';
  const alignment = contentPosition.split( ' ' );
  const verticalAlignment = alignment[0] || 'center';
  const horizontalAlignment = alignment[1] || 'center';

  return (
    <PanelRow>
      <span>{ __( 'Vertical Anchoring', '__plugin_txtd' ) }</span>
      <BlockVerticalAlignmentToolbar
        value={ verticalAlignment }
        onChange={ ( verticalAlignment ) => {
          const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, `${ verticalAlignment } ${ horizontalAlignment }` );
          setAttributes( newAttributes );
        } }
      />
    </PanelRow>
  )
}

const VerticalAnchoringSettings = ( props ) => {

  const {
    attributes: {
      contentPosition
    },
    setAttributes
  } = props;

  const alignment = contentPosition.split( ' ' );
  const verticalAlignment = alignment[0] || 'center';
  const horizontalAlignment = alignment[1] || 'center';

  return (
    <ControlsGroup>
      <PanelRow>
        <span>{ __( 'Vertical Anchoring', '__plugin_txtd' ) }</span>
        <BlockVerticalAlignmentToolbar
          value={ verticalAlignment }
          onChange={ ( verticalAlignment ) => {
            setAttributes( { contentPosition: `${ verticalAlignment } ${ horizontalAlignment }` } )
          } }
        />
      </PanelRow>
    </ControlsGroup>
  )
}

const shouldShowVerticalAlignment = ( props ) => {
  const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

  return supports?.novaBlocks?.contentPositionMatrixToolbar;
}

const getEmphasisAttributes = ( emphasis, overlap, contentPosition = 'center center' ) => {

  const actualEmphasis = ! overlap ? emphasis : -1 * emphasis;
  const alignment = contentPosition.split( ' ' );
  const verticalAlignment = alignment[0] || 'center';
  const horizontalAlignment = alignment[1] || 'center';

  return {
    emphasisBySpace: emphasis,
    enableOverlapping: overlap,
    blockTopSpacing: ( actualEmphasis < 0 && ['center', 'bottom'].includes( verticalAlignment ) ) ? actualEmphasis : 0,
    blockBottomSpacing: ( actualEmphasis < 0 && ['top', 'center'].includes( verticalAlignment ) ) ? actualEmphasis : 0,
    emphasisTopSpacing: ( verticalAlignment !== 'top' ) ? actualEmphasis : 1,
    emphasisBottomSpacing: ( verticalAlignment !== 'bottom' ) ? actualEmphasis : 1,
    contentPosition: `${ verticalAlignment } ${ horizontalAlignment }`
  };
};

export default SpaceAndSizingControls;
