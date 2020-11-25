this.novablocks=this.novablocks||{},this.novablocks.core=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=76)}({0:function(e,t){!function(){e.exports=this.wp.element}()},11:function(e,t){!function(){e.exports=this.novablocks.icons}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},49:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===c)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},5:function(e,t){!function(){e.exports=this.wp.hooks}()},6:function(e,t){!function(){e.exports=this.wp.compose}()},7:function(e,t){!function(){e.exports=this.wp.data}()},76:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getSettings",(function(){return b}));var o={};function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(o),n.d(o,"updateSettings",(function(){return v}));var i=n(7),a=n(25),u=n(11);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={settings:{}};function b(e){return e.settings}function v(e){return{type:"UPDATE_SETTINGS",settings:e}}var d=Object(i.registerStore)("novablocks",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SETTINGS":return f(f({},e),{},{settings:t.settings})}return e},selectors:r,actions:o}),y=n(0),O=n(49),g=n.n(O),h=n(6),j=n(5);n.d(t,"novaBlocks",(function(){return m})),n.d(t,"store",(function(){return d})),n.d(t,"STORE_NAME",(function(){return"novablocks"}));var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"initialize",value:function(e){!function(e){var t=function(t){var n=g()("wp-block-separator",t.className);return Object(y.createElement)("div",{className:n,dangerouslySetInnerHTML:{__html:e.separator&&e.separator.markup}})},n=Object(h.createHigherOrderComponent)((function(e){return function(n){return"core/separator"===n.name?Object(y.createElement)(t,{className:n.attributes.className}):Object(y.createElement)(e,n)}}),"replaceSeparatorEdit");Object(j.addFilter)("editor.BlockEdit","nova-theme/separator",n),Object(j.addFilter)("blocks.getSaveElement","nova-theme/separator",(function(e,t,n){return"core/separator"!==t.name?e:null}))}(e),Object(i.dispatch)("novablocks").updateSettings(e),Object(a.updateCategory)("nova-blocks",{icon:u.nova})}}])&&c(t.prototype,n),r&&c(t,r),e}();wp.novaBlocks=new m}});