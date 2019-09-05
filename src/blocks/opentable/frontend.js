(
	function( $, window, undefined ) {

		let currentTime = new Date(),
			month = currentTime.getMonth() + 1,
			day = currentTime.getDate(),
			year = currentTime.getFullYear();

		if ( day < 10 ) {
			day = '0' + day;
		}

		if ( month < 10 ) {
			month = '0' + month;
		}

		let today = year + "-" + month + "-" + day;

		let $inputDate = $( '.startdate-picker' );
		$inputDate.val( today );

	}
)( jQuery, window );
