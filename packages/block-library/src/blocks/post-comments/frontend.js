import { above } from "@novablocks/utils";

const FORM_SELECTOR = '.comment-form';
const MASK_SELECTOR = '.comment-form-mask';
const COMMENT_TEXTAREA_SELECTOR = '.comment-form-comment textarea';

const TRANSITION_DURATION = 1000;
const TRANSITION_EASING = "easeOutCirc";

(function( $, window, undefined ) {

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
	}


	function onResize( $form ) {
		updatePlaceholder( $form );
		updateMasksHeights( $form );
	}

	function updatePlaceholder( $form ) {
		const $textarea = $form.find( COMMENT_TEXTAREA_SELECTOR );
		const desktopPlaceholder = 'Join the conversation, share your knowledge or ask a question...';
		const placeholder = above( 'lap' ) ? desktopPlaceholder : '';

		$textarea.attr( "placeholder", placeholder );
	}

	function handleMarkup( $form ) {
		let $comment = $form.find( '.comment-form-comment' ),
			$others = $comment.nextAll(),
			$commentLabel = $comment.find( 'label' ),
			$commentDescription = $comment.find( '.field-description' ),
			$commentMask = $( '<div class="comment-form-mask">' );

		$comment.wrap( '<div class="comment-fields-wrapper">' );
		$others.wrapAll( '<div class="comment-fields-wrapper">' );
		$others.wrapAll( '<div class="comment-form-mask">' );

		$commentLabel.appendTo( $commentMask );
		$commentDescription.appendTo( $commentMask );

		$commentMask.prependTo( $comment );
	}

	function updateMasksHeights( $form ) {
		const $masks = $form.find( MASK_SELECTOR );

		$masks.each( function( i, obj ) {
			const $mask = $( obj );
			const height = $mask.outerHeight();

			$mask.data( 'height', height );
			$mask.css( 'height', 0 );
		} );

	}

	function resetMasksHeights( $form ) {
		const $masks = $form.find( MASK_SELECTOR );

		$masks.each( function( i, obj ) {
			$( obj ).css( 'height', '' );
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

} )( jQuery, window );
