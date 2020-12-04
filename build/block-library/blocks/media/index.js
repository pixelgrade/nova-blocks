!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=227)}({0:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1:function(e,t){!function(){e.exports=this.wp.element}()},10:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},11:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},12:function(e,t){!function(){e.exports=this.novablocks.utils}()},15:function(e,t){!function(){e.exports=this.wp.data}()},2:function(e,t){!function(){e.exports=this.wp.i18n}()},21:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},22:function(e,t){function n(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,l,"next",e)}function l(e){n(i,o,a,c,l,"throw",e)}c(void 0)}))}}},227:function(e,t,n){"use strict";var r=n(4),o=n(0),a=o(n(21)),i=o(n(10)),c=o(n(22)),l=r(n(5)),u=o(n(228)),s=o(n(88)),f=o(n(232)),p=o(n(233)),d=n(64),b=n(12),m=o(n(28)),y=o(n(49)),g=n(8),v=o(n(89)),O=n(2),_=n(3),h=n(15);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=m.default.utils.getRandomAttributes,w=Object.assign({},v.default,m.default.attributes,y.default.attributes);function E(){return(E=(0,c.default)(a.default.mark((function e(){var t,n,r,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,b.getRandomBetween)(2,4),e.next=3,(0,g.getPlaceholderImages)();case 3:return n=e.sent,r=(0,b.getRandomArrayFromArray)(n,t),o=k(),r.forEach((function(e){"function"==typeof(null==e?void 0:e.download)&&e.download()})),e.abrupt("return",P(P({},o),{},{verticalAlignment:"center",images:r}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=(0,h.select)(d.STORE_NAME).getSettings();(0,g.generateDefaults)("novablocks/media",(function(){return E.apply(this,arguments)})),(0,g.insertTemplate)("novablocks/media",x.media.template),(0,_.registerBlockType)("novablocks/media",{title:(0,O.__)("Media Card Constellation","__plugin_txtd"),description:(0,O.__)("Display media objects alongside short pieces of content.","__plugin_txtd"),category:"nova-blocks",icon:l.media,keywords:[(0,O.__)("image with text","__plugin_txtd"),(0,O.__)("columns","__plugin_txtd"),(0,O.__)("side text","__plugin_txtd")],attributes:w,edit:u.default,save:s.default,getEditWrapperProps:function(){return wp.data.select("core/block-editor").getSettings().alignWide?{"data-align":"full"}:{}},deprecated:p.default,transforms:f.default})},228:function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1),a=r(n(10)),i=n(8),c=r(n(229)),l=r(n(230)),u=r(n(231));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,i.withSettings)((function(e){function t(t){e.setAttributes({images:t.map((function(e){return JSON.stringify({id:e.id,url:e.url,alt:e.alt})}))})}return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(u.default,e),(0,o.createElement)(l.default,f(f({},e),{},{updateImages:t})),(0,o.createElement)(c.default,f(f({},e),{},{updateImages:t})))}));t.default=p},229:function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1),a=r(n(10)),i=n(8),c=n(2),l=n(6),u=n(9);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={left:{icon:"align-pull-left",title:(0,c.__)("Show Media on Left Side","__plugin_txtd")},right:{icon:"align-pull-right",title:(0,c.__)("Show Media on Right Side","__plugin_txtd")}},d=function(e){var t=e.attributes,n=e.setAttributes,r=t.mediaPosition;return(0,o.createElement)(l.BlockControls,null,(0,o.createElement)(u.Toolbar,{controls:Object.keys(p).map((function(e){return f(f({},p[e]),{},{onClick:function(){n({mediaPosition:e})},isActive:r===e})}))}),(0,o.createElement)(i.AlignmentToolbar,e))};t.default=d},230:function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1),a=r(n(11)),i=r(n(28)),c=n(6),l=function(e){var t=e.attributes,n=t.contentStyle,r=t.blockStyle,l=t.style,u=t.accentColor,s=t.mediaPosition,f=t.images,p=t.verticalAlignment,d=t.emphasisArea,b=t.contentAreaWidth,m=t.layoutGutter,y=t.className,g=e.settings,v=(0,a.default)(y,"novablocks-media","has-image-on-the-".concat(s),"novablocks-u-valign-".concat(p),"is-style-".concat(l),"has-".concat(u,"-accent-color")),O=e;void 0!==f&&f.length&&"string"==typeof f[0]&&(O.attributes.images=f.map((function(e){return JSON.parse(e)})));var _={"--emphasis-area":d,"--novablocks-media-content-width":"".concat(b,"%"),"--novablocks-media-gutter":"calc( ".concat(m," * var(--novablocks-spacing) * 5 / 100 )")},h=(0,a.default)("novablocks-block","block-is-".concat(r),"content-is-".concat(n));return(0,o.createElement)("div",{className:v,style:_},(0,o.createElement)("div",{className:h},(0,o.createElement)("div",{className:"wp-block-group__inner-container"},(0,o.createElement)("div",{className:"wp-block","data-align":"wide"},(0,o.createElement)("div",{className:"novablocks-media__layout"},(0,o.createElement)("div",{className:"novablocks-media__content"},(0,o.createElement)("div",{className:"novablocks-media__inner-container novablocks-block__content"},(0,o.createElement)(c.InnerBlocks,{allowedBlocks:g.media.allowedBlocks}))),(0,o.createElement)("div",{className:"novablocks-media__aside"},(0,o.createElement)(i.default.Component,O)))))))};t.default=l},231:function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1),a=r(n(10)),i=n(8),c=n(12),l=n(2),u=n(9);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.attributes,n=e.setAttributes,r=t.emphasisArea,a=t.contentAreaWidth,s=t.layoutGutter,p=t.blockStyle,d=t.balanceEmphasis,b=t.balanceFocalPoint,m=function(e){var t=e.balanceEmphasis,n=e.balanceFocalPoint,r=20*t/100+50;return{balanceEmphasis:t,balanceFocalPoint:n,contentAreaWidth:"content"===n?r:100-r}};return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.EmphasisBlockAreaControls,null,"basic"!==p&&(0,o.createElement)(u.RangeControl,{value:r,onChange:function(e){return n({emphasisArea:e})},label:(0,l.__)("Emphasis Area"),min:10,max:100,step:5})),(0,o.createElement)(i.ControlsSection,{label:(0,l.__)("Visual Balance")},(0,o.createElement)(i.ControlsTab,{label:(0,l.__)("Customize")},(0,o.createElement)("div",{key:"media-card-visual-balance-customize-1",className:(0,c.getControlsClasses)(t,m)},(0,o.createElement)(u.RangeControl,{value:d,onChange:function(e){n(m(f(f({},t),{},{balanceEmphasis:e})))},label:(0,l.__)("Emphasis by Balance"),min:0,max:100,step:25}),(0,o.createElement)(u.RadioControl,{label:(0,l.__)("Focal Point","__plugin_txtd"),selected:b,onChange:function(e){n(m(f(f({},t),{},{balanceFocalPoint:e})))},options:[{label:(0,l.__)("Content Area"),value:"content"},{label:(0,l.__)("Media / Gallery"),value:"media"}]}))),(0,o.createElement)(i.ControlsTab,{label:(0,l.__)("Settings")},(0,o.createElement)(i.ControlsGroup,{title:(0,l.__)("Layout")},(0,o.createElement)(u.RangeControl,{key:"media-card-content-area-width",value:a,onChange:function(e){return n({contentAreaWidth:e})},label:(0,l.__)("Content Area Width"),min:30,max:70,step:5}),(0,o.createElement)(u.RangeControl,{key:"media-card-layout-gutter",value:s,onChange:function(e){return n({layoutGutter:e})},label:(0,l.__)("Layout Gutter"),min:0,max:100,step:10})))))};t.default=p},232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(3),o={from:[{type:"block",blocks:["core/gallery"],transform:function(e){return(0,r.createBlock)("novablocks/media",{images:e.images})}}],to:[{type:"block",blocks:["novablocks/advanced-gallery"],transform:function(e){return(0,r.createBlock)("novablocks/advanced-gallery",{images:e.images})}},{type:"block",blocks:["core/gallery"],transform:function(e){return(0,r.createBlock)("core/gallery",{images:e.images})}}]};t.default=o},233:function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(10)),a=r(n(88)),i=n(50),c=r(n(89)),l=r(n(28));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=Object.assign({},c.default,l.default.attributes),p=[{attributes:s(s({},(0,i.omit)(f,["images"])),{},{gallery:f.images}),isEligible:function(e){return void 0===e.defaultsGenerated},migrate:function(e){var t=e.contentStyle,n=e.gallery,r=Array.isArray(n)&&n.length?n:e.images;return s(s({},(0,i.omit)(e,["gallery"])),{},{images:r,contentStyle:"basic"===t?"moderate":t,upgradedToModerate:!0,defaultsGenerated:!0})},save:a.default}];t.default=p},28:function(e,t){!function(){e.exports=this.novablocks.advancedGallery}()},3:function(e,t){!function(){e.exports=this.wp.blocks}()},4:function(e,t,n){var r=n(7);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}},49:function(e,t){!function(){e.exports=this.novablocks.blob}()},5:function(e,t){!function(){e.exports=this.novablocks.icons}()},50:function(e,t){!function(){e.exports=this.lodash}()},6:function(e,t){!function(){e.exports=this.wp.blockEditor}()},64:function(e,t){!function(){e.exports=this.novablocks.core}()},7:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},8:function(e,t){!function(){e.exports=this.novablocks.blockEditor}()},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(1),o=n(6);t.default=function(){return(0,r.createElement)(o.InnerBlocks.Content,null)}},89:function(e){e.exports=JSON.parse('{"align":{"type":"string","default":"full"},"mediaPosition":{"type":"string","default":"left"},"blockStyle":{"type":"string","default":"basic"},"contentStyle":{"type":"string","default":"moderate"},"horizontalAlignment":{"type":"string","default":"center"},"verticalAlignment":{"type":"string","default":""},"emphasisArea":{"type":"number","default":100},"contentAreaWidth":{"type":"number","default":50},"balanceEmphasis":{"type":"number","default":0},"balanceFocalPoint":{"type":"string","default":"content"},"layoutPreset":{"type":"string","default":"stable"},"upgradedToModerate":{"type":"boolean","default":false},"style":{"type":"string","default":"default"},"accentColor":{"type":"string","default":"primary"},"templateInserted":{"boolean":true,"default":false}}')},9:function(e,t){!function(){e.exports=this.wp.components}()}});