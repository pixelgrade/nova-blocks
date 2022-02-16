import { __ } from '@wordpress/i18n';

import { ControlsGroup } from "../../../components";

import CardLayout from './card-layout';
import CardLayoutLegacy from './card-layout-legacy';

const CardElementsStacking = ( props ) => {

  const { name } = props;

  return (
    <ControlsGroup title={ __( 'Card Elements Stacking Style', '__plugin_txtd' ) }>
      {
        name === 'novablocks/supernova' ?
          <CardLayout { ...props } /> :
          <CardLayoutLegacy { ...props } />
      }
    </ControlsGroup>
  )
};

export default CardElementsStacking;
