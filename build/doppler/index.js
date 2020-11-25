this.novablocks=this.novablocks||{},this.novablocks.doppler=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=75)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},15:function(t,e,n){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return o}))},17:function(t,e,n){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return o}))},18:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},19:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},2:function(t,e){!function(){t.exports=this.wp.components}()},24:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}n.d(e,"a",(function(){return r}))},28:function(t){t.exports=JSON.parse('{"focalPoint":{"type":"object","default":{"x":0.5,"y":0.5}},"finalFocalPoint":{"type":"object","default":{"x":0.5,"y":0.5}},"initialBackgroundScale":{"type":"number","default":1},"finalBackgroundScale":{"type":"number","default":1},"scrollIndicatorBlock":{"type":"boolean","default":false},"scrollingEffect":{"type":"string","default":"parallax"},"motionPreset":{"type":"string","default":"standard-dynamic"},"followThroughStart":{"type":"boolean","default":true},"followThroughEnd":{"type":"boolean","default":true}}')},3:function(t,e){!function(){t.exports=this.novablocks.utils}()},35:function(t,e){!function(){t.exports=this.novablocks.easings}()},4:function(t,e){!function(){t.exports=this.novablocks.blockEditor}()},5:function(t,e){!function(){t.exports=this.wp.hooks}()},6:function(t,e){!function(){t.exports=this.wp.compose}()},75:function(t,e,n){"use strict";n.r(e);var o={};function r(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}n.r(o),n.d(o,"getIntermediateFocalPoint",(function(){return i})),n.d(o,"getStyles",(function(){return a})),n.d(o,"getStylesFromProps",(function(){return l})),n.d(o,"getProps",(function(){return s})),n.d(o,"getState",(function(){return u}));var i=function(t,e,n){return t||e?t?e?{x:parseFloat(t.x)+(parseFloat(e.x)-parseFloat(t.x))*n,y:parseFloat(t.y)+(parseFloat(e.y)-parseFloat(t.y))*n}:t:e:{x:.5,y:.5}},a=function(t){var e=s(t);return l(e)},l=function(t){var e=t.parallaxAmount,n=t.width,o=t.height,r=t.moveX,i=t.moveY,a=t.offsetX,l=t.offsetY,c=t.scale,s=t.focalPoint;return{width:n||"",height:o||"",minHeight:0,maxWidth:"none",transform:"translate(".concat(r,",").concat(i*e,"px) translateX(").concat(a,") translateY(").concat(l,"px) scale(").concat(c,")"),objectPosition:100*s.x+"% "+100*s.y+"%",transformOrigin:100*s.x+"% 50%"}};function c(t,e,n){return t+(e-t)*n}var s=function(t,e){var n=t.distance,o=t.progress,a=t.smoothStart,l=t.smoothEnd,s=t.scrollingEffect,u=(t.focalPoint,t.finalFocalPoint,t.initialBackgroundScale),f=(t.finalBackgroundScale,t.container,t.containerBox),p=t.containerWidth,d=t.containerHeight,b=(t.scrollContainer,t.scrollContainerBox),h=t.scrollContainerHeight,m=function(t){var e=t.scrollingEffect,n=t.focalPoint,o=t.finalFocalPoint,r=t.progress;return n||(n={x:.5,y:.5}),"doppler"!==e?n:i(n,o,r)}(t);if("static"===s)return{width:p,height:d,scale:u||1,moveX:0,moveY:0,offsetX:0,offsetY:0,parallaxAmount:0,focalPoint:m};var g=r()?0:"parallax"===s?.75:1,v=function(t){var e=t.scrollingEffect,n=t.initialBackgroundScale,o=t.finalBackgroundScale,i=t.progress;n=n||1,"parallax"===e&&(o=n);var a=Math.max(n,o);return n/=a,o/=a,r()?{maxScale:1,newScale:1}:{maxScale:a,newScale:c(n,o,i)}}(t),y=v.maxScale,O=v.newScale,S=function(t,e){var n=t.scrollContainerHeight,o=t.containerHeight;return o+(n-o)*e}(t,g),j=b.top-f.top;a||(e&&f.top<0&&(j=b.top),!e&&0>b.top-f.top&&(j=0)),l||b.top-f.top>d-h&&(j=e?b.top-f.top-d+h:d-h);var x=S*y*(O-1)*.5;return x+=S*(1-y*O)*m.y,{distance:n,parallaxAmount:g,progress:o,width:p*y,height:S*y,moveX:"".concat(e?f.left-b.left:0,"px"),moveY:j,offsetX:(1/y-1)*m.x*100+"%",offsetY:x,scale:O,focalPoint:m}},u=function(t,e){if(!t||!e)return{};var n=e.followThroughStart,o=e.followThroughEnd,i=e.scrollingEffect,a=e.scrollContainerHeight,l=e.scrollContainerBox,c=t.offsetWidth,s=t.offsetHeight,u=t.getBoundingClientRect(),f=n||"parallax"===i,p=o||"parallax"===i,d=l.top-u.top,b=s-a;f&&(d+=a,b+=a),p&&(b+=a);var h=b<=0?.5:d/b;return f||(h=Math.max(0,h)),p||(h=Math.min(1,h)),r()&&(h=.5),{progress:h,distance:b,smoothStart:f,smoothEnd:p,containerBox:u,containerHeight:s,containerWidth:c,scrollContainerHeight:a,scrollContainerBox:l}},f=n(4),p=n(5),d=["novablocks/hero","novablocks/google-map","novablocks/slideshow"];Object(p.addFilter)("blocks.registerBlockType","novablocks/add-doppler-attributes",(function(t){return d.includes(t.name)?(void 0!==t.attributes&&Object.assign(t.attributes,f.scrollingAttributes),t):t}));var b=n(28),h=n(15),m=n(18),g=n(19);function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}var S=n(24);function j(t,e){return!e||"object"!==Object(S.a)(e)&&"function"!=typeof e?v(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=n(0),w=n(3),P=n(35),E=n(17),_=n(1),C=n(2),F=function(t){return Object(k.createElement)(k.Fragment,null,Object(k.createElement)(B,t,Object(k.createElement)(T,t),Object(k.createElement)(A,t),Object(k.createElement)(R,t)))},B=function(t){var e=t.setAttributes,n=t.attributes,o=n.scrollingEffect,r=n.motionPreset,i=t.settings,a=t.name,l=i.motionPresetOptions,c=i.theme_support.doppler,s=Object(E.a)(i.scrollingEffectOptions);return c&&c.includes(a)&&s.push({label:Object(_.__)("Doppler by Pixelgrade ®"),value:"doppler"}),Object(k.createElement)(f.ControlsSection,{label:Object(_.__)("Scrolling Effect")},Object(k.createElement)(f.ControlsTab,{label:Object(_.__)("Customize")},Object(k.createElement)(C.RadioControl,{key:"novablocks-scrolling-effect",selected:o,className:"novablocks-scrolling-effect",onChange:function(t){var n={scrollingEffect:t};if("doppler"===t&&"custom"!==r){var o=l.find((function(t){return r===t.value}));(n=Object.assign(o.preset,n)).minHeightFallback=75}e(n)},options:s}),t.children))},T=function(t){var e=t.attributes,n=e.motionPreset,o=e.scrollingEffect,r=t.setAttributes,i=t.settings.motionPresetOptions,a=t.isScrolling,l=t.previewScrolling;return"doppler"===o&&Object(k.createElement)(C.PanelBody,{title:"Doppler Scrolling Settings"},Object(k.createElement)(C.RadioControl,{label:"Motion Presets",selected:n,onChange:function(t){var e={motionPreset:t},n=i.find((function(e){return t===e.value}));n&&n.preset&&(e=Object.assign(n.preset,e)),r(e)},options:i}),Object(k.createElement)("div",null,Object(k.createElement)(C.Button,{isLarge:!0,isPrimary:!0,disabled:!!a,onClick:l},"Preview Scrolling")))},H=function(t){var e,n,o,r,i=null==t?void 0:t.type,a=!1;"image"===i&&(a={url:(null==t||null===(e=t.sizes)||void 0===e||null===(n=e.novablocks_large)||void 0===n?void 0:n.url)||(null==t||null===(o=t.sizes)||void 0===o||null===(r=o.novablocks_huge)||void 0===r?void 0:r.url)||(null==t?void 0:t.url),width:218,height:170});return"video"===i&&(a={url:"//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png",width:218,height:170}),a},A=function(t){var e=t.attributes,n=t.setAttributes,o=e.media,r=(e.motionPreset,e.focalPoint),i=e.finalFocalPoint,a=e.initialBackgroundScale,l=e.followThroughStart,c=e.scrollingEffect,s=H(o),u="doppler"===c;if(!s)return!1;var f=Object(_.__)("Static Scrolling Settings","__plugin_txtd"),p=Object(_.__)("Parallax Scrolling Settings","__plugin_txtd"),d=Object(_.__)("Start Frame","__plugin_txtd"),b=f;"parallax"===c&&(b=p),u&&(b=d);var h=["novablocks-focal-point-picker","novablocks-focal-point-picker--".concat(c),"novablocks-focal-point-picker--start",Object(w.getSnapClassname)(r)].join(" ");return Object(k.createElement)(C.PanelBody,{title:b,className:h},Object(k.createElement)(C.FocalPointPicker,{label:"Focal Point",url:s.url,dimensions:{width:s.width,height:s.height},value:r,onChange:function(t){n({motionPreset:"custom",focalPoint:Object(w.maybeSnapFocalPoint)(t),finalFocalPoint:Object(w.maybeSnapFocalPoint)({x:t.x,y:i.y})})}}),Object(k.createElement)(C.RangeControl,{label:"Zoom",value:a,onChange:function(t){n({motionPreset:"custom",initialBackgroundScale:t})},min:1,max:2,step:.01}),"doppler"===c&&Object(k.createElement)(C.ToggleControl,{label:Object(_.__)("Smooth start transition","__plugin_txtd"),checked:l,onChange:function(){return n({followThroughStart:!l})}}))},R=function(t){var e=t.attributes,n=t.setAttributes,o=e.media,r=e.focalPoint,i=e.finalFocalPoint,a=e.finalBackgroundScale,l=e.followThroughEnd,c=e.scrollingEffect,s=H(o);if(!s||"doppler"!==c)return!1;var u=["novablocks-focal-point-picker","novablocks-focal-point-picker--".concat(c),"novablocks-focal-point-picker--end",Object(w.getSnapClassname)(r)].join(" ");return Object(k.createElement)(C.PanelBody,{title:Object(_.__)("End Frame","__plugin_txtd"),className:u},Object(k.createElement)(C.FocalPointPicker,{label:"Focal Point",url:s.url,dimensions:{width:s.width,height:s.height},value:i,onChange:function(t){n({motionPreset:"custom",focalPoint:Object(w.maybeSnapFocalPoint)({x:t.x,y:r.y}),finalFocalPoint:Object(w.maybeSnapFocalPoint)(t)})},disabled:!0}),Object(k.createElement)(C.RangeControl,{label:"Zoom",value:a,onChange:function(t){n({motionPreset:"custom",finalBackgroundScale:t})},min:1,max:2,step:.01}),Object(k.createElement)(C.ToggleControl,{label:Object(_.__)("Smooth end transition","__plugin_txtd"),checked:l,onChange:function(){return n({motionPreset:"custom",followThroughEnd:!l})}}))},M=n(8),D=n(6);function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=x(t);if(e){var r=x(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return j(this,n)}}var I=Object(k.createContext)(),X=Object(D.compose)([function(t){return function(e){O(o,e);var n=z(o);function o(){var t;return Object(m.a)(this,o),(t=n.apply(this,arguments)).state={scrollContainerWidth:0,scrollContainerHeight:0,progress:.5},t.updateHandler=t.updateState.bind(v(t)),t.scrollContainer=t.getScrollContainer(),t}return Object(g.a)(o,[{key:"getScrollContainer",value:function(){return document.querySelector(".edit-post-layout__content")||document.querySelector(".edit-post-editor-regions__content")||document.querySelector(".block-editor-editor-skeleton__content")||document.querySelector(".interface-interface-skeleton__content")}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateHandler),this.createBlockObservers(),this.unsubscribeUpdate=wp.data.subscribe(this.updateHandler),this.scrollContainer&&this.scrollContainer.addEventListener("scroll",this.updateHandler),this.updateState()}},{key:"createBlockObservers",value:function(){var t=this;this.observers=[],Object(w.findParents)(this.container,".wp-block").map((function(e){if(window.MutationObserver){var n=new MutationObserver((function(e){e.forEach((function(e){"style"===e.attributeName&&e.oldValue&&e.oldValue.includes("transform: translate3d")&&t.updateState()}))}));n.observe(e,{attributes:!0,attributeOldValue:!0,childList:!1,subtree:!1}),t.observers.push(n)}if(window.ResizeObserver){var o=new ResizeObserver((function(){t.updateState()}));o.observe(e),t.observers.push(o)}}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateHandler),this.observers.forEach((function(t){return t.disconnect()})),this.unsubscribeUpdate(),this.scrollContainer&&this.scrollContainer.removeEventListener("scroll",this.updateHandler)}},{key:"updateState",value:function(){var t=this.container,e=this.scrollContainer.offsetHeight,n=this.scrollContainer.getBoundingClientRect(),o=Object.assign({},this.props.attributes,{scrollContainerBox:n,scrollContainerHeight:e});this.setState(u(t,o))}},{key:"getElementStyle",value:function(){var t=this.props.attributes;if(!this.scrollContainer||!this.container)return{};var e=u(this.container,Object.assign({},this.state,t)),n=Object.assign({},e,t);return a(n)}},{key:"render",value:function(){var e=this;return Object(k.createElement)(k.Fragment,null,Object(k.createElement)("div",{ref:function(t){return e.container=t}},Object(k.createElement)(I.Provider,{value:{style:this.getElementStyle(),state:this.state,container:this.container,scrollContainer:this.scrollContainer}},Object(k.createElement)(t,this.props))))}}]),o}(k.Component)},function(t){return function(e){O(o,e);var n=z(o);function o(){return Object(m.a)(this,o),n.apply(this,arguments)}return Object(g.a)(o,[{key:"render",value:function(){var e=this;return Object(k.createElement)(I.Consumer,null,(function(n){return Object(k.createElement)(t,Object(h.a)({parallax:n},e.props))}))}}]),o}(k.Component)},function(t){return function(e){O(o,e);var n=z(o);function o(){var t;return Object(m.a)(this,o),(t=n.apply(this,arguments)).state={isScrolling:!1},t.previewScrolling=t.previewScrolling.bind(v(t)),t}return Object(g.a)(o,[{key:"scrollFromTo",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1e3,a=this.props.parallax.scrollContainer,l=e-t,c=1e3*Math.abs(l)/i,s=Date.now();function u(){var e=Date.now(),n=t+l*o((e-s)/c);a.scrollTop=n}a.style.pointerEvents="none";var f=setInterval(u,0);this.setState({isScrolling:!0}),setTimeout((function(){clearInterval(f),n.setState({isScrolling:!1}),a.scrollTop=t+l,a.style.removeProperty("pointer-events"),"function"==typeof r&&r()}),c)}},{key:"previewScrolling",value:function(){var t=this,e=this.props.parallax,n=e.scrollContainer,o=e.container,r=e.state,i=r.containerBox,a=r.containerHeight,l=r.scrollContainerHeight,c=r.scrollContainerBox;if(o&&n){var s=n.scrollTop,u=s+i.top-c.top-l,f=a+l;u<0&&(f+=u,u=0);var p=n.scrollHeight-n.offsetHeight-(u+f);p<0&&(f+=p);var d=u+f;this.scrollFromTo(s,u,P.easeOutQuart,(function(){t.scrollFromTo(u,d,P.easeInOutCubic,(function(){}),1e3)}),3e3)}}},{key:"render",value:function(){return Object(k.createElement)(k.Fragment,null,Object(k.createElement)(M.InspectorControls,null,Object(k.createElement)(F,Object(h.a)({},this.props,{isScrolling:this.state.isScrolling,previewScrolling:this.previewScrolling}))),Object(k.createElement)(t,this.props))}}]),o}(k.Component)}]);n.d(e,"scrollingAttributes",(function(){return b})),n.d(e,"withDoppler",(function(){return X}));e.default={utils:o}},8:function(t,e){!function(){t.exports=this.wp.blockEditor}()}});