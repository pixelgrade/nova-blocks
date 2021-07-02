import { dispatch } from '@wordpress/data';
import { updateCategory } from '@wordpress/blocks';

import { getSvg } from '@novablocks/block-editor';

import iconSvg from './icon.svg';
export { default as store } from './store';
import { addSeparatorFilters } from "./blocks/core/separator";
import { addGroupFilters } from "./blocks/core/group";
import { addListFilters } from "./blocks/core/list";

import "./blocks/core/group";

export class novaBlocks {

	initialize( settings ) {
		addSeparatorFilters( settings );
    addGroupFilters( settings );
    addListFilters( settings );
		dispatch( 'novablocks' ).updateSettings( settings );
		updateCategory( 'nova-blocks', {
		  icon: getSvg( iconSvg )
		} );
	}

}

wp.novaBlocks = new novaBlocks();
