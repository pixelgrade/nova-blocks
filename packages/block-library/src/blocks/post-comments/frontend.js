import { above } from "@novablocks/utils";

const FORM_SELECTOR = '.comment-form';
const MASK_SELECTOR = '.comment-fields-mask';
const COMMENT_TEXTAREA_SELECTOR = '.comment-form-comment textarea';

const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = "easeOutCirc";

(function( $, window, undefined ) {

	featureCommentOnClick();

	$( FORM_SELECTOR ).each( function( i, element ) {
		const $form = $( element );

		handleMarkup( $form );
		bindEvents( $form );
		onResize( $form );
	} );

	function bindEvents( $form ) {
		$( window ).on( 'resize', function() {
			onResize( $form );
		} );

		$form.find( COMMENT_TEXTAREA_SELECTOR ).one( 'focusin', onFocus );
		$( document ).on( 'click', uncheckCheckboxes );
	}

	function onResize( $form ) {
		updatePlaceholder( $form );
		updateMasksHeights( $form );
	}

	function updatePlaceholder( $form ) {
		const $textarea = $form.find( COMMENT_TEXTAREA_SELECTOR );
		const desktopPlaceholder = 'Join the conversation, share your knowledge or ask a question...';
		const mobilePlaceholder = 'Share your knowledge or ask a question...';
		const placeholder = above( 'lap' ) ? desktopPlaceholder : mobilePlaceholder;

		$textarea.attr( "placeholder", placeholder );
	}

	function handleMarkup( $form ) {
		let $comment = $form.find( '.comment-form-comment' ),
			$others = $comment.nextAll(),
			$commentLabel = $comment.find( 'label' ),
			$commentDescription = $comment.find( '.field-description' );

		$commentLabel.add( $commentDescription )
		             .wrapAll( '<div class="comment-fields-mask">' )
		             .wrapAll( '<div class="comment-fields-wrapper  comment-fields-wrapper--comment">' );

		$others.wrapAll( '<div class="comment-fields-mask">' )
		       .wrapAll( '<div class="comment-fields-wrapper  comment-fields-wrapper--others">' );
	}

	function updateMasksHeights( $form ) {
		const $masks = $form.find( MASK_SELECTOR );
		const { animated } = $form.data();

		if ( !! animated ) {
			return;
		}

		$masks.each( function( i, obj ) {
			const $mask = $( obj );
			const height = $mask.outerHeight();

			$mask.data( 'height', height );
			$mask.css( {
				height: 0,
				overflow: 'hidden'
			} );
		} );

	}

	function resetMasksHeights( $form ) {
		const $masks = $form.find( MASK_SELECTOR );

		$masks.each( function( i, obj ) {
			$( obj ).css( {
				height: '',
				overflow: ''
			} );
		} );
	}

	function onFocus( e ) {
		const $textarea = $( this );
		const $form = $textarea.closest( FORM_SELECTOR );
		const $masks = $form.find( MASK_SELECTOR );

		const textareaHeight = $textarea.outerHeight();
		const targetHeight = 200;

		$masks.velocity( {
			tween: [1, 0]
		}, {
			duration: TRANSITION_DURATION,
			easing: TRANSITION_EASING,
			begin: function() {
				resetMasksHeights( $form );
				updateMasksHeights( $form );

				$form.data( 'animated', true );
				$textarea.css( 'transition', 'none' );
			},
			progress: function( elements, percentComplete, remaining, tweenValue, activeCall ) {

				$( elements ).each( function( i, element ) {
					const $element = $( element );
					const height = parseInt( $element.data( 'height' ), 10 );
					$element.css( 'height', height * tweenValue );
				} );

				const newHeight = textareaHeight + ( targetHeight - textareaHeight ) * tweenValue;
				$textarea.css( 'height', newHeight );
			},
			complete: function() {
				resetMasksHeights( $form );

				$textarea.css( 'transition', '' );
			}
		} )
	}

	function featureCommentOnClick() {

		$('.feature-comments').unbind('click');

		$('body').on('click', '.feature-comments', function () {
			let $this = $(this);

			$.ajax({
				url: featured_comments_ajax_object.ajaxurl,
				type: 'POST',
				data: {
					'action': 'handle_featured_comments',
					'do': $this.data('do'),
					'comment_id': $this.data('comment_id'),
					'nonce': $this.data('nonce')
				},
				success: function (response) {
					let action = $this.attr('data-do'),
						comment_id = $this.attr('data-comment_id'),
						$comment = $("#comment-" + comment_id),
						$this_and_comment = $this.siblings('.feature-comments').add($comment).add($this);
					if (action === 'feature')
						$this_and_comment.addClass('comment-featured');
					if (action === 'unfeature')
						$this_and_comment.removeClass('comment-featured');

					$this.data('nonce', response);
				}
			})

			return false;
		});
	}

	function uncheckCheckboxes( event ) {

		let $commentList = $('.comment-list'),
			$commentCheckboxes = $commentList.find('.comment-dropdown-open');

		if ( ! $( event.target ).is( $commentCheckboxes ) ) {
			$commentCheckboxes.prop("checked", false);
		}
	}

} )( jQuery, window );
