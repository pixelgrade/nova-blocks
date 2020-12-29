this.novablocks=this.novablocks||{},this.novablocks.components=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=80)}({0:function(e,t){!function(){e.exports=this.wp.element}()},25:function(e,t){!function(){e.exports=this.jQuery}()},3:function(e,t){!function(){e.exports=this.novablocks.utils}()},36:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},80:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t);var a=n(0),o=n(36),c=n.n(o),i=function(e){var t=e.title,n=e.showTitle,r=e.placeholder;if(!n&&!r)return null;var o=e.titleTagName||"h3";return Object(a.createElement)(o,{className:"wp-block novablocks-grid__item-title novablocks-card__title"},Object(a.createElement)("div",{className:"novablocks-card__title-size-modifier"},r?Object(a.createElement)(m,null):t))},l=function(e){var t=e.meta,n=e.showMeta,r=e.placeholder;return n?Object(a.createElement)("div",{className:"wp-block novablocks-grid__item-meta"},Object(a.createElement)("div",{className:"novablocks-card__meta is-style-meta"},Object(a.createElement)("div",{className:"novablocks-card__meta-size-modifier"},r?Object(a.createElement)(m,{rows:1}):t))):null},s=function(e){var t=e.content,n=e.showContent,r=e.placeholder;if(!n&&!r)return null;var o="wp-block novablocks-grid__item-content novablocks-card__description";return r?Object(a.createElement)("div",{className:o},Object(a.createElement)("div",{className:"novablocks-card__content-size-modifier"},Object(a.createElement)(m,{rows:3}))):Object(a.createElement)("div",{className:o},Object(a.createElement)(a.RawHTML,{className:"novablocks-card__content-size-modifier"},t))},u=function(e){var t=e.buttons,n=e.showButtons,r=e.placeholder;return n?Object(a.createElement)("div",{className:"wp-block novablocks-grid__item-buttons novablocks-card__buttons"},r?Object(a.createElement)(m,{rows:1}):t):null},d=function(e){var t=e.children,n=e.placeholder,r=c()("novablocks-card__media",{"novablocks-card__media--placeholder":!!n}),o=t;return t||n||(o=Object(a.createElement)("div",{className:"novablocks-card__media-placeholder"})),Object(a.createElement)("div",{className:"novablocks-card__media-wrap"},Object(a.createElement)("div",{className:r},o))},b=function(e){var t=!!e.isLandscape,n=!!e.hasFixedAspectRatio,o=e.showMedia,b=e.showMeta,v=e.showTitle,m=e.showContent,f=e.showButtons,p=e.metaAboveTitle,h=e.metaBelowTitle,w=e.placeholder,_=c()("novablocks-card","novablocks-card--".concat(t?"landscape":"portrait"),"novablocks-block__content",{"novablocks-card--placeholder":w,"novablocks-card--fixed-media-aspect-ratio":n});return Object(a.createElement)("div",{className:_},Object(a.createElement)("div",{className:"novablocks-card__layout"},(o||w)&&Object(a.createElement)("div",{className:"novablocks-card__layout-media novablocks-grid__item-media"},Object(a.createElement)(d,e,e.media)),(b||v||m||f||w)&&Object(a.createElement)("div",{className:"novablocks-card__layout-content novablocks-card__inner-container"},Object(a.createElement)(l,r({},e,{meta:p})),Object(a.createElement)(i,e),Object(a.createElement)(l,r({},e,{meta:h})),Object(a.createElement)(s,e),Object(a.createElement)(u,e))))},v=n(3),m=function(e){var t=e.rows||2,n=Array.from(Array(t).keys());return Object(a.createElement)("div",{className:"novablocks-text-placeholder"},n.map((function(e,t){var r=t===n.length-1?Object(v.getRandomBetween)(6,12):Object(v.getRandomBetween)(17,20),o={width:"".concat(5*r,"%")};return Object(a.createElement)("div",{className:"novablocks-text-placeholder__row",style:o})})))};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=n(25),h=n.n(p),w=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.useOrientation=Object(v.hasTouchScreen)()&&"orientation"in window,this.bindEvents()}var t,n,r;return t=e,(n=[{key:"bindEvents",value:function(){var e=h()(window),t=this.updateViewportUnits.bind(this);t(),this.useOrientation?e.on("orientationchange",(function(){e.one("resize",t)})):e.on("resize",t)}},{key:"updateViewportUnits",value:function(){var e=document.documentElement,t=(this.useOrientation&&window.screen&&window.screen.availWidth||window.innerWidth)/100+"px",n=(this.useOrientation&&window.screen&&window.screen.availHeight||window.innerHeight)/100+"px";e.style.setProperty("--novablocks-1vw",t),e.style.setProperty("--novablocks-1vh",n)}}])&&f(t.prototype,n),r&&f(t,r),e}());n.d(t,"Card",(function(){return b})),n.d(t,"TextPlaceholder",(function(){return m})),n.d(t,"viewportObserver",(function(){return w}))}});