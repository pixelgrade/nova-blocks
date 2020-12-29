!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=333)}({0:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},1:function(t,e){!function(){t.exports=this.wp.element}()},10:function(t,e){!function(){t.exports=this.wp.components}()},12:function(t,e){!function(){t.exports=this.novablocks.utils}()},13:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},14:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},15:function(t,e){!function(){t.exports=this.wp.data}()},16:function(t,e,n){var o=n(25);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},17:function(t,e,n){var o=n(21),r=n(19);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},18:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},19:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},2:function(t,e){!function(){t.exports=this.wp.i18n}()},20:function(t,e){!function(){t.exports=this.wp.compose}()},21:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},22:function(t,e){!function(){t.exports=this.novablocks.doppler}()},23:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},24:function(t,e){function n(t,e,n,o,r,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(o,r)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,i){var a=t.apply(e,o);function s(t){n(a,r,i,s,u,"next",t)}function u(t){n(a,r,i,s,u,"throw",t)}s(void 0)}))}}},25:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},3:function(t,e){!function(){t.exports=this.novablocks.blockEditor}()},31:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n.apply(this,arguments)}t.exports=n},333:function(t,e,n){"use strict";var o=n(0),r=o(n(23)),i=o(n(24)),a=o(n(334)),s=o(n(335)),u=o(n(94)),l=o(n(340)),c=n(15),d=n(12),f=n(3),p=n(22),h=o(n(95)),v=n(2),y=n(7),g=Object.assign({},h.default,f.alignmentAttributes,f.colorAttributes,f.layoutAttributes,p.scrollingAttributes);function m(){return(m=(0,i.default)(r.default.mark((function t(){var e,n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.getPlaceholderImages)();case 2:return e=t.sent,n=(0,d.getRandomBetween)(2,4),(o=(0,d.getRandomArrayFromArray)(e,n)).forEach((function(t){"function"==typeof(null==t?void 0:t.download)&&t.download()})),t.abrupt("return",{galleryImages:o});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,f.generateDefaults)("novablocks/slideshow",(function(){return m.apply(this,arguments)})),(0,y.registerBlockType)("novablocks/slideshow",{title:(0,v.__)("Slideshow Me the Way","__plugin_txtd"),description:(0,v.__)("Display more than one piece of content in a single, coveted space.","__plugin_txtd"),category:"nova-blocks",icon:(0,f.getSvg)(a.default),keywords:[(0,v.__)("slider","__plugin_txtd"),(0,v.__)("carousel","__plugin_txtd"),(0,v.__)("images","__plugin_txtd"),(0,v.__)("cover","__plugin_txtd")],attributes:g,edit:s.default,save:u.default,deprecated:l.default,getEditWrapperProps:function(){return(0,c.select)("core/block-editor").getSettings().alignWide?{"data-align":"full"}:{}}})},334:function(t,e,n){"use strict";n.r(e);var o=n(5),r=n.n(o),i=n(6),a=n.n(i),s=new r.a({id:"slideshow-block",use:"slideshow-block-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="slideshow-block"><mask id="slideshow-block_a" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style="mask-type:alpha"><rect width="24" height="24" rx="12" fill="#6565F2" /></mask><g mask="url(#slideshow-block_a)"><path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" fill="#6565F2" /><path d="M17.398 8.993a1 1 0 010 1.543l-2.43 2.005a1 1 0 01-1.637-.772V7.76a1 1 0 011.636-.771l2.431 2.005zM6.602 8.993a1 1 0 000 1.543l2.43 2.005a1 1 0 001.637-.772V7.76a1 1 0 00-1.636-.771L6.602 8.993z" fill="#fff" /><path d="M7 18.275c0 .528.428.956.956.956h.261c.56 0 1.015-.454 1.015-1.014v-.359A.858.858 0 008.373 17h-.098C7.571 17 7 17.57 7 18.275zM10.72 18.275c0 .528.427.956.956.956h.26c.56 0 1.015-.454 1.015-1.014v-.359a.858.858 0 00-.859-.858h-.098c-.704 0-1.275.57-1.275 1.275zM14.438 18.275c0 .528.429.956.957.956h.26c.56 0 1.015-.454 1.015-1.014v-.359a.858.858 0 00-.858-.858h-.098c-.705 0-1.276.57-1.276 1.275z" fill="#FFE42E" /></g></symbol>'});a.a.add(s);e.default=s},335:function(t,e,n){"use strict";var o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(1),i=o(n(9)),a=o(n(31)),s=o(n(13)),u=o(n(14)),l=o(n(16)),c=o(n(17)),d=o(n(18)),f=o(n(336)),p=o(n(338)),h=o(n(339)),v=n(22),y=n(3),g=n(20);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,d.default)(t);if(e){var r=(0,d.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}var _=function(t){(0,l.default)(n,t);var e=w(n);function n(){var t;return(0,s.default)(this,n),(t=e.apply(this,arguments)).state={selectedIndex:0},t}return(0,u.default)(n,[{key:"onPrevArrowClick",value:function(){var t=this.props.attributes.galleryImages,e=(this.state.selectedIndex+t.length-1)%t.length;this.setState({selectedIndex:e})}},{key:"onNextArrowClick",value:function(){var t=this.props.attributes.galleryImages,e=(this.state.selectedIndex+1)%t.length;this.setState({selectedIndex:e})}},{key:"setIndex",value:function(t){this.setState({selectedIndex:t})}},{key:"onSelectImages",value:function(t){var e=this.props.setAttributes;(0,y.normalizeImages)(t).then((function(t){e({galleryImages:t})}))}},{key:"render",value:function(){var t=this.props.attributes.galleryImages,e=this.onSelectImages.bind(this),n=Object.assign({},this.props,{onSelectImages:e}),o=this.setIndex.bind(this),i=this.state.selectedIndex;return i>=t.length&&(i=t.length-1),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(f.default,(0,a.default)({},n,{previewImage:t[i],onPrevArrowClick:this.onPrevArrowClick.bind(this),onNextArrowClick:this.onNextArrowClick.bind(this)})),(0,r.createElement)(p.default,b(b({},n),{},{setIndex:o,selectedIndex:i})),(0,r.createElement)(h.default,n))}}]),n}(r.Component),x=(0,g.createHigherOrderComponent)((0,g.compose)([y.withSettings,v.withDoppler]))(_);e.default=x},336:function(t,e,n){"use strict";var o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(1),i=o(n(13)),a=o(n(14)),s=o(n(16)),u=o(n(17)),l=o(n(18)),c=o(n(337)),d=n(3);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,l.default)(t);if(e){var r=(0,l.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,u.default)(this,n)}}var p=function(t){(0,s.default)(n,t);var e=f(n);function n(){var t;return(0,i.default)(this,n),(t=e.apply(this,arguments)).state={windowWidth:window.innerWidth,windowHeight:window.innerHeight},t}return(0,a.default)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions.bind(this)),this.updateDimensions()}},{key:"updateDimensions",value:function(){this.container&&this.setState({dimensions:{width:this.container.offsetWidth,height:this.container.offsetHeight}})}},{key:"renderContent",value:function(){var t=this,e=this.props,n=e.attributes,o=n.contentPadding,i=n.contentPaddingCustom,a=n.contentWidth,s=n.contentWidthCustom,u=n.minHeight,l=n.verticalAlignment,f=n.horizontalAlignment,p=n.contentColor,h=n.overlayFilterStyle,v=n.galleryImages,y=e.previewImage,g=[e.className,"novablocks-slideshow is-ready","novablocks-u-valign-".concat(l),"novablocks-u-halign-".concat(f),"novablocks-u-spacing-".concat(o),"novablocks-u-content-width-".concat(a),"novablocks-u-background","novablocks-u-background-".concat(h)],m={slideshow:{"--novablocks-slideshow-text-color":p},content:{},foreground:{}};"custom"===o&&(m.foreground.paddingTop="".concat(i,"%"),m.foreground.paddingBottom="".concat(i,"%")),"custom"===a&&(m.content.maxWidth="".concat(s,"%"));var b=0,w=0;v.forEach((function(e){var n,o=null==e||null===(n=e.sizes)||void 0===n?void 0:n.full,r=o?o.width/o.height:0;b=r>b?r:b,w=t.state.dimensions.width/b}));var _=this.props.parallax.state.scrollContainerHeight*u/100;return m.slideshow.minHeight=Math.max(_,w,b)+"px",(0,r.createElement)(r.Fragment,null,!!v.length&&(0,r.createElement)("div",{className:g.join(" "),style:m.slideshow},(0,r.createElement)("div",{className:"novablocks-slideshow__slider"},(0,r.createElement)("div",{className:"novablocks-slideshow__slide"},y&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(c.default,this.props),(0,r.createElement)("div",{className:"novablocks-slideshow__foreground novablocks-foreground novablocks-u-content-padding novablocks-u-content-align",style:m.foreground},(0,r.createElement)("div",{className:"novablocks-slideshow__inner-container novablocks-u-content-width",style:m.content,dangerouslySetInnerHTML:{__html:("string"==typeof y.title&&"<h2>".concat(y.title,"</h2>")||"")+("string"==typeof y.caption&&y.caption||"")}}))))),v.length>1&&(0,r.createElement)("div",{className:"novablocks-slideshow__controls"},(0,r.createElement)("div",{className:"novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled",onClick:this.props.onPrevArrowClick}),(0,r.createElement)("div",{className:"novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled",onClick:this.props.onNextArrowClick}))),!v.length&&(0,r.createElement)(d.GalleryPlaceholder,this.props))}},{key:"render",value:function(){var t=this,e=this.state.dimensions;return(0,r.createElement)("div",{ref:function(e){return t.container=e}},e&&this.renderContent())}}]),n}(r.Component);e.default=p},337:function(t,e,n){"use strict";var o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(1),i=o(n(9));function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=function(t){var e,n,o,i,a,u,l,c,d=t.attributes,f=d.overlayFilterStyle,p=d.overlayFilterStrength,h=t.previewImage,v=h.focalPoint||{x:.5,y:.5},y=s(s({},t.parallax.style),{},{opacity:1,objectPosition:100*v.x+"% "+100*v.y+"%"});"none"!==f&&(y.opacity=1-p/100);var g=(null==h||null===(e=h.sizes)||void 0===e||null===(n=e.novablocks_large)||void 0===n?void 0:n.url)||(null==h||null===(o=h.sizes)||void 0===o||null===(i=o.novablocks_huge)||void 0===i?void 0:i.url)||(null==h||null===(a=h.sizes)||void 0===a||null===(u=a.large)||void 0===u?void 0:u.url)||(null==h||null===(l=h.sizes)||void 0===l||null===(c=l.full)||void 0===c?void 0:c.url)||(null==h?void 0:h.url),m=null==h?void 0:h.url;return(0,r.createElement)("div",{className:"novablocks-mask"},(0,r.createElement)("div",{className:"novablocks-slideshow__background"},"video"!==h.type&&(0,r.createElement)("img",{className:"novablocks-slideshow__media",src:g,alt:"",style:y}),"video"===h.type&&(0,r.createElement)("video",{className:"novablocks-slideshow__media",src:m,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,style:y})))};e.default=u},338:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(1),r=n(12),i=n(3),a=n(2),s=n(10),u=function(t){var e,n,u,l,c,d,f,p=t.attributes,h=p.galleryImages,v=p.minHeight,y=p.slideshowType,g=t.selectedIndex,m=t.setIndex,b=t.setAttributes,w=t.settings.slideshow.minHeightOptions,_=h[g],x=["novablocks-focal-point-picker"];if(_){var O=_.focalPoint||{x:.5,y:.5};x.push((0,r.getSnapClassname)(O))}(x=x.join(" "),"video"===(null==_?void 0:_.type))?(e="//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png",218):(e=(null==_||null===(n=_.sizes)||void 0===n||null===(u=n.novablocks_tiny)||void 0===u?void 0:u.url)||(null==_||null===(l=_.sizes)||void 0===l||null===(c=l.novablocks_large)||void 0===c?void 0:c.url)||(null==_||null===(d=_.sizes)||void 0===d||null===(f=d.novablocks_huge)||void 0===f?void 0:f.url),null==_||_.width,null==_||_.height);return(0,o.createElement)(o.Fragment,null,!!h.length&&(0,o.createElement)(i.ControlsSection,{label:(0,a.__)("Slides")},(0,o.createElement)(i.ControlsTab,{label:(0,a.__)("General")},(0,o.createElement)(i.GalleryPreview,{key:"slideshow-gallery-preview",galleryImages:h,onSelectImage:m,selected:g}),_&&(0,o.createElement)(s.FocalPointPicker,{key:"slideshow-focal-point-picker",className:x,url:e,dimensions:{width:_.width,height:_.height},value:_.focalPoint||{x:.5,y:.5},onChange:function(t){var e=h;e[g].focalPoint=(0,r.maybeSnapFocalPoint)(t),b({galleryImages:e})}}))),"gallery"===y&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.LayoutControls,t),(0,o.createElement)(i.ControlsSection,{label:(0,a.__)("Layout")},(0,o.createElement)(i.ControlsTab,{label:(0,a.__)("Settings")},(0,o.createElement)(s.RadioControl,{key:"slideshow-minimum-height-controls",label:(0,a.__)("Minimum Height","__plugin_txtd"),selected:v,onChange:function(t){b({minHeight:parseInt(t,10)})},options:w})))))};e.default=u},339:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(1),r=n(3),i=n(2),a=n(10),s=n(8),u=["image","video"],l=function(t){var e=t.attributes.galleryImages,n=t.onSelectImages,l=!!e.length;return(0,o.createElement)(s.BlockControls,null,(0,o.createElement)(r.AlignmentToolbar,t),(0,o.createElement)(r.ColorToolbar,t),(0,o.createElement)(a.Toolbar,null,(0,o.createElement)(s.MediaUpload,{accept:"image/*",addToGallery:l,allowedTypes:u,gallery:!0,multiple:!0,onSelect:n,render:function(t){var e=t.open;return(0,o.createElement)(a.Button,{className:"components-icon-button components-toolbar__control",label:(0,i.__)("Change Media","__plugin_txtd"),icon:(0,r.getIconSvg)("swap"),onClick:e})},value:e.map((function(t){return t.id}))})))};e.default=l},340:function(t,e,n){"use strict";var o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(9)),i=o(n(94)),a=n(3),s=n(22),u=o(n(95));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,r.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=Object.assign({},u.default,a.alignmentAttributes,a.colorAttributes,a.layoutAttributes,s.scrollingAttributes),f=[];f.push({attributes:d,isEligible:function(t,e){return void 0===t.defaultsGenerated},migrate:function(t,e){return c(c({},t),{},{defaultsGenerated:!0})},save:i.default});var p=f;e.default=p},4:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},5:function(t,e,n){(function(e){var n;n=function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,o=t.content;this.id=e,this.viewBox=n,this.content=o};function n(t,e){return t(e={exports:{}},e.exports),e.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))},"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var o=n((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var r;return n&&!0===n.clone&&t(e)?o((r=e,Array.isArray(r)?[]:{}),e,n):e}function n(n,r,i){var a=n.slice();return r.forEach((function(r,s){void 0===a[s]?a[s]=e(r,i):t(r)?a[s]=o(n[s],r,i):-1===n.indexOf(r)&&a.push(e(r,i))})),a}function o(r,i,a){var s=Array.isArray(i),u=(a||{arrayMerge:n}).arrayMerge||n;return s?Array.isArray(r)?u(r,i,a):e(i,a):function(n,r,i){var a={};return t(n)&&Object.keys(n).forEach((function(t){a[t]=e(n[t],i)})),Object.keys(r).forEach((function(s){t(r[s])&&n[s]?a[s]=o(n[s],r[s],i):a[s]=e(r[s],i)})),a}(r,i,a)}return o.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return o(t,n,e)}))},o}()})),r=n((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),i=r.svg,a=r.xlink,s={};s[i.name]=i.uri,s[a.name]=a.uri;var u=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(o(s,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n}(u(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(t)},t.exports=n()}).call(this,n(4))},6:function(t,e,n){(function(e){var n;n=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n=t((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var r;return n&&!0===n.clone&&t(e)?o((r=e,Array.isArray(r)?[]:{}),e,n):e}function n(n,r,i){var a=n.slice();return r.forEach((function(r,s){void 0===a[s]?a[s]=e(r,i):t(r)?a[s]=o(n[s],r,i):-1===n.indexOf(r)&&a.push(e(r,i))})),a}function o(r,i,a){var s=Array.isArray(i),u=(a||{arrayMerge:n}).arrayMerge||n;return s?Array.isArray(r)?u(r,i,a):e(i,a):function(n,r,i){var a={};return t(n)&&Object.keys(n).forEach((function(t){a[t]=e(n[t],i)})),Object.keys(r).forEach((function(s){t(r[s])&&n[s]?a[s]=o(n[s],r[s],i):a[s]=e(r[s],i)})),a}(r,i,a)}return o.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return o(t,n,e)}))},o}()})),o=t((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),r=o.svg,i=o.xlink,a={};a[r.name]=r.uri,a[i.name]=i.uri;var s,u=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(a,e||{}))+">"+t+"</svg>"},l=o.svg,c=o.xlink,d={attrs:(s={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},s[l.name]=l.uri,s[c.name]=c.uri,s)},f=function(t){this.config=n(d,t||{}),this.symbols=[]};f.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},f.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},f.prototype.find=function(t){return this.symbols.filter((function(e){return e.id===t}))[0]||null},f.prototype.has=function(t){return null!==this.find(t)},f.prototype.stringify=function(){var t=this.config.attrs,e=this.symbols.map((function(t){return t.stringify()})).join("");return u(e,t)},f.prototype.toString=function(){return this.stringify()},f.prototype.destroy=function(){this.symbols.forEach((function(t){return t.destroy()}))};var p=function(t){var e=t.id,n=t.viewBox,o=t.content;this.id=e,this.viewBox=n,this.content=o};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))};var h=function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},v=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return h(u(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(p),y={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},g=function(t){return Array.prototype.slice.call(t,0)},m=function(){return/firefox/i.test(navigator.userAgent)},b=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},w=function(){return/edge/i.test(navigator.userAgent)},_=function(t){return(t||window.location.href).split("#")[0]},x=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",(function(e,n,o){var r,i,a;r=t,i={oldUrl:o,newUrl:n},(a=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,i),window.dispatchEvent(a)}))}])},O=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern, mask, clipPath"),g(t.querySelectorAll("symbol")).forEach((function(t){g(t.querySelectorAll(e)).forEach((function(e){t.parentNode.insertBefore(e,t)}))})),t},k=o.xlink.uri,E=/[{}|\\\^\[\]`"<>]/g;function j(t){return t.replace(E,(function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()}))}var S,P=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],C=P.map((function(t){return"["+t+"]"})).join(","),A=function(t,e,n,o){var r=j(n),i=j(o);(function(t,e){return g(t).reduce((function(t,n){if(!n.attributes)return t;var o=g(n.attributes),r=e?o.filter(e):o;return t.concat(r)}),[])})(t.querySelectorAll(C),(function(t){var e=t.localName,n=t.value;return-1!==P.indexOf(e)&&-1!==n.indexOf("url("+r)})).forEach((function(t){return t.value=t.value.replace(new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),i)})),function(t,e,n){g(t).forEach((function(t){var o=t.getAttribute("xlink:href");if(o&&0===o.indexOf(e)){var r=o.replace(e,n);t.setAttributeNS(k,"xlink:href",r)}}))}(e,r,i)},M="mount",I="symbol_mount",N=function(t){function e(e){var o=this;void 0===e&&(e={}),t.call(this,n(y,e));var r,i=(r=r||Object.create(null),{on:function(t,e){(r[t]||(r[t]=[])).push(e)},off:function(t,e){r[t]&&r[t].splice(r[t].indexOf(e)>>>0,1)},emit:function(t,e){(r[t]||[]).map((function(t){t(e)})),(r["*"]||[]).map((function(n){n(t,e)}))}});this._emitter=i,this.node=null;var a=this.config;if(a.autoConfigure&&this._autoConfigure(e),a.syncUrlsWithBaseTag){var s=document.getElementsByTagName("base")[0].getAttribute("href");i.on(M,(function(){return o.updateUrls("#",s)}))}var u=this._handleLocationChange.bind(this);this._handleLocationChange=u,a.listenLocationChangeEvent&&window.addEventListener(a.locationChangeEvent,u),a.locationChangeAngularEmitter&&x(a.locationChangeEvent),i.on(M,(function(t){a.moveGradientsOutsideSymbol&&O(t)})),i.on(I,(function(t){var e;a.moveGradientsOutsideSymbol&&O(t.parentNode),(b()||w())&&(e=[],g(t.querySelectorAll("style")).forEach((function(t){t.textContent+="",e.push(t)})))}))}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var o={isMounted:{}};return o.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(t){var e=this.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter=void 0!==window.angular),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=m())},e.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,o=e.newUrl;this.updateUrls(n,o)},e.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(I,e.node)),n},e.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var o="string"==typeof t?document.querySelector(t):t;return n.node=o,this.symbols.forEach((function(t){t.mount(n.node),e._emitter.emit(I,t.node)})),g(o.querySelectorAll("symbol")).forEach((function(t){var e=v.createFromExistingNode(t);e.node=t,n.add(e)})),this._emitter.emit(M,o),o},e.prototype.destroy=function(){var t=this.config,e=this.symbols,n=this._emitter;e.forEach((function(t){return t.destroy()})),n.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(t,e){if(void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1),this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,o=this.render();return this.node=o,e&&n.childNodes[0]?n.insertBefore(o,n.childNodes[0]):n.appendChild(o),this._emitter.emit(M,o),o},e.prototype.render=function(){return h(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return A(this.node,n,_(t)+"#",_(e)+"#"),!0},Object.defineProperties(e.prototype,o),e}(f),T=t((function(t){var e,n,o,r,i;t.exports=(n=[],o=document,r=o.documentElement.doScroll,(i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState))||o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),function(t){i?setTimeout(t,0):n.push(t)})}));window.__SVG_SPRITE__?S=window.__SVG_SPRITE__:(S=new N({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=S);var D=function(){var t=document.getElementById("__SVG_SPRITE_NODE__");t?S.attach(t):S.mount(document.body,!0)};return document.body?D():T(D),S},t.exports=n()}).call(this,n(4))},7:function(t,e){!function(){t.exports=this.wp.blocks}()},8:function(t,e){!function(){t.exports=this.wp.blockEditor}()},9:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(1),r=n(8);e.default=function(){return(0,o.createElement)(r.InnerBlocks.Content,null)}},95:function(t){t.exports=JSON.parse('{"align":{"type":"string","default":"full"},"galleryImages":{"type":"array","items":{"type":"object"},"default":[]},"slideshowType":{"type":"string","default":"gallery"},"minHeight":{"type":"number","default":75},"defaultsGenerated":{"type":"boolean","default":false}}')}});