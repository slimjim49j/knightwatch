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
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

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
          height = _ref.height,
          color = _ref.color;
      // console.log(x, y);
      this.buffer.fillStyle = color;
      this.buffer.fillRect(Math.round(x), Math.round(y), width, height);
    }
  }, {
    key: "drawObject",
    value: function drawObject(frame, destX, destY) {
      // debugger
      this.buffer.imageSmoothingEnabled = false;

      if (frame.orientation === "right") {
        this.buffer.drawImage(this.tileSheet.image, frame.x, frame.y, frame.width, frame.height, destX, destY, frame.width, frame.height);
      } else {
        // move to x + img's width
        // adding img.width is necessary because we're flipping from
        //     the right side of the img so after flipping it's still
        //     at [x,y]
        this.buffer.translate(destX + frame.width, destY); // scaleX by -1; this "trick" flips horizontally

        this.buffer.scale(-1, 1); // draw the img
        // no need for x,y since we've already translated

        this.buffer.drawImage(this.tileSheet.image, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height); // always clean up -- reset transformations to default

        this.buffer.setTransform(1, 0, 0, 1, 0, 0); // https://stackoverflow.com/questions/35973441/how-to-horizontally-flip-an-image
      }
    }
  }, {
    key: "drawRotatedObject",
    value: function drawRotatedObject(frame, destX, destY, angle) {
      // this.buffer.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
      // debugger
      this.buffer.imageSmoothingEnabled = false;
      this.buffer.translate(destX, destY);
      this.buffer.rotate(angle + Math.PI / 2);
      this.buffer.drawImage(this.tileSheet.image, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height); // this.buffer.rotate(-angle + (Math.PI / 2));

      this.buffer.setTransform(1, 0, 0, 1, 0, 0);
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
    key: "drawHealth",
    value: function drawHealth(worldWidth, worldHeight, health, maxHealth) {
      var barWidth = worldWidth * 0.2;
      if (barWidth < 30) barWidth = (_readOnlyError("barWidth"), 30);
      if (barWidth > 300) barWidth = (_readOnlyError("barWidth"), 300);
      var healthWidth = barWidth * health / maxHealth;
      this.drawSquare({
        x: 25,
        y: worldHeight - 25,
        width: barWidth,
        height: 10,
        color: "black"
      });
      this.drawSquare({
        x: 25,
        y: worldHeight - 25,
        width: healthWidth,
        height: 10,
        color: "red"
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

/***/ "./javascripts/game/animator.js":
/*!**************************************!*\
  !*** ./javascripts/game/animator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
    whole purpose is to get the correct sprite coords to print to screen
    
    loop: if sprite should be animated or not

    if looping: engineFrameCount is incremented until it reaches the delay,
    then the next sprite in the sequence is selected from the frameManager
*/
var Animator = /*#__PURE__*/function () {
  function Animator(_ref) {
    var frameManager = _ref.frameManager,
        mode = _ref.mode,
        loop = _ref.loop,
        delay = _ref.delay,
        offsetX = _ref.offsetX,
        offsetY = _ref.offsetY;

    _classCallCheck(this, Animator);

    this.frameManager = frameManager;
    this.currentFrame;
    this.currentFrameIdx = 0;
    this.orientation = "left";
    this.mode = mode;
    this.loop = loop;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.engineFrameCount = 0;
    this.delay = delay;
  }

  _createClass(Animator, [{
    key: "changeMode",
    value: function changeMode(mode, loop) {
      this.mode = mode;
      this.loop = loop;
      this.currentFrameIdx = 0;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.loop) {
        this.engineFrameCount++;
        var framesLength = this.frameManager.getFramesLength(this.mode);

        while (this.engineFrameCount >= this.delay) {
          this.engineFrameCount -= this.delay;
          this.currentFrameIdx = (this.currentFrameIdx + 1) % framesLength;
        }

        this.currentFrame = this.frameManager.getFrame(this.mode, this.currentFrameIdx);
      } else {
        this.currentFrame = this.frameManager.getFrame(this.mode);
      }

      this.currentFrame.orientation = this.orientation;
    }
  }]);

  return Animator;
}();

/* harmony default export */ __webpack_exports__["default"] = (Animator);

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
/* harmony import */ var _frame_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frame_manager */ "./javascripts/game/frame_manager.js");
/* harmony import */ var _util_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/timers */ "./javascripts/util/timers.js");
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

  function Bullet(width, height, expireTime, movement, angle) {
    var _this;

    _classCallCheck(this, Bullet);

    var animatorParams = setupAnimatorParams();
    _this = _super.call(this, width, height, movement, animatorParams);
    _this.angle = angle; // this.spawnTime = spawnTime;
    // this.expirationTime = 5000;

    _this.expired = false;
    _this.expirationTimer = new _util_timers__WEBPACK_IMPORTED_MODULE_2__["Timer"](function () {
      return _this.expired = true;
    }, expireTime);
    _this.damage = 2;
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
  }, {
    key: "isColliding",
    value: function isColliding(object) {
      if (this.movement.posX > object.movement.posX && this.movement.posX < object.movement.posX + object.width && this.movement.posY > object.movement.posY && this.movement.posY < object.movement.posY + object.height) {
        this.expired = true;
        return true;
      }

      return false;
    }
  }]);

  return Bullet;
}(_entities__WEBPACK_IMPORTED_MODULE_0__["default"]);

