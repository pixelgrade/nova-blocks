(function($, window, undefined) {

	$( "#datepicker" ).datepicker(
		{
			firstDay: 1,
			dateFormat: "mm/dd/yy",
			maxDate: "+3m",
			minDate: "0",
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			monthNames: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],
			nextText: ">",
			prevText: "<",
			beforeShow: function() {
				$( "#ui-datepicker-div" ).addClass( "nova-blocks-datepicker" )
			}
		}
	);

})(jQuery, window);
