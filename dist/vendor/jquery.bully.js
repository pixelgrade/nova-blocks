/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vendor/jquery.bully.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/vendor/jquery.bully.js":
/*!************************************!*\
  !*** ./src/vendor/jquery.bully.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * jQuery Bully Plugin v0.1.3\n * Examples and documentation at http://pixelgrade.github.io/rellax/\n * Copyright (c) 2016 PixelGrade http://www.pixelgrade.com\n * Licensed under MIT http://www.opensource.org/licenses/mit-license.php/\n */\n;(\n\tfunction( $, window, document, undefined ) {\n\n\t\tvar $window = $( window ),\n\t\t\twindowHeight = $window.height(),\n\t\t\telements = [],\n\t\t\t$bully,\n\t\t\tlastScrollY = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0),\n\t\t\tcurrent = 0,\n\t\t\tinversed = false,\n\t\t\tframeRendered = true;\n\n\t\t$bully = $( '<div class=\"c-bully\">' ).appendTo( 'body' );\n\t\t$current = $( '<div class=\"c-bully__bullet c-bully__bullet--active\">' ).appendTo( $bully );\n\n\t\t(\n\t\t\tfunction update() {\n\t\t\t\tif ( frameRendered !== true ) {\n\n\t\t\t\t\tvar count = 0,\n\t\t\t\t\t\tinverse = false;\n\n\t\t\t\t\t$.each( elements, function( i, element ) {\n\t\t\t\t\t\tif ( lastScrollY >= element.offset.top - windowHeight / 2 ) {\n\t\t\t\t\t\t\tcount = count + 1;\n\t\t\t\t\t\t\tinverse = lastScrollY < element.offset.top + element.height - windowHeight / 2;\n\t\t\t\t\t\t}\n\t\t\t\t\t} );\n\n\t\t\t\t\tif ( inversed !== inverse ) {\n\t\t\t\t\t\tinversed = inverse;\n\t\t\t\t\t\t$bully.toggleClass( 'c-bully--inversed', inversed );\n\t\t\t\t\t}\n\n\t\t\t\t\tif ( count !== current ) {\n\t\t\t\t\t\tvar offset = $bully.children( '.c-bully__bullet' ).not( '.c-bully__bullet--active' ).first().outerHeight( true ) * (\n\t\t\t\t\t\t\tcount - 1\n\t\t\t\t\t\t);\n\t\t\t\t\t\t$current.removeClass( 'c-bully__bullet--squash' );\n\t\t\t\t\t\tsetTimeout( function() {\n\t\t\t\t\t\t\t$current.addClass( 'c-bully__bullet--squash' );\n\t\t\t\t\t\t} );\n\t\t\t\t\t\t$current.css( 'top', offset );\n\t\t\t\t\t\tcurrent = count;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\twindow.requestAnimationFrame( update );\n\t\t\t\tframeRendered = true;\n\t\t\t}\n\t\t)();\n\n\t\tfunction reloadAll() {\n\t\t\t$.each( elements, function( i, element ) {\n\t\t\t\telement._reloadElement();\n\t\t\t} );\n\t\t}\n\n\t\tfunction staggerClass( $elements, classname, timeout ) {\n\n\t\t\t$.each( $elements, function( i, obj ) {\n\n\t\t\t\tvar stagger = i * timeout;\n\n\t\t\t\tsetTimeout( function() {\n\t\t\t\t\tobj.$bullet.addClass( classname );\n\t\t\t\t}, stagger );\n\t\t\t} );\n\t\t}\n\n\t\t$window.on( 'load', function( e ) {\n\t\t\tstaggerClass( elements, 'c-bully__bullet--pop', 400 );\n\t\t\tframeRendered = false;\n\t\t} );\n\n\t\t$window.on( 'scroll', function( e ) {\n\t\t\tif ( frameRendered === true ) {\n\t\t\t\tlastScrollY = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);\n\t\t\t}\n\t\t\tframeRendered = false;\n\t\t} );\n\n\t\t$window.on( 'load resize', function() {\n\t\t\treloadAll();\n\t\t} );\n\n\t\tfunction Bully( element, options ) {\n\t\t\tthis.element = element;\n\t\t\tthis.options = $.extend( {}, $.fn.bully.defaults, options );\n\n\t\t\tvar self = this,\n\t\t\t\t$bullet = $( '<div class=\"c-bully__bullet\">' );\n\n\t\t\t$bullet.data( 'bully-data', self ).appendTo( $bully );\n\t\t\t$bullet.on( 'click', function( event ) {\n\t\t\t\tevent.preventDefault();\n\t\t\t\tevent.stopPropagation();\n\n\t\t\t\tself.onClick();\n\t\t\t} );\n\n\t\t\tthis.$bullet = $bullet;\n\n\t\t\tself._reloadElement();\n\t\t\telements.push( self );\n\t\t\tcurrent = 0;\n\t\t}\n\n\t\tBully.prototype = {\n\t\t\tconstructor: Bully,\n\t\t\t_reloadElement: function() {\n\t\t\t\tthis.offset = $( this.element ).offset();\n\t\t\t\tthis.height = $( this.element ).outerHeight();\n\t\t\t},\n\t\t\tonClick: function() {\n\n\t\t\t\tvar self = this,\n\t\t\t\t\t$target = $( 'html, body' );\n\n\t\t\t\tif ( self.options.scrollDuration == 0 ) {\n\t\t\t\t\t$target.scrollTop( self.offset.top );\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif ( self.options.scrollDuration === 'auto' ) {\n\t\t\t\t\tvar duration = Math.abs( lastScrollY - self.offset.top ) / (\n\t\t\t\t\t               self.options.scrollPerSecond / 1000\n\t\t\t\t\t);\n\t\t\t\t\t$target.animate( {scrollTop: self.offset.top}, duration );\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t$target.animate( {scrollTop: self.offset.top}, self.options.scrollDuration );\n\t\t\t}\n\t\t};\n\n\t\t$.fn.bully = function( options ) {\n\t\t\treturn this.each( function() {\n\t\t\t\tif ( ! $.data( this, \"plugin_\" + Bully ) ) {\n\t\t\t\t\t$.data( this, \"plugin_\" + Bully, new Bully( this, options ) );\n\t\t\t\t}\n\t\t\t} );\n\t\t};\n\n\t\t$.fn.bully.defaults = {\n\t\t\tscrollDuration: 'auto',\n\t\t\tscrollPerSecond: 4000\n\t\t};\n\n\t\t$window.on( 'rellax load', reloadAll );\n\n\n\t}\n)( jQuery, window, document );\n\n\n//# sourceURL=webpack:///./src/vendor/jquery.bully.js?");

/***/ })

/******/ });