function setupAnimatorParams() {
  var frameManager = new _frame_manager__WEBPACK_IMPORTED_MODULE_1__["default"]();
  frameManager.setFrames("idle", [{
    x: 293,
    y: 18,
    width: 6,
    height: 13
  }]);
  return {
    frameManager: frameManager,
    mode: "idle",
    loop: false,
    delay: null,
    offsetX: 0,
    offsetY: 0
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Bullet);

/***/ }),

/***/ "./javascripts/game/enemy.js":
/*!***********************************!*\
  !*** ./javascripts/game/enemy.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./javascripts/game/entities.js");
/* harmony import */ var _gun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gun */ "./javascripts/game/gun.js");
/* harmony import */ var _frame_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame_manager */ "./javascripts/game/frame_manager.js");
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





var Enemy = /*#__PURE__*/function (_Entities) {
  _inherits(Enemy, _Entities);

  var _super = _createSuper(Enemy);

  function Enemy(width, height, movement) {
    var _this;

    _classCallCheck(this, Enemy);

    var animatorParams = setupAnimatorParams();
    _this = _super.call(this, width, height, movement, animatorParams);

    var calcFireInterval = function calcFireInterval() {
      return Math.random() * 3000 + 500;
    };

    _this.gun = new _gun__WEBPACK_IMPORTED_MODULE_1__["default"](10000, calcFireInterval);
    _this.health = 5;
    _this.despawn = false;
    _this.active = true;
    return _this;
  }

  _createClass(Enemy, [{
    key: "requestFire",
    value: function requestFire(targetX, targetY) {
      var _this$movement = this.movement,
          enemyX = _this$movement.posX,
          enemyY = _this$movement.posY;
      var angle = Math.atan2(targetY - enemyY, targetX - enemyX);
      this.gun.fire({
        posX: enemyX,
        posY: enemyY,
        velX: 5 * Math.cos(angle),
        velY: 5 * Math.sin(angle)
      }, angle);
    }
  }, {
    key: "update",
    value: function update(friction, targetX, targetY) {
      if (this.health <= 0) this.active = false;

      if (this.active) {
        var _this$movement2 = this.movement,
            enemyX = _this$movement2.posX,
            enemyY = _this$movement2.posY;
        var angle = Math.atan2(targetY - enemyY, targetX - enemyX);
        this.movement.velX = 2 * Math.cos(angle);
        this.movement.velY = 2 * Math.sin(angle); // update position

        _get(_getPrototypeOf(Enemy.prototype), "update", this).call(this, friction); // fire bullet at target


        this.requestFire(targetX, targetY);
        this.updateOrientation();
        this.updateAnimationMode();
      } else {
        // only actually despawn once all bullets have despawned
        if (this.gun.bullets.length === 0) this.handleDespawn();
      } // updates bullets


      this.gun.update();
      console.log(this.gun.bullets);
    }
  }, {
    key: "updateOrientation",
    value: function updateOrientation() {
      if (this.movement.velX > 0) this.orientation = "right";else if (this.movement.velX < 0) this.orientation = "left";
    }
  }, {
    key: "updateAnimationMode",
    value: function updateAnimationMode() {
      var speed = Math.abs(this.movement.velX);
      if (speed > 1 && this.mode === "idle") this.changeMode("run", true);else if (speed < 1 && this.mode === "run") this.changeMode("idle", true);
    }
  }, {
    key: "handleDespawn",
    value: function handleDespawn() {
      this.despawn = true;
    }
  }]);

  return Enemy;
}(_entities__WEBPACK_IMPORTED_MODULE_0__["default"]);

