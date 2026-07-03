/**
 * The Fine-tune tab's parametric engine controls — the "shape the grid
 * itself" room. Rendered only while the Parametric composition is active;
 * the tab-level TryAndPlay boundary lives in the parent controls index.
 *
 * The former "Miscellanous Parameters" group is dissolved: Flip lives in
 * Grid Anatomy, Boost/Sub-featured in Breaking the Grid, Balance in Items
 * Regularity. Gap controls live in the Settings tab, free in every mode.
 */
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

const ParametricLayoutControls = ( props ) => {

  const { attributes } = props;

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
      <BlockHeaderControls { ...newProps } />
    </Fragment>
  )
};

export default ParametricLayoutControls;
