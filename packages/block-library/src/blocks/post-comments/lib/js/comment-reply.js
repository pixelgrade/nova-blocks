/**
 * Handles the moving of the comment form for reply and other needs.
 *
 * This is a modified version of the core wp-includes/js/comment-reply.js
 *
 * @namespace addComment
 *
 * @type {Object}
 */
window.addComment = (function (window) {
  // Avoid scope lookups on commonly used variables.
  let document = window.document;

  // Settings.
  let config = {
    commentReplyClass: 'comment-reply-link',
    commentReplyTitleId: 'reply-title',
    cancelReplyId: 'cancel-comment-reply-link',
    commentFormId: 'commentform',
    temporaryFormId: 'wp-temp-form-div',
    parentIdFieldId: 'comment_parent',
    postIdFieldId: 'comment_post_ID',

    // Our additional config settings
    commentsWrapperId: 'novablocks-comments',
    openFormButtonClass: 'js-open-comment-form',
    commentFormSubmitId: 'comment-form-submit',
    replyingFlagClass: 'user-is-replying',
    focusOnFieldId: 'comment',
  };

  // If we have global settings, merge them with the defaults.
  if (typeof window.addComment !== 'undefined' && typeof window.addComment.config !== 'undefined') {
    Object.assign(config, window.addComment.config);
  }

  // Cross browser MutationObserver.
  let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  // Check browser cuts the mustard.
  let cutsTheMustard = 'querySelector' in document && 'addEventListener' in window;

  /*
   * Check browser supports dataset.
   * !! sets the variable to true if the property exists.
   */
  let supportsDataset = !!document.documentElement.dataset;

  // For holding the comments wrapper element.
  let commentsWrapperElement;

  // For holding the cancel element.
  let cancelElement;

  // For holding the comment form element.
  let commentFormElement;

  // The respond element.
  let respondElement;

  // The mutation observer.
  let observer;

  if (cutsTheMustard && document.readyState !== 'loading') {
    ready()
  } else if (cutsTheMustard) {
    window.addEventListener('DOMContentLoaded', ready, false)
  }

  /**
   * Sets up object variables after the DOM is ready.
   *
   * @since 5.1.1
   */
  function ready () {
    // Initialise the events.
    init();

    // Set up a MutationObserver to check for comments loaded late.
    observeChanges()
  }

  /**
   * Add events to links classed .comment-reply-link.
   *
   * Searches the context for reply links and adds the JavaScript events
   * required to move the comment form. To allow for lazy loading of
   * comments this method is exposed as window.commentReply.init().
   *
   * @since 5.1.0
   *
   * @memberOf addComment
   *
   * @param {HTMLElement} context The parent DOM element to search for links.
   */
  function init (context) {
    if (!cutsTheMustard) {
      return
    }

    // Get required elements.
    commentsWrapperElement = getElementById(config.commentsWrapperId);
    cancelElement = getElementById(config.cancelReplyId);
    commentFormElement = getElementById(config.commentFormId);

    // No cancel element, no replies.
    if (!cancelElement) {
      return
    }

    // childNodes is a handy check to ensure the context is a HTMLElement.
    if (!context || !context.childNodes) {
      context = commentsWrapperElement
    }

    cancelElement.addEventListener('touchstart', cancelEvent);
    cancelElement.addEventListener('click', cancelEvent);

    // Submit the comment form when the user types [Ctrl] or [Cmd] + [Enter].
    let submitFormHandler = function (e) {
      if ((e.metaKey || e.ctrlKey) && e.keyCode === 13) {
        commentFormElement.removeEventListener('keydown', submitFormHandler);
        e.preventDefault();
        // The submit button ID is 'submit' so we can't call commentFormElement.submit(). Click it instead.
        commentFormElement.submit.click();
        return false
      }
    };

    if (commentFormElement) {
      commentFormElement.addEventListener('keydown', submitFormHandler)
    }

    let links = [];
    links = links.concat(Array.from(replyLinks(context)));
    links = links.concat(Array.from(openFormButtons(context)));

    let element;
    for (let i = 0, l = links.length; i < l; i++) {
      element = links[i];

      element.addEventListener('touchstart', clickEvent);
      element.addEventListener('click', clickEvent)
    }
  }

  /**
   * Creates a mutation observer to check for newly inserted comments.
   *
   * @since 5.1.0
   */
  function observeChanges () {
    if (!MutationObserver) {
      return
    }

    let observerOptions = {
      childList: true,
      subtree: true
    };

    observer = new MutationObserver(handleChanges);
    observer.observe(document.body, observerOptions)
  }

  /**
   * Handles DOM changes, calling init() if any new nodes are added.
   *
   * @since 5.1.0
   *
   * @param {Array} mutationRecords Array of MutationRecord objects.
   */
  function handleChanges (mutationRecords) {
    let i = mutationRecords.length;

    while (i--) {
      // Call init() once if any record in this set adds nodes.
      if (mutationRecords[i].addedNodes.length) {
        init();
        return
      }
    }
  }

  /**
   * Return all links classed .comment-reply-link.
   *
   * @since 5.1.0
   *
   * @param {HTMLElement} context The parent DOM element to search for links.
   *
   * @return {HTMLCollection|NodeList|Array}
   */
  function replyLinks (context) {
    return getElementsByClass(config.commentReplyClass, context)
  }

  /**
   * Return all buttons classed .js-open-comment-form.
   *
   * Custom method of ours.
   *
   * @param {HTMLElement} context The parent DOM element to search for links.
   *
   * @return {HTMLCollection|NodeList|Array}
   */
  function openFormButtons (context) {
    return getElementsByClass(config.openFormButtonClass, context)
  }

  /**
   * Return all elements with the provided class.
   *
   * Custom method of ours.
   *
   * @param {string} selectorClass
   * @param {HTMLElement} context The parent DOM element to search for links.
   *
   * @return {HTMLCollection|NodeList|Array}
   */
  function getElementsByClass (selectorClass, context) {
    let allElements;

    // childNodes is a handy check to ensure the context is a HTMLElement.
    if (!context || !context.childNodes) {
      context = document
    }

    if (document.getElementsByClassName) {
      // Fastest.
      allElements = context.getElementsByClassName(selectorClass)
    } else {
      // Fast.
      allElements = context.querySelectorAll('.' + selectorClass)
    }

    return allElements
  }

  /**
   * Click event handler.
   *
   * @since 5.1.0
   *
   * @param {Event} event The calling event.
   */
  function clickEvent (event) {
    let replyNode = getElementById(config.commentReplyTitleId);
    let defaultReplyHeading = replyNode && replyNode.firstChild.textContent;
    let replyLink = this,
      commId = getDataAttribute(replyLink, 'belowelement'),
      parentId = getDataAttribute(replyLink, 'commentid'),
      respondId = getDataAttribute(replyLink, 'respondelement'),
      postId = getDataAttribute(replyLink, 'postid'),
      replyTo = getDataAttribute(replyLink, 'replyto') || defaultReplyHeading,
      follow;

    if (!commId || !respondId || !postId) {
      /*
       * Theme or plugin defines own link via custom `wp_list_comments()` callback
       * and calls `moveForm()` either directly or via a custom event hook.
       */
      return
    }

    /*
     * Third party comments systems can hook into this function via the global scope,
     * therefore the click event needs to reference the global scope.
     */
    follow = window.addComment.moveForm(commId, parentId, respondId, postId, replyTo);
    if (false === follow) {
      event.preventDefault()
    }
  }

  /**
   * Cancel event handler.
   *
   * @since 5.1.0
   *
   * @param {Event} event The calling event.
   */
  function cancelEvent (event) {
    let cancelLink = this;
    let temporaryFormId = config.temporaryFormId;
    let temporaryElement = getElementById(temporaryFormId);

    if (!temporaryElement || !respondElement) {
      // Conditions for cancel link fail.
      return
    }

    getElementById(config.parentIdFieldId).value = '0';

    // Move the respond form back in place of the temporary element.
    let headingText = temporaryElement.textContent;
    temporaryElement.parentNode.replaceChild(respondElement, temporaryElement);
    cancelLink.style.display = 'none';
    // Remove the "flag" (class) on the comments wrapper.
    commentsWrapperElement.classList.remove(config.replyingFlagClass);

    let replyHeadingElement = getElementById(config.commentReplyTitleId);
    let replyHeadingTextNode = replyHeadingElement && replyHeadingElement.firstChild;
    let replyLinkToParent = replyHeadingTextNode && replyHeadingTextNode.nextSibling;

    if (replyHeadingTextNode && replyHeadingTextNode.nodeType === Node.TEXT_NODE && headingText) {
      if (replyLinkToParent && 'A' === replyLinkToParent.nodeName && replyLinkToParent.id !== config.cancelReplyId) {
        replyLinkToParent.style.display = ''
      }

      replyHeadingTextNode.textContent = headingText
    } else {
      // We will use the replyTo for the submit button text.
      let submitButton = getElementById(config.commentFormSubmitId);
      if (submitButton) {
        submitButton.textContent = headingText
      }
    }

    event.preventDefault()
  }

  /**
   * Backward compatible getter of data-* attribute.
   *
   * Uses element.dataset if it exists, otherwise uses getAttribute.
   *
   * @since 5.1.0
   *
   * @param {HTMLElement} Element DOM element with the attribute.
   * @param {string}      Attribute the attribute to get.
   *
   * @return {string}
   */
  function getDataAttribute (element, attribute) {
    if (supportsDataset) {
      return element.dataset[attribute]
    } else {
      return element.getAttribute('data-' + attribute)
    }
  }

  /**
   * Get element by ID.
   *
   * Local alias for document.getElementById.
   *
   * @since 5.1.0
   *
   * @param {HTMLElement} The requested element.
   */
  function getElementById (elementId) {
    return document.getElementById(elementId)
  }

  /**
   * Moves the reply form from its current position to a new location.
   *
   * @since 2.7.0
   *
   * @memberOf addComment
   *
   * @param {string} addBelowId HTML ID of element the form follows.
   * @param {string} commentId  Database ID of comment being replied to.
   * @param {string} respondId  HTML ID of 'respond' element.
   * @param {string} postId     Database ID of the post.
   * @param {string} replyTo    Form heading content.
   */
  function moveForm (addBelowId, commentId, respondId, postId, replyTo) {
    // Get elements based on their IDs.
    let addBelowElement = getElementById(addBelowId);
    respondElement = getElementById(respondId);

    // Get the hidden fields.
    let parentIdField = getElementById(config.parentIdFieldId);
    let postIdField = getElementById(config.postIdFieldId);
    let element;

    let replyHeading = getElementById(config.commentReplyTitleId);
    let replyHeadingTextNode = replyHeading && replyHeading.firstChild;
    let replyLinkToParent = replyHeadingTextNode && replyHeadingTextNode.nextSibling;

    if (!addBelowElement || !respondElement || !parentIdField) {
      // Missing key elements, fail.
      return
    }

    if ('undefined' === typeof replyTo) {
      replyTo = replyHeadingTextNode && replyHeadingTextNode.textContent
    }

    addPlaceHolder(respondElement);

    // Set the value of the post.
    if (postId && postIdField) {
      postIdField.value = postId
    }

    parentIdField.value = commentId;

    // Show the cancel link if the commentId is not zero.
    if (commentId && '0' !== commentId) {
      cancelElement.style.display = ''
    }
    // Insert the form in the new location.
    addBelowElement.parentNode.insertBefore(respondElement, addBelowElement.nextSibling);
    respondElement.classList.add('expanded');

    // Handle reply related textual changes like heading or button text.
    if (replyHeadingTextNode && replyHeadingTextNode.nodeType === Node.TEXT_NODE) {
      if (replyLinkToParent && 'A' === replyLinkToParent.nodeName && replyLinkToParent.id !== config.cancelReplyId) {
        replyLinkToParent.style.display = 'none'
      }

      replyHeadingTextNode.textContent = replyTo
    } else {
      // We will use the replyTo for the submit button text.
      let submitButton = getElementById(config.commentFormSubmitId);
      if (submitButton) {
        submitButton.textContent = replyTo
      }
    }

    /*
     * This is for backward compatibility with third party commenting systems
     * hooking into the event using older techniques.
     */
    cancelElement.onclick = function () {
      return false
    };

    // Try to focus on the configured field.
    let focusElement = getElementById(config.focusOnFieldId);
    if (focusElement) {
      focusElement.focus();
      /*
      * false is returned for backward compatibility with third party commenting systems
      * hooking into this function.
      */
      return false
    }
    // Focus on the first field in the comment form.
    try {
      for (let i = 0; i < commentFormElement.elements.length; i++) {
        element = commentFormElement.elements[i];
        if ('button' === element.type) {
          // We don't want to focus on buttons.
          continue;
        }


        // Skip form elements that are hidden or disabled.
        if ('hidden' === element.type || element.disabled || isCssHidden(element)) {
          continue
        }

        element.focus();
        // Stop after the first focusable element.
        break
      }
    } catch (e) {

    }

    /*
     * false is returned for backward compatibility with third party commenting systems
     * hooking into this function.
     */
    return false
  }

  function isCssHidden(element) {
    let cssHidden = false,
      style;

    // Get elements computed style.
    if ('getComputedStyle' in window) {
      // Modern browsers.
      style = window.getComputedStyle(element)
    } else if (document.documentElement.currentStyle) {
      // IE 8.
      style = element.currentStyle
    }

    /*
     * For display none, do the same thing jQuery does. For visibility,
     * check the element computed style since browsers are already doing
     * the job for us. In fact, the visibility computed style is the actual
     * computed value and already takes into account the element ancestors.
     */
    if ((element.offsetWidth <= 0 && element.offsetHeight <= 0) || style.visibility === 'hidden') {
      cssHidden = true
    }

    return cssHidden;
  }

  /**
   * Add placeholder element.
   *
   * Places a place holder element above the #respond element for
   * the form to be returned to if needs be.
   *
   * @since 2.7.0
   *
   * @param {HTMLelement} respondElement the #respond element holding comment form.
   */
  function addPlaceHolder (respondElement) {
    let temporaryFormId = config.temporaryFormId;
    let temporaryElement = getElementById(temporaryFormId);
    let replyElement = getElementById(config.commentReplyTitleId);
    let initialHeadingText = replyElement ? replyElement.firstChild.textContent : '';
    if (!replyElement) {
      // We need to search for the submit button since that appears to be our means of contextul text, not the reply heading.
      let submitButton = getElementById(config.commentFormSubmitId);
      if (submitButton) {
        initialHeadingText = submitButton.textContent
      }
    }

    if (temporaryElement) {
      // The element already exists - we want to move it.
      respondElement.parentNode.insertBefore(temporaryElement, respondElement);
      return
    }

    temporaryElement = document.createElement('div');
    temporaryElement.id = temporaryFormId;
    temporaryElement.style.display = 'none';
    temporaryElement.textContent = initialHeadingText;
    respondElement.parentNode.insertBefore(temporaryElement, respondElement);

    // Add the "flag" (class) on the comments wrapper.
    commentsWrapperElement.classList.add(config.replyingFlagClass)
  }

  return {
    init: init,
    moveForm: moveForm
  }
})(window);
