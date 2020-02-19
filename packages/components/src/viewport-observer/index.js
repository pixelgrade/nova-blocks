import $ from 'jquery';

import { debounce, hasTouchScreen } from '@novablocks/utils';

class viewportObserver {

	constructor() {
		this.bindEvents();
	}

	bindEvents() {
		const $window = $( window );
		const updateViewportUnits = this.updateViewportUnits.bind( this );
		const useOrientation = hasTouchScreen() && 'orientation' in window;

		updateViewportUnits();

		if ( useOrientation ) {
			$window.on( 'orientationchange', function() {
				$window.one( 'resize', updateViewportUnits );
			} );
		} else {
			$window.on( 'resize', updateViewportUnits );
		}
	}

	updateViewportUnits() {
		const root = document.documentElement;
		const vw = window.innerWidth / 100 + 'px';
		const vh = window.innerHeight / 100 + 'px';

		root.style.setProperty( '--novablocks-1vw', vw );
		root.style.setProperty( '--novablocks-1vh', vh );
	}
}

export default new viewportObserver();
