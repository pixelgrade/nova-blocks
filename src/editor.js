import "./filters/with-block-id";
import "./filters/with-block-index";
import "./filters/with-font-size-picker";

import "./blocks/core/separator";

import "./blocks/announcement-bar";
import "./blocks/google-map";
import "./blocks/header";
import "./blocks/headline";
import "./blocks/hero";
import "./blocks/logo";
import "./blocks/media";
import "./blocks/slideshow";
import "./blocks/navigation";
import "./blocks/menu-food";
import "./blocks/menu-food-section";
import "./blocks/menu-food-item";
import "./blocks/opentable";

import { STORE_NAME } from './store';

import { nova } from './icons';

import { addSeparatorFilters } from "./blocks/core/separator";

const {
	dispatch,
} = wp.data;

const {
	updateCategory
} = wp.blocks;

class novaBlocks {

	initialize( settings ) {
		addSeparatorFilters( settings );
		dispatch( STORE_NAME ).updateSettings( settings );
		updateCategory( 'nova-blocks', {
			icon: nova
		} );
	}
}

wp.novaBlocks = new novaBlocks();
