!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=281)}({0:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},1:function(t,e){!function(){t.exports=this.wp.element}()},15:function(t,e){!function(){t.exports=this.wp.data}()},2:function(t,e){!function(){t.exports=this.wp.i18n}()},281:function(t,e,n){"use strict";var o=n(0),r=n(1),i=o(n(282)),a=o(n(283)),u=n(2),c=n(7),s=n(8),l=n(3);(0,c.registerBlockType)("novablocks/post-comments",{title:(0,u.__)("Comments Nova","__plugin_txtd"),description:(0,u.__)("Display your post comments section.","__plugin_txtd"),icon:(0,l.getSvg)(i.default),category:"nova-blocks",supports:{html:!1},edit:a.default,save:function(){return(0,r.createElement)(s.InnerBlocks.Content,null)},getEditWrapperProps:function(){return wp.data.select("core/block-editor").getSettings().alignWide?{"data-align":"full"}:{}}})},282:function(t,e,n){"use strict";n.r(e);var o=n(5),r=n.n(o),i=n(6),a=n.n(i),u=new r.a({id:"post-comments-block",use:"post-comments-block-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="post-comments-block"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM7 7a4 4 0 00-4 4 2 2 0 002 2h3a2 2 0 002-2V9a2 2 0 00-2-2H7zm9-3a4 4 0 014 4v8a3.999 3.999 0 01-2.082 3.511C16.949 20.041 16 19.105 16 18v-3a2 2 0 00-2-2 2 2 0 01-2-2V6a2 2 0 012-2h2zM8 15a2 2 0 00-2 2 4 4 0 004 4h2a2 2 0 002-2v-2a2 2 0 00-2-2H8z" fill="#6565F2" /></symbol>'});a.a.add(u);e.default=u},283:function(t,e,n){"use strict";var o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(1),i=o(n(284)),a=function(t){return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(i.default,t))};e.default=a},284:function(t,e,n){"use strict";var o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(1),i=n(8),a=n(2),u=n(15),c=o(n(285));function s(t){var e=t.postId;return(0,u.useSelect)((function(t){var n=t("core").getEntityRecords("root","comment",{post:e});return n&&n.length?n.map((function(t){return(0,r.createElement)("div",{className:"comment",key:t.id},(0,r.createElement)("div",{className:"comment-body comment-grid"},(0,r.createElement)("div",{className:"comment-content"},(0,r.createElement)("div",{className:"comment-author-avatar vcard"},(0,r.createElement)("img",{className:"avatar",src:t.author_avatar_urls[48],alt:""})),(0,r.createElement)("div",{className:"comment-author-info"},(0,r.createElement)("span",{className:"comment-author"},t.author_name)),(0,r.createElement)("div",{className:"comment-text"},(0,r.createElement)(r.RawHTML,null,t.content.rendered)),(0,r.createElement)("div",{className:"comment-footer"},(0,r.createElement)("span",{className:"comment-posted-time"},(0,c.default)(t.date).fromNow())))))})):(0,a.__)("No comments.")}),[e])}var l=function(t){t.attributes;var e=t.context,n=e.postId;return e.postType&&n?(0,r.createElement)("div",{className:"novablocks-conversations"},(0,r.createElement)("div",{className:"novablocks-conversations__container"},(0,r.createElement)("h3",{className:"novablocks-conversations__title"},(0,a.__)("Conversations","__plugin_txtd")),(0,r.createElement)("div",{className:"comment-form form-grid"},(0,r.createElement)("img",{className:"avatar",alt:""}),(0,r.createElement)("p",{className:"comment-form-comment"},(0,r.createElement)("span",{className:"comment-label__container"},(0,r.createElement)("label",{htmlFor:"comment"},(0,a.__)("What’s your comment or question?","__plugin_txtd")),(0,r.createElement)("span",{className:"field-description"},(0,a.__)("Let’s start a personal and a meaningful conversation. ","__plugin_txtd"))),(0,r.createElement)("textarea",{name:"comment",id:"comment",cols:"30",rows:"1",placeholder:(0,a.__)("Join the conversation, share your knowledge or ask a question...","__plugin_txtd")})),(0,r.createElement)("div",{className:"second-column"},(0,r.createElement)("p",{className:"comment-form-background"},(0,r.createElement)("label",{htmlFor:"experience"},(0,a.__)("What is your expertise or qualification in this topic?","__plugin_txtd")),(0,r.createElement)("span",{className:"field-description"},(0,a.__)("Example: Practical philosopher, therapist and writer.","__plugin_txtd")),(0,r.createElement)("input",{id:"experience",name:"experience",type:"text",value:"",size:"30",maxLength:"245",required:"required",placeholder:"Your relevant experience or expertise..."})),(0,r.createElement)("p",{className:"comment-form-author"},(0,r.createElement)("label",{htmlFor:"author"},(0,a.__)("What is your name?","__plugin_txtd")),(0,r.createElement)("span",{className:"required"},"*"),(0,r.createElement)("input",{id:"author",name:"author",type:"text",value:"",size:"30",maxLength:"245",required:"required",placeholder:"eg. John Doe"})),(0,r.createElement)("p",{className:"comment-form-email"},(0,r.createElement)("label",{htmlFor:"email"},(0,a.__)("What is your email address?","__plugin_txtd")),(0,r.createElement)("span",{className:"field-description"},(0,a.__)("Your email address will not be published.","__plugin_txtd")),(0,r.createElement)("input",{id:"email",name:"email",type:"email",value:"",size:"30",maxLength:"100",required:"required",placeholder:"your@email.com"})),(0,r.createElement)("div",{className:"form-submit"},(0,r.createElement)("div",{className:"wp-block-button"},(0,r.createElement)("div",{className:"wp-block-button__link"},(0,a.__)("Add this comment","__plugin_txtd")))))),(0,r.createElement)("div",{className:"novablocks-conversations__comment-list comment-list"},(0,r.createElement)(s,{postId:n})))):(0,r.createElement)(i.Warning,null,(0,a.__)("Post comments block: no post found."))};e.default=l},285:function(t,e){!function(){t.exports=this.moment}()},3:function(t,e){!function(){t.exports=this.novablocks.blockEditor}()},4:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},5:function(t,e,n){(function(e){var n;n=function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,o=t.content;this.id=e,this.viewBox=n,this.content=o};function n(t,e){return t(e={exports:{}},e.exports),e.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))},"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var o=n((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var r;return n&&!0===n.clone&&t(e)?o((r=e,Array.isArray(r)?[]:{}),e,n):e}function n(n,r,i){var a=n.slice();return r.forEach((function(r,u){void 0===a[u]?a[u]=e(r,i):t(r)?a[u]=o(n[u],r,i):-1===n.indexOf(r)&&a.push(e(r,i))})),a}function o(r,i,a){var u=Array.isArray(i),c=(a||{arrayMerge:n}).arrayMerge||n;return u?Array.isArray(r)?c(r,i,a):e(i,a):function(n,r,i){var a={};return t(n)&&Object.keys(n).forEach((function(t){a[t]=e(n[t],i)})),Object.keys(r).forEach((function(u){t(r[u])&&n[u]?a[u]=o(n[u],r[u],i):a[u]=e(r[u],i)})),a}(r,i,a)}return o.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return o(t,n,e)}))},o}()})),r=n((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),i=r.svg,a=r.xlink,u={};u[i.name]=i.uri,u[a.name]=a.uri;var c=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(o(u,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n}(c(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(t)},t.exports=n()}).call(this,n(4))},6:function(t,e,n){(function(e){var n;n=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n=t((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var r;return n&&!0===n.clone&&t(e)?o((r=e,Array.isArray(r)?[]:{}),e,n):e}function n(n,r,i){var a=n.slice();return r.forEach((function(r,u){void 0===a[u]?a[u]=e(r,i):t(r)?a[u]=o(n[u],r,i):-1===n.indexOf(r)&&a.push(e(r,i))})),a}function o(r,i,a){var u=Array.isArray(i),c=(a||{arrayMerge:n}).arrayMerge||n;return u?Array.isArray(r)?c(r,i,a):e(i,a):function(n,r,i){var a={};return t(n)&&Object.keys(n).forEach((function(t){a[t]=e(n[t],i)})),Object.keys(r).forEach((function(u){t(r[u])&&n[u]?a[u]=o(n[u],r[u],i):a[u]=e(r[u],i)})),a}(r,i,a)}return o.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return o(t,n,e)}))},o}()})),o=t((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),r=o.svg,i=o.xlink,a={};a[r.name]=r.uri,a[i.name]=i.uri;var u,c=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(a,e||{}))+">"+t+"</svg>"},s=o.svg,l=o.xlink,d={attrs:(u={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},u[s.name]=s.uri,u[l.name]=l.uri,u)},m=function(t){this.config=n(d,t||{}),this.symbols=[]};m.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},m.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},m.prototype.find=function(t){return this.symbols.filter((function(e){return e.id===t}))[0]||null},m.prototype.has=function(t){return null!==this.find(t)},m.prototype.stringify=function(){var t=this.config.attrs,e=this.symbols.map((function(t){return t.stringify()})).join("");return c(e,t)},m.prototype.toString=function(){return this.stringify()},m.prototype.destroy=function(){this.symbols.forEach((function(t){return t.destroy()}))};var f=function(t){var e=t.id,n=t.viewBox,o=t.content;this.id=e,this.viewBox=n,this.content=o};f.prototype.stringify=function(){return this.content},f.prototype.toString=function(){return this.stringify()},f.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))};var p=function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},h=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return p(c(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(f),v={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},y=function(t){return Array.prototype.slice.call(t,0)},g=function(){return/firefox/i.test(navigator.userAgent)},_=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},b=function(){return/edge/i.test(navigator.userAgent)},E=function(t){return(t||window.location.href).split("#")[0]},x=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",(function(e,n,o){var r,i,a;r=t,i={oldUrl:o,newUrl:n},(a=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,i),window.dispatchEvent(a)}))}])},w=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern, mask, clipPath"),y(t.querySelectorAll("symbol")).forEach((function(t){y(t.querySelectorAll(e)).forEach((function(e){t.parentNode.insertBefore(e,t)}))})),t},N=o.xlink.uri,S=/[{}|\\\^\[\]`"<>]/g;function k(t){return t.replace(S,(function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()}))}var O,A=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],j=A.map((function(t){return"["+t+"]"})).join(","),C=function(t,e,n,o){var r=k(n),i=k(o);(function(t,e){return y(t).reduce((function(t,n){if(!n.attributes)return t;var o=y(n.attributes),r=e?o.filter(e):o;return t.concat(r)}),[])})(t.querySelectorAll(j),(function(t){var e=t.localName,n=t.value;return-1!==A.indexOf(e)&&-1!==n.indexOf("url("+r)})).forEach((function(t){return t.value=t.value.replace(new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),i)})),function(t,e,n){y(t).forEach((function(t){var o=t.getAttribute("xlink:href");if(o&&0===o.indexOf(e)){var r=o.replace(e,n);t.setAttributeNS(N,"xlink:href",r)}}))}(e,r,i)},M="mount",B="symbol_mount",P=function(t){function e(e){var o=this;void 0===e&&(e={}),t.call(this,n(v,e));var r,i=(r=r||Object.create(null),{on:function(t,e){(r[t]||(r[t]=[])).push(e)},off:function(t,e){r[t]&&r[t].splice(r[t].indexOf(e)>>>0,1)},emit:function(t,e){(r[t]||[]).map((function(t){t(e)})),(r["*"]||[]).map((function(n){n(t,e)}))}});this._emitter=i,this.node=null;var a=this.config;if(a.autoConfigure&&this._autoConfigure(e),a.syncUrlsWithBaseTag){var u=document.getElementsByTagName("base")[0].getAttribute("href");i.on(M,(function(){return o.updateUrls("#",u)}))}var c=this._handleLocationChange.bind(this);this._handleLocationChange=c,a.listenLocationChangeEvent&&window.addEventListener(a.locationChangeEvent,c),a.locationChangeAngularEmitter&&x(a.locationChangeEvent),i.on(M,(function(t){a.moveGradientsOutsideSymbol&&w(t)})),i.on(B,(function(t){var e;a.moveGradientsOutsideSymbol&&w(t.parentNode),(_()||b())&&(e=[],y(t.querySelectorAll("style")).forEach((function(t){t.textContent+="",e.push(t)})))}))}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var o={isMounted:{}};return o.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(t){var e=this.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter=void 0!==window.angular),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=g())},e.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,o=e.newUrl;this.updateUrls(n,o)},e.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(B,e.node)),n},e.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var o="string"==typeof t?document.querySelector(t):t;return n.node=o,this.symbols.forEach((function(t){t.mount(n.node),e._emitter.emit(B,t.node)})),y(o.querySelectorAll("symbol")).forEach((function(t){var e=h.createFromExistingNode(t);e.node=t,n.add(e)})),this._emitter.emit(M,o),o},e.prototype.destroy=function(){var t=this.config,e=this.symbols,n=this._emitter;e.forEach((function(t){return t.destroy()})),n.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(t,e){if(void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1),this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,o=this.render();return this.node=o,e&&n.childNodes[0]?n.insertBefore(o,n.childNodes[0]):n.appendChild(o),this._emitter.emit(M,o),o},e.prototype.render=function(){return p(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return C(this.node,n,E(t)+"#",E(e)+"#"),!0},Object.defineProperties(e.prototype,o),e}(m),T=t((function(t){var e,n,o,r,i;t.exports=(n=[],o=document,r=o.documentElement.doScroll,(i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState))||o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),function(t){i?setTimeout(t,0):n.push(t)})}));window.__SVG_SPRITE__?O=window.__SVG_SPRITE__:(O=new P({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=O);var q=function(){var t=document.getElementById("__SVG_SPRITE_NODE__");t?O.attach(t):O.mount(document.body,!0)};return document.body?q():T(q),O},t.exports=n()}).call(this,n(4))},7:function(t,e){!function(){t.exports=this.wp.blocks}()},8:function(t,e){!function(){t.exports=this.wp.blockEditor}()}});