import "./filters/with-block-id";
import "./filters/with-block-index";
import "./filters/with-font-size-picker";
import "./filters/with-emphasis-level";
import "./filters/with-cards-manager";
import "./filters/with-latest-posts";

import "./filters/with-advanced-gallery-attributes";
import "./filters/with-doppler-attributes";
import "./filters/with-overlay-color-attributes";

import "./filters/with-controls-sections";
import "./filters/with-space-and-sizing-controls";
import "./filters/with-inner-blocks";
import "./filters/with-grid-generator";

import "./blocks/core/separator";

import { nova } from '@novablocks/icons';

import { addSeparatorFilters } from "./blocks/core/separator";

import {
	dispatch,
} from '@wordpress/data';

import {
	updateCategory
} from '@wordpress/blocks';

class novaBlocks {

	initialize( settings ) {
		addSeparatorFilters( settings );
		dispatch( 'novablocks' ).updateSettings( settings );
		updateCategory( 'nova-blocks', { icon: nova } );
	}

}

wp.novaBlocks = new novaBlocks();
