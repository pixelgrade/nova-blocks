(function($, window, undefined) {

	let $pxgConversationForm = $('.comment-form'),
		$pxgConversationFormTextarea = $pxgConversationForm.find('textarea');

	$( $pxgConversationFormTextarea ).on('focusin', function() {
		$(this).closest($pxgConversationForm).addClass('form--is-open');
		TweenMax.to( $(this), 0, { height: 200 } );
		$(this).closest($pxgConversationForm).find('.comment-form-details').slideDown();
	});

	console.log('Conversations Block init');

})(jQuery, window);
