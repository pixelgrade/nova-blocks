import * as icons from './icons';
import layoutDefinitionsModule from './layout-definitions';

const { HEADER_LAYOUT_DEFINITIONS } = layoutDefinitionsModule;

const ICONS_BY_NAME = {
  logoLeft: icons.logoLeft,
  logoLeftCenterRight: icons.logoLeftCenterRight,
  logoCenter: icons.logoCenter,
  logoCenterTwoRows: icons.logoCenterTwoRows,
  logoCenterThreeRows: icons.logoCenterThreeRows,
};

const variations = HEADER_LAYOUT_DEFINITIONS.map( ( definition ) => ( {
  ...definition,
  icon: ICONS_BY_NAME[ definition.icon ],
  scope: [ 'block' ],
} ) );

export default variations;
