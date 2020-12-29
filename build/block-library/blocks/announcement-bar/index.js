!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=105)}({0:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},1:function(t,e){!function(){t.exports=this.wp.element}()},10:function(t,e){!function(){t.exports=this.wp.components}()},105:function(t,e,n){"use strict";var r=n(0),o=n(1),i=r(n(11)),u=n(2),a=n(7),c=n(10),s=n(8),l=n(3),f=r(n(106)),d=r(n(111)),p=["novablocks/openhours","core/paragraph"],h=[["novablocks/openhours",{openHoursStyle:"status"}]];(0,a.registerBlockType)("novablocks/announcement-bar",{title:(0,u.__)("Announcement Bar","__plugin_txtd"),description:(0,u.__)("Display a featured message through a banner across the top of your site.","__plugin_txtd"),category:"nova-blocks",icon:(0,l.getSvg)(d.default),keywords:[(0,u.__)("Promo Bar","__plugin_txtd"),(0,u.__)("Welcome Header Bar","__plugin_txtd"),(0,u.__)("Top Bar","__plugin_txtd")],styles:[{name:"accent",label:(0,u.__)("Accent","__plugin_txtd"),isDefault:!0},{name:"alternative",label:(0,u.__)("Alternative","__plugin_txtd")},{name:"alert",label:(0,u.__)("Alert","__plugin_txtd")}],attributes:{align:{type:"string",default:"full"},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},content:{type:"string",default:"<b>Find me on Instagram!</b> New photos and interesting facts every day."}},save:function(){return(0,o.createElement)(s.InnerBlocks.Content,null)},edit:function(t){var e=t.className,n=t.attributes,r=n.url,a=n.opensInNewTab,l=t.setAttributes,f=t.isSelected,d=(0,i.default)(e,"novablocks-announcement-bar");return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:d},(0,o.createElement)(s.InnerBlocks,{allowedBlocks:p,template:h})),f&&(0,o.createElement)("div",{className:"novablocks-announcement-bar__url-field-wrapper"},(0,o.createElement)(c.BaseControl,{label:(0,u.__)("Add a link to make the whole Announcement Bar clickable.","__plugin_txtd"),className:"wp-block-button__inline-link"},(0,o.createElement)(s.URLInput,{className:"wp-block-button__inline-link-input",value:r,autoFocus:!1,onChange:function(t){return l({url:t})},disableSuggestions:!f,isFullWidth:!0,hasBorder:!0})),(0,o.createElement)(c.ToggleControl,{checked:a,onChange:function(t){l({opensInNewTab:t})},label:(0,u.__)("Open in new tab","__plugin_txtd")})))},getEditWrapperProps:function(t){return{"data-align":"full"}},deprecated:f.default})},106:function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(107)),i=r(n(9)),u=n(7);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c=lodash.omit,s=[{isEligible:function(t,e){return void 0!==t.content&&!e.length},attributes:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({content:{type:"string",default:"<b>Find me on Instagram!</b> New photos and interesting facts every day."}},{align:{type:"string",default:"full"},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1}}),migrate:function(t,e){return[c(t,"content"),[(0,u.createBlock)("core/paragraph",{content:t.content})].concat((0,o.default)(e))]},save:function(){}}];e.default=s},107:function(t,e,n){var r=n(108),o=n(109),i=n(30),u=n(110);t.exports=function(t){return r(t)||o(t)||i(t)||u()}},108:function(t,e,n){var r=n(28);t.exports=function(t){if(Array.isArray(t))return r(t)}},109:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},11:function(t,e,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&t.push(u)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},110:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},111:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),i=n(6),u=n.n(i),a=new o.a({id:"announcement-bar-block",use:"announcement-bar-block-usage",viewBox:"0 0 18 18",content:'<symbol viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none" id="announcement-bar-block"><path fill="#6565F2" fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2H2zm14 2H2v4h14V2z" clip-rule="evenodd" /></symbol>'});u.a.add(a);e.default=a},2:function(t,e){!function(){t.exports=this.wp.i18n}()},28:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},3:function(t,e){!function(){t.exports=this.novablocks.blockEditor}()},30:function(t,e,n){var r=n(28);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},4:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},5:function(t,e,n){(function(e){var n;n=function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};function n(t,e){return t(e={exports:{}},e.exports),e.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))},"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var r=n((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o;return n&&!0===n.clone&&t(e)?r((o=e,Array.isArray(o)?[]:{}),e,n):e}function n(n,o,i){var u=n.slice();return o.forEach((function(o,a){void 0===u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))})),u}function r(o,i,u){var a=Array.isArray(i),c=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(o)?c(o,i,u):e(i,u):function(n,o,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(o).forEach((function(a){t(o[a])&&n[a]?u[a]=r(n[a],o[a],i):u[a]=e(o[a],i)})),u}(o,i,u)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return r(t,n,e)}))},r}()})),o=n((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),i=o.svg,u=o.xlink,a={};a[i.name]=i.uri,a[u.name]=u.uri;var c=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(r(a,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n}(c(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(t)},t.exports=n()}).call(this,n(4))},6:function(t,e,n){(function(e){var n;n=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n=t((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o;return n&&!0===n.clone&&t(e)?r((o=e,Array.isArray(o)?[]:{}),e,n):e}function n(n,o,i){var u=n.slice();return o.forEach((function(o,a){void 0===u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))})),u}function r(o,i,u){var a=Array.isArray(i),c=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(o)?c(o,i,u):e(i,u):function(n,o,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(o).forEach((function(a){t(o[a])&&n[a]?u[a]=r(n[a],o[a],i):u[a]=e(o[a],i)})),u}(o,i,u)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return r(t,n,e)}))},r}()})),r=t((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),o=r.svg,i=r.xlink,u={};u[o.name]=o.uri,u[i.name]=i.uri;var a,c=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(u,e||{}))+">"+t+"</svg>"},s=r.svg,l=r.xlink,f={attrs:(a={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},a[s.name]=s.uri,a[l.name]=l.uri,a)},d=function(t){this.config=n(f,t||{}),this.symbols=[]};d.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},d.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},d.prototype.find=function(t){return this.symbols.filter((function(e){return e.id===t}))[0]||null},d.prototype.has=function(t){return null!==this.find(t)},d.prototype.stringify=function(){var t=this.config.attrs,e=this.symbols.map((function(t){return t.stringify()})).join("");return c(e,t)},d.prototype.toString=function(){return this.stringify()},d.prototype.destroy=function(){this.symbols.forEach((function(t){return t.destroy()}))};var p=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))};var h=function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},y=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return h(c(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(p),m={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},g=function(t){return Array.prototype.slice.call(t,0)},v=function(){return/firefox/i.test(navigator.userAgent)},b=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},_=function(){return/edge/i.test(navigator.userAgent)},w=function(t){return(t||window.location.href).split("#")[0]},x=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",(function(e,n,r){var o,i,u;o=t,i={oldUrl:r,newUrl:n},(u=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,i),window.dispatchEvent(u)}))}])},E=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern, mask, clipPath"),g(t.querySelectorAll("symbol")).forEach((function(t){g(t.querySelectorAll(e)).forEach((function(e){t.parentNode.insertBefore(e,t)}))})),t},O=r.xlink.uri,S=/[{}|\\\^\[\]`"<>]/g;function j(t){return t.replace(S,(function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()}))}var A,k=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],C=k.map((function(t){return"["+t+"]"})).join(","),M=function(t,e,n,r){var o=j(n),i=j(r);(function(t,e){return g(t).reduce((function(t,n){if(!n.attributes)return t;var r=g(n.attributes),o=e?r.filter(e):r;return t.concat(o)}),[])})(t.querySelectorAll(C),(function(t){var e=t.localName,n=t.value;return-1!==k.indexOf(e)&&-1!==n.indexOf("url("+o)})).forEach((function(t){return t.value=t.value.replace(new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),i)})),function(t,e,n){g(t).forEach((function(t){var r=t.getAttribute("xlink:href");if(r&&0===r.indexOf(e)){var o=r.replace(e,n);t.setAttributeNS(O,"xlink:href",o)}}))}(e,o,i)},B="mount",N="symbol_mount",P=function(t){function e(e){var r=this;void 0===e&&(e={}),t.call(this,n(m,e));var o,i=(o=o||Object.create(null),{on:function(t,e){(o[t]||(o[t]=[])).push(e)},off:function(t,e){o[t]&&o[t].splice(o[t].indexOf(e)>>>0,1)},emit:function(t,e){(o[t]||[]).map((function(t){t(e)})),(o["*"]||[]).map((function(n){n(t,e)}))}});this._emitter=i,this.node=null;var u=this.config;if(u.autoConfigure&&this._autoConfigure(e),u.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");i.on(B,(function(){return r.updateUrls("#",a)}))}var c=this._handleLocationChange.bind(this);this._handleLocationChange=c,u.listenLocationChangeEvent&&window.addEventListener(u.locationChangeEvent,c),u.locationChangeAngularEmitter&&x(u.locationChangeEvent),i.on(B,(function(t){u.moveGradientsOutsideSymbol&&E(t)})),i.on(N,(function(t){var e;u.moveGradientsOutsideSymbol&&E(t.parentNode),(b()||_())&&(e=[],g(t.querySelectorAll("style")).forEach((function(t){t.textContent+="",e.push(t)})))}))}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(t){var e=this.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter=void 0!==window.angular),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=v())},e.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,r=e.newUrl;this.updateUrls(n,r)},e.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(N,e.node)),n},e.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var r="string"==typeof t?document.querySelector(t):t;return n.node=r,this.symbols.forEach((function(t){t.mount(n.node),e._emitter.emit(N,t.node)})),g(r.querySelectorAll("symbol")).forEach((function(t){var e=y.createFromExistingNode(t);e.node=t,n.add(e)})),this._emitter.emit(B,r),r},e.prototype.destroy=function(){var t=this.config,e=this.symbols,n=this._emitter;e.forEach((function(t){return t.destroy()})),n.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(t,e){if(void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1),this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,r=this.render();return this.node=r,e&&n.childNodes[0]?n.insertBefore(r,n.childNodes[0]):n.appendChild(r),this._emitter.emit(B,r),r},e.prototype.render=function(){return h(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return M(this.node,n,w(t)+"#",w(e)+"#"),!0},Object.defineProperties(e.prototype,r),e}(d),T=t((function(t){var e,n,r,o,i;t.exports=(n=[],r=document,o=r.documentElement.doScroll,(i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState))||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),function(t){i?setTimeout(t,0):n.push(t)})}));window.__SVG_SPRITE__?A=window.__SVG_SPRITE__:(A=new P({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=A);var I=function(){var t=document.getElementById("__SVG_SPRITE_NODE__");t?A.attach(t):A.mount(document.body,!0)};return document.body?I():T(I),A},t.exports=n()}).call(this,n(4))},7:function(t,e){!function(){t.exports=this.wp.blocks}()},8:function(t,e){!function(){t.exports=this.wp.blockEditor}()},9:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}});