import './scss/style.scss';
import './scss/editor.scss';

import "./blocks/header";
import "./blocks/hero";
import "./blocks/logo";
import "./blocks/media";
import "./blocks/slideshow";
import "./blocks/navigation";

import { STORE_NAME } from './store';

const {
	dispatch,
} = wp.data;

class novaBlocks {
	initialize( settings ) {
		dispatch( STORE_NAME ).updateSettings( settings );
	}
}

wp.novaBlocks = new novaBlocks();