function setupAnimatorParams() {
  var frameManager = new _frame_manager__WEBPACK_IMPORTED_MODULE_2__["default"]();
  frameManager.setFrames("idle", [{
    x: 368,
    y: 204,
    width: 16,
    height: 20
  }, {
    x: 384,
    y: 204,
    width: 16,
    height: 20
  }, {
    x: 400,
    y: 204,
    width: 16,
    height: 20
  }, {
    x: 416,
    y: 204,
    width: 16,
    height: 20
  }]);
  frameManager.setFrames("run", [{
    x: 432,
    y: 204,
    width: 16,
    height: 20
  }, {
    x: 448,
    y: 204,
    width: 16,
    height: 20
  }, {
    x: 464,
    y: 204,
    width: 16,
    height: 20
  }, {
    x: 480,
    y: 204,
    width: 16,
    height: 20
  }]);
  return {
    frameManager: frameManager,
    mode: "idle",
    loop: true,
    delay: 5,
    offsetX: -3,
    offsetY: -5
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./javascripts/game/entities.js":
/*!**************************************!*\
  !*** ./javascripts/game/entities.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animator */ "./javascripts/game/animator.js");
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



var Entities = /*#__PURE__*/function (_Animator) {
  _inherits(Entities, _Animator);

  var _super = _createSuper(Entities);

  function Entities(width, height, _ref, animatorParams) {
    var _this;

    var posX = _ref.posX,
        posY = _ref.posY,
        velX = _ref.velX,
        velY = _ref.velY;

    _classCallCheck(this, Entities);

    // debugger;
    _this = _super.call(this, animatorParams);
    _this.movement = {
      posX: posX,
      posY: posY,
      velX: velX,
      velY: velY
    };
    _this.width = width;
    _this.height = height; // this.update = this.update.bind(this);

    return _this;
  }

  _createClass(Entities, [{
    key: "update",
    value: function update(friction) {
      _get(_getPrototypeOf(Entities.prototype), "update", this).call(this);

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
}(_animator__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Entities);

/***/ }),

/***/ "./javascripts/game/frame_manager.js":
/*!*******************************************!*\
  !*** ./javascripts/game/frame_manager.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FrameManager = /*#__PURE__*/function () {
  function FrameManager() {
    _classCallCheck(this, FrameManager);

    this.store = {};
  }

  _createClass(FrameManager, [{
    key: "getFrame",
    value: function getFrame(mode) {
      var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.store[mode][idx];
    }
  }, {
    key: "getFramesLength",
    value: function getFramesLength(mode) {
      return this.store[mode].length;
    }
  }, {
    key: "setFrames",
    value: function setFrames(mode, frames) {
      this.store[mode] = frames;
    }
  }]);

  return FrameManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (FrameManager);

/***/ }),

/***/ "./javascripts/game/game.js":
/*!**********************************!*\
  !*** ./javascripts/game/game.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./javascripts/game/enemy.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./javascripts/game/player.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world */ "./javascripts/game/world.js");
/* harmony import */ var _util_timers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/timers */ "./javascripts/util/timers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](8, 16, {
      posX: 50,
      posY: 50,
      velX: 0,
      velY: 0
    });
    this.bullets = [];
    this.enemies = [];
    this.world = new _world__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.bulletCollisionDetection = this.bulletCollisionDetection.bind(this);
    this.waveInProgress = false;
    this.difficulty = 0;
    this.interval;
    this.score = 0;
  }

  _createClass(Game, [{
    key: "update",
    value: function update(timeStamp) {
      var _this = this;

      this.player.update(this.world.friction);
      this.world.handleCollision(this.player);
      this.enemies = this.enemies.filter(function (enemy) {
        enemy.update(_this.world.friction, _this.player.movement.posX, _this.player.movement.posY);

        _this.world.handleCollision(enemy);

        if (enemy.despawn) _this.score++;
        return !enemy.despawn;
      }); // manager updates after enemies

      this.updateEnemyManager(); // not entirely sure where this should be relative to other updates
      // I'm moving it down here from all the way up top so wall collision detection can happen after movement

      this.bulletCollisionDetection();
    }
  }, {
    key: "bulletCollisionDetection",
    value: function bulletCollisionDetection() {
      var _this2 = this;

      this.player.gun.bullets.forEach(function (bullet) {
        _this2.world.handleCollision(bullet);
      });
      this.enemies.forEach(function (enemy) {
        // player bullet collision
        enemy.gun.bullets.forEach(function (bullet) {
          _this2.world.handleCollision(bullet);

          if (bullet.isColliding(_this2.player)) {
            _this2.player.damage(bullet.damage);
          }

          console.log("player health:", _this2.player.health);
        }, _this2); // enemy bullet collision

        if (enemy.active) {
          _this2.player.gun.bullets.forEach(function (bullet) {
            if (bullet.isColliding(enemy)) {
              enemy.health -= bullet.damage;
            }

            console.log("enemy health:", enemy.health);
          });
        }
      }, this);
    }
  }, {
    key: "updateEnemyManager",
    value: function updateEnemyManager() {
      var _this3 = this;

      // console.log(this.difficulty);
      if (!this.waveInProgress && this.enemies.length === 0) {
        this.waveInProgress = true;
        this.player.heal(2);
        this.difficulty++;
        var enemyCount = Math.round(5 * this.difficulty);
        if (this.interval instanceof _util_timers__WEBPACK_IMPORTED_MODULE_3__["IntervalTimer"]) this.interval.pause();
        this.interval = new _util_timers__WEBPACK_IMPORTED_MODULE_3__["IntervalTimer"](function () {
          if (enemyCount > 0) {
            _this3.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"](10, 10, {
              posX: Math.random() * _this3.world.width,
              posY: Math.random() * _this3.world.height,
              velX: 0,
              velY: 0
            }));

            enemyCount--;
          } else {
            _this3.waveInProgress = false; // window.clearInterval(this.interval);
          }
        }, 2000 / this.difficulty);
      }
    }
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
/* harmony import */ var _util_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/timers */ "./javascripts/util/timers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Gun = /*#__PURE__*/function () {
  function Gun(bulletExpireTime, calcFireInterval) {
    _classCallCheck(this, Gun);

    this.calcFireInterval = calcFireInterval;
    this.bullets = [];
    this.bulletExpireTime = bulletExpireTime;
    this.firing = false;
  }

  _createClass(Gun, [{
    key: "fire",
    value: function fire(movement, angle) {
      var _this = this;

      if (!this.firing) {
        // debugger
        this.bullets.push(new _bullet__WEBPACK_IMPORTED_MODULE_0__["default"](3, 3, this.bulletExpireTime, movement, angle));
        this.firing = true;
        this.allowFire = new _util_timers__WEBPACK_IMPORTED_MODULE_1__["Timer"](function () {
          return _this.firing = false;
        }, this.calcFireInterval());
      }
    }
  }, {
    key: "update",
    value: function update(timeStamp) {
      this.bullets = this.bullets.filter(function (bullet) {
        bullet.update();
        return !bullet.isExpired(timeStamp);
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
/* harmony import */ var _frame_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame_manager */ "./javascripts/game/frame_manager.js");
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

  function Player(width, height, movement) {
    var _this;

    _classCallCheck(this, Player);

    var animatorParams = setupAnimatorParams();
    _this = _super.call(this, width, height, movement, animatorParams);
    _this.gun = new _gun__WEBPACK_IMPORTED_MODULE_1__["default"](5000, function () {
      return 300;
    });
    _this.health = 10;
    _this.maxHealth = 10;
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
      }, angle);
    }
  }, {
    key: "update",
    value: function update(friction) {
      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, friction);

      this.updateAnimationMode();
      this.gun.update();
    } // repetetive, player / enemy need a common parent wihtout bullet

  }, {
    key: "updateAnimationMode",
    value: function updateAnimationMode() {
      var speed = Math.abs(this.movement.velX);
      if (speed > 1 && this.mode === "idle") this.changeMode("run", true);else if (speed < 1 && this.mode === "run") this.changeMode("idle", true);
    } // damage should always be greater than 0

  }, {
    key: "damage",
    value: function damage(damageAmt) {
      this.health -= damageAmt;
      if (this.health < 0) this.health = 0;
    }
  }, {
    key: "heal",
    value: function heal(healAmt) {
      this.health += healAmt;
      if (this.health > this.maxHealth) this.health = this.maxHealth;
    }
  }, {
    key: "moveUp",
    value: function moveUp(vel) {
      this.movement.velY -= vel;
    }
  }, {
    key: "moveRight",
    value: function moveRight(vel) {
      this.orientation = "right";
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
      this.orientation = "left";
      this.movement.velX -= vel;
    }
  }]);

  return Player;
}(_entities__WEBPACK_IMPORTED_MODULE_0__["default"]);

