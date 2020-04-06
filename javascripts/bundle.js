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
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascripts/controller.js":
/*!***********************************!*\
  !*** ./javascripts/controller.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.keys = {
      up: new Controller.ButtonInput(),
      right: new Controller.ButtonInput(),
      down: new Controller.ButtonInput(),
      left: new Controller.ButtonInput()
    };
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
  }

  _createClass(Controller, [{
    key: "handleKeyChange",
    value: function handleKeyChange(eventType, keyCode) {
      var keyDown = eventType === "keydown";

      switch (keyCode) {
        case 87:
          this.keys.up.setActive(keyDown);
          break;

        case 68:
          this.keys.right.setActive(keyDown);
          break;

        case 83:
          this.keys.down.setActive(keyDown);
          break;

        case 65:
          this.keys.left.setActive(keyDown);
          break;
      } // console.log(this.keys);

    }
  }, {
    key: "handleClickChange",
    value: function handleClickChange(e) {}
  }]);

  return Controller;
}();

Controller.ButtonInput = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);

    this.active = false;
  }

  _createClass(_class, [{
    key: "setActive",
    value: function setActive(keyDown) {
      this.active = keyDown;
    }
  }]);

  return _class;
}();

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./javascripts/display/display.js":
/*!****************************************!*\
  !*** ./javascripts/display/display.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tilesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tilesheet */ "./javascripts/display/tilesheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Display = /*#__PURE__*/function () {
  function Display(canvas) {
    _classCallCheck(this, Display);

    this.buffer = document.createElement("canvas").getContext("2d");
    this.context = canvas.getContext("2d");
    this.tileSheet = new _tilesheet__WEBPACK_IMPORTED_MODULE_0__["default"]({
      size: 16,
      cols: 32,
      src: "./tileset/0x72_DungeonTilesetII_v1.3.png"
    });
    this.handleResize = this.handleResize.bind(this);
    this.renderColor = this.renderColor.bind(this);
    this.drawSquare = this.drawSquare.bind(this);
    this.render = this.render.bind(this);
  }

  _createClass(Display, [{
    key: "renderColor",
    value: function renderColor(color) {
      this.buffer.fillStyle = color;
      this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);
    }
  }, {
    key: "drawSquare",
    value: function drawSquare(_ref) {
      var x = _ref.x,
          y = _ref.y,
          width = _ref.width,
          height = _ref.height;
      // console.log(x, y);
      this.buffer.fillStyle = "white";
      this.buffer.fillRect(Math.round(x), Math.round(y), width, height);
    }
  }, {
    key: "drawMap",
    value: function drawMap(map) {
      var _this = this;

      var size = this.tileSheet.size;
      map.forEach(function (row, i) {
        row.forEach(function (tile, j) {
          // coordinates of tile in tilesheet
          var tileX = tile % _this.tileSheet.cols * size;
          var tileY = Math.floor(tile / _this.tileSheet.cols) * size; // coordinates to place tile in buffer canvas

          var bufferX = j * size;
          var bufferY = i * size;

          _this.buffer.drawImage(_this.tileSheet.image, tileX, tileY, size, size, bufferX, bufferY, size, size);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);
    }
  }, {
    key: "handleResize",
    value: function handleResize(width, height, worldRatio) {
      if (height / width > worldRatio) {
        this.context.canvas.height = width * worldRatio;
        this.context.canvas.width = width;
      } else {
        this.context.canvas.height = height;
        this.context.canvas.width = height / worldRatio;
      }

      this.context.imageSmoothingEnabled = false;
    }
  }]);

  return Display;
}();

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./javascripts/display/tilesheet.js":
/*!******************************************!*\
  !*** ./javascripts/display/tilesheet.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TileSheet = /*#__PURE__*/function () {
  function TileSheet(_ref) {
    var size = _ref.size,
        cols = _ref.cols,
        src = _ref.src;

    _classCallCheck(this, TileSheet);

    this.size = size;
    this.cols = cols;
    this.image = new Image();
    this.src = src;
  }

  _createClass(TileSheet, [{
    key: "loadImage",
    value: function loadImage() {
      this.image.src = this.src;
    }
  }]);

  return TileSheet;
}();

/* harmony default export */ __webpack_exports__["default"] = (TileSheet);

/***/ }),

