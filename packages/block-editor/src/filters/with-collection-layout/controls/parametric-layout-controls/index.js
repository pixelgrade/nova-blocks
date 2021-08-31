import { useCallback, useMemo } from "@wordpress/element";

import {
  applyLayoutEngine,
  getOptimalHeaderPosition,
} from "@novablocks/utils";

import { normalizeAttributes } from "../../utils";

import DebugControls from './debug-controls';
import BlockHeaderControls from './block-header-controls';
import BreakingTheGridControls from './breaking-the-grid-controls';
import GridAnatomyControls from './grid-anatomy-controls';
import ItemsCountControls from './items-count-controls';
import ItemsRegularityControls from './items-regularity-controls';
import MiscellaneousParametersControls from './miscellaneous-parameters-controls';

const ParametricLayoutControls = ( props ) => {

  const {
    attributes,
  } = props;

  const setAttributes = useCallback( newAttributes => {
    const normalizedAttributes = normalizeAttributes( newAttributes, attributes );
    props.setAttributes( normalizedAttributes );
  }, [ attributes ] );

  const areaColumns = useMemo( () => applyLayoutEngine( attributes ), [ attributes ] );
  const headerOptimalPositions = useMemo( () => getOptimalHeaderPosition( areaColumns ), [ areaColumns ] );

  const newProps = {
    ...props,
    setAttributes,
    areaColumns,
    headerOptimalPositions,
  }

  return (
    <Fragment>
      <DebugControls { ...newProps } />
      <GridAnatomyControls { ...newProps } />
      <BreakingTheGridControls { ...newProps } />
      <ItemsCountControls { ...newProps } />
      <ItemsRegularityControls { ...newProps } />
      <MiscellaneousParametersControls { ...newProps } />
      <BlockHeaderControls { ...newProps } />
    </Fragment>
  )
};

export default ParametricLayoutControls;
