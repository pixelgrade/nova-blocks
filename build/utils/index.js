this.novablocks=this.novablocks||{},this.novablocks.utils=function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=71)}({12:function(n,r,t){var e;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var a=typeof e;if("string"===a||"number"===a)n.push(e);else if(Array.isArray(e)&&e.length){var i=o.apply(null,e);i&&n.push(i)}else if("object"===a)for(var u in e)t.call(e,u)&&e[u]&&n.push(u)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(e=function(){return o}.apply(r,[]))||(n.exports=e)}()},71:function(n,r,t){"use strict";t.r(r),t.d(r,"getRandomBetween",(function(){return a})),t.d(r,"getRandomArrayFromArray",(function(){return i})),t.d(r,"getRandomFromArray",(function(){return u})),t.d(r,"getRandomBooleanValue",(function(){return c})),t.d(r,"debounce",(function(){return f})),t.d(r,"range",(function(){return s})),t.d(r,"isSafari",(function(){return l})),t.d(r,"hasTouchScreen",(function(){return d})),t.d(r,"findParents",(function(){return p})),t.d(r,"shuffleArray",(function(){return v})),t.d(r,"defaultSnapValues",(function(){return h})),t.d(r,"maybeSnapFocalPoint",(function(){return y})),t.d(r,"getSnapClassname",(function(){return m})),t.d(r,"getControlsClasses",(function(){return b})),t.d(r,"areAttributesDirty",(function(){return g})),t.d(r,"getControlsDirtyClasses",(function(){return M})),t.d(r,"getCardMediaPaddingTop",(function(){return x})),t.d(r,"below",(function(){return P})),t.d(r,"above",(function(){return A}));var e=t(12),o=t.n(e),a=function(n,r){var t=Math.max(0,Math.random()-Number.MIN_VALUE);return Math.floor(t*(r-n+1)+n)},i=function(n,r){var t=new Array(r),e=n.length,o=new Array(e);if(!e)return[];for(;r--;){var a=Math.floor(Math.random()*e);t[r]=n[a in o?o[a]:a],o[a]=--e in o?o[e]:e}return t},u=function(n){return i(n,1)[0]},c=function(){return i([!0,!1],1)[0]},f=function(n,r){var t=null;return function(){var e=this,o=arguments,a=function(){n.apply(e,o)};clearTimeout(t),t=setTimeout(a,r)}},s=function(n,r){for(var t=[],e=0;e<=r-n;e++)t.push(e+n);return t},l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),d=function(){var n=!1;if("maxTouchPoints"in navigator)n=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)n=navigator.msMaxTouchPoints>0;else{var r=window.matchMedia&&matchMedia("(pointer:coarse)");if(r&&"(pointer:coarse)"===r.media)n=!!r.matches;else if("orientation"in window)n=!0;else{var t=navigator.userAgent;n=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(t)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(t)}}return n},p=function(n,r){var t=[];return function n(e){var o=e.parentNode;o instanceof HTMLElement&&(o.matches(r)&&t.push(o),n(o))}(n),t},v=function(n){for(var r,t,e=n.length;0!==e;)t=Math.floor(Math.random()*e),r=n[e-=1],n[e]=n[t],n[t]=r;return n},h={x:[0,.5,1],y:[0,.5,1]},y=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,t=parseFloat(n.x),e=parseFloat(n.y),o=.05;return r.x.forEach((function(n){n-o<t&&t<n+o&&(t=n)})),r.y.forEach((function(n){n-o<e&&e<n+o&&(e=n)})),{x:t,y:e}},m=function(n){var r=[];return h.x.includes(parseFloat(n.x))&&r.push("is-snapped-x"),h.y.includes(parseFloat(n.y))&&r.push("is-snapped-y"),r.join(" ")},b=function(n,r){var t=g(n,r);return M(t)},g=function(n,r){var t=!1,e=r(n);return Object.keys(e).some((function(r){return e[r]!==n[r]}))&&(t=!0),t},M=function(n){var r=["novablocks-controls-wrap"];return n&&r.push("novablocks-controls-wrap--dirty"),o()(r)},x=function(n){var r=n/50-1;r<0&&(r*=2);var t=1,e=1;return(r=Math.min(Math.max(-3,r),1))>0&&(t=1+r),r<0&&(e=1+Math.abs(r)),"".concat(100*t/e,"%")},w={desktop:1366,lap:1024,tablet:768,mobile:480},P=function(n){var r=w[n];return window.innerWidth<r},A=function(n){var r=w[n];return window.innerWidth>=r}}});