/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/post-comments/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/post-comments/frontend.js":
/*!***********************************************************************!*\
  !*** ./packages/block-library/build/blocks/post-comments/frontend.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var FORM_SELECTOR = '.comment-form';
var MASK_SELECTOR = '.comment-fields-mask';
var COMMENT_TEXTAREA_SELECTOR = '.comment-form-comment textarea';
var TRANSITION_DURATION = 1000;
var TRANSITION_EASING = "easeOutCirc";

(function ($, window, undefined) {
  featureCommentOnClick();
  $(FORM_SELECTOR).each(function (i, element) {
    var $form = $(element);
    handleMarkup($form);
    bindEvents($form);
    onResize($form);
  });

  function bindEvents($form) {
    $(window).on('resize', function () {
      onResize($form);
    });
    $form.find(COMMENT_TEXTAREA_SELECTOR).one('focusin', onFocus);
  }

  function onResize($form) {
    updatePlaceholder($form);
    updateMasksHeights($form);
  }

  function updatePlaceholder($form) {
    var $textarea = $form.find(COMMENT_TEXTAREA_SELECTOR);
    var desktopPlaceholder = 'Join the conversation, share your knowledge or ask a question...';
    var placeholder = (0, _utils.above)('lap') ? desktopPlaceholder : '';
    $textarea.attr("placeholder", placeholder);
  }

  function handleMarkup($form) {
    var $comment = $form.find('.comment-form-comment'),
        $others = $comment.nextAll(),
        $commentLabel = $comment.find('label'),
        $commentDescription = $comment.find('.field-description');
    $commentLabel.add($commentDescription).wrapAll('<div class="comment-fields-mask">').wrapAll('<div class="comment-fields-wrapper  comment-fields-wrapper--comment">');
    $others.wrapAll('<div class="comment-fields-mask">').wrapAll('<div class="comment-fields-wrapper  comment-fields-wrapper--others">');
  }

  function updateMasksHeights($form) {
    var $masks = $form.find(MASK_SELECTOR);

    var _$form$data = $form.data(),
        animated = _$form$data.animated;

    if (!!animated) {
      return;
    }

    $masks.each(function (i, obj) {
      var $mask = $(obj);
      var height = $mask.outerHeight();
      $mask.data('height', height);
      $mask.css({
        height: 0,
        overflow: 'hidden'
      });
    });
  }

  function resetMasksHeights($form) {
    var $masks = $form.find(MASK_SELECTOR);
    $masks.each(function (i, obj) {
      $(obj).css({
        height: '',
        overflow: ''
      });
    });
  }

  function onFocus(e) {
    var $textarea = $(this);
    var $form = $textarea.closest(FORM_SELECTOR);
    var $masks = $form.find(MASK_SELECTOR);
    var textareaHeight = $textarea.outerHeight();
    var targetHeight = 200;
    $masks.velocity({
      tween: [1, 0]
    }, {
      duration: TRANSITION_DURATION,
      easing: TRANSITION_EASING,
      begin: function begin() {
        resetMasksHeights($form);
        updateMasksHeights($form);
        $form.data('animated', true);
        $textarea.css('transition', 'none');
      },
      progress: function progress(elements, percentComplete, remaining, tweenValue, activeCall) {
        $(elements).each(function (i, element) {
          var $element = $(element);
          var height = parseInt($element.data('height'), 10);
          $element.css('height', height * tweenValue);
        });
        var newHeight = textareaHeight + (targetHeight - textareaHeight) * tweenValue;
        $textarea.css('height', newHeight);
      },
      complete: function complete() {
        resetMasksHeights($form);
        $textarea.css('transition', '');
      }
    });
  }

  function featureCommentOnClick() {
    $('.feature-comments').unbind('click');
    $('body').on('click', '.feature-comments', function () {
      var $this = $(this);
      $.ajax({
        url: featured_comments_ajax_object.ajaxurl,
        type: 'POST',
        data: {
          'action': 'handle_featured_comments',
          'do': $this.data('do'),
          'comment_id': $this.data('comment_id'),
          'nonce': $this.data('nonce')
        },
        success: function success(response) {
          var action = $this.attr('data-do'),
              comment_id = $this.attr('data-comment_id'),
              $comment = $("#comment-" + comment_id),
              $this_and_comment = $this.siblings('.feature-comments').add($comment).add($this);
          if (action === 'feature') $this_and_comment.addClass('comment-featured');
          if (action === 'unfeature') $this_and_comment.removeClass('comment-featured');
          $this.data('nonce', response);
        }
      });
      return false;
    });
  }
})(jQuery, window);


/***/ }),

/***/ "@novablocks/utils":
/*!************************************************!*\
  !*** external {"this":["novablocks","utils"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["utils"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map