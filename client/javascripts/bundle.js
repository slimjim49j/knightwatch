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
    key: "updateLeaderboard",
    value: function updateLeaderboard(scores) {
      var leaderboardList = document.querySelector(".leaderboard");
      leaderboardList.textContent = "";

      for (var i = 0; i < scores.length; i++) {
        var scoreLi = document.createElement("li"); // refactor?

        var nameSpan = document.createElement("span");
        var difficultySpan = document.createElement("span");
        var scoreSpan = document.createElement("span");
        nameSpan.textContent = "Name: ".concat(scores[i].name);
        difficultySpan.textContent = "Difficulty: ".concat(scores[i].difficulty);
        scoreSpan.textContent = "Score: ".concat(scores[i].score);
        scoreLi.append(nameSpan, difficultySpan, scoreSpan);
        leaderboardList.append(scoreLi);
      }
    }
  }, {
    key: "toggleHighscoreModal",
    value: function toggleHighscoreModal() {
      var modalWrapperClassList = document.querySelector(".highscore-modal-wrapper").classList;
      if (Array.from(modalWrapperClassList).includes("hidden")) modalWrapperClassList.remove("hidden");else modalWrapperClassList.add("hidden");
    }
  }, {
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
          if (tile === 0) return; // coordinates of tile in tilesheet

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
    key: "drawText",
    value: function drawText(_ref2) {
      var text = _ref2.text,
          font = _ref2.font,
          color = _ref2.color,
          offsetY = _ref2.offsetY;
      this.buffer.imageSmoothingEnabled = false;
      this.buffer.font = font;
      this.buffer.fillStyle = color || "yellow";
      this.buffer.textAlign = "center";
      this.buffer.fillText(text, this.buffer.canvas.width / 2, this.buffer.canvas.height / 2 + offsetY);
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

      this.context.canvas.style.margin = "0 auto";
      this.context.imageSmoothingEnabled = false;
    }
  }]);

  return Display;
}();

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./javascripts/display/leaderboard.js":
/*!********************************************!*\
  !*** ./javascripts/display/leaderboard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Leaderboard = /*#__PURE__*/function () {
  function Leaderboard() {
    _classCallCheck(this, Leaderboard);

    this.highscores = [];
    this.leaderboardLength = 10;
  }

  _createClass(Leaderboard, [{
    key: "isHighscore",
    value: function isHighscore(score) {
      return this.highscores.length <= this.leaderboardLength || score > this.highscores[this.highscores.length - 1];
    }
  }, {
    key: "getScores",
    value: function getScores() {
      var _this = this;

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/highscores").then(function (scores) {
        return _this.highscores = scores.data;
      });
    }
  }, {
    key: "postScore",
    value: function postScore(userScore) {
      var _this2 = this;

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/highscores", userScore).then(function (res) {
        var newScore = res.data;
        var newHighscores = [];
        var newScoreAdded = false;

        _this2.highscores.forEach(function (score) {
          if (score.score < newScore.score && !newScoreAdded) {
            newHighscores.push(newScore);
            newScoreAdded = true;
          }

          newHighscores.push(score);
        });

        if (!newScoreAdded) newHighscores.push(newScore);
        if (newHighscores.length > _this2.leaderboardLength) newHighscores.pop();
        _this2.highscores = newHighscores;
      });
    }
  }]);

  return Leaderboard;
}();

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard);

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


      this.gun.update(); // console.log(this.gun.bullets);
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
          } // console.log("player health:", this.player.health);

        }, _this2); // enemy bullet collision

        if (enemy.active) {
          _this2.player.gun.bullets.forEach(function (bullet) {
            if (bullet.isColliding(enemy)) {
              enemy.health -= bullet.damage;
            } // console.log("enemy health:", enemy.health);

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
    this.map = [[224, 1, 2, 3, 2, 1, 3, 3, 1, 2, 3, 2, 1, 1, 3, 2, 1, 3, 2, 2, 3, 1, 1, 225], [256, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [256, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 257], [288, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 289]];
    this.topMap = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 2, 1, 3, 3, 1, 2, 3, 2, 1, 1, 3, 2, 1, 3, 2, 2, 3, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
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
/* harmony import */ var _display_leaderboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/leaderboard */ "./javascripts/display/leaderboard.js");






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
  }); // top of map

  display.drawMap(game.world.topMap); // ui

  display.drawHealth(game.world.width, game.world.height, game.player.health, game.player.maxHealth);
  display.render();
};

var renderStartScreen = function renderStartScreen() {
  display.drawText({
    text: "KnightWatch",
    font: "30px Adventurer",
    offsetY: 0
  });
  display.drawText({
    text: "click anywhere to begin",
    font: "15px Adventurer",
    color: "#ffffaa",
    offsetY: 30
  });
  display.render();
};

var renderEndScreen = function renderEndScreen() {
  window.setTimeout(function () {
    display.renderColor("#00000088");
    display.drawText({
      text: "Game Over",
      font: "30px Adventurer",
      offsetY: 0
    });
    display.drawText({
      text: "Score: ".concat(game.score),
      font: "15px Adventurer",
      color: "#ffffaa",
      offsetY: 30
    });
    display.drawText({
      text: "Click Anywhere to Restart",
      font: "15px Adventurer",
      color: "#ffffaa",
      offsetY: 60
    });
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
var leaderboard = new _display_leaderboard__WEBPACK_IMPORTED_MODULE_4__["default"]();
display.buffer.canvas.height = game.world.height;
display.buffer.canvas.width = game.world.width; // leaderboard logic

leaderboard.getScores().then(function () {
  return display.updateLeaderboard(leaderboard.highscores);
});
document.querySelector(".highscore-modal .exit-btn").addEventListener("click", display.toggleHighscoreModal);
document.querySelector(".highscore-modal .submit-btn").addEventListener("click", function (e) {
  var name = document.querySelector(".name-field").value;
  leaderboard.postScore({
    name: name,
    difficulty: game.difficulty,
    score: game.score
  }).then(function () {
    return display.updateLeaderboard(leaderboard.highscores);
  });
  display.toggleHighscoreModal();
}); // Event Handling

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
  imgLoaded = true;
  enableStart(); // engine.start();
  // window.setTimeout(() => engine.stop(), 1000)
});
var play = false;
var playToggleCheckbox = document.querySelector(".play-toggle-label input");
var playToggleSpan = document.querySelector(".play-toggle-label span");
playToggleCheckbox.addEventListener("change", togglePlay);

function togglePlay(e) {
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
} // guns, bullets, enemy manager


function resumeActivity() {
  document.querySelector(".game-wrapper").scrollIntoView();
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
  if (leaderboard.isHighscore(game.score)) display.toggleHighscoreModal();
  pauseActivity();
  renderEndScreen();
  window.setTimeout(enableRestart, 1000);
} // restart


function enableRestart() {
  document.querySelector("#main").addEventListener("click", function (e) {
    location.reload();
  });
} // click to start


function enableStart() {
  renderStartScreen();
  document.querySelector("#main").addEventListener("click", function start(e) {
    togglePlay(e);
    document.querySelector("#main").removeEventListener("click", start);
  });
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



/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map