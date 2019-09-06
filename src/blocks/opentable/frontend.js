import { todayDate } from "../../utils";

(
	function( $, window, undefined ) {

		let today = todayDate("-", true);

		let $inputDate = $( '.startdate-picker' );
		$inputDate.val( today );

	}
)( jQuery, window );
