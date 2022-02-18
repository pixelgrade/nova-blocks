import { Fragment, useMemo } from "@wordpress/element";

import {
  applyLayoutEngine,
  getOptimalHeaderPosition,
} from "@novablocks/utils";

import DebugControls from './debug-controls';
import BlockHeaderControls from './block-header-controls';
import BreakingTheGridControls from './breaking-the-grid-controls';
import GridAnatomyControls from './grid-anatomy-controls';
import ParametricItemsCountControls from './parametric-items-count-controls';
import ItemsRegularityControls from './items-regularity-controls';
import MiscellaneousParametersControls from './miscellaneous-parameters-controls';

const ParametricLayoutControls = ( props ) => {

  const { attributes } = props;

  if ( attributes.layoutStyle !== "parametric" ) {
    return null;
  }

  const areaColumns = useMemo( () => applyLayoutEngine( attributes ), [ attributes ] );
  const headerOptimalPositions = useMemo( () => getOptimalHeaderPosition( areaColumns ), [ areaColumns ] );

  const newProps = {
    ...props,
    areaColumns,
    headerOptimalPositions,
  };

  return (
    <Fragment>
      <DebugControls { ...newProps } />
      <GridAnatomyControls { ...newProps } />
      <BreakingTheGridControls { ...newProps } />
      <ParametricItemsCountControls { ...newProps } />
      <ItemsRegularityControls { ...newProps } />
      <MiscellaneousParametersControls { ...newProps } />
      <BlockHeaderControls { ...newProps } />
    </Fragment>
  )
};

export default ParametricLayoutControls;