function setupAnimatorParams() {
  var frameManager = new _frame_manager__WEBPACK_IMPORTED_MODULE_2__["default"]();
  frameManager.setFrames("idle", [{
    x: 128,
    y: 74,
    width: 16,
    height: 22
  }, {
    x: 144,
    y: 74,
    width: 16,
    height: 22
  }, {
    x: 160,
    y: 74,
    width: 16,
    height: 22
  }, {
    x: 176,
    y: 74,
    width: 16,
    height: 22
  }]);
  frameManager.setFrames("run", [{
    x: 192,
    y: 74,
    width: 16,
    height: 22
  }, {
    x: 208,
    y: 74,
    width: 16,
    height: 22
  }, {
    x: 224,
    y: 74,
    width: 16,
    height: 22
  }, {
    x: 240,
    y: 74,
    width: 16,
    height: 22
  }]);
  return {
    frameManager: frameManager,
    mode: "idle",
    loop: true,
    delay: 5,
    offsetX: -5,
    offsetY: -5
  };
}

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
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ "./javascripts/game/bullet.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var World = /*#__PURE__*/function () {
  function World() {
    _classCallCheck(this, World);

    this.cols = 24;
    this.rows = 18;
    this.size = 16;
    this.height = this.rows * this.size;
    this.width = this.cols * this.size;
    this.friction = 0.85;
    this.map = [[224, 1, 2, 3, 2, 1, 3, 3, 1, 2, 3, 2, 1, 1, 3, 2, 1, 3, 2, 2, 3, 1, 1, 225], [256, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257]];
    /*
    0: no collision
    1: top
    2: right
    3: bottom
    4: left
    */

    this.collisionMap = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4]];
  } // detect collision
  // find position of obj on collision map
  // find all relative collision tiles
  // test for collision on all relavent collision tiles
  // parse what collision each tile checks for
  // resolve collision
  // move obj on colliding tiles


  _createClass(World, [{
    key: "handleCollision",
    value: function handleCollision(obj) {
      var _this = this;

      var collisionTiles = this.findCollisionTiles(obj); // return arr of tuples containing tile coords ([row, col])

      if (collisionTiles) {
        collisionTiles.forEach(function (tileTuple) {
          _this.resolveCollision.apply(_this, [obj].concat(_toConsumableArray(tileTuple)));
        });
      }
    } // return arr of tiles to check

  }, {
    key: "findCollisionTiles",
    value: function findCollisionTiles(obj) {
      return [this.convertPosToTile(obj.movement.posX, obj.movement.posY), this.convertPosToTile(obj.movement.posX + obj.width, obj.movement.posY), this.convertPosToTile(obj.movement.posX, obj.movement.posY + obj.height), this.convertPosToTile(obj.movement.posX + obj.width, obj.movement.posY + obj.height)];
    }
  }, {
    key: "convertPosToTile",
    value: function convertPosToTile(posX, posY) {
      var row = Math.floor(posY / this.size);
      var col = Math.floor(posX / this.size);
      return [row, col];
    } // currently returns collision val (int)

  }, {
    key: "getCollisionTile",
    value: function getCollisionTile(row, col) {
      // debugger
      return this.collisionMap[row][col];
    }
  }, {
    key: "resolveCollision",
    value: function resolveCollision(obj, row, col) {
      var collisionValue = this.getCollisionTile(row, col);
      var didCollide;

      switch (collisionValue) {
        case 1:
          didCollide = this.checkTop(obj, row);
          break;

        case 2:
          didCollide = this.checkRight(obj, col);
          break;

        case 3:
          didCollide = this.checkBottom(obj, row);
          break;

        case 4:
          didCollide = this.checkLeft(obj, col);
          break;

        default:
          didCollide = false;
          break;
      }

      if (didCollide && obj instanceof _bullet__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        obj.movement.velX = 0;
        obj.movement.velY = 0;
      }
    }
  }, {
    key: "checkTop",
    value: function checkTop(obj, row) {
      var tileY = row * this.size;

      if (obj.movement.posY + obj.height > tileY) {
        obj.movement.posY = tileY - obj.height;
        obj.movement.velY = 0;
        return true;
      }

      return false;
    }
  }, {
    key: "checkRight",
    value: function checkRight(obj, col) {
      var tileX = (col + 1) * this.size;

      if (obj.movement.posX < tileX) {
        obj.movement.posX = tileX;
        obj.movement.velX = 0;
        return true;
      }

      return false;
    }
  }, {
    key: "checkBottom",
    value: function checkBottom(obj, row) {
      var tileY = (row + 1) * this.size;

      if (obj.movement.posY < tileY) {
        obj.movement.posY = tileY;
        obj.movement.velY = 0;
        return true;
      }

      return false;
    }
  }, {
    key: "checkLeft",
    value: function checkLeft(obj, col) {
      var tileX = col * this.size;

      if (obj.movement.posX + obj.width > tileX) {
        obj.movement.posX = tileX - obj.width;
        obj.movement.velX = 0;
        return true;
      }

      return false;
    }
  }]);

  return World;
}();

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
  display.drawMap(game.world.map); // draw enemies

  game.enemies.forEach(function (enemy) {
    if (enemy.active) {
      // display.drawSquare({ x: enemy.movement.posX, y: enemy.movement.posY, width: enemy.width, height: enemy.height, color: "pink" })
      display.drawObject(enemy.currentFrame, enemy.movement.posX + enemy.offsetX, enemy.movement.posY + enemy.offsetY);
    } else {
      display.drawRotatedObject(enemy.currentFrame, enemy.movement.posX, enemy.movement.posY, 60); // display.drawSquare({ x: enemy.movement.posX, y: enemy.movement.posY, width: enemy.width, height: enemy.height, color: "#00000099" });
    }
  }); // draw player

  var _game$player$movement = game.player.movement,
      playerX = _game$player$movement.posX,
      playerY = _game$player$movement.posY; // display.drawSquare({x: playerX, y: playerY, width: game.player.width, height: game.player.height, color: "pink" });

  display.drawObject(game.player.currentFrame, playerX + game.player.offsetX, playerY + game.player.offsetY); // temp bullets

  game.player.gun.bullets.forEach(function (bullet) {
    // display.drawSquare({ x: bullet.movement.posX, y: bullet.movement.posY, width: bullet.width, height: bullet.height, color: "pink" })
    display.drawRotatedObject(bullet.currentFrame, bullet.movement.posX + bullet.offsetX, bullet.movement.posY + bullet.offsetY, bullet.angle);
  });
  game.enemies.forEach(function (enemy) {
    enemy.gun.bullets.forEach(function (bullet) {
      // display.drawSquare({ x: bullet.movement.posX, y: bullet.movement.posY, width: bullet.width, height: bullet.height, color: "pink" })
      display.drawRotatedObject(bullet.currentFrame, bullet.movement.posX + bullet.offsetX, bullet.movement.posY + bullet.offsetY, bullet.angle);
    });
  }); // ui

  display.drawHealth(game.world.width, game.world.height, game.player.health, game.player.maxHealth);
  display.render();
};

