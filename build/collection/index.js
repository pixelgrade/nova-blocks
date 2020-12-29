this.novablocks=this.novablocks||{},this.novablocks.collection=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=76)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.blockEditor}()},12:function(e,t){!function(){e.exports=this.lodash}()},13:function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},16:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},2:function(e,t){!function(){e.exports=this.wp.components}()},23:function(e,t){!function(){e.exports=this.novablocks.components}()},3:function(e,t){!function(){e.exports=this.novablocks.utils}()},4:function(e,t){!function(){e.exports=this.novablocks.blockEditor}()},50:function(e){e.exports=JSON.parse('{"gridcolumns":{"type":"number","default":6},"gridrows":{"type":"number","default":6},"featuresize":{"type":"number","default":4},"featureposition":{"type":"number","default":1},"fragmentation":{"type":"number","default":1},"imageweightleft":{"type":"number","default":1},"imageweightright":{"type":"number","default":2},"metadetailsleft":{"type":"number","default":10},"metadetailsright":{"type":"number","default":6},"boostfeature":{"type":"boolean","default":false},"subfeature":{"type":"boolean","default":true},"balancemdandiw":{"type":"boolean","default":false},"hierarchycrossing":{"type":"number","default":30},"flipcolsrows":{"type":"boolean","default":false},"layoutStyle":{"type":"string","default":"parametric"},"headerPosition":{"type":"number","default":0},"headerColumn":{"type":"number","default":0}}')},7:function(e,t){!function(){e.exports=this.wp.hooks}()},76:function(e,t,r){"use strict";r.r(t);var n={};function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(n),r.d(n,"getGridStyle",(function(){return f})),r.d(n,"getPostsCount",(function(){return m})),r.d(n,"redistributeCardsInAreas",(function(){return b})),r.d(n,"getOptimalHeaderPosition",(function(){return p})),r.d(n,"isLandscape",(function(){return w})),r.d(n,"getParametricLayoutAreaClassName",(function(){return O})),r.d(n,"getAreaBaseClassname",(function(){return v})),r.d(n,"getAreaClassnameByAspectRatio",(function(){return j})),r.d(n,"getAreaClassnameByWidthRatio",(function(){return _})),r.d(n,"getAreaClassnameByHeightRatio",(function(){return y})),r.d(n,"getGridColumnsAndRows",(function(){return C})),r.d(n,"transposeMatrix",(function(){return E}));var a=r(16),i=r(0),l=r(13),c=r.n(l),s=r(3),u=r(23),d=r(4),g=function(e){var t=e.area;return Object(i.createElement)("div",{className:"novablocks-grid__debug"},"nth: ".concat(t.nth),Object(i.createElement)("br",null),"posts count: ".concat(t.postsCount),Object(i.createElement)("br",null),"initial posts count: ".concat(t.initialPostsCount),Object(i.createElement)("br",null),"width: ".concat(t.width),Object(i.createElement)("br",null),"height: ".concat(t.height),Object(i.createElement)("br",null),"spot ratio: ".concat(t.spotRatio))},f=function(e){var t=C(e),r=t.gridcolumns,n=t.gridrows;return{display:"grid",gridTemplateColumns:"repeat( ".concat(r,", 1fr )"),gridTemplateRows:"repeat( ".concat(n,", auto )")}},m=function(e){return e.reduce((function(e,t){return e+t.areas.reduce((function(e,t){return e+t.postsCount}),0)}),0)},b=function(e,t,r){for(var n=m(e),o=t,a=o,i=0,l=0;l<e.length;l++){for(var c=e[l],s=0,u=0;u<c.areas.length;u++){var d=c.areas[u];d.spotRatio=h(d,r),s+=d.spotRatio,i+=d.spotRatio}c.spotRatio=s}var g=o-n;if(n!==o)for(var f=0;f<e.length;f++)for(var b=e[f].areas,p=0;p<b.length;p++){var w=b[p],O=Math.round(g*w.spotRatio/i);if(w.postsCount=Math.max(0,w.postsCount+O),i-=w.spotRatio,g-=O,a<=0)return}},p=function(e){for(var t=1,r=[0],n=0;n<e.length;n++)for(var o=e[n],a=o.areas,i=o.row,l=0;l<a.length;l++){var c=a[l];1===i&&0===l&&r.push(t),t+=c.postsCount}return r},h=function(e,t){var r=C(t).gridcolumns,n=e.width,o=e.height,a=e.postsCount/o;return w(e,t)&&(a*=2),a*=r/n},w=function(e,t){var r=C(t),n=r.gridcolumns,o=(r.gridrows,e.nth),a=e.width,i=e.height,l=a*e.initialPostsCount/i>1.33;return a/n>=.5?l||t.subfeature&&2===o:l},O=function(e,t){var r=C(t),n=r.gridcolumns,o=r.gridrows,a=e.width,i=e.height;return c()([v(e),_(a/n),y(i/o),j(e,t)])},v=function(e){var t=e.nth;return c()(["novablocks-grid__area","novablocks-grid__area--nth-".concat(t)])},j=function(e,t){return c()([{"novablocks-grid__area--portrait":!w(e,t),"novablocks-grid__area--landscape":w(e,t)}])},_=function(e){return c()([{"novablocks-grid__area--width-xs":e<.3,"novablocks-grid__area--width-s":.3<=e&&e<.5,"novablocks-grid__area--width-m":.5<=e&&e<.66,"novablocks-grid__area--width-l":.66<=e&&e<.8,"novablocks-grid__area--width-xl":.8<=e&&e<.95,"novablocks-grid__area--width-full":.95<=e}])},y=function(e){return c()([{"novablocks-grid__area--height-xs":e<.34,"novablocks-grid__area--height-s":.34<=e&&e<.5,"novablocks-grid__area--height-m":.5<=e&&e<.66,"novablocks-grid__area--height-l":.66<=e&&e<.8,"novablocks-grid__area--height-xl":.8<=e}])},C=function(e){return{gridcolumns:e.flipcolsrows?e.gridrows:e.gridcolumns,gridrows:e.flipcolsrows?e.gridcolumns:e.gridrows}},E=function(e){return Object.keys(e[0]).map((function(t){return e.map((function(e){return e[t]}))}))};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var P=function(e){var t,r,n=H([],e.gridcolumns,e.gridrows,"X"),a=H([],e.gridcolumns,e.gridrows,"X"),i=H([],e.gridcolumns,e.gridrows,"X"),l=F([],e.gridcolumns,"X"),c=F([],e.gridcolumns,"X"),s=1;for(t=e.featureposition;t<e.featureposition+e.featuresize;t++)l[t]=s;var u=0;for(s++,t=1;t<=e.gridcolumns;t++)if("X"===l[t]){if(u++,l[t-1]!==s)s++;else{var d=1<<e.gridcolumns-e.featuresize-u;(d&e.fragmentation)===d&&s++}l[t]=s}for(t=1;t<=e.gridcolumns;t++){for(var g=t;l[g+1]===l[t];)g++;for(1===t?a[1][t]=e.imageweightleft:g===e.gridcolumns?a[1][t]=e.imageweightright:a[1][t]=Math.round(e.imageweightleft-(e.imageweightleft-e.imageweightright)*(t+g-1)/(2*e.gridcolumns)),r=t;r<=g;r++)a[1][r]=a[1][t];t=g}for(t=2;t<=e.gridrows;t++)a[t]=a[1].slice();for(t=1;t<=e.gridcolumns;t++){for(var f=t;l[f+1]===l[t];)f++;for(1===t?i[1][t]=e.metadetailsleft:f===e.gridcolumns?i[1][t]=e.metadetailsright:(i[1][t]=e.metadetailsleft-(e.metadetailsleft-e.metadetailsright)*(t+f-1)/(2*e.gridcolumns),e.balancemdandiw&&0!=e.imageweightleft-e.imageweightright&&(i[1][t]=i[1][t]*(Math.abs(e.imageweightleft-e.imageweightright)/2/a[1][t])),i[1][t]=Math.round(i[1][t])),r=t;r<=f;r++)i[1][r]=i[1][t];t=f}for(t=2;t<=e.gridrows;t++)i[t]=i[1].slice();if(e.boostfeature&&e.featuresize>0){var m=1,b=1;for(t=1;t<=e.gridcolumns;t++)i[1][t]>i[1][m]&&(m=t),a[1][t]>a[1][b]&&(b=t);if(m!==e.featureposition){var p=i[1][e.featureposition],h=i[1][m];for(t=m;l[t]===l[m];)i[1][t]=p,t++;for(t=e.featureposition;l[t]===l[e.featureposition];)i[1][t]=h,t++;for(t=2;t<=e.gridrows;t++)i[t]=i[1].slice()}if(b!==e.featureposition){var w=a[1][e.featureposition],O=a[1][b];for(t=b;l[t]===l[b];)a[1][t]=w,t++;for(t=e.featureposition;l[t]===l[e.featureposition];)a[1][t]=O,t++;for(t=2;t<=e.gridrows;t++)a[t]=a[1].slice()}}var v=i[1][1],j=a[1][1];for(t=1;t<=e.gridcolumns;t++)i[1][t]>v&&(v=i[1][t]),a[1][t]>j&&(j=a[1][t]);for(j<1&&(j=1),v<1&&(v=1),t=1;t<=e.gridcolumns;t++){for(var _=t;l[_+1]===l[t];)_++;for(c[t]=Math.round((i[1][t]/v+a[1][t]/j)/2*e.gridrows),c[t]>3*(_-t+1)&&(c[t]=3*(_-t+1)),c[t]<1&&(c[t]=1),e.subfeature&&t===e.featureposition&&e.featuresize>0&&c[t]===e.gridrows&&(c[t]=Math.floor(.75*c[t])),c[t]<1?c[t]=1:c[t]>e.gridrows&&(c[t]=e.gridrows),r=t;r<=_;r++)c[r]=c[t];t=_}var y=1;if(e.featuresize>0){for(t=1;t<=c[e.featureposition];){r=e.featureposition;do{n[t][r]=y,r++}while(l[e.featureposition]===l[r]);t++}if(y++,t<=e.gridrows){for(;t<=e.gridrows;){r=e.featureposition;do{n[t][r]=y,i[t][r]=Math.round(.66*i[t][r]),a[t][r]=Math.round(.66*a[t][r]),r++}while(l[e.featureposition]===l[r]);t++}y++}}for(var C,P=1;P<=e.gridcolumns;)if("X"===n[1][P])for(C=1;C<=e.gridrows;){for(t=C;t<=C+c[P]-1&&t<=e.gridrows;){r=P;do{n[t][r]=y,r++}while(l[P]===l[r]);t++}y++,C=t}else P++;var G=y,T=e.hierarchycrossing;for(y=1;T>0&&y<=G;){var A=B(y,n,i,a);if(!1!==A){if(A.endGridColumn===e.gridcolumns)break;var M=B(n[A.startGridRow][A.endGridColumn+1],n,i,a),z=B(n[A.endGridRow][A.endGridColumn+1],n,i,a);if(M.startGridRow===A.startGridRow&&z.endGridRow===A.endGridRow){var N=G/M.nth*(M.area+M.imageWeight+M.metaDetails);if(z.nth!==M.nth){var I=1;for(t=M.nth+1;t<=z.nth;t++){var U=B(t,n,i,a);!1!==U&&(I++,N+=G/U.nth*(U.area+U.imageWeight+U.metaDetails*I)*I)}}if(T<N)y++;else{if(G/A.nth*(A.area+A.imageWeight+A.metaDetails)*Math.pow(2*T/50,3)>N){for(t=M.startGridRow;t<=z.endGridRow;t++)for(r=M.startGridColumn;r<=M.endGridColumn;r++)n[t][r]=y,a[t][r]=A.imageWeight,i[t][r]=A.metaDetails;T-=N,G=L(n)}y++}}else y++}else y++}var W=function(e,t,r,n){var a=D(t,r,n);x(t,r,n,a,e);var i=(a=(a=function(e,t){var r=function(e){for(var t,r=[],n=1;n<e.length-1;n++)for(var o=1;o<e[n].length-1;o++)t=e[n][o],-1===r.indexOf(t)&&r.push(t);return r}(e);r.sort((function(e,t){return e-t}));for(var n=0;n<r.length;n++)n+1!==r[n]&&S(r[n],n+1,e);return r.map((function(e,r){var n=t.find((function(t){return t.nth===e}));return n.nth=r+1,n}))}(t,a)).map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({initialPostsCount:e.postsCount},e)}))).map((function(e){return{row:e.row,col:e.col,width:e.width,height:e.height,areas:[e]}}));return i.forEach((function(e){e.areas.forEach((function(t,r){i.filter((function(t){return t!==e})).forEach((function(r){r.areas.forEach((function(n,o){n.merged||t.col!==n.col||t.width!==n.width||t.row+t.height!==n.row&&t.row!==n.row+n.height||(n.merged=!0,e.areas.push(n),e.height+=n.height,r.areas.splice(o,1))}))}))}))})),i.filter((function(e){return e.areas.length>0}))}(e,e.flipcolsrows?E(n):n,e.flipcolsrows?E(i):i,e.flipcolsrows?E(a):a);return R(W),W},R=function(e){var t=e.filter((function(e){return 1===e.row})).sort((function(e,t){return t.width-e.width})),r=e.findIndex((function(e){return e===t[0]}));return e.splice(0,0,e.splice(r,1)[0]),e};function S(e,t,r){for(var n=1;n<r.length-1;n++)for(var o=1;o<r[n].length-1;o++)r[n][o]===e&&(r[n][o]=t)}var x=function(e,t,r,n,o){for(var a,i=1;i<=N(e);i++)(a=B(i,e,t,r))&&G(a.startGridRow,a.startGridColumn,e,t,r,n,o)},G=function(e,t,r,n,o,a,i){var l=r[e][t],c=M(l,r),s=z(l,r),u=c,d=s,g=-1;if(Array.isArray(a)&&(g=a.findIndex((function(n){return n.nth===r[e][t]}))),1!==l){for(var f,m,b,p,h,w,O=!0,v=!1;O;)h=r[e+s][t],f=(w=A(h,r)).row,m=w.col,b=M(h,r),p=z(h,r),c===b&&t===m&&Math.abs(d-p)<=1&&Math.abs(n[e][t]-n[f][t])<=1&&Math.abs(o[e][t]-o[f][t])<=1?(s+=p,v=!0,g>-1&&(a[g].postsCount+=1,a[g].height=s)):O=!1;for(O=!v;O&&!i.flipcolsrows;)h=r[e][t+c],f=(w=A(h,r)).row,m=w.col,b=M(h,r),s===(p=z(h,r))&&e===f&&Math.abs(u-b)<=1&&Math.abs(n[e][t]-n[e][m])<=1&&Math.abs(o[e][t]-o[e][m])<=1?(c+=b,v=!0,g>-1&&(a[g].postsCount+=1,a[g].width=c)):O=!1;T(r,e,t,c,s)}},T=function(e,t,r,n,o){for(var a=t;a<t+o;a++)for(var i=r;i<r+n;i++)e[a][i]=e[t][r]},A=function(e,t){for(var r=0;r<t.length;r++)for(var n=0;n<t[r].length;n++)if(t[r][n]===e)return{row:r,col:n};return{}},M=function(e,t){for(var r=A(e,t),n=r.row,o=r.col,a=1;e===t[n][o+a];)a+=1;return a},z=function(e,t){for(var r=A(e,t),n=r.row,o=r.col,a=1;void 0!==t[n+a]&&e===t[n+a][o];)a+=1;return a},L=function(e){for(var t,r=1,n=1;n<=N(e);n++)if(!1!==(t=B(n,e))){if(t.nth>r)for(var o=t.startGridRow;o<=t.endGridRow;o++)for(var a=t.startGridColumn;a<=t.endGridColumn;a++)e[o][a]=r;r++}return r-1},N=function(e){for(var t=0,r=1;r<e.length;r++)for(var n=1;n<e[r].length;n++)e[r][n]>t&&(t=e[r][n]);return t},D=function(e,t,r){for(var n,o=[],a=1;a<=N(e);a++)(n=B(a,e,t,r))&&o.push({nth:n.nth,col:n.startGridColumn,row:n.startGridRow,width:n.endGridColumn-n.startGridColumn+1,height:n.endGridRow-n.startGridRow+1,metaDetails:n.metaDetails,imageWeight:n.imageWeight,postsCount:1});return o},B=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=!1,a=1;a<t.length;a++)for(var i=1;i<t[a].length;i++)if(t[a][i]===e){for(o={nth:e,startGridColumn:i,startGridRow:a,endGridColumn:i,endGridRow:a,metaDetails:!!r&&r[a][i],imageWeight:!!n&&n[a][i],area:1};i<t[a].length&&t[a][i]===t[a][i+1];)i++;for(o.endGridColumn=i;a<t.length&&t[a][i]===t[a+1][i];)a++;return o.endGridRow=a,o.area=(o.endGridRow-o.startGridRow+1)*(o.endGridColumn-o.startGridColumn+1),o}return o},F=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"X";e.push("/");for(var n=1;n<=t;n++)e.push(r);return e.push("/"),e},H=function(e,t,r,n){e.push(F([],t,"/"));for(var o=0;o<r;o++)e.push(F([],t,n));return e.push(F([],t,"/")),e},I=r(10),U=r(1),W=r(2),X=function(e){var t=e.attributes,r=t.contentAlign,n=t.containerHeight,o=t.imageResizing,a=t.level,l=t.imagePadding,c=e.setAttributes,s="function"!=typeof e.onChange?c:e.onChange;return Object(i.createElement)(d.ControlsSection,{label:Object(U.__)("Display")},Object(i.createElement)(d.ControlsTab,{label:Object(U.__)("Settings")},Object(i.createElement)(W.RadioControl,{key:"collection-image-resizing",label:Object(U.__)("Image resizing"),selected:o,onChange:function(e){c({imageResizing:e})},options:[{label:"Stretch to fill the container",value:"cropped"},{label:"Shrink to fit (no crop)",value:"original"}]}),Object(i.createElement)(W.RangeControl,{key:"collection-image-container-height",label:Object(U.__)("Image container height","__plugin_txtd"),value:n,onChange:function(e){c({containerHeight:e})},min:0,max:100,step:5}),Object(i.createElement)(W.RangeControl,{key:"collection-image-padding",label:Object(U.__)("Image padding","__plugin_txtd"),value:l,onChange:function(e){c({imagePadding:e})},min:0,max:100,step:50}),Object(i.createElement)(W.PanelRow,null,Object(i.createElement)("span",null,Object(U.__)("Title Level","__plugin_txtd")),Object(i.createElement)(d.HeadingToolbar,{minLevel:2,maxLevel:4,selectedLevel:a,onChange:function(e){s({level:e})}})),Object(i.createElement)(W.PanelRow,null,Object(i.createElement)("span",null,Object(U.__)("Content Alignment","__plugin_txtd")),Object(i.createElement)(I.AlignmentToolbar,{value:r,isCollapsed:!1,onChange:function(e){s({contentAlign:e})}}))))},V=function(e){var t=e.attributes,r=t.showCollectionTitle,n=t.title,o=t.collectionTitleLevel,a=e.setAttributes;return r?Object(i.createElement)("div",{className:"block-editor-block-list__block wp-block novablocks-collection__title","data-align":"wide"},Object(i.createElement)(I.RichText,{tagName:"h".concat(o),value:n,onChange:function(e){a({title:e})},allowedFormats:["core/link"]})):null},J=function(e){var t=e.attributes,r=t.showCollectionSubtitle,n=t.subtitle,o=e.setAttributes;return r?Object(i.createElement)("div",{className:"block-editor-block-list__block wp-block novablocks-collection__subtitle","data-align":"wide"},Object(i.createElement)(I.RichText,{tagName:"p",className:"is-style-lead",value:n,onChange:function(e){o({subtitle:e})},allowedFormats:[]})):null},K=function(e){var t=e.attributes,r=e.hasAppender,n=t.blockStyle,o=t.contentStyle,a=t.contentAlign,l=t.imageResizing,u=t.containerHeight,d=t.imagePadding,g=t.columns,f=t.postsToShow,m=t.isLandscape,b=t.thumbnailAspectRatio||u,p={"--card-media-padding":d,"--card-media-padding-top":Object(s.getCardMediaPaddingTop)(b),"--card-media-object-fit":"cropped"===l?"cover":"scale-down"},h=1/g,w=1/Math.ceil(f/g),O=c()(e.className,"novablocks-collection","novablocks-block","".concat("novablocks-collection","--align-").concat(a),"block-is-".concat(n),"content-is-".concat(o),{"has-appender":r},"novablocks-grid__area",{"novablocks-grid__area--portrait":!m,"novablocks-grid__area--landscape":m},_(h),y(w));return Object(i.createElement)("div",{className:O,style:p},Object(i.createElement)("div",{className:"wp-block-group__inner-container"},Object(i.createElement)(q,e),Object(i.createElement)("div",{className:"block-editor-block-list__block wp-block novablocks-collection__cards","data-align":"wide"},Object(i.createElement)("div",{className:"".concat("novablocks-collection","__layout")},e.children))))},q=function(e){return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(V,e),Object(i.createElement)(J,e))},Q={Component:function(e){return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(X,e),Object(i.createElement)(K,e))},attributes:{align:{type:"string",default:"full"},contentAlign:{type:"string",default:"left"},level:{type:"number",default:2},collectionTitleLevel:{type:"number",default:2},cardTitleLevel:{type:"number",default:3},metadataPosition:{type:"string",default:"above-title"},primaryMetadata:{type:"string",default:"category"},secondaryMetadata:{type:"string",default:"date"},imageResizing:{type:"string",default:"cropped"},containerHeight:{type:"number",default:50},thumbnailAspectRatioString:{type:"string",default:"landscape"},thumbnailAspectRatio:{type:"number",default:50},imagePadding:{type:"number",default:0},title:{type:"string",default:"Latest Posts"},subtitle:{type:"string",default:"A collection of our latest articles displayed in a cohesive layout"},showCollectionTitle:{type:"boolean",default:!0},showCollectionSubtitle:{type:"boolean",default:!0},showMedia:{type:"boolean",default:!0},showTitle:{type:"boolean",default:!0},showSubtitle:{type:"boolean",default:!1},showDescription:{type:"boolean",default:!0},showButtons:{type:"boolean",default:!0},showMeta:{type:"boolean",default:!1}}};function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Z=r(50),$=r(12);function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=function(e){return e.gridcolumns},ne=function(e){return e.gridcolumns-e.featuresize+1},oe=function(e){return Math.max(0,Math.pow(2,e.gridcolumns-e.featuresize-1)-1)},ae=function(e,t,r){return Math.min(Math.max(t,e),r)},ie=function(){var e=Object(s.getRandomBetween)(3,20),t=Object(s.getRandomBetween)(2,6),r=Object(s.getRandomBetween)(2,12),n=Math.ceil(.75*t),o=Object(s.getRandomBetween)(1,n),a=t-o+1,i=Object(s.getRandomBetween)(1,a),l=Math.max(0,Math.pow(2,t-o-1)-1);return{layoutStyle:"parametric",postsToShow:e,automaticPostsNumber:!0,gridcolumns:t,gridrows:r,featuresize:o,featureposition:i,fragmentation:Object(s.getRandomBetween)(0,l),imageweightleft:Object(s.getRandomBetween)(0,10),imageweightright:Object(s.getRandomBetween)(0,10),metadetailsleft:Object(s.getRandomBetween)(0,10),metadetailsright:Object(s.getRandomBetween)(0,10),boostfeature:Object(s.getRandomBooleanValue)(),subfeature:Object(s.getRandomBooleanValue)(),balancemdandiw:Object(s.getRandomBooleanValue)(),hierarchycrossing:Object(s.getRandomBetween)(0,200),flipcolsrows:Object(s.getRandomBooleanValue)(),headerPosition:Object(s.getRandomBetween)(0,1)}},le=function(e){var t=e.attributes,r=t.columns,n=t.isLandscape,o=e.setAttributes;return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Cards Count")},Object(i.createElement)(ce,e),Object(i.createElement)(W.RangeControl,{key:"posts-collection-display-controls",value:r,onChange:function(e){return o({columns:e})},label:Object(U.__)("Columns"),min:1,max:4})),Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Card Layout")},Object(i.createElement)(W.RadioControl,{key:"novablocks-card-layout-controls",selected:n?"landscape":"portrait",className:"novablocks-card-layout",onChange:function(e){o({isLandscape:"landscape"===e})},options:[{label:"Vertical",value:"portrait"},{label:"Horizontal",value:"landscape"}]})))},ce=function(e){var t=e.attributes.postsToShow,r=e.setAttributes;return Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Number of Items","__plugin_txtd"),value:t,onChange:function(e){r({postsToShow:e,tempPostsToShow:e,automaticPostsNumber:!1})},min:1,max:20})},se=function(e){var t=e.headerColumn,r=P(e),n=p(r);return te(te({},e),{},{headerPosition:n[t]})},ue=function(e){var t=e.attributes,r=t.featuresize,n=t.featureposition,o=t.fragmentation,a=t.gridcolumns,l=t.gridrows,c=t.imageweightleft,u=t.imageweightright,g=t.metadetailsleft,f=t.metadetailsright,b=t.boostfeature,h=t.subfeature,w=t.balancemdandiw,O=t.hierarchycrossing,v=t.flipcolsrows,j=t.automaticPostsNumber,_=t.postsToShow,y=t.headerPosition,C=t.headerColumn,E=t.showCollectionTitle,k=t.showCollectionSubtitle,R=t.tempPostsToShow||_,S=function(r){var n=function(e,t){var r=te(te({},t),e);return r.featuresize=ae(r.featuresize,1,re(r)),r.featureposition=ae(r.featureposition,1,ne(r)),r.fragmentation=ae(r.fragmentation,0,oe(r)),r}(r,t);e.setAttributes(n)},x=P(t),G=m(x),T=p(x);return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(de,e),Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Grid Anatomy")},Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Columns","__plugin_txtd"),value:a,onChange:function(e){Object($.isUndefined)(e)||S({gridcolumns:e})},min:1,max:12}),Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Rows","__plugin_txtd"),value:l,onChange:function(e){Object($.isUndefined)(e)||S({gridrows:e})},min:1,max:12})),Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Breaking the Grid")},Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Featured Area Size","__plugin_txtd"),value:r,onChange:function(e){Object($.isUndefined)(e)||S({featuresize:e})},min:1,max:re(t)}),Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Featured Area Position","__plugin_txtd"),value:n,onChange:function(e){Object($.isUndefined)(e)||S({featureposition:e})},min:1,max:ne(t)}),Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Grid Areas Fragmentation","__plugin_txtd"),value:o,onChange:function(e){Object($.isUndefined)(e)||S({fragmentation:e})},min:0,max:oe(t)}),Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Grid Areas Crossing","__plugin_txtd"),value:O,onChange:function(e){Object($.isUndefined)(e)||S({hierarchycrossing:e})},min:0,max:200})),Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Items Count")},Object(i.createElement)("div",{className:Object(s.getControlsClasses)(t,(function(e){var t=e.automaticPostsNumber,r=e.postsToShow;return{postsToShow:t?-1:r}}))},Object(i.createElement)(ce,e)),Object(i.createElement)(W.ToggleControl,{label:Object(U.__)("Auto-count Items Number","__plugin_txtd"),checked:j,onChange:function(e){S({postsToShow:e?G:R,tempPostsToShow:_,automaticPostsNumber:e})}})),Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Items Regularity")},Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Start of Image Variance","__plugin_txtd"),value:c,onChange:function(e){Object($.isUndefined)(e)||S({imageweightleft:e})},min:0,max:10}),Object(i.createElement)(W.RangeControl,{label:Object(U.__)("End of Image Variance","__plugin_txtd"),value:u,onChange:function(e){Object($.isUndefined)(e)||S({imageweightright:e})},min:0,max:10}),Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Start of Meta Fidelity","__plugin_txtd"),value:g,onChange:function(e){Object($.isUndefined)(e)||S({metadetailsleft:e})},min:0,max:10}),Object(i.createElement)(W.RangeControl,{label:Object(U.__)("End of Meta Fidelity","__plugin_txtd"),value:f,onChange:function(e){Object($.isUndefined)(e)||S({metadetailsright:e})},min:0,max:10})),Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Miscellanous Parameters")},Object(i.createElement)(W.ToggleControl,{label:Object(U.__)("Boost Featured Area Emphasis","__plugin_txtd"),checked:b,onChange:function(){S({boostfeature:!b})}}),Object(i.createElement)(W.ToggleControl,{label:Object(U.__)("Display Sub-featured Area","__plugin_txtd"),checked:h,onChange:function(){S({subfeature:!h})}}),Object(i.createElement)(W.ToggleControl,{label:Object(U.__)("Balance Meta and Image","__plugin_txtd"),checked:w,onChange:function(){S({balancemdandiw:!w})}}),Object(i.createElement)(W.ToggleControl,{label:Object(U.__)("Flip Cols and Rows","__plugin_txtd"),checked:v,onChange:function(){S({flipcolsrows:!v})}})),(E||k)&&Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Block Header")},Object(i.createElement)(W.RangeControl,{label:Object(U.__)("Header Placement Area","__plugin_txtd"),value:y,onChange:function(e){S({headerPosition:e})},min:0,max:_+1}),Object(i.createElement)("div",{key:"header-position-customize-1",className:Object(s.getControlsClasses)(t,se)},Object(i.createElement)(W.RangeControl,{value:C,onChange:function(e){var r=se(te(te({},t),{},{headerColumn:e}));S(r)},label:Object(U.__)("Header Item Location"),min:0,max:T.length-1}))))},de=Object(d.withSettings)((function(e){var t=e.attributes,r=t.toggleScale,n=t.toggleMask,o=e.setAttributes,a=e.settings;return(null==a?void 0:a.debug)?Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Debug Parameters")},Object(i.createElement)(W.ToggleControl,{label:Object(U.__)("Display Preview Scale","__plugin_txtd"),checked:r,onChange:function(){return o({toggleScale:!r})}}),Object(i.createElement)(W.ToggleControl,{label:Object(U.__)("Display Preview Mask","__plugin_txtd"),checked:n,onChange:function(){return o({toggleMask:!n})}})):null})),ge=function(e){var t=e.attributes.layoutStyle,r=e.setAttributes;return Object(i.createElement)(d.ControlsSection,{label:Object(U.__)("Grid Layout"),priority:100},Object(i.createElement)(d.ControlsTab,{label:Object(U.__)("General")},Object(i.createElement)(d.PresetControl,{key:"novablocks-collection-layout-preset",label:Object(U.__)("Choose a layout preset:","__plugin_txtd"),options:[{label:"L27: Brancusi",value:"tear2down7",preset:{layoutStyle:"parametric",postsToShow:6,gridcolumns:6,gridrows:6,featuresize:4,featureposition:1,fragmentation:1,imageweightleft:1,imageweightright:2,metadetailsleft:10,metadetailsright:6,boostfeature:!1,subfeature:!0,balancemdandiw:!1,hierarchycrossing:30,flipcolsrows:!1,headerPosition:0}},{label:"L47: Kafka",value:"tear4down7",preset:{layoutStyle:"parametric",postsToShow:6,gridcolumns:12,gridrows:8,featuresize:7,featureposition:3,fragmentation:0,imageweightleft:1,imageweightright:0,metadetailsleft:0,metadetailsright:10,boostfeature:!0,subfeature:!0,balancemdandiw:!1,hierarchycrossing:153,flipcolsrows:!1,headerPosition:0}},{label:"L13: Aristotle",value:"tear1down3",preset:{layoutStyle:"parametric",postsToShow:6,gridcolumns:5,gridrows:4,featuresize:2,featureposition:2,fragmentation:0,imageweightleft:1,imageweightright:0,metadetailsleft:6,metadetailsright:3,boostfeature:!1,subfeature:!1,balancemdandiw:!1,hierarchycrossing:0,flipcolsrows:!1,headerPosition:0}},{label:"L19: Nietzsche",value:"tear1down9",preset:{layoutStyle:"parametric",postsToShow:11,gridcolumns:6,gridrows:5,featuresize:3,featureposition:2,fragmentation:2,imageweightleft:1,imageweightright:0,metadetailsleft:0,metadetailsright:0,boostfeature:!1,subfeature:!0,balancemdandiw:!1,hierarchycrossing:0,flipcolsrows:!1,headerPosition:0}},{label:"L23: Popper",value:"tear1down9bis",preset:{layoutStyle:"parametric",postsToShow:11,gridcolumns:7,gridrows:5,featuresize:3,featureposition:3,fragmentation:2,imageweightleft:1,imageweightright:0,metadetailsleft:0,metadetailsright:0,boostfeature:!1,subfeature:!0,balancemdandiw:!1,hierarchycrossing:0,flipcolsrows:!1,containerHeight:45,headerPosition:0}},{label:"L10: Tolstoy",value:"tear1down0",preset:{layoutStyle:"parametric",postsToShow:10,gridcolumns:10,gridrows:6,featuresize:3,featureposition:6,fragmentation:0,imageweightleft:1,imageweightright:0,metadetailsleft:0,metadetailsright:0,boostfeature:!1,subfeature:!1,balancemdandiw:!1,hierarchycrossing:0,flipcolsrows:!1,headerPosition:0}},{label:"L15: Asimov",value:"tear1down5",preset:{layoutStyle:"parametric",postsToShow:7,gridcolumns:6,gridrows:6,featuresize:2,featureposition:4,fragmentation:0,imageweightleft:8,imageweightright:2,metadetailsleft:7,metadetailsright:2,boostfeature:!1,subfeature:!1,balancemdandiw:!1,hierarchycrossing:0,flipcolsrows:!1,headerPosition:0}},{label:"L45: Orwell",value:"tear4down5",preset:{layoutStyle:"parametric",postsToShow:13,gridcolumns:8,gridrows:6,featuresize:4,featureposition:1,fragmentation:2,imageweightleft:8,imageweightright:8,metadetailsleft:7,metadetailsright:2,boostfeature:!1,subfeature:!1,balancemdandiw:!1,hierarchycrossing:120,flipcolsrows:!1,headerPosition:0}},{label:"L12: Dostoevsky",value:"tear1down2",preset:{layoutStyle:"parametric",postsToShow:7,gridcolumns:6,gridrows:4,featuresize:3,featureposition:1,fragmentation:2,imageweightleft:1,imageweightright:0,metadetailsleft:7,metadetailsright:0,boostfeature:!1,subfeature:!1,balancemdandiw:!1,hierarchycrossing:50,flipcolsrows:!1,headerPosition:0}},{label:"L32: Eliade",status:"development",value:"tear3down2",preset:{layoutStyle:"parametric",postsToShow:8,gridcolumns:4,gridrows:8,featuresize:2,featureposition:2,fragmentation:0,imageweightleft:1,imageweightright:0,metadetailsleft:0,metadetailsright:3,boostfeature:!1,subfeature:!0,balancemdandiw:!1,hierarchycrossing:0,flipcolsrows:!1,headerPosition:0}},{label:"L30: Tolkien",value:"tear3down0",preset:{layoutStyle:"parametric",postsToShow:5,gridcolumns:4,gridrows:8,featuresize:2,featureposition:2,fragmentation:0,imageweightleft:1,imageweightright:0,metadetailsleft:0,metadetailsright:3,boostfeature:!1,subfeature:!0,balancemdandiw:!1,hierarchycrossing:0,flipcolsrows:!1,headerPosition:0}},{label:"L03: Dumas",value:"tear0down3",preset:{layoutStyle:"classic",postsToShow:6,columns:3}}],randomize:ie})),Object(i.createElement)(d.ControlsTab,{label:Object(U.__)("Settings")},Object(i.createElement)(d.ControlsGroup,{title:Object(U.__)("Grid Anatomy")},Object(i.createElement)(W.RadioControl,{key:"novablocks-collection-layout-style-controls",selected:t,className:"novablocks-collection-layout",onChange:function(e){r({layoutStyle:e})},options:[{label:"Parametric Grid",value:"parametric"},{label:"Classic Grid",value:"classic"}]})),"classic"===t&&Object(i.createElement)(le,e),"parametric"===t&&Object(i.createElement)(ue,e)))},fe=r(8),me=r(7),be=["novablocks/posts-collection"],pe=Object(fe.createHigherOrderComponent)((function(e){return function(t){return be.includes(t.name)?Object(i.createElement)(i.Fragment,null,Object(i.createElement)(e,t),Object(i.createElement)(ge,t)):Object(i.createElement)(e,t)}}));function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(me.addFilter)("editor.BlockEdit","novablocks/with-grid-generator-controls",pe),Object(me.addFilter)("blocks.registerBlockType","novablocks/add-emphasis-level-attributes",(function(e){return be.includes(e.name)?(void 0===e.attributes&&(e.attributes={}),e.attributes=Object.assign(e.attributes,Z),e):e}));var Oe={ClassicLayoutPreview:function(e){var t=e.attributes,r=e.posts,n=t.columns,o=t.isLandscape,l=t.showMedia,c=t.showMeta,s=t.showTitle,g=t.showDescription,f=t.showButtons,m=t.postsToShow,b={"--columns":n},p={placeholder:!0,hasFixedAspectRatio:!0,isLandscape:o,showMedia:l,showMeta:c,showTitle:s,showContent:g,showButtons:f};return Object(i.createElement)(K,Object(a.a)({hasAppender:!1},e),Object(i.createElement)("div",{className:"block-editor-inner-blocks"},Object(i.createElement)("div",{className:"block-editor-block-list__layout",style:b},!!r&&r.map((function(e,r){return Object(i.createElement)(d.PostCard,{key:r,post:e,isLandscape:o,attributes:t})})),!r&&Array.from(Array(m).keys()).map((function(e,t){return Object(i.createElement)(u.Card,Object(a.a)({key:t},p))})))))},ParametricLayoutPreview:function(e){var t=e.attributes,r=e.getContent,n=e.cardsCount,a=t.toggleScale,l=t.toggleMask,u=t.thumbnailAspectRatio,d=t.imagePadding,m=t.imageResizing,p=t.headerPosition,h=c()("novablocks-grid",{"novablocks-grid--scaled":a,"novablocks-grid--mask":l}),v=P(t),j=0;b(v,n,t);var _=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"--card-media-padding":d,"--card-media-padding-top":Object(s.getCardMediaPaddingTop)(u),"--card-media-object-fit":"cropped"===m?"cover":"scale-down"},f(t));return Object(i.createElement)("div",{className:"wp-block-group__inner-container"},0===p&&Object(i.createElement)(q,e),Object(i.createElement)("div",{className:"novablocks-collection__cards block-editor-block-list__block"},Object(i.createElement)("div",{className:"novablocks-collection__layout"},Object(i.createElement)("div",{className:h,style:_},!!v&&v.map((function(e){var n=e.areas,o=e.row,a=e.col,l={gridColumnStart:a,gridColumnEnd:a+e.width,gridRowStart:o,gridRowEnd:o+e.height};return Object(i.createElement)("div",{className:"novablocks-grid__column",style:l},n.map((function(e){return j+=e.postsCount,Object(i.createElement)("div",{className:O(e,t)},Object(i.createElement)(g,{area:e}),Array.from(Array(e.postsCount).keys()).map((function(n){var o=w(e,t);return r(j-e.postsCount+n,t,o)})))})))}))))))},utils:we(we({},n),{},{applyLayoutEngine:P})};r.d(t,"GridGenerator",(function(){return Oe})),r.d(t,"Collection",(function(){return Q})),r.d(t,"CollectionHeader",(function(){return q})),r.d(t,"CollectionPreview",(function(){return K})),r.d(t,"CollectionTitle",(function(){return V})),r.d(t,"CollectionSubtitle",(function(){return J}))},8:function(e,t){!function(){e.exports=this.wp.compose}()}});