!function(e){var t={};function r(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(l,o,function(t){return e[t]}.bind(null,o));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=111)}({0:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},111:function(e,t,r){"use strict";var l=r(0);r(32);var o=l(r(52)),n=r(33);!function(e,t,r){function l(e,t){return JSON.parse(JSON.stringify(e).replace(/%ACCENT_COLOR%/g,t))}!function(){var r,a;if("undefined"==typeof google||void 0===google.maps)return;e(".js-novablocks-google-map").each((function(t,r){var a=e(r),s=a.data("accent-color"),i=a.data("markers"),u=a.data("show-labels"),f=a.data("show-icons"),c=l(a.data("styles"),s),d=a.data("zoom"),p=!a.data("controls"),y={mapTypeId:"roadmap",center:(0,n.getCenterFromMarkers)(i),zoom:d,styles:(0,n.addVisibilityToStyles)(c,u,f),disableDefaultUI:p,clickableIcons:!1,keyboardShortcuts:!1},g=new google.maps.Map(r,y),m=o.default.replace(/%ACCENT_COLOR%/g,s),v=i.map((function(e){var t=JSON.parse(e);return new google.maps.Marker({map:g,icon:{url:"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(m)},title:t.title,position:t.geometry.location})}));a.data("map",g),a.data("mapMarkers",v)}));var s=null==t||null===(r=t.parent)||void 0===r||null===(a=r.wp)||void 0===a?void 0:a.customize;s&&s("sm_color_primary").bind((function(t){e(".js-novablocks-google-map").each((function(r,a){var s=e(a),i=s.data("map"),u=s.data("mapMarkers"),f=l(s.data("styles"),t),c=s.data("show-labels"),d=s.data("show-icons"),p=o.default.replace(/%ACCENT_COLOR%/g,t);i.setOptions({styles:(0,n.addVisibilityToStyles)(f,c,d)}),u.forEach((function(e){e.setOptions({icon:{url:"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(p)}})}))}))}))}()}(jQuery,window)},32:function(e,t){!function(){e.exports=this.novablocks["doppler/frontend"]}()},33:function(e,t,r){"use strict";var l=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.getMarkersCenter=t.getCenterFromMarkers=t.getMapAccentColor=t.getMapStyles=t.compileStyles=t.addVisibilityToStyles=void 0;var o=l(r(34)),n=l(r(41));t.addVisibilityToStyles=function(e,t,r){return t||e.unshift({elementType:"labels.text",stylers:[{visibility:"off"}]}),r||e.unshift({elementType:"labels.icon",stylers:[{visibility:"off"}]}),e};var a=function(e){var t=s.call(this),r=JSON.stringify(e).replace(/%ACCENT_COLOR%/g,t);return JSON.parse(r)};t.compileStyles=a;t.getMapStyles=function(){var e=this.props.attributes,t=e.styleData,r=e.styleSlug,l="original"!==r&&0!==t.length,o=n.default.find((function(e){return e.slug===r})),s=o?o.styles:{};return a.call(this,l&&s||t)};var s=function(){var e,t,r;return(null==this||null===(e=this.props)||void 0===e||null===(t=e.settings)||void 0===t||null===(r=t.map)||void 0===r?void 0:r.accentColor)||"#222222"};t.getMapAccentColor=s;var i=function(e){if("undefined"==typeof google||void 0===google.maps)return o.default;var t=new google.maps.LatLngBounds;if(1===e.length){var r=JSON.parse(e[0]);return new google.maps.LatLng(r.geometry.location)}return e.forEach((function(e){var r=JSON.parse(e);r.geometry&&(r.geometry.viewport?t.union(r.geometry.viewport):t.extend(r.geometry.location))})),t.getCenter()};t.getCenterFromMarkers=i;t.getMarkersCenter=function(){return i(this.props.attributes.markers)}},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={lat:47.1665264,lng:27.58285479999995};t.default=l},41:function(e,t,r){"use strict";var l=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=[{slug:"customized",label:"Customized",styles:l(r(53)).default},{slug:"original",label:"Original",styles:[]}];t.default=o},52:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default='<svg width="62" height="75" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 62 75">\n\t<defs>\n\t\t<path id="b" d="M31 69s27-18 27-40C58 14.088 46 2 31 2S4 14.088 4 29c0 22 27 40 27 40zm7.725-31.206c-4.26 4.275-11.264 4.275-15.53 0-4.26-4.277-4.26-11.305 0-15.587 4.26-4.276 11.265-4.276 15.53 0 4.367 4.282 4.367 11.304 0 15.587z"></path>\n\t\t<filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">\n\t\t\t<feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n\t\t\t<feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></feGaussianBlur>\n\t\t\t<feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>\n\t\t</filter>\n\t</defs>\n\t<g fill="none" fillRule="evenodd">\n\t\t<use fill="#000" filter="url(#a)" xlink:href="#b" style="display:none"></use>\n\t\t<use fill="%ACCENT_COLOR%" xlink:href="#b"></use>\n\t</g>\n</svg>'},53:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{saturation:-100},{lightness:60}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"%ACCENT_COLOR%"},{lightness:90}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"%ACCENT_COLOR%"},{saturation:-25},{lightness:70}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{lightness:30}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"%ACCENT_COLOR%"},{lightness:60}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{saturation:-100}]}]}});