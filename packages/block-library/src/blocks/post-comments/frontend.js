import { above, insertBefore, insertAfter, isAnyPartOfElementInViewport } from "@novablocks/utils";
import "@novablocks/icons";

const FORM_SELECTOR = '.comment-form';
const MASK_SELECTOR = '.comment-fields-mask';
const COMMENT_TEXTAREA_SELECTOR = '.comment-form-comment textarea';
const USER_REPLYING_CLASS = '.user-is-replying';

const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = "easeOutCirc";

(function( $, window, undefined ) {

	let $commentForm = $('.novablocks-conversations__content > .novablocks-conversations__form'),
		$conversationsBlock = $('.novablocks-conversations'),
		$commentPlaceholder = $('#second-comment-form-marker');

	let formIsMoved = false,
		scrollPos = 0,
		prevScroll = 0,
		currScroll = 0,
		scrollDir = 'down',
		frameRendered = true,
		$block = $('.novablocks-conversations');

	$( FORM_SELECTOR ).each( function( i, element ) {
		const $form = $( element );

		handleMarkup( $form );
		bindEvents( $form );
		onResize( $form );
	} );

	featureCommentOnClick();

	let $temporaryForm = addTemporaryForm();
	updateTemporaryFormHeight();

	$(window).on('scroll', () => {
		currScroll = $( 'html, body' ).scrollTop();
		scrollDir = currScroll >= prevScroll ? 'down' : 'up';
		frameRendered = false;
		prevScroll = currScroll;
	} );

	function update() {

		// If we cannot find our comment form, do nothing.
		// If the placeholder does not exist, do nothing.
		if ( $commentPlaceholder.length && $commentForm.length ) {
			changeCommentFormPosition();
		}
	}

	function updateLoop() {

		if ( ! frameRendered ) {
			update();
			frameRendered = true;
		}

		requestAnimationFrame( updateLoop );
	}

	requestAnimationFrame( updateLoop );

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

		let scrollIsUp;

		if ( ( document.body.getBoundingClientRect() ).top > scrollPos) {
			scrollIsUp = true;
			console.log('up');
		} else {
			scrollIsUp = false
			console.log('down');
		}

		scrollPos = ( document.body.getBoundingClientRect() ).top;

		return scrollIsUp;
	}

	function changeCommentFormPosition() {

		// If the block is not in viewport, do nothing.
		if ( ! isAnyPartOfElementInViewport($conversationsBlock[0]) ) {
			return;
		}

		let $commentList = $('.comment-list'),
			scrollIsUp = scrollDir === 'up',
			$thirdComment = $commentList.find('.comment').eq(3),
			thirdCommentIsInViewport = isAnyPartOfElementInViewport($thirdComment[0]),
			placeholderIsInViewport = isAnyPartOfElementInViewport($commentPlaceholder[0]);

		// This is for the use-case when user has scrolled to bottom
		// and is refreshing the page. Whenever the placeholder is in viewport
		// The comment form should be after .comment-list.

		// The third comment is in viewport, we are scrolling down,
		// so we should move the comment form after comment list.
		if ( ! formIsMoved && ( placeholderIsInViewport || ( thirdCommentIsInViewport && !scrollIsUp ) ) ) {
			$commentForm.insertAfter($commentPlaceholder);
			$temporaryForm.insertBefore($commentList);
			formIsMoved = true;
		}

		// The third comment is in viewport,we are scrolling up,
		// so we should move the comment form before comment list.
		if ( thirdCommentIsInViewport && formIsMoved && scrollIsUp ) {
			console.log( 'scrollUp' );
			$commentForm.insertBefore($commentList);
			$temporaryForm.insertAfter($commentPlaceholder);
			formIsMoved = false;
		}

		// console.log(thirdCommentIsInViewport, formIsMoved, scrollIsUp);
	}

	function addTemporaryForm() {

		// If we cannot find our comment form, do nothing.
		// If we cannot find our placeholder, do nothing.
		if( ! $commentForm.length || ! $commentPlaceholder.length ) {
			return;
		}

		let	temporaryFieldMarkup = $("<div class='temporary-form'></div>");

		temporaryFieldMarkup.insertAfter( $commentPlaceholder );

		return temporaryFieldMarkup;
	}

	function updateTemporaryFormHeight() {
		// If we cannot find temporary form markup, do nothing.
		if ( ! $temporaryForm.length) {
			return;
		}

		let $commentFormHeight = $commentForm.outerHeight();

		$temporaryForm.css('height', $commentFormHeight);
	}

	if ("MutationObserver" in window) {

		// We use an observer to better handle user replying.
		var observer = new MutationObserver(function(mutations) {
			if (document.contains($('#wp-temp-form-div')[0]) ) {
				$block.addClass(USER_REPLYING_CLASS);
			} else {
				$block.removeClass(USER_REPLYING_CLASS);
			}
		});

		observer.observe(document.body, { childList: true,  subtree: true });
	}

} )( jQuery, window );
