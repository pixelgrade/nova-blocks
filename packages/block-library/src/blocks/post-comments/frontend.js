import { above } from "@novablocks/utils";

(function($, window, undefined) {

	let $pxgConversationForm = $('.comment-form'),
		$pxgConversationFormTextarea = $pxgConversationForm.find('textarea');

	$( $pxgConversationFormTextarea ).on('focusin', function() {
		$(this).closest($pxgConversationForm).addClass('form--is-open');
		$(this).animate({height:200},200);
		$(this).closest($pxgConversationForm).find('.comment-form-details').slideDown();
	});

	if ( above( 'lap' ) ) {
		$pxgConversationFormTextarea.attr( "placeholder", "Join the conversation, share your knowledge or ask a question..." )
	}

	getCommentsLabelHeight();

	function getCommentsLabelHeight() {
		let $commentsFormWrapper = $('.novablocks-conversations'),
			$commentsLabel = $('.comment-label__container'),
			$commentLabelHeight = $commentsLabel.outerHeight();

		if ($commentsLabel.length) {
			$commentsFormWrapper[0].style.setProperty('--comments-label-height', $commentLabelHeight);
		}
	}

})(jQuery, window);
