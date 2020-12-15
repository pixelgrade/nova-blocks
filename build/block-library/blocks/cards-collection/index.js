!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=112)}({0:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},1:function(t,e){!function(){t.exports=this.wp.element}()},11:function(t,e,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var c=r.apply(null,o);c&&t.push(c)}else if("object"===i)for(var l in o)n.call(o,l)&&o[l]&&t.push(l)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},112:function(t,e,n){"use strict";var o=n(0),r=n(5),i=n(1),c=r(n(3)),l=o(n(113)),u=n(2),s=n(4),a=n(7);(0,s.registerBlockType)("novablocks/cards-collection",{title:(0,u.__)("Cards Collection","__plugin_txtd"),description:(0,u.__)("Display a list of related items placed within a coherent layout.","__plugin_txtd"),category:"nova-blocks",icon:c.cardsCollection,keywords:[(0,u.__)("grid","__plugin_txtd"),(0,u.__)("columns","__plugin_txtd"),(0,u.__)("collection","__plugin_txtd"),(0,u.__)("group","__plugin_txtd")],edit:l.default,save:function(){return(0,i.createElement)(a.InnerBlocks.Content,null)},getEditWrapperProps:function(){return wp.data.select("core/block-editor").getSettings().alignWide?{"data-align":"full"}:{}}})},113:function(t,e,n){"use strict";var o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(1),i=o(n(30)),c=o(n(11)),l=n(54),u=n(20),s=(n(2),n(7)),a=n(15),f=["novablocks/card"],p=[["novablocks/card"],["novablocks/card"],["novablocks/card"]],d=(0,u.createHigherOrderComponent)((function(t){return function(e){if("novablocks/cards-collection"===e.name){var n=e.clientId,o=e.attributes,i=(0,a.select)("core/block-editor").getBlock,c=(0,a.dispatch)("core/block-editor").updateBlockAttributes,l=i(n).innerBlocks,u={level:(s=o).level,contentAlign:s.contentAlign,showMedia:s.showMedia,showTitle:s.showTitle,showSubtitle:s.showSubtitle,showDescription:s.showDescription,showButtons:s.showButtons,showMeta:s.showMeta};l.forEach((function(t){c(t.clientId,u),Array.isArray(t.innerBlocks)&&t.innerBlocks.forEach((function(t){c(t.clientId,{align:u.contentAlign})}))}))}var s;return(0,r.createElement)(t,e)}}),"withCollectionVisibilityAttributes");wp.hooks.addFilter("editor.BlockListBlock","novablocks/with-collection-visibility-attributes",d);var b=function(t){var e=t.innerBlocks,n=!!e&&e.length<4,o=Object.assign({},t,{className:(0,c.default)(t.className,"novablocks-cards-collection")});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.Collection,(0,i.default)({hasAppender:n},o),(0,r.createElement)(s.InnerBlocks,{allowedBlocks:f,template:p,renderAppender:!!n&&window.undefined})))};e.default=b},15:function(t,e){!function(){t.exports=this.wp.data}()},2:function(t,e){!function(){t.exports=this.wp.i18n}()},20:function(t,e){!function(){t.exports=this.wp.compose}()},3:function(t,e){!function(){t.exports=this.novablocks.icons}()},30:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n.apply(this,arguments)}t.exports=n},4:function(t,e){!function(){t.exports=this.wp.blocks}()},5:function(t,e,n){var o=n(6);function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var e=r();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)){var l=i?Object.getOwnPropertyDescriptor(t,c):null;l&&(l.get||l.set)?Object.defineProperty(n,c,l):n[c]=t[c]}return n.default=t,e&&e.set(t,n),n}},54:function(t,e){!function(){t.exports=this.novablocks.collection}()},6:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},7:function(t,e){!function(){t.exports=this.wp.blockEditor}()}});