import { dispatch } from '@wordpress/data';
import { updateCategory } from '@wordpress/blocks';

import { getSvg } from '@novablocks/block-editor';
import { debounce, cleanupBreakClasses, getContentBlocksArray, maybeAddBreakClassesToElement } from "@novablocks/utils";

import iconSvg from './icon.svg';
export { default as store } from './store';

export class novaBlocks {

	initialize( settings ) {
		dispatch( 'novablocks' ).updateSettings( settings );
		updateCategory( 'nova-blocks', {
		  icon: getSvg( iconSvg )
		} );

    handleAlignedBlocks();
  }
}

const handleAlignedBlocks = () => {
  wp.data.subscribe( debounce( () => {
    const contentBlocks = getContentBlocksArray();
    cleanupBreakClasses();
    contentBlocks.forEach( maybeAddBreakClassesToElement );
  }, 100 ) );
}

wp.novaBlocks = new novaBlocks();

import "./blocks/core/button";
import "./blocks/core/columns";
import "./blocks/core/group";
import "./blocks/core/list";
import "./blocks/core/query";
import "./blocks/core/quote";
import "./blocks/core/separator";
