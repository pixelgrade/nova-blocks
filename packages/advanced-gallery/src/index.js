import { Fragment } from '@wordpress/element';

import {
	normalizeImages,
	withSettings
} from "@novablocks/block-editor";

import AdvancedGalleryPreview from './preview';
import AdvancedGalleryPlaceholder from './placeholder';
import AdvancedGalleryInspectorControls from './inspector-controls';
import AdvancedGalleryBlockControls from './block-controls';

import attributes from './attributes';
import * as utils from './utils';

import './hooks/with-advanced-gallery-attribtues';

export {
	GridItem,
	GridItemCollection
} from './grid-item';

const AdvancedGallery = ( props ) => {

	const {
		setAttributes
	} = props;

	const onSelectImages = ( images ) => {
		normalizeImages( images ).then( newImages => {
			setAttributes( { images: newImages } );
		} )
	};

	const newProps = Object.assign( {}, props, { onSelectImages } );

	return (
		<Fragment>
			<AdvancedGalleryPlaceholder { ...newProps } />
			<AdvancedGalleryPreview { ...newProps } />
			<AdvancedGalleryInspectorControls { ...newProps } />
			<AdvancedGalleryBlockControls { ...newProps } />
		</Fragment>
	)
};

export default {
	Component: withSettings( AdvancedGallery ),
  Preview: AdvancedGalleryPreview,
	attributes,
	utils,
};
