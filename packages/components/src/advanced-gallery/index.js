import AdvancedGalleryPreview from './preview';
import AdvancedGalleryPlaceholder from './placeholder';
import AdvancedGalleryInspectorControls from './inspector-controls';
import AdvancedGalleryBlockControls from './block-controls';

import attributes from './attributes';
import * as utils from './util';
import { GridItem, GridItemCollection } from './grid-item';

import { normalizeImages, withSettings } from "@novablocks/utils";

import { Fragment } from '@wordpress/element';

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
	GridItem,
	GridItemCollection,
	attributes,
	utils,
};
