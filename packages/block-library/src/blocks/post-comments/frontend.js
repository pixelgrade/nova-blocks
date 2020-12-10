import { insertBefore, insertAfter, isAnyPartOfElementInViewport } from "@novablocks/utils";
import "@novablocks/icons";

const FORM_SELECTOR = '.comment-form';
const MASK_SELECTOR = '.comment-fields-mask';

// Keep it a snappy transition.
const TRANSITION_DURATION = 800;
const TRANSITION_EASING = "easeOutCirc";

(function( $, window, undefined ) {

	let formIsMoved = false,
		scrollPos = 0;

	$( FORM_SELECTOR ).each( function( i, element ) {
		const $form = $( element );

		handleMarkup( $form );
		bindEvents( $form );
		onResize( $form );
	} );

	featureCommentOnClick();

	addTemporaryForm();

	$(window).on('scroll', changeCommentFormPosition );

	function bindEvents( $form ) {
		$( window ).on( 'resize', function() {
			onResize( $form );
		} );

		$form.one('focusin', 'input, textarea, trix-editor', onFocus);
		$( document ).on( 'click', uncheckCheckboxes );
	}

	function onResize( $form ) {
		updateMasksHeights( $form );
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
				updateTemporaryFormHeight();

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

	function scrollDirectionIsUp() {
		let direction = false;

		if ((document.body.getBoundingClientRect()).top > scrollPos) {
			direction = true;
		}

		scrollPos = (document.body.getBoundingClientRect()).top;

		return direction;
	}

	function changeCommentFormPosition() {
		let $commentForm = $('.novablocks-conversations__content > .novablocks-conversations__form'),
			$conversationsBlock = $('.novablocks-conversations'),
			$commentPlaceholder = $('#second-comment-form-marker'),
			$temporaryForm = $('.temporary-form');

		// If we cannot find our comment form, do nothing.
		if ( ! $commentForm.length ) {
			return;
		}

		// If the block is not in viewport, do nothing.
		if ( ! isAnyPartOfElementInViewport($conversationsBlock[0]) ) {
			return;
		}

		// If the placeholder does not exist, do nothing.
		if ( ! $commentPlaceholder.length ) {
			return;
		}

		let $commentList = $('.comment-list'),
			scrollIsUp = scrollDirectionIsUp(),
			$thirdComment = $commentList.find('.comment').eq(3),
			thirdCommentIsInViewport = isAnyPartOfElementInViewport($thirdComment[0]);

		// The third comment is in viewport,we are scrolling down,
		// so we should move the comment form after comment list.
		if ( thirdCommentIsInViewport && !formIsMoved && !scrollIsUp ) {
			insertAfter($commentForm[0], $commentList[0]);
			insertBefore($temporaryForm[0], $commentList[0]);
			formIsMoved = true;
		}

		// If the third comment is in viewport we are scrolling up,
		// so we should move the comment form before comment list.
		if ( formIsMoved && thirdCommentIsInViewport && scrollIsUp ) {
			insertBefore($commentForm[0], $commentList[0]);
			insertAfter($temporaryForm[0], $commentList[0]);
			formIsMoved = false;
		}
	}

	function addTemporaryForm() {
		let $commentForm = $('.comment-form');

		// If we cannot find our comment form, do nothing.
		if( ! $commentForm.length ) {
			return;
		}

		let	temporaryFieldMarkup = $("<div class='temporary-form'></div>"),
			$commentPlaceholder = $('#second-comment-form-marker');

		insertBefore(temporaryFieldMarkup[0], $commentPlaceholder[0]);
		updateTemporaryFormHeight();
	}

	function updateTemporaryFormHeight() {
		let $tempFormMarkup = $('.temporary-form');

		// If we cannot find temporary form markup, do nothing.
		if ( ! $tempFormMarkup.length) {
			return;
		}

		let $commentForm = $('.comment-form'),
				$commentFormHeight = $commentForm.outerHeight();

		$tempFormMarkup.css('height', $commentFormHeight);
	}

} )( jQuery, window );
