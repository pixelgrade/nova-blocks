import {
	ClassicLayoutPreview,
	ParametricLayoutPreview,
  ParametricGrid,
  CarouselLayoutPreview,
} from './preview'

import * as utils from './utils';
import { applyLayoutEngine } from './layout-engine';
import './with-grid-generator';

const GridGenerator = {
	ClassicLayoutPreview,
	ParametricLayoutPreview,
  ParametricGrid,
	CarouselLayoutPreview,
	utils: {
		...utils,
		applyLayoutEngine
	}
};

export default GridGenerator;
