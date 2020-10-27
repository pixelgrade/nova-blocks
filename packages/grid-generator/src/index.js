import {
	ClassicLayoutPreview,
	ParametricLayoutPreview,
} from './preview'

import * as utils from './utils';
import { applyLayoutEngine } from './layout-engine';

const GridGenerator = {
	ClassicLayoutPreview,
	ParametricLayoutPreview,
	utils: {
		...utils,
		applyLayoutEngine
	}
};

export default GridGenerator;
