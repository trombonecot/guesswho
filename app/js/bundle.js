/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _imagesApi = __webpack_require__(2);

	var _imagesApi2 = _interopRequireDefault(_imagesApi);

	var _enigma = __webpack_require__(3);

	var _enigma2 = _interopRequireDefault(_enigma);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.onload = function () {

	  var imagesApi = new _imagesApi2.default();
	  var imageSrc = imagesApi.getImageMocked();

	  console.log(document);

	  var contenidor = document.getElementById("contenidor");
	  contenidor.setAttribute("src", imageSrc);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImagesApi = function () {
	  function ImagesApi() {
	    _classCallCheck(this, ImagesApi);

	    this.name = 'Images';
	  }

	  _createClass(ImagesApi, [{
	    key: 'getImage',
	    value: function getImage(name) {
	      var xhr = new XMLHttpRequest();
	      xhr.open("GET", 'http://www.faroo.com/api?q=' + name + '&start=1&length=10&l=en&src=web&f=json', false);
	      xhr.send();
	      console.log(xhr.status);
	      console.log(xhr);
	    }
	  }, {
	    key: 'getImageMocked',
	    value: function getImageMocked(name) {
	      return 'https://ugc.kn3.net/i/origin/https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/02/08/donald-trump-3.jpg';
	    }
	  }]);

	  return ImagesApi;
	}();

	exports.default = ImagesApi;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Enigma = function () {
	  function Enigma(number, src) {
	    _classCallCheck(this, Enigma);

	    this.number = number;
	    this.src = src;

	    var matrix = [];
	    for (var i = 0; i < number; i++) {
	      matrix[i] = [];
	      for (var j = 0; j < number; j++) {
	        matrix[i][j] = false;
	      }
	    }

	    this.map = matrix;
	  }

	  _createClass(Enigma, [{
	    key: "discoverTile",
	    value: function discoverTile(x, y) {
	      this.map[x][y] = true;
	    }
	  }]);

	  return Enigma;
	}();

/***/ }
/******/ ]);