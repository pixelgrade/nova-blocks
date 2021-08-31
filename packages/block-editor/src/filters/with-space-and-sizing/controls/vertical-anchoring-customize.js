import { PanelRow } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { BlockVerticalAlignmentToolbar } from "../../../components";

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

export default VerticalAnchoringCustomize;
