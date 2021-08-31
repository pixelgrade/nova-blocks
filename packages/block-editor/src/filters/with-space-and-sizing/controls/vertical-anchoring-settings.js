import { BlockVerticalAlignmentToolbar, ControlsGroup } from "../../../components";
import { PanelRow } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

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

export default VerticalAnchoringSettings;
