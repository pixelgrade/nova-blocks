this.novablocks=this.novablocks||{},this.novablocks.core=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=78)}({0:function(t,e){!function(){t.exports=this.wp.element}()},17:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},27:function(t,e){!function(){t.exports=this.wp.blocks}()},4:function(t,e){!function(){t.exports=this.novablocks.blockEditor}()},5:function(t,e,n){(function(e){var n;n=function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};function n(t,e){return t(e={exports:{}},e.exports),e.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))},"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var r=n((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o;return n&&!0===n.clone&&t(e)?r((o=e,Array.isArray(o)?[]:{}),e,n):e}function n(n,o,i){var u=n.slice();return o.forEach((function(o,a){void 0===u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))})),u}function r(o,i,u){var a=Array.isArray(i),c=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(o)?c(o,i,u):e(i,u):function(n,o,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(o).forEach((function(a){t(o[a])&&n[a]?u[a]=r(n[a],o[a],i):u[a]=e(o[a],i)})),u}(o,i,u)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return r(t,n,e)}))},r}()})),o=n((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),i=o.svg,u=o.xlink,a={};a[i.name]=i.uri,a[u.name]=u.uri;var c=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(r(a,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n}(c(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(t)},t.exports=n()}).call(this,n(17))},51:function(t,e,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&t.push(u)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},6:function(t,e,n){(function(e){var n;n=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n=t((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o;return n&&!0===n.clone&&t(e)?r((o=e,Array.isArray(o)?[]:{}),e,n):e}function n(n,o,i){var u=n.slice();return o.forEach((function(o,a){void 0===u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))})),u}function r(o,i,u){var a=Array.isArray(i),c=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(o)?c(o,i,u):e(i,u):function(n,o,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(o).forEach((function(a){t(o[a])&&n[a]?u[a]=r(n[a],o[a],i):u[a]=e(o[a],i)})),u}(o,i,u)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return r(t,n,e)}))},r}()})),r=t((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),o=r.svg,i=r.xlink,u={};u[o.name]=o.uri,u[i.name]=i.uri;var a,c=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(u,e||{}))+">"+t+"</svg>"},s=r.svg,f=r.xlink,l={attrs:(a={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},a[s.name]=s.uri,a[f.name]=f.uri,a)},d=function(t){this.config=n(l,t||{}),this.symbols=[]};d.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},d.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},d.prototype.find=function(t){return this.symbols.filter((function(e){return e.id===t}))[0]||null},d.prototype.has=function(t){return null!==this.find(t)},d.prototype.stringify=function(){var t=this.config.attrs,e=this.symbols.map((function(t){return t.stringify()})).join("");return c(e,t)},d.prototype.toString=function(){return this.stringify()},d.prototype.destroy=function(){this.symbols.forEach((function(t){return t.destroy()}))};var p=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))};var h=function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},y=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return h(c(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(p),v={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},g=function(t){return Array.prototype.slice.call(t,0)},m=function(){return/firefox/i.test(navigator.userAgent)},b=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},w=function(){return/edge/i.test(navigator.userAgent)},x=function(t){return(t||window.location.href).split("#")[0]},O=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",(function(e,n,r){var o,i,u;o=t,i={oldUrl:r,newUrl:n},(u=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,i),window.dispatchEvent(u)}))}])},E=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern, mask, clipPath"),g(t.querySelectorAll("symbol")).forEach((function(t){g(t.querySelectorAll(e)).forEach((function(e){t.parentNode.insertBefore(e,t)}))})),t},S=r.xlink.uri,_=/[{}|\\\^\[\]`"<>]/g;function j(t){return t.replace(_,(function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()}))}var A,k=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],C=k.map((function(t){return"["+t+"]"})).join(","),M=function(t,e,n,r){var o=j(n),i=j(r);(function(t,e){return g(t).reduce((function(t,n){if(!n.attributes)return t;var r=g(n.attributes),o=e?r.filter(e):r;return t.concat(o)}),[])})(t.querySelectorAll(C),(function(t){var e=t.localName,n=t.value;return-1!==k.indexOf(e)&&-1!==n.indexOf("url("+o)})).forEach((function(t){return t.value=t.value.replace(new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),i)})),function(t,e,n){g(t).forEach((function(t){var r=t.getAttribute("xlink:href");if(r&&0===r.indexOf(e)){var o=r.replace(e,n);t.setAttributeNS(S,"xlink:href",o)}}))}(e,o,i)},P="mount",N="symbol_mount",T=function(t){function e(e){var r=this;void 0===e&&(e={}),t.call(this,n(v,e));var o,i=(o=o||Object.create(null),{on:function(t,e){(o[t]||(o[t]=[])).push(e)},off:function(t,e){o[t]&&o[t].splice(o[t].indexOf(e)>>>0,1)},emit:function(t,e){(o[t]||[]).map((function(t){t(e)})),(o["*"]||[]).map((function(n){n(t,e)}))}});this._emitter=i,this.node=null;var u=this.config;if(u.autoConfigure&&this._autoConfigure(e),u.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");i.on(P,(function(){return r.updateUrls("#",a)}))}var c=this._handleLocationChange.bind(this);this._handleLocationChange=c,u.listenLocationChangeEvent&&window.addEventListener(u.locationChangeEvent,c),u.locationChangeAngularEmitter&&O(u.locationChangeEvent),i.on(P,(function(t){u.moveGradientsOutsideSymbol&&E(t)})),i.on(N,(function(t){var e;u.moveGradientsOutsideSymbol&&E(t.parentNode),(b()||w())&&(e=[],g(t.querySelectorAll("style")).forEach((function(t){t.textContent+="",e.push(t)})))}))}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(t){var e=this.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter=void 0!==window.angular),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=m())},e.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,r=e.newUrl;this.updateUrls(n,r)},e.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(N,e.node)),n},e.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var r="string"==typeof t?document.querySelector(t):t;return n.node=r,this.symbols.forEach((function(t){t.mount(n.node),e._emitter.emit(N,t.node)})),g(r.querySelectorAll("symbol")).forEach((function(t){var e=y.createFromExistingNode(t);e.node=t,n.add(e)})),this._emitter.emit(P,r),r},e.prototype.destroy=function(){var t=this.config,e=this.symbols,n=this._emitter;e.forEach((function(t){return t.destroy()})),n.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(t,e){if(void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1),this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,r=this.render();return this.node=r,e&&n.childNodes[0]?n.insertBefore(r,n.childNodes[0]):n.appendChild(r),this._emitter.emit(P,r),r},e.prototype.render=function(){return h(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return M(this.node,n,x(t)+"#",x(e)+"#"),!0},Object.defineProperties(e.prototype,r),e}(d),B=t((function(t){var e,n,r,o,i;t.exports=(n=[],r=document,o=r.documentElement.doScroll,(i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState))||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),function(t){i?setTimeout(t,0):n.push(t)})}));window.__SVG_SPRITE__?A=window.__SVG_SPRITE__:(A=new T({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=A);var U=function(){var t=document.getElementById("__SVG_SPRITE_NODE__");t?A.attach(t):A.mount(document.body,!0)};return document.body?U():B(U),A},t.exports=n()}).call(this,n(17))},7:function(t,e){!function(){t.exports=this.wp.hooks}()},78:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"getSettings",(function(){return b}));var o={};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(o),n.d(o,"updateSettings",(function(){return w}));var u=n(9),a=n(27),c=n(4),s=n(5),f=n.n(s),l=n(6),d=n.n(l),p=new f.a({id:"icon",use:"icon-usage",viewBox:"0 0 36 36",content:'<symbol viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 18C0 8.059 8.059 0 18 0s18 8.059 18 18-8.059 18-18 18S0 27.941 0 18zm12.04-4a6.738 6.738 0 016.697-6h1.684A7.579 7.579 0 0128 15.579v.802c0 4-3.082 7.28-7.001 7.594l.001-.129v-2.573A7.273 7.273 0 0013.727 14H12.04z" fill="#6565F2" /><path d="M8 21.286A4.286 4.286 0 0112.286 17h1.168A4.546 4.546 0 0118 21.546v1.608A3.846 3.846 0 0114.154 27h-.44A5.714 5.714 0 018 21.286z" fill="#FFE42E" /></symbol>'}),h=(d.a.add(p),p);function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={settings:{}};function b(t){return t.settings}function w(t){return{type:"UPDATE_SETTINGS",settings:t}}var x=Object(u.registerStore)("novablocks",{reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_SETTINGS":return g(g({},t),{},{settings:e.settings})}return t},selectors:r,actions:o}),O=n(0),E=n(51),S=n.n(E),_=n(8),j=n(7);n.d(e,"novaBlocks",(function(){return A})),n.d(e,"store",(function(){return x}));var A=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"initialize",value:function(t){!function(t){var e=function(e){var n=S()("wp-block-separator",e.className);return Object(O.createElement)("div",{className:n,dangerouslySetInnerHTML:{__html:t.separator&&t.separator.markup}})},n=Object(_.createHigherOrderComponent)((function(t){return function(n){return"core/separator"===n.name?Object(O.createElement)(e,{className:n.attributes.className}):Object(O.createElement)(t,n)}}),"replaceSeparatorEdit");Object(j.addFilter)("editor.BlockEdit","nova-theme/separator",n),Object(j.addFilter)("blocks.getSaveElement","nova-theme/separator",(function(t,e,n){return"core/separator"!==e.name?t:null}))}(t),Object(u.dispatch)("novablocks").updateSettings(t),Object(a.updateCategory)("nova-blocks",{icon:Object(c.getSvg)(h)})}}])&&i(e.prototype,n),r&&i(e,r),t}();wp.novaBlocks=new A},8:function(t,e){!function(){t.exports=this.wp.compose}()},9:function(t,e){!function(){t.exports=this.wp.data}()}});