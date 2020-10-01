import { safariHeightFix } from './util';

(function ($, window, undefined) {

	$( '.novablocks-advanced-gallery__grid' ).each( function( i, obj ) {
		safariHeightFix( obj );
	} );

})(jQuery, window);
