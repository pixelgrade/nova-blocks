!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=263)}({0:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},1:function(t,e){!function(){t.exports=this.wp.element}()},2:function(t,e){!function(){t.exports=this.wp.i18n}()},263:function(t,e,n){"use strict";var o=n(0),r=n(1),i=o(n(264)),u=o(n(265)),a=n(2),s=n(7),c=n(3);(0,s.registerBlockType)("novablocks/navigation",{title:(0,a.__)("Space Navigation","__plugin_txtd"),description:(0,a.__)("Outputs chosen navigaiton menu markup.","__plugin_txtd"),category:"nova-blocks",icon:(0,c.getSvg)(i.default),keywords:[(0,a.__)("menu","__plugin_txtd"),(0,a.__)("site menu","__plugin_txtd"),(0,a.__)("primary","__plugin_txtd"),(0,a.__)("secondary","__plugin_txtd")],parent:["novablocks/header"],attributes:u.default,edit:function(t){return(0,r.createElement)(wp.serverSideRender,{block:"novablocks/navigation",attributes:t.attributes})},save:function(){}})},264:function(t,e,n){"use strict";n.r(e);var o=n(5),r=n.n(o),i=n(6),u=n.n(i),a=new r.a({id:"navigation-block",use:"navigation-block-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="navigation-block"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM5.857 8A.857.857 0 015 7.143C5 6.512 5.512 6 6.143 6H18a1 1 0 110 2H5.857zM5 12.143c0 .473.384.857.857.857H18a1 1 0 100-2H6.143C5.512 11 5 11.512 5 12.143zM5.857 18A.857.857 0 015 17.143C5 16.512 5.512 16 6.143 16H18a1 1 0 110 2H5.857z" fill="#6565F2" /></symbol>'});u.a.add(a);e.default=a},265:function(t){t.exports=JSON.parse('{"slug":{"type":"string","default":""},"className":{"type":"string","default":""}}')},3:function(t,e){!function(){t.exports=this.novablocks.blockEditor}()},4:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},5:function(t,e,n){(function(e){var n;n=function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,o=t.content;this.id=e,this.viewBox=n,this.content=o};function n(t,e){return t(e={exports:{}},e.exports),e.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))},"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var o=n((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var r;return n&&!0===n.clone&&t(e)?o((r=e,Array.isArray(r)?[]:{}),e,n):e}function n(n,r,i){var u=n.slice();return r.forEach((function(r,a){void 0===u[a]?u[a]=e(r,i):t(r)?u[a]=o(n[a],r,i):-1===n.indexOf(r)&&u.push(e(r,i))})),u}function o(r,i,u){var a=Array.isArray(i),s=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(r)?s(r,i,u):e(i,u):function(n,r,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(r).forEach((function(a){t(r[a])&&n[a]?u[a]=o(n[a],r[a],i):u[a]=e(r[a],i)})),u}(r,i,u)}return o.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return o(t,n,e)}))},o}()})),r=n((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),i=r.svg,u=r.xlink,a={};a[i.name]=i.uri,a[u.name]=u.uri;var s=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(o(a,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n}(s(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(t)},t.exports=n()}).call(this,n(4))},6:function(t,e,n){(function(e){var n;n=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n=t((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var r;return n&&!0===n.clone&&t(e)?o((r=e,Array.isArray(r)?[]:{}),e,n):e}function n(n,r,i){var u=n.slice();return r.forEach((function(r,a){void 0===u[a]?u[a]=e(r,i):t(r)?u[a]=o(n[a],r,i):-1===n.indexOf(r)&&u.push(e(r,i))})),u}function o(r,i,u){var a=Array.isArray(i),s=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(r)?s(r,i,u):e(i,u):function(n,r,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(r).forEach((function(a){t(r[a])&&n[a]?u[a]=o(n[a],r[a],i):u[a]=e(r[a],i)})),u}(r,i,u)}return o.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return o(t,n,e)}))},o}()})),o=t((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),r=o.svg,i=o.xlink,u={};u[r.name]=r.uri,u[i.name]=i.uri;var a,s=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(u,e||{}))+">"+t+"</svg>"},c=o.svg,d=o.xlink,f={attrs:(a={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},a[c.name]=c.uri,a[d.name]=d.uri,a)},l=function(t){this.config=n(f,t||{}),this.symbols=[]};l.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},l.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},l.prototype.find=function(t){return this.symbols.filter((function(e){return e.id===t}))[0]||null},l.prototype.has=function(t){return null!==this.find(t)},l.prototype.stringify=function(){var t=this.config.attrs,e=this.symbols.map((function(t){return t.stringify()})).join("");return s(e,t)},l.prototype.toString=function(){return this.stringify()},l.prototype.destroy=function(){this.symbols.forEach((function(t){return t.destroy()}))};var p=function(t){var e=t.id,n=t.viewBox,o=t.content;this.id=e,this.viewBox=n,this.content=o};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))};var h=function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},y=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return h(s(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(p),v={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},g=function(t){return Array.prototype.slice.call(t,0)},m=function(){return/firefox/i.test(navigator.userAgent)},_=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},b=function(){return/edge/i.test(navigator.userAgent)},w=function(t){return(t||window.location.href).split("#")[0]},x=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",(function(e,n,o){var r,i,u;r=t,i={oldUrl:o,newUrl:n},(u=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,i),window.dispatchEvent(u)}))}])},E=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern, mask, clipPath"),g(t.querySelectorAll("symbol")).forEach((function(t){g(t.querySelectorAll(e)).forEach((function(e){t.parentNode.insertBefore(e,t)}))})),t},S=o.xlink.uri,O=/[{}|\\\^\[\]`"<>]/g;function A(t){return t.replace(O,(function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()}))}var k,C=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],j=C.map((function(t){return"["+t+"]"})).join(","),M=function(t,e,n,o){var r=A(n),i=A(o);(function(t,e){return g(t).reduce((function(t,n){if(!n.attributes)return t;var o=g(n.attributes),r=e?o.filter(e):o;return t.concat(r)}),[])})(t.querySelectorAll(j),(function(t){var e=t.localName,n=t.value;return-1!==C.indexOf(e)&&-1!==n.indexOf("url("+r)})).forEach((function(t){return t.value=t.value.replace(new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),i)})),function(t,e,n){g(t).forEach((function(t){var o=t.getAttribute("xlink:href");if(o&&0===o.indexOf(e)){var r=o.replace(e,n);t.setAttributeNS(S,"xlink:href",r)}}))}(e,r,i)},N="mount",B="symbol_mount",T=function(t){function e(e){var o=this;void 0===e&&(e={}),t.call(this,n(v,e));var r,i=(r=r||Object.create(null),{on:function(t,e){(r[t]||(r[t]=[])).push(e)},off:function(t,e){r[t]&&r[t].splice(r[t].indexOf(e)>>>0,1)},emit:function(t,e){(r[t]||[]).map((function(t){t(e)})),(r["*"]||[]).map((function(n){n(t,e)}))}});this._emitter=i,this.node=null;var u=this.config;if(u.autoConfigure&&this._autoConfigure(e),u.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");i.on(N,(function(){return o.updateUrls("#",a)}))}var s=this._handleLocationChange.bind(this);this._handleLocationChange=s,u.listenLocationChangeEvent&&window.addEventListener(u.locationChangeEvent,s),u.locationChangeAngularEmitter&&x(u.locationChangeEvent),i.on(N,(function(t){u.moveGradientsOutsideSymbol&&E(t)})),i.on(B,(function(t){var e;u.moveGradientsOutsideSymbol&&E(t.parentNode),(_()||b())&&(e=[],g(t.querySelectorAll("style")).forEach((function(t){t.textContent+="",e.push(t)})))}))}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var o={isMounted:{}};return o.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(t){var e=this.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter=void 0!==window.angular),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=m())},e.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,o=e.newUrl;this.updateUrls(n,o)},e.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(B,e.node)),n},e.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var o="string"==typeof t?document.querySelector(t):t;return n.node=o,this.symbols.forEach((function(t){t.mount(n.node),e._emitter.emit(B,t.node)})),g(o.querySelectorAll("symbol")).forEach((function(t){var e=y.createFromExistingNode(t);e.node=t,n.add(e)})),this._emitter.emit(N,o),o},e.prototype.destroy=function(){var t=this.config,e=this.symbols,n=this._emitter;e.forEach((function(t){return t.destroy()})),n.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(t,e){if(void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1),this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,o=this.render();return this.node=o,e&&n.childNodes[0]?n.insertBefore(o,n.childNodes[0]):n.appendChild(o),this._emitter.emit(N,o),o},e.prototype.render=function(){return h(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return M(this.node,n,w(t)+"#",w(e)+"#"),!0},Object.defineProperties(e.prototype,o),e}(l),P=t((function(t){var e,n,o,r,i;t.exports=(n=[],o=document,r=o.documentElement.doScroll,(i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState))||o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),function(t){i?setTimeout(t,0):n.push(t)})}));window.__SVG_SPRITE__?k=window.__SVG_SPRITE__:(k=new T({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=k);var L=function(){var t=document.getElementById("__SVG_SPRITE_NODE__");t?k.attach(t):k.mount(document.body,!0)};return document.body?L():P(L),k},t.exports=n()}).call(this,n(4))},7:function(t,e){!function(){t.exports=this.wp.blocks}()}});