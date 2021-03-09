import {
	ClassicLayoutPreview,
	ParametricLayoutPreview,
  CarouselLayoutPreview,
} from './preview'

import * as utils from './utils';
import { applyLayoutEngine } from './layout-engine';
import './with-grid-generator';

const GridGenerator = {
	ClassicLayoutPreview,
	ParametricLayoutPreview,
	CarouselLayoutPreview,
	utils: {
		...utils,
		applyLayoutEngine
	}
};

export default GridGenerator;
