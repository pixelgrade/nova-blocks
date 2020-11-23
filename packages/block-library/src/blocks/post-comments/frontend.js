import { above } from "@novablocks/utils";

const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = "easeOutCirc";

(function( $, window, undefined ) {

	let $pxgConversationForm = $( '.comment-form' ),
		$pxgConversationFormTextarea = $pxgConversationForm.find( 'textarea' ),
		$commentsLabel = $( '.comment-label__container' ),
		$masks = $( '.comment-form-mask' ),
		commentLabelHeight;

	onResize();

	function onResize() {
		getCommentsLabelHeight();
		updatePlaceholder();
		updateMasksHeights( $masks );
	}

	function updateMasksHeights( elements ) {

		$( elements ).each( function( i, obj ) {
			const $mask = $( obj );
			const height = $mask.outerHeight();

			$mask.data( 'height', height );
			$mask.css( 'height', 0 );
		} );
	}

	function resetMasksHeights( elements ) {

		$( elements ).each( function( i, obj ) {
			$( obj ).css( 'height', '' );
		} );
	}

	function updatePlaceholder() {
		const desktopPlaceholder = 'Join the conversation, share your knowledge or ask a question...';
		const placeholder = above( 'lap' ) ? desktopPlaceholder : '';

		$pxgConversationFormTextarea.attr( "placeholder", placeholder );
	}

	$pxgConversationFormTextarea.one( 'focusin', function() {
		let textareaHeight = $pxgConversationFormTextarea.outerHeight();
		let targetHeight = 200;

		$masks.velocity( {
			tween: [1, 0]
		}, {
			duration: TRANSITION_DURATION,
			easing: TRANSITION_EASING,
			begin: function( elements ) {
				resetMasksHeights( elements );
				updateMasksHeights( elements );

				$pxgConversationFormTextarea.css( 'transition', 'none' );
			},
			progress: function( elements, percentComplete, remaining, tweenValue, activeCall ) {

				$( elements ).each( function( i, element ) {
					const $element = $( element );
					const height = parseInt( $element.data( 'height' ), 10 );
					$element.css( 'height', height * tweenValue );
				} );

				const newHeight = textareaHeight + ( targetHeight - textareaHeight ) * tweenValue;
				$pxgConversationFormTextarea.css( 'height', newHeight );
			},
			complete: function( elements ) {
				resetMasksHeights( elements );

				$pxgConversationFormTextarea.css( 'transition', '' );
			}
		} )

	} );

	function getCommentsLabelHeight() {
		commentLabelHeight = $commentsLabel.outerHeight();
	}

} )( jQuery, window );
