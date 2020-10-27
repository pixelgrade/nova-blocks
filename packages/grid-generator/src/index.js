import {
	ClassicLayoutPreview,
	ParametricLayoutPreview,
} from './preview'

import * as utils from './utils';
import { applyLayoutEngine } from './layout-engine';
import Controls from './controls';

const GridGenerator = {
	Controls,
	ClassicLayoutPreview,
	ParametricLayoutPreview,
	utils: {
		...utils,
		applyLayoutEngine
	}
};

export default GridGenerator;
