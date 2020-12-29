this.novablocks=this.novablocks||{},this.novablocks.advancedGallery=function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=75)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.blockEditor}()},16:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return i}))},19:function(e,t,n){"use strict";function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return i}))},2:function(e,t){!function(){e.exports=this.wp.components}()},20:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return i}))},21:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.d(t,"a",(function(){return a}))},25:function(e,t){!function(){e.exports=this.jQuery}()},26:function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}n.d(t,"a",(function(){return a}))},3:function(e,t){!function(){e.exports=this.novablocks.utils}()},30:function(e){e.exports=JSON.parse('{"images":{"type":"array","default":[],"items":{"type":"object"}},"stylePreset":{"type":"string","default":"the-cloud-atlas"},"sizeContrast":{"type":"number","default":0},"positionShift":{"type":"number","default":0},"elementsDistance":{"type":"number","default":20},"placementVariation":{"type":"number","default":25},"imageRotation":{"type":"number","default":0},"imageResizing":{"type":"string","default":"cropped"},"containerHeight":{"type":"number","default":50},"objectPosition":{"type":"number","default":50},"defaultsGenerated":{"type":"boolean","default":false}}')},4:function(e,t){!function(){e.exports=this.novablocks.blockEditor}()},44:function(e,t){!function(){e.exports=this.novablocks.blob}()},7:function(e,t){!function(){e.exports=this.wp.hooks}()},75:function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"getRandomAttributes",(function(){return O})),n.d(i,"getGalleryStyle",(function(){return _})),n.d(i,"getGridStyle",(function(){return E})),n.d(i,"safariHeightFix",(function(){return x}));var a=n(0),r=n(4),o=n(26),l=n(16);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=n(1),u=n(10),d=n(3),m=n(44),f=n.n(m),b=n(19),g=n(20),p=n(21),y=function(){function e(t,n){Object(g.a)(this,e);var i=n.placementVariation/25-1;this.gridItems=t.map((function(e,i){var a=4*Math.floor(i/4),r=Math.min(a+4,t.length);return new h(e,i,n,r-a==3)})),this.removeExtra(),1!==i&&2!==i||this.flipX(),2!==i&&3!==i||this.flipY()}return Object(p.a)(e,[{key:"removeExtra",value:function(){var e=this.getExtraLeft(),t=this.getExtraTop(),n=this.getExtraBetween();this.gridItems=this.gridItems.map((function(i,a){var r=Math.floor(a/4);return i.x=i.x-e,i.y=i.y-t-r*n,i}))}},{key:"flipX",value:function(){var e=Math.max.apply(Math,Object(b.a)(this.gridItems.map((function(e){return e.x+e.width}))));this.gridItems=this.gridItems.map((function(t,n){return t.x=e-t.x-t.width+1,t}))}},{key:"flipY",value:function(){var e=Math.max.apply(Math,Object(b.a)(this.gridItems.map((function(e){return e.y+e.height}))));this.gridItems=this.gridItems.map((function(t,n){return t.y=e-t.y-t.height+1,t}))}},{key:"getExtraLeft",value:function(){return Math.min.apply(Math,Object(b.a)(this.gridItems.map((function(e){return e.x}))))-1}},{key:"getExtraTop",value:function(){return Math.min.apply(Math,Object(b.a)(this.gridItems.map((function(e){return e.y}))))-1}},{key:"getExtraBetween",value:function(){var e=this.gridItems.slice(0,4);return 40-Math.max.apply(Math,Object(b.a)(e.map((function(e){return e.y+e.height}))))+1}}]),e}(),h=function(){function e(t,n,i,a){Object(g.a)(this,e),this.sizeContrast=i.sizeContrast/20,this.positionShift=i.positionShift/5,this.objectPosition=i.objectPosition,this.imageResizing=i.imageResizing,this.imageRotation=i.imageRotation,this.image=t,this.index=n,this.idx=this.getIndex(n),this.col=this.idx%2,this.row=Math.floor(n/2),a&&(0===n&&(this.positionShift=Math.min(this.positionShift,10)),2===n&&(this.positionShift=Math.max(this.positionShift,10)));var r=this.getOffsets(),o=r.offsetX,l=r.offsetY,c=20-this.sizeContrast*(n%4);this.x=20*this.col+1+o,this.y=20*this.row+1+l,this.width=c,this.height=c}return Object(p.a)(e,[{key:"getOffsets",value:function(){var e=this.row,t=this.col,n=this.index,i=this.sizeContrast,a=this.positionShift,r=n%4*(1-t%2)*i,o=n%4*(1-e%2)*i;return r+=(1-t%2)*(1-e%2)*a,o-=e%2*(1-t%2)*a,{offsetX:r-=t%2*(e%2)*a,offsetY:o+=t%2*(1-e%2)*a}}},{key:"getIndex",value:function(e){return e%4==3?e-1:e%4==2?e+1:e}},{key:"getStyle",value:function(){var e=this.index,t=this.x,n=this.y,i=this.width,a=this.height,r=this.imageRotation,o="rotate(".concat((e%2-.5)*r/10,"deg)");return{gridColumnStart:t+"",gridColumnEnd:"span ".concat(i),gridRowStart:n+"",gridRowEnd:"span ".concat(a),transform:o}}},{key:"getImageStyle",value:function(){var e=this.row,t=this.col,n=this.objectPosition,i=e%2==0?100-n:n;return{objectFit:"cropped"===this.imageResizing?"cover":"scale-down",objectPosition:"".concat(t%2==0?100-n:n,"% ").concat(i,"%")}}}]),e}(),v=n(25),j=n.n(v),O=function(){return{sizeContrast:20*Object(d.getRandomBetween)(0,5),positionShift:5*Object(d.getRandomBetween)(0,20),elementsDistance:20*Object(d.getRandomBetween)(0,5),placementVariation:25*Object(d.getRandomBetween)(1,4),stylePreset:"just-my-style"}},_=function(e){var t=e.containerHeight/50-1,n=1,i=1;return(t=Math.min(Math.max(-1,t),1))>0&&(n=1+t),t<0&&(i=1+Math.abs(t)),{paddingTop:"".concat(100*n/i,"%")}},E=function(e){var t=e.elementsDistance;return{"--novablocks-advanced-gallery-grid-gap":"".concat(t,"px")}},x=function(e){if(d.isSafari){var t=e.parentNode,n=j()(e),i=j()(t),a=function(){var e=i.outerHeight();n.css("height",e)},r=Object(d.debounce)(a,30);if(a(),void 0!==window.ResizeObserver)new window.ResizeObserver((function(e){r()})).observe(t);else j()(window).on("resize",(function(){r()}))}},k=f.a.withBlobsDecoration((function(e){var t,n,i=e.gridItem,r=null==i?void 0:i.image,o=(null==r||null===(t=r.sizes)||void 0===t||null===(n=t.novablocks_medium)||void 0===n?void 0:n.url)||(null==r?void 0:r.url),l=i.getImageStyle();return Object(a.createElement)(a.Fragment,null,"video"!==r.type&&Object(a.createElement)("img",{className:"novablocks-advanced-gallery__image",src:o,alt:null==r?void 0:r.alt,style:l}),"video"===r.type&&Object(a.createElement)("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,className:"novablocks-advanced-gallery__image",style:l,src:r.url}))})),S=function(e){var t=e.gridItem,n=null==t?void 0:t.image,i=null==n?void 0:n.caption,r=null==n?void 0:n.description;if(n){var c="string"==typeof i&&!!i,s="string"==typeof r&&!!r;return Object(a.createElement)("div",{className:"novablocks-advanced-gallery__grid-item",style:t.getStyle()},Object(a.createElement)("div",{className:"novablocks-advanced-gallery__grid-item-media"},Object(a.createElement)(k,Object(l.a)({},e,{seedOffset:null==e?void 0:e.index}))),(c||s)&&Object(a.createElement)("div",{className:"novablocks-advanced-gallery__grid-item-info"},c&&Object(a.createElement)("div",{className:"novablocks-advanced-gallery__grid-item-caption",dangerouslySetInnerHTML:{__html:i}}),Object(o.a)(s)&&Object(a.createElement)("div",{className:"novablocks-advanced-gallery__grid-item-description",dangerouslySetInnerHTML:{__html:r}})))}},C=function(e){var t=e.attributes,n=e.onSelectImages,i=null==t?void 0:t.images,r=i.map((function(e){return e.id}));if(!i||!i.length)return null;var o=c(Object(a.useState)(0),2),m=o[0],f=o[1],b=Object(a.useRef)(null);Object(a.useEffect)((function(){f(b.current?b.current.clientHeight:0)}));var g=new y(i,t),p=E(t);return d.isSafari&&Object.assign(p,{height:m}),Object(a.createElement)(u.MediaUpload,{gallery:!0,allowedTypes:["image","video"],multiple:!0,onSelect:n,value:r,render:function(n){var i=n.open;return Object(a.createElement)("div",{className:"novablocks-advanced-gallery",style:_(t),ref:b},Object(a.createElement)("div",{className:"novablocks-advanced-gallery__media-edit novablocks-change-media-overlay",onClick:i},Object(a.createElement)("span",null,Object(s.__)("Change Media","__plugin_txtd"))),Object(a.createElement)("div",{className:"novablocks-advanced-gallery__grid",style:p},g.gridItems.map((function(t,n){return Object(a.createElement)(S,Object(l.a)({gridItem:t,key:n,index:n},e))}))))}})},w=function(e){var t=e.attributes,n=e.onSelectImages,i=null==t?void 0:t.images;return(!i||!i.length)&&Object(a.createElement)(u.MediaPlaceholder,{icon:Object(a.createElement)(u.BlockIcon,{icon:"format-gallery"}),allowedTypes:["image","video"],multiple:!0,onSelect:n})},I=n(2),M=function(e){var t=e.setAttributes,n=e.attributes,i=e.settings.advancedGalleryPresetOptions,o=n.sizeContrast,l=n.positionShift,c=n.elementsDistance,u=n.placementVariation,d=n.imageResizing,m=n.objectPosition,f=n.containerHeight,b=n.imageRotation;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(r.ControlsSection,{label:Object(s.__)("Media Composition"),group:Object(s.__)("Modules")},Object(a.createElement)(r.ControlsTab,{label:Object(s.__)("General")},Object(a.createElement)(r.Notice,{key:"advanced-gallery-quick-start",id:"novablocks-advanced-gallery-quick-start",content:Object(a.createElement)("p",null,Object(a.createElement)("strong",null,"Quick start:")," Set up your gallery layout using the presets list below and use the Customize tab to fine-tune the details"),dismissLabel:"✔ Ok, I got it!"}),Object(a.createElement)(r.PresetControl,{key:"advanced-gallery-style-preset",options:i,randomize:O})),Object(a.createElement)(r.ControlsTab,{label:Object(s.__)("Customize")},Object(a.createElement)(I.RangeControl,{key:"advanced-gallery-crop-style",label:Object(s.__)("Images Crop Style","__plugin_txtd"),value:"cropped"===d?2:1,onChange:function(e){t({imageResizing:2===e?"cropped":"original"})},min:1,max:2,step:1})),Object(a.createElement)(r.ControlsTab,{label:Object(s.__)("Settings")},Object(a.createElement)(r.ControlsGroup,{title:Object(s.__)("Gallery")},Object(a.createElement)(I.RangeControl,{key:"advanced-gallery-size-contrast",label:Object(s.__)("Size Contrast","__plugin_txtd"),value:o,onChange:function(e){return t({sizeContrast:e})},min:0,max:100,step:20}),Object(a.createElement)(I.RangeControl,{key:"advanced-gallery-position-shift",label:Object(s.__)("Position Shift","__plugin_txtd"),value:l,onChange:function(e){return t({positionShift:e})},min:0,max:100,step:5}),Object(a.createElement)(I.RangeControl,{key:"advanced-gallery-elements-distance",label:Object(s.__)("Elements Distance","__plugin_txtd"),value:c,onChange:function(e){return t({elementsDistance:e})},min:0,max:100,step:20}),Object(a.createElement)(I.RangeControl,{key:"advanced-gallery-placement-variation",label:Object(s.__)("Placement Variation","__plugin_txtd"),value:u,onChange:function(e){return t({placementVariation:e})},min:25,max:100,step:25}),Object(a.createElement)(I.RangeControl,{key:"advanced-gallery-image-rotation",label:Object(s.__)("Image Rotation","__plugin_txtd"),value:b,onChange:function(e){return t({imageRotation:e})},min:0,max:100,step:10})),Object(a.createElement)(r.ControlsGroup,{title:Object(s.__)("Display")},Object(a.createElement)(I.RangeControl,{key:"advanced-gallery-image-container-height",label:Object(s.__)("Image Container Height","__plugin_txtd"),value:f,onChange:function(e){return t({containerHeight:e})},min:0,max:100,step:5}),Object(a.createElement)(I.RadioControl,{key:"advanced-gallery-image-resizing",label:"Image Resizing",selected:d,onChange:function(e){return t({imageResizing:e})},options:[{label:"Stretch to fill the container",value:"cropped"},{label:"Shrink to fit (no crop)",value:"original"}]}),Object(a.createElement)(I.RangeControl,{key:"advanced-gallery-image-position",label:Object(s.__)("Image Position","__plugin_txtd"),value:m,onChange:function(e){return t({objectPosition:e})},min:0,max:100,step:10})))))},R=["image","video"],z=function(e){var t=e.onSelectImages,n=e.attributes,i=null==n?void 0:n.images,r=i.map((function(e){return e.id}));return!(!i||!i.length)&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)(I.Toolbar,null,Object(a.createElement)(I.Dropdown,{position:"bottom right",contentClassName:"block-editor-media-replace-flow__options",renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return Object(a.createElement)(I.ToolbarGroup,null,Object(a.createElement)(I.ToolbarButton,{onClick:n,"aria-expanded":t},Object(s.__)("Change Media","__plugin_txtd")))},renderContent:function(e){e.onClose;return Object(a.createElement)(I.NavigableMenu,null,Object(a.createElement)(u.MediaUpload,{gallery:!0,allowedTypes:R,multiple:!0,value:r,onSelect:t,render:function(e){var t=e.open;return Object(a.createElement)(I.MenuItem,{onClick:t},Object(s.__)("Edit Gallery","__plugin_txtd"))}}),Object(a.createElement)(u.MediaUpload,{allowedTypes:R,multiple:!0,value:r,onSelect:t,render:function(e){var t=e.open;return Object(a.createElement)(I.MenuItem,{onClick:t},Object(s.__)("Add Video","__plugin_txtd"))}}))}})))},P=function(e){return Object(a.createElement)(u.BlockControls,null,Object(a.createElement)(z,e))},T=n(30),N=n(7),G=["novablocks/media","novablocks/advanced-gallery"];Object(N.addFilter)("blocks.registerBlockType","novablocks/add-advanced-gallery-attributes",(function(e){return G.includes(e.name)?(void 0!==e.attributes&&Object.assign(e.attributes,T),e):e})),n.d(t,"GridItem",(function(){return h})),n.d(t,"GridItemCollection",(function(){return y}));t.default={Component:Object(r.withSettings)((function(e){var t=e.setAttributes,n=Object.assign({},e,{onSelectImages:function(e){Object(r.normalizeImages)(e).then((function(e){t({images:e})}))}});return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(w,n),Object(a.createElement)(C,n),Object(a.createElement)(M,n),Object(a.createElement)(P,n))})),attributes:T,utils:i}}});