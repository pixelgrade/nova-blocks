this.novablocks=this.novablocks||{},this.novablocks.utils=function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=73)}({14:function(n,t,e){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&n.push(a)}else if("object"===i)for(var u in r)e.call(r,u)&&r[u]&&n.push(u)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(n.exports=r)}()},73:function(n,t,e){"use strict";e.r(t),e.d(t,"getRandomBetween",(function(){return i})),e.d(t,"getRandomArrayFromArray",(function(){return a})),e.d(t,"getRandomFromArray",(function(){return u})),e.d(t,"getRandomBooleanValue",(function(){return c})),e.d(t,"debounce",(function(){return s})),e.d(t,"range",(function(){return l})),e.d(t,"isSafari",(function(){return d})),e.d(t,"hasTouchScreen",(function(){return f})),e.d(t,"isMobileDevice",(function(){return p})),e.d(t,"findParents",(function(){return m})),e.d(t,"shuffleArray",(function(){return v})),e.d(t,"defaultSnapValues",(function(){return h})),e.d(t,"maybeSnapFocalPoint",(function(){return b})),e.d(t,"getSnapClassname",(function(){return g})),e.d(t,"getControlsClasses",(function(){return w})),e.d(t,"areAttributesDirty",(function(){return y})),e.d(t,"getControlsDirtyClasses",(function(){return k})),e.d(t,"getCardMediaPaddingTop",(function(){return x})),e.d(t,"below",(function(){return P})),e.d(t,"above",(function(){return j})),e.d(t,"titleCase",(function(){return A})),e.d(t,"isAnyPartOfElementInViewport",(function(){return O}));var r=e(14),o=e.n(r),i=function(n,t){var e=Math.max(0,Math.random()-Number.MIN_VALUE);return Math.floor(e*(t-n+1)+n)},a=function(n,t){var e=new Array(t),r=n.length,o=new Array(r);if(!r)return[];for(;t--;){var i=Math.floor(Math.random()*r);e[t]=n[i in o?o[i]:i],o[i]=--r in o?o[r]:r}return e},u=function(n){return a(n,1)[0]},c=function(){return a([!0,!1],1)[0]},s=function(n,t){var e=null;return function(){var r=this,o=arguments,i=function(){n.apply(r,o)};clearTimeout(e),e=setTimeout(i,t)}},l=function(n,t){for(var e=[],r=0;r<=t-n;r++)e.push(r+n);return e},d=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),f=function(){var n=!1;if("maxTouchPoints"in navigator)n=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)n=navigator.msMaxTouchPoints>0;else{var t=window.matchMedia&&matchMedia("(pointer:coarse)");if(t&&"(pointer:coarse)"===t.media)n=!!t.matches;else if("orientation"in window)n=!0;else{var e=navigator.userAgent;n=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(e)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(e)}}return n},p=function(){var n,t=!1;return n=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4)))&&(t=!0),t},m=function(n,t){var e=[];return function n(r){var o=r.parentNode;o instanceof HTMLElement&&(o.matches(t)&&e.push(o),n(o))}(n),e},v=function(n){for(var t,e,r=n.length;0!==r;)e=Math.floor(Math.random()*r),t=n[r-=1],n[r]=n[e],n[e]=t;return n},h={x:[0,.5,1],y:[0,.5,1]},b=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,e=parseFloat(n.x),r=parseFloat(n.y),o=.05;return t.x.forEach((function(n){n-o<e&&e<n+o&&(e=n)})),t.y.forEach((function(n){n-o<r&&r<n+o&&(r=n)})),{x:e,y:r}},g=function(n){var t=[];return h.x.includes(parseFloat(n.x))&&t.push("is-snapped-x"),h.y.includes(parseFloat(n.y))&&t.push("is-snapped-y"),t.join(" ")},w=function(n,t){var e=y(n,t);return k(e)},y=function(n,t){var e=!1,r=t(n);return Object.keys(r).some((function(t){return r[t]!==n[t]}))&&(e=!0),e},k=function(n){var t=["novablocks-controls-wrap"];return n&&t.push("novablocks-controls-wrap--dirty"),o()(t)},x=function(n){var t=n/50-1;t<0&&(t*=2);var e=1,r=1;return(t=Math.min(Math.max(-3,t),1))>0&&(e=1+t),t<0&&(r=1+Math.abs(t)),"".concat(100*e/r,"%")},M={desktop:1366,lap:1024,tablet:768,mobile:480},P=function(n){var t=M[n];return window.innerWidth<t},j=function(n){var t=M[n];return window.innerWidth>=t},A=function(n){for(var t=n.toLowerCase().split(" "),e=0;e<t.length;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].substring(1);return t.join(" ")},O=function(n){var t=n.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth,o=t.top<=e&&t.top+t.height>=0,i=t.left<=r&&t.left+t.width>=0;return o&&i}}});