var renderEndScreen = function renderEndScreen() {
  window.setTimeout(function () {
    display.renderColor("#00000088");
    display.render();
  }, 500);
};

var difficultySpan = document.querySelector(".difficulty-span");
var scoreSpan = document.querySelector(".score-span");

var update = function update(timeStamp) {
  router();
  game.update(timeStamp);
  difficultySpan.textContent = "Difficulty: ".concat(game.difficulty);
  scoreSpan.textContent = "Score: ".concat(game.score);
  if (game.player.health === 0) endGame();
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
window.addEventListener("click", handleClick); // handle start / stop game play

var imgLoaded = false;
display.tileSheet.image.addEventListener("load", function () {
  display.handleResize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
  imgLoaded = true; // engine.start();
  // window.setTimeout(() => engine.stop(), 1000)
});
var play = false;
var playToggleCheckbox = document.querySelector(".play-toggle-label input");
var playToggleSpan = document.querySelector(".play-toggle-label span");
playToggleCheckbox.addEventListener("change", function (e) {
  e.stopPropagation();
  if (game.player.health === 0) return;
  play = !play;

  if (imgLoaded && play) {
    resumeActivity();
    playToggleSpan.textContent = "Pause";
  } else {
    pauseActivity();
    playToggleSpan.textContent = "Play";
  }
}); // guns, bullets, enemy manager

function resumeActivity() {
  engine.start(); // resume bullet expiration

  game.player.gun.bullets.forEach(function (bullet) {
    return bullet.expirationTimer.resume();
  });
  game.enemies.forEach(function (enemy) {
    return enemy.gun.bullets.forEach(function (bullet) {
      return bullet.expirationTimer.resume();
    });
  }); // resume gun cooldown

  if (game.player.gun.allowFire) game.player.gun.allowFire.resume();
  game.enemies.forEach(function (enemy) {
    if (enemy.gun.allowFire) enemy.gun.allowFire.resume();
  }); // resume enemy manager

  if (game.interval) game.interval.resume();
}

function pauseActivity() {
  engine.stop(); // pause bullet expiration

  game.player.gun.bullets.forEach(function (bullet) {
    return bullet.expirationTimer.pause();
  });
  game.enemies.forEach(function (enemy) {
    return enemy.gun.bullets.forEach(function (bullet) {
      return bullet.expirationTimer.pause();
    });
  }); // pause gun cooldown

  if (game.player.gun.allowFire) game.player.gun.allowFire.pause();
  game.enemies.forEach(function (enemy) {
    if (enemy.gun.allowFire) enemy.gun.allowFire.pause();
  }); // pause enemy manager

  game.interval.pause();
}

function endGame() {
  pauseActivity();
  renderEndScreen();
}

display.tileSheet.loadImage();

/***/ }),

