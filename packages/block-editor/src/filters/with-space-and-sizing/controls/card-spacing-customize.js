import { __ } from "@wordpress/i18n";
import { RangeControl, ToggleControl } from "@wordpress/components";

import { getControlsClasses } from "@novablocks/utils";

import { ControlsGroup } from "../../../components";
import { useSupports } from "../../../hooks";
import { getEmphasisAttributes } from "../utils";

import VerticalAnchoringCustomize from "./vertical-anchoring-customize";

const CardSpacingCustomize = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    emphasisBySpace,
    enableOverlapping,
    contentPosition,
  } = attributes;

  const supports = useSupports( props.name );
  const showVerticalAlignment = supports?.novaBlocks?.contentPosition;

  return (
    <ControlsGroup title={ __( 'Emphasis by Space' ) } key={ 'space-and-sizing-customize-1' }>
      <div className={ getControlsClasses( attributes, ( atts ) => {
        return getEmphasisAttributes( atts.emphasisBySpace, atts.enableOverlapping, atts.contentPosition );
      } ) }>
        <RangeControl
          key={ 'enable-by-space' }
          value={ emphasisBySpace }
          onChange={ ( emphasisBySpace ) => {
            const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition );
            setAttributes( newAttributes );
          } }
          min={ 0 }
          max={ 3 }
        />
        <ToggleControl
          key={ 'enable-overlapping' }
          label={ __( 'Enable Overlapping' ) }
          checked={ enableOverlapping }
          onChange={ enableOverlapping => {
            const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition );
            setAttributes( newAttributes );
          } }
        />
        { showVerticalAlignment && <VerticalAnchoringCustomize { ...props } /> }
      </div>
    </ControlsGroup>
  )
};

export default CardSpacingCustomize;
