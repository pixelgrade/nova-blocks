import { Fragment } from '@wordpress/element';

import AdvancedGalleryPreview from './preview';
import AdvancedGalleryPlaceholder from './placeholder';
import AdvancedGalleryInspectorControls from './inspector-controls';
import AdvancedGalleryBlockControls from './block-controls';

import attributes from './attributes';
import * as utils from './utils';

import './filters/with-advanced-gallery-attribtues';

export {
	GridItem,
	GridItemCollection
} from './grid-item';

const AdvancedGallery = ( props ) => {

	return (
		<Fragment>
			<AdvancedGalleryPlaceholder { ...props } />
			<AdvancedGalleryPreview { ...props } />
			<AdvancedGalleryInspectorControls { ...props } />
			<AdvancedGalleryBlockControls { ...props } />
		</Fragment>
	)
};

export default {
	Component: AdvancedGallery,
  Preview: AdvancedGalleryPreview,
  InspectorControls: AdvancedGalleryInspectorControls,
  BlockControls: AdvancedGalleryBlockControls,
	attributes,
	utils,
};
