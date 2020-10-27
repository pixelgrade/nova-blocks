import { nova } from '@novablocks/icons';

import { addSeparatorFilters } from "./blocks/core/separator";

import {
	dispatch,
} from '@wordpress/data';

import {
	updateCategory
} from '@wordpress/blocks';

export class novaBlocks {

	initialize( settings ) {
		addSeparatorFilters( settings );
		dispatch( 'novablocks' ).updateSettings( settings );
		updateCategory( 'nova-blocks', { icon: nova } );
	}

}

wp.novaBlocks = new novaBlocks();
