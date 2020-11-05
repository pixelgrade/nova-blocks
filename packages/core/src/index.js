import { dispatch } from '@wordpress/data';
import { updateCategory } from '@wordpress/blocks';

import { nova } from '@novablocks/icons';

export { default as store, STORE_NAME } from './store';
import { addSeparatorFilters } from "./blocks/core/separator";


export class novaBlocks {

	initialize( settings ) {
		addSeparatorFilters( settings );
		dispatch( 'novablocks' ).updateSettings( settings );
		updateCategory( 'nova-blocks', { icon: nova } );
	}

}

wp.novaBlocks = new novaBlocks();