/***/ "./javascripts/engine.js":
/*!*******************************!*\
  !*** ./javascripts/engine.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// fixed time step game loop
//   ensures that game gets updated at constant rate
var Engine = /*#__PURE__*/function () {
  function Engine(timeStep, update, render) {
    _classCallCheck(this, Engine);

    this.accumulatedTime = 0;
    this.animationFrameRequest = undefined;
    this.time = undefined;
    this.timeStep = timeStep;
    this.updated = false;
    this.update = update;
    this.render = render;
    this.run = this.run.bind(this);
    this.run = this.run.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  _createClass(Engine, [{
    key: "run",
    value: function run(timeStamp) {
      // request next frame
      this.animationFrameRequest = window.requestAnimationFrame(this.run); // update accumulated time, time

      this.accumulatedTime += timeStamp - this.time;
      this.time = timeStamp; // if accumulated time is too large, only create one update
      // this prevents a memory spiral

      if (this.accumulatedTime >= this.timeStep * 3) {
        this.accumulatedTime = this.timeStep;
      } // update game state


      while (this.accumulatedTime >= this.timeStep) {
        this.accumulatedTime -= this.timeStep;
        this.update(timeStamp);
        this.updated = true;
      } // if game state has been updated, render
      // not in while loop since this would cause multiple renders


      if (this.updated) {
        this.updated = false;
        this.render(timeStamp);
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.accumulatedTime = this.timeStep;
      this.time = window.performance.now();
      this.animationFrameRequest = window.requestAnimationFrame(this.run);
    }
  }, {
    key: "stop",
    value: function stop() {
      window.cancelAnimationFrame(this.animationFrameRequest);
    }
  }]);

  return Engine;
}();

/* harmony default export */ __webpack_exports__["default"] = (Engine);

/***/ }),

/***/ "./javascripts/game/bullet.js":
/*!************************************!*\
  !*** ./javascripts/game/bullet.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./javascripts/game/entities.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Bullet = /*#__PURE__*/function (_Entities) {
  _inherits(Bullet, _Entities);

  var _super = _createSuper(Bullet);

  function Bullet(movement) {
    var _this;

    _classCallCheck(this, Bullet);

    _this = _super.call(this, movement); // this.spawnTime = spawnTime;
    // this.expirationTime = 5000;

    _this.expired = false;
    window.setTimeout(function () {
      return _this.expired = true;
    }, 1000);
    return _this;
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update() {
      // debugger
      // console.log(this.movement)
      _entities__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.update.call(this, 1);
    }
  }, {
    key: "isExpired",
    value: function isExpired() {
      // return (currentTime - this.spawnTime) > this.expirationTime;
      return this.expired;
    }
  }]);

  return Bullet;
}(_entities__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Bullet);

/***/ }),

/***/ "./javascripts/game/entities.js":
/*!**************************************!*\
  !*** ./javascripts/game/entities.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entities = /*#__PURE__*/function () {
  function Entities(_ref) {
    var posX = _ref.posX,
        posY = _ref.posY,
        velX = _ref.velX,
        velY = _ref.velY;

    _classCallCheck(this, Entities);

    this.movement = {
      posX: posX,
      posY: posY,
      velX: velX,
      velY: velY
    };
    this.moveUp = this.moveUp.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.update = this.update.bind(this);
  }

  _createClass(Entities, [{
    key: "moveUp",
    value: function moveUp(vel) {
      this.movement.velY -= vel;
    }
  }, {
    key: "moveRight",
    value: function moveRight(vel) {
      this.movement.velX += vel;
    }
  }, {
    key: "moveDown",
    value: function moveDown(vel) {
      this.movement.velY += vel;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(vel) {
      this.movement.velX -= vel;
    }
  }, {
    key: "update",
    value: function update(friction) {
      this.movement.velX *= friction;
      this.movement.velY *= friction;
      var _this$movement = this.movement,
          velX = _this$movement.velX,
          velY = _this$movement.velY;
      this.movement.posX += velX;
      this.movement.posY += velY;
    }
  }]);

  return Entities;
}();

/* harmony default export */ __webpack_exports__["default"] = (Entities);

/***/ }),

