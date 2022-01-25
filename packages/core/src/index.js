import { dispatch } from '@wordpress/data';
import { updateCategory } from '@wordpress/blocks';

import { getSvg } from '@novablocks/block-editor';

import iconSvg from './icon.svg';
export { default as store } from './store';

export class novaBlocks {

	initialize( settings ) {
		dispatch( 'novablocks' ).updateSettings( settings );
		updateCategory( 'nova-blocks', {
		  icon: getSvg( iconSvg )
		} );
	}
}

wp.novaBlocks = new novaBlocks();

import "./blocks/core/group";
import "./blocks/core/list";
import "./blocks/core/separator";

import "./recover-blocks-plugin";
