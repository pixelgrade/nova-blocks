!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=100)}({0:function(e,n){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},100:function(e,n,t){"use strict";var o,r=t(0)(t(101));o=jQuery,window,o((function(){var e=document.getElementsByClassName("novablocks-announcement-bar");Array.from(e).map((function(e){return new r.default(e)}))}))},101:function(e,n,t){"use strict";var o=t(0);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(13)),i=o(t(14)),u=o(t(102)),c=function(){function e(n,t){(0,r.default)(this,e),this.element=n,this.pieces=this.getPieces(),this.id=jQuery(n).data("id"),this.cookieName="novablocks-announcement-"+this.id+"-disabled";var o=u.default.get(this.cookieName),i=jQuery("body").hasClass("logged-in");o&&!i||(this.pieces.element.removeClass("is-hidden"),this.bindEvents())}return(0,i.default)(e,[{key:"getPieces",value:function(){var e=jQuery(this.element);return{element:e,close:e.find(".novablocks-announcement-bar__close")}}},{key:"bindEvents",value:function(){this.pieces.close.on("click",this.onClose.bind(this))}},{key:"onClose",value:function(){var e=this.cookieName;this.pieces.element.addClass("is-hidden"),u.default.set(e,!0,{expires:365})}}]),e}();n.default=c},102:function(e,n,t){var o,r;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(r="function"==typeof(o=i)?o.call(n,t,n,e):o)||(e.exports=r),!0,e.exports=i(),!!0){var u=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=u,c}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var u=JSON.stringify(t);/^[\{\[]/.test(u)&&(t=u)}catch(e){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var a in i)i[a]&&(c+="; "+a,!0!==i[a]&&(c+="="+i[a].split(";")[0]));return document.cookie=n+"="+t+c}}function u(e,t){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],u=0;u<i.length;u++){var c=i[u].split("="),a=c.slice(1).join("=");t||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var s=n(c[0]);if(a=(o.read||o)(a,s)||n(a),t)try{a=JSON.parse(a)}catch(e){}if(r[s]=a,e===s)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return u(e,!1)},r.getJSON=function(e){return u(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}((function(){}))}))},13:function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},14:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}});