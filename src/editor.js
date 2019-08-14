import './scss/style.scss';
import './scss/editor.scss';

import './blocks/hero';
import './blocks/media';
import './blocks/slideshow';

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
