import $ from 'jquery';

import { debounce, hasTouchScreen } from '../utils';

class viewportObserver {
	constructor() {
		this.bindEvents();
	}

	bindEvents() {
		const getWindowSize = this.getWindowSize.bind( this );
		const updateViewportUnits = debounce( this.updateViewportUnits.bind( this ), 100 );

		getWindowSize();
		updateViewportUnits();

		$( window ).on( 'resize', getWindowSize );
		$( window ).on( hasTouchScreen() ? 'orientationchange' : 'resize', updateViewportUnits );
	}

	getWindowSize() {
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
	}

	updateViewportUnits() {
		const root = document.documentElement;
		const vw = this.windowWidth / 100 + 'px';
		const vh = this.windowHeight / 100 + 'px';

		root.style.setProperty( '--novablocks-1vw', vw );
		root.style.setProperty( '--novablocks-1vh', vh );
	}
}

export default new viewportObserver();