/***/ "./javascripts/util/timers.js":
/*!************************************!*\
  !*** ./javascripts/util/timers.js ***!
  \************************************/
/*! exports provided: Timer, IntervalTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalTimer", function() { return IntervalTimer; });
// https://stackoverflow.com/a/3969760/8896999
var Timer = function Timer(callback, delay) {
  var timerId,
      start,
      remaining = delay;

  this.pause = function () {
    window.clearTimeout(timerId);
    remaining -= Date.now() - start;
  };

  this.resume = function () {
    start = Date.now();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
}; // https://stackoverflow.com/a/24725066/8896999


function IntervalTimer(callback, interval) {
  var timerId,
      startTime,
      remaining = 0;
  var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

  this.pause = function () {
    if (state != 1) return;
    remaining = interval - (new Date() - startTime);
    window.clearInterval(timerId);
    state = 2;
  };

  this.resume = function () {
    if (state != 2) return;
    state = 3;
    window.setTimeout(this.timeoutCallback, remaining);
  };

  this.timeoutCallback = function () {
    if (state != 3) return;
    callback();
    startTime = new Date();
    timerId = window.setInterval(callback, interval);
    state = 1;
  };

  startTime = new Date();
  timerId = window.setInterval(callback, interval);
  state = 1;
}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map