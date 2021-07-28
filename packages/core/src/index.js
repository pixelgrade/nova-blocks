import { dispatch } from '@wordpress/data';
import { updateCategory } from '@wordpress/blocks';

import { getSvg } from '@novablocks/block-editor';

import iconSvg from './icon.svg';
export { default as store } from './store';
import { addSeparatorFilters } from "./blocks/core/separator";

import "./blocks/core/group";
import "./blocks/core/list";

export class novaBlocks {

	initialize( settings ) {
		addSeparatorFilters( settings );
		dispatch( 'novablocks' ).updateSettings( settings );
		updateCategory( 'nova-blocks', {
		  icon: getSvg( iconSvg )
		} );
	}

}

wp.novaBlocks = new novaBlocks();
