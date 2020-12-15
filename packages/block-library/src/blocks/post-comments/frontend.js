import { isAnyPartOfElementInViewport } from "@novablocks/utils";
import "@novablocks/icons";

const FORM_SELECTOR = '.comment-form';
const MASK_SELECTOR = '.comment-fields-mask';
const USER_REPLYING_CLASS = 'user-is-replying';
const COPY_LINK_SELECTOR = '.copy-comment-link';
const NOTIFICATION_VISIBLE_CLASS = 'notification--is-visible';

// Keep it a snappy transition.
const TRANSITION_DURATION = 800;
const TRANSITION_EASING = "easeOutCirc";

(function( $, window, undefined ) {

	let $commentForm = $( '.novablocks-conversations__form' ),
		$conversationsBlock = $( '.novablocks-conversations' ),
		$commentPlaceholder = $( '#second-comment-form-marker' ),
		$commentList = $('.comment-list'),
		$commentListHeight = $commentList.outerHeight(),
		$commentDropdown = $commentList.find('.comment-dropdown').children(),
		$commentCheckboxes = $commentList.find(' .comment-dropdown-open');

	// Hackish way to avoid replying comment form being moved.
	$commentForm.wrap( '<div>' );
	$commentForm.removeClass( 'novablocks-conversations__form' );
	$commentForm = $commentForm.parent();
	$commentForm.addClass( 'novablocks-conversations__form' );

	const $notification = $('.novablocks-conversations__notification-text');

	let formIsMoved = false,
		scrollPos = 0,
		prevScroll = 0,
		currScroll = 0,
		scrollDir = 'down',
		frameRendered = true;

	$( FORM_SELECTOR ).each( function( i, element ) {
		const $form = $( element );

		handleMarkup( $form );
		bindEvents( $form );
		onResize( $form );
	} );

	$commentList.on('click', COPY_LINK_SELECTOR, copyLinkToClipboard);

	highlightCommentOnClick();

	let $temporaryForm = addTemporaryForm();
	updateTemporaryFormHeight();
	handleCommentReplyingClass();

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
				$commentForm.addClass('comment-form--is-expanded');
			},
			progress: function( elements, percentComplete, remaining, tweenValue, activeCall ) {

				$( elements ).each( function( i, element ) {
					const $element = $( element );
					const height = parseInt( $element.data( 'height' ), 10 );
					$element.css( 'min-height', height * tweenValue );
				} );

				const newHeight = textareaHeight + ( targetHeight - textareaHeight ) * tweenValue;
				$textarea.css( 'min-height', newHeight );
			},
			complete: function() {
				resetMasksHeights( $form );
				updateTemporaryFormHeight();

				$textarea.css( 'transition', '' );
			}
		} )
	}

	function highlightCommentOnClick() {

		$commentList.on('click', '.toggle-comment-highlight', function () {
			let $this = $(this),
				commentId = $this.data('comment_id'),
				wrapperSelector = "#wrapper-comment-" + commentId,
				$commentWrapper = $( wrapperSelector );

			// Put the whole comment in a working/loading state.
			$commentWrapper.addClass('working');

			$.ajax({
				url: nb_comments.ajaxUrl,
				type: 'POST',
				data: {
					'action': nb_comments.actions.toggleHighlight,
					'comment_id': commentId,
					'commentsListArgs': typeof nb_comments.commentsListArgs !== 'undefined' ? nb_comments.commentsListArgs : [],
					'nonce': $this.data('nonce')
				},
				success: function (response) {
					// Replace the current comment markup with the received one.
					// But only replace the comment wrapper while leaving child comments intact.
					let $newComment = $($.parseHTML(response));
					$commentWrapper.replaceWith($newComment.find(wrapperSelector));

					// Reinitialize stuff
					$commentDropdown = $commentList.find('.comment-dropdown').children();
					$commentCheckboxes = $commentList.find(' .comment-dropdown-open');
				},
				error: function (response) {
					// In the response we should get back some error markup. We should display this.

				},
				complete: function() {
					// There should be no working state.
					$commentWrapper.removeClass('working');
				}
			})

			return false;
		});
	}

	// @todo This is badly named!
	function uncheckCheckboxes( event ) {

		// If checkbox is not available, do nothing.
		// Currently the dropdown is visibile for authors.
		if ( ! $commentCheckboxes.length) {
			return;
		}

		if ( ! $( event.target ).is( $commentDropdown) ) {
			$commentCheckboxes.prop('checked', false);
		}
	}

	function changeCommentFormPosition() {

		// If the block is not in viewport, do nothing.
		if ( ! isAnyPartOfElementInViewport($conversationsBlock[0]) || $commentListHeight < $(window).height() ) {
			return;
		}

		let scrollIsUp = scrollDir === 'up',
			$thirdComment = $commentList.find('.comment').eq(3),
			thirdCommentIsInViewport = isAnyPartOfElementInViewport($thirdComment[0]),
			placeholderIsInViewport = isAnyPartOfElementInViewport($commentPlaceholder[0]),
			formIsInViewport = isAnyPartOfElementInViewport($commentForm[0]);

		// This is for the use-case when user has scrolled to bottom
		// and is refreshing the page. Whenever the placeholder is in viewport
		// The comment form should be after .comment-list.

		// The third comment is in viewport, we are scrolling down,
		// so we should move the comment form after comment list.

		if ( ! formIsMoved && ( placeholderIsInViewport || ( thirdCommentIsInViewport && !scrollIsUp ) ) && ! formIsInViewport ) {
			$commentForm.insertAfter($commentPlaceholder);
			$temporaryForm.insertBefore($commentList);
			formIsMoved = true;
		}

		// If the third comment is in viewport we are scrolling up,
		// so we should move the comment form before comment list.
		if ( thirdCommentIsInViewport && formIsMoved && scrollIsUp && ! formIsInViewport ) {
			$commentForm.insertBefore($commentList);
			$temporaryForm.insertAfter($commentPlaceholder);
			formIsMoved = false;
		}
	}

	function addTemporaryForm() {

		// If we cannot find our comment form, do nothing.
		// If we cannot find our placeholder, do nothing.
		if( ! $commentForm.length || ! $commentPlaceholder.length || $commentListHeight < $(window).height() ) {
			return;
		}

		let	temporaryFieldMarkup = $("<div class='temporary-form'></div>");

		temporaryFieldMarkup.insertAfter( $commentPlaceholder );

		return temporaryFieldMarkup;
	}

	function updateTemporaryFormHeight() {
		// If we cannot find temporary form markup, do nothing.
		if ( typeof $temporaryForm === 'undefined' ) {
			return;
		}

		let $commentFormHeight = $commentForm.outerHeight();

		$temporaryForm.css('height', $commentFormHeight);
	}

	function handleCommentReplyingClass() {

		// If temporary form does not exist,
		// We do not need this class.
		if (typeof $temporaryForm === 'undefined' ) {
			return;
		}

		if ("MutationObserver" in window) {

			// We use an observer to better handle user replying.
			var observer = new MutationObserver(function(mutations) {
				if (document.contains($('#wp-temp-form-div')[0]) ) {
					$conversationsBlock.addClass(USER_REPLYING_CLASS);
				} else {
					$conversationsBlock.removeClass(USER_REPLYING_CLASS);
				}
			});

			observer.observe(document.body, { childList: true,  subtree: true });
		}
	}

	function copyLinkToClipboard (event) {

		event.preventDefault();

		let copyText = $(this).attr('href'),
			succeeded;

		$notification.removeClass( NOTIFICATION_VISIBLE_CLASS );

		document.addEventListener('copy', function(e) {
			e.clipboardData.setData('text/plain', copyText);
			e.preventDefault();
		}, true);

		try {
			succeeded = document.execCommand( 'copy' );
		} catch (err) {
			succeeded = false;
		}

		if ( succeeded ) {
			setTimeout(function () {
				$notification.addClass( NOTIFICATION_VISIBLE_CLASS );
			}, 0);
		}
	}

} )( jQuery, window );
