import { __ } from "@wordpress/i18n";
import { RangeControl } from '@wordpress/components';

import { applyLayoutEngine, getControlsClasses, getOptimalHeaderPosition } from "@novablocks/utils";

import { ControlsGroup } from "../../../../components";

const BlockHeaderControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    headerOptimalPositions,
  } = props;

  const {
    headerColumn,
    headerPosition,
    postsToShow,

    showCollectionTitle,
    showCollectionSubtitle
  } = attributes;

  if ( ! showCollectionTitle && ! showCollectionSubtitle ) {
    return null;
  }

  return (
    <ControlsGroup title={ __( 'Block Header' ) }>
      <RangeControl
        label={ __( `Header Placement Area`, '__plugin_txtd' ) }
        value={ headerPosition }
        onChange={ headerPosition => {
          setAttributes( { headerPosition } );
        } }
        min={ 0 }
        max={ postsToShow + 1 }
      />
      <div key={ 'header-position-customize-1' } className={ getControlsClasses( attributes, getAttributesByHeaderColumn ) }>
        <RangeControl
          value={ headerColumn }
          onChange={ ( headerColumn ) => {
            const newAttributes = getAttributesByHeaderColumn( { ...attributes, headerColumn } );
            setAttributes( newAttributes );
          } }
          label={ __( 'Header Item Location' ) }
          min={ 0 }
          max={ headerOptimalPositions.length - 1 }
        />
      </div>
    </ControlsGroup>
  )
};

const getAttributesByHeaderColumn = ( attributes ) => {

  const { headerColumn } = attributes;
  const areaColumns = applyLayoutEngine( attributes );
  const headerOptimalPositions = getOptimalHeaderPosition( areaColumns );

  return {
    ...attributes,
    headerPosition: headerOptimalPositions[ headerColumn ],
  }
};

export default BlockHeaderControls;
