import "./scss/style.scss";
import "./scss/editor.scss";

import "./blocks/hero";
import "./blocks/media";
import "./blocks/slideshow";

import store, { STORE_NAME } from "./store";

const {
	dispatch
} = wp.data;

class novaBlocks {

	constructor() {

	}

	initialize( settings ) {
		dispatch( STORE_NAME ).updateSettings( JSON.parse( settings ) );
	}
}

wp.novaBlocks = new novaBlocks();