/***/ "./javascripts/game/game.js":
/*!**********************************!*\
  !*** ./javascripts/game/game.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./javascripts/game/player.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world */ "./javascripts/game/world.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]({
      posX: 50,
      posY: 50,
      velX: 0,
      velY: 0
    });
    this.bullets = [];
    this.world = new _world__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  _createClass(Game, [{
    key: "update",
    value: function update(timeStamp) {
      this.player.update(this.world.friction);
    }
  }, {
    key: "addBullet",
    value: function addBullet(bullet) {}
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./javascripts/game/gun.js":
/*!*********************************!*\
  !*** ./javascripts/game/gun.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ "./javascripts/game/bullet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gun = /*#__PURE__*/function () {
  function Gun() {
    _classCallCheck(this, Gun);

    this.fireInterval;
    this.bullets = [];
    this.firing = false;
  }

  _createClass(Gun, [{
    key: "fire",
    value: function fire(movement) {
      var _this = this;

      if (!this.firing) {
        // debugger
        this.bullets.push(new _bullet__WEBPACK_IMPORTED_MODULE_0__["default"](movement));
        this.firing = true;
        window.setTimeout(function () {
          return _this.firing = false;
        }, 300);
        window.setTimeout(function () {
          return _this.bullets.shift();
        }, 5000);
      }
    }
  }, {
    key: "update",
    value: function update(timeStamp) {
      this.bullets.filter(function (bullet) {
        bullet.update();
        return bullet.isExpired(timeStamp);
      });
    }
  }]);

  return Gun;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gun);

/***/ }),

/***/ "./javascripts/game/player.js":
/*!************************************!*\
  !*** ./javascripts/game/player.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./javascripts/game/entities.js");
/* harmony import */ var _gun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gun */ "./javascripts/game/gun.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Player = /*#__PURE__*/function (_Entities) {
  _inherits(Player, _Entities);

  var _super = _createSuper(Player);

  function Player(movement) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, movement);
    _this.gun = new _gun__WEBPACK_IMPORTED_MODULE_1__["default"]();
    return _this;
  }

  _createClass(Player, [{
    key: "requestFire",
    value: function requestFire(mouseX, mouseY) {
      var _this$movement = this.movement,
          playerX = _this$movement.posX,
          playerY = _this$movement.posY;
      var angle = Math.atan2(mouseY - playerY, mouseX - playerX);
      this.gun.fire({
        posX: playerX,
        posY: playerY,
        velX: 5 * Math.cos(angle),
        velY: 5 * Math.sin(angle)
      });
    }
  }, {
    key: "update",
    value: function update(friction) {
      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, friction);

      this.gun.update();
    }
  }]);

  return Player;
}(_entities__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./javascripts/game/world.js":
/*!***********************************!*\
  !*** ./javascripts/game/world.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var World = function World() {
  _classCallCheck(this, World);

  this.cols = 24;
  this.rows = 18;
  this.size = 16;
  this.height = this.rows * this.size;
  this.width = this.cols * this.size;
  this.friction = 0.85;
  this.map = [[224, 1, 2, 3, 2, 1, 3, 3, 1, 2, 3, 2, 1, 1, 3, 2, 1, 3, 2, 2, 3, 1, 1, 225], [256, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257]];
};

/* harmony default export */ __webpack_exports__["default"] = (World);

/***/ }),

/***/ "./javascripts/main.js":
/*!*****************************!*\
  !*** ./javascripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./javascripts/controller.js");
/* harmony import */ var _display_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/display */ "./javascripts/display/display.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ "./javascripts/engine.js");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game */ "./javascripts/game/game.js");





var render = function render() {
  display.renderColor("#000000");
  display.drawMap(game.world.map);
  var _game$player$movement = game.player.movement,
      posX = _game$player$movement.posX,
      posY = _game$player$movement.posY;
  display.drawSquare({
    x: posX,
    y: posY,
    width: 10,
    height: 10
  }); // temp bullets

  game.player.gun.bullets.forEach(function (bullet) {
    display.drawSquare({
      x: bullet.movement.posX,
      y: bullet.movement.posY,
      width: 3,
      height: 3
    });
  });
  display.render();
};

var update = function update(timeStamp) {
  router();
  game.update(timeStamp);
};

var router = function router() {
  if (controller.keys.up.active) game.player.moveUp(0.5);
  if (controller.keys.right.active) game.player.moveRight(0.5);
  if (controller.keys.down.active) game.player.moveDown(0.5);
  if (controller.keys.left.active) game.player.moveLeft(0.5);
};

var controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"]();
var display = new _display_display__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector("canvas"));
var engine = new _engine__WEBPACK_IMPORTED_MODULE_2__["default"](1000 / 30, update, render);
var game = new _game_game__WEBPACK_IMPORTED_MODULE_3__["default"]();
display.buffer.canvas.height = game.world.height;
display.buffer.canvas.width = game.world.width; // Event Handling

var handleKeyChange = function handleKeyChange(e) {
  controller.handleKeyChange(e.type, e.keyCode);
};

var handleResize = function handleResize() {
  display.handleResize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
  display.render();
};

var handleClick = function handleClick(e) {
  var worldRatio = game.world.width / display.context.canvas.width;
  game.player.requestFire(e.offsetX * worldRatio, e.offsetY * worldRatio);
};

window.addEventListener("resize", handleResize);
window.addEventListener("keydown", handleKeyChange);
window.addEventListener("keyup", handleKeyChange);
window.addEventListener("click", handleClick);
display.tileSheet.image.addEventListener("load", function () {
  display.handleResize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
  engine.start();
});
display.tileSheet.loadImage();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map