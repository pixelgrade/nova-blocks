import './scss/style.scss';
import './scss/editor.scss';

import "./filters/with-block-id";
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

import { addSeparatorFilters } from "./blocks/core/separator";

const {
	dispatch,
} = wp.data;

class novaBlocks {
	initialize( settings ) {
		dispatch( STORE_NAME ).updateSettings( settings ).then(() => {
			addSeparatorFilters( settings );
		});
	}
}

wp.novaBlocks = new novaBlocks();
