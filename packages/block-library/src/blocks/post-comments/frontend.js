import '@novablocks/icons'

const COPY_LINK_SELECTOR = '.copy-comment-link';
const NOTIFICATION_VISIBLE_CLASS = 'notification--is-visible';

(function ($, window, undefined) {

  let $conversationsBlock = $('.novablocks-conversations'),
    $commentList = $('.comment-list'),
    $commentDropdown = $commentList.find('.comment-dropdown').children(),
    $commentCheckboxes = $commentList.find(' .comment-dropdown-open')

  const $notification = $('.novablocks-conversations__notification-text')

  bindEvents()

  highlightCommentOnClick()

  function bindEvents () {
    // Close comment "More" dropdown when clicking anywhere outside of it.
    $(document).on('click', handleCommentDropdownState)
    // Handle comment direct link copying to the clipboard.
    $commentList.on('click', COPY_LINK_SELECTOR, copyLinkToClipboard)
  }

  function highlightCommentOnClick () {

    $commentList.on('click', '.toggle-comment-highlight', function () {
      let $this = $(this),
        commentId = $this.data('comment_id'),
        wrapperSelector = '#wrapper-comment-' + commentId,
        $commentWrapper = $(wrapperSelector)

      // Put the whole comment in a working/loading state.
      $commentWrapper.addClass('working')

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
          let $newComment = $($.parseHTML(response))
          $commentWrapper.replaceWith($newComment.find(wrapperSelector))

          // Reinitialize stuff
          $commentDropdown = $commentList.find('.comment-dropdown').children()
          $commentCheckboxes = $commentList.find(' .comment-dropdown-open')
        },
        error: function (response) {
          // In the response we should get back some error markup. We should display this.

        },
        complete: function () {
          // There should be no working state.
          $commentWrapper.removeClass('working')
        }
      })

      return false
    })
  }

  function handleCommentDropdownState (event) {

    // If checkbox is not available, do nothing.
    if (!$commentCheckboxes.length) {
      return
    }

    if (!$(event.target).is($commentDropdown)) {
      $commentCheckboxes.prop('checked', false)
    }
  }

  function copyLinkToClipboard (event) {

    event.preventDefault()

    let copyText = $(this).attr('href'),
      succeeded

    $notification.removeClass(NOTIFICATION_VISIBLE_CLASS)

    document.addEventListener('copy', function (e) {
      e.clipboardData.setData('text/plain', copyText)
      e.preventDefault()
    }, true)

    try {
      succeeded = document.execCommand('copy')
    } catch (err) {
      succeeded = false
    }

    if (succeeded) {
      setTimeout(function () {
        $notification.addClass(NOTIFICATION_VISIBLE_CLASS)
      }, 0)
    }
  }

})(jQuery, window)
