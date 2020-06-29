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

/***/ "./javascripts/controllers/display.js":
/*!********************************************!*\
  !*** ./javascripts/controllers/display.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tilesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tilesheet */ "./javascripts/controllers/tilesheet.js");
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

/***/ "./javascripts/controllers/leaderboard.js":
/*!************************************************!*\
  !*** ./javascripts/controllers/leaderboard.js ***!
  \************************************************/
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
      return this.highscores.length < this.leaderboardLength || score > this.highscores[this.highscores.length - 1].score;
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

/***/ "./javascripts/controllers/sound.js":
/*!******************************************!*\
  !*** ./javascripts/controllers/sound.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/Tone.js");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tone__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var tetrisTheme = __webpack_require__(/*! ./tetris_theme.json */ "./javascripts/controllers/tetris_theme.json");

var Sound = /*#__PURE__*/function () {
  function Sound() {
    _classCallCheck(this, Sound);
  } // async start() {
  //     await Tone.start();
  //     console.log("ready");
  // }


  _createClass(Sound, [{
    key: "createSynth",
    value: function createSynth() {
      //create a synth and connect it to the master output (your speakers)
      this.synth = new tone__WEBPACK_IMPORTED_MODULE_0__["PolySynth"](4, tone__WEBPACK_IMPORTED_MODULE_0__["Synth"], {
        oscillator: {
          type: "sawtooth"
        }
      }).toMaster();
      this.synth.set("detune", -1000);
    }
  }, {
    key: "createPart",
    value: function createPart() {
      var _this = this;

      //pass in an array of events
      this.part = new tone__WEBPACK_IMPORTED_MODULE_0__["Part"](function (time, event) {
        //the events will be given to the callback with the time they occur
        _this.synth.triggerAttackRelease(event.name, event.duration, time);
      }, tetrisTheme); //start the part at the beginning of the Transport's timeline

      this.part.start(0); //loop the part after 135s infinitely
      // (song lasts approx 1:35, extra time is for padding)

      this.part.loop = true;
      this.part.loopEnd = 135;
    }
  }, {
    key: "start",
    value: function start() {
      if (!this.synth) this.createSynth();
      if (!this.part) this.createPart();
      tone__WEBPACK_IMPORTED_MODULE_0__["Transport"].start();
    }
  }, {
    key: "stop",
    value: function stop() {
      tone__WEBPACK_IMPORTED_MODULE_0__["Transport"].pause();
    }
  }]);

  return Sound;
}();

/* harmony default export */ __webpack_exports__["default"] = (Sound);

/***/ }),

/***/ "./javascripts/controllers/tetris_theme.json":
/*!***************************************************!*\
  !*** ./javascripts/controllers/tetris_theme.json ***!
  \***************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"duration\":0.3819580078125,\"durationTicks\":1043,\"midi\":76,\"name\":\"E5\",\"ticks\":10,\"time\":0.003662109375,\"velocity\":0.6692913385826772},{\"duration\":0.3819580078125,\"durationTicks\":1043,\"midi\":88,\"name\":\"E6\",\"ticks\":10,\"time\":0.003662109375,\"velocity\":0.7795275590551181},{\"duration\":0.1849365234375,\"durationTicks\":505,\"midi\":28,\"name\":\"E1\",\"ticks\":10,\"time\":0.003662109375,\"velocity\":0.6377952755905512},{\"duration\":0.1959228515625,\"durationTicks\":535,\"midi\":40,\"name\":\"E2\",\"ticks\":10,\"time\":0.003662109375,\"velocity\":0.7716535433070866},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":546,\"time\":0.199951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":55,\"name\":\"G3\",\"ticks\":546,\"time\":0.199951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":546,\"time\":0.199951171875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":71,\"name\":\"B4\",\"ticks\":1054,\"time\":0.385986328125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":83,\"name\":\"B5\",\"ticks\":1054,\"time\":0.385986328125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":1054,\"time\":0.385986328125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":1054,\"time\":0.385986328125,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":1559,\"time\":0.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":1559,\"time\":0.5709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":1559,\"time\":0.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":55,\"name\":\"G3\",\"ticks\":1559,\"time\":0.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":1559,\"time\":0.5709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":74,\"name\":\"D5\",\"ticks\":2069,\"time\":0.7576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":86,\"name\":\"D6\",\"ticks\":2069,\"time\":0.7576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":28,\"name\":\"E1\",\"ticks\":2069,\"time\":0.7576904296875,\"velocity\":0.6220472440944882},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":40,\"name\":\"E2\",\"ticks\":2069,\"time\":0.7576904296875,\"velocity\":0.7559055118110236},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":88,\"name\":\"E6\",\"ticks\":2579,\"time\":0.9444580078125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":2579,\"time\":0.9444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":55,\"name\":\"G3\",\"ticks\":2579,\"time\":0.9444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":2579,\"time\":0.9444580078125,\"velocity\":0.7401574803149606},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":86,\"name\":\"D6\",\"ticks\":2827,\"time\":1.0352783203125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":72,\"name\":\"C5\",\"ticks\":3084,\"time\":1.12939453125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":84,\"name\":\"C6\",\"ticks\":3084,\"time\":1.12939453125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":3084,\"time\":1.12939453125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":3084,\"time\":1.12939453125,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":71,\"name\":\"B4\",\"ticks\":3589,\"time\":1.3143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":83,\"name\":\"B5\",\"ticks\":3589,\"time\":1.3143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":3589,\"time\":1.3143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":55,\"name\":\"G3\",\"ticks\":3589,\"time\":1.3143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":59,\"name\":\"B3\",\"ticks\":3589,\"time\":1.3143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":69,\"name\":\"A4\",\"ticks\":4100,\"time\":1.50146484375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":81,\"name\":\"A5\",\"ticks\":4100,\"time\":1.50146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":4100,\"time\":1.50146484375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":4100,\"time\":1.50146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":4642,\"time\":1.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":57,\"name\":\"A3\",\"ticks\":4642,\"time\":1.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":4642,\"time\":1.699951171875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":69,\"name\":\"A4\",\"ticks\":5150,\"time\":1.885986328125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":81,\"name\":\"A5\",\"ticks\":5150,\"time\":1.885986328125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":5150,\"time\":1.885986328125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":5150,\"time\":1.885986328125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":5655,\"time\":2.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":5655,\"time\":2.0709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":48,\"name\":\"C3\",\"ticks\":5655,\"time\":2.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":5655,\"time\":2.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":57,\"name\":\"A3\",\"ticks\":5655,\"time\":2.0709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":76,\"name\":\"E5\",\"ticks\":6165,\"time\":2.2576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":6165,\"time\":2.2576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":6165,\"time\":2.2576904296875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":6165,\"time\":2.2576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":6675,\"time\":2.4444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":6675,\"time\":2.4444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":6675,\"time\":2.4444580078125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":74,\"name\":\"D5\",\"ticks\":7180,\"time\":2.62939453125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":86,\"name\":\"D6\",\"ticks\":7180,\"time\":2.62939453125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":7180,\"time\":2.62939453125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":7180,\"time\":2.62939453125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":72,\"name\":\"C5\",\"ticks\":7685,\"time\":2.8143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":84,\"name\":\"C6\",\"ticks\":7685,\"time\":2.8143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":57,\"name\":\"A3\",\"ticks\":7685,\"time\":2.8143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":60,\"name\":\"C4\",\"ticks\":7685,\"time\":2.8143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":64,\"name\":\"E4\",\"ticks\":7685,\"time\":2.8143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":71,\"name\":\"B4\",\"ticks\":8196,\"time\":3.00146484375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":83,\"name\":\"B5\",\"ticks\":8196,\"time\":3.00146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":32,\"name\":\"G#1\",\"ticks\":8196,\"time\":3.00146484375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":44,\"name\":\"G#2\",\"ticks\":8196,\"time\":3.00146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":8738,\"time\":3.199951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":56,\"name\":\"G#3\",\"ticks\":8738,\"time\":3.199951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":8738,\"time\":3.199951171875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":71,\"name\":\"B4\",\"ticks\":9246,\"time\":3.385986328125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":83,\"name\":\"B5\",\"ticks\":9246,\"time\":3.385986328125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":9246,\"time\":3.385986328125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":9246,\"time\":3.385986328125,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":9751,\"time\":3.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":9751,\"time\":3.5709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":9751,\"time\":3.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":56,\"name\":\"G#3\",\"ticks\":9751,\"time\":3.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":9751,\"time\":3.5709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":74,\"name\":\"D5\",\"ticks\":10261,\"time\":3.7576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":10261,\"time\":3.7576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":32,\"name\":\"G#1\",\"ticks\":10261,\"time\":3.7576904296875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":44,\"name\":\"G#2\",\"ticks\":10261,\"time\":3.7576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":10771,\"time\":3.9444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":56,\"name\":\"G#3\",\"ticks\":10771,\"time\":3.9444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":10771,\"time\":3.9444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":10771,\"time\":3.9444580078125,\"velocity\":0.7401574803149606},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":76,\"name\":\"E5\",\"ticks\":11276,\"time\":4.12939453125,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":88,\"name\":\"E6\",\"ticks\":11276,\"time\":4.12939453125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":11276,\"time\":4.12939453125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":11276,\"time\":4.12939453125,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":11781,\"time\":4.3143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":56,\"name\":\"G#3\",\"ticks\":11781,\"time\":4.3143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":59,\"name\":\"B3\",\"ticks\":11781,\"time\":4.3143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":64,\"name\":\"E4\",\"ticks\":11781,\"time\":4.3143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":72,\"name\":\"C5\",\"ticks\":12292,\"time\":4.50146484375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":84,\"name\":\"C6\",\"ticks\":12292,\"time\":4.50146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":12292,\"time\":4.50146484375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":12292,\"time\":4.50146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":64,\"name\":\"E4\",\"ticks\":12834,\"time\":4.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":69,\"name\":\"A4\",\"ticks\":12834,\"time\":4.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":72,\"name\":\"C5\",\"ticks\":12834,\"time\":4.699951171875,\"velocity\":0.7401574803149606},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":48,\"name\":\"C3\",\"ticks\":12834,\"time\":4.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":52,\"name\":\"E3\",\"ticks\":12834,\"time\":4.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":57,\"name\":\"A3\",\"ticks\":12834,\"time\":4.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":12834,\"time\":4.699951171875,\"velocity\":0.7401574803149606},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":13342,\"time\":4.885986328125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":81,\"name\":\"A5\",\"ticks\":13342,\"time\":4.885986328125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":21,\"name\":\"A0\",\"ticks\":13342,\"time\":4.885986328125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":33,\"name\":\"A1\",\"ticks\":13342,\"time\":4.885986328125,\"velocity\":0.7480314960629921},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":13847,\"time\":5.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":13847,\"time\":5.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":76,\"name\":\"E5\",\"ticks\":13847,\"time\":5.0709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":13847,\"time\":5.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":57,\"name\":\"A3\",\"ticks\":13847,\"time\":5.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":13847,\"time\":5.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":64,\"name\":\"E4\",\"ticks\":13847,\"time\":5.0709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":69,\"name\":\"A4\",\"ticks\":14357,\"time\":5.2576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":81,\"name\":\"A5\",\"ticks\":14357,\"time\":5.2576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":14357,\"time\":5.2576904296875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":14357,\"time\":5.2576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":72,\"name\":\"C5\",\"ticks\":14867,\"time\":5.4444580078125,\"velocity\":0.7165354330708661},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":76,\"name\":\"E5\",\"ticks\":14867,\"time\":5.4444580078125,\"velocity\":0.7165354330708661},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":81,\"name\":\"A5\",\"ticks\":14867,\"time\":5.4444580078125,\"velocity\":0.6771653543307087},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":57,\"name\":\"A3\",\"ticks\":14867,\"time\":5.4444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":14867,\"time\":5.4444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":14867,\"time\":5.4444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":14867,\"time\":5.4444580078125,\"velocity\":0.7401574803149606},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":81,\"name\":\"A5\",\"ticks\":15372,\"time\":5.62939453125,\"velocity\":0.7007874015748031},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":57,\"name\":\"A3\",\"ticks\":15372,\"time\":5.62939453125,\"velocity\":0.7007874015748031},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":83,\"name\":\"B5\",\"ticks\":15629,\"time\":5.7235107421875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":59,\"name\":\"B3\",\"ticks\":15629,\"time\":5.7235107421875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":84,\"name\":\"C6\",\"ticks\":15877,\"time\":5.8143310546875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":60,\"name\":\"C4\",\"ticks\":15877,\"time\":5.8143310546875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":86,\"name\":\"D6\",\"ticks\":16125,\"time\":5.9051513671875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":62,\"name\":\"D4\",\"ticks\":16125,\"time\":5.9051513671875,\"velocity\":0.6929133858267716},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":76,\"name\":\"E5\",\"ticks\":16388,\"time\":6.00146484375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":88,\"name\":\"E6\",\"ticks\":16388,\"time\":6.00146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":52,\"name\":\"E3\",\"ticks\":16388,\"time\":6.00146484375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":64,\"name\":\"E4\",\"ticks\":16388,\"time\":6.00146484375,\"velocity\":0.7795275590551181},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":74,\"name\":\"D5\",\"ticks\":16930,\"time\":6.199951171875,\"velocity\":0.6299212598425197},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":86,\"name\":\"D6\",\"ticks\":16930,\"time\":6.199951171875,\"velocity\":0.7401574803149606},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":38,\"name\":\"D2\",\"ticks\":16930,\"time\":6.199951171875,\"velocity\":0.6220472440944882},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":41,\"name\":\"F2\",\"ticks\":16930,\"time\":6.199951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":45,\"name\":\"A2\",\"ticks\":16930,\"time\":6.199951171875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":50,\"name\":\"D3\",\"ticks\":17438,\"time\":6.385986328125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":65,\"name\":\"F4\",\"ticks\":17438,\"time\":6.385986328125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":77,\"name\":\"F5\",\"ticks\":17943,\"time\":6.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":89,\"name\":\"F6\",\"ticks\":17943,\"time\":6.5709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":38,\"name\":\"D2\",\"ticks\":17943,\"time\":6.5709228515625,\"velocity\":0.6220472440944882},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":41,\"name\":\"F2\",\"ticks\":17943,\"time\":6.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":17943,\"time\":6.5709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":18453,\"time\":6.7576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":18453,\"time\":6.7576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":57,\"name\":\"A3\",\"ticks\":18453,\"time\":6.7576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":18453,\"time\":6.7576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":38,\"name\":\"D2\",\"ticks\":18963,\"time\":6.9444580078125,\"velocity\":0.6220472440944882},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":41,\"name\":\"F2\",\"ticks\":18963,\"time\":6.9444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":18963,\"time\":6.9444580078125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":79,\"name\":\"G5\",\"ticks\":19468,\"time\":7.12939453125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":91,\"name\":\"G6\",\"ticks\":19468,\"time\":7.12939453125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":45,\"name\":\"A2\",\"ticks\":19468,\"time\":7.12939453125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":57,\"name\":\"A3\",\"ticks\":19468,\"time\":7.12939453125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":77,\"name\":\"F5\",\"ticks\":19973,\"time\":7.3143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":89,\"name\":\"F6\",\"ticks\":19973,\"time\":7.3143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":41,\"name\":\"F2\",\"ticks\":19973,\"time\":7.3143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":53,\"name\":\"F3\",\"ticks\":19973,\"time\":7.3143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.569091796875,\"durationTicks\":1554,\"midi\":76,\"name\":\"E5\",\"ticks\":20484,\"time\":7.50146484375,\"velocity\":0.6692913385826772},{\"duration\":0.569091796875,\"durationTicks\":1554,\"midi\":88,\"name\":\"E6\",\"ticks\":20484,\"time\":7.50146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":36,\"name\":\"C2\",\"ticks\":20484,\"time\":7.50146484375,\"velocity\":0.6535433070866141},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":48,\"name\":\"C3\",\"ticks\":20484,\"time\":7.50146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":48,\"name\":\"C3\",\"ticks\":21026,\"time\":7.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":21026,\"time\":7.699951171875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":36,\"name\":\"C2\",\"ticks\":21534,\"time\":7.885986328125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":48,\"name\":\"C3\",\"ticks\":21534,\"time\":7.885986328125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":22039,\"time\":8.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":22039,\"time\":8.0709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":48,\"name\":\"C3\",\"ticks\":22039,\"time\":8.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":22039,\"time\":8.0709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":76,\"name\":\"E5\",\"ticks\":22549,\"time\":8.2576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":22549,\"time\":8.2576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":36,\"name\":\"C2\",\"ticks\":22549,\"time\":8.2576904296875,\"velocity\":0.6377952755905512},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":48,\"name\":\"C3\",\"ticks\":22549,\"time\":8.2576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":23059,\"time\":8.4444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":23059,\"time\":8.4444580078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":23059,\"time\":8.4444580078125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":74,\"name\":\"D5\",\"ticks\":23564,\"time\":8.62939453125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":86,\"name\":\"D6\",\"ticks\":23564,\"time\":8.62939453125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":31,\"name\":\"G1\",\"ticks\":23564,\"time\":8.62939453125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":43,\"name\":\"G2\",\"ticks\":23564,\"time\":8.62939453125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":72,\"name\":\"C5\",\"ticks\":24069,\"time\":8.8143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":84,\"name\":\"C6\",\"ticks\":24069,\"time\":8.8143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":24069,\"time\":8.8143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":57,\"name\":\"A3\",\"ticks\":24069,\"time\":8.8143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":60,\"name\":\"C4\",\"ticks\":24069,\"time\":8.8143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":71,\"name\":\"B4\",\"ticks\":24580,\"time\":9.00146484375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":83,\"name\":\"B5\",\"ticks\":24580,\"time\":9.00146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":35,\"name\":\"B1\",\"ticks\":24580,\"time\":9.00146484375,\"velocity\":0.6535433070866141},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":47,\"name\":\"B2\",\"ticks\":24580,\"time\":9.00146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":47,\"name\":\"B2\",\"ticks\":25122,\"time\":9.199951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":25122,\"time\":9.199951171875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":71,\"name\":\"B4\",\"ticks\":25630,\"time\":9.385986328125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":83,\"name\":\"B5\",\"ticks\":25630,\"time\":9.385986328125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":35,\"name\":\"B1\",\"ticks\":25630,\"time\":9.385986328125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":47,\"name\":\"B2\",\"ticks\":25630,\"time\":9.385986328125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":26135,\"time\":9.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":26135,\"time\":9.5709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":47,\"name\":\"B2\",\"ticks\":26135,\"time\":9.5709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":26135,\"time\":9.5709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":74,\"name\":\"D5\",\"ticks\":26645,\"time\":9.7576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":26645,\"time\":9.7576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":50,\"name\":\"D3\",\"ticks\":26645,\"time\":9.7576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":62,\"name\":\"D4\",\"ticks\":26645,\"time\":9.7576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":40,\"name\":\"E2\",\"ticks\":27155,\"time\":9.9444580078125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":52,\"name\":\"E3\",\"ticks\":27155,\"time\":9.9444580078125,\"velocity\":0.7401574803149606},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":76,\"name\":\"E5\",\"ticks\":27660,\"time\":10.12939453125,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":88,\"name\":\"E6\",\"ticks\":27660,\"time\":10.12939453125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":27660,\"time\":10.12939453125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":56,\"name\":\"G#3\",\"ticks\":27660,\"time\":10.12939453125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":27660,\"time\":10.12939453125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":44,\"name\":\"G#2\",\"ticks\":28165,\"time\":10.3143310546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":56,\"name\":\"G#3\",\"ticks\":28165,\"time\":10.3143310546875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":72,\"name\":\"C5\",\"ticks\":28676,\"time\":10.50146484375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":84,\"name\":\"C6\",\"ticks\":28676,\"time\":10.50146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":28676,\"time\":10.50146484375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":28676,\"time\":10.50146484375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":48,\"name\":\"C3\",\"ticks\":29218,\"time\":10.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":29218,\"time\":10.699951171875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":57,\"name\":\"A3\",\"ticks\":29218,\"time\":10.699951171875,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":69,\"name\":\"A4\",\"ticks\":29726,\"time\":10.885986328125,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":29726,\"time\":10.885986328125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":29726,\"time\":10.885986328125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":29726,\"time\":10.885986328125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":30231,\"time\":11.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":57,\"name\":\"A3\",\"ticks\":30231,\"time\":11.0709228515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":30231,\"time\":11.0709228515625,\"velocity\":0.7401574803149606},{\"duration\":0.37500842675781243,\"durationTicks\":1014,\"midi\":69,\"name\":\"A4\",\"ticks\":30741,\"time\":11.2576904296875,\"velocity\":0.6535433070866141},{\"duration\":0.37500842675781243,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":30741,\"time\":11.2576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.17597690624999984,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":30741,\"time\":11.2576904296875,\"velocity\":0.6299212598425197},{\"duration\":0.18707429296875056,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":30741,\"time\":11.2576904296875,\"velocity\":0.7637795275590551},{\"duration\":0.1763407294921855,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":31251,\"time\":11.445135568359376,\"velocity\":0.6299212598425197},{\"duration\":0.1763407294921855,\"durationTicks\":474,\"midi\":60,\"name\":\"C4\",\"ticks\":31251,\"time\":11.445135568359376,\"velocity\":0.6299212598425197},{\"duration\":0.18756328808593636,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":31251,\"time\":11.445135568359376,\"velocity\":0.7401574803149606},{\"duration\":0.09051974121093842,\"durationTicks\":241,\"midi\":40,\"name\":\"E2\",\"ticks\":31756,\"time\":11.633074457031249,\"velocity\":0.6299212598425197},{\"duration\":0.09615374999999915,\"durationTicks\":256,\"midi\":52,\"name\":\"E3\",\"ticks\":31756,\"time\":11.633074457031249,\"velocity\":0.7480314960629921},{\"duration\":0.08713933593750056,\"durationTicks\":232,\"midi\":38,\"name\":\"D2\",\"ticks\":32013,\"time\":11.729603807617186,\"velocity\":0.6220472440944882},{\"duration\":0.09278303613281125,\"durationTicks\":247,\"midi\":50,\"name\":\"D3\",\"ticks\":32013,\"time\":11.729603807617186,\"velocity\":0.7401574803149606},{\"duration\":0.08770143749999981,\"durationTicks\":232,\"midi\":36,\"name\":\"C2\",\"ticks\":32261,\"time\":11.822764867187498,\"velocity\":0.6141732283464567},{\"duration\":0.0933717890625001,\"durationTicks\":247,\"midi\":48,\"name\":\"C3\",\"ticks\":32261,\"time\":11.822764867187498,\"velocity\":0.7401574803149606},{\"duration\":0.09244891406249955,\"durationTicks\":243,\"midi\":35,\"name\":\"B1\",\"ticks\":32509,\"time\":11.916514679687499,\"velocity\":0.6141732283464567},{\"duration\":0.09815609179687357,\"durationTicks\":258,\"midi\":47,\"name\":\"B2\",\"ticks\":32509,\"time\":11.916514679687499,\"velocity\":0.7401574803149606},{\"duration\":0.3877507031250005,\"durationTicks\":1049,\"midi\":88,\"name\":\"E6\",\"ticks\":32772,\"time\":12.016573164062498,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250005,\"durationTicks\":1049,\"midi\":100,\"name\":\"E7\",\"ticks\":32772,\"time\":12.016573164062498,\"velocity\":0.7795275590551181},{\"duration\":0.19072921875000048,\"durationTicks\":511,\"midi\":28,\"name\":\"E1\",\"ticks\":32772,\"time\":12.016573164062498,\"velocity\":0.6377952755905512},{\"duration\":0.20171554687500048,\"durationTicks\":541,\"midi\":40,\"name\":\"E2\",\"ticks\":32772,\"time\":12.016573164062498,\"velocity\":0.7716535433070866},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":33314,\"time\":12.218654921874998,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":55,\"name\":\"G3\",\"ticks\":33314,\"time\":12.218654921874998,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":33314,\"time\":12.218654921874998,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":83,\"name\":\"B5\",\"ticks\":33822,\"time\":12.404690078124998,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":95,\"name\":\"B6\",\"ticks\":33822,\"time\":12.404690078124998,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":33822,\"time\":12.404690078124998,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":33822,\"time\":12.404690078124998,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":34327,\"time\":12.589626601562498,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":34327,\"time\":12.589626601562498,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":34327,\"time\":12.589626601562498,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":55,\"name\":\"G3\",\"ticks\":34327,\"time\":12.589626601562498,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":34327,\"time\":12.589626601562498,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":86,\"name\":\"D6\",\"ticks\":34837,\"time\":12.776394179687498,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":98,\"name\":\"D7\",\"ticks\":34837,\"time\":12.776394179687498,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":28,\"name\":\"E1\",\"ticks\":34837,\"time\":12.776394179687498,\"velocity\":0.6220472440944882},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":40,\"name\":\"E2\",\"ticks\":34837,\"time\":12.776394179687498,\"velocity\":0.7559055118110236},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":100,\"name\":\"E7\",\"ticks\":35347,\"time\":12.963161757812498,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":35347,\"time\":12.963161757812498,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":55,\"name\":\"G3\",\"ticks\":35347,\"time\":12.963161757812498,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":35347,\"time\":12.963161757812498,\"velocity\":0.7401574803149606},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":98,\"name\":\"D7\",\"ticks\":35595,\"time\":13.053982070312498,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":84,\"name\":\"C6\",\"ticks\":35852,\"time\":13.148098281249998,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":96,\"name\":\"C7\",\"ticks\":35852,\"time\":13.148098281249998,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":35852,\"time\":13.148098281249998,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":35852,\"time\":13.148098281249998,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":83,\"name\":\"B5\",\"ticks\":36357,\"time\":13.333034804687498,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":95,\"name\":\"B6\",\"ticks\":36357,\"time\":13.333034804687498,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":36357,\"time\":13.333034804687498,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":55,\"name\":\"G3\",\"ticks\":36357,\"time\":13.333034804687498,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":59,\"name\":\"B3\",\"ticks\":36357,\"time\":13.333034804687498,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":81,\"name\":\"A5\",\"ticks\":36868,\"time\":13.520168593749998,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":93,\"name\":\"A6\",\"ticks\":36868,\"time\":13.520168593749998,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":36868,\"time\":13.520168593749998,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":36868,\"time\":13.520168593749998,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":37410,\"time\":13.718654921874998,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":57,\"name\":\"A3\",\"ticks\":37410,\"time\":13.718654921874998,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":37410,\"time\":13.718654921874998,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":81,\"name\":\"A5\",\"ticks\":37918,\"time\":13.904690078124998,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":93,\"name\":\"A6\",\"ticks\":37918,\"time\":13.904690078124998,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":37918,\"time\":13.904690078124998,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":37918,\"time\":13.904690078124998,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":38423,\"time\":14.089626601562498,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":38423,\"time\":14.089626601562498,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":48,\"name\":\"C3\",\"ticks\":38423,\"time\":14.089626601562498,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":38423,\"time\":14.089626601562498,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":57,\"name\":\"A3\",\"ticks\":38423,\"time\":14.089626601562498,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":38933,\"time\":14.276394179687498,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":100,\"name\":\"E7\",\"ticks\":38933,\"time\":14.276394179687498,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":38933,\"time\":14.276394179687498,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":38933,\"time\":14.276394179687498,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":39443,\"time\":14.463161757812498,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":39443,\"time\":14.463161757812498,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":39443,\"time\":14.463161757812498,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":86,\"name\":\"D6\",\"ticks\":39948,\"time\":14.648098281249998,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":98,\"name\":\"D7\",\"ticks\":39948,\"time\":14.648098281249998,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":39948,\"time\":14.648098281249998,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":39948,\"time\":14.648098281249998,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":84,\"name\":\"C6\",\"ticks\":40453,\"time\":14.833034804687498,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":96,\"name\":\"C7\",\"ticks\":40453,\"time\":14.833034804687498,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":57,\"name\":\"A3\",\"ticks\":40453,\"time\":14.833034804687498,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":60,\"name\":\"C4\",\"ticks\":40453,\"time\":14.833034804687498,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":64,\"name\":\"E4\",\"ticks\":40453,\"time\":14.833034804687498,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":83,\"name\":\"B5\",\"ticks\":40964,\"time\":15.020168593749998,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":95,\"name\":\"B6\",\"ticks\":40964,\"time\":15.020168593749998,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":32,\"name\":\"G#1\",\"ticks\":40964,\"time\":15.020168593749998,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":44,\"name\":\"G#2\",\"ticks\":40964,\"time\":15.020168593749998,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":41506,\"time\":15.218654921874998,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":56,\"name\":\"G#3\",\"ticks\":41506,\"time\":15.218654921874998,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":41506,\"time\":15.218654921874998,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":83,\"name\":\"B5\",\"ticks\":42014,\"time\":15.404690078124998,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":95,\"name\":\"B6\",\"ticks\":42014,\"time\":15.404690078124998,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":42014,\"time\":15.404690078124998,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":42014,\"time\":15.404690078124998,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":42519,\"time\":15.589626601562498,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":42519,\"time\":15.589626601562498,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":42519,\"time\":15.589626601562498,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":56,\"name\":\"G#3\",\"ticks\":42519,\"time\":15.589626601562498,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":42519,\"time\":15.589626601562498,\"velocity\":0.7401574803149606},{\"duration\":0.3713378906250018,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":43029,\"time\":15.776394179687498,\"velocity\":0.6535433070866141},{\"duration\":0.3713378906250018,\"durationTicks\":1014,\"midi\":98,\"name\":\"D7\",\"ticks\":43029,\"time\":15.776394179687498,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":32,\"name\":\"G#1\",\"ticks\":43029,\"time\":15.776394179687498,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":44,\"name\":\"G#2\",\"ticks\":43029,\"time\":15.776394179687498,\"velocity\":0.7637795275590551},{\"duration\":0.17358398437500178,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":43539,\"time\":15.963161757812498,\"velocity\":0.6299212598425197},{\"duration\":0.17358398437500178,\"durationTicks\":474,\"midi\":56,\"name\":\"G#3\",\"ticks\":43539,\"time\":15.963161757812498,\"velocity\":0.6299212598425197},{\"duration\":0.18457031250000178,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":43539,\"time\":15.963161757812498,\"velocity\":0.6299212598425197},{\"duration\":0.18457031250000178,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":43539,\"time\":15.963161757812498,\"velocity\":0.7401574803149606},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":88,\"name\":\"E6\",\"ticks\":44044,\"time\":16.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":100,\"name\":\"E7\",\"ticks\":44044,\"time\":16.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":44044,\"time\":16.14809828125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":44044,\"time\":16.14809828125,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":44549,\"time\":16.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":56,\"name\":\"G#3\",\"ticks\":44549,\"time\":16.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":59,\"name\":\"B3\",\"ticks\":44549,\"time\":16.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":64,\"name\":\"E4\",\"ticks\":44549,\"time\":16.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":84,\"name\":\"C6\",\"ticks\":45060,\"time\":16.52016859375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":96,\"name\":\"C7\",\"ticks\":45060,\"time\":16.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":45060,\"time\":16.52016859375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":45060,\"time\":16.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":48,\"name\":\"C3\",\"ticks\":45602,\"time\":16.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":52,\"name\":\"E3\",\"ticks\":45602,\"time\":16.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":57,\"name\":\"A3\",\"ticks\":45602,\"time\":16.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":45602,\"time\":16.718654921875,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":46110,\"time\":16.904690078125,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":46110,\"time\":16.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":21,\"name\":\"A0\",\"ticks\":46110,\"time\":16.904690078125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":33,\"name\":\"A1\",\"ticks\":46110,\"time\":16.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":46615,\"time\":17.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":57,\"name\":\"A3\",\"ticks\":46615,\"time\":17.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":46615,\"time\":17.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":64,\"name\":\"E4\",\"ticks\":46615,\"time\":17.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":47125,\"time\":17.2763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":47125,\"time\":17.2763941796875,\"velocity\":0.7322834645669292},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":47125,\"time\":17.2763941796875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":47125,\"time\":17.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":57,\"name\":\"A3\",\"ticks\":47635,\"time\":17.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":47635,\"time\":17.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":47635,\"time\":17.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":47635,\"time\":17.4631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":93,\"name\":\"A6\",\"ticks\":48140,\"time\":17.64809828125,\"velocity\":0.7007874015748031},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":57,\"name\":\"A3\",\"ticks\":48140,\"time\":17.64809828125,\"velocity\":0.7007874015748031},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":95,\"name\":\"B6\",\"ticks\":48397,\"time\":17.7422144921875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":59,\"name\":\"B3\",\"ticks\":48397,\"time\":17.7422144921875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":96,\"name\":\"C7\",\"ticks\":48645,\"time\":17.8330348046875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":60,\"name\":\"C4\",\"ticks\":48645,\"time\":17.8330348046875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":98,\"name\":\"D7\",\"ticks\":48893,\"time\":17.9238551171875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":62,\"name\":\"D4\",\"ticks\":48893,\"time\":17.9238551171875,\"velocity\":0.6929133858267716},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":88,\"name\":\"E6\",\"ticks\":49156,\"time\":18.02016859375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":100,\"name\":\"E7\",\"ticks\":49156,\"time\":18.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":52,\"name\":\"E3\",\"ticks\":49156,\"time\":18.02016859375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":64,\"name\":\"E4\",\"ticks\":49156,\"time\":18.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":86,\"name\":\"D6\",\"ticks\":49698,\"time\":18.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":98,\"name\":\"D7\",\"ticks\":49698,\"time\":18.218654921875,\"velocity\":0.7401574803149606},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":38,\"name\":\"D2\",\"ticks\":49698,\"time\":18.218654921875,\"velocity\":0.6220472440944882},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":41,\"name\":\"F2\",\"ticks\":49698,\"time\":18.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":45,\"name\":\"A2\",\"ticks\":49698,\"time\":18.218654921875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":50,\"name\":\"D3\",\"ticks\":50206,\"time\":18.404690078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":65,\"name\":\"F4\",\"ticks\":50206,\"time\":18.404690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":89,\"name\":\"F6\",\"ticks\":50711,\"time\":18.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":101,\"name\":\"F7\",\"ticks\":50711,\"time\":18.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":38,\"name\":\"D2\",\"ticks\":50711,\"time\":18.5896266015625,\"velocity\":0.6220472440944882},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":41,\"name\":\"F2\",\"ticks\":50711,\"time\":18.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":50711,\"time\":18.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":51221,\"time\":18.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":105,\"name\":\"A7\",\"ticks\":51221,\"time\":18.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":57,\"name\":\"A3\",\"ticks\":51221,\"time\":18.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":51221,\"time\":18.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":38,\"name\":\"D2\",\"ticks\":51731,\"time\":18.9631617578125,\"velocity\":0.6220472440944882},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":41,\"name\":\"F2\",\"ticks\":51731,\"time\":18.9631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":51731,\"time\":18.9631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":91,\"name\":\"G6\",\"ticks\":52236,\"time\":19.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":103,\"name\":\"G7\",\"ticks\":52236,\"time\":19.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":45,\"name\":\"A2\",\"ticks\":52236,\"time\":19.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":57,\"name\":\"A3\",\"ticks\":52236,\"time\":19.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":89,\"name\":\"F6\",\"ticks\":52741,\"time\":19.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":101,\"name\":\"F7\",\"ticks\":52741,\"time\":19.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":41,\"name\":\"F2\",\"ticks\":52741,\"time\":19.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":53,\"name\":\"F3\",\"ticks\":52741,\"time\":19.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.569091796875,\"durationTicks\":1554,\"midi\":88,\"name\":\"E6\",\"ticks\":53252,\"time\":19.52016859375,\"velocity\":0.6692913385826772},{\"duration\":0.569091796875,\"durationTicks\":1554,\"midi\":100,\"name\":\"E7\",\"ticks\":53252,\"time\":19.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":36,\"name\":\"C2\",\"ticks\":53252,\"time\":19.52016859375,\"velocity\":0.6535433070866141},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":48,\"name\":\"C3\",\"ticks\":53252,\"time\":19.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":48,\"name\":\"C3\",\"ticks\":53794,\"time\":19.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":53794,\"time\":19.718654921875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":36,\"name\":\"C2\",\"ticks\":54302,\"time\":19.904690078125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":48,\"name\":\"C3\",\"ticks\":54302,\"time\":19.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":54807,\"time\":20.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":54807,\"time\":20.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":48,\"name\":\"C3\",\"ticks\":54807,\"time\":20.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":54807,\"time\":20.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":55317,\"time\":20.2763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":100,\"name\":\"E7\",\"ticks\":55317,\"time\":20.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":36,\"name\":\"C2\",\"ticks\":55317,\"time\":20.2763941796875,\"velocity\":0.6377952755905512},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":48,\"name\":\"C3\",\"ticks\":55317,\"time\":20.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":55827,\"time\":20.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":55827,\"time\":20.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":55827,\"time\":20.4631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":86,\"name\":\"D6\",\"ticks\":56332,\"time\":20.64809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":98,\"name\":\"D7\",\"ticks\":56332,\"time\":20.64809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":31,\"name\":\"G1\",\"ticks\":56332,\"time\":20.64809828125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":43,\"name\":\"G2\",\"ticks\":56332,\"time\":20.64809828125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":84,\"name\":\"C6\",\"ticks\":56837,\"time\":20.8330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":96,\"name\":\"C7\",\"ticks\":56837,\"time\":20.8330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":56837,\"time\":20.8330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":57,\"name\":\"A3\",\"ticks\":56837,\"time\":20.8330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":60,\"name\":\"C4\",\"ticks\":56837,\"time\":20.8330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":83,\"name\":\"B5\",\"ticks\":57348,\"time\":21.02016859375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":95,\"name\":\"B6\",\"ticks\":57348,\"time\":21.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":35,\"name\":\"B1\",\"ticks\":57348,\"time\":21.02016859375,\"velocity\":0.6535433070866141},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":47,\"name\":\"B2\",\"ticks\":57348,\"time\":21.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":47,\"name\":\"B2\",\"ticks\":57890,\"time\":21.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":57890,\"time\":21.218654921875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":83,\"name\":\"B5\",\"ticks\":58398,\"time\":21.404690078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":95,\"name\":\"B6\",\"ticks\":58398,\"time\":21.404690078125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":35,\"name\":\"B1\",\"ticks\":58398,\"time\":21.404690078125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":47,\"name\":\"B2\",\"ticks\":58398,\"time\":21.404690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":58903,\"time\":21.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":58903,\"time\":21.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":47,\"name\":\"B2\",\"ticks\":58903,\"time\":21.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":58903,\"time\":21.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":59413,\"time\":21.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":98,\"name\":\"D7\",\"ticks\":59413,\"time\":21.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":50,\"name\":\"D3\",\"ticks\":59413,\"time\":21.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":62,\"name\":\"D4\",\"ticks\":59413,\"time\":21.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":40,\"name\":\"E2\",\"ticks\":59923,\"time\":21.9631617578125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":52,\"name\":\"E3\",\"ticks\":59923,\"time\":21.9631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":88,\"name\":\"E6\",\"ticks\":60428,\"time\":22.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":100,\"name\":\"E7\",\"ticks\":60428,\"time\":22.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":60428,\"time\":22.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":56,\"name\":\"G#3\",\"ticks\":60428,\"time\":22.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":60428,\"time\":22.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":44,\"name\":\"G#2\",\"ticks\":60933,\"time\":22.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":56,\"name\":\"G#3\",\"ticks\":60933,\"time\":22.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":84,\"name\":\"C6\",\"ticks\":61444,\"time\":22.52016859375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":96,\"name\":\"C7\",\"ticks\":61444,\"time\":22.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":61444,\"time\":22.52016859375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":61444,\"time\":22.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":48,\"name\":\"C3\",\"ticks\":61986,\"time\":22.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":61986,\"time\":22.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":57,\"name\":\"A3\",\"ticks\":61986,\"time\":22.718654921875,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":62494,\"time\":22.904690078125,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":62494,\"time\":22.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":62494,\"time\":22.904690078125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":62494,\"time\":22.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":62999,\"time\":23.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":57,\"name\":\"A3\",\"ticks\":62999,\"time\":23.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":62999,\"time\":23.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":63509,\"time\":23.2763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":63509,\"time\":23.2763941796875,\"velocity\":0.7322834645669292},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":63509,\"time\":23.2763941796875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":63509,\"time\":23.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":64019,\"time\":23.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":60,\"name\":\"C4\",\"ticks\":64019,\"time\":23.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":64019,\"time\":23.4631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":21,\"name\":\"A0\",\"ticks\":64524,\"time\":23.64809828125,\"velocity\":0.6141732283464567},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":33,\"name\":\"A1\",\"ticks\":64524,\"time\":23.64809828125,\"velocity\":0.7480314960629921},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":88,\"name\":\"E6\",\"ticks\":65540,\"time\":24.02016859375,\"velocity\":0.5354330708661418},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":52,\"name\":\"E3\",\"ticks\":65540,\"time\":24.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":57,\"name\":\"A3\",\"ticks\":65540,\"time\":24.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":60,\"name\":\"C4\",\"ticks\":65540,\"time\":24.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":64,\"name\":\"E4\",\"ticks\":65540,\"time\":24.02016859375,\"velocity\":0.6771653543307087},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":81,\"name\":\"A5\",\"ticks\":65833,\"time\":24.1274683984375,\"velocity\":0.49606299212598426},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":93,\"name\":\"A6\",\"ticks\":66082,\"time\":24.218654921875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":66331,\"time\":24.3098414453125,\"velocity\":0.49606299212598426},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":84,\"name\":\"C6\",\"ticks\":66590,\"time\":24.404690078125,\"velocity\":0.5039370078740157},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":66848,\"time\":24.4991725,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":67095,\"time\":24.5896266015625,\"velocity\":0.49606299212598426},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":81,\"name\":\"A5\",\"ticks\":67343,\"time\":24.6804469140625,\"velocity\":0.49606299212598426},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":88,\"name\":\"E6\",\"ticks\":67605,\"time\":24.7763941796875,\"velocity\":0.5196850393700787},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":48,\"name\":\"C3\",\"ticks\":67605,\"time\":24.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":52,\"name\":\"E3\",\"ticks\":67605,\"time\":24.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":57,\"name\":\"A3\",\"ticks\":67605,\"time\":24.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":60,\"name\":\"C4\",\"ticks\":67605,\"time\":24.7763941796875,\"velocity\":0.6614173228346457},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":67868,\"time\":24.87270765625,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":68115,\"time\":24.9631617578125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":81,\"name\":\"A5\",\"ticks\":68363,\"time\":25.0539820703125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":84,\"name\":\"C6\",\"ticks\":68620,\"time\":25.14809828125,\"velocity\":0.5039370078740157},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":81,\"name\":\"A5\",\"ticks\":68877,\"time\":25.2422144921875,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":69125,\"time\":25.3330348046875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":69373,\"time\":25.4238551171875,\"velocity\":0.49606299212598426},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":88,\"name\":\"E6\",\"ticks\":69636,\"time\":25.52016859375,\"velocity\":0.5354330708661418},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":50,\"name\":\"D3\",\"ticks\":69636,\"time\":25.52016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":52,\"name\":\"E3\",\"ticks\":69636,\"time\":25.52016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":56,\"name\":\"G#3\",\"ticks\":69636,\"time\":25.52016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":59,\"name\":\"B3\",\"ticks\":69636,\"time\":25.52016859375,\"velocity\":0.6771653543307087},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":80,\"name\":\"G#5\",\"ticks\":69929,\"time\":25.6274683984375,\"velocity\":0.49606299212598426},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":92,\"name\":\"G#6\",\"ticks\":70178,\"time\":25.718654921875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":80,\"name\":\"G#5\",\"ticks\":70427,\"time\":25.8098414453125,\"velocity\":0.49606299212598426},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":86,\"name\":\"D6\",\"ticks\":70686,\"time\":25.904690078125,\"velocity\":0.5039370078740157},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":70944,\"time\":25.9991725,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":71191,\"time\":26.0896266015625,\"velocity\":0.49606299212598426},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":80,\"name\":\"G#5\",\"ticks\":71439,\"time\":26.1804469140625,\"velocity\":0.49606299212598426},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":88,\"name\":\"E6\",\"ticks\":71701,\"time\":26.2763941796875,\"velocity\":0.5196850393700787},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":47,\"name\":\"B2\",\"ticks\":71701,\"time\":26.2763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":52,\"name\":\"E3\",\"ticks\":71701,\"time\":26.2763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":56,\"name\":\"G#3\",\"ticks\":71701,\"time\":26.2763941796875,\"velocity\":0.6614173228346457},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":71964,\"time\":26.37270765625,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":72211,\"time\":26.4631617578125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":80,\"name\":\"G#5\",\"ticks\":72459,\"time\":26.5539820703125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":83,\"name\":\"B5\",\"ticks\":72716,\"time\":26.64809828125,\"velocity\":0.5039370078740157},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":80,\"name\":\"G#5\",\"ticks\":72973,\"time\":26.7422144921875,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":73221,\"time\":26.8330348046875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":80,\"name\":\"G#5\",\"ticks\":73469,\"time\":26.9238551171875,\"velocity\":0.49606299212598426},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":88,\"name\":\"E6\",\"ticks\":73732,\"time\":27.02016859375,\"velocity\":0.5354330708661418},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":48,\"name\":\"C3\",\"ticks\":73732,\"time\":27.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":52,\"name\":\"E3\",\"ticks\":73732,\"time\":27.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":57,\"name\":\"A3\",\"ticks\":73732,\"time\":27.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":60,\"name\":\"C4\",\"ticks\":73732,\"time\":27.02016859375,\"velocity\":0.6771653543307087},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":81,\"name\":\"A5\",\"ticks\":74025,\"time\":27.1274683984375,\"velocity\":0.49606299212598426},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":93,\"name\":\"A6\",\"ticks\":74274,\"time\":27.218654921875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":74523,\"time\":27.3098414453125,\"velocity\":0.49606299212598426},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":84,\"name\":\"C6\",\"ticks\":74782,\"time\":27.404690078125,\"velocity\":0.5039370078740157},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":75040,\"time\":27.4991725,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":75287,\"time\":27.5896266015625,\"velocity\":0.49606299212598426},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":81,\"name\":\"A5\",\"ticks\":75535,\"time\":27.6804469140625,\"velocity\":0.49606299212598426},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":88,\"name\":\"E6\",\"ticks\":75797,\"time\":27.7763941796875,\"velocity\":0.5196850393700787},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":45,\"name\":\"A2\",\"ticks\":75797,\"time\":27.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":48,\"name\":\"C3\",\"ticks\":75797,\"time\":27.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":52,\"name\":\"E3\",\"ticks\":75797,\"time\":27.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":57,\"name\":\"A3\",\"ticks\":75797,\"time\":27.7763941796875,\"velocity\":0.6614173228346457},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":76060,\"time\":27.87270765625,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":76307,\"time\":27.9631617578125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":81,\"name\":\"A5\",\"ticks\":76555,\"time\":28.0539820703125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":84,\"name\":\"C6\",\"ticks\":76812,\"time\":28.14809828125,\"velocity\":0.5039370078740157},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":81,\"name\":\"A5\",\"ticks\":77069,\"time\":28.2422144921875,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":77317,\"time\":28.3330348046875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":77565,\"time\":28.4238551171875,\"velocity\":0.49606299212598426},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":88,\"name\":\"E6\",\"ticks\":77828,\"time\":28.52016859375,\"velocity\":0.5354330708661418},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":44,\"name\":\"G#2\",\"ticks\":77828,\"time\":28.52016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":47,\"name\":\"B2\",\"ticks\":77828,\"time\":28.52016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":52,\"name\":\"E3\",\"ticks\":77828,\"time\":28.52016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":56,\"name\":\"G#3\",\"ticks\":77828,\"time\":28.52016859375,\"velocity\":0.6771653543307087},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":80,\"name\":\"G#5\",\"ticks\":78121,\"time\":28.6274683984375,\"velocity\":0.49606299212598426},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":92,\"name\":\"G#6\",\"ticks\":78370,\"time\":28.718654921875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":80,\"name\":\"G#5\",\"ticks\":78619,\"time\":28.8098414453125,\"velocity\":0.49606299212598426},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":86,\"name\":\"D6\",\"ticks\":78878,\"time\":28.904690078125,\"velocity\":0.5039370078740157},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":79136,\"time\":28.9991725,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":79383,\"time\":29.0896266015625,\"velocity\":0.49606299212598426},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":80,\"name\":\"G#5\",\"ticks\":79631,\"time\":29.1804469140625,\"velocity\":0.49606299212598426},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":88,\"name\":\"E6\",\"ticks\":79893,\"time\":29.2763941796875,\"velocity\":0.5196850393700787},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":47,\"name\":\"B2\",\"ticks\":79893,\"time\":29.2763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":52,\"name\":\"E3\",\"ticks\":79893,\"time\":29.2763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":59,\"name\":\"B3\",\"ticks\":79893,\"time\":29.2763941796875,\"velocity\":0.6614173228346457},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":80156,\"time\":29.37270765625,\"velocity\":0.49606299212598426},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":92,\"name\":\"G#6\",\"ticks\":80403,\"time\":29.4631617578125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":92,\"name\":\"G#6\",\"ticks\":80651,\"time\":29.5539820703125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":104,\"name\":\"G#7\",\"ticks\":80908,\"time\":29.64809828125,\"velocity\":0.5039370078740157},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":92,\"name\":\"G#6\",\"ticks\":81165,\"time\":29.7422144921875,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":81413,\"time\":29.8330348046875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":80,\"name\":\"G#5\",\"ticks\":81661,\"time\":29.9238551171875,\"velocity\":0.49606299212598426},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":88,\"name\":\"E6\",\"ticks\":81924,\"time\":30.02016859375,\"velocity\":0.5354330708661418},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":52,\"name\":\"E3\",\"ticks\":81924,\"time\":30.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":57,\"name\":\"A3\",\"ticks\":81924,\"time\":30.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":60,\"name\":\"C4\",\"ticks\":81924,\"time\":30.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":64,\"name\":\"E4\",\"ticks\":81924,\"time\":30.02016859375,\"velocity\":0.6771653543307087},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":81,\"name\":\"A5\",\"ticks\":82217,\"time\":30.1274683984375,\"velocity\":0.49606299212598426},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":93,\"name\":\"A6\",\"ticks\":82466,\"time\":30.218654921875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":82715,\"time\":30.3098414453125,\"velocity\":0.49606299212598426},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":84,\"name\":\"C6\",\"ticks\":82974,\"time\":30.404690078125,\"velocity\":0.5039370078740157},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":83232,\"time\":30.4991725,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":83479,\"time\":30.5896266015625,\"velocity\":0.49606299212598426},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":81,\"name\":\"A5\",\"ticks\":83727,\"time\":30.6804469140625,\"velocity\":0.49606299212598426},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":88,\"name\":\"E6\",\"ticks\":83989,\"time\":30.7763941796875,\"velocity\":0.5196850393700787},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":48,\"name\":\"C3\",\"ticks\":83989,\"time\":30.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":52,\"name\":\"E3\",\"ticks\":83989,\"time\":30.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":57,\"name\":\"A3\",\"ticks\":83989,\"time\":30.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":60,\"name\":\"C4\",\"ticks\":83989,\"time\":30.7763941796875,\"velocity\":0.6614173228346457},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":84252,\"time\":30.87270765625,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":84499,\"time\":30.9631617578125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":81,\"name\":\"A5\",\"ticks\":84747,\"time\":31.0539820703125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":84,\"name\":\"C6\",\"ticks\":85004,\"time\":31.14809828125,\"velocity\":0.5039370078740157},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":81,\"name\":\"A5\",\"ticks\":85261,\"time\":31.2422144921875,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":85509,\"time\":31.3330348046875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":85757,\"time\":31.4238551171875,\"velocity\":0.49606299212598426},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":88,\"name\":\"E6\",\"ticks\":86020,\"time\":31.52016859375,\"velocity\":0.5354330708661418},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":50,\"name\":\"D3\",\"ticks\":86020,\"time\":31.52016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":52,\"name\":\"E3\",\"ticks\":86020,\"time\":31.52016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":56,\"name\":\"G#3\",\"ticks\":86020,\"time\":31.52016859375,\"velocity\":0.5669291338582677},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":59,\"name\":\"B3\",\"ticks\":86020,\"time\":31.52016859375,\"velocity\":0.6771653543307087},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":80,\"name\":\"G#5\",\"ticks\":86313,\"time\":31.6274683984375,\"velocity\":0.49606299212598426},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":92,\"name\":\"G#6\",\"ticks\":86562,\"time\":31.718654921875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":80,\"name\":\"G#5\",\"ticks\":86811,\"time\":31.8098414453125,\"velocity\":0.49606299212598426},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":86,\"name\":\"D6\",\"ticks\":87070,\"time\":31.904690078125,\"velocity\":0.5039370078740157},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":87328,\"time\":31.9991725,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":87575,\"time\":32.0896266015625,\"velocity\":0.49606299212598426},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":80,\"name\":\"G#5\",\"ticks\":87823,\"time\":32.1804469140625,\"velocity\":0.49606299212598426},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":88,\"name\":\"E6\",\"ticks\":88085,\"time\":32.2763941796875,\"velocity\":0.5196850393700787},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":47,\"name\":\"B2\",\"ticks\":88085,\"time\":32.2763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":52,\"name\":\"E3\",\"ticks\":88085,\"time\":32.2763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":56,\"name\":\"G#3\",\"ticks\":88085,\"time\":32.2763941796875,\"velocity\":0.6614173228346457},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":88348,\"time\":32.37270765625,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":88595,\"time\":32.4631617578125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":80,\"name\":\"G#5\",\"ticks\":88843,\"time\":32.5539820703125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":83,\"name\":\"B5\",\"ticks\":89100,\"time\":32.64809828125,\"velocity\":0.5039370078740157},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":80,\"name\":\"G#5\",\"ticks\":89357,\"time\":32.7422144921875,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":89605,\"time\":32.8330348046875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":80,\"name\":\"G#5\",\"ticks\":89853,\"time\":32.9238551171875,\"velocity\":0.49606299212598426},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":88,\"name\":\"E6\",\"ticks\":90116,\"time\":33.02016859375,\"velocity\":0.5354330708661418},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":48,\"name\":\"C3\",\"ticks\":90116,\"time\":33.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":90116,\"time\":33.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":57,\"name\":\"A3\",\"ticks\":90116,\"time\":33.02016859375,\"velocity\":0.5669291338582677},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":60,\"name\":\"C4\",\"ticks\":90116,\"time\":33.02016859375,\"velocity\":0.6771653543307087},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":81,\"name\":\"A5\",\"ticks\":90409,\"time\":33.1274683984375,\"velocity\":0.49606299212598426},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":93,\"name\":\"A6\",\"ticks\":90658,\"time\":33.218654921875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":90907,\"time\":33.3098414453125,\"velocity\":0.49606299212598426},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":84,\"name\":\"C6\",\"ticks\":91166,\"time\":33.404690078125,\"velocity\":0.5039370078740157},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":91166,\"time\":33.404690078125,\"velocity\":0.5354330708661418},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":57,\"name\":\"A3\",\"ticks\":91166,\"time\":33.404690078125,\"velocity\":0.5354330708661418},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":60,\"name\":\"C4\",\"ticks\":91166,\"time\":33.404690078125,\"velocity\":0.5354330708661418},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":64,\"name\":\"E4\",\"ticks\":91166,\"time\":33.404690078125,\"velocity\":0.6456692913385826},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":91424,\"time\":33.4991725,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":91671,\"time\":33.5896266015625,\"velocity\":0.49606299212598426},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":81,\"name\":\"A5\",\"ticks\":91919,\"time\":33.6804469140625,\"velocity\":0.49606299212598426},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":88,\"name\":\"E6\",\"ticks\":92181,\"time\":33.7763941796875,\"velocity\":0.5196850393700787},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":57,\"name\":\"A3\",\"ticks\":92181,\"time\":33.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":60,\"name\":\"C4\",\"ticks\":92181,\"time\":33.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":64,\"name\":\"E4\",\"ticks\":92181,\"time\":33.7763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":69,\"name\":\"A4\",\"ticks\":92181,\"time\":33.7763941796875,\"velocity\":0.6614173228346457},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":92444,\"time\":33.87270765625,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":92691,\"time\":33.9631617578125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":81,\"name\":\"A5\",\"ticks\":92939,\"time\":34.0539820703125,\"velocity\":0.49606299212598426},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":84,\"name\":\"C6\",\"ticks\":93196,\"time\":34.14809828125,\"velocity\":0.5039370078740157},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":81,\"name\":\"A5\",\"ticks\":93453,\"time\":34.2422144921875,\"velocity\":0.49606299212598426},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":93701,\"time\":34.3330348046875,\"velocity\":0.49606299212598426},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":93949,\"time\":34.4238551171875,\"velocity\":0.49606299212598426},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":88,\"name\":\"E6\",\"ticks\":94212,\"time\":34.52016859375,\"velocity\":0.49606299212598426},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":56,\"name\":\"G#3\",\"ticks\":94212,\"time\":34.52016859375,\"velocity\":0.5275590551181102},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":59,\"name\":\"B3\",\"ticks\":94212,\"time\":34.52016859375,\"velocity\":0.5275590551181102},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":64,\"name\":\"E4\",\"ticks\":94212,\"time\":34.52016859375,\"velocity\":0.5275590551181102},{\"duration\":0.755859375,\"durationTicks\":2064,\"midi\":68,\"name\":\"G#4\",\"ticks\":94212,\"time\":34.52016859375,\"velocity\":0.6377952755905512},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":80,\"name\":\"G#5\",\"ticks\":94505,\"time\":34.6274683984375,\"velocity\":0.49606299212598426},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":92,\"name\":\"G#6\",\"ticks\":94754,\"time\":34.718654921875,\"velocity\":0.5039370078740157},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":80,\"name\":\"G#5\",\"ticks\":95003,\"time\":34.8098414453125,\"velocity\":0.5118110236220472},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":83,\"name\":\"B5\",\"ticks\":95262,\"time\":34.904690078125,\"velocity\":0.5196850393700787},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":95520,\"time\":34.9991725,\"velocity\":0.5275590551181102},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":95767,\"time\":35.0896266015625,\"velocity\":0.5275590551181102},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":80,\"name\":\"G#5\",\"ticks\":96015,\"time\":35.1804469140625,\"velocity\":0.5354330708661418},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":88,\"name\":\"E6\",\"ticks\":96277,\"time\":35.2763941796875,\"velocity\":0.5433070866141733},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":32,\"name\":\"G#1\",\"ticks\":96277,\"time\":35.2763941796875,\"velocity\":0.5511811023622047},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":35,\"name\":\"B1\",\"ticks\":96277,\"time\":35.2763941796875,\"velocity\":0.5590551181102362},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":40,\"name\":\"E2\",\"ticks\":96277,\"time\":35.2763941796875,\"velocity\":0.5669291338582677},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":44,\"name\":\"G#2\",\"ticks\":96277,\"time\":35.2763941796875,\"velocity\":0.6850393700787402},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":96540,\"time\":35.37270765625,\"velocity\":0.5511811023622047},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":92,\"name\":\"G#6\",\"ticks\":96787,\"time\":35.4631617578125,\"velocity\":0.5590551181102362},{\"duration\":0.08935546875,\"durationTicks\":244,\"midi\":92,\"name\":\"G#6\",\"ticks\":97035,\"time\":35.5539820703125,\"velocity\":0.5590551181102362},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":93,\"name\":\"A6\",\"ticks\":97280,\"time\":35.64370375,\"velocity\":0.5905511811023622},{\"duration\":0.298828125,\"durationTicks\":816,\"midi\":93,\"name\":\"A6\",\"ticks\":97280,\"time\":35.64370375,\"velocity\":0.5905511811023622},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":105,\"name\":\"A7\",\"ticks\":97280,\"time\":35.64370375,\"velocity\":0.6141732283464567},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":91,\"name\":\"G6\",\"ticks\":97382,\"time\":35.681057265625,\"velocity\":0.5905511811023622},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":103,\"name\":\"G7\",\"ticks\":97382,\"time\":35.681057265625,\"velocity\":0.6220472440944882},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":89,\"name\":\"F6\",\"ticks\":97484,\"time\":35.71841078125,\"velocity\":0.5905511811023622},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":101,\"name\":\"F7\",\"ticks\":97484,\"time\":35.71841078125,\"velocity\":0.6220472440944882},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":88,\"name\":\"E6\",\"ticks\":97586,\"time\":35.755764296875,\"velocity\":0.5905511811023622},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":100,\"name\":\"E7\",\"ticks\":97586,\"time\":35.755764296875,\"velocity\":0.6220472440944882},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":86,\"name\":\"D6\",\"ticks\":97688,\"time\":35.7931178125,\"velocity\":0.5905511811023622},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":98,\"name\":\"D7\",\"ticks\":97688,\"time\":35.7931178125,\"velocity\":0.6299212598425197},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":84,\"name\":\"C6\",\"ticks\":97790,\"time\":35.830471328125,\"velocity\":0.5905511811023622},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":96,\"name\":\"C7\",\"ticks\":97790,\"time\":35.830471328125,\"velocity\":0.6299212598425197},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":83,\"name\":\"B5\",\"ticks\":97892,\"time\":35.86782484375,\"velocity\":0.5905511811023622},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":95,\"name\":\"B6\",\"ticks\":97892,\"time\":35.86782484375,\"velocity\":0.6299212598425197},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":81,\"name\":\"A5\",\"ticks\":97994,\"time\":35.905178359375,\"velocity\":0.5905511811023622},{\"duration\":0.113525390625,\"durationTicks\":310,\"midi\":93,\"name\":\"A6\",\"ticks\":97994,\"time\":35.905178359375,\"velocity\":0.6377952755905512},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":79,\"name\":\"G5\",\"ticks\":98096,\"time\":35.942531875,\"velocity\":0.5905511811023622},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":91,\"name\":\"G6\",\"ticks\":98096,\"time\":35.942531875,\"velocity\":0.6377952755905512},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":77,\"name\":\"F5\",\"ticks\":98198,\"time\":35.979885390625,\"velocity\":0.5905511811023622},{\"duration\":0.037353515625,\"durationTicks\":102,\"midi\":89,\"name\":\"F6\",\"ticks\":98198,\"time\":35.979885390625,\"velocity\":0.7322834645669292},{\"duration\":0.375,\"durationTicks\":1024,\"midi\":76,\"name\":\"E5\",\"ticks\":98304,\"time\":36.01870375,\"velocity\":0.5905511811023622},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":88,\"name\":\"E6\",\"ticks\":98308,\"time\":36.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":28,\"name\":\"E1\",\"ticks\":98308,\"time\":36.02016859375,\"velocity\":0.6377952755905512},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":40,\"name\":\"E2\",\"ticks\":98308,\"time\":36.02016859375,\"velocity\":0.7716535433070866},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":98850,\"time\":36.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":55,\"name\":\"G3\",\"ticks\":98850,\"time\":36.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":98850,\"time\":36.218654921875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":71,\"name\":\"B4\",\"ticks\":99358,\"time\":36.404690078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":83,\"name\":\"B5\",\"ticks\":99358,\"time\":36.404690078125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":99358,\"time\":36.404690078125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":99358,\"time\":36.404690078125,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":99863,\"time\":36.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":99863,\"time\":36.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":99863,\"time\":36.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":55,\"name\":\"G3\",\"ticks\":99863,\"time\":36.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":99863,\"time\":36.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":74,\"name\":\"D5\",\"ticks\":100373,\"time\":36.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":86,\"name\":\"D6\",\"ticks\":100373,\"time\":36.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":28,\"name\":\"E1\",\"ticks\":100373,\"time\":36.7763941796875,\"velocity\":0.6220472440944882},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":40,\"name\":\"E2\",\"ticks\":100373,\"time\":36.7763941796875,\"velocity\":0.7559055118110236},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":88,\"name\":\"E6\",\"ticks\":100883,\"time\":36.9631617578125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":100883,\"time\":36.9631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":55,\"name\":\"G3\",\"ticks\":100883,\"time\":36.9631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":100883,\"time\":36.9631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":86,\"name\":\"D6\",\"ticks\":101131,\"time\":37.0539820703125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":72,\"name\":\"C5\",\"ticks\":101388,\"time\":37.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":84,\"name\":\"C6\",\"ticks\":101388,\"time\":37.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":101388,\"time\":37.14809828125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":101388,\"time\":37.14809828125,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":71,\"name\":\"B4\",\"ticks\":101893,\"time\":37.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":83,\"name\":\"B5\",\"ticks\":101893,\"time\":37.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":101893,\"time\":37.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":55,\"name\":\"G3\",\"ticks\":101893,\"time\":37.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":59,\"name\":\"B3\",\"ticks\":101893,\"time\":37.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":69,\"name\":\"A4\",\"ticks\":102404,\"time\":37.52016859375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":81,\"name\":\"A5\",\"ticks\":102404,\"time\":37.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":102404,\"time\":37.52016859375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":102404,\"time\":37.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":102946,\"time\":37.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":57,\"name\":\"A3\",\"ticks\":102946,\"time\":37.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":102946,\"time\":37.718654921875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":69,\"name\":\"A4\",\"ticks\":103454,\"time\":37.904690078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":81,\"name\":\"A5\",\"ticks\":103454,\"time\":37.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":103454,\"time\":37.904690078125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":103454,\"time\":37.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":103959,\"time\":38.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":103959,\"time\":38.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":48,\"name\":\"C3\",\"ticks\":103959,\"time\":38.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":103959,\"time\":38.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":57,\"name\":\"A3\",\"ticks\":103959,\"time\":38.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":76,\"name\":\"E5\",\"ticks\":104469,\"time\":38.2763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":104469,\"time\":38.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":104469,\"time\":38.2763941796875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":104469,\"time\":38.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":104979,\"time\":38.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":104979,\"time\":38.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":104979,\"time\":38.4631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":74,\"name\":\"D5\",\"ticks\":105484,\"time\":38.64809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":86,\"name\":\"D6\",\"ticks\":105484,\"time\":38.64809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":105484,\"time\":38.64809828125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":105484,\"time\":38.64809828125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":72,\"name\":\"C5\",\"ticks\":105989,\"time\":38.8330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":84,\"name\":\"C6\",\"ticks\":105989,\"time\":38.8330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":57,\"name\":\"A3\",\"ticks\":105989,\"time\":38.8330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":60,\"name\":\"C4\",\"ticks\":105989,\"time\":38.8330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":64,\"name\":\"E4\",\"ticks\":105989,\"time\":38.8330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":71,\"name\":\"B4\",\"ticks\":106500,\"time\":39.02016859375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":83,\"name\":\"B5\",\"ticks\":106500,\"time\":39.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":32,\"name\":\"G#1\",\"ticks\":106500,\"time\":39.02016859375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":44,\"name\":\"G#2\",\"ticks\":106500,\"time\":39.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":107042,\"time\":39.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":56,\"name\":\"G#3\",\"ticks\":107042,\"time\":39.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":107042,\"time\":39.218654921875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":71,\"name\":\"B4\",\"ticks\":107550,\"time\":39.404690078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":83,\"name\":\"B5\",\"ticks\":107550,\"time\":39.404690078125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":107550,\"time\":39.404690078125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":107550,\"time\":39.404690078125,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":108055,\"time\":39.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":108055,\"time\":39.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":108055,\"time\":39.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":56,\"name\":\"G#3\",\"ticks\":108055,\"time\":39.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":108055,\"time\":39.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":74,\"name\":\"D5\",\"ticks\":108565,\"time\":39.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":108565,\"time\":39.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":32,\"name\":\"G#1\",\"ticks\":108565,\"time\":39.7763941796875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":44,\"name\":\"G#2\",\"ticks\":108565,\"time\":39.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":109075,\"time\":39.9631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":56,\"name\":\"G#3\",\"ticks\":109075,\"time\":39.9631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":109075,\"time\":39.9631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":109075,\"time\":39.9631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":76,\"name\":\"E5\",\"ticks\":109580,\"time\":40.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":88,\"name\":\"E6\",\"ticks\":109580,\"time\":40.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":109580,\"time\":40.14809828125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":109580,\"time\":40.14809828125,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":110085,\"time\":40.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":56,\"name\":\"G#3\",\"ticks\":110085,\"time\":40.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":59,\"name\":\"B3\",\"ticks\":110085,\"time\":40.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":64,\"name\":\"E4\",\"ticks\":110085,\"time\":40.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":72,\"name\":\"C5\",\"ticks\":110596,\"time\":40.52016859375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":84,\"name\":\"C6\",\"ticks\":110596,\"time\":40.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":110596,\"time\":40.52016859375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":110596,\"time\":40.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":64,\"name\":\"E4\",\"ticks\":111138,\"time\":40.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":69,\"name\":\"A4\",\"ticks\":111138,\"time\":40.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":72,\"name\":\"C5\",\"ticks\":111138,\"time\":40.718654921875,\"velocity\":0.7401574803149606},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":48,\"name\":\"C3\",\"ticks\":111138,\"time\":40.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":52,\"name\":\"E3\",\"ticks\":111138,\"time\":40.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":57,\"name\":\"A3\",\"ticks\":111138,\"time\":40.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":111138,\"time\":40.718654921875,\"velocity\":0.7401574803149606},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":111646,\"time\":40.904690078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":81,\"name\":\"A5\",\"ticks\":111646,\"time\":40.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":21,\"name\":\"A0\",\"ticks\":111646,\"time\":40.904690078125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":33,\"name\":\"A1\",\"ticks\":111646,\"time\":40.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":112151,\"time\":41.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":112151,\"time\":41.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":76,\"name\":\"E5\",\"ticks\":112151,\"time\":41.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":112151,\"time\":41.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":57,\"name\":\"A3\",\"ticks\":112151,\"time\":41.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":112151,\"time\":41.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":64,\"name\":\"E4\",\"ticks\":112151,\"time\":41.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":69,\"name\":\"A4\",\"ticks\":112661,\"time\":41.2763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":81,\"name\":\"A5\",\"ticks\":112661,\"time\":41.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":112661,\"time\":41.2763941796875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":112661,\"time\":41.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":72,\"name\":\"C5\",\"ticks\":113171,\"time\":41.4631617578125,\"velocity\":0.7165354330708661},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":76,\"name\":\"E5\",\"ticks\":113171,\"time\":41.4631617578125,\"velocity\":0.7165354330708661},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":81,\"name\":\"A5\",\"ticks\":113171,\"time\":41.4631617578125,\"velocity\":0.6771653543307087},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":57,\"name\":\"A3\",\"ticks\":113171,\"time\":41.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":113171,\"time\":41.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":113171,\"time\":41.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":113171,\"time\":41.4631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":81,\"name\":\"A5\",\"ticks\":113676,\"time\":41.64809828125,\"velocity\":0.7007874015748031},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":57,\"name\":\"A3\",\"ticks\":113676,\"time\":41.64809828125,\"velocity\":0.7007874015748031},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":83,\"name\":\"B5\",\"ticks\":113933,\"time\":41.7422144921875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":59,\"name\":\"B3\",\"ticks\":113933,\"time\":41.7422144921875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":84,\"name\":\"C6\",\"ticks\":114181,\"time\":41.8330348046875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":60,\"name\":\"C4\",\"ticks\":114181,\"time\":41.8330348046875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":86,\"name\":\"D6\",\"ticks\":114429,\"time\":41.9238551171875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":62,\"name\":\"D4\",\"ticks\":114429,\"time\":41.9238551171875,\"velocity\":0.6929133858267716},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":76,\"name\":\"E5\",\"ticks\":114692,\"time\":42.02016859375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":88,\"name\":\"E6\",\"ticks\":114692,\"time\":42.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":52,\"name\":\"E3\",\"ticks\":114692,\"time\":42.02016859375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":64,\"name\":\"E4\",\"ticks\":114692,\"time\":42.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":74,\"name\":\"D5\",\"ticks\":115234,\"time\":42.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":86,\"name\":\"D6\",\"ticks\":115234,\"time\":42.218654921875,\"velocity\":0.7401574803149606},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":38,\"name\":\"D2\",\"ticks\":115234,\"time\":42.218654921875,\"velocity\":0.6220472440944882},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":41,\"name\":\"F2\",\"ticks\":115234,\"time\":42.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":45,\"name\":\"A2\",\"ticks\":115234,\"time\":42.218654921875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":50,\"name\":\"D3\",\"ticks\":115742,\"time\":42.404690078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":65,\"name\":\"F4\",\"ticks\":115742,\"time\":42.404690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":77,\"name\":\"F5\",\"ticks\":116247,\"time\":42.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":89,\"name\":\"F6\",\"ticks\":116247,\"time\":42.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":38,\"name\":\"D2\",\"ticks\":116247,\"time\":42.5896266015625,\"velocity\":0.6220472440944882},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":41,\"name\":\"F2\",\"ticks\":116247,\"time\":42.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":116247,\"time\":42.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":116757,\"time\":42.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":116757,\"time\":42.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":57,\"name\":\"A3\",\"ticks\":116757,\"time\":42.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":116757,\"time\":42.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":38,\"name\":\"D2\",\"ticks\":117267,\"time\":42.9631617578125,\"velocity\":0.6220472440944882},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":41,\"name\":\"F2\",\"ticks\":117267,\"time\":42.9631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":117267,\"time\":42.9631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":79,\"name\":\"G5\",\"ticks\":117772,\"time\":43.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":91,\"name\":\"G6\",\"ticks\":117772,\"time\":43.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":45,\"name\":\"A2\",\"ticks\":117772,\"time\":43.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":57,\"name\":\"A3\",\"ticks\":117772,\"time\":43.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":77,\"name\":\"F5\",\"ticks\":118277,\"time\":43.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":89,\"name\":\"F6\",\"ticks\":118277,\"time\":43.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":41,\"name\":\"F2\",\"ticks\":118277,\"time\":43.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":53,\"name\":\"F3\",\"ticks\":118277,\"time\":43.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.569091796875,\"durationTicks\":1554,\"midi\":76,\"name\":\"E5\",\"ticks\":118788,\"time\":43.52016859375,\"velocity\":0.6692913385826772},{\"duration\":0.569091796875,\"durationTicks\":1554,\"midi\":88,\"name\":\"E6\",\"ticks\":118788,\"time\":43.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":36,\"name\":\"C2\",\"ticks\":118788,\"time\":43.52016859375,\"velocity\":0.6535433070866141},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":48,\"name\":\"C3\",\"ticks\":118788,\"time\":43.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":48,\"name\":\"C3\",\"ticks\":119330,\"time\":43.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":119330,\"time\":43.718654921875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":36,\"name\":\"C2\",\"ticks\":119838,\"time\":43.904690078125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":48,\"name\":\"C3\",\"ticks\":119838,\"time\":43.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":120343,\"time\":44.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":120343,\"time\":44.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":48,\"name\":\"C3\",\"ticks\":120343,\"time\":44.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":120343,\"time\":44.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":76,\"name\":\"E5\",\"ticks\":120853,\"time\":44.2763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":120853,\"time\":44.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":36,\"name\":\"C2\",\"ticks\":120853,\"time\":44.2763941796875,\"velocity\":0.6377952755905512},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":48,\"name\":\"C3\",\"ticks\":120853,\"time\":44.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":121363,\"time\":44.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":121363,\"time\":44.4631617578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":121363,\"time\":44.4631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":74,\"name\":\"D5\",\"ticks\":121868,\"time\":44.64809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":86,\"name\":\"D6\",\"ticks\":121868,\"time\":44.64809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":31,\"name\":\"G1\",\"ticks\":121868,\"time\":44.64809828125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":43,\"name\":\"G2\",\"ticks\":121868,\"time\":44.64809828125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":72,\"name\":\"C5\",\"ticks\":122373,\"time\":44.8330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":84,\"name\":\"C6\",\"ticks\":122373,\"time\":44.8330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":122373,\"time\":44.8330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":57,\"name\":\"A3\",\"ticks\":122373,\"time\":44.8330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":60,\"name\":\"C4\",\"ticks\":122373,\"time\":44.8330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":71,\"name\":\"B4\",\"ticks\":122884,\"time\":45.02016859375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":83,\"name\":\"B5\",\"ticks\":122884,\"time\":45.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":35,\"name\":\"B1\",\"ticks\":122884,\"time\":45.02016859375,\"velocity\":0.6535433070866141},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":47,\"name\":\"B2\",\"ticks\":122884,\"time\":45.02016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":47,\"name\":\"B2\",\"ticks\":123426,\"time\":45.218654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":123426,\"time\":45.218654921875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":71,\"name\":\"B4\",\"ticks\":123934,\"time\":45.404690078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":83,\"name\":\"B5\",\"ticks\":123934,\"time\":45.404690078125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":35,\"name\":\"B1\",\"ticks\":123934,\"time\":45.404690078125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":47,\"name\":\"B2\",\"ticks\":123934,\"time\":45.404690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":124439,\"time\":45.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":124439,\"time\":45.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":47,\"name\":\"B2\",\"ticks\":124439,\"time\":45.5896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":124439,\"time\":45.5896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":74,\"name\":\"D5\",\"ticks\":124949,\"time\":45.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":124949,\"time\":45.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":50,\"name\":\"D3\",\"ticks\":124949,\"time\":45.7763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":62,\"name\":\"D4\",\"ticks\":124949,\"time\":45.7763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":40,\"name\":\"E2\",\"ticks\":125459,\"time\":45.9631617578125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":52,\"name\":\"E3\",\"ticks\":125459,\"time\":45.9631617578125,\"velocity\":0.7401574803149606},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":76,\"name\":\"E5\",\"ticks\":125964,\"time\":46.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":88,\"name\":\"E6\",\"ticks\":125964,\"time\":46.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":125964,\"time\":46.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":56,\"name\":\"G#3\",\"ticks\":125964,\"time\":46.14809828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":125964,\"time\":46.14809828125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":44,\"name\":\"G#2\",\"ticks\":126469,\"time\":46.3330348046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":56,\"name\":\"G#3\",\"ticks\":126469,\"time\":46.3330348046875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":72,\"name\":\"C5\",\"ticks\":126980,\"time\":46.52016859375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":84,\"name\":\"C6\",\"ticks\":126980,\"time\":46.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":126980,\"time\":46.52016859375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":126980,\"time\":46.52016859375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":48,\"name\":\"C3\",\"ticks\":127522,\"time\":46.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":127522,\"time\":46.718654921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":57,\"name\":\"A3\",\"ticks\":127522,\"time\":46.718654921875,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":69,\"name\":\"A4\",\"ticks\":128030,\"time\":46.904690078125,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":128030,\"time\":46.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":128030,\"time\":46.904690078125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":128030,\"time\":46.904690078125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":128535,\"time\":47.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":57,\"name\":\"A3\",\"ticks\":128535,\"time\":47.0896266015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":128535,\"time\":47.0896266015625,\"velocity\":0.7401574803149606},{\"duration\":0.3750084267578089,\"durationTicks\":1014,\"midi\":69,\"name\":\"A4\",\"ticks\":129045,\"time\":47.2763941796875,\"velocity\":0.6535433070866141},{\"duration\":0.3750084267578089,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":129045,\"time\":47.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.17597690624999984,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":129045,\"time\":47.2763941796875,\"velocity\":0.6299212598425197},{\"duration\":0.18707429296874523,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":129045,\"time\":47.2763941796875,\"velocity\":0.7637795275590551},{\"duration\":0.17634072949219615,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":129555,\"time\":47.46383931835937,\"velocity\":0.6299212598425197},{\"duration\":0.17634072949219615,\"durationTicks\":474,\"midi\":60,\"name\":\"C4\",\"ticks\":129555,\"time\":47.46383931835937,\"velocity\":0.6299212598425197},{\"duration\":0.18756328808593992,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":129555,\"time\":47.46383931835937,\"velocity\":0.7401574803149606},{\"duration\":0.09051974121093309,\"durationTicks\":241,\"midi\":40,\"name\":\"E2\",\"ticks\":130060,\"time\":47.65177820703125,\"velocity\":0.6299212598425197},{\"duration\":0.09615374999999915,\"durationTicks\":256,\"midi\":52,\"name\":\"E3\",\"ticks\":130060,\"time\":47.65177820703125,\"velocity\":0.7480314960629921},{\"duration\":0.08713933593750056,\"durationTicks\":232,\"midi\":38,\"name\":\"D2\",\"ticks\":130317,\"time\":47.74830755761718,\"velocity\":0.6220472440944882},{\"duration\":0.0927830361328148,\"durationTicks\":247,\"midi\":50,\"name\":\"D3\",\"ticks\":130317,\"time\":47.74830755761718,\"velocity\":0.7401574803149606},{\"duration\":0.08770143750000159,\"durationTicks\":232,\"midi\":36,\"name\":\"C2\",\"ticks\":130565,\"time\":47.841468617187495,\"velocity\":0.6141732283464567},{\"duration\":0.09337178906250188,\"durationTicks\":247,\"midi\":48,\"name\":\"C3\",\"ticks\":130565,\"time\":47.841468617187495,\"velocity\":0.7401574803149606},{\"duration\":0.09244891406250133,\"durationTicks\":243,\"midi\":35,\"name\":\"B1\",\"ticks\":130813,\"time\":47.935218429687495,\"velocity\":0.6141732283464567},{\"duration\":0.09815609179688067,\"durationTicks\":258,\"midi\":47,\"name\":\"B2\",\"ticks\":130813,\"time\":47.935218429687495,\"velocity\":0.7401574803149606},{\"duration\":0.3877507031250005,\"durationTicks\":1049,\"midi\":88,\"name\":\"E6\",\"ticks\":131076,\"time\":48.0352769140625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250005,\"durationTicks\":1049,\"midi\":100,\"name\":\"E7\",\"ticks\":131076,\"time\":48.0352769140625,\"velocity\":0.7795275590551181},{\"duration\":0.19072921875000048,\"durationTicks\":511,\"midi\":28,\"name\":\"E1\",\"ticks\":131076,\"time\":48.0352769140625,\"velocity\":0.6377952755905512},{\"duration\":0.20171554687500048,\"durationTicks\":541,\"midi\":40,\"name\":\"E2\",\"ticks\":131076,\"time\":48.0352769140625,\"velocity\":0.7716535433070866},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":131618,\"time\":48.237358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":55,\"name\":\"G3\",\"ticks\":131618,\"time\":48.237358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":131618,\"time\":48.237358671875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":83,\"name\":\"B5\",\"ticks\":132126,\"time\":48.423393828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":95,\"name\":\"B6\",\"ticks\":132126,\"time\":48.423393828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":132126,\"time\":48.423393828125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":132126,\"time\":48.423393828125,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":132631,\"time\":48.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":132631,\"time\":48.6083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":132631,\"time\":48.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":55,\"name\":\"G3\",\"ticks\":132631,\"time\":48.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":132631,\"time\":48.6083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":86,\"name\":\"D6\",\"ticks\":133141,\"time\":48.7950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":98,\"name\":\"D7\",\"ticks\":133141,\"time\":48.7950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":28,\"name\":\"E1\",\"ticks\":133141,\"time\":48.7950979296875,\"velocity\":0.6220472440944882},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":40,\"name\":\"E2\",\"ticks\":133141,\"time\":48.7950979296875,\"velocity\":0.7559055118110236},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":100,\"name\":\"E7\",\"ticks\":133651,\"time\":48.9818655078125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":133651,\"time\":48.9818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":55,\"name\":\"G3\",\"ticks\":133651,\"time\":48.9818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":133651,\"time\":48.9818655078125,\"velocity\":0.7401574803149606},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":98,\"name\":\"D7\",\"ticks\":133899,\"time\":49.0726858203125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":84,\"name\":\"C6\",\"ticks\":134156,\"time\":49.16680203125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":96,\"name\":\"C7\",\"ticks\":134156,\"time\":49.16680203125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":134156,\"time\":49.16680203125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":134156,\"time\":49.16680203125,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":83,\"name\":\"B5\",\"ticks\":134661,\"time\":49.3517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":95,\"name\":\"B6\",\"ticks\":134661,\"time\":49.3517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":134661,\"time\":49.3517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":55,\"name\":\"G3\",\"ticks\":134661,\"time\":49.3517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":59,\"name\":\"B3\",\"ticks\":134661,\"time\":49.3517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":81,\"name\":\"A5\",\"ticks\":135172,\"time\":49.53887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":93,\"name\":\"A6\",\"ticks\":135172,\"time\":49.53887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":135172,\"time\":49.53887234375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":135172,\"time\":49.53887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":135714,\"time\":49.737358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":57,\"name\":\"A3\",\"ticks\":135714,\"time\":49.737358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":135714,\"time\":49.737358671875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":81,\"name\":\"A5\",\"ticks\":136222,\"time\":49.923393828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":93,\"name\":\"A6\",\"ticks\":136222,\"time\":49.923393828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":136222,\"time\":49.923393828125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":136222,\"time\":49.923393828125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":136727,\"time\":50.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":136727,\"time\":50.1083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":48,\"name\":\"C3\",\"ticks\":136727,\"time\":50.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":136727,\"time\":50.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":57,\"name\":\"A3\",\"ticks\":136727,\"time\":50.1083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":137237,\"time\":50.2950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":100,\"name\":\"E7\",\"ticks\":137237,\"time\":50.2950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":137237,\"time\":50.2950979296875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":137237,\"time\":50.2950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":137747,\"time\":50.4818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":137747,\"time\":50.4818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":137747,\"time\":50.4818655078125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":86,\"name\":\"D6\",\"ticks\":138252,\"time\":50.66680203125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":98,\"name\":\"D7\",\"ticks\":138252,\"time\":50.66680203125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":138252,\"time\":50.66680203125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":138252,\"time\":50.66680203125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":84,\"name\":\"C6\",\"ticks\":138757,\"time\":50.8517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":96,\"name\":\"C7\",\"ticks\":138757,\"time\":50.8517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":57,\"name\":\"A3\",\"ticks\":138757,\"time\":50.8517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":60,\"name\":\"C4\",\"ticks\":138757,\"time\":50.8517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":64,\"name\":\"E4\",\"ticks\":138757,\"time\":50.8517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":83,\"name\":\"B5\",\"ticks\":139268,\"time\":51.03887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":95,\"name\":\"B6\",\"ticks\":139268,\"time\":51.03887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":32,\"name\":\"G#1\",\"ticks\":139268,\"time\":51.03887234375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":44,\"name\":\"G#2\",\"ticks\":139268,\"time\":51.03887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":139810,\"time\":51.237358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":56,\"name\":\"G#3\",\"ticks\":139810,\"time\":51.237358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":139810,\"time\":51.237358671875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":83,\"name\":\"B5\",\"ticks\":140318,\"time\":51.423393828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":95,\"name\":\"B6\",\"ticks\":140318,\"time\":51.423393828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":140318,\"time\":51.423393828125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":140318,\"time\":51.423393828125,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":140823,\"time\":51.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":140823,\"time\":51.6083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":140823,\"time\":51.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":56,\"name\":\"G#3\",\"ticks\":140823,\"time\":51.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":140823,\"time\":51.6083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":141333,\"time\":51.7950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":98,\"name\":\"D7\",\"ticks\":141333,\"time\":51.7950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":32,\"name\":\"G#1\",\"ticks\":141333,\"time\":51.7950979296875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":44,\"name\":\"G#2\",\"ticks\":141333,\"time\":51.7950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":141843,\"time\":51.9818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":56,\"name\":\"G#3\",\"ticks\":141843,\"time\":51.9818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":141843,\"time\":51.9818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":141843,\"time\":51.9818655078125,\"velocity\":0.7401574803149606},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":88,\"name\":\"E6\",\"ticks\":142348,\"time\":52.16680203125,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":100,\"name\":\"E7\",\"ticks\":142348,\"time\":52.16680203125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":28,\"name\":\"E1\",\"ticks\":142348,\"time\":52.16680203125,\"velocity\":0.6062992125984252},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":40,\"name\":\"E2\",\"ticks\":142348,\"time\":52.16680203125,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":142853,\"time\":52.3517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":56,\"name\":\"G#3\",\"ticks\":142853,\"time\":52.3517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":59,\"name\":\"B3\",\"ticks\":142853,\"time\":52.3517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":64,\"name\":\"E4\",\"ticks\":142853,\"time\":52.3517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":84,\"name\":\"C6\",\"ticks\":143364,\"time\":52.53887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":96,\"name\":\"C7\",\"ticks\":143364,\"time\":52.53887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":143364,\"time\":52.53887234375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":143364,\"time\":52.53887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":48,\"name\":\"C3\",\"ticks\":143906,\"time\":52.737358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":52,\"name\":\"E3\",\"ticks\":143906,\"time\":52.737358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":57,\"name\":\"A3\",\"ticks\":143906,\"time\":52.737358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":143906,\"time\":52.737358671875,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":144414,\"time\":52.923393828125,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":144414,\"time\":52.923393828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":21,\"name\":\"A0\",\"ticks\":144414,\"time\":52.923393828125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":33,\"name\":\"A1\",\"ticks\":144414,\"time\":52.923393828125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":144919,\"time\":53.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":57,\"name\":\"A3\",\"ticks\":144919,\"time\":53.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":144919,\"time\":53.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":64,\"name\":\"E4\",\"ticks\":144919,\"time\":53.1083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":145429,\"time\":53.2950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":145429,\"time\":53.2950979296875,\"velocity\":0.7322834645669292},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":145429,\"time\":53.2950979296875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":145429,\"time\":53.2950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":57,\"name\":\"A3\",\"ticks\":145939,\"time\":53.4818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":145939,\"time\":53.4818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":145939,\"time\":53.4818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":145939,\"time\":53.4818655078125,\"velocity\":0.7401574803149606},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":93,\"name\":\"A6\",\"ticks\":146444,\"time\":53.66680203125,\"velocity\":0.7007874015748031},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":57,\"name\":\"A3\",\"ticks\":146444,\"time\":53.66680203125,\"velocity\":0.7007874015748031},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":95,\"name\":\"B6\",\"ticks\":146701,\"time\":53.7609182421875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":59,\"name\":\"B3\",\"ticks\":146701,\"time\":53.7609182421875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":96,\"name\":\"C7\",\"ticks\":146949,\"time\":53.8517385546875,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":60,\"name\":\"C4\",\"ticks\":146949,\"time\":53.8517385546875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":98,\"name\":\"D7\",\"ticks\":147197,\"time\":53.9425588671875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":62,\"name\":\"D4\",\"ticks\":147197,\"time\":53.9425588671875,\"velocity\":0.6929133858267716},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":88,\"name\":\"E6\",\"ticks\":147460,\"time\":54.03887234375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":100,\"name\":\"E7\",\"ticks\":147460,\"time\":54.03887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":52,\"name\":\"E3\",\"ticks\":147460,\"time\":54.03887234375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":64,\"name\":\"E4\",\"ticks\":147460,\"time\":54.03887234375,\"velocity\":0.7795275590551181},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":86,\"name\":\"D6\",\"ticks\":148002,\"time\":54.237358671875,\"velocity\":0.6299212598425197},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":98,\"name\":\"D7\",\"ticks\":148002,\"time\":54.237358671875,\"velocity\":0.7401574803149606},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":38,\"name\":\"D2\",\"ticks\":148002,\"time\":54.237358671875,\"velocity\":0.6220472440944882},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":41,\"name\":\"F2\",\"ticks\":148002,\"time\":54.237358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":45,\"name\":\"A2\",\"ticks\":148002,\"time\":54.237358671875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":50,\"name\":\"D3\",\"ticks\":148510,\"time\":54.423393828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":65,\"name\":\"F4\",\"ticks\":148510,\"time\":54.423393828125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":89,\"name\":\"F6\",\"ticks\":149015,\"time\":54.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":101,\"name\":\"F7\",\"ticks\":149015,\"time\":54.6083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":38,\"name\":\"D2\",\"ticks\":149015,\"time\":54.6083303515625,\"velocity\":0.6220472440944882},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":41,\"name\":\"F2\",\"ticks\":149015,\"time\":54.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":149015,\"time\":54.6083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":149525,\"time\":54.7950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":105,\"name\":\"A7\",\"ticks\":149525,\"time\":54.7950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":57,\"name\":\"A3\",\"ticks\":149525,\"time\":54.7950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":149525,\"time\":54.7950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":38,\"name\":\"D2\",\"ticks\":150035,\"time\":54.9818655078125,\"velocity\":0.6220472440944882},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":41,\"name\":\"F2\",\"ticks\":150035,\"time\":54.9818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":150035,\"time\":54.9818655078125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":91,\"name\":\"G6\",\"ticks\":150540,\"time\":55.16680203125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":103,\"name\":\"G7\",\"ticks\":150540,\"time\":55.16680203125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":45,\"name\":\"A2\",\"ticks\":150540,\"time\":55.16680203125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":57,\"name\":\"A3\",\"ticks\":150540,\"time\":55.16680203125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":89,\"name\":\"F6\",\"ticks\":151045,\"time\":55.3517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":101,\"name\":\"F7\",\"ticks\":151045,\"time\":55.3517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":41,\"name\":\"F2\",\"ticks\":151045,\"time\":55.3517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":53,\"name\":\"F3\",\"ticks\":151045,\"time\":55.3517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.569091796875,\"durationTicks\":1554,\"midi\":88,\"name\":\"E6\",\"ticks\":151556,\"time\":55.53887234375,\"velocity\":0.6692913385826772},{\"duration\":0.569091796875,\"durationTicks\":1554,\"midi\":100,\"name\":\"E7\",\"ticks\":151556,\"time\":55.53887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":36,\"name\":\"C2\",\"ticks\":151556,\"time\":55.53887234375,\"velocity\":0.6535433070866141},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":48,\"name\":\"C3\",\"ticks\":151556,\"time\":55.53887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":48,\"name\":\"C3\",\"ticks\":152098,\"time\":55.737358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":60,\"name\":\"C4\",\"ticks\":152098,\"time\":55.737358671875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":36,\"name\":\"C2\",\"ticks\":152606,\"time\":55.923393828125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":48,\"name\":\"C3\",\"ticks\":152606,\"time\":55.923393828125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":153111,\"time\":56.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":153111,\"time\":56.1083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":48,\"name\":\"C3\",\"ticks\":153111,\"time\":56.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":153111,\"time\":56.1083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":153621,\"time\":56.2950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":100,\"name\":\"E7\",\"ticks\":153621,\"time\":56.2950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":36,\"name\":\"C2\",\"ticks\":153621,\"time\":56.2950979296875,\"velocity\":0.6377952755905512},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":48,\"name\":\"C3\",\"ticks\":153621,\"time\":56.2950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":154131,\"time\":56.4818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":154131,\"time\":56.4818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":60,\"name\":\"C4\",\"ticks\":154131,\"time\":56.4818655078125,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":86,\"name\":\"D6\",\"ticks\":154636,\"time\":56.66680203125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":98,\"name\":\"D7\",\"ticks\":154636,\"time\":56.66680203125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":31,\"name\":\"G1\",\"ticks\":154636,\"time\":56.66680203125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":43,\"name\":\"G2\",\"ticks\":154636,\"time\":56.66680203125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":84,\"name\":\"C6\",\"ticks\":155141,\"time\":56.8517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":96,\"name\":\"C7\",\"ticks\":155141,\"time\":56.8517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":52,\"name\":\"E3\",\"ticks\":155141,\"time\":56.8517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":57,\"name\":\"A3\",\"ticks\":155141,\"time\":56.8517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":60,\"name\":\"C4\",\"ticks\":155141,\"time\":56.8517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":83,\"name\":\"B5\",\"ticks\":155652,\"time\":57.03887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":95,\"name\":\"B6\",\"ticks\":155652,\"time\":57.03887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":35,\"name\":\"B1\",\"ticks\":155652,\"time\":57.03887234375,\"velocity\":0.6535433070866141},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":47,\"name\":\"B2\",\"ticks\":155652,\"time\":57.03887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":47,\"name\":\"B2\",\"ticks\":156194,\"time\":57.237358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":59,\"name\":\"B3\",\"ticks\":156194,\"time\":57.237358671875,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":83,\"name\":\"B5\",\"ticks\":156702,\"time\":57.423393828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":95,\"name\":\"B6\",\"ticks\":156702,\"time\":57.423393828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":35,\"name\":\"B1\",\"ticks\":156702,\"time\":57.423393828125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":47,\"name\":\"B2\",\"ticks\":156702,\"time\":57.423393828125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":84,\"name\":\"C6\",\"ticks\":157207,\"time\":57.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":96,\"name\":\"C7\",\"ticks\":157207,\"time\":57.6083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":47,\"name\":\"B2\",\"ticks\":157207,\"time\":57.6083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":59,\"name\":\"B3\",\"ticks\":157207,\"time\":57.6083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":157717,\"time\":57.7950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":98,\"name\":\"D7\",\"ticks\":157717,\"time\":57.7950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":50,\"name\":\"D3\",\"ticks\":157717,\"time\":57.7950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":62,\"name\":\"D4\",\"ticks\":157717,\"time\":57.7950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":40,\"name\":\"E2\",\"ticks\":158227,\"time\":57.9818655078125,\"velocity\":0.6220472440944882},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":52,\"name\":\"E3\",\"ticks\":158227,\"time\":57.9818655078125,\"velocity\":0.7401574803149606},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":88,\"name\":\"E6\",\"ticks\":158732,\"time\":58.16680203125,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":100,\"name\":\"E7\",\"ticks\":158732,\"time\":58.16680203125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":52,\"name\":\"E3\",\"ticks\":158732,\"time\":58.16680203125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":56,\"name\":\"G#3\",\"ticks\":158732,\"time\":58.16680203125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":158732,\"time\":58.16680203125,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":44,\"name\":\"G#2\",\"ticks\":159237,\"time\":58.3517385546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":56,\"name\":\"G#3\",\"ticks\":159237,\"time\":58.3517385546875,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":84,\"name\":\"C6\",\"ticks\":159748,\"time\":58.53887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":96,\"name\":\"C7\",\"ticks\":159748,\"time\":58.53887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":33,\"name\":\"A1\",\"ticks\":159748,\"time\":58.53887234375,\"velocity\":0.6456692913385826},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":45,\"name\":\"A2\",\"ticks\":159748,\"time\":58.53887234375,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":48,\"name\":\"C3\",\"ticks\":160290,\"time\":58.737358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":52,\"name\":\"E3\",\"ticks\":160290,\"time\":58.737358671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":57,\"name\":\"A3\",\"ticks\":160290,\"time\":58.737358671875,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":160798,\"time\":58.923393828125,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":160798,\"time\":58.923393828125,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":33,\"name\":\"A1\",\"ticks\":160798,\"time\":58.923393828125,\"velocity\":0.6141732283464567},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":45,\"name\":\"A2\",\"ticks\":160798,\"time\":58.923393828125,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":161303,\"time\":59.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":57,\"name\":\"A3\",\"ticks\":161303,\"time\":59.1083303515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":161303,\"time\":59.1083303515625,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":161813,\"time\":59.2950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.2215576171875,\"durationTicks\":605,\"midi\":93,\"name\":\"A6\",\"ticks\":161813,\"time\":59.2950979296875,\"velocity\":0.7322834645669292},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":33,\"name\":\"A1\",\"ticks\":161813,\"time\":59.2950979296875,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":161813,\"time\":59.2950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":162323,\"time\":59.4818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":60,\"name\":\"C4\",\"ticks\":162323,\"time\":59.4818655078125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":162323,\"time\":59.4818655078125,\"velocity\":0.7401574803149606},{\"duration\":0.046875,\"durationTicks\":128,\"midi\":100,\"name\":\"E7\",\"ticks\":162432,\"time\":59.5217825,\"velocity\":0.6929133858267716},{\"duration\":0.046875,\"durationTicks\":128,\"midi\":101,\"name\":\"F7\",\"ticks\":162560,\"time\":59.5686575,\"velocity\":0.6929133858267716},{\"duration\":0.046875,\"durationTicks\":128,\"midi\":103,\"name\":\"G7\",\"ticks\":162688,\"time\":59.6155325,\"velocity\":0.6929133858267716},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":93,\"name\":\"A6\",\"ticks\":162828,\"time\":59.66680203125,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":105,\"name\":\"A7\",\"ticks\":162828,\"time\":59.66680203125,\"velocity\":0.7480314960629921},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":21,\"name\":\"A0\",\"ticks\":162828,\"time\":59.66680203125,\"velocity\":0.5826771653543307},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":33,\"name\":\"A1\",\"ticks\":162828,\"time\":59.66680203125,\"velocity\":0.7244094488188977},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":81,\"name\":\"A5\",\"ticks\":163844,\"time\":60.03887234375,\"velocity\":0.6377952755905512},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":163844,\"time\":60.03887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":57,\"name\":\"A3\",\"ticks\":163844,\"time\":60.03887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":60,\"name\":\"C4\",\"ticks\":163844,\"time\":60.03887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":64,\"name\":\"E4\",\"ticks\":163844,\"time\":60.03887234375,\"velocity\":0.7795275590551181},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":84,\"name\":\"C6\",\"ticks\":164137,\"time\":60.1461721484375,\"velocity\":0.5984251968503937},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":88,\"name\":\"E6\",\"ticks\":164386,\"time\":60.237358671875,\"velocity\":0.5984251968503937},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":93,\"name\":\"A6\",\"ticks\":164635,\"time\":60.3285451953125,\"velocity\":0.5984251968503937},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":96,\"name\":\"C7\",\"ticks\":164894,\"time\":60.423393828125,\"velocity\":0.6062992125984252},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":33,\"name\":\"A1\",\"ticks\":164894,\"time\":60.423393828125,\"velocity\":0.6141732283464567},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":45,\"name\":\"A2\",\"ticks\":164894,\"time\":60.423393828125,\"velocity\":0.7480314960629921},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":93,\"name\":\"A6\",\"ticks\":165152,\"time\":60.51787625,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":88,\"name\":\"E6\",\"ticks\":165399,\"time\":60.6083303515625,\"velocity\":0.5984251968503937},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":84,\"name\":\"C6\",\"ticks\":165647,\"time\":60.6991506640625,\"velocity\":0.5984251968503937},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":81,\"name\":\"A5\",\"ticks\":165909,\"time\":60.7950979296875,\"velocity\":0.6220472440944882},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":48,\"name\":\"C3\",\"ticks\":165909,\"time\":60.7950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":165909,\"time\":60.7950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":57,\"name\":\"A3\",\"ticks\":165909,\"time\":60.7950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":60,\"name\":\"C4\",\"ticks\":165909,\"time\":60.7950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":84,\"name\":\"C6\",\"ticks\":166172,\"time\":60.89141140625,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":88,\"name\":\"E6\",\"ticks\":166419,\"time\":60.9818655078125,\"velocity\":0.5984251968503937},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":93,\"name\":\"A6\",\"ticks\":166667,\"time\":61.0726858203125,\"velocity\":0.5984251968503937},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":96,\"name\":\"C7\",\"ticks\":166924,\"time\":61.16680203125,\"velocity\":0.6062992125984252},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":33,\"name\":\"A1\",\"ticks\":166924,\"time\":61.16680203125,\"velocity\":0.6141732283464567},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":45,\"name\":\"A2\",\"ticks\":166924,\"time\":61.16680203125,\"velocity\":0.7480314960629921},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":167181,\"time\":61.2609182421875,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":88,\"name\":\"E6\",\"ticks\":167429,\"time\":61.3517385546875,\"velocity\":0.5984251968503937},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":84,\"name\":\"C6\",\"ticks\":167677,\"time\":61.4425588671875,\"velocity\":0.5984251968503937},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":80,\"name\":\"G#5\",\"ticks\":167940,\"time\":61.53887234375,\"velocity\":0.6377952755905512},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":50,\"name\":\"D3\",\"ticks\":167940,\"time\":61.53887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":167940,\"time\":61.53887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":56,\"name\":\"G#3\",\"ticks\":167940,\"time\":61.53887234375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":59,\"name\":\"B3\",\"ticks\":167940,\"time\":61.53887234375,\"velocity\":0.7795275590551181},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":83,\"name\":\"B5\",\"ticks\":168233,\"time\":61.6461721484375,\"velocity\":0.5984251968503937},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":86,\"name\":\"D6\",\"ticks\":168482,\"time\":61.737358671875,\"velocity\":0.5984251968503937},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":88,\"name\":\"E6\",\"ticks\":168731,\"time\":61.8285451953125,\"velocity\":0.5984251968503937},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":92,\"name\":\"G#6\",\"ticks\":168990,\"time\":61.923393828125,\"velocity\":0.6062992125984252},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":28,\"name\":\"E1\",\"ticks\":168990,\"time\":61.923393828125,\"velocity\":0.6062992125984252},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":40,\"name\":\"E2\",\"ticks\":168990,\"time\":61.923393828125,\"velocity\":0.7401574803149606},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":95,\"name\":\"B6\",\"ticks\":169248,\"time\":62.01787625,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":169495,\"time\":62.1083303515625,\"velocity\":0.5984251968503937},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":88,\"name\":\"E6\",\"ticks\":169743,\"time\":62.1991506640625,\"velocity\":0.5984251968503937},{\"duration\":0.10153714453124962,\"durationTicks\":277,\"midi\":83,\"name\":\"B5\",\"ticks\":170005,\"time\":62.2950979296875,\"velocity\":0.6220472440944882},{\"duration\":0.3750084267578089,\"durationTicks\":1014,\"midi\":47,\"name\":\"B2\",\"ticks\":170005,\"time\":62.2950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.3750084267578089,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":170005,\"time\":62.2950979296875,\"velocity\":0.6535433070866141},{\"duration\":0.3750084267578089,\"durationTicks\":1014,\"midi\":56,\"name\":\"G#3\",\"ticks\":170005,\"time\":62.2950979296875,\"velocity\":0.7637795275590551},{\"duration\":0.09625902539062281,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":170268,\"time\":62.3914758828125,\"velocity\":0.5984251968503937},{\"duration\":0.09722063183594543,\"durationTicks\":262,\"midi\":83,\"name\":\"B5\",\"ticks\":170515,\"time\":62.48254306835937,\"velocity\":0.5984251968503937},{\"duration\":0.10120157714843003,\"durationTicks\":271,\"midi\":88,\"name\":\"E6\",\"ticks\":170763,\"time\":62.57453878808594,\"velocity\":0.5984251968503937},{\"duration\":0.1017877587890581,\"durationTicks\":271,\"midi\":92,\"name\":\"G#6\",\"ticks\":171020,\"time\":62.67048195703125,\"velocity\":0.6062992125984252},{\"duration\":0.3815963144531267,\"durationTicks\":1011,\"midi\":28,\"name\":\"E1\",\"ticks\":171020,\"time\":62.67048195703125,\"velocity\":0.6062992125984252},{\"duration\":0.3815963144531267,\"durationTicks\":1011,\"midi\":40,\"name\":\"E2\",\"ticks\":171020,\"time\":62.67048195703125,\"velocity\":0.7401574803149606},{\"duration\":0.09845338769531509,\"durationTicks\":262,\"midi\":95,\"name\":\"B6\",\"ticks\":171277,\"time\":62.76701130761718,\"velocity\":0.5984251968503937},{\"duration\":0.09906914648437493,\"durationTicks\":262,\"midi\":92,\"name\":\"G#6\",\"ticks\":171525,\"time\":62.860172367187495,\"velocity\":0.5984251968503937},{\"duration\":0.10386326953125291,\"durationTicks\":273,\"midi\":88,\"name\":\"E6\",\"ticks\":171773,\"time\":62.953922179687495,\"velocity\":0.5984251968503937},{\"duration\":0.11602218750000048,\"durationTicks\":307,\"midi\":81,\"name\":\"A5\",\"ticks\":172036,\"time\":63.0539806640625,\"velocity\":0.6377952755905512},{\"duration\":0.3877507031250005,\"durationTicks\":1049,\"midi\":48,\"name\":\"C3\",\"ticks\":172036,\"time\":63.0539806640625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250005,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":172036,\"time\":63.0539806640625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250005,\"durationTicks\":1049,\"midi\":57,\"name\":\"A3\",\"ticks\":172036,\"time\":63.0539806640625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250005,\"durationTicks\":1049,\"midi\":60,\"name\":\"C4\",\"ticks\":172036,\"time\":63.0539806640625,\"velocity\":0.7795275590551181},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":84,\"name\":\"C6\",\"ticks\":172329,\"time\":63.1648758984375,\"velocity\":0.5984251968503937},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":88,\"name\":\"E6\",\"ticks\":172578,\"time\":63.256062421875,\"velocity\":0.5984251968503937},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":93,\"name\":\"A6\",\"ticks\":172827,\"time\":63.3472489453125,\"velocity\":0.5984251968503937},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":96,\"name\":\"C7\",\"ticks\":173086,\"time\":63.442097578125,\"velocity\":0.6062992125984252},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":33,\"name\":\"A1\",\"ticks\":173086,\"time\":63.442097578125,\"velocity\":0.6141732283464567},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":45,\"name\":\"A2\",\"ticks\":173086,\"time\":63.442097578125,\"velocity\":0.7480314960629921},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":93,\"name\":\"A6\",\"ticks\":173344,\"time\":63.53658,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":88,\"name\":\"E6\",\"ticks\":173591,\"time\":63.6270341015625,\"velocity\":0.5984251968503937},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":84,\"name\":\"C6\",\"ticks\":173839,\"time\":63.7178544140625,\"velocity\":0.5984251968503937},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":81,\"name\":\"A5\",\"ticks\":174101,\"time\":63.8138016796875,\"velocity\":0.6220472440944882},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":45,\"name\":\"A2\",\"ticks\":174101,\"time\":63.8138016796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":48,\"name\":\"C3\",\"ticks\":174101,\"time\":63.8138016796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":174101,\"time\":63.8138016796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":57,\"name\":\"A3\",\"ticks\":174101,\"time\":63.8138016796875,\"velocity\":0.7637795275590551},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":84,\"name\":\"C6\",\"ticks\":174364,\"time\":63.91011515625,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":88,\"name\":\"E6\",\"ticks\":174611,\"time\":64.0005692578125,\"velocity\":0.5984251968503937},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":93,\"name\":\"A6\",\"ticks\":174859,\"time\":64.0913895703125,\"velocity\":0.5984251968503937},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":96,\"name\":\"C7\",\"ticks\":175116,\"time\":64.18550578125,\"velocity\":0.6062992125984252},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":33,\"name\":\"A1\",\"ticks\":175116,\"time\":64.18550578125,\"velocity\":0.6141732283464567},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":45,\"name\":\"A2\",\"ticks\":175116,\"time\":64.18550578125,\"velocity\":0.7480314960629921},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":175373,\"time\":64.2796219921875,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":88,\"name\":\"E6\",\"ticks\":175621,\"time\":64.3704423046875,\"velocity\":0.5984251968503937},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":84,\"name\":\"C6\",\"ticks\":175869,\"time\":64.4612626171875,\"velocity\":0.5984251968503937},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":80,\"name\":\"G#5\",\"ticks\":176132,\"time\":64.55757609375,\"velocity\":0.6377952755905512},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":44,\"name\":\"G#2\",\"ticks\":176132,\"time\":64.55757609375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":47,\"name\":\"B2\",\"ticks\":176132,\"time\":64.55757609375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":176132,\"time\":64.55757609375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":56,\"name\":\"G#3\",\"ticks\":176132,\"time\":64.55757609375,\"velocity\":0.7795275590551181},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":68,\"name\":\"G#4\",\"ticks\":176425,\"time\":64.6648758984375,\"velocity\":0.5984251968503937},{\"duration\":0.0908203125,\"durationTicks\":248,\"midi\":80,\"name\":\"G#5\",\"ticks\":176674,\"time\":64.756062421875,\"velocity\":0.5984251968503937},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":80,\"name\":\"G#5\",\"ticks\":176923,\"time\":64.8472489453125,\"velocity\":0.5984251968503937},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":92,\"name\":\"G#6\",\"ticks\":177182,\"time\":64.942097578125,\"velocity\":0.6062992125984252},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":28,\"name\":\"E1\",\"ticks\":177182,\"time\":64.942097578125,\"velocity\":0.6062992125984252},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":40,\"name\":\"E2\",\"ticks\":177182,\"time\":64.942097578125,\"velocity\":0.7401574803149606},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":80,\"name\":\"G#5\",\"ticks\":177440,\"time\":65.03658,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":88,\"name\":\"E6\",\"ticks\":177687,\"time\":65.1270341015625,\"velocity\":0.5984251968503937},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":76,\"name\":\"E5\",\"ticks\":177935,\"time\":65.2178544140625,\"velocity\":0.5984251968503937},{\"duration\":0.10153714453124962,\"durationTicks\":277,\"midi\":76,\"name\":\"E5\",\"ticks\":178197,\"time\":65.3138016796875,\"velocity\":0.6220472440944882},{\"duration\":0.375008426757816,\"durationTicks\":1014,\"midi\":47,\"name\":\"B2\",\"ticks\":178197,\"time\":65.3138016796875,\"velocity\":0.6535433070866141},{\"duration\":0.375008426757816,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":178197,\"time\":65.3138016796875,\"velocity\":0.6535433070866141},{\"duration\":0.375008426757816,\"durationTicks\":1014,\"midi\":56,\"name\":\"G#3\",\"ticks\":178197,\"time\":65.3138016796875,\"velocity\":0.6535433070866141},{\"duration\":0.375008426757816,\"durationTicks\":1014,\"midi\":59,\"name\":\"B3\",\"ticks\":178197,\"time\":65.3138016796875,\"velocity\":0.7637795275590551},{\"duration\":0.09625902539062281,\"durationTicks\":261,\"midi\":64,\"name\":\"E4\",\"ticks\":178460,\"time\":65.4101796328125,\"velocity\":0.5984251968503937},{\"duration\":0.09162251171875369,\"durationTicks\":247,\"midi\":76,\"name\":\"E5\",\"ticks\":178707,\"time\":65.50124681835938,\"velocity\":0.5984251968503937},{\"duration\":0.10120157714843003,\"durationTicks\":271,\"midi\":76,\"name\":\"E5\",\"ticks\":178955,\"time\":65.59324253808595,\"velocity\":0.5984251968503937},{\"duration\":0.09615374999999915,\"durationTicks\":256,\"midi\":88,\"name\":\"E6\",\"ticks\":179212,\"time\":65.68918570703126,\"velocity\":0.6062992125984252},{\"duration\":0.3815963144531196,\"durationTicks\":1011,\"midi\":40,\"name\":\"E2\",\"ticks\":179212,\"time\":65.68918570703126,\"velocity\":0.6299212598425197},{\"duration\":0.3815963144531196,\"durationTicks\":1011,\"midi\":52,\"name\":\"E3\",\"ticks\":179212,\"time\":65.68918570703126,\"velocity\":0.7480314960629921},{\"duration\":0.09845338769530088,\"durationTicks\":262,\"midi\":88,\"name\":\"E6\",\"ticks\":179469,\"time\":65.7857150576172,\"velocity\":0.5984251968503937},{\"duration\":0.09906914648436782,\"durationTicks\":262,\"midi\":100,\"name\":\"E7\",\"ticks\":179717,\"time\":65.8788761171875,\"velocity\":0.5984251968503937},{\"duration\":0.1038632695312458,\"durationTicks\":273,\"midi\":88,\"name\":\"E6\",\"ticks\":179965,\"time\":65.9726259296875,\"velocity\":0.5984251968503937},{\"duration\":0.11602218750000759,\"durationTicks\":307,\"midi\":81,\"name\":\"A5\",\"ticks\":180228,\"time\":66.0726844140625,\"velocity\":0.6377952755905512},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":180228,\"time\":66.0726844140625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":57,\"name\":\"A3\",\"ticks\":180228,\"time\":66.0726844140625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":60,\"name\":\"C4\",\"ticks\":180228,\"time\":66.0726844140625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":64,\"name\":\"E4\",\"ticks\":180228,\"time\":66.0726844140625,\"velocity\":0.7795275590551181},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":69,\"name\":\"A4\",\"ticks\":180521,\"time\":66.1835796484375,\"velocity\":0.5984251968503937},{\"duration\":0.0908203125,\"durationTicks\":248,\"midi\":81,\"name\":\"A5\",\"ticks\":180770,\"time\":66.274766171875,\"velocity\":0.5984251968503937},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":181019,\"time\":66.3659526953125,\"velocity\":0.5984251968503937},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":93,\"name\":\"A6\",\"ticks\":181278,\"time\":66.460801328125,\"velocity\":0.6062992125984252},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":33,\"name\":\"A1\",\"ticks\":181278,\"time\":66.460801328125,\"velocity\":0.6141732283464567},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":45,\"name\":\"A2\",\"ticks\":181278,\"time\":66.460801328125,\"velocity\":0.7480314960629921},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":181536,\"time\":66.55528375,\"velocity\":0.5984251968503937},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":93,\"name\":\"A6\",\"ticks\":181783,\"time\":66.6457378515625,\"velocity\":0.5984251968503937},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":93,\"name\":\"A6\",\"ticks\":182031,\"time\":66.7365581640625,\"velocity\":0.5984251968503937},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":105,\"name\":\"A7\",\"ticks\":182293,\"time\":66.8325054296875,\"velocity\":0.6220472440944882},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":48,\"name\":\"C3\",\"ticks\":182293,\"time\":66.8325054296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":182293,\"time\":66.8325054296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":57,\"name\":\"A3\",\"ticks\":182293,\"time\":66.8325054296875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":60,\"name\":\"C4\",\"ticks\":182293,\"time\":66.8325054296875,\"velocity\":0.7637795275590551},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":93,\"name\":\"A6\",\"ticks\":182556,\"time\":66.92881890625,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":182803,\"time\":67.0192730078125,\"velocity\":0.5984251968503937},{\"duration\":0.09375,\"durationTicks\":256,\"midi\":81,\"name\":\"A5\",\"ticks\":183051,\"time\":67.1100933203125,\"velocity\":0.5984251968503937},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":81,\"name\":\"A5\",\"ticks\":183308,\"time\":67.20420953125,\"velocity\":0.6062992125984252},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":33,\"name\":\"A1\",\"ticks\":183308,\"time\":67.20420953125,\"velocity\":0.6141732283464567},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":45,\"name\":\"A2\",\"ticks\":183308,\"time\":67.20420953125,\"velocity\":0.7480314960629921},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":69,\"name\":\"A4\",\"ticks\":183565,\"time\":67.2983257421875,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":81,\"name\":\"A5\",\"ticks\":183813,\"time\":67.3891460546875,\"velocity\":0.5984251968503937},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":69,\"name\":\"A4\",\"ticks\":184061,\"time\":67.4799663671875,\"velocity\":0.5984251968503937},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":76,\"name\":\"E5\",\"ticks\":184324,\"time\":67.57627984375,\"velocity\":0.6377952755905512},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":50,\"name\":\"D3\",\"ticks\":184324,\"time\":67.57627984375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":184324,\"time\":67.57627984375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":56,\"name\":\"G#3\",\"ticks\":184324,\"time\":67.57627984375,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":59,\"name\":\"B3\",\"ticks\":184324,\"time\":67.57627984375,\"velocity\":0.7795275590551181},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":64,\"name\":\"E4\",\"ticks\":184617,\"time\":67.6835796484375,\"velocity\":0.5984251968503937},{\"duration\":0.0908203125,\"durationTicks\":248,\"midi\":76,\"name\":\"E5\",\"ticks\":184866,\"time\":67.774766171875,\"velocity\":0.5984251968503937},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":76,\"name\":\"E5\",\"ticks\":185115,\"time\":67.8659526953125,\"velocity\":0.5984251968503937},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":88,\"name\":\"E6\",\"ticks\":185374,\"time\":67.960801328125,\"velocity\":0.6062992125984252},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":28,\"name\":\"E1\",\"ticks\":185374,\"time\":67.960801328125,\"velocity\":0.6062992125984252},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":40,\"name\":\"E2\",\"ticks\":185374,\"time\":67.960801328125,\"velocity\":0.7401574803149606},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":76,\"name\":\"E5\",\"ticks\":185632,\"time\":68.05528375,\"velocity\":0.5984251968503937},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":88,\"name\":\"E6\",\"ticks\":185879,\"time\":68.1457378515625,\"velocity\":0.5984251968503937},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":88,\"name\":\"E6\",\"ticks\":186127,\"time\":68.2365581640625,\"velocity\":0.5984251968503937},{\"duration\":0.10153714453124962,\"durationTicks\":277,\"midi\":95,\"name\":\"B6\",\"ticks\":186389,\"time\":68.3325054296875,\"velocity\":0.6220472440944882},{\"duration\":0.375008426757816,\"durationTicks\":1014,\"midi\":47,\"name\":\"B2\",\"ticks\":186389,\"time\":68.3325054296875,\"velocity\":0.6535433070866141},{\"duration\":0.375008426757816,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":186389,\"time\":68.3325054296875,\"velocity\":0.6535433070866141},{\"duration\":0.375008426757816,\"durationTicks\":1014,\"midi\":56,\"name\":\"G#3\",\"ticks\":186389,\"time\":68.3325054296875,\"velocity\":0.7637795275590551},{\"duration\":0.09069633984375969,\"durationTicks\":246,\"midi\":83,\"name\":\"B5\",\"ticks\":186652,\"time\":68.4288833828125,\"velocity\":0.5984251968503937},{\"duration\":0.09722063183593832,\"durationTicks\":262,\"midi\":83,\"name\":\"B5\",\"ticks\":186899,\"time\":68.51995056835938,\"velocity\":0.5984251968503937},{\"duration\":0.10120157714843003,\"durationTicks\":271,\"midi\":71,\"name\":\"B4\",\"ticks\":187147,\"time\":68.61194628808595,\"velocity\":0.5984251968503937},{\"duration\":0.1017877587890581,\"durationTicks\":271,\"midi\":83,\"name\":\"B5\",\"ticks\":187404,\"time\":68.70788945703126,\"velocity\":0.6062992125984252},{\"duration\":0.3815963144531196,\"durationTicks\":1011,\"midi\":28,\"name\":\"E1\",\"ticks\":187404,\"time\":68.70788945703126,\"velocity\":0.6062992125984252},{\"duration\":0.3815963144531196,\"durationTicks\":1011,\"midi\":40,\"name\":\"E2\",\"ticks\":187404,\"time\":68.70788945703126,\"velocity\":0.7401574803149606},{\"duration\":0.09845338769530088,\"durationTicks\":262,\"midi\":88,\"name\":\"E6\",\"ticks\":187661,\"time\":68.8044188076172,\"velocity\":0.5984251968503937},{\"duration\":0.09906914648436782,\"durationTicks\":262,\"midi\":76,\"name\":\"E5\",\"ticks\":187909,\"time\":68.8975798671875,\"velocity\":0.5984251968503937},{\"duration\":0.1038632695312458,\"durationTicks\":273,\"midi\":88,\"name\":\"E6\",\"ticks\":188157,\"time\":68.9913296796875,\"velocity\":0.5984251968503937},{\"duration\":0.11602218750000759,\"durationTicks\":307,\"midi\":81,\"name\":\"A5\",\"ticks\":188420,\"time\":69.0913881640625,\"velocity\":0.5748031496062992},{\"duration\":0.11052902343750759,\"durationTicks\":292,\"midi\":93,\"name\":\"A6\",\"ticks\":188420,\"time\":69.0913881640625,\"velocity\":0.6850393700787402},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":48,\"name\":\"C3\",\"ticks\":188420,\"time\":69.0913881640625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":188420,\"time\":69.0913881640625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":57,\"name\":\"A3\",\"ticks\":188420,\"time\":69.0913881640625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":60,\"name\":\"C4\",\"ticks\":188420,\"time\":69.0913881640625,\"velocity\":0.7795275590551181},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":88,\"name\":\"E6\",\"ticks\":188713,\"time\":69.2022833984375,\"velocity\":0.5354330708661418},{\"duration\":0.0908203125,\"durationTicks\":248,\"midi\":92,\"name\":\"G#6\",\"ticks\":188713,\"time\":69.2022833984375,\"velocity\":0.6456692913385826},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":81,\"name\":\"A5\",\"ticks\":188962,\"time\":69.293469921875,\"velocity\":0.5354330708661418},{\"duration\":0.0908203125,\"durationTicks\":248,\"midi\":93,\"name\":\"A6\",\"ticks\":188962,\"time\":69.293469921875,\"velocity\":0.6456692913385826},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":83,\"name\":\"B5\",\"ticks\":189211,\"time\":69.3846564453125,\"velocity\":0.5354330708661418},{\"duration\":0.094482421875,\"durationTicks\":258,\"midi\":92,\"name\":\"G#6\",\"ticks\":189211,\"time\":69.3846564453125,\"velocity\":0.6456692913385826},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":81,\"name\":\"A5\",\"ticks\":189470,\"time\":69.479505078125,\"velocity\":0.5433070866141733},{\"duration\":0.0941162109375,\"durationTicks\":257,\"midi\":93,\"name\":\"A6\",\"ticks\":189470,\"time\":69.479505078125,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":189470,\"time\":69.479505078125,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":57,\"name\":\"A3\",\"ticks\":189470,\"time\":69.479505078125,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":60,\"name\":\"C4\",\"ticks\":189470,\"time\":69.479505078125,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":64,\"name\":\"E4\",\"ticks\":189470,\"time\":69.479505078125,\"velocity\":0.7480314960629921},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":88,\"name\":\"E6\",\"ticks\":189728,\"time\":69.5739875,\"velocity\":0.5354330708661418},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":92,\"name\":\"G#6\",\"ticks\":189728,\"time\":69.5739875,\"velocity\":0.6456692913385826},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":81,\"name\":\"A5\",\"ticks\":189975,\"time\":69.6644416015625,\"velocity\":0.5354330708661418},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":93,\"name\":\"A6\",\"ticks\":189975,\"time\":69.6644416015625,\"velocity\":0.6456692913385826},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":83,\"name\":\"B5\",\"ticks\":190223,\"time\":69.7552619140625,\"velocity\":0.5354330708661418},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":92,\"name\":\"G#6\",\"ticks\":190223,\"time\":69.7552619140625,\"velocity\":0.6456692913385826},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":81,\"name\":\"A5\",\"ticks\":190485,\"time\":69.8512091796875,\"velocity\":0.5590551181102362},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":93,\"name\":\"A6\",\"ticks\":190485,\"time\":69.8512091796875,\"velocity\":0.6692913385826772},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":57,\"name\":\"A3\",\"ticks\":190485,\"time\":69.8512091796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":60,\"name\":\"C4\",\"ticks\":190485,\"time\":69.8512091796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":64,\"name\":\"E4\",\"ticks\":190485,\"time\":69.8512091796875,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":69,\"name\":\"A4\",\"ticks\":190485,\"time\":69.8512091796875,\"velocity\":0.7637795275590551},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":88,\"name\":\"E6\",\"ticks\":190748,\"time\":69.94752265625,\"velocity\":0.5354330708661418},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":92,\"name\":\"G#6\",\"ticks\":190748,\"time\":69.94752265625,\"velocity\":0.6456692913385826},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":81,\"name\":\"A5\",\"ticks\":190995,\"time\":70.0379767578125,\"velocity\":0.5354330708661418},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":93,\"name\":\"A6\",\"ticks\":190995,\"time\":70.0379767578125,\"velocity\":0.6456692913385826},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":83,\"name\":\"B5\",\"ticks\":191243,\"time\":70.1287970703125,\"velocity\":0.5354330708661418},{\"duration\":0.09375,\"durationTicks\":256,\"midi\":92,\"name\":\"G#6\",\"ticks\":191243,\"time\":70.1287970703125,\"velocity\":0.6456692913385826},{\"duration\":0.0992431640625,\"durationTicks\":271,\"midi\":81,\"name\":\"A5\",\"ticks\":191500,\"time\":70.22291328125,\"velocity\":0.5433070866141733},{\"duration\":0.09375,\"durationTicks\":256,\"midi\":93,\"name\":\"A6\",\"ticks\":191500,\"time\":70.22291328125,\"velocity\":0.6535433070866141},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":21,\"name\":\"A0\",\"ticks\":191500,\"time\":70.22291328125,\"velocity\":0.5826771653543307},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":28,\"name\":\"E1\",\"ticks\":191500,\"time\":70.22291328125,\"velocity\":0.6062992125984252},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":33,\"name\":\"A1\",\"ticks\":191500,\"time\":70.22291328125,\"velocity\":0.7244094488188977},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":86,\"name\":\"D6\",\"ticks\":191757,\"time\":70.3170294921875,\"velocity\":0.5354330708661418},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":92,\"name\":\"G#6\",\"ticks\":191757,\"time\":70.3170294921875,\"velocity\":0.6456692913385826},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":81,\"name\":\"A5\",\"ticks\":192005,\"time\":70.4078498046875,\"velocity\":0.5354330708661418},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":93,\"name\":\"A6\",\"ticks\":192005,\"time\":70.4078498046875,\"velocity\":0.6456692913385826},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":88,\"name\":\"E6\",\"ticks\":192253,\"time\":70.4986701171875,\"velocity\":0.5354330708661418},{\"duration\":0.094482421875,\"durationTicks\":258,\"midi\":92,\"name\":\"G#6\",\"ticks\":192253,\"time\":70.4986701171875,\"velocity\":0.6456692913385826},{\"duration\":0.1124267578125,\"durationTicks\":307,\"midi\":93,\"name\":\"A6\",\"ticks\":192516,\"time\":70.59498359375,\"velocity\":0.6377952755905512},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":56,\"name\":\"G#3\",\"ticks\":192516,\"time\":70.59498359375,\"velocity\":0.6692913385826772},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":59,\"name\":\"B3\",\"ticks\":192516,\"time\":70.59498359375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":64,\"name\":\"E4\",\"ticks\":192516,\"time\":70.59498359375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":68,\"name\":\"G#4\",\"ticks\":192516,\"time\":70.59498359375,\"velocity\":0.7795275590551181},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":88,\"name\":\"E6\",\"ticks\":192809,\"time\":70.7022833984375,\"velocity\":0.5984251968503937},{\"duration\":0.0963134765625,\"durationTicks\":263,\"midi\":84,\"name\":\"C6\",\"ticks\":193058,\"time\":70.793469921875,\"velocity\":0.5984251968503937},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":40,\"name\":\"E2\",\"ticks\":193058,\"time\":70.793469921875,\"velocity\":0.6850393700787402},{\"duration\":0.0999755859375,\"durationTicks\":273,\"midi\":81,\"name\":\"A5\",\"ticks\":193307,\"time\":70.8846564453125,\"velocity\":0.5984251968503937},{\"duration\":0.099609375,\"durationTicks\":272,\"midi\":84,\"name\":\"C6\",\"ticks\":193566,\"time\":70.979505078125,\"velocity\":0.6062992125984252},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":44,\"name\":\"G#2\",\"ticks\":193566,\"time\":70.979505078125,\"velocity\":0.7007874015748031},{\"duration\":0.0955810546875,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":193824,\"time\":71.0739875,\"velocity\":0.5984251968503937},{\"duration\":0.095947265625,\"durationTicks\":262,\"midi\":84,\"name\":\"C6\",\"ticks\":194071,\"time\":71.1644416015625,\"velocity\":0.5984251968503937},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":47,\"name\":\"B2\",\"ticks\":194071,\"time\":71.1644416015625,\"velocity\":0.6929133858267716},{\"duration\":0.10107421875,\"durationTicks\":276,\"midi\":88,\"name\":\"E6\",\"ticks\":194319,\"time\":71.2552619140625,\"velocity\":0.5984251968503937},{\"duration\":0.10153714453124962,\"durationTicks\":277,\"midi\":84,\"name\":\"C6\",\"ticks\":194581,\"time\":71.3512091796875,\"velocity\":0.6220472440944882},{\"duration\":0.17597690624999984,\"durationTicks\":479,\"midi\":52,\"name\":\"E3\",\"ticks\":194581,\"time\":71.3512091796875,\"velocity\":0.7165354330708661},{\"duration\":0.09625902539062281,\"durationTicks\":261,\"midi\":81,\"name\":\"A5\",\"ticks\":194844,\"time\":71.4475871328125,\"velocity\":0.5984251968503937},{\"duration\":0.09722063183593832,\"durationTicks\":262,\"midi\":76,\"name\":\"E5\",\"ticks\":195091,\"time\":71.53865431835938,\"velocity\":0.5984251968503937},{\"duration\":0.17634072949219615,\"durationTicks\":474,\"midi\":56,\"name\":\"G#3\",\"ticks\":195091,\"time\":71.53865431835938,\"velocity\":0.6929133858267716},{\"duration\":0.10120157714843003,\"durationTicks\":271,\"midi\":72,\"name\":\"C5\",\"ticks\":195339,\"time\":71.63065003808595,\"velocity\":0.5984251968503937},{\"duration\":0.1017877587890581,\"durationTicks\":271,\"midi\":76,\"name\":\"E5\",\"ticks\":195596,\"time\":71.72659320703126,\"velocity\":0.6062992125984252},{\"duration\":0.17803467773437376,\"durationTicks\":474,\"midi\":59,\"name\":\"B3\",\"ticks\":195596,\"time\":71.72659320703126,\"velocity\":0.7007874015748031},{\"duration\":0.09845338769530088,\"durationTicks\":262,\"midi\":72,\"name\":\"C5\",\"ticks\":195853,\"time\":71.8231225576172,\"velocity\":0.5984251968503937},{\"duration\":0.09906914648436782,\"durationTicks\":262,\"midi\":69,\"name\":\"A4\",\"ticks\":196101,\"time\":71.9162836171875,\"velocity\":0.5984251968503937},{\"duration\":0.18049154882811536,\"durationTicks\":476,\"midi\":64,\"name\":\"E4\",\"ticks\":196101,\"time\":71.9162836171875,\"velocity\":0.6929133858267716},{\"duration\":0.1038632695312458,\"durationTicks\":273,\"midi\":72,\"name\":\"C5\",\"ticks\":196349,\"time\":72.0100334296875,\"velocity\":0.5984251968503937},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":76,\"name\":\"E5\",\"ticks\":196612,\"time\":72.1100919140625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":81,\"name\":\"A5\",\"ticks\":196612,\"time\":72.1100919140625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":84,\"name\":\"C6\",\"ticks\":196612,\"time\":72.1100919140625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":88,\"name\":\"E6\",\"ticks\":196612,\"time\":72.1100919140625,\"velocity\":0.7795275590551181},{\"duration\":0.10503585937500759,\"durationTicks\":277,\"midi\":72,\"name\":\"C5\",\"ticks\":196612,\"time\":72.1100919140625,\"velocity\":0.7322834645669292},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":71,\"name\":\"B4\",\"ticks\":196905,\"time\":72.2209871484375,\"velocity\":0.6929133858267716},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":69,\"name\":\"A4\",\"ticks\":197154,\"time\":72.312173671875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":67,\"name\":\"G4\",\"ticks\":197403,\"time\":72.4033601953125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":71,\"name\":\"B4\",\"ticks\":197662,\"time\":72.498208828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":83,\"name\":\"B5\",\"ticks\":197662,\"time\":72.498208828125,\"velocity\":0.7480314960629921},{\"duration\":0.088623046875,\"durationTicks\":242,\"midi\":65,\"name\":\"F4\",\"ticks\":197662,\"time\":72.498208828125,\"velocity\":0.7007874015748031},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":64,\"name\":\"E4\",\"ticks\":197920,\"time\":72.59269125,\"velocity\":0.6929133858267716},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":198167,\"time\":72.6831453515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":198167,\"time\":72.6831453515625,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":62,\"name\":\"D4\",\"ticks\":198167,\"time\":72.6831453515625,\"velocity\":0.6929133858267716},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":60,\"name\":\"C4\",\"ticks\":198415,\"time\":72.7739656640625,\"velocity\":0.6929133858267716},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":74,\"name\":\"D5\",\"ticks\":198677,\"time\":72.8699129296875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":86,\"name\":\"D6\",\"ticks\":198677,\"time\":72.8699129296875,\"velocity\":0.7637795275590551},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":59,\"name\":\"B3\",\"ticks\":198677,\"time\":72.8699129296875,\"velocity\":0.7165354330708661},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":57,\"name\":\"A3\",\"ticks\":198940,\"time\":72.96622640625,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":76,\"name\":\"E5\",\"ticks\":199187,\"time\":73.0566805078125,\"velocity\":0.6299212598425197},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":88,\"name\":\"E6\",\"ticks\":199187,\"time\":73.0566805078125,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":55,\"name\":\"G3\",\"ticks\":199187,\"time\":73.0566805078125,\"velocity\":0.6929133858267716},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":74,\"name\":\"D5\",\"ticks\":199435,\"time\":73.1475008203125,\"velocity\":0.6299212598425197},{\"duration\":0.09375,\"durationTicks\":256,\"midi\":86,\"name\":\"D6\",\"ticks\":199435,\"time\":73.1475008203125,\"velocity\":0.7401574803149606},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":53,\"name\":\"F3\",\"ticks\":199435,\"time\":73.1475008203125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":72,\"name\":\"C5\",\"ticks\":199692,\"time\":73.24161703125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":76,\"name\":\"E5\",\"ticks\":199692,\"time\":73.24161703125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":81,\"name\":\"A5\",\"ticks\":199692,\"time\":73.24161703125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":84,\"name\":\"C6\",\"ticks\":199692,\"time\":73.24161703125,\"velocity\":0.7480314960629921},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":52,\"name\":\"E3\",\"ticks\":199692,\"time\":73.24161703125,\"velocity\":0.7007874015748031},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":50,\"name\":\"D3\",\"ticks\":199949,\"time\":73.3357332421875,\"velocity\":0.6929133858267716},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":71,\"name\":\"B4\",\"ticks\":200197,\"time\":73.4265535546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":76,\"name\":\"E5\",\"ticks\":200197,\"time\":73.4265535546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":80,\"name\":\"G#5\",\"ticks\":200197,\"time\":73.4265535546875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":83,\"name\":\"B5\",\"ticks\":200197,\"time\":73.4265535546875,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":48,\"name\":\"C3\",\"ticks\":200197,\"time\":73.4265535546875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":47,\"name\":\"B2\",\"ticks\":200445,\"time\":73.5173738671875,\"velocity\":0.6929133858267716},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":69,\"name\":\"A4\",\"ticks\":200708,\"time\":73.61368734375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":72,\"name\":\"C5\",\"ticks\":200708,\"time\":73.61368734375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":76,\"name\":\"E5\",\"ticks\":200708,\"time\":73.61368734375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":81,\"name\":\"A5\",\"ticks\":200708,\"time\":73.61368734375,\"velocity\":0.7795275590551181},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":64,\"name\":\"E4\",\"ticks\":200708,\"time\":73.61368734375,\"velocity\":0.7322834645669292},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":62,\"name\":\"D4\",\"ticks\":201001,\"time\":73.7209871484375,\"velocity\":0.6929133858267716},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":64,\"name\":\"E4\",\"ticks\":201250,\"time\":73.812173671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":69,\"name\":\"A4\",\"ticks\":201250,\"time\":73.812173671875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":72,\"name\":\"C5\",\"ticks\":201250,\"time\":73.812173671875,\"velocity\":0.7401574803149606},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":60,\"name\":\"C4\",\"ticks\":201250,\"time\":73.812173671875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":59,\"name\":\"B3\",\"ticks\":201499,\"time\":73.9033601953125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":69,\"name\":\"A4\",\"ticks\":201758,\"time\":73.998208828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":72,\"name\":\"C5\",\"ticks\":201758,\"time\":73.998208828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":76,\"name\":\"E5\",\"ticks\":201758,\"time\":73.998208828125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":81,\"name\":\"A5\",\"ticks\":201758,\"time\":73.998208828125,\"velocity\":0.7480314960629921},{\"duration\":0.088623046875,\"durationTicks\":242,\"midi\":57,\"name\":\"A3\",\"ticks\":201758,\"time\":73.998208828125,\"velocity\":0.7007874015748031},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":55,\"name\":\"G3\",\"ticks\":202016,\"time\":74.09269125,\"velocity\":0.6929133858267716},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":202263,\"time\":74.1831453515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":76,\"name\":\"E5\",\"ticks\":202263,\"time\":74.1831453515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":81,\"name\":\"A5\",\"ticks\":202263,\"time\":74.1831453515625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":202263,\"time\":74.1831453515625,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":53,\"name\":\"F3\",\"ticks\":202263,\"time\":74.1831453515625,\"velocity\":0.6929133858267716},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":52,\"name\":\"E3\",\"ticks\":202511,\"time\":74.2739656640625,\"velocity\":0.6929133858267716},{\"duration\":0.37375437304687864,\"durationTicks\":1014,\"midi\":76,\"name\":\"E5\",\"ticks\":202773,\"time\":74.3699129296875,\"velocity\":0.6535433070866141},{\"duration\":0.37375437304687864,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":202773,\"time\":74.3699129296875,\"velocity\":0.6535433070866141},{\"duration\":0.37375437304687864,\"durationTicks\":1014,\"midi\":84,\"name\":\"C6\",\"ticks\":202773,\"time\":74.3699129296875,\"velocity\":0.6535433070866141},{\"duration\":0.37375437304687864,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":202773,\"time\":74.3699129296875,\"velocity\":0.7637795275590551},{\"duration\":0.09048173437500395,\"durationTicks\":247,\"midi\":50,\"name\":\"D3\",\"ticks\":202773,\"time\":74.3699129296875,\"velocity\":0.7165354330708661},{\"duration\":0.08512665820312293,\"durationTicks\":231,\"midi\":48,\"name\":\"C3\",\"ticks\":203036,\"time\":74.4662908828125,\"velocity\":0.6929133858267716},{\"duration\":0.08549517187499589,\"durationTicks\":232,\"midi\":47,\"name\":\"B2\",\"ticks\":203283,\"time\":74.55731375976563,\"velocity\":0.6929133858267716},{\"duration\":0.08937381445312553,\"durationTicks\":241,\"midi\":45,\"name\":\"A2\",\"ticks\":203531,\"time\":74.64873080273438,\"velocity\":0.6929133858267716},{\"duration\":0.17632419335937755,\"durationTicks\":474,\"midi\":74,\"name\":\"D5\",\"ticks\":203788,\"time\":74.74403814843751,\"velocity\":0.6377952755905512},{\"duration\":0.18752043359374682,\"durationTicks\":504,\"midi\":86,\"name\":\"D6\",\"ticks\":203788,\"time\":74.74403814843751,\"velocity\":0.7480314960629921},{\"duration\":0.08937381445312553,\"durationTicks\":241,\"midi\":43,\"name\":\"G2\",\"ticks\":203788,\"time\":74.74403814843751,\"velocity\":0.7007874015748031},{\"duration\":0.0865842578124898,\"durationTicks\":232,\"midi\":41,\"name\":\"F2\",\"ticks\":204045,\"time\":74.83937620410158,\"velocity\":0.6929133858267716},{\"duration\":0.17818534179687617,\"durationTicks\":476,\"midi\":72,\"name\":\"C5\",\"ticks\":204293,\"time\":74.93193179003907,\"velocity\":0.6299212598425197},{\"duration\":0.18945335937499408,\"durationTicks\":506,\"midi\":84,\"name\":\"C6\",\"ticks\":204293,\"time\":74.93193179003907,\"velocity\":0.7401574803149606},{\"duration\":0.086584257812504,\"durationTicks\":232,\"midi\":40,\"name\":\"E2\",\"ticks\":204293,\"time\":74.93193179003907,\"velocity\":0.6850393700787402},{\"duration\":0.09126376464843133,\"durationTicks\":243,\"midi\":38,\"name\":\"D2\",\"ticks\":204541,\"time\":75.02448737597658,\"velocity\":0.6850393700787402},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":71,\"name\":\"B4\",\"ticks\":204804,\"time\":75.12322559375,\"velocity\":0.6692913385826772},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":76,\"name\":\"E5\",\"ticks\":204804,\"time\":75.12322559375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":80,\"name\":\"G#5\",\"ticks\":204804,\"time\":75.12322559375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":83,\"name\":\"B5\",\"ticks\":204804,\"time\":75.12322559375,\"velocity\":0.7795275590551181},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":59,\"name\":\"B3\",\"ticks\":204804,\"time\":75.12322559375,\"velocity\":0.7322834645669292},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":57,\"name\":\"A3\",\"ticks\":205097,\"time\":75.2305253984375,\"velocity\":0.6929133858267716},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":59,\"name\":\"B3\",\"ticks\":205346,\"time\":75.321711921875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":64,\"name\":\"E4\",\"ticks\":205346,\"time\":75.321711921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":71,\"name\":\"B4\",\"ticks\":205346,\"time\":75.321711921875,\"velocity\":0.7401574803149606},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":56,\"name\":\"G#3\",\"ticks\":205346,\"time\":75.321711921875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":54,\"name\":\"F#3\",\"ticks\":205595,\"time\":75.4128984453125,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":71,\"name\":\"B4\",\"ticks\":205854,\"time\":75.507747078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":76,\"name\":\"E5\",\"ticks\":205854,\"time\":75.507747078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":80,\"name\":\"G#5\",\"ticks\":205854,\"time\":75.507747078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":83,\"name\":\"B5\",\"ticks\":205854,\"time\":75.507747078125,\"velocity\":0.7480314960629921},{\"duration\":0.088623046875,\"durationTicks\":242,\"midi\":52,\"name\":\"E3\",\"ticks\":205854,\"time\":75.507747078125,\"velocity\":0.7007874015748031},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":50,\"name\":\"D3\",\"ticks\":206112,\"time\":75.6022295,\"velocity\":0.6929133858267716},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":206359,\"time\":75.6926836015625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":76,\"name\":\"E5\",\"ticks\":206359,\"time\":75.6926836015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":81,\"name\":\"A5\",\"ticks\":206359,\"time\":75.6926836015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":206359,\"time\":75.6926836015625,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":48,\"name\":\"C3\",\"ticks\":206359,\"time\":75.6926836015625,\"velocity\":0.6929133858267716},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":47,\"name\":\"B2\",\"ticks\":206607,\"time\":75.7835039140625,\"velocity\":0.6929133858267716},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":74,\"name\":\"D5\",\"ticks\":206869,\"time\":75.8794511796875,\"velocity\":0.6535433070866141},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":79,\"name\":\"G5\",\"ticks\":206869,\"time\":75.8794511796875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":83,\"name\":\"B5\",\"ticks\":206869,\"time\":75.8794511796875,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":86,\"name\":\"D6\",\"ticks\":206869,\"time\":75.8794511796875,\"velocity\":0.7637795275590551},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":45,\"name\":\"A2\",\"ticks\":206869,\"time\":75.8794511796875,\"velocity\":0.7165354330708661},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":43,\"name\":\"G2\",\"ticks\":207132,\"time\":75.97576465625,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":62,\"name\":\"D4\",\"ticks\":207379,\"time\":76.0662187578125,\"velocity\":0.6299212598425197},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":69,\"name\":\"A4\",\"ticks\":207379,\"time\":76.0662187578125,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":74,\"name\":\"D5\",\"ticks\":207379,\"time\":76.0662187578125,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":41,\"name\":\"F2\",\"ticks\":207379,\"time\":76.0662187578125,\"velocity\":0.6929133858267716},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":40,\"name\":\"E2\",\"ticks\":207627,\"time\":76.1570390703125,\"velocity\":0.6850393700787402},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":76,\"name\":\"E5\",\"ticks\":207884,\"time\":76.25115528125,\"velocity\":0.6377952755905512},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":81,\"name\":\"A5\",\"ticks\":207884,\"time\":76.25115528125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":84,\"name\":\"C6\",\"ticks\":207884,\"time\":76.25115528125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":88,\"name\":\"E6\",\"ticks\":207884,\"time\":76.25115528125,\"velocity\":0.7480314960629921},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":38,\"name\":\"D2\",\"ticks\":207884,\"time\":76.25115528125,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":36,\"name\":\"C2\",\"ticks\":208141,\"time\":76.3452714921875,\"velocity\":0.6771653543307087},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":64,\"name\":\"E4\",\"ticks\":208389,\"time\":76.4360918046875,\"velocity\":0.6299212598425197},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":69,\"name\":\"A4\",\"ticks\":208389,\"time\":76.4360918046875,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":76,\"name\":\"E5\",\"ticks\":208389,\"time\":76.4360918046875,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":35,\"name\":\"B1\",\"ticks\":208389,\"time\":76.4360918046875,\"velocity\":0.6771653543307087},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":33,\"name\":\"A1\",\"ticks\":208637,\"time\":76.5269121171875,\"velocity\":0.6692913385826772},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":72,\"name\":\"C5\",\"ticks\":208900,\"time\":76.62322559375,\"velocity\":0.6692913385826772},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":76,\"name\":\"E5\",\"ticks\":208900,\"time\":76.62322559375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":81,\"name\":\"A5\",\"ticks\":208900,\"time\":76.62322559375,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":84,\"name\":\"C6\",\"ticks\":208900,\"time\":76.62322559375,\"velocity\":0.7795275590551181},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":57,\"name\":\"A3\",\"ticks\":208900,\"time\":76.62322559375,\"velocity\":0.7322834645669292},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":55,\"name\":\"G3\",\"ticks\":209193,\"time\":76.7305253984375,\"velocity\":0.6929133858267716},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":57,\"name\":\"A3\",\"ticks\":209442,\"time\":76.821711921875,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":64,\"name\":\"E4\",\"ticks\":209442,\"time\":76.821711921875,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":69,\"name\":\"A4\",\"ticks\":209442,\"time\":76.821711921875,\"velocity\":0.7401574803149606},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":53,\"name\":\"F3\",\"ticks\":209442,\"time\":76.821711921875,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":52,\"name\":\"E3\",\"ticks\":209691,\"time\":76.9128984453125,\"velocity\":0.6929133858267716},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":209950,\"time\":77.007747078125,\"velocity\":0.6377952755905512},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":72,\"name\":\"C5\",\"ticks\":209950,\"time\":77.007747078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":76,\"name\":\"E5\",\"ticks\":209950,\"time\":77.007747078125,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":81,\"name\":\"A5\",\"ticks\":209950,\"time\":77.007747078125,\"velocity\":0.7480314960629921},{\"duration\":0.088623046875,\"durationTicks\":242,\"midi\":50,\"name\":\"D3\",\"ticks\":209950,\"time\":77.007747078125,\"velocity\":0.7007874015748031},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":48,\"name\":\"C3\",\"ticks\":210208,\"time\":77.1022295,\"velocity\":0.6929133858267716},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":57,\"name\":\"A3\",\"ticks\":210455,\"time\":77.1926836015625,\"velocity\":0.6299212598425197},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":64,\"name\":\"E4\",\"ticks\":210455,\"time\":77.1926836015625,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":210455,\"time\":77.1926836015625,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":47,\"name\":\"B2\",\"ticks\":210455,\"time\":77.1926836015625,\"velocity\":0.6929133858267716},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":45,\"name\":\"A2\",\"ticks\":210703,\"time\":77.2835039140625,\"velocity\":0.6929133858267716},{\"duration\":0.18703231640625972,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":210965,\"time\":77.3794511796875,\"velocity\":0.6535433070866141},{\"duration\":0.17597690624999984,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":210965,\"time\":77.3794511796875,\"velocity\":0.6535433070866141},{\"duration\":0.18703231640625972,\"durationTicks\":509,\"midi\":76,\"name\":\"E5\",\"ticks\":210965,\"time\":77.3794511796875,\"velocity\":0.6535433070866141},{\"duration\":0.18703231640625972,\"durationTicks\":509,\"midi\":81,\"name\":\"A5\",\"ticks\":210965,\"time\":77.3794511796875,\"velocity\":0.7637795275590551},{\"duration\":0.09048173437500395,\"durationTicks\":247,\"midi\":47,\"name\":\"B2\",\"ticks\":210965,\"time\":77.3794511796875,\"velocity\":0.7165354330708661},{\"duration\":0.08512665820312293,\"durationTicks\":231,\"midi\":48,\"name\":\"C3\",\"ticks\":211228,\"time\":77.4758291328125,\"velocity\":0.6929133858267716},{\"duration\":0.18635354296874596,\"durationTicks\":504,\"midi\":57,\"name\":\"A3\",\"ticks\":211475,\"time\":77.56685200976564,\"velocity\":0.6299212598425197},{\"duration\":0.1752281718750055,\"durationTicks\":474,\"midi\":64,\"name\":\"E4\",\"ticks\":211475,\"time\":77.56685200976564,\"velocity\":0.6299212598425197},{\"duration\":0.18635354296874596,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":211475,\"time\":77.56685200976564,\"velocity\":0.7401574803149606},{\"duration\":0.08549517187499589,\"durationTicks\":232,\"midi\":50,\"name\":\"D3\",\"ticks\":211475,\"time\":77.56685200976564,\"velocity\":0.6929133858267716},{\"duration\":0.08937381445312553,\"durationTicks\":241,\"midi\":52,\"name\":\"E3\",\"ticks\":211723,\"time\":77.65826905273438,\"velocity\":0.6929133858267716},{\"duration\":0.08937381445312553,\"durationTicks\":241,\"midi\":57,\"name\":\"A3\",\"ticks\":211980,\"time\":77.75357639843752,\"velocity\":0.6377952755905512},{\"duration\":0.09496484765625723,\"durationTicks\":256,\"midi\":69,\"name\":\"A4\",\"ticks\":211980,\"time\":77.75357639843752,\"velocity\":0.7480314960629921},{\"duration\":0.08937381445312553,\"durationTicks\":241,\"midi\":33,\"name\":\"A1\",\"ticks\":211980,\"time\":77.75357639843752,\"velocity\":0.6141732283464567},{\"duration\":0.09496484765625723,\"durationTicks\":256,\"midi\":45,\"name\":\"A2\",\"ticks\":211980,\"time\":77.75357639843752,\"velocity\":0.7480314960629921},{\"duration\":0.0865842578124898,\"durationTicks\":232,\"midi\":59,\"name\":\"B3\",\"ticks\":212237,\"time\":77.84891445410159,\"velocity\":0.6299212598425197},{\"duration\":0.09218237792967443,\"durationTicks\":247,\"midi\":71,\"name\":\"B4\",\"ticks\":212237,\"time\":77.84891445410159,\"velocity\":0.7401574803149606},{\"duration\":0.0865842578124898,\"durationTicks\":232,\"midi\":35,\"name\":\"B1\",\"ticks\":212237,\"time\":77.84891445410159,\"velocity\":0.6141732283464567},{\"duration\":0.09218237792967443,\"durationTicks\":247,\"midi\":47,\"name\":\"B2\",\"ticks\":212237,\"time\":77.84891445410159,\"velocity\":0.7401574803149606},{\"duration\":0.086584257812504,\"durationTicks\":232,\"midi\":60,\"name\":\"C4\",\"ticks\":212485,\"time\":77.94147004003908,\"velocity\":0.6299212598425197},{\"duration\":0.09218237792968864,\"durationTicks\":247,\"midi\":72,\"name\":\"C5\",\"ticks\":212485,\"time\":77.94147004003908,\"velocity\":0.7401574803149606},{\"duration\":0.086584257812504,\"durationTicks\":232,\"midi\":36,\"name\":\"C2\",\"ticks\":212485,\"time\":77.94147004003908,\"velocity\":0.6141732283464567},{\"duration\":0.09218237792968864,\"durationTicks\":247,\"midi\":48,\"name\":\"C3\",\"ticks\":212485,\"time\":77.94147004003908,\"velocity\":0.7401574803149606},{\"duration\":0.09126376464843133,\"durationTicks\":243,\"midi\":62,\"name\":\"D4\",\"ticks\":212733,\"time\":78.03402562597658,\"velocity\":0.6299212598425197},{\"duration\":0.09689777343749029,\"durationTicks\":258,\"midi\":74,\"name\":\"D5\",\"ticks\":212733,\"time\":78.03402562597658,\"velocity\":0.7401574803149606},{\"duration\":0.09126376464843133,\"durationTicks\":243,\"midi\":38,\"name\":\"D2\",\"ticks\":212733,\"time\":78.03402562597658,\"velocity\":0.6220472440944882},{\"duration\":0.09689777343749029,\"durationTicks\":258,\"midi\":50,\"name\":\"D3\",\"ticks\":212733,\"time\":78.03402562597658,\"velocity\":0.7401574803149606},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":64,\"name\":\"E4\",\"ticks\":212996,\"time\":78.13276384375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":69,\"name\":\"A4\",\"ticks\":212996,\"time\":78.13276384375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":72,\"name\":\"C5\",\"ticks\":212996,\"time\":78.13276384375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":76,\"name\":\"E5\",\"ticks\":212996,\"time\":78.13276384375001,\"velocity\":0.7795275590551181},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":52,\"name\":\"E3\",\"ticks\":212996,\"time\":78.13276384375001,\"velocity\":0.7322834645669292},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":50,\"name\":\"D3\",\"ticks\":213289,\"time\":78.24006364843751,\"velocity\":0.6929133858267716},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":62,\"name\":\"D4\",\"ticks\":213538,\"time\":78.33125017187501,\"velocity\":0.6299212598425197},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":65,\"name\":\"F4\",\"ticks\":213538,\"time\":78.33125017187501,\"velocity\":0.6299212598425197},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":69,\"name\":\"A4\",\"ticks\":213538,\"time\":78.33125017187501,\"velocity\":0.6299212598425197},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":74,\"name\":\"D5\",\"ticks\":213538,\"time\":78.33125017187501,\"velocity\":0.7401574803149606},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":48,\"name\":\"C3\",\"ticks\":213538,\"time\":78.33125017187501,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":47,\"name\":\"B2\",\"ticks\":213787,\"time\":78.42243669531251,\"velocity\":0.6929133858267716},{\"duration\":0.088623046875,\"durationTicks\":242,\"midi\":45,\"name\":\"A2\",\"ticks\":214046,\"time\":78.51728532812501,\"velocity\":0.7007874015748031},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":43,\"name\":\"G2\",\"ticks\":214304,\"time\":78.61176775000001,\"velocity\":0.6929133858267716},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":65,\"name\":\"F4\",\"ticks\":214551,\"time\":78.70222185156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":77,\"name\":\"F5\",\"ticks\":214551,\"time\":78.70222185156251,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":41,\"name\":\"F2\",\"ticks\":214551,\"time\":78.70222185156251,\"velocity\":0.6929133858267716},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":40,\"name\":\"E2\",\"ticks\":214799,\"time\":78.79304216406251,\"velocity\":0.6850393700787402},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":69,\"name\":\"A4\",\"ticks\":215061,\"time\":78.88898942968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":74,\"name\":\"D5\",\"ticks\":215061,\"time\":78.88898942968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":77,\"name\":\"F5\",\"ticks\":215061,\"time\":78.88898942968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":215061,\"time\":78.88898942968751,\"velocity\":0.7637795275590551},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":41,\"name\":\"F2\",\"ticks\":215061,\"time\":78.88898942968751,\"velocity\":0.7165354330708661},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":43,\"name\":\"G2\",\"ticks\":215324,\"time\":78.98530290625001,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":45,\"name\":\"A2\",\"ticks\":215571,\"time\":79.07575700781251,\"velocity\":0.6929133858267716},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":47,\"name\":\"B2\",\"ticks\":215819,\"time\":79.16657732031251,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":67,\"name\":\"G4\",\"ticks\":216076,\"time\":79.26069353125001,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":79,\"name\":\"G5\",\"ticks\":216076,\"time\":79.26069353125001,\"velocity\":0.7480314960629921},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":48,\"name\":\"C3\",\"ticks\":216076,\"time\":79.26069353125001,\"velocity\":0.7007874015748031},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":50,\"name\":\"D3\",\"ticks\":216333,\"time\":79.35480974218751,\"velocity\":0.6929133858267716},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":65,\"name\":\"F4\",\"ticks\":216581,\"time\":79.44563005468751,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":77,\"name\":\"F5\",\"ticks\":216581,\"time\":79.44563005468751,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":52,\"name\":\"E3\",\"ticks\":216581,\"time\":79.44563005468751,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":53,\"name\":\"F3\",\"ticks\":216829,\"time\":79.53645036718751,\"velocity\":0.6929133858267716},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":64,\"name\":\"E4\",\"ticks\":217092,\"time\":79.63276384375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":76,\"name\":\"E5\",\"ticks\":217092,\"time\":79.63276384375001,\"velocity\":0.7795275590551181},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":55,\"name\":\"G3\",\"ticks\":217092,\"time\":79.63276384375001,\"velocity\":0.7322834645669292},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":57,\"name\":\"A3\",\"ticks\":217385,\"time\":79.74006364843751,\"velocity\":0.6929133858267716},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":64,\"name\":\"E4\",\"ticks\":217634,\"time\":79.83125017187501,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":69,\"name\":\"A4\",\"ticks\":217634,\"time\":79.83125017187501,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":72,\"name\":\"C5\",\"ticks\":217634,\"time\":79.83125017187501,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":76,\"name\":\"E5\",\"ticks\":217634,\"time\":79.83125017187501,\"velocity\":0.7401574803149606},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":55,\"name\":\"G3\",\"ticks\":217634,\"time\":79.83125017187501,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":53,\"name\":\"F3\",\"ticks\":217883,\"time\":79.92243669531251,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":218142,\"time\":80.01728532812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":218142,\"time\":80.01728532812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":218142,\"time\":80.01728532812501,\"velocity\":0.7480314960629921},{\"duration\":0.088623046875,\"durationTicks\":242,\"midi\":52,\"name\":\"E3\",\"ticks\":218142,\"time\":80.01728532812501,\"velocity\":0.7007874015748031},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":50,\"name\":\"D3\",\"ticks\":218400,\"time\":80.11176775000001,\"velocity\":0.6929133858267716},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":60,\"name\":\"C4\",\"ticks\":218647,\"time\":80.20222185156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":64,\"name\":\"E4\",\"ticks\":218647,\"time\":80.20222185156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":218647,\"time\":80.20222185156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":72,\"name\":\"C5\",\"ticks\":218647,\"time\":80.20222185156251,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":48,\"name\":\"C3\",\"ticks\":218647,\"time\":80.20222185156251,\"velocity\":0.6929133858267716},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":47,\"name\":\"B2\",\"ticks\":218895,\"time\":80.29304216406251,\"velocity\":0.6929133858267716},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":64,\"name\":\"E4\",\"ticks\":219157,\"time\":80.38898942968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":69,\"name\":\"A4\",\"ticks\":219157,\"time\":80.38898942968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":72,\"name\":\"C5\",\"ticks\":219157,\"time\":80.38898942968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":76,\"name\":\"E5\",\"ticks\":219157,\"time\":80.38898942968751,\"velocity\":0.7637795275590551},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":45,\"name\":\"A2\",\"ticks\":219157,\"time\":80.38898942968751,\"velocity\":0.7165354330708661},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":47,\"name\":\"B2\",\"ticks\":219420,\"time\":80.48530290625001,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":48,\"name\":\"C3\",\"ticks\":219667,\"time\":80.57575700781251,\"velocity\":0.6929133858267716},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":50,\"name\":\"D3\",\"ticks\":219915,\"time\":80.66657732031251,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":62,\"name\":\"D4\",\"ticks\":220172,\"time\":80.76069353125001,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":74,\"name\":\"D5\",\"ticks\":220172,\"time\":80.76069353125001,\"velocity\":0.7480314960629921},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":52,\"name\":\"E3\",\"ticks\":220172,\"time\":80.76069353125001,\"velocity\":0.7007874015748031},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":53,\"name\":\"F3\",\"ticks\":220429,\"time\":80.85480974218751,\"velocity\":0.6929133858267716},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":60,\"name\":\"C4\",\"ticks\":220677,\"time\":80.94563005468751,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":72,\"name\":\"C5\",\"ticks\":220677,\"time\":80.94563005468751,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":55,\"name\":\"G3\",\"ticks\":220677,\"time\":80.94563005468751,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":57,\"name\":\"A3\",\"ticks\":220925,\"time\":81.03645036718751,\"velocity\":0.6929133858267716},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":59,\"name\":\"B3\",\"ticks\":221188,\"time\":81.13276384375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":64,\"name\":\"E4\",\"ticks\":221188,\"time\":81.13276384375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":68,\"name\":\"G#4\",\"ticks\":221188,\"time\":81.13276384375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":71,\"name\":\"B4\",\"ticks\":221188,\"time\":81.13276384375001,\"velocity\":0.7795275590551181},{\"duration\":0.1014404296875,\"durationTicks\":277,\"midi\":56,\"name\":\"G#3\",\"ticks\":221188,\"time\":81.13276384375001,\"velocity\":0.7322834645669292},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":54,\"name\":\"F#3\",\"ticks\":221481,\"time\":81.24006364843751,\"velocity\":0.6929133858267716},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":52,\"name\":\"E3\",\"ticks\":221730,\"time\":81.33125017187501,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":50,\"name\":\"D3\",\"ticks\":221979,\"time\":81.42243669531251,\"velocity\":0.6929133858267716},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":59,\"name\":\"B3\",\"ticks\":222238,\"time\":81.51728532812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":64,\"name\":\"E4\",\"ticks\":222238,\"time\":81.51728532812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":68,\"name\":\"G#4\",\"ticks\":222238,\"time\":81.51728532812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":71,\"name\":\"B4\",\"ticks\":222238,\"time\":81.51728532812501,\"velocity\":0.7480314960629921},{\"duration\":0.088623046875,\"durationTicks\":242,\"midi\":48,\"name\":\"C3\",\"ticks\":222238,\"time\":81.51728532812501,\"velocity\":0.7007874015748031},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":47,\"name\":\"B2\",\"ticks\":222496,\"time\":81.61176775000001,\"velocity\":0.6929133858267716},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":60,\"name\":\"C4\",\"ticks\":222743,\"time\":81.70222185156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":64,\"name\":\"E4\",\"ticks\":222743,\"time\":81.70222185156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":69,\"name\":\"A4\",\"ticks\":222743,\"time\":81.70222185156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":72,\"name\":\"C5\",\"ticks\":222743,\"time\":81.70222185156251,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":44,\"name\":\"G#2\",\"ticks\":222743,\"time\":81.70222185156251,\"velocity\":0.6929133858267716},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":42,\"name\":\"F#2\",\"ticks\":222991,\"time\":81.79304216406251,\"velocity\":0.6929133858267716},{\"duration\":0.375008426757816,\"durationTicks\":1014,\"midi\":62,\"name\":\"D4\",\"ticks\":223253,\"time\":81.88898942968751,\"velocity\":0.6535433070866141},{\"duration\":0.375008426757816,\"durationTicks\":1014,\"midi\":74,\"name\":\"D5\",\"ticks\":223253,\"time\":81.88898942968751,\"velocity\":0.7637795275590551},{\"duration\":0.09048173437500395,\"durationTicks\":247,\"midi\":40,\"name\":\"E2\",\"ticks\":223253,\"time\":81.88898942968751,\"velocity\":0.7086614173228346},{\"duration\":0.08513365429688236,\"durationTicks\":231,\"midi\":41,\"name\":\"F2\",\"ticks\":223516,\"time\":81.98536738281251,\"velocity\":0.6929133858267716},{\"duration\":0.08603620312500482,\"durationTicks\":232,\"midi\":43,\"name\":\"G2\",\"ticks\":223763,\"time\":82.07643456835939,\"velocity\":0.6929133858267716},{\"duration\":0.08994312988281195,\"durationTicks\":241,\"midi\":45,\"name\":\"A2\",\"ticks\":224011,\"time\":82.16843028808596,\"velocity\":0.6929133858267716},{\"duration\":0.3815963144531196,\"durationTicks\":1011,\"midi\":64,\"name\":\"E4\",\"ticks\":224268,\"time\":82.26437345703127,\"velocity\":0.6377952755905512},{\"duration\":0.3815963144531196,\"durationTicks\":1011,\"midi\":69,\"name\":\"A4\",\"ticks\":224268,\"time\":82.26437345703127,\"velocity\":0.6377952755905512},{\"duration\":0.3815963144531196,\"durationTicks\":1011,\"midi\":72,\"name\":\"C5\",\"ticks\":224268,\"time\":82.26437345703127,\"velocity\":0.6377952755905512},{\"duration\":0.3815963144531196,\"durationTicks\":1011,\"midi\":76,\"name\":\"E5\",\"ticks\":224268,\"time\":82.26437345703127,\"velocity\":0.7480314960629921},{\"duration\":0.0905197412109402,\"durationTicks\":241,\"midi\":47,\"name\":\"B2\",\"ticks\":224268,\"time\":82.26437345703127,\"velocity\":0.7007874015748031},{\"duration\":0.08713933593749346,\"durationTicks\":232,\"midi\":48,\"name\":\"C3\",\"ticks\":224525,\"time\":82.36090280761721,\"velocity\":0.6929133858267716},{\"duration\":0.08770143750000159,\"durationTicks\":232,\"midi\":50,\"name\":\"D3\",\"ticks\":224773,\"time\":82.45406386718751,\"velocity\":0.6929133858267716},{\"duration\":0.09244891406250133,\"durationTicks\":243,\"midi\":52,\"name\":\"E3\",\"ticks\":225021,\"time\":82.54781367968751,\"velocity\":0.6929133858267716},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":60,\"name\":\"C4\",\"ticks\":225284,\"time\":82.6478721640625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":64,\"name\":\"E4\",\"ticks\":225284,\"time\":82.6478721640625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":69,\"name\":\"A4\",\"ticks\":225284,\"time\":82.6478721640625,\"velocity\":0.6692913385826772},{\"duration\":0.3877507031250076,\"durationTicks\":1049,\"midi\":72,\"name\":\"C5\",\"ticks\":225284,\"time\":82.6478721640625,\"velocity\":0.7795275590551181},{\"duration\":0.10503585937500759,\"durationTicks\":277,\"midi\":57,\"name\":\"A3\",\"ticks\":225284,\"time\":82.6478721640625,\"velocity\":0.7322834645669292},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":55,\"name\":\"G3\",\"ticks\":225577,\"time\":82.75876739843751,\"velocity\":0.6929133858267716},{\"duration\":0.0853271484375,\"durationTicks\":233,\"midi\":53,\"name\":\"F3\",\"ticks\":225826,\"time\":82.84995392187501,\"velocity\":0.6929133858267716},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":52,\"name\":\"E3\",\"ticks\":226075,\"time\":82.94114044531251,\"velocity\":0.6929133858267716},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":69,\"name\":\"A4\",\"ticks\":226334,\"time\":83.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":72,\"name\":\"C5\",\"ticks\":226334,\"time\":83.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":76,\"name\":\"E5\",\"ticks\":226334,\"time\":83.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":226334,\"time\":83.03598907812501,\"velocity\":0.7480314960629921},{\"duration\":0.088623046875,\"durationTicks\":242,\"midi\":50,\"name\":\"D3\",\"ticks\":226334,\"time\":83.03598907812501,\"velocity\":0.7007874015748031},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":48,\"name\":\"C3\",\"ticks\":226592,\"time\":83.13047150000001,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":47,\"name\":\"B2\",\"ticks\":226839,\"time\":83.22092560156251,\"velocity\":0.6929133858267716},{\"duration\":0.090087890625,\"durationTicks\":246,\"midi\":45,\"name\":\"A2\",\"ticks\":227087,\"time\":83.31174591406251,\"velocity\":0.6929133858267716},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":69,\"name\":\"A4\",\"ticks\":227349,\"time\":83.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":72,\"name\":\"C5\",\"ticks\":227349,\"time\":83.40769317968751,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":76,\"name\":\"E5\",\"ticks\":227349,\"time\":83.40769317968751,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":227349,\"time\":83.40769317968751,\"velocity\":0.7007874015748031},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":47,\"name\":\"B2\",\"ticks\":227349,\"time\":83.40769317968751,\"velocity\":0.7165354330708661},{\"duration\":0.0845947265625,\"durationTicks\":231,\"midi\":48,\"name\":\"C3\",\"ticks\":227612,\"time\":83.50400665625001,\"velocity\":0.6929133858267716},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":50,\"name\":\"D3\",\"ticks\":227859,\"time\":83.59446075781251,\"velocity\":0.6929133858267716},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":52,\"name\":\"E3\",\"ticks\":228107,\"time\":83.68528107031251,\"velocity\":0.6929133858267716},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":69,\"name\":\"A4\",\"ticks\":228364,\"time\":83.77939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.09375,\"durationTicks\":256,\"midi\":81,\"name\":\"A5\",\"ticks\":228364,\"time\":83.77939728125001,\"velocity\":0.7480314960629921},{\"duration\":0.0882568359375,\"durationTicks\":241,\"midi\":45,\"name\":\"A2\",\"ticks\":228364,\"time\":83.77939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.09375,\"durationTicks\":256,\"midi\":57,\"name\":\"A3\",\"ticks\":228364,\"time\":83.77939728125001,\"velocity\":0.7480314960629921},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":71,\"name\":\"B4\",\"ticks\":228621,\"time\":83.87351349218751,\"velocity\":0.6299212598425197},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":83,\"name\":\"B5\",\"ticks\":228621,\"time\":83.87351349218751,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":47,\"name\":\"B2\",\"ticks\":228621,\"time\":83.87351349218751,\"velocity\":0.6299212598425197},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":59,\"name\":\"B3\",\"ticks\":228621,\"time\":83.87351349218751,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":72,\"name\":\"C5\",\"ticks\":228869,\"time\":83.96433380468751,\"velocity\":0.6299212598425197},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":84,\"name\":\"C6\",\"ticks\":228869,\"time\":83.96433380468751,\"velocity\":0.7401574803149606},{\"duration\":0.0849609375,\"durationTicks\":232,\"midi\":48,\"name\":\"C3\",\"ticks\":228869,\"time\":83.96433380468751,\"velocity\":0.6299212598425197},{\"duration\":0.0904541015625,\"durationTicks\":247,\"midi\":60,\"name\":\"C4\",\"ticks\":228869,\"time\":83.96433380468751,\"velocity\":0.7401574803149606},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":74,\"name\":\"D5\",\"ticks\":229117,\"time\":84.05515411718751,\"velocity\":0.6299212598425197},{\"duration\":0.094482421875,\"durationTicks\":258,\"midi\":86,\"name\":\"D6\",\"ticks\":229117,\"time\":84.05515411718751,\"velocity\":0.7401574803149606},{\"duration\":0.0889892578125,\"durationTicks\":243,\"midi\":50,\"name\":\"D3\",\"ticks\":229117,\"time\":84.05515411718751,\"velocity\":0.6299212598425197},{\"duration\":0.094482421875,\"durationTicks\":258,\"midi\":62,\"name\":\"D4\",\"ticks\":229117,\"time\":84.05515411718751,\"velocity\":0.7401574803149606},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":76,\"name\":\"E5\",\"ticks\":229380,\"time\":84.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":81,\"name\":\"A5\",\"ticks\":229380,\"time\":84.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":84,\"name\":\"C6\",\"ticks\":229380,\"time\":84.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":88,\"name\":\"E6\",\"ticks\":229380,\"time\":84.15146759375001,\"velocity\":0.7795275590551181},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":52,\"name\":\"E3\",\"ticks\":229380,\"time\":84.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":57,\"name\":\"A3\",\"ticks\":229380,\"time\":84.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":60,\"name\":\"C4\",\"ticks\":229380,\"time\":84.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":64,\"name\":\"E4\",\"ticks\":229380,\"time\":84.15146759375001,\"velocity\":0.7795275590551181},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":74,\"name\":\"D5\",\"ticks\":229922,\"time\":84.34995392187501,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":77,\"name\":\"F5\",\"ticks\":229922,\"time\":84.34995392187501,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":81,\"name\":\"A5\",\"ticks\":229922,\"time\":84.34995392187501,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":86,\"name\":\"D6\",\"ticks\":229922,\"time\":84.34995392187501,\"velocity\":0.7401574803149606},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":50,\"name\":\"D3\",\"ticks\":229922,\"time\":84.34995392187501,\"velocity\":0.6299212598425197},{\"duration\":0.1746826171875,\"durationTicks\":477,\"midi\":53,\"name\":\"F3\",\"ticks\":229922,\"time\":84.34995392187501,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":57,\"name\":\"A3\",\"ticks\":229922,\"time\":84.34995392187501,\"velocity\":0.6299212598425197},{\"duration\":0.1856689453125,\"durationTicks\":507,\"midi\":62,\"name\":\"D4\",\"ticks\":229922,\"time\":84.34995392187501,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":57,\"name\":\"A3\",\"ticks\":230430,\"time\":84.53598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":62,\"name\":\"D4\",\"ticks\":230430,\"time\":84.53598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":69,\"name\":\"A4\",\"ticks\":230430,\"time\":84.53598907812501,\"velocity\":0.7480314960629921},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":26,\"name\":\"D1\",\"ticks\":230430,\"time\":84.53598907812501,\"velocity\":0.6299212598425197},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":33,\"name\":\"A1\",\"ticks\":230430,\"time\":84.53598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":38,\"name\":\"D2\",\"ticks\":230430,\"time\":84.53598907812501,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":77,\"name\":\"F5\",\"ticks\":230935,\"time\":84.72092560156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":81,\"name\":\"A5\",\"ticks\":230935,\"time\":84.72092560156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":86,\"name\":\"D6\",\"ticks\":230935,\"time\":84.72092560156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":89,\"name\":\"F6\",\"ticks\":230935,\"time\":84.72092560156251,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":231445,\"time\":84.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":231445,\"time\":84.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":89,\"name\":\"F6\",\"ticks\":231445,\"time\":84.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":93,\"name\":\"A6\",\"ticks\":231445,\"time\":84.90769317968751,\"velocity\":0.7637795275590551},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":45,\"name\":\"A2\",\"ticks\":231445,\"time\":84.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":50,\"name\":\"D3\",\"ticks\":231445,\"time\":84.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":53,\"name\":\"F3\",\"ticks\":231445,\"time\":84.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":57,\"name\":\"A3\",\"ticks\":231445,\"time\":84.90769317968751,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":38,\"name\":\"D2\",\"ticks\":231955,\"time\":85.09446075781251,\"velocity\":0.6220472440944882},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":45,\"name\":\"A2\",\"ticks\":231955,\"time\":85.09446075781251,\"velocity\":0.6299212598425197},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":50,\"name\":\"D3\",\"ticks\":231955,\"time\":85.09446075781251,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":79,\"name\":\"G5\",\"ticks\":232460,\"time\":85.27939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":91,\"name\":\"G6\",\"ticks\":232460,\"time\":85.27939728125001,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":55,\"name\":\"G3\",\"ticks\":232460,\"time\":85.27939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":67,\"name\":\"G4\",\"ticks\":232460,\"time\":85.27939728125001,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":77,\"name\":\"F5\",\"ticks\":232965,\"time\":85.46433380468751,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":89,\"name\":\"F6\",\"ticks\":232965,\"time\":85.46433380468751,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":53,\"name\":\"F3\",\"ticks\":232965,\"time\":85.46433380468751,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":65,\"name\":\"F4\",\"ticks\":232965,\"time\":85.46433380468751,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":76,\"name\":\"E5\",\"ticks\":233476,\"time\":85.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":81,\"name\":\"A5\",\"ticks\":233476,\"time\":85.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":84,\"name\":\"C6\",\"ticks\":233476,\"time\":85.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":88,\"name\":\"E6\",\"ticks\":233476,\"time\":85.65146759375001,\"velocity\":0.7795275590551181},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":52,\"name\":\"E3\",\"ticks\":233476,\"time\":85.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.1871337890625,\"durationTicks\":511,\"midi\":57,\"name\":\"A3\",\"ticks\":233476,\"time\":85.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":60,\"name\":\"C4\",\"ticks\":233476,\"time\":85.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.1981201171875,\"durationTicks\":541,\"midi\":64,\"name\":\"E4\",\"ticks\":233476,\"time\":85.65146759375001,\"velocity\":0.7795275590551181},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":28,\"name\":\"E1\",\"ticks\":234018,\"time\":85.84995392187501,\"velocity\":0.6220472440944882},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":33,\"name\":\"A1\",\"ticks\":234018,\"time\":85.84995392187501,\"velocity\":0.6299212598425197},{\"duration\":0.37060546875,\"durationTicks\":1012,\"midi\":40,\"name\":\"E2\",\"ticks\":234018,\"time\":85.84995392187501,\"velocity\":0.7401574803149606},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":64,\"name\":\"E4\",\"ticks\":234526,\"time\":86.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":69,\"name\":\"A4\",\"ticks\":234526,\"time\":86.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":72,\"name\":\"C5\",\"ticks\":234526,\"time\":86.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":76,\"name\":\"E5\",\"ticks\":234526,\"time\":86.03598907812501,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":235031,\"time\":86.22092560156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":235031,\"time\":86.22092560156251,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":48,\"name\":\"C3\",\"ticks\":235031,\"time\":86.22092560156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":235031,\"time\":86.22092560156251,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":76,\"name\":\"E5\",\"ticks\":235541,\"time\":86.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":235541,\"time\":86.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":84,\"name\":\"C6\",\"ticks\":235541,\"time\":86.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":88,\"name\":\"E6\",\"ticks\":235541,\"time\":86.40769317968751,\"velocity\":0.7637795275590551},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":235541,\"time\":86.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":57,\"name\":\"A3\",\"ticks\":235541,\"time\":86.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":60,\"name\":\"C4\",\"ticks\":235541,\"time\":86.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":64,\"name\":\"E4\",\"ticks\":235541,\"time\":86.40769317968751,\"velocity\":0.7637795275590551},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":74,\"name\":\"D5\",\"ticks\":236556,\"time\":86.77939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":86,\"name\":\"D6\",\"ticks\":236556,\"time\":86.77939728125001,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":50,\"name\":\"D3\",\"ticks\":236556,\"time\":86.77939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":62,\"name\":\"D4\",\"ticks\":236556,\"time\":86.77939728125001,\"velocity\":0.7480314960629921},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":72,\"name\":\"C5\",\"ticks\":237061,\"time\":86.96433380468751,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":84,\"name\":\"C6\",\"ticks\":237061,\"time\":86.96433380468751,\"velocity\":0.7401574803149606},{\"duration\":0.17431640625,\"durationTicks\":476,\"midi\":48,\"name\":\"C3\",\"ticks\":237061,\"time\":86.96433380468751,\"velocity\":0.6299212598425197},{\"duration\":0.185302734375,\"durationTicks\":506,\"midi\":60,\"name\":\"C4\",\"ticks\":237061,\"time\":86.96433380468751,\"velocity\":0.7401574803149606},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":71,\"name\":\"B4\",\"ticks\":237572,\"time\":87.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":76,\"name\":\"E5\",\"ticks\":237572,\"time\":87.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":80,\"name\":\"G#5\",\"ticks\":237572,\"time\":87.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":83,\"name\":\"B5\",\"ticks\":237572,\"time\":87.15146759375001,\"velocity\":0.7795275590551181},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":47,\"name\":\"B2\",\"ticks\":237572,\"time\":87.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":237572,\"time\":87.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":56,\"name\":\"G#3\",\"ticks\":237572,\"time\":87.15146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":59,\"name\":\"B3\",\"ticks\":237572,\"time\":87.15146759375001,\"velocity\":0.7795275590551181},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":71,\"name\":\"B4\",\"ticks\":238622,\"time\":87.53598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":83,\"name\":\"B5\",\"ticks\":238622,\"time\":87.53598907812501,\"velocity\":0.7480314960629921},{\"duration\":0.173583984375,\"durationTicks\":474,\"midi\":47,\"name\":\"B2\",\"ticks\":238622,\"time\":87.53598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.1845703125,\"durationTicks\":504,\"midi\":59,\"name\":\"B3\",\"ticks\":238622,\"time\":87.53598907812501,\"velocity\":0.7480314960629921},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":72,\"name\":\"C5\",\"ticks\":239127,\"time\":87.72092560156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":84,\"name\":\"C6\",\"ticks\":239127,\"time\":87.72092560156251,\"velocity\":0.7401574803149606},{\"duration\":0.1754150390625,\"durationTicks\":479,\"midi\":48,\"name\":\"C3\",\"ticks\":239127,\"time\":87.72092560156251,\"velocity\":0.6299212598425197},{\"duration\":0.1864013671875,\"durationTicks\":509,\"midi\":60,\"name\":\"C4\",\"ticks\":239127,\"time\":87.72092560156251,\"velocity\":0.7401574803149606},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":74,\"name\":\"D5\",\"ticks\":239637,\"time\":87.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":77,\"name\":\"F5\",\"ticks\":239637,\"time\":87.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":239637,\"time\":87.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":86,\"name\":\"D6\",\"ticks\":239637,\"time\":87.90769317968751,\"velocity\":0.7637795275590551},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":50,\"name\":\"D3\",\"ticks\":239637,\"time\":87.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":53,\"name\":\"F3\",\"ticks\":239637,\"time\":87.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":57,\"name\":\"A3\",\"ticks\":239637,\"time\":87.90769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":62,\"name\":\"D4\",\"ticks\":239637,\"time\":87.90769317968751,\"velocity\":0.7637795275590551},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":76,\"name\":\"E5\",\"ticks\":240652,\"time\":88.27939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":81,\"name\":\"A5\",\"ticks\":240652,\"time\":88.27939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":84,\"name\":\"C6\",\"ticks\":240652,\"time\":88.27939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":88,\"name\":\"E6\",\"ticks\":240652,\"time\":88.27939728125001,\"velocity\":0.7480314960629921},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":52,\"name\":\"E3\",\"ticks\":240652,\"time\":88.27939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":57,\"name\":\"A3\",\"ticks\":240652,\"time\":88.27939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":60,\"name\":\"C4\",\"ticks\":240652,\"time\":88.27939728125001,\"velocity\":0.6377952755905512},{\"duration\":0.3702392578125,\"durationTicks\":1011,\"midi\":64,\"name\":\"E4\",\"ticks\":240652,\"time\":88.27939728125001,\"velocity\":0.7480314960629921},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":72,\"name\":\"C5\",\"ticks\":241668,\"time\":88.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":76,\"name\":\"E5\",\"ticks\":241668,\"time\":88.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":81,\"name\":\"A5\",\"ticks\":241668,\"time\":88.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":84,\"name\":\"C6\",\"ticks\":241668,\"time\":88.65146759375001,\"velocity\":0.7795275590551181},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":48,\"name\":\"C3\",\"ticks\":241668,\"time\":88.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":52,\"name\":\"E3\",\"ticks\":241668,\"time\":88.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":57,\"name\":\"A3\",\"ticks\":241668,\"time\":88.65146759375001,\"velocity\":0.6692913385826772},{\"duration\":0.3841552734375,\"durationTicks\":1049,\"midi\":60,\"name\":\"C4\",\"ticks\":241668,\"time\":88.65146759375001,\"velocity\":0.7795275590551181},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":81,\"name\":\"A5\",\"ticks\":242718,\"time\":89.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":84,\"name\":\"C6\",\"ticks\":242718,\"time\":89.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.2215576171875,\"durationTicks\":605,\"midi\":88,\"name\":\"E6\",\"ticks\":242718,\"time\":89.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.2215576171875,\"durationTicks\":605,\"midi\":93,\"name\":\"A6\",\"ticks\":242718,\"time\":89.03598907812501,\"velocity\":0.7480314960629921},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":45,\"name\":\"A2\",\"ticks\":242718,\"time\":89.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":48,\"name\":\"C3\",\"ticks\":242718,\"time\":89.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":52,\"name\":\"E3\",\"ticks\":242718,\"time\":89.03598907812501,\"velocity\":0.6377952755905512},{\"duration\":0.371337890625,\"durationTicks\":1014,\"midi\":57,\"name\":\"A3\",\"ticks\":242718,\"time\":89.03598907812501,\"velocity\":0.7480314960629921},{\"duration\":0.046875,\"durationTicks\":128,\"midi\":100,\"name\":\"E7\",\"ticks\":243328,\"time\":89.25937775000001,\"velocity\":0.6929133858267716},{\"duration\":0.046875,\"durationTicks\":128,\"midi\":101,\"name\":\"F7\",\"ticks\":243456,\"time\":89.30625275000001,\"velocity\":0.6929133858267716},{\"duration\":0.046875,\"durationTicks\":128,\"midi\":103,\"name\":\"G7\",\"ticks\":243584,\"time\":89.35312775000001,\"velocity\":0.6929133858267716},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":93,\"name\":\"A6\",\"ticks\":243733,\"time\":89.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":96,\"name\":\"C7\",\"ticks\":243733,\"time\":89.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":100,\"name\":\"E7\",\"ticks\":243733,\"time\":89.40769317968751,\"velocity\":0.6535433070866141},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":105,\"name\":\"A7\",\"ticks\":243733,\"time\":89.40769317968751,\"velocity\":0.7637795275590551},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":33,\"name\":\"A1\",\"ticks\":243733,\"time\":89.40769317968751,\"velocity\":0.6299212598425197},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":40,\"name\":\"E2\",\"ticks\":243733,\"time\":89.40769317968751,\"velocity\":0.6456692913385826},{\"duration\":0.741943359375,\"durationTicks\":2026,\"midi\":45,\"name\":\"A2\",\"ticks\":243733,\"time\":89.40769317968751,\"velocity\":0.7637795275590551}]");

/***/ }),

/***/ "./javascripts/controllers/tilesheet.js":
/*!**********************************************!*\
  !*** ./javascripts/controllers/tilesheet.js ***!
  \**********************************************/
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
/* harmony import */ var _controllers_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/display */ "./javascripts/controllers/display.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ "./javascripts/engine.js");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game */ "./javascripts/game/game.js");
/* harmony import */ var _controllers_leaderboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/leaderboard */ "./javascripts/controllers/leaderboard.js");
/* harmony import */ var _controllers_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/sound */ "./javascripts/controllers/sound.js");







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
var display = new _controllers_display__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector("canvas"));
var engine = new _engine__WEBPACK_IMPORTED_MODULE_2__["default"](1000 / 30, update, render);
var game = new _game_game__WEBPACK_IMPORTED_MODULE_3__["default"]();
var leaderboard = new _controllers_leaderboard__WEBPACK_IMPORTED_MODULE_4__["default"]();
var sound;
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

  if (game.interval) game.interval.resume(); // sound

  sound.start();
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

  game.interval.pause(); // sound

  sound.stop();
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
    sound = new _controllers_sound__WEBPACK_IMPORTED_MODULE_5__["default"]();
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


/***/ }),

/***/ "./node_modules/tone/build/Tone.js":
/*!*****************************************!*\
  !*** ./node_modules/tone/build/Tone.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=148)}([function(t,e,i){"use strict";i.r(e),function(t){var s=i(93),n=function(){if(!(this instanceof n))throw new Error("constructor needs to be called with the 'new' keyword")};
/**
 *  Tone.js
 *  @author Yotam Mann
 *  @license http://opensource.org/licenses/MIT MIT License
 *  @copyright 2014-2019 Yotam Mann
 */n.prototype.toString=function(){for(var t in n){var e=t[0].match(/^[A-Z]$/),i=n[t]===this.constructor;if(n.isFunction(n[t])&&e&&i)return t}return"Tone"},n.prototype.dispose=function(){return this},n.prototype.set=function(t,e){if(n.isString(t)){var i={};i[t]=e,t=i}t:for(var s in t){e=t[s];var o=this;if(-1!==s.indexOf(".")){for(var a=s.split("."),r=0;r<a.length-1;r++)if((o=o[a[r]])instanceof n){a.splice(0,r+1);var l=a.join(".");o.set(l,e);continue t}s=a[a.length-1]}var u=o[s];n.isUndef(u)||(n.Signal&&u instanceof n.Signal||n.Param&&u instanceof n.Param?u.value!==e&&(u.value=e):u instanceof AudioParam?u.value!==e&&(u.value=e):n.TimeBase&&u instanceof n.TimeBase?o[s]=e:u instanceof n?u.set(e):u!==e&&(o[s]=e))}return this},n.prototype.get=function(t){n.isUndef(t)?t=this._collectDefaults(this.constructor):n.isString(t)&&(t=[t]);for(var e={},i=0;i<t.length;i++){var s=t[i],o=this,a=e;if(-1!==s.indexOf(".")){for(var r=s.split("."),l=0;l<r.length-1;l++){var u=r[l];a[u]=a[u]||{},a=a[u],o=o[u]}s=r[r.length-1]}var d=o[s];n.isObject(t[s])?a[s]=d.get():n.Signal&&d instanceof n.Signal?a[s]=d.value:n.Param&&d instanceof n.Param?a[s]=d.value:d instanceof AudioParam?a[s]=d.value:d instanceof n?a[s]=d.get():!n.isFunction(d)&&n.isDefined(d)&&(a[s]=d)}return e},n.prototype._collectDefaults=function(t){var e=[];if(n.isDefined(t.defaults)&&(e=Object.keys(t.defaults)),n.isDefined(t._super))for(var i=this._collectDefaults(t._super),s=0;s<i.length;s++)-1===e.indexOf(i[s])&&e.push(i[s]);return e},n.defaults=function(t,e,i){var s={};if(1===t.length&&n.isObject(t[0]))s=t[0];else for(var o=0;o<e.length;o++)s[e[o]]=t[o];return n.isDefined(i.defaults)?n.defaultArg(s,i.defaults):n.isObject(i)?n.defaultArg(s,i):s},n.defaultArg=function(t,e){if(n.isObject(t)&&n.isObject(e)){var i={};for(var s in t)i[s]=n.defaultArg(e[s],t[s]);for(var o in e)i[o]=n.defaultArg(t[o],e[o]);return i}return n.isUndef(t)?e:t},n.prototype.log=function(){if(this.debug||this.toString()===n.global.TONE_DEBUG_CLASS){var t=Array.from(arguments);t.unshift(this.toString()+":"),console.log.apply(void 0,t)}},n.prototype.assert=function(t,e){if(!t)throw new Error(e)},n.connectSeries=function(){for(var t=arguments[0],e=1;e<arguments.length;e++){var i=arguments[e];n.connect(t,i),t=i}return n},n.connect=function(t,e,i,s){for(;n.isDefined(e.input);)n.isArray(e.input)?(s=n.defaultArg(s,0),e=e.input[s],s=0):e.input&&(e=e.input);return e instanceof AudioParam?t.connect(e,i):e instanceof AudioNode&&t.connect(e,i,s),n},n.disconnect=function(t,e,i,s){if(e){for(var o=!1;!o;)n.isArray(e.input)?(n.isDefined(s)?n.disconnect(t,e.input[s],i):e.input.forEach(function(e){try{n.disconnect(t,e,i)}catch(t){}}),o=!0):e.input?e=e.input:o=!0;e instanceof AudioParam?t.disconnect(e,i):e instanceof AudioNode&&t.disconnect(e,i,s)}else t.disconnect();return n},n.isUndef=function(t){return void 0===t},n.isDefined=function(t){return!n.isUndef(t)},n.isFunction=function(t){return"function"==typeof t},n.isNumber=function(t){return"number"==typeof t},n.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object},n.isBoolean=function(t){return"boolean"==typeof t},n.isArray=function(t){return Array.isArray(t)},n.isString=function(t){return"string"==typeof t},n.isNote=function(t){return n.isString(t)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)},n.noOp=function(){},n.prototype._readOnly=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._readOnly(t[e]);else Object.defineProperty(this,t,{writable:!1,enumerable:!0})},n.prototype._writable=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._writable(t[e]);else Object.defineProperty(this,t,{writable:!0})},n.State={Started:"started",Stopped:"stopped",Paused:"paused"},n.global=n.isUndef(t)?window:t,n.equalPowerScale=function(t){var e=.5*Math.PI;return Math.sin(t*e)},n.dbToGain=function(t){return Math.pow(10,t/20)},n.gainToDb=function(t){return Math.log(t)/Math.LN10*20},n.intervalToFrequencyRatio=function(t){return Math.pow(2,t/12)},n.prototype.now=function(){return n.context.now()},n.now=function(){return n.context.now()},n.prototype.immediate=function(){return n.context.currentTime},n.immediate=function(){return n.context.currentTime},n.extend=function(t,e){function i(){}n.isUndef(e)&&(e=n),i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t,t._super=e},n._audioContext=null,n.start=function(){return n.context.resume()},Object.defineProperty(n,"context",{get:function(){return n._audioContext},set:function(t){t.isContext?n._audioContext=t:n._audioContext=new n.Context(t),n.Context.emit("init",n._audioContext)}}),Object.defineProperty(n.prototype,"context",{get:function(){return n.context}}),n.setContext=function(t){n.context=t},Object.defineProperty(n.prototype,"blockTime",{get:function(){return 128/this.context.sampleRate}}),Object.defineProperty(n.prototype,"sampleTime",{get:function(){return 1/this.context.sampleRate}}),Object.defineProperty(n,"supported",{get:function(){var t=n.global.hasOwnProperty("AudioContext")||n.global.hasOwnProperty("webkitAudioContext"),e=n.global.hasOwnProperty("Promise");return t&&e}}),Object.defineProperty(n,"initialized",{get:function(){return Boolean(n.context)}}),n.getContext=function(t){if(n.initialized)t(n.context);else{var e=function(){t(n.context),n.Context.off("init",e)};n.Context.on("init",e)}return n},n.version=s.a,e.default=n}.call(this,i(147))},function(t,e,i){"use strict";i.r(e);var s=i(0);i(20);if(s.default.supported){var n=new OfflineAudioContext(2,1,44100),o=n.createGain(),a=n.createGain();if(o.connect(a)!==a){var r=AudioNode.prototype.connect;AudioNode.prototype.connect=function(){return r.apply(this,arguments),arguments[0]}}}s.default.AudioNode=function(){s.default.call(this);var t=s.default.defaults(arguments,["context"],{context:s.default.context});this._context=t.context},s.default.extend(s.default.AudioNode),Object.defineProperty(s.default.AudioNode.prototype,"context",{get:function(){return this._context}}),s.default.AudioNode.prototype.createInsOuts=function(t,e){1===t?this.input=this.context.createGain():t>1&&(this.input=new Array(t)),1===e?this.output=this.context.createGain():e>1&&(this.output=new Array(e))},Object.defineProperty(s.default.AudioNode.prototype,"channelCount",{get:function(){return this.output.channelCount},set:function(t){return this.output.channelCount=t}}),Object.defineProperty(s.default.AudioNode.prototype,"channelCountMode",{get:function(){return this.output.channelCountMode},set:function(t){return this.output.channelCountMode=t}}),Object.defineProperty(s.default.AudioNode.prototype,"channelInterpretation",{get:function(){return this.output.channelInterpretation},set:function(t){return this.output.channelInterpretation=t}}),Object.defineProperty(s.default.AudioNode.prototype,"numberOfInputs",{get:function(){return this.input?s.default.isArray(this.input)?this.input.length:1:0}}),Object.defineProperty(s.default.AudioNode.prototype,"numberOfOutputs",{get:function(){return this.output?s.default.isArray(this.output)?this.output.length:1:0}}),s.default.AudioNode.prototype.connect=function(t,e,i){return s.default.isArray(this.output)?(e=s.default.defaultArg(e,0),this.output[e].connect(t,0,i)):s.default.connect(this.output,t,e,i),this},s.default.AudioNode.prototype.disconnect=function(t,e,i){return s.default.isArray(this.output)?(e=s.default.defaultArg(e,0),this.output[e].disconnect(t,0,i)):s.default.disconnect(this.output,t,e,i),this},s.default.AudioNode.prototype.chain=function(){var t=Array.from(arguments);return t.unshift(this),s.default.connectSeries.apply(void 0,t),this},s.default.AudioNode.prototype.fan=function(){for(var t=0;t<arguments.length;t++)this.connect(arguments[t]);return this},s.default.AudioNode.prototype.dispose=function(){return s.default.isDefined(this.input)&&(this.input instanceof AudioNode&&this.input.disconnect(),this.input=null),s.default.isDefined(this.output)&&(this.output instanceof AudioNode&&this.output.disconnect(),this.output=null),this._context=null,this};e.default=s.default.AudioNode},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(14),i(30),i(44),i(20),i(3);if(s.default.supported&&!s.default.global.AudioContext.prototype.createConstantSource){var n=function(t){this.context=t;for(var e=t.createBuffer(1,128,t.sampleRate),i=e.getChannelData(0),s=0;s<i.length;s++)i[s]=1;this._bufferSource=t.createBufferSource(),this._bufferSource.channelCount=1,this._bufferSource.channelCountMode="explicit",this._bufferSource.buffer=e,this._bufferSource.loop=!0;var n=this._output=t.createGain();this.offset=n.gain,this._bufferSource.connect(n)};n.prototype.start=function(t){return this._bufferSource.start(t),this},n.prototype.stop=function(t){return this._bufferSource.stop(t),this},n.prototype.connect=function(){return this._output.connect.apply(this._output,arguments),this},n.prototype.disconnect=function(){return this._output.disconnect.apply(this._output,arguments),this},AudioContext.prototype.createConstantSource=function(){return new n(this)},s.default.Context.prototype.createConstantSource=function(){return new n(this)}}s.default.Signal=function(){var t=s.default.defaults(arguments,["value","units"],s.default.Signal);s.default.Param.call(this,t),this._constantSource=this.context.createConstantSource(),this._constantSource.start(0),this._param=this._constantSource.offset,this.value=t.value,this.output=this._constantSource,this.input=this._param=this.output.offset},s.default.extend(s.default.Signal,s.default.Param),s.default.Signal.defaults={value:0,units:s.default.Type.Default,convert:!0},s.default.Signal.prototype.connect=s.default.SignalBase.prototype.connect,s.default.Signal.prototype.disconnect=s.default.SignalBase.prototype.disconnect,s.default.Signal.prototype.getValueAtTime=function(t){return this._param.getValueAtTime?this._param.getValueAtTime(t):s.default.Param.prototype.getValueAtTime.call(this,t)},s.default.Signal.prototype.dispose=function(){return s.default.Param.prototype.dispose.call(this),this._constantSource.stop(),this._constantSource.disconnect(),this._constantSource=null,this};e.default=s.default.Signal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(4),i(1);s.default.Gain=function(){var t=s.default.defaults(arguments,["gain","units"],s.default.Gain);s.default.AudioNode.call(this,t),this.input=this.output=this._gainNode=this.context.createGain(),this.gain=new s.default.Param({param:this._gainNode.gain,units:t.units,value:t.gain,convert:t.convert}),this._readOnly("gain")},s.default.extend(s.default.Gain,s.default.AudioNode),s.default.Gain.defaults={gain:1,convert:!0},s.default.Gain.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._gainNode.disconnect(),this._gainNode=null,this._writable("gain"),this.gain.dispose(),this.gain=null},e.default=s.default.Gain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(63),i(46),i(45),i(20);s.default.Type={Default:"number",Time:"time",Frequency:"frequency",TransportTime:"transportTime",Ticks:"ticks",NormalRange:"normalRange",AudioRange:"audioRange",Decibels:"db",Interval:"interval",BPM:"bpm",Positive:"positive",Gain:"gain",Cents:"cents",Degrees:"degrees",MIDI:"midi",BarsBeatsSixteenths:"barsBeatsSixteenths",Samples:"samples",Hertz:"hertz",Note:"note",Milliseconds:"milliseconds",Seconds:"seconds",Notation:"notation"},s.default.prototype.toSeconds=function(t){return s.default.isNumber(t)?t:s.default.isUndef(t)?this.now():s.default.isString(t)||s.default.isObject(t)?new s.default.Time(t).toSeconds():t instanceof s.default.TimeBase?t.toSeconds():void 0},s.default.prototype.toFrequency=function(t){return s.default.isNumber(t)?t:s.default.isString(t)||s.default.isUndef(t)||s.default.isObject(t)?new s.default.Frequency(t).valueOf():t instanceof s.default.TimeBase?t.toFrequency():void 0},s.default.prototype.toTicks=function(t){return s.default.isNumber(t)||s.default.isString(t)||s.default.isObject(t)?new s.default.TransportTime(t).toTicks():s.default.isUndef(t)?s.default.Transport.ticks:t instanceof s.default.TimeBase?t.toTicks():void 0},e.default=s.default},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(3),i(30);s.default.Multiply=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._mult=this.input[0]=this.output=new s.default.Gain,this._param=this.input[1]=this.output.gain,this.value=s.default.defaultArg(t,0)},s.default.extend(s.default.Multiply,s.default.Signal),s.default.Multiply.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._mult.dispose(),this._mult=null,this._param=null,this},e.default=s.default.Multiply},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(27),i(40),i(4),i(34),i(2),i(1);s.default.Source=function(t){t=s.default.defaultArg(t,s.default.Source.defaults),s.default.AudioNode.call(this),this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.memory=100,this._synced=!1,this._scheduled=[],this._volume.output.output.channelCount=2,this._volume.output.output.channelCountMode="explicit",this.mute=t.mute},s.default.extend(s.default.Source,s.default.AudioNode),s.default.Source.defaults={volume:0,mute:!1},Object.defineProperty(s.default.Source.prototype,"state",{get:function(){return this._synced?s.default.Transport.state===s.default.State.Started?this._state.getValueAtTime(s.default.Transport.seconds):s.default.State.Stopped:this._state.getValueAtTime(this.now())}}),Object.defineProperty(s.default.Source.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.Source.prototype._start=s.default.noOp,s.default.Source.prototype.restart=s.default.noOp,s.default.Source.prototype._stop=s.default.noOp,s.default.Source.prototype.start=function(t,e,i){if(s.default.isUndef(t)&&this._synced?t=s.default.Transport.seconds:(t=this.toSeconds(t),t=Math.max(t,this.context.currentTime)),this._state.getValueAtTime(t)===s.default.State.Started)this._state.cancel(t),this._state.setStateAtTime(s.default.State.Started,t),this.restart(t,e,i);else if(this._state.setStateAtTime(s.default.State.Started,t),this._synced){var n=this._state.get(t);n.offset=s.default.defaultArg(e,0),n.duration=i;var o=s.default.Transport.schedule(function(t){this._start(t,e,i)}.bind(this),t);this._scheduled.push(o),s.default.Transport.state===s.default.State.Started&&this._syncedStart(this.now(),s.default.Transport.seconds)}else this._start.apply(this,arguments);return this},s.default.Source.prototype.stop=function(t){if(s.default.isUndef(t)&&this._synced?t=s.default.Transport.seconds:(t=this.toSeconds(t),t=Math.max(t,this.context.currentTime)),this._synced){var e=s.default.Transport.schedule(this._stop.bind(this),t);this._scheduled.push(e)}else this._stop.apply(this,arguments);return this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this},s.default.Source.prototype.sync=function(){return this._synced=!0,this._syncedStart=function(t,e){if(e>0){var i=this._state.get(e);if(i&&i.state===s.default.State.Started&&i.time!==e){var n,o=e-this.toSeconds(i.time);i.duration&&(n=this.toSeconds(i.duration)-o),this._start(t,this.toSeconds(i.offset)+o,n)}}}.bind(this),this._syncedStop=function(t){var e=s.default.Transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)===s.default.State.Started&&this._stop(t)}.bind(this),s.default.Transport.on("start loopStart",this._syncedStart),s.default.Transport.on("stop pause loopEnd",this._syncedStop),this},s.default.Source.prototype.unsync=function(){this._synced&&(s.default.Transport.off("stop pause loopEnd",this._syncedStop),s.default.Transport.off("start loopStart",this._syncedStart)),this._synced=!1;for(var t=0;t<this._scheduled.length;t++){var e=this._scheduled[t];s.default.Transport.clear(e)}return this._scheduled=[],this._state.cancel(0),this},s.default.Source.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this.unsync(),this._scheduled=null,this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null,this._state.dispose(),this._state=null},e.default=s.default.Source},function(t,e,i){"use strict";i.r(e);var s=i(0);i(30),i(44);if(s.default.supported&&!s.default.global.AudioContext.prototype._native_createWaveShaper){var n=navigator.userAgent.toLowerCase();if(n.includes("safari")&&!n.includes("chrome")){var o=function(t){for(var e in this._internalNode=this.input=this.output=t._native_createWaveShaper(),this._curve=null,this._internalNode)this._defineProperty(this._internalNode,e)};Object.defineProperty(o.prototype,"curve",{get:function(){return this._curve},set:function(t){this._curve=t;var e=new Float32Array(t.length+1);e.set(t,1),e[0]=t[0],this._internalNode.curve=e}}),o.prototype._defineProperty=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return"function"==typeof t[e]?t[e].bind(t):t[e]},set:function(i){t[e]=i}})},s.default.global.AudioContext.prototype._native_createWaveShaper=s.default.global.AudioContext.prototype.createWaveShaper,s.default.global.AudioContext.prototype.createWaveShaper=function(){return new o(this)}}}s.default.WaveShaper=function(t,e){s.default.SignalBase.call(this),this._shaper=this.input=this.output=this.context.createWaveShaper(),this._curve=null,Array.isArray(t)?this.curve=t:isFinite(t)||s.default.isUndef(t)?this._curve=new Float32Array(s.default.defaultArg(t,1024)):s.default.isFunction(t)&&(this._curve=new Float32Array(s.default.defaultArg(e,1024)),this.setMap(t))},s.default.extend(s.default.WaveShaper,s.default.SignalBase),s.default.WaveShaper.prototype.setMap=function(t){for(var e=new Array(this._curve.length),i=0,s=this._curve.length;i<s;i++){var n=i/(s-1)*2-1;e[i]=t(n,i)}return this.curve=e,this},Object.defineProperty(s.default.WaveShaper.prototype,"curve",{get:function(){return this._shaper.curve},set:function(t){this._curve=new Float32Array(t),this._shaper.curve=this._curve}}),Object.defineProperty(s.default.WaveShaper.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){if(!["none","2x","4x"].includes(t))throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");this._shaper.oversample=t}}),s.default.WaveShaper.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._shaper.disconnect(),this._shaper=null,this._curve=null,this};e.default=s.default.WaveShaper},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(1);s.default.Effect=function(){var t=s.default.defaults(arguments,["wet"],s.default.Effect);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._dryWet=new s.default.CrossFade(t.wet),this.wet=this._dryWet.fade,this.effectSend=new s.default.Gain,this.effectReturn=new s.default.Gain,s.default.connect(this.input,this._dryWet.a),s.default.connect(this.input,this.effectSend),this.effectReturn.connect(this._dryWet.b),this._dryWet.connect(this.output),this._readOnly(["wet"])},s.default.extend(s.default.Effect,s.default.AudioNode),s.default.Effect.defaults={wet:1},s.default.Effect.prototype.connectEffect=function(t){return this.effectSend.chain(t,this.effectReturn),this},s.default.Effect.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._dryWet.dispose(),this._dryWet=null,this.effectSend.dispose(),this.effectSend=null,this.effectReturn.dispose(),this.effectReturn=null,this._writable(["wet"]),this.wet=null,this},e.default=s.default.Effect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(1);s.default.Filter=function(){var t=s.default.defaults(arguments,["frequency","type","rolloff"],s.default.Filter);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._filters=[],this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(0,s.default.Type.Cents),this.gain=new s.default.Signal({value:t.gain,convert:!0,type:s.default.Type.Decibels}),this.Q=new s.default.Signal(t.Q),this._type=t.type,this._rolloff=t.rolloff,this.rolloff=t.rolloff,this._readOnly(["detune","frequency","gain","Q"])},s.default.extend(s.default.Filter,s.default.AudioNode),s.default.Filter.defaults={type:"lowpass",frequency:350,rolloff:-12,Q:1,gain:0},Object.defineProperty(s.default.Filter.prototype,"type",{get:function(){return this._type},set:function(t){if(-1===["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t))throw new TypeError("Tone.Filter: invalid type "+t);this._type=t;for(var e=0;e<this._filters.length;e++)this._filters[e].type=t}}),Object.defineProperty(s.default.Filter.prototype,"rolloff",{get:function(){return this._rolloff},set:function(t){t=parseInt(t,10);var e=[-12,-24,-48,-96].indexOf(t);if(-1===e)throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");e+=1,this._rolloff=t,this.input.disconnect();for(var i=0;i<this._filters.length;i++)this._filters[i].disconnect(),this._filters[i]=null;this._filters=new Array(e);for(var n=0;n<e;n++){var o=this.context.createBiquadFilter();o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[n]=o}var a=[this.input].concat(this._filters).concat([this.output]);s.default.connectSeries.apply(s.default,a)}}),s.default.Filter.prototype.getFrequencyResponse=function(t){t=s.default.defaultArg(t,128);for(var e=new Float32Array(t).map(function(){return 1}),i=new Float32Array(t),n=0;n<t;n++){var o=19980*Math.pow(n/t,2)+20;i[n]=o}var a=new Float32Array(t),r=new Float32Array(t);return this._filters.forEach(function(){var t=this.context.createBiquadFilter();t.type=this._type,t.Q.value=this.Q.value,t.frequency.value=this.frequency.value,t.gain.value=this.gain.value,t.getFrequencyResponse(i,a,r),a.forEach(function(t,i){e[i]*=t})}.bind(this)),e},s.default.Filter.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this);for(var t=0;t<this._filters.length;t++)this._filters[t].disconnect(),this._filters[t]=null;return this._filters=null,this._writable(["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.frequency=null,this.Q=null,this.detune.dispose(),this.detune=null,this.gain.dispose(),this.gain=null,this},e.default=s.default.Filter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1);s.default.Merge=function(t){t=s.default.defaultArg(t,2),s.default.AudioNode.call(this),this.createInsOuts(t,0),this._merger=this.output=this.context.createChannelMerger(t);for(var e=0;e<t;e++)this.input[e]=new s.default.Gain,this.input[e].connect(this._merger,0,e),this.input[e].channelCount=1,this.input[e].channelCountMode="explicit";this.left=this.input[0],this.right=this.input[1]},s.default.extend(s.default.Merge,s.default.AudioNode),s.default.Merge.prototype.dispose=function(){return this.input.forEach(function(t){t.dispose()}),s.default.AudioNode.prototype.dispose.call(this),this.left=null,this.right=null,this._merger.disconnect(),this._merger=null,this},e.default=s.default.Merge},function(t,e,i){"use strict";i.r(e);var s=i(0);i(35),i(4);s.default.supported&&(AudioBuffer.prototype.copyToChannel||(AudioBuffer.prototype.copyToChannel=function(t,e,i){var s=this.getChannelData(e);i=i||0;for(var n=0;n<s.length;n++)s[n+i]=t[n]},AudioBuffer.prototype.copyFromChannel=function(t,e,i){var s=this.getChannelData(e);i=i||0;for(var n=0;n<t.length;n++)t[n]=s[n+i]})),s.default.Buffer=function(){var t=s.default.defaults(arguments,["url","onload","onerror"],s.default.Buffer);s.default.call(this),this._buffer=null,this._reversed=t.reverse,this._xhr=null,this.onload=s.default.noOp,t.url instanceof AudioBuffer||t.url instanceof s.default.Buffer?(this.set(t.url),this.loaded||(this.onload=t.onload)):s.default.isString(t.url)&&this.load(t.url).then(t.onload).catch(t.onerror)},s.default.extend(s.default.Buffer),s.default.Buffer.defaults={url:void 0,reverse:!1,onload:s.default.noOp,onerror:s.default.noOp},s.default.Buffer.prototype.set=function(t){return t instanceof s.default.Buffer?t.loaded?this._buffer=t.get():t.onload=function(){this.set(t),this.onload(this)}.bind(this):this._buffer=t,this._reversed&&this._reverse(),this},s.default.Buffer.prototype.get=function(){return this._buffer},s.default.Buffer.prototype.load=function(t,e,i){return new Promise(function(n,o){this._xhr=s.default.Buffer.load(t,function(t){this._xhr=null,this.set(t),n(this),this.onload(this),e&&e(this)}.bind(this),function(t){this._xhr=null,o(t),i&&i(t)}.bind(this))}.bind(this))},s.default.Buffer.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._buffer=null,this._xhr&&(s.default.Buffer._removeFromDownloadQueue(this._xhr),this._xhr.abort(),this._xhr=null),this},Object.defineProperty(s.default.Buffer.prototype,"loaded",{get:function(){return this.length>0}}),Object.defineProperty(s.default.Buffer.prototype,"duration",{get:function(){return this._buffer?this._buffer.duration:0}}),Object.defineProperty(s.default.Buffer.prototype,"length",{get:function(){return this._buffer?this._buffer.length:0}}),Object.defineProperty(s.default.Buffer.prototype,"numberOfChannels",{get:function(){return this._buffer?this._buffer.numberOfChannels:0}}),s.default.Buffer.prototype.fromArray=function(t){var e=t[0].length>0,i=e?t.length:1,s=e?t[0].length:t.length,n=this.context.createBuffer(i,s,this.context.sampleRate);e||1!==i||(t=[t]);for(var o=0;o<i;o++)n.copyToChannel(t[o],o);return this._buffer=n,this},s.default.Buffer.prototype.toMono=function(t){if(s.default.isNumber(t))this.fromArray(this.toArray(t));else{for(var e=new Float32Array(this.length),i=this.numberOfChannels,n=0;n<i;n++)for(var o=this.toArray(n),a=0;a<o.length;a++)e[a]+=o[a];e=e.map(function(t){return t/i}),this.fromArray(e)}return this},s.default.Buffer.prototype.toArray=function(t){if(s.default.isNumber(t))return this.getChannelData(t);if(1===this.numberOfChannels)return this.toArray(0);for(var e=[],i=0;i<this.numberOfChannels;i++)e[i]=this.getChannelData(i);return e},s.default.Buffer.prototype.getChannelData=function(t){return this._buffer.getChannelData(t)},s.default.Buffer.prototype.slice=function(t,e){e=s.default.defaultArg(e,this.duration);for(var i=Math.floor(this.context.sampleRate*this.toSeconds(t)),n=Math.floor(this.context.sampleRate*this.toSeconds(e)),o=[],a=0;a<this.numberOfChannels;a++)o[a]=this.toArray(a).slice(i,n);return(new s.default.Buffer).fromArray(o)},s.default.Buffer.prototype._reverse=function(){if(this.loaded)for(var t=0;t<this.numberOfChannels;t++)Array.prototype.reverse.call(this.getChannelData(t));return this},Object.defineProperty(s.default.Buffer.prototype,"reverse",{get:function(){return this._reversed},set:function(t){this._reversed!==t&&(this._reversed=t,this._reverse())}}),s.default.Emitter.mixin(s.default.Buffer),s.default.Buffer._downloadQueue=[],s.default.Buffer.baseUrl="",s.default.Buffer.fromArray=function(t){return(new s.default.Buffer).fromArray(t)},s.default.Buffer.fromUrl=function(t){var e=new s.default.Buffer;return e.load(t).then(function(){return e})},s.default.Buffer._removeFromDownloadQueue=function(t){var e=s.default.Buffer._downloadQueue.indexOf(t);-1!==e&&s.default.Buffer._downloadQueue.splice(e,1)},s.default.Buffer.load=function(t,e,i){e=s.default.defaultArg(e,s.default.noOp);var n=t.match(/\[(.+\|?)+\]$/);if(n){for(var o=n[1].split("|"),a=o[0],r=0;r<o.length;r++)if(s.default.Buffer.supportsType(o[r])){a=o[r];break}t=t.replace(n[0],a)}function l(t){if(s.default.Buffer._removeFromDownloadQueue(d),s.default.Buffer.emit("error",t),!i)throw t;i(t)}function u(){for(var t=0,e=0;e<s.default.Buffer._downloadQueue.length;e++)t+=s.default.Buffer._downloadQueue[e].progress;s.default.Buffer.emit("progress",t/s.default.Buffer._downloadQueue.length)}var d=new XMLHttpRequest;return d.open("GET",s.default.Buffer.baseUrl+t,!0),d.responseType="arraybuffer",d.progress=0,s.default.Buffer._downloadQueue.push(d),d.addEventListener("load",function(){200===d.status?s.default.context.decodeAudioData(d.response).then(function(t){d.progress=1,u(),e(t),s.default.Buffer._removeFromDownloadQueue(d),0===s.default.Buffer._downloadQueue.length&&s.default.Buffer.emit("load")}).catch(function(){s.default.Buffer._removeFromDownloadQueue(d),l("Tone.Buffer: could not decode audio data: "+t)}):l("Tone.Buffer: could not locate file: "+t)}),d.addEventListener("error",l),d.addEventListener("progress",function(t){t.lengthComputable&&(d.progress=t.loaded/t.total*.95,u())}),d.send(),d},s.default.Buffer.cancelDownloads=function(){return s.default.Buffer._downloadQueue.slice().forEach(function(t){s.default.Buffer._removeFromDownloadQueue(t),t.abort()}),s.default.Buffer},s.default.Buffer.supportsType=function(t){var e=t.split(".");return e=e[e.length-1],""!==document.createElement("audio").canPlayType("audio/"+e)},s.default.loaded=function(){var t,e;function i(){s.default.Buffer.off("load",t),s.default.Buffer.off("error",e)}return new Promise(function(i,n){t=function(){i()},e=function(){n()},s.default.Buffer.on("load",t),s.default.Buffer.on("error",e)}).then(i).catch(function(t){throw i(),new Error(t)})};e.default=s.default.Buffer},function(t,e,i){"use strict";i.r(e);var s=i(0);i(17),i(26),i(1),i(2),i(22),i(4),i(28);s.default.LFO=function(){var t=s.default.defaults(arguments,["frequency","min","max"],s.default.LFO);s.default.AudioNode.call(this),this._oscillator=new s.default.Oscillator({frequency:t.frequency,type:t.type}),this.frequency=this._oscillator.frequency,this.amplitude=this._oscillator.volume,this.amplitude.units=s.default.Type.NormalRange,this.amplitude.value=t.amplitude,this._stoppedSignal=new s.default.Signal(0,s.default.Type.AudioRange),this._zeros=new s.default.Zero,this._stoppedValue=0,this._a2g=new s.default.AudioToGain,this._scaler=this.output=new s.default.Scale(t.min,t.max),this._units=s.default.Type.Default,this.units=t.units,this._oscillator.chain(this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),this._readOnly(["amplitude","frequency"]),this.phase=t.phase},s.default.extend(s.default.LFO,s.default.AudioNode),s.default.LFO.defaults={type:"sine",min:0,max:1,phase:0,frequency:"4n",amplitude:1,units:s.default.Type.Default},s.default.LFO.prototype.start=function(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(0,t),this._oscillator.start(t),this},s.default.LFO.prototype.stop=function(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(this._stoppedValue,t),this._oscillator.stop(t),this},s.default.LFO.prototype.sync=function(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this},s.default.LFO.prototype.unsync=function(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this},Object.defineProperty(s.default.LFO.prototype,"min",{get:function(){return this._toUnits(this._scaler.min)},set:function(t){t=this._fromUnits(t),this._scaler.min=t}}),Object.defineProperty(s.default.LFO.prototype,"max",{get:function(){return this._toUnits(this._scaler.max)},set:function(t){t=this._fromUnits(t),this._scaler.max=t}}),Object.defineProperty(s.default.LFO.prototype,"type",{get:function(){return this._oscillator.type},set:function(t){this._oscillator.type=t,this._stoppedValue=this._oscillator._getInitialValue(),this._stoppedSignal.value=this._stoppedValue}}),Object.defineProperty(s.default.LFO.prototype,"phase",{get:function(){return this._oscillator.phase},set:function(t){this._oscillator.phase=t,this._stoppedValue=this._oscillator._getInitialValue(),this._stoppedSignal.value=this._stoppedValue}}),Object.defineProperty(s.default.LFO.prototype,"units",{get:function(){return this._units},set:function(t){var e=this.min,i=this.max;this._units=t,this.min=e,this.max=i}}),Object.defineProperty(s.default.LFO.prototype,"state",{get:function(){return this._oscillator.state}}),s.default.LFO.prototype.connect=function(t){return t.constructor!==s.default.Signal&&t.constructor!==s.default.Param||(this.convert=t.convert,this.units=t.units),s.default.SignalBase.prototype.connect.apply(this,arguments),this},s.default.LFO.prototype._fromUnits=s.default.Param.prototype._fromUnits,s.default.LFO.prototype._toUnits=s.default.Param.prototype._toUnits,s.default.LFO.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["amplitude","frequency"]),this._oscillator.dispose(),this._oscillator=null,this._stoppedSignal.dispose(),this._stoppedSignal=null,this._zeros.dispose(),this._zeros=null,this._scaler.dispose(),this._scaler=null,this._a2g.dispose(),this._a2g=null,this.frequency=null,this.amplitude=null,this},e.default=s.default.LFO},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(90),i(2),i(3);s.default.Subtract=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._sum=this.input[0]=this.output=new s.default.Gain,this._neg=new s.default.Negate,this._param=this.input[1]=new s.default.Signal(t),this._param.chain(this._neg,this._sum)},s.default.extend(s.default.Subtract,s.default.Signal),s.default.Subtract.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._neg.dispose(),this._neg=null,this._sum.disconnect(),this._sum=null,this},e.default=s.default.Subtract},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(1),i(24);s.default.Param=function(){var t=s.default.defaults(arguments,["param","units","convert"],s.default.Param);s.default.AudioNode.call(this,t),this._param=this.input=t.param,this.units=t.units,this.convert=t.convert,this.overridden=!1,this._events=new s.default.Timeline(1e3),s.default.isDefined(t.value)&&this._param&&this.setValueAtTime(t.value,0)},s.default.extend(s.default.Param,s.default.AudioNode),s.default.Param.defaults={units:s.default.Type.Default,convert:!0,param:void 0},Object.defineProperty(s.default.Param.prototype,"value",{get:function(){var t=this.now();return this._toUnits(this.getValueAtTime(t))},set:function(t){this._initialValue=this._fromUnits(t),this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}}),Object.defineProperty(s.default.Param.prototype,"minValue",{get:function(){return this.units===s.default.Type.Time||this.units===s.default.Type.Frequency||this.units===s.default.Type.NormalRange||this.units===s.default.Type.Positive||this.units===s.default.Type.BPM?0:this.units===s.default.Type.AudioRange?-1:this.units===s.default.Type.Decibels?-1/0:this._param.minValue}}),Object.defineProperty(s.default.Param.prototype,"maxValue",{get:function(){return this.units===s.default.Type.NormalRange||this.units===s.default.Type.AudioRange?1:this._param.maxValue}}),s.default.Param.prototype._fromUnits=function(t){if(!this.convert&&!s.default.isUndef(this.convert)||this.overridden)return t;switch(this.units){case s.default.Type.Time:return this.toSeconds(t);case s.default.Type.Frequency:return this.toFrequency(t);case s.default.Type.Decibels:return s.default.dbToGain(t);case s.default.Type.NormalRange:return Math.min(Math.max(t,0),1);case s.default.Type.AudioRange:return Math.min(Math.max(t,-1),1);case s.default.Type.Positive:return Math.max(t,0);default:return t}},s.default.Param.prototype._toUnits=function(t){if(!this.convert&&!s.default.isUndef(this.convert))return t;switch(this.units){case s.default.Type.Decibels:return s.default.gainToDb(t);default:return t}},s.default.Param.prototype._minOutput=1e-5,s.default.Param.AutomationType={Linear:"linearRampToValueAtTime",Exponential:"exponentialRampToValueAtTime",Target:"setTargetAtTime",SetValue:"setValueAtTime",Cancel:"cancelScheduledValues"},s.default.Param.prototype.setValueAtTime=function(t,e){return e=this.toSeconds(e),t=this._fromUnits(t),this._events.add({type:s.default.Param.AutomationType.SetValue,value:t,time:e}),this.log(s.default.Param.AutomationType.SetValue,t,e),this._param.setValueAtTime(t,e),this},s.default.Param.prototype.getValueAtTime=function(t){t=this.toSeconds(t);var e=this._events.getAfter(t),i=this._events.get(t),n=s.default.defaultArg(this._initialValue,this._param.defaultValue),o=n;if(null===i)o=n;else if(i.type===s.default.Param.AutomationType.Target){var a,r=this._events.getBefore(i.time);a=null===r?n:r.value,o=this._exponentialApproach(i.time,a,i.value,i.constant,t)}else o=null===e?i.value:e.type===s.default.Param.AutomationType.Linear?this._linearInterpolate(i.time,i.value,e.time,e.value,t):e.type===s.default.Param.AutomationType.Exponential?this._exponentialInterpolate(i.time,i.value,e.time,e.value,t):i.value;return o},s.default.Param.prototype.setRampPoint=function(t){t=this.toSeconds(t);var e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),0===e&&(e=this._minOutput),this.setValueAtTime(this._toUnits(e),t),this},s.default.Param.prototype.linearRampToValueAtTime=function(t,e){return t=this._fromUnits(t),e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Linear,value:t,time:e}),this.log(s.default.Param.AutomationType.Linear,t,e),this._param.linearRampToValueAtTime(t,e),this},s.default.Param.prototype.exponentialRampToValueAtTime=function(t,e){return t=this._fromUnits(t),t=Math.max(this._minOutput,t),e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Exponential,time:e,value:t}),this.log(s.default.Param.AutomationType.Exponential,t,e),this._param.exponentialRampToValueAtTime(t,e),this},s.default.Param.prototype.exponentialRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialRampToValueAtTime(t,i+this.toSeconds(e)),this},s.default.Param.prototype.linearRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.linearRampToValueAtTime(t,i+this.toSeconds(e)),this},s.default.Param.prototype.targetRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialApproachValueAtTime(t,i,e),this},s.default.Param.prototype.exponentialApproachValueAtTime=function(t,e,i){var s=Math.log(this.toSeconds(i)+1)/Math.log(200);return e=this.toSeconds(e),this.setTargetAtTime(t,e,s),this.cancelAndHoldAtTime(e+.9*i),this.linearRampToValueAtTime(t,e+i),this},s.default.Param.prototype.setTargetAtTime=function(t,e,i){if(t=this._fromUnits(t),i<=0)throw new Error("timeConstant must be greater than 0");return e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Target,value:t,time:e,constant:i}),this.log(s.default.Param.AutomationType.Target,t,e,i),this._param.setTargetAtTime(t,e,i),this},s.default.Param.prototype.setValueCurveAtTime=function(t,e,i,n){n=s.default.defaultArg(n,1),i=this.toSeconds(i),e=this.toSeconds(e),this.setValueAtTime(t[0]*n,e);for(var o=i/(t.length-1),a=1;a<t.length;a++)this.linearRampToValueAtTime(t[a]*n,e+a*o);return this},s.default.Param.prototype.cancelScheduledValues=function(t){return t=this.toSeconds(t),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(s.default.Param.AutomationType.Cancel,t),this},s.default.Param.prototype.cancelAndHoldAtTime=function(t){t=this.toSeconds(t);var e=this.getValueAtTime(t);this.log("cancelAndHoldAtTime",t,"value="+e),this._param.cancelScheduledValues(t);var i=this._events.get(t),n=this._events.getAfter(t);return i&&i.time===t?n?this._events.cancel(n.time):this._events.cancel(t+this.sampleTime):n&&(this._events.cancel(n.time),n.type===s.default.Param.AutomationType.Linear?this.linearRampToValueAtTime(e,t):n.type===s.default.Param.AutomationType.Exponential&&this.exponentialRampToValueAtTime(e,t)),this._events.add({type:s.default.Param.AutomationType.SetValue,value:e,time:t}),this._param.setValueAtTime(e,t),this},s.default.Param.prototype.rampTo=function(t,e,i){return e=s.default.defaultArg(e,.1),this.units===s.default.Type.Frequency||this.units===s.default.Type.BPM||this.units===s.default.Type.Decibels?this.exponentialRampTo(t,e,i):this.linearRampTo(t,e,i),this},s.default.Param.prototype._exponentialApproach=function(t,e,i,s,n){return i+(e-i)*Math.exp(-(n-t)/s)},s.default.Param.prototype._linearInterpolate=function(t,e,i,s,n){return e+(n-t)/(i-t)*(s-e)},s.default.Param.prototype._exponentialInterpolate=function(t,e,i,s,n){return e*Math.pow(s/e,(n-t)/(i-t))},s.default.Param.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._param=null,this._events=null,this},e.default=s.default.Param},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(19),i(10),i(23);s.default.StereoEffect=function(){s.default.AudioNode.call(this);var t=s.default.defaults(arguments,["wet"],s.default.Effect);this.createInsOuts(1,1),this._dryWet=new s.default.CrossFade(t.wet),this.wet=this._dryWet.fade,this._split=new s.default.Split,this.effectSendL=this._split.left,this.effectSendR=this._split.right,this._merge=new s.default.Merge,this.effectReturnL=this._merge.left,this.effectReturnR=this._merge.right,s.default.connect(this.input,this._split),s.default.connect(this.input,this._dryWet,0,0),this._merge.connect(this._dryWet,0,1),this._dryWet.connect(this.output),this._readOnly(["wet"])},s.default.extend(s.default.StereoEffect,s.default.Effect),s.default.StereoEffect.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._dryWet.dispose(),this._dryWet=null,this._split.dispose(),this._split=null,this._merge.dispose(),this._merge=null,this.effectSendL=null,this.effectSendR=null,this.effectReturnL=null,this.effectReturnR=null,this._writable(["wet"]),this.wet=null,this},e.default=s.default.StereoEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(83),i(4),i(24),i(35),i(3),i(81),i(80),i(56);s.default.Transport=function(){s.default.Emitter.call(this),s.default.getContext(function(){this.loop=!1,this._loopStart=0,this._loopEnd=0,this._ppq=n.defaults.PPQ,this._clock=new s.default.Clock({callback:this._processTick.bind(this),frequency:0}),this._bindClockEvents(),this.bpm=this._clock.frequency,this.bpm._toUnits=this._toUnits.bind(this),this.bpm._fromUnits=this._fromUnits.bind(this),this.bpm.units=s.default.Type.BPM,this.bpm.value=n.defaults.bpm,this._readOnly("bpm"),this._timeSignature=n.defaults.timeSignature,this._scheduledEvents={},this._timeline=new s.default.Timeline,this._repeatedEvents=new s.default.IntervalTimeline,this._syncedSignals=[],this._swingTicks=n.defaults.PPQ/2,this._swingAmount=0,this.context.transport=this}.bind(this))},s.default.extend(s.default.Transport,s.default.Emitter),s.default.Transport.defaults={bpm:120,swing:0,swingSubdivision:"8n",timeSignature:4,loopStart:0,loopEnd:"4m",PPQ:192},s.default.Transport.prototype.isTransport=!0,s.default.Transport.prototype._processTick=function(t,e){if(this._swingAmount>0&&e%this._ppq!=0&&e%(2*this._swingTicks)!=0){var i=e%(2*this._swingTicks)/(2*this._swingTicks),n=Math.sin(i*Math.PI)*this._swingAmount;t+=s.default.Ticks(2*this._swingTicks/3).toSeconds()*n}this.loop&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._timeline.forEachAtTime(e,function(e){e.invoke(t)})},s.default.Transport.prototype.schedule=function(t,e){var i=new s.default.TransportEvent(this,{time:s.default.TransportTime(e),callback:t});return this._addEvent(i,this._timeline)},s.default.Transport.prototype.scheduleRepeat=function(t,e,i,n){var o=new s.default.TransportRepeatEvent(this,{callback:t,interval:s.default.Time(e),time:s.default.TransportTime(i),duration:s.default.Time(s.default.defaultArg(n,1/0))});return this._addEvent(o,this._repeatedEvents)},s.default.Transport.prototype.scheduleOnce=function(t,e){var i=new s.default.TransportEvent(this,{time:s.default.TransportTime(e),callback:t,once:!0});return this._addEvent(i,this._timeline)},s.default.Transport.prototype.clear=function(t){if(this._scheduledEvents.hasOwnProperty(t)){var e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this},s.default.Transport.prototype._addEvent=function(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id},s.default.Transport.prototype.cancel=function(t){return t=s.default.defaultArg(t,0),t=this.toTicks(t),this._timeline.forEachFrom(t,function(t){this.clear(t.id)}.bind(this)),this._repeatedEvents.forEachFrom(t,function(t){this.clear(t.id)}.bind(this)),this},s.default.Transport.prototype._bindClockEvents=function(){this._clock.on("start",function(t,e){e=s.default.Ticks(e).toSeconds(),this.emit("start",t,e)}.bind(this)),this._clock.on("stop",function(t){this.emit("stop",t)}.bind(this)),this._clock.on("pause",function(t){this.emit("pause",t)}.bind(this))},Object.defineProperty(s.default.Transport.prototype,"state",{get:function(){return this._clock.getStateAtTime(this.now())}}),s.default.Transport.prototype.start=function(t,e){return s.default.isDefined(e)&&(e=this.toTicks(e)),this._clock.start(t,e),this},s.default.Transport.prototype.stop=function(t){return this._clock.stop(t),this},s.default.Transport.prototype.pause=function(t){return this._clock.pause(t),this},s.default.Transport.prototype.toggle=function(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!==s.default.State.Started?this.start(t):this.stop(t),this},Object.defineProperty(s.default.Transport.prototype,"timeSignature",{get:function(){return this._timeSignature},set:function(t){s.default.isArray(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}}),Object.defineProperty(s.default.Transport.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t)}}),Object.defineProperty(s.default.Transport.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t)}}),s.default.Transport.prototype.setLoopPoints=function(t,e){return this.loopStart=t,this.loopEnd=e,this},Object.defineProperty(s.default.Transport.prototype,"swing",{get:function(){return this._swingAmount},set:function(t){this._swingAmount=t}}),Object.defineProperty(s.default.Transport.prototype,"swingSubdivision",{get:function(){return s.default.Ticks(this._swingTicks).toNotation()},set:function(t){this._swingTicks=this.toTicks(t)}}),Object.defineProperty(s.default.Transport.prototype,"position",{get:function(){var t=this.now(),e=this._clock.getTicksAtTime(t);return s.default.Ticks(e).toBarsBeatsSixteenths()},set:function(t){var e=this.toTicks(t);this.ticks=e}}),Object.defineProperty(s.default.Transport.prototype,"seconds",{get:function(){return this._clock.seconds},set:function(t){var e=this.now(),i=this.bpm.timeToTicks(t,e);this.ticks=i}}),Object.defineProperty(s.default.Transport.prototype,"progress",{get:function(){if(this.loop){var t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}return 0}}),Object.defineProperty(s.default.Transport.prototype,"ticks",{get:function(){return this._clock.ticks},set:function(t){if(this._clock.ticks!==t){var e=this.now();this.state===s.default.State.Started?(this.emit("stop",e),this._clock.setTicksAtTime(t,e),this.emit("start",e,this.seconds)):this._clock.setTicksAtTime(t,e)}}}),s.default.Transport.prototype.getTicksAtTime=function(t){return Math.round(this._clock.getTicksAtTime(t))},s.default.Transport.prototype.getSecondsAtTime=function(t){return this._clock.getSecondsAtTime(t)},Object.defineProperty(s.default.Transport.prototype,"PPQ",{get:function(){return this._ppq},set:function(t){var e=this.bpm.value;this._ppq=t,this.bpm.value=e}}),s.default.Transport.prototype._fromUnits=function(t){return 1/(60/t/this.PPQ)},s.default.Transport.prototype._toUnits=function(t){return t/this.PPQ*60},s.default.Transport.prototype.nextSubdivision=function(t){if(t=this.toTicks(t),this.state!==s.default.State.Started)return 0;var e=this.now(),i=t-this.getTicksAtTime(e)%t;return this._clock.nextTickTime(i,e)},s.default.Transport.prototype.syncSignal=function(t,e){if(!e){var i=this.now();e=0!==t.getValueAtTime(i)?t.getValueAtTime(i)/this.bpm.getValueAtTime(i):0}var n=new s.default.Gain(e);return this.bpm.chain(n,t._param),this._syncedSignals.push({ratio:n,signal:t,initial:t.value}),t.value=0,this},s.default.Transport.prototype.unsyncSignal=function(t){for(var e=this._syncedSignals.length-1;e>=0;e--){var i=this._syncedSignals[e];i.signal===t&&(i.ratio.dispose(),i.signal.value=i.initial,this._syncedSignals.splice(e,1))}return this},s.default.Transport.prototype.dispose=function(){return s.default.Emitter.prototype.dispose.call(this),this._clock.dispose(),this._clock=null,this._writable("bpm"),this.bpm=null,this._timeline.dispose(),this._timeline=null,this._repeatedEvents.dispose(),this._repeatedEvents=null,this};var n=s.default.Transport;s.default.Transport=new n,s.default.Context.on("init",function(t){t.transport&&t.transport.isTransport?s.default.Transport=t.transport:s.default.Transport=new n}),s.default.Context.on("close",function(t){t.transport&&t.transport.isTransport&&t.transport.dispose()}),e.default=s.default.Transport},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(6),i(16),i(64);s.default.Oscillator=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.Oscillator);s.default.Source.call(this,t),this._oscillator=null,this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._wave=null,this._partials=t.partials,this._partialCount=t.partialCount,this._phase=t.phase,this._type=t.type,t.partialCount&&t.type!==s.default.Oscillator.Type.Custom&&(this._type=this.baseType+t.partialCount.toString()),this.phase=this._phase,this._readOnly(["frequency","detune"])},s.default.extend(s.default.Oscillator,s.default.Source),s.default.Oscillator.defaults={type:"sine",frequency:440,detune:0,phase:0,partials:[],partialCount:0},s.default.Oscillator.Type={Sine:"sine",Triangle:"triangle",Sawtooth:"sawtooth",Square:"square",Custom:"custom"},s.default.Oscillator.prototype._start=function(t){this.log("start",t);var e=new s.default.OscillatorNode;this._oscillator=e,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),t=this.toSeconds(t),this._oscillator.start(t)},s.default.Oscillator.prototype._stop=function(t){return this.log("stop",t),this._oscillator&&(t=this.toSeconds(t),this._oscillator.stop(t)),this},s.default.Oscillator.prototype.restart=function(t){return this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(this.toSeconds(t)),this},s.default.Oscillator.prototype.syncFrequency=function(){return s.default.Transport.syncSignal(this.frequency),this},s.default.Oscillator.prototype.unsyncFrequency=function(){return s.default.Transport.unsyncSignal(this.frequency),this},Object.defineProperty(s.default.Oscillator.prototype,"type",{get:function(){return this._type},set:function(t){var e=[s.default.Oscillator.Type.Sine,s.default.Oscillator.Type.Square,s.default.Oscillator.Type.Triangle,s.default.Oscillator.Type.Sawtooth].includes(t);if(0===this._phase&&e)this._wave=null,this._partialCount=0,null!==this._oscillator&&(this._oscillator.type=t);else{var i=this._getRealImaginary(t,this._phase),n=this.context.createPeriodicWave(i[0],i[1]);this._wave=n,null!==this._oscillator&&this._oscillator.setPeriodicWave(this._wave)}this._type=t}}),Object.defineProperty(s.default.Oscillator.prototype,"baseType",{get:function(){return this._type.replace(this.partialCount,"")},set:function(t){this.partialCount&&this._type!==s.default.Oscillator.Type.Custom&&t!==s.default.Oscillator.Type.Custom?this.type=t+this.partialCount:this.type=t}}),Object.defineProperty(s.default.Oscillator.prototype,"partialCount",{get:function(){return this._partialCount},set:function(t){var e=this._type,i=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);i&&(e=i[1]),this._type!==s.default.Oscillator.Type.Custom&&(this.type=0===t?e:e+t.toString())}}),s.default.Oscillator.prototype.get=function(){var t=s.default.prototype.get.apply(this,arguments);return t.type!==s.default.Oscillator.Type.Custom&&delete t.partials,t},s.default.Oscillator.prototype._getRealImaginary=function(t,e){var i=2048,n=new Float32Array(i),o=new Float32Array(i),a=1;if(t===s.default.Oscillator.Type.Custom)a=this._partials.length+1,this._partialCount=this._partials.length,i=a;else{var r=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);r?(a=parseInt(r[2])+1,this._partialCount=parseInt(r[2]),t=r[1],i=a=Math.max(a,2)):this._partialCount=0,this._partials=[]}for(var l=1;l<i;++l){var u,d=2/(l*Math.PI);switch(t){case s.default.Oscillator.Type.Sine:u=l<=a?1:0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Square:u=1&l?2*d:0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Sawtooth:u=d*(1&l?1:-1),this._partials[l-1]=u;break;case s.default.Oscillator.Type.Triangle:u=1&l?d*d*2*(l-1>>1&1?-1:1):0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Custom:u=this._partials[l-1];break;default:throw new TypeError("Tone.Oscillator: invalid type: "+t)}0!==u?(n[l]=-u*Math.sin(e*l),o[l]=u*Math.cos(e*l)):(n[l]=0,o[l]=0)}return[n,o]},s.default.Oscillator.prototype._inverseFFT=function(t,e,i){for(var s=0,n=t.length,o=0;o<n;o++)s+=t[o]*Math.cos(o*i)+e[o]*Math.sin(o*i);return s},s.default.Oscillator.prototype._getInitialValue=function(){for(var t=this._getRealImaginary(this._type,0),e=t[0],i=t[1],s=0,n=2*Math.PI,o=0;o<8;o++)s=Math.max(this._inverseFFT(e,i,o/8*n),s);return-this._inverseFFT(e,i,this._phase)/s},Object.defineProperty(s.default.Oscillator.prototype,"partials",{get:function(){return this._partials},set:function(t){this._partials=t,this.type=s.default.Oscillator.Type.Custom}}),Object.defineProperty(s.default.Oscillator.prototype,"phase",{get:function(){return this._phase*(180/Math.PI)},set:function(t){this._phase=t*Math.PI/180,this.type=this._type}}),s.default.Oscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),null!==this._oscillator&&(this._oscillator.dispose(),this._oscillator=null),this._wave=null,this._writable(["frequency","detune"]),this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this._partials=null,this},e.default=s.default.Oscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(1);s.default.Delay=function(){var t=s.default.defaults(arguments,["delayTime","maxDelay"],s.default.Delay);s.default.AudioNode.call(this,t),this._maxDelay=Math.max(this.toSeconds(t.maxDelay),this.toSeconds(t.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(this._maxDelay),this.delayTime=new s.default.Param({param:this._delayNode.delayTime,units:s.default.Type.Time,value:t.delayTime}),this._readOnly("delayTime")},s.default.extend(s.default.Delay,s.default.AudioNode),s.default.Delay.defaults={maxDelay:1,delayTime:0},Object.defineProperty(s.default.Delay.prototype,"maxDelay",{get:function(){return this._maxDelay}}),s.default.Delay.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._delayNode.disconnect(),this._delayNode=null,this._writable("delayTime"),this.delayTime=null,this},e.default=s.default.Delay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(1);s.default.Split=function(t){t=s.default.defaultArg(t,2),s.default.AudioNode.call(this),this.createInsOuts(0,t),this._splitter=this.input=this.context.createChannelSplitter(t);for(var e=0;e<t;e++)this.output[e]=new s.default.Gain,s.default.connect(this._splitter,this.output[e],e,0),this.output[e].channelCount=1,this.output[e].channelCountMode="explicit";this.left=this.output[0],this.right=this.output[1]},s.default.extend(s.default.Split,s.default.AudioNode),s.default.Split.prototype.dispose=function(){return this.output.forEach(function(t){t.dispose()}),s.default.AudioNode.prototype.dispose.call(this),this._splitter.disconnect(),this.left=null,this.right=null,this._splitter=null,this},e.default=s.default.Split},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(35),i(24),i(44),["baseLatency","destination","currentTime","sampleRate","listener","state"]),o=["suspend","close","resume","getOutputTimestamp","createMediaElementSource","createMediaStreamSource","createMediaStreamDestination","createBuffer","decodeAudioData","createBufferSource","createConstantSource","createGain","createDelay","createBiquadFilter","createIIRFilter","createWaveShaper","createPanner","createConvolver","createDynamicsCompressor","createAnalyser","createScriptProcessor","createStereoPanner","createOscillator","createPeriodicWave","createChannelSplitter","createChannelMerger","audioWorklet"];s.default.Context=function(){s.default.Emitter.call(this);var t=s.default.defaults(arguments,["context"],s.default.Context);if(!t.context&&(t.context=new s.default.global.AudioContext,!t.context))throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");for(this._context=t.context;this._context.rawContext;)this._context=this._context.rawContext;n.forEach(function(t){this._defineProperty(this._context,t)}.bind(this)),o.forEach(function(t){this._defineMethod(this._context,t)}.bind(this)),this._latencyHint=t.latencyHint,this._constants={},this.lookAhead=t.lookAhead,this._computedUpdateInterval=0,this._ticker=new a(this.emit.bind(this,"tick"),t.clockSource,t.updateInterval),this._timeouts=new s.default.Timeline,this._timeoutIds=0,this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=function(t){this.emit("statechange",t)}.bind(this)},s.default.extend(s.default.Context,s.default.Emitter),s.default.Emitter.mixin(s.default.Context),s.default.Context.defaults={clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.03},s.default.Context.prototype.isContext=!0,s.default.Context.prototype._defineProperty=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return t[e]},set:function(i){t[e]=i}})},s.default.Context.prototype._defineMethod=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return t[e].bind(t)}})},s.default.Context.prototype.now=function(){return this._context.currentTime+this.lookAhead},Object.defineProperty(s.default.Context.prototype,"destination",{get:function(){return this.master?this.master:this._context.destination}}),s.default.Context.prototype.resume=function(){return"suspended"===this._context.state&&this._context instanceof AudioContext?this._context.resume():Promise.resolve()},s.default.Context.prototype.close=function(){var t=Promise.resolve();return this!==s.default.global.TONE_AUDIO_CONTEXT&&(t=this.rawContext.close()),t.then(function(){s.default.Context.emit("close",this)}.bind(this))},s.default.Context.prototype.getConstant=function(t){if(this._constants[t])return this._constants[t];for(var e=this._context.createBuffer(1,128,this._context.sampleRate),i=e.getChannelData(0),s=0;s<i.length;s++)i[s]=t;var n=this._context.createBufferSource();return n.channelCount=1,n.channelCountMode="explicit",n.buffer=e,n.loop=!0,n.start(0),this._constants[t]=n,n},s.default.Context.prototype._timeoutLoop=function(){for(var t=this.now();this._timeouts&&this._timeouts.length&&this._timeouts.peek().time<=t;)this._timeouts.shift().callback()},s.default.Context.prototype.setTimeout=function(t,e){this._timeoutIds++;var i=this.now();return this._timeouts.add({callback:t,time:i+e,id:this._timeoutIds}),this._timeoutIds},s.default.Context.prototype.clearTimeout=function(t){return this._timeouts.forEach(function(e){e.id===t&&this.remove(e)}),this},Object.defineProperty(s.default.Context.prototype,"updateInterval",{get:function(){return this._ticker.updateInterval},set:function(t){this._ticker.updateInterval=t}}),Object.defineProperty(s.default.Context.prototype,"rawContext",{get:function(){return this._context}}),Object.defineProperty(s.default.Context.prototype,"clockSource",{get:function(){return this._ticker.type},set:function(t){this._ticker.type=t}}),Object.defineProperty(s.default.Context.prototype,"latencyHint",{get:function(){return this._latencyHint},set:function(t){var e=t;if(this._latencyHint=t,s.default.isString(t))switch(t){case"interactive":e=.1,this._context.latencyHint=t;break;case"playback":e=.8,this._context.latencyHint=t;break;case"balanced":e=.25,this._context.latencyHint=t;break;case"fastest":this._context.latencyHint="interactive",e=.01}this.lookAhead=e,this.updateInterval=e/3}}),s.default.Context.prototype.dispose=function(){return this.close().then(function(){for(var t in s.default.Emitter.prototype.dispose.call(this),this._ticker.dispose(),this._ticker=null,this._timeouts.dispose(),this._timeouts=null,this._constants)this._constants[t].disconnect();this._constants=null}.bind(this))};var a=function(t,e,i){this._type=e,this._updateInterval=i,this._callback=s.default.defaultArg(t,s.default.noOp),this._createClock()};if(a.Type={Worker:"worker",Timeout:"timeout",Offline:"offline"},a.prototype._createWorker=function(){s.default.global.URL=s.default.global.URL||s.default.global.webkitURL;var t=new Blob(["var timeoutTime = "+(1e3*this._updateInterval).toFixed(1)+";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]),e=URL.createObjectURL(t),i=new Worker(e);i.onmessage=this._callback.bind(this),this._worker=i},a.prototype._createTimeout=function(){this._timeout=setTimeout(function(){this._createTimeout(),this._callback()}.bind(this),1e3*this._updateInterval)},a.prototype._createClock=function(){if(this._type===a.Type.Worker)try{this._createWorker()}catch(t){this._type=a.Type.Timeout,this._createClock()}else this._type===a.Type.Timeout&&this._createTimeout()},Object.defineProperty(a.prototype,"updateInterval",{get:function(){return this._updateInterval},set:function(t){this._updateInterval=Math.max(t,128/44100),this._type===a.Type.Worker&&this._worker.postMessage(Math.max(1e3*t,1))}}),Object.defineProperty(a.prototype,"type",{get:function(){return this._type},set:function(t){this._disposeClock(),this._type=t,this._createClock()}}),a.prototype._disposeClock=function(){this._timeout&&(clearTimeout(this._timeout),this._timeout=null),this._worker&&(this._worker.terminate(),this._worker.onmessage=null,this._worker=null)},a.prototype.dispose=function(){this._disposeClock(),this._callback=null},s.default.supported&&!s.default.initialized){if(s.default.global.TONE_AUDIO_CONTEXT||(s.default.global.TONE_AUDIO_CONTEXT=new s.default.Context),s.default.context=s.default.global.TONE_AUDIO_CONTEXT,!s.default.global.TONE_SILENCE_LOGGING){var r="v";"dev"===s.default.version&&(r="");var l=" * Tone.js "+r+s.default.version+" * ";console.log("%c"+l,"background: #000; color: #fff")}}else s.default.supported||s.default.global.TONE_SILENCE_LOGGING||console.warn("This browser does not support Tone.js");e.default=s.default.Context},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(40);s.default.Instrument=function(t){t=s.default.defaultArg(t,s.default.Instrument.defaults),s.default.AudioNode.call(this),this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._scheduledEvents=[]},s.default.extend(s.default.Instrument,s.default.AudioNode),s.default.Instrument.defaults={volume:0},s.default.Instrument.prototype.triggerAttack=s.default.noOp,s.default.Instrument.prototype.triggerRelease=s.default.noOp,s.default.Instrument.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this},s.default.Instrument.prototype._syncMethod=function(t,e){var i=this["_original_"+t]=this[t];this[t]=function(){var t=Array.prototype.slice.call(arguments),n=t[e],o=s.default.Transport.schedule(function(s){t[e]=s,i.apply(this,t)}.bind(this),n);this._scheduledEvents.push(o)}.bind(this)},s.default.Instrument.prototype.unsync=function(){return this._scheduledEvents.forEach(function(t){s.default.Transport.clear(t)}),this._scheduledEvents=[],this._original_triggerAttack&&(this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this},s.default.Instrument.prototype.triggerAttackRelease=function(t,e,i,s){return i=this.toSeconds(i),e=this.toSeconds(e),this.triggerAttack(t,i,s),this.triggerRelease(i+e),this},s.default.Instrument.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._volume.dispose(),this._volume=null,this._writable(["volume"]),this.volume=null,this.unsync(),this._scheduledEvents=null,this},e.default=s.default.Instrument},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(2);s.default.AudioToGain=function(){s.default.SignalBase.call(this),this._norm=this.input=this.output=new s.default.WaveShaper(function(t){return(t+1)/2})},s.default.extend(s.default.AudioToGain,s.default.SignalBase),s.default.AudioToGain.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._norm.dispose(),this._norm=null,this},e.default=s.default.AudioToGain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(13),i(89),i(3),i(1);s.default.CrossFade=function(t){s.default.AudioNode.call(this),this.createInsOuts(2,1),this.a=this.input[0]=new s.default.Gain,this.b=this.input[1]=new s.default.Gain,this.fade=new s.default.Signal(s.default.defaultArg(t,.5),s.default.Type.NormalRange),this._equalPowerA=new s.default.EqualPowerGain,this._equalPowerB=new s.default.EqualPowerGain,this._one=this.context.getConstant(1),this._invert=new s.default.Subtract,this.a.connect(this.output),this.b.connect(this.output),this.fade.chain(this._equalPowerB,this.b.gain),s.default.connect(this._one,this._invert,0,0),this.fade.connect(this._invert,0,1),this._invert.chain(this._equalPowerA,this.a.gain),this._readOnly("fade")},s.default.extend(s.default.CrossFade,s.default.AudioNode),s.default.CrossFade.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable("fade"),this._equalPowerA.dispose(),this._equalPowerA=null,this._equalPowerB.dispose(),this._equalPowerB=null,this.fade.dispose(),this.fade=null,this._invert.dispose(),this._invert=null,this._one=null,this.a.dispose(),this.a=null,this.b.dispose(),this.b=null,this},e.default=s.default.CrossFade},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.Timeline=function(){var t=s.default.defaults(arguments,["memory"],s.default.Timeline);s.default.call(this),this._timeline=[],this.memory=t.memory},s.default.extend(s.default.Timeline),s.default.Timeline.defaults={memory:1/0},Object.defineProperty(s.default.Timeline.prototype,"length",{get:function(){return this._timeline.length}}),s.default.Timeline.prototype.add=function(t){if(s.default.isUndef(t.time))throw new Error("Tone.Timeline: events must have a time attribute");t.time=t.time.valueOf();var e=this._search(t.time);if(this._timeline.splice(e+1,0,t),this.length>this.memory){var i=this.length-this.memory;this._timeline.splice(0,i)}return this},s.default.Timeline.prototype.remove=function(t){var e=this._timeline.indexOf(t);return-1!==e&&this._timeline.splice(e,1),this},s.default.Timeline.prototype.get=function(t,e){e=s.default.defaultArg(e,"time");var i=this._search(t,e);return-1!==i?this._timeline[i]:null},s.default.Timeline.prototype.peek=function(){return this._timeline[0]},s.default.Timeline.prototype.shift=function(){return this._timeline.shift()},s.default.Timeline.prototype.getAfter=function(t,e){e=s.default.defaultArg(e,"time");var i=this._search(t,e);return i+1<this._timeline.length?this._timeline[i+1]:null},s.default.Timeline.prototype.getBefore=function(t,e){e=s.default.defaultArg(e,"time");var i=this._timeline.length;if(i>0&&this._timeline[i-1][e]<t)return this._timeline[i-1];var n=this._search(t,e);return n-1>=0?this._timeline[n-1]:null},s.default.Timeline.prototype.cancel=function(t){if(this._timeline.length>1){var e=this._search(t);if(e>=0)if(this._timeline[e].time===t){for(var i=e;i>=0&&this._timeline[i].time===t;i--)e=i;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else 1===this._timeline.length&&this._timeline[0].time>=t&&(this._timeline=[]);return this},s.default.Timeline.prototype.cancelBefore=function(t){var e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this},s.default.Timeline.prototype.previousEvent=function(t){var e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null},s.default.Timeline.prototype._search=function(t,e){if(0===this._timeline.length)return-1;e=s.default.defaultArg(e,"time");var i=0,n=this._timeline.length,o=n;if(n>0&&this._timeline[n-1][e]<=t)return n-1;for(;i<o;){var a=Math.floor(i+(o-i)/2),r=this._timeline[a],l=this._timeline[a+1];if(r[e]===t){for(var u=a;u<this._timeline.length;u++){this._timeline[u][e]===t&&(a=u)}return a}if(r[e]<t&&l[e]>t)return a;r[e]>t?o=a:i=a+1}return-1},s.default.Timeline.prototype._iterate=function(t,e,i){e=s.default.defaultArg(e,0),i=s.default.defaultArg(i,this._timeline.length-1),this._timeline.slice(e,i+1).forEach(function(e){t.call(this,e)}.bind(this))},s.default.Timeline.prototype.forEach=function(t){return this._iterate(t),this},s.default.Timeline.prototype.forEachBefore=function(t,e){var i=this._search(t);return-1!==i&&this._iterate(e,0,i),this},s.default.Timeline.prototype.forEachAfter=function(t,e){var i=this._search(t);return this._iterate(e,i+1),this},s.default.Timeline.prototype.forEachBetween=function(t,e,i){var s=this._search(t),n=this._search(e);return-1!==s&&-1!==n?(this._timeline[s].time!==t&&(s+=1),this._timeline[n].time===e&&(n-=1),this._iterate(i,s,n)):-1===s&&this._iterate(i,0,n),this},s.default.Timeline.prototype.forEachFrom=function(t,e){for(var i=this._search(t);i>=0&&this._timeline[i].time>=t;)i--;return this._iterate(e,i+1),this},s.default.Timeline.prototype.forEachAtTime=function(t,e){var i=this._search(t);return-1!==i&&this._iterate(function(i){i.time===t&&e.call(this,i)},0,i),this},s.default.Timeline.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._timeline=null,this},e.default=s.default.Timeline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(2);s.default.Monophonic=function(t){t=s.default.defaultArg(t,s.default.Monophonic.defaults),s.default.Instrument.call(this,t),this.portamento=t.portamento},s.default.extend(s.default.Monophonic,s.default.Instrument),s.default.Monophonic.defaults={portamento:0},s.default.Monophonic.prototype.triggerAttack=function(t,e,i){return this.log("triggerAttack",t,e,i),e=this.toSeconds(e),this._triggerEnvelopeAttack(e,i),this.setNote(t,e),this},s.default.Monophonic.prototype.triggerRelease=function(t){return this.log("triggerRelease",t),t=this.toSeconds(t),this._triggerEnvelopeRelease(t),this},s.default.Monophonic.prototype._triggerEnvelopeAttack=function(){},s.default.Monophonic.prototype._triggerEnvelopeRelease=function(){},s.default.Monophonic.prototype.getLevelAtTime=function(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)},s.default.Monophonic.prototype.setNote=function(t,e){if(e=this.toSeconds(e),this.portamento>0&&this.getLevelAtTime(e)>.05){var i=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(t,i,e)}else this.frequency.setValueAtTime(t,e);return this},e.default=s.default.Monophonic},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(5),i(2);s.default.Scale=function(t,e){s.default.SignalBase.call(this),this._outputMin=s.default.defaultArg(t,0),this._outputMax=s.default.defaultArg(e,1),this._scale=this.input=new s.default.Multiply(1),this._add=this.output=new s.default.Add(0),this._scale.connect(this._add),this._setRange()},s.default.extend(s.default.Scale,s.default.SignalBase),Object.defineProperty(s.default.Scale.prototype,"min",{get:function(){return this._outputMin},set:function(t){this._outputMin=t,this._setRange()}}),Object.defineProperty(s.default.Scale.prototype,"max",{get:function(){return this._outputMax},set:function(t){this._outputMax=t,this._setRange()}}),s.default.Scale.prototype._setRange=function(){this._add.value=this._outputMin,this._scale.value=this._outputMax-this._outputMin},s.default.Scale.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._add.dispose(),this._add=null,this._scale.dispose(),this._scale=null,this},e.default=s.default.Scale},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(3),i(1);s.default.Volume=function(){var t=s.default.defaults(arguments,["volume"],s.default.Volume);s.default.AudioNode.call(this,t),this.output=this.input=new s.default.Gain(t.volume,s.default.Type.Decibels),this._unmutedVolume=t.volume,this.volume=this.output.gain,this._readOnly("volume"),this.mute=t.mute},s.default.extend(s.default.Volume,s.default.AudioNode),s.default.Volume.defaults={volume:0,mute:!1},Object.defineProperty(s.default.Volume.prototype,"mute",{get:function(){return this.volume.value===-1/0},set:function(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}}),s.default.Volume.prototype.dispose=function(){return this.input.dispose(),s.default.AudioNode.prototype.dispose.call(this),this._writable("volume"),this.volume.dispose(),this.volume=null,this},e.default=s.default.Volume},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(30);s.default.Zero=function(){s.default.SignalBase.call(this),this._gain=this.input=this.output=new s.default.Gain,s.default.connect(this.context.getConstant(0),this._gain)},s.default.extend(s.default.Zero,s.default.SignalBase),s.default.Zero.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._gain.dispose(),this._gain=null,this},e.default=s.default.Zero},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(3);s.default.Add=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._sum=this.input[0]=this.input[1]=this.output=new s.default.Gain,this._param=this.input[1]=new s.default.Signal(t),this._param.connect(this._sum)},s.default.extend(s.default.Add,s.default.Signal),s.default.Add.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._sum.dispose(),this._sum=null,this},e.default=s.default.Add},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1);s.default.SignalBase=function(){s.default.AudioNode.call(this)},s.default.extend(s.default.SignalBase,s.default.AudioNode),s.default.SignalBase.prototype.connect=function(t,e,i){return s.default.Signal&&s.default.Signal===t.constructor||s.default.Param&&s.default.Param===t.constructor?(t._param.cancelScheduledValues(0),t._param.setValueAtTime(0,0),t.overridden=!0):t instanceof AudioParam&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0)),s.default.AudioNode.prototype.connect.call(this,t,e,i),this},e.default=s.default.SignalBase},function(t,e,i){"use strict";i.r(e);var s=i(0);i(47),i(3);s.default.AmplitudeEnvelope=function(){s.default.Envelope.apply(this,arguments),this.input=this.output=new s.default.Gain,this._sig.connect(this.output.gain)},s.default.extend(s.default.AmplitudeEnvelope,s.default.Envelope),s.default.AmplitudeEnvelope.prototype.dispose=function(){return s.default.Envelope.prototype.dispose.call(this),this},e.default=s.default.AmplitudeEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(3),i(1);s.default.BufferSource=function(){var t=s.default.defaults(arguments,["buffer","onload"],s.default.BufferSource);s.default.AudioNode.call(this,t),this.onended=t.onended,this._startTime=-1,this._sourceStarted=!1,this._sourceStopped=!1,this._stopTime=-1,this._gainNode=this.output=new s.default.Gain(0),this._source=this.context.createBufferSource(),s.default.connect(this._source,this._gainNode),this._source.onended=this._onended.bind(this),this._buffer=new s.default.Buffer(t.buffer,t.onload),this.playbackRate=new s.default.Param({param:this._source.playbackRate,units:s.default.Type.Positive,value:t.playbackRate}),this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut,this.curve=t.curve,this._onendedTimeout=-1,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd},s.default.extend(s.default.BufferSource,s.default.AudioNode),s.default.BufferSource.defaults={onended:s.default.noOp,onload:s.default.noOp,loop:!1,loopStart:0,loopEnd:0,fadeIn:0,fadeOut:0,curve:"linear",playbackRate:1},Object.defineProperty(s.default.BufferSource.prototype,"state",{get:function(){return this.getStateAtTime(this.now())}}),s.default.BufferSource.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),-1!==this._startTime&&this._startTime<=t&&(-1===this._stopTime||t<this._stopTime)&&!this._sourceStopped?s.default.State.Started:s.default.State.Stopped},s.default.BufferSource.prototype.start=function(t,e,i,n){this.log("start",t,e,i,n),this.assert(-1===this._startTime,"can only be started once"),this.assert(this.buffer.loaded,"buffer is either not set or not loaded"),this.assert(!this._sourceStopped,"source is already stopped"),t=this.toSeconds(t),e=this.loop?s.default.defaultArg(e,this.loopStart):s.default.defaultArg(e,0),e=this.toSeconds(e),e=Math.max(e,0),n=s.default.defaultArg(n,1);var o=this.toSeconds(this.fadeIn);if(o>0?(this._gainNode.gain.setValueAtTime(0,t),"linear"===this.curve?this._gainNode.gain.linearRampToValueAtTime(n,t+o):this._gainNode.gain.exponentialApproachValueAtTime(n,t,o)):this._gainNode.gain.setValueAtTime(n,t),this._startTime=t,s.default.isDefined(i)){var a=this.toSeconds(i);a=Math.max(a,0),this.stop(t+a)}if(this.loop){var r=this.loopEnd||this.buffer.duration,l=this.loopStart;e>=r&&(e=(e-l)%(r-l)+l)}return this._source.buffer=this.buffer.get(),this._source.loopEnd=this.loopEnd||this.buffer.duration,e<this.buffer.duration&&(this._sourceStarted=!0,this._source.start(t,e)),this},s.default.BufferSource.prototype.stop=function(t){this.log("stop",t),this.assert(this.buffer.loaded,"buffer is either not set or not loaded"),this.assert(!this._sourceStopped,"source is already stopped"),t=this.toSeconds(t),-1!==this._stopTime&&this.cancelStop();var e=this.toSeconds(this.fadeOut);return this._stopTime=t+e,e>0?"linear"===this.curve?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),s.default.context.clearTimeout(this._onendedTimeout),this._onendedTimeout=s.default.context.setTimeout(this._onended.bind(this),this._stopTime-this.now()),this},s.default.BufferSource.prototype.cancelStop=function(){if(-1!==this._startTime&&!this._sourceStopped){var t=this.toSeconds(this.fadeIn);this._gainNode.gain.cancelScheduledValues(this._startTime+t+this.sampleTime),this.context.clearTimeout(this._onendedTimeout),this._stopTime=-1}return this},s.default.BufferSource.prototype._onended=function(){if(!this._sourceStopped){this._sourceStopped=!0;var t="exponential"===this.curve?2*this.fadeOut:0;this._sourceStarted&&-1!==this._stopTime&&this._source.stop(this._stopTime+t),this.onended(this),setTimeout(function(){this._source&&(this._source.disconnect(),this._gainNode.disconnect())}.bind(this),1e3*t+100)}},Object.defineProperty(s.default.BufferSource.prototype,"loopStart",{get:function(){return this._source.loopStart},set:function(t){this._source.loopStart=this.toSeconds(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"loopEnd",{get:function(){return this._source.loopEnd},set:function(t){this._source.loopEnd=this.toSeconds(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"buffer",{get:function(){return this._buffer},set:function(t){this._buffer.set(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"loop",{get:function(){return this._source.loop},set:function(t){this._source.loop=t,this.cancelStop()}}),s.default.BufferSource.prototype.dispose=function(){return this._wasDisposed||(this._wasDisposed=!0,s.default.AudioNode.prototype.dispose.call(this),this.onended=null,this._source.onended=null,this._source.disconnect(),this._source=null,this._gainNode.dispose(),this._gainNode=null,this._buffer.dispose(),this._buffer=null,this._startTime=-1,this.playbackRate=null,s.default.context.clearTimeout(this._onendedTimeout)),this},e.default=s.default.BufferSource},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(2),i(5),i(3);s.default.FeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.Effect.call(this,t),this._feedbackGain=new s.default.Gain(t.feedback,s.default.Type.NormalRange),this.feedback=this._feedbackGain.gain,this.effectReturn.chain(this._feedbackGain,this.effectSend),this._readOnly(["feedback"])},s.default.extend(s.default.FeedbackEffect,s.default.Effect),s.default.FeedbackEffect.defaults={feedback:.125},s.default.FeedbackEffect.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._writable(["feedback"]),this._feedbackGain.dispose(),this._feedbackGain=null,this.feedback=null,this},e.default=s.default.FeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(24),i(4);s.default.TimelineState=function(t){s.default.Timeline.call(this),this._initial=t},s.default.extend(s.default.TimelineState,s.default.Timeline),s.default.TimelineState.prototype.getValueAtTime=function(t){var e=this.get(t);return null!==e?e.state:this._initial},s.default.TimelineState.prototype.setStateAtTime=function(t,e){return this.add({state:t,time:e}),this},s.default.TimelineState.prototype.getLastState=function(t,e){e=this.toSeconds(e);for(var i=this._search(e);i>=0;i--){var s=this._timeline[i];if(s.state===t)return s}},s.default.TimelineState.prototype.getNextState=function(t,e){e=this.toSeconds(e);var i=this._search(e);if(-1!==i)for(var s=i;s<this._timeline.length;s++){var n=this._timeline[s];if(n.state===t)return n}},e.default=s.default.TimelineState},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.Emitter=function(){s.default.call(this),this._events={}},s.default.extend(s.default.Emitter),s.default.Emitter.prototype.on=function(t,e){for(var i=t.split(/\W+/),s=0;s<i.length;s++){var n=i[s];this._events.hasOwnProperty(n)||(this._events[n]=[]),this._events[n].push(e)}return this},s.default.Emitter.prototype.once=function(t,e){var i=function(){e.apply(this,arguments),this.off(t,i)}.bind(this);return this.on(t,i),this},s.default.Emitter.prototype.off=function(t,e){for(var i=t.split(/\W+/),n=0;n<i.length;n++)if(t=i[n],this._events.hasOwnProperty(t))if(s.default.isUndef(e))this._events[t]=[];else for(var o=this._events[t],a=0;a<o.length;a++)o[a]===e&&o.splice(a,1);return this},s.default.Emitter.prototype.emit=function(t){if(this._events){var e=Array.apply(null,arguments).slice(1);if(this._events.hasOwnProperty(t))for(var i=this._events[t].slice(0),s=0,n=i.length;s<n;s++)i[s].apply(this,e)}return this},s.default.Emitter.mixin=function(t){var e=["on","once","off","emit"];t._events={};for(var i=0;i<e.length;i++){var n=e[i],o=s.default.Emitter.prototype[n];t[n]=o}return s.default.Emitter},s.default.Emitter.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._events=null,this},e.default=s.default.Emitter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1),i(44);s.default.supported&&(AnalyserNode.prototype.getFloatTimeDomainData||(AnalyserNode.prototype.getFloatTimeDomainData=function(t){var e=new Uint8Array(t.length);this.getByteTimeDomainData(e);for(var i=0;i<e.length;i++)t[i]=(e[i]-128)/128})),s.default.Analyser=function(){var t=s.default.defaults(arguments,["type","size"],s.default.Analyser);s.default.AudioNode.call(this),this._analyser=this.input=this.output=this.context.createAnalyser(),this._type=t.type,this._buffer=null,this.size=t.size,this.type=t.type},s.default.extend(s.default.Analyser,s.default.AudioNode),s.default.Analyser.defaults={size:1024,type:"fft",smoothing:.8},s.default.Analyser.Type={Waveform:"waveform",FFT:"fft"},s.default.Analyser.prototype.getValue=function(){return this._type===s.default.Analyser.Type.FFT?this._analyser.getFloatFrequencyData(this._buffer):this._type===s.default.Analyser.Type.Waveform&&this._analyser.getFloatTimeDomainData(this._buffer),this._buffer},Object.defineProperty(s.default.Analyser.prototype,"size",{get:function(){return this._analyser.frequencyBinCount},set:function(t){this._analyser.fftSize=2*t,this._buffer=new Float32Array(t)}}),Object.defineProperty(s.default.Analyser.prototype,"type",{get:function(){return this._type},set:function(t){if(t!==s.default.Analyser.Type.Waveform&&t!==s.default.Analyser.Type.FFT)throw new TypeError("Tone.Analyser: invalid type: "+t);this._type=t}}),Object.defineProperty(s.default.Analyser.prototype,"smoothing",{get:function(){return this._analyser.smoothingTimeConstant},set:function(t){this._analyser.smoothingTimeConstant=t}}),s.default.Analyser.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.disconnect(),this._analyser=null,this._buffer=null};e.default=s.default.Analyser},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(50),i(69),i(49),i(68),i(67);s.default.OmniOscillator=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.OmniOscillator);s.default.Source.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._sourceType=void 0,this._oscillator=null,this.type=t.type,this._readOnly(["frequency","detune"]),this.set(t)},s.default.extend(s.default.OmniOscillator,s.default.Source),s.default.OmniOscillator.defaults={frequency:440,detune:0,type:"sine",phase:0};var n="PulseOscillator",o="PWMOscillator",a="Oscillator",r="FMOscillator",l="AMOscillator",u="FatOscillator";s.default.OmniOscillator.prototype._start=function(t){this._oscillator.start(t)},s.default.OmniOscillator.prototype._stop=function(t){this._oscillator.stop(t)},s.default.OmniOscillator.prototype.restart=function(t){this._oscillator.restart(t)},Object.defineProperty(s.default.OmniOscillator.prototype,"type",{get:function(){var t="";return this._sourceType===r?t="fm":this._sourceType===l?t="am":this._sourceType===u&&(t="fat"),t+this._oscillator.type},set:function(t){"fm"===t.substr(0,2)?(this._createNewOscillator(r),this._oscillator.type=t.substr(2)):"am"===t.substr(0,2)?(this._createNewOscillator(l),this._oscillator.type=t.substr(2)):"fat"===t.substr(0,3)?(this._createNewOscillator(u),this._oscillator.type=t.substr(3)):"pwm"===t?this._createNewOscillator(o):"pulse"===t?this._createNewOscillator(n):(this._createNewOscillator(a),this._oscillator.type=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"partials",{get:function(){return this._oscillator.partials},set:function(t){this._oscillator.partials=t}}),Object.defineProperty(s.default.OmniOscillator.prototype,"partialCount",{get:function(){return this._oscillator.partialCount},set:function(t){this._oscillator.partialCount=t}}),s.default.OmniOscillator.prototype.set=function(t,e){return"type"===t?this.type=e:s.default.isObject(t)&&t.hasOwnProperty("type")&&(this.type=t.type),s.default.prototype.set.apply(this,arguments),this},s.default.OmniOscillator.prototype.get=function(t){var e=this._oscillator.get(t);return e.type=this.type,e},s.default.OmniOscillator.prototype._createNewOscillator=function(t){if(t!==this._sourceType){this._sourceType=t;var e=s.default[t],i=this.now();if(null!==this._oscillator){var n=this._oscillator;n.stop(i),this.context.setTimeout(function(){n.dispose(),n=null},this.blockTime)}this._oscillator=new e,this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this.state===s.default.State.Started&&this._oscillator.start(i)}},Object.defineProperty(s.default.OmniOscillator.prototype,"phase",{get:function(){return this._oscillator.phase},set:function(t){this._oscillator.phase=t}});var d={PulseOscillator:"pulse",PWMOscillator:"pwm",Oscillator:"oscillator",FMOscillator:"fm",AMOscillator:"am",FatOscillator:"fat"};Object.defineProperty(s.default.OmniOscillator.prototype,"sourceType",{get:function(){return d[this._sourceType]},set:function(t){var e="sine";"pwm"!==this._oscillator.type&&"pulse"!==this._oscillator.type&&(e=this._oscillator.type),t===d.FMOscillator?this.type="fm"+e:t===d.AMOscillator?this.type="am"+e:t===d.FatOscillator?this.type="fat"+e:t===d.Oscillator?this.type=e:t===d.PulseOscillator?this.type="pulse":t===d.PWMOscillator&&(this.type="pwm")}}),Object.defineProperty(s.default.OmniOscillator.prototype,"baseType",{get:function(){return this._oscillator.baseType},set:function(t){this.sourceType!==d.PulseOscillator&&this.sourceType!==d.PWMOscillator&&(this._oscillator.baseType=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"width",{get:function(){return this._sourceType===n?this._oscillator.width:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"count",{get:function(){return this._sourceType===u?this._oscillator.count:void 0},set:function(t){this._sourceType===u&&(this._oscillator.count=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"spread",{get:function(){return this._sourceType===u?this._oscillator.spread:void 0},set:function(t){this._sourceType===u&&(this._oscillator.spread=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationType",{get:function(){return this._sourceType===r||this._sourceType===l?this._oscillator.modulationType:void 0},set:function(t){this._sourceType!==r&&this._sourceType!==l||(this._oscillator.modulationType=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationIndex",{get:function(){return this._sourceType===r?this._oscillator.modulationIndex:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"harmonicity",{get:function(){return this._sourceType===r||this._sourceType===l?this._oscillator.harmonicity:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationFrequency",{get:function(){return this._sourceType===o?this._oscillator.modulationFrequency:void 0}}),s.default.OmniOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune"]),this.detune.dispose(),this.detune=null,this.frequency.dispose(),this.frequency=null,this._oscillator.dispose(),this._oscillator=null,this._sourceType=null,this},e.default=s.default.OmniOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(37),i(25);s.default.Synth=function(t){t=s.default.defaultArg(t,s.default.Synth.defaults),s.default.Monophonic.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.oscillator.chain(this.envelope,this.output),this._readOnly(["oscillator","frequency","detune","envelope"])},s.default.extend(s.default.Synth,s.default.Monophonic),s.default.Synth.defaults={oscillator:{type:"triangle"},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},s.default.Synth.prototype._triggerEnvelopeAttack=function(t,e){return this.envelope.triggerAttack(t,e),this.oscillator.start(t),0===this.envelope.sustain&&this.oscillator.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this},s.default.Synth.prototype._triggerEnvelopeRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release)),this},s.default.Synth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["oscillator","frequency","detune","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this.frequency=null,this.detune=null,this},e.default=s.default.Synth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(11),i(32);s.default.Noise=function(){var t=s.default.defaults(arguments,["type"],s.default.Noise);s.default.Source.call(this,t),this._source=null,this._type=t.type,this._playbackRate=t.playbackRate},s.default.extend(s.default.Noise,s.default.Source),s.default.Noise.defaults={type:"white",playbackRate:1},Object.defineProperty(s.default.Noise.prototype,"type",{get:function(){return this._type},set:function(t){if(this._type!==t){if(!(t in n))throw new TypeError("Tone.Noise: invalid type: "+t);if(this._type=t,this.state===s.default.State.Started){var e=this.now();this._stop(e),this._start(e)}}}}),Object.defineProperty(s.default.Noise.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._source&&(this._source.playbackRate.value=t)}}),s.default.Noise.prototype._start=function(t){var e=n[this._type];this._source=new s.default.BufferSource(e).connect(this.output),this._source.loop=!0,this._source.playbackRate.value=this._playbackRate,this._source.start(this.toSeconds(t),Math.random()*(e.duration-.001))},s.default.Noise.prototype._stop=function(t){this._source&&(this._source.stop(this.toSeconds(t)),this._source=null)},s.default.Noise.prototype.restart=function(t){return this._stop(t),this._start(t),this},s.default.Noise.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),null!==this._source&&(this._source.disconnect(),this._source=null),this._buffer=null,this};var n={},o={};Object.defineProperty(n,"pink",{get:function(){if(!o.pink){for(var t=[],e=0;e<2;e++){var i,n,a,r,l,u,d,f=new Float32Array(220500);t[e]=f,i=n=a=r=l=u=d=0;for(var h=0;h<220500;h++){var c=2*Math.random()-1;i=.99886*i+.0555179*c,n=.99332*n+.0750759*c,a=.969*a+.153852*c,r=.8665*r+.3104856*c,l=.55*l+.5329522*c,u=-.7616*u-.016898*c,f[h]=i+n+a+r+l+u+d+.5362*c,f[h]*=.11,d=.115926*c}}o.pink=(new s.default.Buffer).fromArray(t)}return o.pink}}),Object.defineProperty(n,"brown",{get:function(){if(!o.brown){for(var t=[],e=0;e<2;e++){var i=new Float32Array(220500);t[e]=i;for(var n=0,a=0;a<220500;a++){var r=2*Math.random()-1;i[a]=(n+.02*r)/1.02,n=i[a],i[a]*=3.5}}o.brown=(new s.default.Buffer).fromArray(t)}return o.brown}}),Object.defineProperty(n,"white",{get:function(){if(!o.white){for(var t=[],e=0;e<2;e++){var i=new Float32Array(220500);t[e]=i;for(var n=0;n<220500;n++)i[n]=2*Math.random()-1}o.white=(new s.default.Buffer).fromArray(t)}return o.white}}),e.default=s.default.Noise},function(t,e,i){"use strict";i.r(e);var s=i(0);i(27),i(20),i(1);s.default.Master=function(){s.default.AudioNode.call(this),s.default.getContext(function(){this.createInsOuts(1,0),this._volume=this.output=new s.default.Volume,this.volume=this._volume.volume,this._readOnly("volume"),s.default.connectSeries(this.input,this.output,this.context.destination),this.context.master=this}.bind(this))},s.default.extend(s.default.Master,s.default.AudioNode),s.default.Master.defaults={volume:0,mute:!1},s.default.Master.prototype.isMaster=!0,Object.defineProperty(s.default.Master.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.Master.prototype.chain=function(){this.input.disconnect();var t=Array.from(arguments);t.unshift(this.input),t.push(this.output),s.default.connectSeries.apply(void 0,t)},s.default.Master.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null},s.default.AudioNode.prototype.toMaster=function(){return this.connect(this.context.master),this};var n=s.default.Master;s.default.Master=new n,s.default.Context.on("init",function(t){t.master&&t.master.isMaster?s.default.Master=t.master:s.default.Master=new n}),s.default.Context.on("close",function(t){t.master&&t.master.isMaster&&t.master.dispose()}),e.default=s.default.Master},function(t,e,i){"use strict";i.r(e);var s=i(0);i(86),i(47);s.default.FrequencyEnvelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);t=s.default.defaultArg(t,s.default.FrequencyEnvelope.defaults),s.default.ScaledEnvelope.call(this,t),this._octaves=t.octaves,this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this.exponent=t.exponent},s.default.extend(s.default.FrequencyEnvelope,s.default.Envelope),s.default.FrequencyEnvelope.defaults={baseFrequency:200,octaves:4,exponent:1},Object.defineProperty(s.default.FrequencyEnvelope.prototype,"baseFrequency",{get:function(){return this._scale.min},set:function(t){this._scale.min=this.toFrequency(t),this.octaves=this._octaves}}),Object.defineProperty(s.default.FrequencyEnvelope.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._scale.max=this.baseFrequency*Math.pow(2,t)}}),Object.defineProperty(s.default.FrequencyEnvelope.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),s.default.FrequencyEnvelope.prototype.dispose=function(){return s.default.ScaledEnvelope.prototype.dispose.call(this),this},e.default=s.default.FrequencyEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(26),i(61);s.default.ScaleExp=function(t,e,i){s.default.SignalBase.call(this),this._scale=this.output=new s.default.Scale(t,e),this._exp=this.input=new s.default.Pow(s.default.defaultArg(i,2)),this._exp.connect(this._scale)},s.default.extend(s.default.ScaleExp,s.default.SignalBase),Object.defineProperty(s.default.ScaleExp.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),Object.defineProperty(s.default.ScaleExp.prototype,"min",{get:function(){return this._scale.min},set:function(t){this._scale.min=t}}),Object.defineProperty(s.default.ScaleExp.prototype,"max",{get:function(){return this._scale.max},set:function(t){this._scale.max=t}}),s.default.ScaleExp.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._exp.dispose(),this._exp=null,this},e.default=s.default.ScaleExp},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(1);s.default.Compressor=function(){var t=s.default.defaults(arguments,["threshold","ratio"],s.default.Compressor);s.default.AudioNode.call(this),this._compressor=this.input=this.output=this.context.createDynamicsCompressor(),this.threshold=new s.default.Param({param:this._compressor.threshold,units:s.default.Type.Decibels,convert:!1}),this.attack=new s.default.Param(this._compressor.attack,s.default.Type.Time),this.release=new s.default.Param(this._compressor.release,s.default.Type.Time),this.knee=new s.default.Param({param:this._compressor.knee,units:s.default.Type.Decibels,convert:!1}),this.ratio=new s.default.Param({param:this._compressor.ratio,convert:!1}),this._readOnly(["knee","release","attack","ratio","threshold"]),this.set(t)},s.default.extend(s.default.Compressor,s.default.AudioNode),s.default.Compressor.defaults={ratio:12,threshold:-24,release:.25,attack:.003,knee:30},s.default.Compressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["knee","release","attack","ratio","threshold"]),this._compressor.disconnect(),this._compressor=null,this.attack.dispose(),this.attack=null,this.release.dispose(),this.release=null,this.threshold.dispose(),this.threshold=null,this.ratio.dispose(),this.ratio=null,this.knee.dispose(),this.knee=null,this},e.default=s.default.Compressor},function(t,e,i){"use strict";var s=i(0);i(92);if(s.default.supported){!s.default.global.hasOwnProperty("AudioContext")&&s.default.global.hasOwnProperty("webkitAudioContext")&&(s.default.global.AudioContext=s.default.global.webkitAudioContext),AudioContext.prototype.close||(AudioContext.prototype.close=function(){return s.default.isFunction(this.suspend)&&this.suspend(),Promise.resolve()}),AudioContext.prototype.resume||(AudioContext.prototype.resume=function(){var t=this.createBuffer(1,1,this.sampleRate),e=this.createBufferSource();return e.buffer=t,e.connect(this.destination),e.start(0),Promise.resolve()}),!AudioContext.prototype.createGain&&AudioContext.prototype.createGainNode&&(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),!AudioContext.prototype.createDelay&&AudioContext.prototype.createDelayNode&&(AudioContext.prototype.createDelay=AudioContext.prototype.createDelayNode);var n=!1,o=new OfflineAudioContext(1,1,44100),a=new Uint32Array([1179011410,48,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,8,0,0,0,0]).buffer;try{var r=o.decodeAudioData(a);r&&s.default.isFunction(r.then)&&(n=!0)}catch(t){n=!1}n||(AudioContext.prototype._native_decodeAudioData=AudioContext.prototype.decodeAudioData,AudioContext.prototype.decodeAudioData=function(t){return new Promise(function(e,i){this._native_decodeAudioData(t,e,i)}.bind(this))})}},function(t,e,i){"use strict";i.r(e);var s=i(0);i(63);s.default.TransportTime=function(t,e){if(!(this instanceof s.default.TransportTime))return new s.default.TransportTime(t,e);s.default.Time.call(this,t,e)},s.default.extend(s.default.TransportTime,s.default.Time),s.default.TransportTime.prototype._now=function(){return s.default.Transport.seconds},e.default=s.default.TransportTime},function(t,e,i){"use strict";i.r(e);var s=i(0);i(62);s.default.Frequency=function(t,e){if(!(this instanceof s.default.Frequency))return new s.default.Frequency(t,e);s.default.TimeBase.call(this,t,e)},s.default.extend(s.default.Frequency,s.default.TimeBase),s.default.Frequency.prototype._expressions=Object.assign({},s.default.TimeBase.prototype._expressions,{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method:function(t){return"midi"===this._defaultUnits?t:s.default.Frequency.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method:function(t,e){var i=n[t.toLowerCase()]+12*(parseInt(e)+1);return"midi"===this._defaultUnits?i:s.default.Frequency.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method:function(t,e,i){var s=1;return t&&"0"!==t&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(s*=this._beatsToUnits(parseFloat(e))),i&&"0"!==i&&(s*=this._beatsToUnits(parseFloat(i)/4)),s}}}),s.default.Frequency.prototype.transpose=function(t){return new this.constructor(this.valueOf()*s.default.intervalToFrequencyRatio(t))},s.default.Frequency.prototype.harmonize=function(t){return t.map(function(t){return this.transpose(t)}.bind(this))},s.default.Frequency.prototype.toMidi=function(){return s.default.Frequency.ftom(this.valueOf())},s.default.Frequency.prototype.toNote=function(){var t=this.toFrequency(),e=Math.log2(t/s.default.Frequency.A4),i=Math.round(12*e)+57,n=Math.floor(i/12);return n<0&&(i+=-12*n),o[i%12]+n.toString()},s.default.Frequency.prototype.toSeconds=function(){return 1/s.default.TimeBase.prototype.toSeconds.call(this)},s.default.Frequency.prototype.toFrequency=function(){return s.default.TimeBase.prototype.toFrequency.call(this)},s.default.Frequency.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*s.default.Transport.PPQ)},s.default.Frequency.prototype._noArg=function(){return 0},s.default.Frequency.prototype._frequencyToUnits=function(t){return t},s.default.Frequency.prototype._ticksToUnits=function(t){return 1/(60*t/(s.default.Transport.bpm.value*s.default.Transport.PPQ))},s.default.Frequency.prototype._beatsToUnits=function(t){return 1/s.default.TimeBase.prototype._beatsToUnits.call(this,t)},s.default.Frequency.prototype._secondsToUnits=function(t){return 1/t},s.default.Frequency.prototype._defaultUnits="hz";var n={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},o=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];s.default.Frequency.A4=440,s.default.Frequency.mtof=function(t){return s.default.Frequency.A4*Math.pow(2,(t-69)/12)},s.default.Frequency.ftom=function(t){return 69+Math.round(12*Math.log2(t/s.default.Frequency.A4))},e.default=s.default.Frequency},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(61),i(4),i(1);s.default.Envelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);s.default.AudioNode.call(this),this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this._attackCurve="linear",this._releaseCurve="exponential",this._sig=this.output=new s.default.Signal(0),this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve},s.default.extend(s.default.Envelope,s.default.AudioNode),s.default.Envelope.defaults={attack:.01,decay:.1,sustain:.5,release:1,attackCurve:"linear",decayCurve:"exponential",releaseCurve:"exponential"},Object.defineProperty(s.default.Envelope.prototype,"value",{get:function(){return this.getValueAtTime(this.now())}}),s.default.Envelope.prototype._getCurve=function(t,e){if(s.default.isString(t))return t;if(s.default.isArray(t))for(var i in s.default.Envelope.Type)if(s.default.Envelope.Type[i][e]===t)return i},s.default.Envelope.prototype._setCurve=function(t,e,i){if(s.default.Envelope.Type.hasOwnProperty(i)){var n=s.default.Envelope.Type[i];s.default.isObject(n)?this[t]=n[e]:this[t]=n}else{if(!s.default.isArray(i))throw new Error("Tone.Envelope: invalid curve: "+i);this[t]=i}},Object.defineProperty(s.default.Envelope.prototype,"attackCurve",{get:function(){return this._getCurve(this._attackCurve,"In")},set:function(t){this._setCurve("_attackCurve","In",t)}}),Object.defineProperty(s.default.Envelope.prototype,"releaseCurve",{get:function(){return this._getCurve(this._releaseCurve,"Out")},set:function(t){this._setCurve("_releaseCurve","Out",t)}}),Object.defineProperty(s.default.Envelope.prototype,"decayCurve",{get:function(){return this._decayCurve},set:function(t){if(!["linear","exponential"].includes(t))throw new Error("Tone.Envelope: invalid curve: "+t);this._decayCurve=t}}),s.default.Envelope.prototype.triggerAttack=function(t,e){this.log("triggerAttack",t,e),t=this.toSeconds(t);var i=this.toSeconds(this.attack),n=this.toSeconds(this.decay);e=s.default.defaultArg(e,1);var o=this.getValueAtTime(t);o>0&&(i=(1-o)/(1/i));if(0===i)this._sig.setValueAtTime(e,t);else if("linear"===this._attackCurve)this._sig.linearRampTo(e,i,t);else if("exponential"===this._attackCurve)this._sig.targetRampTo(e,i,t);else if(i>0){this._sig.cancelAndHoldAtTime(t);for(var a=this._attackCurve,r=1;r<a.length;r++)if(a[r-1]<=o&&o<=a[r]){(a=this._attackCurve.slice(r))[0]=o;break}this._sig.setValueCurveAtTime(a,t,i,e)}if(n){var l=e*this.sustain,u=t+i;this.log("decay",u),"linear"===this._decayCurve?this._sig.linearRampTo(l,n,u+this.sampleTime):"exponential"===this._decayCurve&&this._sig.exponentialApproachValueAtTime(l,u,n)}return this},s.default.Envelope.prototype.triggerRelease=function(t){this.log("triggerRelease",t),t=this.toSeconds(t);var e=this.getValueAtTime(t);if(e>0){var i=this.toSeconds(this.release);if("linear"===this._releaseCurve)this._sig.linearRampTo(0,i,t);else if("exponential"===this._releaseCurve)this._sig.targetRampTo(0,i,t);else{var n=this._releaseCurve;s.default.isArray(n)&&(this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(n,t,i,e))}}return this},s.default.Envelope.prototype.getValueAtTime=function(t){return this._sig.getValueAtTime(t)},s.default.Envelope.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),this.triggerAttack(e,i),this.triggerRelease(e+this.toSeconds(t)),this},s.default.Envelope.prototype.cancel=function(t){return this._sig.cancelScheduledValues(t),this},s.default.Envelope.prototype.connect=s.default.SignalBase.prototype.connect,function(){var t,e,i=[];for(t=0;t<128;t++)i[t]=Math.sin(t/127*(Math.PI/2));var n=[];for(t=0;t<127;t++){e=t/127;var o=Math.sin(e*(2*Math.PI)*6.4-Math.PI/2)+1;n[t]=o/10+.83*e}n[127]=1;var a=[];for(t=0;t<128;t++)a[t]=Math.ceil(t/127*5)/5;var r=[];for(t=0;t<128;t++)e=t/127,r[t]=.5*(1-Math.cos(Math.PI*e));var l,u=[];for(t=0;t<128;t++){e=t/127;var d=4*Math.pow(e,3)+.2,f=Math.cos(d*Math.PI*2*e);u[t]=Math.abs(f*(1-e))}function h(t){for(var e=new Array(t.length),i=0;i<t.length;i++)e[i]=1-t[i];return e}s.default.Envelope.Type={linear:"linear",exponential:"exponential",bounce:{In:h(u),Out:u},cosine:{In:i,Out:(l=i,l.slice(0).reverse())},step:{In:a,Out:h(a)},ripple:{In:n,Out:h(n)},sine:{In:r,Out:h(r)}}}(),s.default.Envelope.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._sig.dispose(),this._sig=null,this._attackCurve=null,this._releaseCurve=null,this},e.default=s.default.Envelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(7),i(28),i(3),i(2),i(20);if(s.default.supported&&!s.default.global.AudioContext.prototype.createStereoPanner){var n=function(t){this.context=t,this.pan=new s.default.Signal(0,s.default.Type.AudioRange);var e=new s.default.WaveShaper(function(t){return s.default.equalPowerScale((t+1)/2)},4096),i=new s.default.WaveShaper(function(t){return s.default.equalPowerScale(1-(t+1)/2)},4096),n=new s.default.Gain,o=new s.default.Gain,a=this.input=new s.default.Split;a._splitter.channelCountMode="explicit",(new s.default.Zero).fan(e,i);var r=this.output=new s.default.Merge;a.left.chain(n,r.left),a.right.chain(o,r.right),this.pan.chain(i,n.gain),this.pan.chain(e,o.gain)};n.prototype.disconnect=function(){this.output.disconnect.apply(this.output,arguments)},n.prototype.connect=function(){this.output.connect.apply(this.output,arguments)},AudioContext.prototype.createStereoPanner=function(){return new n(this)},s.default.Context.prototype.createStereoPanner=function(){return new n(this)}}i(22),i(1);s.default.Panner=function(){var t=s.default.defaults(arguments,["pan"],s.default.Panner);s.default.AudioNode.call(this),this._panner=this.input=this.output=this.context.createStereoPanner(),this.pan=this._panner.pan,this.pan.value=t.pan,this._readOnly("pan")},s.default.extend(s.default.Panner,s.default.AudioNode),s.default.Panner.defaults={pan:0},s.default.Panner.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable("pan"),this._panner.disconnect(),this._panner=null,this.pan=null,this};e.default=s.default.Panner},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3);s.default.FMOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","modulationType"],s.default.FMOscillator);s.default.Source.call(this,t),this._carrier=new s.default.Oscillator(t.frequency,t.type),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=this._carrier.detune,this.detune.value=t.detune,this.modulationIndex=new s.default.Multiply(t.modulationIndex),this.modulationIndex.units=s.default.Type.Positive,this._modulator=new s.default.Oscillator(t.frequency,t.modulationType),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),this.phase=t.phase,this._readOnly(["modulationIndex","frequency","detune","harmonicity"])},s.default.extend(s.default.FMOscillator,s.default.Source),s.default.FMOscillator.defaults={frequency:440,detune:0,phase:0,type:"sine",modulationIndex:2,modulationType:"square",harmonicity:1},s.default.FMOscillator.prototype._start=function(t){this._modulator.start(t),this._carrier.start(t)},s.default.FMOscillator.prototype._stop=function(t){this._modulator.stop(t),this._carrier.stop(t)},s.default.FMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._carrier.restart(t)},Object.defineProperty(s.default.FMOscillator.prototype,"type",{get:function(){return this._carrier.type},set:function(t){this._carrier.type=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"baseType",{get:function(){return this._carrier.baseType},set:function(t){this._carrier.baseType=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"partialCount",{get:function(){return this._carrier.partialCount},set:function(t){this._carrier.partialCount=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"modulationType",{get:function(){return this._modulator.type},set:function(t){this._modulator.type=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"phase",{get:function(){return this._carrier.phase},set:function(t){this._carrier.phase=t,this._modulator.phase=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"partials",{get:function(){return this._carrier.partials},set:function(t){this._carrier.partials=t}}),s.default.FMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["modulationIndex","frequency","detune","harmonicity"]),this.frequency.dispose(),this.frequency=null,this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this._modulationNode.dispose(),this._modulationNode=null,this.modulationIndex.dispose(),this.modulationIndex=null,this},e.default=s.default.FMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(2),i(7),i(3);s.default.PulseOscillator=function(){var t=s.default.defaults(arguments,["frequency","width"],s.default.Oscillator);s.default.Source.call(this,t),this.width=new s.default.Signal(t.width,s.default.Type.NormalRange),this._widthGate=new s.default.Gain(0),this._sawtooth=new s.default.Oscillator({frequency:t.frequency,detune:t.detune,type:"sawtooth",phase:t.phase}),this.frequency=this._sawtooth.frequency,this.detune=this._sawtooth.detune,this._thresh=new s.default.WaveShaper(function(t){return t<0?-1:1}),this._sawtooth.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),this._readOnly(["width","frequency","detune"])},s.default.extend(s.default.PulseOscillator,s.default.Source),s.default.PulseOscillator.defaults={frequency:440,detune:0,phase:0,width:.2},s.default.PulseOscillator.prototype._start=function(t){t=this.toSeconds(t),this._sawtooth.start(t),this._widthGate.gain.setValueAtTime(1,t)},s.default.PulseOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._sawtooth.stop(t),this._widthGate.gain.setValueAtTime(0,t)},s.default.PulseOscillator.prototype.restart=function(t){this._sawtooth.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)},Object.defineProperty(s.default.PulseOscillator.prototype,"phase",{get:function(){return this._sawtooth.phase},set:function(t){this._sawtooth.phase=t}}),Object.defineProperty(s.default.PulseOscillator.prototype,"type",{get:function(){return"pulse"}}),Object.defineProperty(s.default.PulseOscillator.prototype,"baseType",{get:function(){return"pulse"}}),Object.defineProperty(s.default.PulseOscillator.prototype,"partials",{get:function(){return[]}}),s.default.PulseOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._sawtooth.dispose(),this._sawtooth=null,this._writable(["width","frequency","detune"]),this.width.dispose(),this.width=null,this._widthGate.dispose(),this._widthGate=null,this._thresh.dispose(),this._thresh=null,this.frequency=null,this.detune=null,this},e.default=s.default.PulseOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(4),i(34);s.default.Event=function(){var t=s.default.defaults(arguments,["callback","value"],s.default.Event);s.default.call(this),this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._state=new s.default.TimelineState(s.default.State.Stopped),this._playbackRate=1,this._startOffset=0,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this.playbackRate=t.playbackRate},s.default.extend(s.default.Event),s.default.Event.defaults={callback:s.default.noOp,loop:!1,loopEnd:"1m",loopStart:0,playbackRate:1,value:null,probability:1,mute:!1,humanize:!1},s.default.Event.prototype._rescheduleEvents=function(t){return t=s.default.defaultArg(t,-1),this._state.forEachFrom(t,function(t){var e;if(t.state===s.default.State.Started){s.default.isDefined(t.id)&&s.default.Transport.clear(t.id);var i=t.time+Math.round(this.startOffset/this._playbackRate);if(!0===this._loop||s.default.isNumber(this._loop)&&this._loop>1){e=1/0,s.default.isNumber(this._loop)&&(e=this._loop*this._getLoopDuration());var n=this._state.getAfter(i);null!==n&&(e=Math.min(e,n.time-i)),e!==1/0&&(this._state.setStateAtTime(s.default.State.Stopped,i+e+1),e=s.default.Ticks(e));var o=s.default.Ticks(this._getLoopDuration());t.id=s.default.Transport.scheduleRepeat(this._tick.bind(this),o,s.default.Ticks(i),e)}else t.id=s.default.Transport.schedule(this._tick.bind(this),s.default.Ticks(i))}}.bind(this)),this},Object.defineProperty(s.default.Event.prototype,"state",{get:function(){return this._state.getValueAtTime(s.default.Transport.ticks)}}),Object.defineProperty(s.default.Event.prototype,"startOffset",{get:function(){return this._startOffset},set:function(t){this._startOffset=t}}),Object.defineProperty(s.default.Event.prototype,"probability",{get:function(){return this._probability},set:function(t){this._probability=t}}),Object.defineProperty(s.default.Event.prototype,"humanize",{get:function(){return this._humanize},set:function(t){this._humanize=t}}),s.default.Event.prototype.start=function(t){return t=this.toTicks(t),this._state.getValueAtTime(t)===s.default.State.Stopped&&(this._state.add({state:s.default.State.Started,time:t,id:void 0}),this._rescheduleEvents(t)),this},s.default.Event.prototype.stop=function(t){if(this.cancel(t),t=this.toTicks(t),this._state.getValueAtTime(t)===s.default.State.Started){this._state.setStateAtTime(s.default.State.Stopped,t);var e=this._state.getBefore(t),i=t;null!==e&&(i=e.time),this._rescheduleEvents(i)}return this},s.default.Event.prototype.cancel=function(t){return t=s.default.defaultArg(t,-1/0),t=this.toTicks(t),this._state.forEachFrom(t,function(t){s.default.Transport.clear(t.id)}),this._state.cancel(t),this},s.default.Event.prototype._tick=function(t){var e=s.default.Transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)===s.default.State.Started){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){var i=.02;s.default.isBoolean(this.humanize)||(i=this.toSeconds(this.humanize)),t+=(2*Math.random()-1)*i}this.callback(t,this.value)}},s.default.Event.prototype._getLoopDuration=function(){return Math.round((this._loopEnd-this._loopStart)/this._playbackRate)},Object.defineProperty(s.default.Event.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"progress",{get:function(){if(this._loop){var t=s.default.Transport.ticks,e=this._state.get(t);if(null!==e&&e.state===s.default.State.Started){var i=this._getLoopDuration();return(t-e.time)%i/i}return 0}return 0}}),s.default.Event.prototype.dispose=function(){this.cancel(),this._state.dispose(),this._state=null,this.callback=null,this.value=null},e.default=s.default.Event},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(13),i(29),i(10),i(3),i(1);s.default.MidSideMerge=function(){s.default.AudioNode.call(this),this.createInsOuts(2,0),this.mid=this.input[0]=new s.default.Gain,this._left=new s.default.Add,this._timesTwoLeft=new s.default.Multiply(Math.SQRT1_2),this.side=this.input[1]=new s.default.Gain,this._right=new s.default.Subtract,this._timesTwoRight=new s.default.Multiply(Math.SQRT1_2),this._merge=this.output=new s.default.Merge,this.mid.connect(this._left,0,0),this.side.connect(this._left,0,1),this.mid.connect(this._right,0,0),this.side.connect(this._right,0,1),this._left.connect(this._timesTwoLeft),this._right.connect(this._timesTwoRight),this._timesTwoLeft.connect(this._merge,0,0),this._timesTwoRight.connect(this._merge,0,1)},s.default.extend(s.default.MidSideMerge,s.default.AudioNode),s.default.MidSideMerge.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._left.dispose(),this._left=null,this._timesTwoLeft.dispose(),this._timesTwoLeft=null,this._right.dispose(),this._right=null,this._timesTwoRight.dispose(),this._timesTwoRight=null,this._merge.dispose(),this._merge=null,this},e.default=s.default.MidSideMerge},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(13),i(2),i(19),i(1);s.default.MidSideSplit=function(){s.default.AudioNode.call(this),this.createInsOuts(0,2),this._split=this.input=new s.default.Split,this._midAdd=new s.default.Add,this.mid=this.output[0]=new s.default.Multiply(Math.SQRT1_2),this._sideSubtract=new s.default.Subtract,this.side=this.output[1]=new s.default.Multiply(Math.SQRT1_2),this._split.connect(this._midAdd,0,0),this._split.connect(this._midAdd,1,1),this._split.connect(this._sideSubtract,0,0),this._split.connect(this._sideSubtract,1,1),this._midAdd.connect(this.mid),this._sideSubtract.connect(this.side)},s.default.extend(s.default.MidSideSplit,s.default.AudioNode),s.default.MidSideSplit.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._midAdd.dispose(),this._midAdd=null,this._sideSubtract.dispose(),this._sideSubtract=null,this._split.dispose(),this._split=null,this},e.default=s.default.MidSideSplit},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(9),i(1),i(59);s.default.LowpassCombFilter=function(){var t=s.default.defaults(arguments,["delayTime","resonance","dampening"],s.default.LowpassCombFilter);s.default.AudioNode.call(this),this._combFilter=this.output=new s.default.FeedbackCombFilter(t.delayTime,t.resonance),this.delayTime=this._combFilter.delayTime,this._lowpass=this.input=new s.default.Filter({frequency:t.dampening,type:"lowpass",Q:0,rolloff:-12}),this.dampening=this._lowpass.frequency,this.resonance=this._combFilter.resonance,this._lowpass.connect(this._combFilter),this._readOnly(["dampening","resonance","delayTime"])},s.default.extend(s.default.LowpassCombFilter,s.default.AudioNode),s.default.LowpassCombFilter.defaults={delayTime:.1,resonance:.5,dampening:3e3},s.default.LowpassCombFilter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["dampening","resonance","delayTime"]),this._combFilter.dispose(),this._combFilter=null,this.resonance=null,this.delayTime=null,this._lowpass.dispose(),this._lowpass=null,this.dampening=null,this},e.default=s.default.LowpassCombFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(45);s.default.Ticks=function(t,e){if(!(this instanceof s.default.Ticks))return new s.default.Ticks(t,e);s.default.TransportTime.call(this,t,e)},s.default.extend(s.default.Ticks,s.default.TransportTime),s.default.Ticks.prototype._defaultUnits="i",s.default.Ticks.prototype._now=function(){return s.default.Transport.ticks},s.default.Ticks.prototype._beatsToUnits=function(t){return this._getPPQ()*t},s.default.Ticks.prototype._secondsToUnits=function(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())},s.default.Ticks.prototype._ticksToUnits=function(t){return t},s.default.Ticks.prototype.toTicks=function(){return this.valueOf()},s.default.Ticks.prototype.toSeconds=function(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())},e.default=s.default.Ticks},function(t,e,i){"use strict";i.r(e);var s=i(0);i(55);s.default.TransportEvent=function(t,e){e=s.default.defaultArg(e,s.default.TransportEvent.defaults),s.default.call(this),this.Transport=t,this.id=s.default.TransportEvent._eventId++,this.time=s.default.Ticks(e.time),this.callback=e.callback,this._once=e.once},s.default.extend(s.default.TransportEvent),s.default.TransportEvent.defaults={once:!1,callback:s.default.noOp},s.default.TransportEvent._eventId=0,s.default.TransportEvent.prototype.invoke=function(t){this.callback&&(this.callback(t),this._once&&this.Transport&&this.Transport.clear(this.id))},s.default.TransportEvent.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this.Transport=null,this.callback=null,this.time=null,this},e.default=s.default.TransportEvent},function(t,e,i){"use strict";i.r(e);var s=i(0);i(82),i(34),i(24),i(14);s.default.TickSource=function(){var t=s.default.defaults(arguments,["frequency"],s.default.TickSource);this.frequency=new s.default.TickSignal(t.frequency),this._readOnly("frequency"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.setStateAtTime(s.default.State.Stopped,0),this._tickOffset=new s.default.Timeline,this.setTicksAtTime(0,0)},s.default.extend(s.default.TickSource),s.default.TickSource.defaults={frequency:1},Object.defineProperty(s.default.TickSource.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),s.default.TickSource.prototype.start=function(t,e){return t=this.toSeconds(t),this._state.getValueAtTime(t)!==s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Started,t),s.default.isDefined(e)&&this.setTicksAtTime(e,t)),this},s.default.TickSource.prototype.stop=function(t){if(t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Stopped){var e=this._state.get(t);e.time>0&&(this._tickOffset.cancel(e.time),this._state.cancel(e.time))}return this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this.setTicksAtTime(0,t),this},s.default.TickSource.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Started&&this._state.setStateAtTime(s.default.State.Paused,t),this},s.default.TickSource.prototype.cancel=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this},s.default.TickSource.prototype.getTicksAtTime=function(t){t=this.toSeconds(t);var e=this._state.getLastState(s.default.State.Stopped,t),i={state:s.default.State.Paused,time:t};this._state.add(i);var n=e,o=0;return this._state.forEachBetween(e.time,t+this.sampleTime,function(t){var e=n.time,i=this._tickOffset.get(t.time);i.time>=n.time&&(o=i.ticks,e=i.time),n.state===s.default.State.Started&&t.state!==s.default.State.Started&&(o+=this.frequency.getTicksAtTime(t.time)-this.frequency.getTicksAtTime(e)),n=t}.bind(this)),this._state.remove(i),o},Object.defineProperty(s.default.TickSource.prototype,"ticks",{get:function(){return this.getTicksAtTime(this.now())},set:function(t){this.setTicksAtTime(t,this.now())}}),Object.defineProperty(s.default.TickSource.prototype,"seconds",{get:function(){return this.getSecondsAtTime(this.now())},set:function(t){var e=this.now(),i=this.frequency.timeToTicks(t,e);this.setTicksAtTime(i,e)}}),s.default.TickSource.prototype.getSecondsAtTime=function(t){t=this.toSeconds(t);var e=this._state.getLastState(s.default.State.Stopped,t),i={state:s.default.State.Paused,time:t};this._state.add(i);var n=e,o=0;return this._state.forEachBetween(e.time,t+this.sampleTime,function(t){var e=n.time,i=this._tickOffset.get(t.time);i.time>=n.time&&(o=i.seconds,e=i.time),n.state===s.default.State.Started&&t.state!==s.default.State.Started&&(o+=t.time-e),n=t}.bind(this)),this._state.remove(i),o},s.default.TickSource.prototype.setTicksAtTime=function(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({time:e,ticks:t,seconds:this.frequency.getDurationOfTicks(t,e)}),this},s.default.TickSource.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},s.default.TickSource.prototype.getTimeOfTick=function(t,e){e=s.default.defaultArg(e,this.now());var i=this._tickOffset.get(e),n=this._state.get(e),o=Math.max(i.time,n.time),a=this.frequency.getTicksAtTime(o)+t-i.ticks;return this.frequency.getTimeOfTick(a)},s.default.TickSource.prototype.forEachTickBetween=function(t,e,i){var n=this._state.get(t);if(this._state.forEachBetween(t,e,function(e){n.state===s.default.State.Started&&e.state!==s.default.State.Started&&this.forEachTickBetween(Math.max(n.time,t),e.time-this.sampleTime,i),n=e}.bind(this)),t=Math.max(n.time,t),n.state===s.default.State.Started&&this._state){var o=this.frequency.getTicksAtTime(t),a=(o-this.frequency.getTicksAtTime(n.time))%1;0!==a&&(a=1-a);for(var r=this.frequency.getTimeOfTick(o+a),l=null;r<e&&this._state;){try{i(r,Math.round(this.getTicksAtTime(r)))}catch(t){l=t;break}this._state&&(r+=this.frequency.getDurationOfTicks(1,r))}}if(l)throw l;return this},s.default.TickSource.prototype.dispose=function(){return s.default.Param.prototype.dispose.call(this),this._state.dispose(),this._state=null,this._tickOffset.dispose(),this._tickOffset=null,this._writable("frequency"),this.frequency.dispose(),this.frequency=null,this},e.default=s.default.TickSource},function(t,e,i){"use strict";i.r(e);var s=i(0);i(87),i(13),i(2),i(4),i(18),i(1);s.default.Follower=function(){var t=s.default.defaults(arguments,["smoothing"],s.default.Follower);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._abs=new s.default.Abs,this._filter=this.context.createBiquadFilter(),this._filter.type="lowpass",this._filter.frequency.value=0,this._filter.Q.value=0,this._sub=new s.default.Subtract,this._delay=new s.default.Delay(this.blockTime),this._smoothing=t.smoothing,s.default.connect(this.input,this._delay),s.default.connect(this.input,this._sub,0,1),this._sub.chain(this._abs,this._filter,this.output),this.smoothing=t.smoothing},s.default.extend(s.default.Follower,s.default.AudioNode),s.default.Follower.defaults={smoothing:.05},Object.defineProperty(s.default.Follower.prototype,"smoothing",{get:function(){return this._smoothing},set:function(t){this._smoothing=t,this._filter.frequency.value=.5*s.default.Time(t).toFrequency()}}),s.default.Follower.prototype.connect=s.default.SignalBase.prototype.connect,s.default.Follower.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._filter.disconnect(),this._filter=null,this._delay.dispose(),this._delay=null,this._sub.disconnect(),this._sub=null,this._abs.dispose(),this._abs=null,this},e.default=s.default.Follower},function(t,e,i){"use strict";i.r(e);var s=i(0);i(42),i(2),i(14),i(18),i(3),i(1);s.default.FeedbackCombFilter=function(){var t=s.default.defaults(arguments,["delayTime","resonance"],s.default.FeedbackCombFilter);s.default.AudioNode.call(this),this._delay=this.input=this.output=new s.default.Delay(t.delayTime),this.delayTime=this._delay.delayTime,this._feedback=new s.default.Gain(t.resonance,s.default.Type.NormalRange),this.resonance=this._feedback.gain,this._delay.chain(this._feedback,this._delay),this._readOnly(["resonance","delayTime"])},s.default.extend(s.default.FeedbackCombFilter,s.default.AudioNode),s.default.FeedbackCombFilter.defaults={delayTime:.1,resonance:.5},s.default.FeedbackCombFilter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["resonance","delayTime"]),this._delay.dispose(),this._delay=null,this.delayTime=null,this._feedback.dispose(),this._feedback=null,this.resonance=null,this},e.default=s.default.FeedbackCombFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(9),i(2),i(3),i(1);s.default.MultibandSplit=function(){var t=s.default.defaults(arguments,["lowFrequency","highFrequency"],s.default.MultibandSplit);s.default.AudioNode.call(this),this.input=new s.default.Gain,this.output=new Array(3),this.low=this.output[0]=new s.default.Filter(0,"lowpass"),this._lowMidFilter=new s.default.Filter(0,"highpass"),this.mid=this.output[1]=new s.default.Filter(0,"lowpass"),this.high=this.output[2]=new s.default.Filter(0,"highpass"),this.lowFrequency=new s.default.Signal(t.lowFrequency,s.default.Type.Frequency),this.highFrequency=new s.default.Signal(t.highFrequency,s.default.Type.Frequency),this.Q=new s.default.Signal(t.Q),this.input.fan(this.low,this.high),this.input.chain(this._lowMidFilter,this.mid),this.lowFrequency.connect(this.low.frequency),this.lowFrequency.connect(this._lowMidFilter.frequency),this.highFrequency.connect(this.mid.frequency),this.highFrequency.connect(this.high.frequency),this.Q.connect(this.low.Q),this.Q.connect(this._lowMidFilter.Q),this.Q.connect(this.mid.Q),this.Q.connect(this.high.Q),this._readOnly(["high","mid","low","highFrequency","lowFrequency"])},s.default.extend(s.default.MultibandSplit,s.default.AudioNode),s.default.MultibandSplit.defaults={lowFrequency:400,highFrequency:2500,Q:1},s.default.MultibandSplit.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this.low=null,this._lowMidFilter.dispose(),this._lowMidFilter=null,this.mid.dispose(),this.mid=null,this.high.dispose(),this.high=null,this.lowFrequency.dispose(),this.lowFrequency=null,this.highFrequency.dispose(),this.highFrequency=null,this.Q.dispose(),this.Q=null,this},e.default=s.default.MultibandSplit},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7);s.default.Pow=function(t){s.default.SignalBase.call(this),this._exp=s.default.defaultArg(t,1),this._expScaler=this.input=this.output=new s.default.WaveShaper(this._expFunc(this._exp),8192)},s.default.extend(s.default.Pow,s.default.SignalBase),Object.defineProperty(s.default.Pow.prototype,"value",{get:function(){return this._exp},set:function(t){this._exp=t,this._expScaler.setMap(this._expFunc(this._exp))}}),s.default.Pow.prototype._expFunc=function(t){return function(e){return Math.pow(Math.abs(e),t)}},s.default.Pow.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._expScaler.dispose(),this._expScaler=null,this},e.default=s.default.Pow},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.TimeBase=function(t,e){if(!(this instanceof s.default.TimeBase))return new s.default.TimeBase(t,e);if(this._val=t,this._units=e,s.default.isUndef(this._units)&&s.default.isString(this._val)&&parseFloat(this._val)==this._val&&"+"!==this._val.charAt(0))this._val=parseFloat(this._val),this._units=this._defaultUnits;else if(t&&t.constructor===this.constructor)this._val=t._val,this._units=t._units;else if(t instanceof s.default.TimeBase)switch(this._defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break;default:throw new Error("Unrecognized default units "+this._defaultUnits)}},s.default.extend(s.default.TimeBase),s.default.TimeBase.prototype._expressions={n:{regexp:/^(\d+)n(\.?)$/i,method:function(t,e){t=parseInt(t);var i="."===e?1.5:1;return 1===t?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/t)*i}},t:{regexp:/^(\d+)t$/i,method:function(t){return t=parseInt(t),this._beatsToUnits(8/(3*parseInt(t)))}},m:{regexp:/^(\d+)m$/i,method:function(t){return this._beatsToUnits(parseInt(t)*this._getTimeSignature())}},i:{regexp:/^(\d+)i$/i,method:function(t){return this._ticksToUnits(parseInt(t))}},hz:{regexp:/^(\d+(?:\.\d+)?)hz$/i,method:function(t){return this._frequencyToUnits(parseFloat(t))}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,method:function(t,e,i){var s=0;return t&&"0"!==t&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(s+=this._beatsToUnits(parseFloat(e))),i&&"0"!==i&&(s+=this._beatsToUnits(parseFloat(i)/4)),s}},s:{regexp:/^(\d+(?:\.\d+)?)s$/,method:function(t){return this._secondsToUnits(parseFloat(t))}},samples:{regexp:/^(\d+)samples$/,method:function(t){return parseInt(t)/this.context.sampleRate}},default:{regexp:/^(\d+(?:\.\d+)?)$/,method:function(t){return this._expressions[this._defaultUnits].method.call(this,t)}}},s.default.TimeBase.prototype._defaultUnits="s",s.default.TimeBase.prototype._getBpm=function(){return s.default.Transport?s.default.Transport.bpm.value:120},s.default.TimeBase.prototype._getTimeSignature=function(){return s.default.Transport?s.default.Transport.timeSignature:4},s.default.TimeBase.prototype._getPPQ=function(){return s.default.Transport?s.default.Transport.PPQ:192},s.default.TimeBase.prototype._now=function(){return this.now()},s.default.TimeBase.prototype._frequencyToUnits=function(t){return 1/t},s.default.TimeBase.prototype._beatsToUnits=function(t){return 60/this._getBpm()*t},s.default.TimeBase.prototype._secondsToUnits=function(t){return t},s.default.TimeBase.prototype._ticksToUnits=function(t){return t*(this._beatsToUnits(1)/this._getPPQ())},s.default.TimeBase.prototype._noArg=function(){return this._now()},s.default.TimeBase.prototype.valueOf=function(){if(s.default.isUndef(this._val))return this._noArg();if(s.default.isString(this._val)&&s.default.isUndef(this._units)){for(var t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(s.default.isObject(this._val)){var e=0;for(var i in this._val){var n=this._val[i];e+=new this.constructor(i).valueOf()*n}return e}if(s.default.isDefined(this._units)){var o=this._expressions[this._units],a=this._val.toString().trim().match(o.regexp);return a?o.method.apply(this,a.slice(1)):o.method.call(this,parseFloat(this._val))}return this._val},s.default.TimeBase.prototype.toSeconds=function(){return this.valueOf()},s.default.TimeBase.prototype.toFrequency=function(){return 1/this.toSeconds()},s.default.TimeBase.prototype.toSamples=function(){return this.toSeconds()*this.context.sampleRate},s.default.TimeBase.prototype.toMilliseconds=function(){return 1e3*this.toSeconds()},s.default.TimeBase.prototype.dispose=function(){this._val=null,this._units=null},e.default=s.default.TimeBase},function(t,e,i){"use strict";i.r(e);var s=i(0);i(62),i(46);s.default.Time=function(t,e){if(!(this instanceof s.default.Time))return new s.default.Time(t,e);s.default.TimeBase.call(this,t,e)},s.default.extend(s.default.Time,s.default.TimeBase),s.default.Time.prototype._expressions=Object.assign({},s.default.TimeBase.prototype._expressions,{quantize:{regexp:/^@(.+)/,method:function(t){if(s.default.Transport){var e=new this.constructor(t);return this._secondsToUnits(s.default.Transport.nextSubdivision(e))}return 0}},now:{regexp:/^\+(.+)/,method:function(t){return this._now()+new this.constructor(t)}}}),s.default.Time.prototype.quantize=function(t,e){e=s.default.defaultArg(e,1);var i=new this.constructor(t),n=this.valueOf();return n+(Math.round(n/i)*i-n)*e},s.default.Time.prototype.toNotation=function(){for(var t=this.toSeconds(),e=["1m"],i=1;i<8;i++){var n=Math.pow(2,i);e.push(n+"n."),e.push(n+"n"),e.push(n+"t")}e.push("0");var o=e[0],a=s.default.Time(e[0]).toSeconds();return e.forEach(function(e){var i=s.default.Time(e).toSeconds();Math.abs(i-t)<Math.abs(a-t)&&(o=e,a=i)}),o},s.default.Time.prototype.toBarsBeatsSixteenths=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;e=parseFloat(e.toFixed(4));var i=Math.floor(e/this._getTimeSignature()),s=e%1*4;return e=Math.floor(e)%this._getTimeSignature(),(s=s.toString()).length>3&&(s=parseFloat(parseFloat(s).toFixed(3))),[i,e,s].join(":")},s.default.Time.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.round(e*this._getPPQ())},s.default.Time.prototype.toSeconds=function(){return this.valueOf()},s.default.Time.prototype.toMidi=function(){return s.default.Frequency.ftom(this.toFrequency())},e.default=s.default.Time},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(3),i(1);s.default.supported&&(OscillatorNode.prototype.setPeriodicWave||(OscillatorNode.prototype.setPeriodicWave=OscillatorNode.prototype.setWaveTable),AudioContext.prototype.createPeriodicWave||(AudioContext.prototype.createPeriodicWave=AudioContext.prototype.createWaveTable)),s.default.OscillatorNode=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.OscillatorNode);s.default.AudioNode.call(this,t),this.onended=t.onended,this._startTime=-1,this._stopTime=-1,this._gainNode=this.output=new s.default.Gain(0),this._oscillator=this.context.createOscillator(),s.default.connect(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new s.default.Param({param:this._oscillator.frequency,units:s.default.Type.Frequency,value:t.frequency}),this.detune=new s.default.Param({param:this._oscillator.detune,units:s.default.Type.Cents,value:t.detune}),this._gain=1},s.default.extend(s.default.OscillatorNode,s.default.AudioNode),s.default.OscillatorNode.defaults={frequency:440,detune:0,type:"sine",onended:s.default.noOp},Object.defineProperty(s.default.OscillatorNode.prototype,"state",{get:function(){return this.getStateAtTime(this.now())}}),s.default.OscillatorNode.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),-1!==this._startTime&&t>=this._startTime&&(-1===this._stopTime||t<=this._stopTime)?s.default.State.Started:s.default.State.Stopped},s.default.OscillatorNode.prototype.start=function(t){if(this.log("start",t),-1!==this._startTime)throw new Error("cannot call OscillatorNode.start more than once");return this._startTime=this.toSeconds(t),this._startTime=Math.max(this._startTime,this.context.currentTime),this._oscillator.start(this._startTime),this._gainNode.gain.setValueAtTime(1,this._startTime),this},s.default.OscillatorNode.prototype.setPeriodicWave=function(t){return this._oscillator.setPeriodicWave(t),this},s.default.OscillatorNode.prototype.stop=function(t){return this.log("stop",t),this.assert(-1!==this._startTime,"'start' must be called before 'stop'"),this.cancelStop(),this._stopTime=this.toSeconds(t),this._stopTime=Math.max(this._stopTime,this.context.currentTime),this._stopTime>this._startTime?(this._gainNode.gain.setValueAtTime(0,this._stopTime),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(function(){this._oscillator.stop(this.now()),this.onended(),setTimeout(function(){this._oscillator&&(this._oscillator.disconnect(),this._gainNode.disconnect())}.bind(this),100)}.bind(this),this._stopTime-this.context.currentTime)):this._gainNode.gain.cancelScheduledValues(this._startTime),this},s.default.OscillatorNode.prototype.cancelStop=function(){return-1!==this._startTime&&(this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1),this},Object.defineProperty(s.default.OscillatorNode.prototype,"type",{get:function(){return this._oscillator.type},set:function(t){this._oscillator.type=t}}),s.default.OscillatorNode.prototype.dispose=function(){return this._wasDisposed||(this._wasDisposed=!0,this.context.clearTimeout(this._timeout),s.default.AudioNode.prototype.dispose.call(this),this.onended=null,this._oscillator.disconnect(),this._oscillator=null,this._gainNode.dispose(),this._gainNode=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null),this};e.default=s.default.OscillatorNode},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(57),i(32);s.default.Player=function(t){var e;t instanceof s.default.Buffer&&t.loaded?(t=t.get(),e=s.default.Player.defaults):e=s.default.defaults(arguments,["url","onload"],s.default.Player),s.default.Source.call(this,e),this.autostart=e.autostart,this._buffer=new s.default.Buffer({url:e.url,onload:this._onload.bind(this,e.onload),reverse:e.reverse}),t instanceof AudioBuffer&&this._buffer.set(t),this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this._activeSources=[],this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut},s.default.extend(s.default.Player,s.default.Source),s.default.Player.defaults={onload:s.default.noOp,playbackRate:1,loop:!1,autostart:!1,loopStart:0,loopEnd:0,reverse:!1,fadeIn:0,fadeOut:0},s.default.Player.prototype.load=function(t,e){return this._buffer.load(t,this._onload.bind(this,e))},s.default.Player.prototype._onload=function(t){(t=s.default.defaultArg(t,s.default.noOp))(this),this.autostart&&this.start()},s.default.Player.prototype._onSourceEnd=function(t){var e=this._activeSources.indexOf(t);this._activeSources.splice(e,1),0!==this._activeSources.length||this._synced||this._state.setStateAtTime(s.default.State.Stopped,s.default.now())},s.default.Player.prototype._start=function(t,e,i){e=this._loop?s.default.defaultArg(e,this._loopStart):s.default.defaultArg(e,0),e=this.toSeconds(e),this._synced&&(e*=this._playbackRate);var n=s.default.defaultArg(i,Math.max(this._buffer.duration-e,0));n=this.toSeconds(n),n/=this._playbackRate,t=this.toSeconds(t);var o=new s.default.BufferSource({buffer:this._buffer,loop:this._loop,loopStart:this._loopStart,loopEnd:this._loopEnd,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate,fadeIn:this.fadeIn,fadeOut:this.fadeOut}).connect(this.output);return this._loop||this._synced||this._state.setStateAtTime(s.default.State.Stopped,t+n),this._activeSources.push(o),this._loop&&s.default.isUndef(i)?o.start(t,e):o.start(t,e,n-this.toSeconds(this.fadeOut)),this},s.default.Player.prototype._stop=function(t){return t=this.toSeconds(t),this._activeSources.forEach(function(e){e.stop(t)}),this},s.default.Player.prototype.restart=function(t,e,i){return this._stop(t),this._start(t,e,i),this},s.default.Player.prototype.seek=function(t,e){return e=this.toSeconds(e),this._state.getValueAtTime(e)===s.default.State.Started&&(t=this.toSeconds(t),this._stop(e),this._start(e,t)),this},s.default.Player.prototype.setLoopPoints=function(t,e){return this.loopStart=t,this.loopEnd=e,this},Object.defineProperty(s.default.Player.prototype,"loopStart",{get:function(){return this._loopStart},set:function(t){this._loopStart=t,this._activeSources.forEach(function(e){e.loopStart=t})}}),Object.defineProperty(s.default.Player.prototype,"loopEnd",{get:function(){return this._loopEnd},set:function(t){this._loopEnd=t,this._activeSources.forEach(function(e){e.loopEnd=t})}}),Object.defineProperty(s.default.Player.prototype,"buffer",{get:function(){return this._buffer},set:function(t){this._buffer.set(t)}}),Object.defineProperty(s.default.Player.prototype,"loop",{get:function(){return this._loop},set:function(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(function(e){e.loop=t}),t)){var e=this._state.getNextState(s.default.State.Stopped,this.now());e&&this._state.cancel(e.time)}}}),Object.defineProperty(s.default.Player.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t;var e=this.now(),i=this._state.getNextState(s.default.State.Stopped,e);i&&this._state.cancel(i.time),this._activeSources.forEach(function(i){i.cancelStop(),i.playbackRate.setValueAtTime(t,e)})}}),Object.defineProperty(s.default.Player.prototype,"reverse",{get:function(){return this._buffer.reverse},set:function(t){this._buffer.reverse=t}}),Object.defineProperty(s.default.Player.prototype,"loaded",{get:function(){return this._buffer.loaded}}),s.default.Player.prototype.dispose=function(){return this._activeSources.forEach(function(t){t.dispose()}),this._activeSources=null,s.default.Source.prototype.dispose.call(this),this._buffer.dispose(),this._buffer=null,this},e.default=s.default.Player},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(41),i(37),i(2),i(9),i(25);s.default.MonoSynth=function(t){t=s.default.defaultArg(t,s.default.MonoSynth.defaults),s.default.Monophonic.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.filter=new s.default.Filter(t.filter),this.filter.frequency.value=5e3,this.filterEnvelope=new s.default.FrequencyEnvelope(t.filterEnvelope),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.oscillator.chain(this.filter,this.envelope,this.output),this.filterEnvelope.connect(this.filter.frequency),this._readOnly(["oscillator","frequency","detune","filter","filterEnvelope","envelope"])},s.default.extend(s.default.MonoSynth,s.default.Monophonic),s.default.MonoSynth.defaults={frequency:"C4",detune:0,oscillator:{type:"square"},filter:{Q:6,type:"lowpass",rolloff:-24},envelope:{attack:.005,decay:.1,sustain:.9,release:1},filterEnvelope:{attack:.06,decay:.2,sustain:.5,release:2,baseFrequency:200,octaves:7,exponent:2}},s.default.MonoSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.filterEnvelope.triggerAttack(t),this.oscillator.start(t),0===this.envelope.sustain&&this.oscillator.stop(t+this.envelope.attack+this.envelope.decay),this},s.default.MonoSynth.prototype._triggerEnvelopeRelease=function(t){return this.envelope.triggerRelease(t),this.filterEnvelope.triggerRelease(t),this.oscillator.stop(t+this.envelope.release),this},s.default.MonoSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["oscillator","frequency","detune","filter","filterEnvelope","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this.filterEnvelope.dispose(),this.filterEnvelope=null,this.filter.dispose(),this.filter=null,this.frequency=null,this.detune=null,this},e.default=s.default.MonoSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3);s.default.FatOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","spread"],s.default.FatOscillator);s.default.Source.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._oscillators=[],this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,this._readOnly(["frequency","detune"])},s.default.extend(s.default.FatOscillator,s.default.Source),s.default.FatOscillator.defaults={frequency:440,detune:0,phase:0,spread:20,count:3,type:"sawtooth",partials:[],partialCount:0},s.default.FatOscillator.prototype._start=function(t){t=this.toSeconds(t),this._forEach(function(e){e.start(t)})},s.default.FatOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._forEach(function(e){e.stop(t)})},s.default.FatOscillator.prototype.restart=function(t){t=this.toSeconds(t),this._forEach(function(e){e.restart(t)})},s.default.FatOscillator.prototype._forEach=function(t){for(var e=0;e<this._oscillators.length;e++)t.call(this,this._oscillators[e],e)},Object.defineProperty(s.default.FatOscillator.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this._forEach(function(e){e.type=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"spread",{get:function(){return this._spread},set:function(t){if(this._spread=t,this._oscillators.length>1){var e=-t/2,i=t/(this._oscillators.length-1);this._forEach(function(t,s){t.detune.value=e+i*s})}}}),Object.defineProperty(s.default.FatOscillator.prototype,"count",{get:function(){return this._oscillators.length},set:function(t){if(t=Math.max(t,1),this._oscillators.length!==t){this._forEach(function(t){t.dispose()}),this._oscillators=[];for(var e=0;e<t;e++){var i=new s.default.Oscillator;this.type===s.default.Oscillator.Type.Custom?i.partials=this._partials:i.type=this._type,i.partialCount=this._partialCount,i.phase=this._phase+e/t*360,i.volume.value=-6-1.1*t,this.frequency.connect(i.frequency),this.detune.connect(i.detune),i.connect(this.output),this._oscillators[e]=i}this.spread=this._spread,this.state===s.default.State.Started&&this._forEach(function(t){t.start()})}}}),Object.defineProperty(s.default.FatOscillator.prototype,"phase",{get:function(){return this._phase},set:function(t){this._phase=t,this._forEach(function(e){e.phase=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"baseType",{get:function(){return this._oscillators[0].baseType},set:function(t){this._forEach(function(e){e.baseType=t}),this._type=this._oscillators[0].type}}),Object.defineProperty(s.default.FatOscillator.prototype,"partials",{get:function(){return this._oscillators[0].partials},set:function(t){this._partials=t,this._type=s.default.Oscillator.Type.Custom,this._forEach(function(e){e.partials=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"partialCount",{get:function(){return this._oscillators[0].partialCount},set:function(t){this._partialCount=t,this._forEach(function(e){e.partialCount=t}),this._type=this._oscillators[0].type}}),s.default.FatOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune"]),this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this._forEach(function(t){t.dispose()}),this._oscillators=null,this._partials=null,this},e.default=s.default.FatOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3),i(22);s.default.AMOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","modulationType"],s.default.AMOscillator);s.default.Source.call(this,t),this._carrier=new s.default.Oscillator(t.frequency,t.type),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this.detune.value=t.detune,this._modulator=new s.default.Oscillator(t.frequency,t.modulationType),this._modulationScale=new s.default.AudioToGain,this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.connect(this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),this.phase=t.phase,this._readOnly(["frequency","detune","harmonicity"])},s.default.extend(s.default.AMOscillator,s.default.Oscillator),s.default.AMOscillator.defaults={frequency:440,detune:0,phase:0,type:"sine",modulationType:"square",harmonicity:1},s.default.AMOscillator.prototype._start=function(t){this._modulator.start(t),this._carrier.start(t)},s.default.AMOscillator.prototype._stop=function(t){this._modulator.stop(t),this._carrier.stop(t)},s.default.AMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._carrier.restart(t)},Object.defineProperty(s.default.AMOscillator.prototype,"type",{get:function(){return this._carrier.type},set:function(t){this._carrier.type=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"baseType",{get:function(){return this._carrier.baseType},set:function(t){this._carrier.baseType=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"partialCount",{get:function(){return this._carrier.partialCount},set:function(t){this._carrier.partialCount=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"modulationType",{get:function(){return this._modulator.type},set:function(t){this._modulator.type=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"phase",{get:function(){return this._carrier.phase},set:function(t){this._carrier.phase=t,this._modulator.phase=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"partials",{get:function(){return this._carrier.partials},set:function(t){this._carrier.partials=t}}),s.default.AMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune","harmonicity"]),this.frequency=null,this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this._modulationNode.dispose(),this._modulationNode=null,this._modulationScale.dispose(),this._modulationScale=null,this},e.default=s.default.AMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(50),i(17),i(5);s.default.PWMOscillator=function(){var t=s.default.defaults(arguments,["frequency","modulationFrequency"],s.default.PWMOscillator);s.default.Source.call(this,t),this._pulse=new s.default.PulseOscillator(t.modulationFrequency),this._pulse._sawtooth.type="sine",this._modulator=new s.default.Oscillator({frequency:t.frequency,detune:t.detune,phase:t.phase}),this._scale=new s.default.Multiply(2),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this.modulationFrequency=this._pulse.frequency,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),this._readOnly(["modulationFrequency","frequency","detune"])},s.default.extend(s.default.PWMOscillator,s.default.Source),s.default.PWMOscillator.defaults={frequency:440,detune:0,phase:0,modulationFrequency:.4},s.default.PWMOscillator.prototype._start=function(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)},s.default.PWMOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)},s.default.PWMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._pulse.restart(t)},Object.defineProperty(s.default.PWMOscillator.prototype,"type",{get:function(){return"pwm"}}),Object.defineProperty(s.default.PWMOscillator.prototype,"baseType",{get:function(){return"pwm"}}),Object.defineProperty(s.default.PWMOscillator.prototype,"partials",{get:function(){return[]}}),Object.defineProperty(s.default.PWMOscillator.prototype,"phase",{get:function(){return this._modulator.phase},set:function(t){this._modulator.phase=t}}),s.default.PWMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._pulse.dispose(),this._pulse=null,this._scale.dispose(),this._scale=null,this._modulator.dispose(),this._modulator=null,this._writable(["modulationFrequency","frequency","detune"]),this.frequency=null,this.detune=null,this.modulationFrequency=null,this},e.default=s.default.PWMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(51),i(4),i(16);s.default.Part=function(){var t=s.default.defaults(arguments,["callback","events"],s.default.Part);s.default.Event.call(this,t),this._events=[];for(var e=0;e<t.events.length;e++)Array.isArray(t.events[e])?this.add(t.events[e][0],t.events[e][1]):this.add(t.events[e])},s.default.extend(s.default.Part,s.default.Event),s.default.Part.defaults={callback:s.default.noOp,loop:!1,loopEnd:"1m",loopStart:0,playbackRate:1,probability:1,humanize:!1,mute:!1,events:[]},s.default.Part.prototype.start=function(t,e){var i=this.toTicks(t);return this._state.getValueAtTime(i)!==s.default.State.Started&&(e=this._loop?s.default.defaultArg(e,this._loopStart):s.default.defaultArg(e,0),e=this.toTicks(e),this._state.add({state:s.default.State.Started,time:i,offset:e}),this._forEach(function(t){this._startNote(t,i,e)})),this},s.default.Part.prototype._startNote=function(t,e,i){e-=i,this._loop?t.startOffset>=this._loopStart&&t.startOffset<this._loopEnd?(t.startOffset<i&&(e+=this._getLoopDuration()),t.start(s.default.Ticks(e))):t.startOffset<this._loopStart&&t.startOffset>=i&&(t.loop=!1,t.start(s.default.Ticks(e))):t.startOffset>=i&&t.start(s.default.Ticks(e))},Object.defineProperty(s.default.Part.prototype,"startOffset",{get:function(){return this._startOffset},set:function(t){this._startOffset=t,this._forEach(function(t){t.startOffset+=this._startOffset})}}),s.default.Part.prototype.stop=function(t){var e=this.toTicks(t);return this._state.cancel(e),this._state.setStateAtTime(s.default.State.Stopped,e),this._forEach(function(e){e.stop(t)}),this},s.default.Part.prototype.at=function(t,e){t=s.default.TransportTime(t);for(var i=s.default.Ticks(1).toSeconds(),n=0;n<this._events.length;n++){var o=this._events[n];if(Math.abs(t.toTicks()-o.startOffset)<i)return s.default.isDefined(e)&&(o.value=e),o}return s.default.isDefined(e)?(this.add(t,e),this._events[this._events.length-1]):null},s.default.Part.prototype.add=function(t,e){var i;return t.hasOwnProperty("time")&&(t=(e=t).time),t=this.toTicks(t),e instanceof s.default.Event?(i=e).callback=this._tick.bind(this):i=new s.default.Event({callback:this._tick.bind(this),value:e}),i.startOffset=t,i.set({loopEnd:this.loopEnd,loopStart:this.loopStart,loop:this.loop,humanize:this.humanize,playbackRate:this.playbackRate,probability:this.probability}),this._events.push(i),this._restartEvent(i),this},s.default.Part.prototype._restartEvent=function(t){this._state.forEach(function(e){e.state===s.default.State.Started?this._startNote(t,e.time,e.offset):t.stop(s.default.Ticks(e.time))}.bind(this))},s.default.Part.prototype.remove=function(t,e){t.hasOwnProperty("time")&&(t=(e=t).time),t=this.toTicks(t);for(var i=this._events.length-1;i>=0;i--){var n=this._events[i];n.startOffset===t&&(s.default.isUndef(e)||s.default.isDefined(e)&&n.value===e)&&(this._events.splice(i,1),n.dispose())}return this},s.default.Part.prototype.removeAll=function(){return this._forEach(function(t){t.dispose()}),this._events=[],this},s.default.Part.prototype.cancel=function(t){return this._forEach(function(e){e.cancel(t)}),this._state.cancel(this.toTicks(t)),this},s.default.Part.prototype._forEach=function(t,e){if(this._events){e=s.default.defaultArg(e,this);for(var i=this._events.length-1;i>=0;i--){var n=this._events[i];n instanceof s.default.Part?n._forEach(t,e):t.call(e,n)}}return this},s.default.Part.prototype._setAll=function(t,e){this._forEach(function(i){i[t]=e})},s.default.Part.prototype._tick=function(t,e){this.mute||this.callback(t,e)},s.default.Part.prototype._testLoopBoundries=function(t){this._loop&&(t.startOffset<this._loopStart||t.startOffset>=this._loopEnd)?t.cancel(0):t.state===s.default.State.Stopped&&this._restartEvent(t)},Object.defineProperty(s.default.Part.prototype,"probability",{get:function(){return this._probability},set:function(t){this._probability=t,this._setAll("probability",t)}}),Object.defineProperty(s.default.Part.prototype,"humanize",{get:function(){return this._humanize},set:function(t){this._humanize=t,this._setAll("humanize",t)}}),Object.defineProperty(s.default.Part.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._forEach(function(e){e._loopStart=this._loopStart,e._loopEnd=this._loopEnd,e.loop=t,this._testLoopBoundries(e)})}}),Object.defineProperty(s.default.Part.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t),this._loop&&this._forEach(function(e){e.loopEnd=t,this._testLoopBoundries(e)})}}),Object.defineProperty(s.default.Part.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t),this._loop&&this._forEach(function(t){t.loopStart=this.loopStart,this._testLoopBoundries(t)})}}),Object.defineProperty(s.default.Part.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._setAll("playbackRate",t)}}),Object.defineProperty(s.default.Part.prototype,"length",{get:function(){return this._events.length}}),s.default.Part.prototype.dispose=function(){return s.default.Event.prototype.dispose.call(this),this.removeAll(),this.callback=null,this._events=null,this},e.default=s.default.Part},function(t,e,i){"use strict";i.r(e);var s=i(0);i(51);s.default.Loop=function(){var t=s.default.defaults(arguments,["callback","interval"],s.default.Loop);s.default.call(this),this._event=new s.default.Event({callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability}),this.callback=t.callback,this.iterations=t.iterations},s.default.extend(s.default.Loop),s.default.Loop.defaults={interval:"4n",callback:s.default.noOp,playbackRate:1,iterations:1/0,probability:!0,mute:!1},s.default.Loop.prototype.start=function(t){return this._event.start(t),this},s.default.Loop.prototype.stop=function(t){return this._event.stop(t),this},s.default.Loop.prototype.cancel=function(t){return this._event.cancel(t),this},s.default.Loop.prototype._tick=function(t){this.callback(t)},Object.defineProperty(s.default.Loop.prototype,"state",{get:function(){return this._event.state}}),Object.defineProperty(s.default.Loop.prototype,"progress",{get:function(){return this._event.progress}}),Object.defineProperty(s.default.Loop.prototype,"interval",{get:function(){return this._event.loopEnd},set:function(t){this._event.loopEnd=t}}),Object.defineProperty(s.default.Loop.prototype,"playbackRate",{get:function(){return this._event.playbackRate},set:function(t){this._event.playbackRate=t}}),Object.defineProperty(s.default.Loop.prototype,"humanize",{get:function(){return this._event.humanize},set:function(t){this._event.humanize=t}}),Object.defineProperty(s.default.Loop.prototype,"probability",{get:function(){return this._event.probability},set:function(t){this._event.probability=t}}),Object.defineProperty(s.default.Loop.prototype,"mute",{get:function(){return this._event.mute},set:function(t){this._event.mute=t}}),Object.defineProperty(s.default.Loop.prototype,"iterations",{get:function(){return!0===this._event.loop?1/0:this._event.loop},set:function(t){this._event.loop=t===1/0||t}}),s.default.Loop.prototype.dispose=function(){this._event.dispose(),this._event=null,this.callback=null},e.default=s.default.Loop},function(t,e,i){"use strict";i.r(e);var s=i(0);i(15),i(33);s.default.StereoXFeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.StereoEffect.call(this,t),this.feedback=new s.default.Signal(t.feedback,s.default.Type.NormalRange),this._feedbackLR=new s.default.Gain,this._feedbackRL=new s.default.Gain,this.effectReturnL.chain(this._feedbackLR,this.effectSendR),this.effectReturnR.chain(this._feedbackRL,this.effectSendL),this.feedback.fan(this._feedbackLR.gain,this._feedbackRL.gain),this._readOnly(["feedback"])},s.default.extend(s.default.StereoXFeedbackEffect,s.default.StereoEffect),s.default.StereoXFeedbackEffect.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["feedback"]),this.feedback.dispose(),this.feedback=null,this._feedbackLR.dispose(),this._feedbackLR=null,this._feedbackRL.dispose(),this._feedbackRL=null,this},e.default=s.default.StereoXFeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(53),i(52);s.default.MidSideEffect=function(){s.default.Effect.apply(this,arguments),this._midSideSplit=new s.default.MidSideSplit,this._midSideMerge=new s.default.MidSideMerge,this.midSend=this._midSideSplit.mid,this.sideSend=this._midSideSplit.side,this.midReturn=this._midSideMerge.mid,this.sideReturn=this._midSideMerge.side,this.effectSend.connect(this._midSideSplit),this._midSideMerge.connect(this.effectReturn)},s.default.extend(s.default.MidSideEffect,s.default.Effect),s.default.MidSideEffect.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._midSideSplit.dispose(),this._midSideSplit=null,this._midSideMerge.dispose(),this._midSideMerge=null,this.midSend=null,this.sideSend=null,this.midReturn=null,this.sideReturn=null,this},e.default=s.default.MidSideEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(8);s.default.Convolver=function(){var t=s.default.defaults(arguments,["url","onload"],s.default.Convolver);s.default.Effect.call(this,t),this._convolver=this.context.createConvolver(),this._buffer=new s.default.Buffer(t.url,function(e){this.buffer=e.get(),t.onload()}.bind(this)),this._buffer.loaded&&(this.buffer=this._buffer),this.normalize=t.normalize,this.connectEffect(this._convolver)},s.default.extend(s.default.Convolver,s.default.Effect),s.default.Convolver.defaults={onload:s.default.noOp,normalize:!0},Object.defineProperty(s.default.Convolver.prototype,"buffer",{get:function(){return this._buffer.length?this._buffer:null},set:function(t){this._buffer.set(t),this._convolver.buffer&&(this.effectSend.disconnect(),this._convolver.disconnect(),this._convolver=this.context.createConvolver(),this.connectEffect(this._convolver)),this._convolver.buffer=this._buffer.get()}}),Object.defineProperty(s.default.Convolver.prototype,"normalize",{get:function(){return this._convolver.normalize},set:function(t){this._convolver.normalize=t}}),s.default.Convolver.prototype.load=function(t,e){return this._buffer.load(t,function(t){this.buffer=t,e&&e()}.bind(this))},s.default.Convolver.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._buffer.dispose(),this._buffer=null,this._convolver.disconnect(),this._convolver=null,this},e.default=s.default.Convolver},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(5),i(13);s.default.Modulo=function(t){s.default.SignalBase.call(this),this.createInsOuts(1,0),this._shaper=new s.default.WaveShaper(Math.pow(2,16)),this._multiply=new s.default.Multiply,this._subtract=this.output=new s.default.Subtract,this._modSignal=new s.default.Signal(t),s.default.connect(this.input,this._shaper),s.default.connect(this.input,this._subtract),this._modSignal.connect(this._multiply,0,0),this._shaper.connect(this._multiply,0,1),this._multiply.connect(this._subtract,0,1),this._setWaveShaper(t)},s.default.extend(s.default.Modulo,s.default.SignalBase),s.default.Modulo.prototype._setWaveShaper=function(t){this._shaper.setMap(function(e){return Math.floor((e+1e-4)/t)})},Object.defineProperty(s.default.Modulo.prototype,"value",{get:function(){return this._modSignal.value},set:function(t){this._modSignal.value=t,this._setWaveShaper(t)}}),s.default.Modulo.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this._multiply.dispose(),this._multiply=null,this._subtract.dispose(),this._subtract=null,this._modSignal.dispose(),this._modSignal=null,this},e.default=s.default.Modulo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(20),i(92);s.default.OfflineContext=function(t,e,i){var n=new OfflineAudioContext(t,e*i,i);s.default.Context.call(this,{context:n,clockSource:"offline",lookAhead:0,updateInterval:128/i}),this._duration=e,this._currentTime=0},s.default.extend(s.default.OfflineContext,s.default.Context),s.default.OfflineContext.prototype.now=function(){return this._currentTime},s.default.OfflineContext.prototype.resume=function(){return Promise.resolve()},s.default.OfflineContext.prototype.render=function(){for(;this._duration-this._currentTime>=0;)this.emit("tick"),this._currentTime+=.005;return this._context.startRendering()},s.default.OfflineContext.prototype.close=function(){return this._context=null,Promise.resolve()},e.default=s.default.OfflineContext},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(11),i(76),i(40);s.default.Offline=function(t,e){var i=s.default.context.sampleRate,n=s.default.context,o=new s.default.OfflineContext(2,e,i);s.default.context=o;var a=t(s.default.Transport),r=null;return r=a&&s.default.isFunction(a.then)?a.then(function(){return o.render()}):o.render(),s.default.context=n,r.then(function(t){return new s.default.Buffer(t)})},e.default=s.default.Offline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11);s.default.Buffers=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload","baseUrl"],s.default.Buffers);for(var n in s.default.call(this),this._buffers={},this.baseUrl=i.baseUrl,this._loadingCount=0,t)this._loadingCount++,this.add(n,t[n],this._bufferLoaded.bind(this,i.onload))},s.default.extend(s.default.Buffers),s.default.Buffers.defaults={onload:s.default.noOp,baseUrl:""},s.default.Buffers.prototype.has=function(t){return this._buffers.hasOwnProperty(t)},s.default.Buffers.prototype.get=function(t){if(this.has(t))return this._buffers[t];throw new Error("Tone.Buffers: no buffer named "+t)},s.default.Buffers.prototype._bufferLoaded=function(t){this._loadingCount--,0===this._loadingCount&&t&&t(this)},Object.defineProperty(s.default.Buffers.prototype,"loaded",{get:function(){var t=!0;for(var e in this._buffers){var i=this.get(e);t=t&&i.loaded}return t}}),s.default.Buffers.prototype.add=function(t,e,i){return i=s.default.defaultArg(i,s.default.noOp),e instanceof s.default.Buffer?(this._buffers[t]=e,i(this)):e instanceof AudioBuffer?(this._buffers[t]=new s.default.Buffer(e),i(this)):s.default.isString(e)&&(this._buffers[t]=new s.default.Buffer(this.baseUrl+e,i)),this},s.default.Buffers.prototype.dispose=function(){for(var t in s.default.prototype.dispose.call(this),this._buffers)this._buffers[t].dispose();return this._buffers=null,this},e.default=s.default.Buffers},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.CtrlPattern=function(){var t=s.default.defaults(arguments,["values","type"],s.default.CtrlPattern);s.default.call(this),this.values=t.values,this.index=0,this._type=null,this._shuffled=null,this._direction=null,this.type=t.type},s.default.extend(s.default.CtrlPattern),s.default.CtrlPattern.Type={Up:"up",Down:"down",UpDown:"upDown",DownUp:"downUp",AlternateUp:"alternateUp",AlternateDown:"alternateDown",Random:"random",RandomWalk:"randomWalk",RandomOnce:"randomOnce"},s.default.CtrlPattern.defaults={type:s.default.CtrlPattern.Type.Up,values:[]},Object.defineProperty(s.default.CtrlPattern.prototype,"value",{get:function(){if(0!==this.values.length){if(1===this.values.length)return this.values[0];this.index=Math.min(this.index,this.values.length-1);var t=this.values[this.index];return this.type===s.default.CtrlPattern.Type.RandomOnce&&(this.values.length!==this._shuffled.length&&this._shuffleValues(),t=this.values[this._shuffled[this.index]]),t}}}),Object.defineProperty(s.default.CtrlPattern.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this._shuffled=null,this._type===s.default.CtrlPattern.Type.Up||this._type===s.default.CtrlPattern.Type.UpDown||this._type===s.default.CtrlPattern.Type.RandomOnce||this._type===s.default.CtrlPattern.Type.AlternateUp?this.index=0:this._type!==s.default.CtrlPattern.Type.Down&&this._type!==s.default.CtrlPattern.Type.DownUp&&this._type!==s.default.CtrlPattern.Type.AlternateDown||(this.index=this.values.length-1),this._type===s.default.CtrlPattern.Type.UpDown||this._type===s.default.CtrlPattern.Type.AlternateUp?this._direction=s.default.CtrlPattern.Type.Up:this._type!==s.default.CtrlPattern.Type.DownUp&&this._type!==s.default.CtrlPattern.Type.AlternateDown||(this._direction=s.default.CtrlPattern.Type.Down),this._type===s.default.CtrlPattern.Type.RandomOnce?this._shuffleValues():this._type===s.default.CtrlPattern.Type.Random&&(this.index=Math.floor(Math.random()*this.values.length))}}),s.default.CtrlPattern.prototype.next=function(){var t=this.type;return t===s.default.CtrlPattern.Type.Up?(this.index++,this.index>=this.values.length&&(this.index=0)):t===s.default.CtrlPattern.Type.Down?(this.index--,this.index<0&&(this.index=this.values.length-1)):t===s.default.CtrlPattern.Type.UpDown||t===s.default.CtrlPattern.Type.DownUp?(this._direction===s.default.CtrlPattern.Type.Up?this.index++:this.index--,this.index<0?(this.index=1,this._direction=s.default.CtrlPattern.Type.Up):this.index>=this.values.length&&(this.index=this.values.length-2,this._direction=s.default.CtrlPattern.Type.Down)):t===s.default.CtrlPattern.Type.Random?this.index=Math.floor(Math.random()*this.values.length):t===s.default.CtrlPattern.Type.RandomWalk?Math.random()<.5?(this.index--,this.index=Math.max(this.index,0)):(this.index++,this.index=Math.min(this.index,this.values.length-1)):t===s.default.CtrlPattern.Type.RandomOnce?(this.index++,this.index>=this.values.length&&(this.index=0,this._shuffleValues())):t===s.default.CtrlPattern.Type.AlternateUp?(this._direction===s.default.CtrlPattern.Type.Up?(this.index+=2,this._direction=s.default.CtrlPattern.Type.Down):(this.index-=1,this._direction=s.default.CtrlPattern.Type.Up),this.index>=this.values.length&&(this.index=0,this._direction=s.default.CtrlPattern.Type.Up)):t===s.default.CtrlPattern.Type.AlternateDown&&(this._direction===s.default.CtrlPattern.Type.Up?(this.index+=1,this._direction=s.default.CtrlPattern.Type.Down):(this.index-=2,this._direction=s.default.CtrlPattern.Type.Up),this.index<0&&(this.index=this.values.length-1,this._direction=s.default.CtrlPattern.Type.Down)),this.value},s.default.CtrlPattern.prototype._shuffleValues=function(){var t=[];this._shuffled=[];for(var e=0;e<this.values.length;e++)t[e]=e;for(;t.length>0;){var i=t.splice(Math.floor(t.length*Math.random()),1);this._shuffled.push(i[0])}},s.default.CtrlPattern.prototype.dispose=function(){this._shuffled=null,this.values=null},e.default=s.default.CtrlPattern},function(t,e,i){"use strict";i.r(e);var s=i(0);i(56),i(55);s.default.TransportRepeatEvent=function(t,e){s.default.TransportEvent.call(this,t,e),e=s.default.defaultArg(e,s.default.TransportRepeatEvent.defaults),this.duration=s.default.Ticks(e.duration),this._interval=s.default.Ticks(e.interval),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this),this.Transport.on("start loopStart",this._boundRestart),this._restart()},s.default.extend(s.default.TransportRepeatEvent,s.default.TransportEvent),s.default.TransportRepeatEvent.defaults={duration:1/0,interval:1},s.default.TransportRepeatEvent.prototype.invoke=function(t){this._createEvents(t),s.default.TransportEvent.prototype.invoke.call(this,t)},s.default.TransportRepeatEvent.prototype._createEvents=function(t){var e=this.Transport.getTicksAtTime(t);e>=this.time&&e>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick)))},s.default.TransportRepeatEvent.prototype._restart=function(t){this.Transport.clear(this._currentId),this.Transport.clear(this._nextId),this._nextTick=this.time;var e=this.Transport.getTicksAtTime(t);e>this.time&&(this._nextTick=this.time+Math.ceil((e-this.time)/this._interval)*this._interval),this._currentId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick)),this._nextTick+=this._interval,this._nextId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick))},s.default.TransportRepeatEvent.prototype.dispose=function(){return this.Transport.clear(this._currentId),this.Transport.clear(this._nextId),this.Transport.off("start loopStart",this._boundRestart),this._boundCreateEvents=null,s.default.TransportEvent.prototype.dispose.call(this),this.duration=null,this._interval=null,this},e.default=s.default.TransportRepeatEvent},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.IntervalTimeline=function(){s.default.call(this),this._root=null,this._length=0},s.default.extend(s.default.IntervalTimeline),s.default.IntervalTimeline.prototype.add=function(t){if(s.default.isUndef(t.time)||s.default.isUndef(t.duration))throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");t.time=t.time.valueOf();var e=new n(t.time,t.time+t.duration,t);for(null===this._root?this._root=e:this._root.insert(e),this._length++;null!==e;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this},s.default.IntervalTimeline.prototype.remove=function(t){if(null!==this._root){var e=[];this._root.search(t.time,e);for(var i=0;i<e.length;i++){var s=e[i];if(s.event===t){this._removeNode(s),this._length--;break}}}return this},Object.defineProperty(s.default.IntervalTimeline.prototype,"length",{get:function(){return this._length}}),s.default.IntervalTimeline.prototype.cancel=function(t){return this.forEachFrom(t,function(t){this.remove(t)}.bind(this)),this},s.default.IntervalTimeline.prototype._setRoot=function(t){this._root=t,null!==this._root&&(this._root.parent=null)},s.default.IntervalTimeline.prototype._replaceNodeInParent=function(t,e){null!==t.parent?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)},s.default.IntervalTimeline.prototype._removeNode=function(t){if(null===t.left&&null===t.right)this._replaceNodeInParent(t,null);else if(null===t.right)this._replaceNodeInParent(t,t.left);else if(null===t.left)this._replaceNodeInParent(t,t.right);else{var e,i;if(t.getBalance()>0)if(null===t.left.right)(e=t.left).right=t.right,i=e;else{for(e=t.left.right;null!==e.right;)e=e.right;e.parent.right=e.left,i=e.parent,e.left=t.left,e.right=t.right}else if(null===t.right.left)(e=t.right).left=t.left,i=e;else{for(e=t.right.left;null!==e.left;)e=e.left;e.parent.left=e.right,i=e.parent,e.left=t.left,e.right=t.right}null!==t.parent?t.isLeftChild()?t.parent.left=e:t.parent.right=e:this._setRoot(e),this._rebalance(i)}t.dispose()},s.default.IntervalTimeline.prototype._rotateLeft=function(t){var e=t.parent,i=t.isLeftChild(),s=t.right;t.right=s.left,s.left=t,null!==e?i?e.left=s:e.right=s:this._setRoot(s)},s.default.IntervalTimeline.prototype._rotateRight=function(t){var e=t.parent,i=t.isLeftChild(),s=t.left;t.left=s.right,s.right=t,null!==e?i?e.left=s:e.right=s:this._setRoot(s)},s.default.IntervalTimeline.prototype._rebalance=function(t){var e=t.getBalance();e>1?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))},s.default.IntervalTimeline.prototype.get=function(t){if(null!==this._root){var e=[];if(this._root.search(t,e),e.length>0){for(var i=e[0],s=1;s<e.length;s++)e[s].low>i.low&&(i=e[s]);return i.event}}return null},s.default.IntervalTimeline.prototype.forEach=function(t){if(null!==this._root){var e=[];this._root.traverse(function(t){e.push(t)});for(var i=0;i<e.length;i++){var s=e[i].event;s&&t(s)}}return this},s.default.IntervalTimeline.prototype.forEachAtTime=function(t,e){if(null!==this._root){var i=[];this._root.search(t,i);for(var s=i.length-1;s>=0;s--){var n=i[s].event;n&&e(n)}}return this},s.default.IntervalTimeline.prototype.forEachFrom=function(t,e){if(null!==this._root){var i=[];this._root.searchAfter(t,i);for(var s=i.length-1;s>=0;s--){e(i[s].event)}}return this},s.default.IntervalTimeline.prototype.dispose=function(){var t=[];null!==this._root&&this._root.traverse(function(e){t.push(e)});for(var e=0;e<t.length;e++)t[e].dispose();return t=null,this._root=null,this};var n=function(t,e,i){this.event=i,this.low=t,this.high=e,this.max=this.high,this._left=null,this._right=null,this.parent=null,this.height=0};n.prototype.insert=function(t){t.low<=this.low?null===this.left?this.left=t:this.left.insert(t):null===this.right?this.right=t:this.right.insert(t)},n.prototype.search=function(t,e){t>this.max||(null!==this.left&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),this.low>t||null!==this.right&&this.right.search(t,e))},n.prototype.searchAfter=function(t,e){this.low>=t&&(e.push(this),null!==this.left&&this.left.searchAfter(t,e)),null!==this.right&&this.right.searchAfter(t,e)},n.prototype.traverse=function(t){t(this),null!==this.left&&this.left.traverse(t),null!==this.right&&this.right.traverse(t)},n.prototype.updateHeight=function(){null!==this.left&&null!==this.right?this.height=Math.max(this.left.height,this.right.height)+1:null!==this.right?this.height=this.right.height+1:null!==this.left?this.height=this.left.height+1:this.height=0},n.prototype.updateMax=function(){this.max=this.high,null!==this.left&&(this.max=Math.max(this.max,this.left.max)),null!==this.right&&(this.max=Math.max(this.max,this.right.max))},n.prototype.getBalance=function(){var t=0;return null!==this.left&&null!==this.right?t=this.left.height-this.right.height:null!==this.left?t=this.left.height+1:null!==this.right&&(t=-(this.right.height+1)),t},n.prototype.isLeftChild=function(){return null!==this.parent&&this.parent.left===this},Object.defineProperty(n.prototype,"left",{get:function(){return this._left},set:function(t){this._left=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}}),Object.defineProperty(n.prototype,"right",{get:function(){return this._right},set:function(t){this._right=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}}),n.prototype.dispose=function(){this.parent=null,this._left=null,this._right=null,this.event=null},e.default=s.default.IntervalTimeline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2);function n(t){return function(e,i){i=this.toSeconds(i),t.apply(this,arguments);var s=this._events.get(i),n=this._events.previousEvent(s),o=this._getTicksUntilEvent(n,i);return s.ticks=Math.max(o,0),this}}s.default.TickSignal=function(t){t=s.default.defaultArg(t,1),s.default.Signal.call(this,{units:s.default.Type.Ticks,value:t}),this._events.memory=1/0,this.cancelScheduledValues(0),this._events.add({type:s.default.Param.AutomationType.SetValue,time:0,value:t})},s.default.extend(s.default.TickSignal,s.default.Signal),s.default.TickSignal.prototype.setValueAtTime=n(s.default.Signal.prototype.setValueAtTime),s.default.TickSignal.prototype.linearRampToValueAtTime=n(s.default.Signal.prototype.linearRampToValueAtTime),s.default.TickSignal.prototype.setTargetAtTime=function(t,e,i){e=this.toSeconds(e),this.setRampPoint(e),t=this._fromUnits(t);for(var s=this._events.get(e),n=Math.round(Math.max(1/i,1)),o=0;o<=n;o++){var a=i*o+e,r=this._exponentialApproach(s.time,s.value,t,i,a);this.linearRampToValueAtTime(this._toUnits(r),a)}return this},s.default.TickSignal.prototype.exponentialRampToValueAtTime=function(t,e){e=this.toSeconds(e),t=this._fromUnits(t);for(var i=this._events.get(e),s=Math.round(Math.max(10*(e-i.time),1)),n=(e-i.time)/s,o=0;o<=s;o++){var a=n*o+i.time,r=this._exponentialInterpolate(i.time,i.value,e,t,a);this.linearRampToValueAtTime(this._toUnits(r),a)}return this},s.default.TickSignal.prototype._getTicksUntilEvent=function(t,e){if(null===t)t={ticks:0,time:0};else if(s.default.isUndef(t.ticks)){var i=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(i,t.time)}var n=this.getValueAtTime(t.time),o=this.getValueAtTime(e);return this._events.get(e).time===e&&this._events.get(e).type===s.default.Param.AutomationType.SetValue&&(o=this.getValueAtTime(e-this.sampleTime)),.5*(e-t.time)*(n+o)+t.ticks},s.default.TickSignal.prototype.getTicksAtTime=function(t){t=this.toSeconds(t);var e=this._events.get(t);return Math.max(this._getTicksUntilEvent(e,t),0)},s.default.TickSignal.prototype.getDurationOfTicks=function(t,e){e=this.toSeconds(e);var i=this.getTicksAtTime(e);return this.getTimeOfTick(i+t)-e},s.default.TickSignal.prototype.getTimeOfTick=function(t){var e=this._events.get(t,"ticks"),i=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&i&&i.type===s.default.Param.AutomationType.Linear&&e.value!==i.value){var n=this.getValueAtTime(e.time),o=(this.getValueAtTime(i.time)-n)/(i.time-e.time),a=Math.sqrt(Math.pow(n,2)-2*o*(e.ticks-t)),r=(-n+a)/o;return(r>0?r:(-n-a)/o)+e.time}return e?0===e.value?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue},s.default.TickSignal.prototype.ticksToTime=function(t,e){return e=this.toSeconds(e),new s.default.Time(this.getDurationOfTicks(t,e))},s.default.TickSignal.prototype.timeToTicks=function(t,e){e=this.toSeconds(e),t=this.toSeconds(t);var i=this.getTicksAtTime(e),n=this.getTicksAtTime(e+t);return new s.default.Ticks(n-i)},e.default=s.default.TickSignal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(57),i(34),i(35),i(20);s.default.Clock=function(){var t=s.default.defaults(arguments,["callback","frequency"],s.default.Clock);s.default.Emitter.call(this),this.callback=t.callback,this._nextTick=0,this._tickSource=new s.default.TickSource(t.frequency),this._lastUpdate=0,this.frequency=this._tickSource.frequency,this._readOnly("frequency"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.setStateAtTime(s.default.State.Stopped,0),this._boundLoop=this._loop.bind(this),this.context.on("tick",this._boundLoop)},s.default.extend(s.default.Clock,s.default.Emitter),s.default.Clock.defaults={callback:s.default.noOp,frequency:1},Object.defineProperty(s.default.Clock.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),s.default.Clock.prototype.start=function(t,e){return this.context.resume(),t=this.toSeconds(t),this._state.getValueAtTime(t)!==s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Started,t),this._tickSource.start(t,e),t<this._lastUpdate&&this.emit("start",t,e)),this},s.default.Clock.prototype.stop=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this},s.default.Clock.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Paused,t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this},Object.defineProperty(s.default.Clock.prototype,"ticks",{get:function(){return Math.ceil(this.getTicksAtTime(this.now()))},set:function(t){this._tickSource.ticks=t}}),Object.defineProperty(s.default.Clock.prototype,"seconds",{get:function(){return this._tickSource.seconds},set:function(t){this._tickSource.seconds=t}}),s.default.Clock.prototype.getSecondsAtTime=function(t){return this._tickSource.getSecondsAtTime(t)},s.default.Clock.prototype.setTicksAtTime=function(t,e){return this._tickSource.setTicksAtTime(t,e),this},s.default.Clock.prototype.getTicksAtTime=function(t){return this._tickSource.getTicksAtTime(t)},s.default.Clock.prototype.nextTickTime=function(t,e){e=this.toSeconds(e);var i=this.getTicksAtTime(e);return this._tickSource.getTimeOfTick(i+t,e)},s.default.Clock.prototype._loop=function(){var t=this._lastUpdate,e=this.now();this._lastUpdate=e,t!==e&&(this._state.forEachBetween(t,e,function(t){switch(t.state){case s.default.State.Started:var e=this._tickSource.getTicksAtTime(t.time);this.emit("start",t.time,e);break;case s.default.State.Stopped:0!==t.time&&this.emit("stop",t.time);break;case s.default.State.Paused:this.emit("pause",t.time)}}.bind(this)),this._tickSource.forEachTickBetween(t,e,function(t,e){this.callback(t,e)}.bind(this)))},s.default.Clock.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},s.default.Clock.prototype.dispose=function(){s.default.Emitter.prototype.dispose.call(this),this.context.off("tick",this._boundLoop),this._writable("frequency"),this._tickSource.dispose(),this._tickSource=null,this.frequency=null,this._boundLoop=null,this._nextTick=1/0,this.callback=null,this._state.dispose(),this._state=null},e.default=s.default.Clock},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(5),i(7);s.default.GreaterThanZero=function(){s.default.SignalBase.call(this),this._thresh=this.output=new s.default.WaveShaper(function(t){return t<=0?0:1},127),this._scale=this.input=new s.default.Multiply(1e4),this._scale.connect(this._thresh)},s.default.extend(s.default.GreaterThanZero,s.default.SignalBase),s.default.GreaterThanZero.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._thresh.dispose(),this._thresh=null,this},e.default=s.default.GreaterThanZero},function(t,e,i){"use strict";i.r(e);var s=i(0);i(84),i(13),i(2);s.default.GreaterThan=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._param=this.input[0]=new s.default.Subtract(t),this.input[1]=this._param.input[1],this._gtz=this.output=new s.default.GreaterThanZero,this._param.connect(this._gtz)},s.default.extend(s.default.GreaterThan,s.default.Signal),s.default.GreaterThan.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._gtz.dispose(),this._gtz=null,this},e.default=s.default.GreaterThan},function(t,e,i){"use strict";i.r(e);var s=i(0);i(47),i(26);s.default.ScaledEnvelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);s.default.Envelope.call(this,t),t=s.default.defaultArg(t,s.default.ScaledEnvelope.defaults),this._exp=this.output=new s.default.Pow(t.exponent),this._scale=this.output=new s.default.Scale(t.min,t.max),this._sig.chain(this._exp,this._scale)},s.default.extend(s.default.ScaledEnvelope,s.default.Envelope),s.default.ScaledEnvelope.defaults={min:0,max:1,exponent:1},Object.defineProperty(s.default.ScaledEnvelope.prototype,"min",{get:function(){return this._scale.min},set:function(t){this._scale.min=t}}),Object.defineProperty(s.default.ScaledEnvelope.prototype,"max",{get:function(){return this._scale.max},set:function(t){this._scale.max=t}}),Object.defineProperty(s.default.ScaledEnvelope.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),s.default.ScaledEnvelope.prototype.dispose=function(){return s.default.Envelope.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._exp.dispose(),this._exp=null,this},e.default=s.default.ScaledEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(30);s.default.Abs=function(){s.default.SignalBase.call(this),this._abs=this.input=this.output=new s.default.WaveShaper(function(t){return Math.abs(t)<.001?0:Math.abs(t)},1024)},s.default.extend(s.default.Abs,s.default.SignalBase),s.default.Abs.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._abs.dispose(),this._abs=null,this},e.default=s.default.Abs},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(1);s.default.Solo=function(){var t=s.default.defaults(arguments,["solo"],s.default.Solo);s.default.AudioNode.call(this),this.input=this.output=new s.default.Gain,this._soloBind=this._soloed.bind(this),this.context.on("solo",this._soloBind),this.solo=t.solo},s.default.extend(s.default.Solo,s.default.AudioNode),s.default.Solo.defaults={solo:!1},Object.defineProperty(s.default.Solo.prototype,"solo",{get:function(){return this._isSoloed()},set:function(t){t?this._addSolo():this._removeSolo(),this.context.emit("solo",this)}}),Object.defineProperty(s.default.Solo.prototype,"muted",{get:function(){return 0===this.input.gain.value}}),s.default.Solo.prototype._addSolo=function(){s.default.isArray(this.context._currentSolo)||(this.context._currentSolo=[]),this._isSoloed()||this.context._currentSolo.push(this)},s.default.Solo.prototype._removeSolo=function(){if(this._isSoloed()){var t=this.context._currentSolo.indexOf(this);this.context._currentSolo.splice(t,1)}},s.default.Solo.prototype._isSoloed=function(){return!!s.default.isArray(this.context._currentSolo)&&(0!==this.context._currentSolo.length&&-1!==this.context._currentSolo.indexOf(this))},s.default.Solo.prototype._noSolos=function(){return!s.default.isArray(this.context._currentSolo)||0===this.context._currentSolo.length},s.default.Solo.prototype._soloed=function(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0},s.default.Solo.prototype.dispose=function(){return this.context.off("solo",this._soloBind),this._removeSolo(),this._soloBind=null,s.default.AudioNode.prototype.dispose.call(this),this},e.default=s.default.Solo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7);s.default.EqualPowerGain=function(){s.default.SignalBase.call(this),this._eqPower=this.input=this.output=new s.default.WaveShaper(function(t){return Math.abs(t)<.001?0:s.default.equalPowerScale(t)}.bind(this),4096)},s.default.extend(s.default.EqualPowerGain,s.default.SignalBase),s.default.EqualPowerGain.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._eqPower.dispose(),this._eqPower=null,this},e.default=s.default.EqualPowerGain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(5),i(2);s.default.Negate=function(){s.default.SignalBase.call(this),this._multiply=this.input=this.output=new s.default.Multiply(-1)},s.default.extend(s.default.Negate,s.default.SignalBase),s.default.Negate.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._multiply.dispose(),this._multiply=null,this},e.default=s.default.Negate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(48),i(27),i(1);s.default.PanVol=function(){var t=s.default.defaults(arguments,["pan","volume"],s.default.PanVol);s.default.AudioNode.call(this),this._panner=this.input=new s.default.Panner(t.pan),this.pan=this._panner.pan,this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,this._readOnly(["pan","volume"])},s.default.extend(s.default.PanVol,s.default.AudioNode),s.default.PanVol.defaults={pan:0,volume:0,mute:!1},Object.defineProperty(s.default.PanVol.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.PanVol.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["pan","volume"]),this._panner.dispose(),this._panner=null,this.pan=null,this._volume.dispose(),this._volume=null,this.volume=null,this},e.default=s.default.PanVol},function(t,e,i){"use strict";var s=i(0);if(s.default.supported){!s.default.global.hasOwnProperty("OfflineAudioContext")&&s.default.global.hasOwnProperty("webkitOfflineAudioContext")&&(s.default.global.OfflineAudioContext=s.default.global.webkitOfflineAudioContext);var n=new OfflineAudioContext(1,1,44100).startRendering();n&&s.default.isFunction(n.then)||(OfflineAudioContext.prototype._native_startRendering=OfflineAudioContext.prototype.startRendering,OfflineAudioContext.prototype.startRendering=function(){return new Promise(function(t){this.oncomplete=function(e){t(e.renderedBuffer)},this._native_startRendering()}.bind(this))})}},function(t,e,i){"use strict";e.a="13.8.25"},function(t,e,i){"use strict";i.r(e);var s=i(0);i(46);s.default.Midi=function(t,e){if(!(this instanceof s.default.Midi))return new s.default.Midi(t,e);s.default.Frequency.call(this,t,e)},s.default.extend(s.default.Midi,s.default.Frequency),s.default.Midi.prototype._defaultUnits="midi",s.default.Midi.prototype._frequencyToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._frequencyToUnits.call(this,t))},s.default.Midi.prototype._ticksToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._ticksToUnits.call(this,t))},s.default.Midi.prototype._beatsToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._beatsToUnits.call(this,t))},s.default.Midi.prototype._secondsToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._secondsToUnits.call(this,t))},s.default.Midi.prototype.toMidi=function(){return this.valueOf()},s.default.Midi.prototype.toFrequency=function(){return s.default.Frequency.mtof(this.toMidi())},s.default.Midi.prototype.transpose=function(t){return new this.constructor(this.toMidi()+t)},e.default=s.default.Midi},function(t,e,i){"use strict";i.r(e);var s=i(0);i(27),i(1);s.default.UserMedia=function(){var t=s.default.defaults(arguments,["volume"],s.default.UserMedia);s.default.AudioNode.call(this),this._mediaStream=null,this._stream=null,this._device=null,this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this.mute=t.mute},s.default.extend(s.default.UserMedia,s.default.AudioNode),s.default.UserMedia.defaults={volume:0,mute:!1},s.default.UserMedia.prototype.open=function(t){return this.state===s.default.State.Started&&this.close(),s.default.UserMedia.enumerateDevices().then(function(e){var i;if(s.default.isNumber(t))i=e[t];else if(!(i=e.find(function(e){return e.label===t||e.deviceId===t}))&&e.length>0)i=e[0];else if(!i&&s.default.isDefined(t))throw new Error("Tone.UserMedia: no matching device: "+t);this._device=i;var n={audio:{echoCancellation:!1,sampleRate:this.context.sampleRate,noiseSuppression:!1,mozNoiseSuppression:!1}};return i&&(n.audio.deviceId=i.deviceId),navigator.mediaDevices.getUserMedia(n).then(function(t){return this._stream||(this._stream=t,this._mediaStream=this.context.createMediaStreamSource(t),s.default.connect(this._mediaStream,this.output)),this}.bind(this))}.bind(this))},s.default.UserMedia.prototype.close=function(){return this._stream&&(this._stream.getAudioTracks().forEach(function(t){t.stop()}),this._stream=null,this._mediaStream.disconnect(),this._mediaStream=null),this._device=null,this},s.default.UserMedia.enumerateDevices=function(){return navigator.mediaDevices.enumerateDevices().then(function(t){return t.filter(function(t){return"audioinput"===t.kind})})},Object.defineProperty(s.default.UserMedia.prototype,"state",{get:function(){return this._stream&&this._stream.active?s.default.State.Started:s.default.State.Stopped}}),Object.defineProperty(s.default.UserMedia.prototype,"deviceId",{get:function(){return this._device?this._device.deviceId:null}}),Object.defineProperty(s.default.UserMedia.prototype,"groupId",{get:function(){return this._device?this._device.groupId:null}}),Object.defineProperty(s.default.UserMedia.prototype,"label",{get:function(){return this._device?this._device.label:null}}),Object.defineProperty(s.default.UserMedia.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.UserMedia.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.close(),this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null,this},Object.defineProperty(s.default.UserMedia,"supported",{get:function(){return s.default.isDefined(navigator.mediaDevices)&&s.default.isFunction(navigator.mediaDevices.getUserMedia)}}),e.default=s.default.UserMedia},function(t,e,i){"use strict";i.r(e);var s=i(0);i(65),i(27),i(1);s.default.Players=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload"],s.default.Players);for(var n in s.default.AudioNode.call(this,i),this._volume=this.output=new s.default.Volume(i.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._volume.output.output.channelCount=2,this._volume.output.output.channelCountMode="explicit",this.mute=i.mute,this._players={},this._loadingCount=0,this._fadeIn=i.fadeIn,this._fadeOut=i.fadeOut,t)this._loadingCount++,this.add(n,t[n],this._bufferLoaded.bind(this,i.onload))},s.default.extend(s.default.Players,s.default.AudioNode),s.default.Players.defaults={volume:0,mute:!1,onload:s.default.noOp,fadeIn:0,fadeOut:0},s.default.Players.prototype._bufferLoaded=function(t){this._loadingCount--,0===this._loadingCount&&t&&t(this)},Object.defineProperty(s.default.Players.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),Object.defineProperty(s.default.Players.prototype,"fadeIn",{get:function(){return this._fadeIn},set:function(t){this._fadeIn=t,this._forEach(function(e){e.fadeIn=t})}}),Object.defineProperty(s.default.Players.prototype,"fadeOut",{get:function(){return this._fadeOut},set:function(t){this._fadeOut=t,this._forEach(function(e){e.fadeOut=t})}}),Object.defineProperty(s.default.Players.prototype,"state",{get:function(){var t=!1;return this._forEach(function(e){t=t||e.state===s.default.State.Started}),t?s.default.State.Started:s.default.State.Stopped}}),s.default.Players.prototype.has=function(t){return this._players.hasOwnProperty(t)},s.default.Players.prototype.get=function(t){if(this.has(t))return this._players[t];throw new Error("Tone.Players: no player named "+t)},s.default.Players.prototype._forEach=function(t){for(var e in this._players)t(this._players[e],e);return this},Object.defineProperty(s.default.Players.prototype,"loaded",{get:function(){var t=!0;return this._forEach(function(e){t=t&&e.loaded}),t}}),s.default.Players.prototype.add=function(t,e,i){return this._players[t]=new s.default.Player(e,i).connect(this.output),this._players[t].fadeIn=this._fadeIn,this._players[t].fadeOut=this._fadeOut,this},s.default.Players.prototype.stopAll=function(t){this._forEach(function(e){e.stop(t)})},s.default.Players.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._volume.dispose(),this._volume=null,this._writable("volume"),this.volume=null,this.output=null,this._forEach(function(t){t.dispose()}),this._players=null,this},e.default=s.default.Players},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(11),i(32);s.default.GrainPlayer=function(){var t=s.default.defaults(arguments,["url","onload"],s.default.GrainPlayer);s.default.Source.call(this,t),this.buffer=new s.default.Buffer(t.url,t.onload.bind(void 0,this)),this._clock=new s.default.Clock(this._tick.bind(this),t.grainSize),this._loopStart=0,this._loopEnd=0,this._activeSources=[],this._playbackRate=t.playbackRate,this._grainSize=t.grainSize,this._overlap=t.overlap,this.detune=t.detune,this.overlap=t.overlap,this.loop=t.loop,this.playbackRate=t.playbackRate,this.grainSize=t.grainSize,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.reverse=t.reverse,this._clock.on("stop",this._onstop.bind(this))},s.default.extend(s.default.GrainPlayer,s.default.Source),s.default.GrainPlayer.defaults={onload:s.default.noOp,overlap:.1,grainSize:.2,playbackRate:1,detune:0,loop:!1,loopStart:0,loopEnd:0,reverse:!1},s.default.GrainPlayer.prototype._start=function(t,e,i){e=s.default.defaultArg(e,0),e=this.toSeconds(e),t=this.toSeconds(t),this._offset=e,this._clock.start(t),i&&this.stop(t+this.toSeconds(i))},s.default.GrainPlayer.prototype._stop=function(t){this._clock.stop(t)},s.default.GrainPlayer.prototype._onstop=function(t){this._activeSources.forEach(function(e){e.fadeOut=0,e.stop(t)})},s.default.GrainPlayer.prototype._tick=function(t){if(!this.loop&&this._offset>this.buffer.duration)this.stop(t);else{var e=this._offset<this._overlap?0:this._overlap,i=new s.default.BufferSource({buffer:this.buffer,fadeIn:e,fadeOut:this._overlap,loop:this.loop,loopStart:this._loopStart,loopEnd:this._loopEnd,playbackRate:s.default.intervalToFrequencyRatio(this.detune/100)}).connect(this.output);i.start(t,this._offset),this._offset+=this.grainSize,i.stop(t+this.grainSize/this.playbackRate),this._activeSources.push(i),i.onended=function(){var t=this._activeSources.indexOf(i);-1!==t&&this._activeSources.splice(t,1)}.bind(this)}},Object.defineProperty(s.default.GrainPlayer.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this.grainSize=this._grainSize}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loopStart",{get:function(){return this._loopStart},set:function(t){this._loopStart=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loopEnd",{get:function(){return this._loopEnd},set:function(t){this._loopEnd=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"reverse",{get:function(){return this.buffer.reverse},set:function(t){this.buffer.reverse=t}}),Object.defineProperty(s.default.GrainPlayer.prototype,"grainSize",{get:function(){return this._grainSize},set:function(t){this._grainSize=this.toSeconds(t),this._clock.frequency.value=this._playbackRate/this._grainSize}}),Object.defineProperty(s.default.GrainPlayer.prototype,"overlap",{get:function(){return this._overlap},set:function(t){this._overlap=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loaded",{get:function(){return this.buffer.loaded}}),s.default.GrainPlayer.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this.buffer.dispose(),this.buffer=null,this._clock.dispose(),this._clock=null,this._activeSources.forEach(function(t){t.dispose()}),this._activeSources=null,this},e.default=s.default.GrainPlayer},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(2),i(45);s.default.TransportTimelineSignal=function(){s.default.Signal.apply(this,arguments),this.output=this._outputSig=new s.default.Signal(this._initialValue),this._lastVal=this.value,this._synced=s.default.Transport.scheduleRepeat(this._onTick.bind(this),"1i"),this._bindAnchorValue=this._anchorValue.bind(this),s.default.Transport.on("start stop pause",this._bindAnchorValue),this._events.memory=1/0},s.default.extend(s.default.TransportTimelineSignal,s.default.Signal),s.default.TransportTimelineSignal.prototype._onTick=function(t){var e=this.getValueAtTime(s.default.Transport.seconds);this._lastVal!==e&&(this._lastVal=e,this._outputSig.linearRampToValueAtTime(e,t))},s.default.TransportTimelineSignal.prototype._anchorValue=function(t){var e=this.getValueAtTime(s.default.Transport.seconds);return this._lastVal=e,this._outputSig.cancelScheduledValues(t),this._outputSig.setValueAtTime(e,t),this},s.default.TransportTimelineSignal.prototype.getValueAtTime=function(t){return t=s.default.TransportTime(t),s.default.Signal.prototype.getValueAtTime.call(this,t)},s.default.TransportTimelineSignal.prototype.setValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.setValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.linearRampToValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.linearRampToValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.exponentialRampToValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.exponentialRampToValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.setTargetAtTime=function(t,e,i){return e=s.default.TransportTime(e),s.default.Signal.prototype.setTargetAtTime.call(this,t,e,i),this},s.default.TransportTimelineSignal.prototype.cancelScheduledValues=function(t){return t=s.default.TransportTime(t),s.default.Signal.prototype.cancelScheduledValues.call(this,t),this},s.default.TransportTimelineSignal.prototype.setValueCurveAtTime=function(t,e,i,n){return e=s.default.TransportTime(e),i=s.default.TransportTime(i),s.default.Signal.prototype.setValueCurveAtTime.call(this,t,e,i,n),this},s.default.TransportTimelineSignal.prototype.cancelAndHoldAtTime=function(t){return s.default.Signal.prototype.cancelAndHoldAtTime.call(this,s.default.TransportTime(t))},s.default.TransportTimelineSignal.prototype.dispose=function(){s.default.Transport.clear(this._synced),s.default.Transport.off("start stop pause",this._syncedCallback),this._events.cancel(0),s.default.Signal.prototype.dispose.call(this),this._outputSig.dispose(),this._outputSig=null},e.default=s.default.TransportTimelineSignal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(5);s.default.Normalize=function(t,e){s.default.SignalBase.call(this),this._inputMin=s.default.defaultArg(t,0),this._inputMax=s.default.defaultArg(e,1),this._sub=this.input=new s.default.Add(0),this._div=this.output=new s.default.Multiply(1),this._sub.connect(this._div),this._setRange()},s.default.extend(s.default.Normalize,s.default.SignalBase),Object.defineProperty(s.default.Normalize.prototype,"min",{get:function(){return this._inputMin},set:function(t){this._inputMin=t,this._setRange()}}),Object.defineProperty(s.default.Normalize.prototype,"max",{get:function(){return this._inputMax},set:function(t){this._inputMax=t,this._setRange()}}),s.default.Normalize.prototype._setRange=function(){this._sub.value=-this._inputMin,this._div.value=1/(this._inputMax-this._inputMin)},s.default.Normalize.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._sub.dispose(),this._sub=null,this._div.dispose(),this._div=null,this},e.default=s.default.Normalize},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(2);s.default.GainToAudio=function(){s.default.SignalBase.call(this),this._norm=this.input=this.output=new s.default.WaveShaper(function(t){return 2*Math.abs(t)-1})},s.default.extend(s.default.GainToAudio,s.default.SignalBase),s.default.GainToAudio.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._norm.dispose(),this._norm=null,this},e.default=s.default.GainToAudio},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(78),i(32);s.default.Sampler=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload","baseUrl"],s.default.Sampler);s.default.Instrument.call(this,i);var n={};for(var o in t)if(s.default.isNote(o)){n[s.default.Frequency(o).toMidi()]=t[o]}else{if(isNaN(parseFloat(o)))throw new Error("Tone.Sampler: url keys must be the note's pitch");n[o]=t[o]}this._buffers=new s.default.Buffers(n,i.onload,i.baseUrl),this._activeSources={},this.attack=i.attack,this.release=i.release,this.curve=i.curve},s.default.extend(s.default.Sampler,s.default.Instrument),s.default.Sampler.defaults={attack:0,release:.1,onload:s.default.noOp,baseUrl:"",curve:"exponential"},s.default.Sampler.prototype._findClosest=function(t){for(var e=0;e<96;){if(this._buffers.has(t+e))return-e;if(this._buffers.has(t-e))return e;e++}throw new Error("No available buffers for note: "+t)},s.default.Sampler.prototype.triggerAttack=function(t,e,i){this.log("triggerAttack",t,e,i),Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++){var o=s.default.Frequency(t[n]).toMidi(),a=this._findClosest(o),r=o-a,l=this._buffers.get(r),u=s.default.intervalToFrequencyRatio(a),d=new s.default.BufferSource({buffer:l,playbackRate:u,fadeIn:this.attack,fadeOut:this.release,curve:this.curve}).connect(this.output);d.start(e,0,l.duration/u,i),s.default.isArray(this._activeSources[o])||(this._activeSources[o]=[]),this._activeSources[o].push(d),d.onended=function(){if(this._activeSources&&this._activeSources[o]){var t=this._activeSources[o].indexOf(d);-1!==t&&this._activeSources[o].splice(t,1)}}.bind(this)}return this},s.default.Sampler.prototype.triggerRelease=function(t,e){this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++){var n=s.default.Frequency(t[i]).toMidi();this._activeSources[n]&&this._activeSources[n].length&&(e=this.toSeconds(e),this._activeSources[n].forEach(function(t){t.stop(e)}),this._activeSources[n]=[])}return this},s.default.Sampler.prototype.releaseAll=function(t){for(var e in t=this.toSeconds(t),this._activeSources)for(var i=this._activeSources[e];i.length;){i.shift().stop(t)}return this},s.default.Sampler.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this},s.default.Sampler.prototype.triggerAttackRelease=function(t,e,i,n){if(i=this.toSeconds(i),this.triggerAttack(t,i,n),s.default.isArray(e)&&s.default.isArray(t))for(var o=0;o<t.length;o++){var a=e[Math.min(o,e.length-1)];this.triggerRelease(t[o],i+this.toSeconds(a))}else this.triggerRelease(t,i+this.toSeconds(e));return this},s.default.Sampler.prototype.add=function(t,e,i){if(s.default.isNote(t)){var n=s.default.Frequency(t).toMidi();this._buffers.add(n,e,i)}else{if(isNaN(parseFloat(t)))throw new Error("Tone.Sampler: note must be the note's pitch. Instead got "+t);this._buffers.add(t,e,i)}},Object.defineProperty(s.default.Sampler.prototype,"loaded",{get:function(){return this._buffers.loaded}}),s.default.Sampler.prototype.dispose=function(){for(var t in s.default.Instrument.prototype.dispose.call(this),this._buffers.dispose(),this._buffers=null,this._activeSources)this._activeSources[t].forEach(function(t){t.dispose()});return this._activeSources=null,this},e.default=s.default.Sampler},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(6);s.default.PolySynth=function(){var t=s.default.defaults(arguments,["polyphony","voice"],s.default.PolySynth);s.default.Instrument.call(this,t),(t=s.default.defaultArg(t,s.default.Instrument.defaults)).polyphony=Math.min(s.default.PolySynth.MAX_POLYPHONY,t.polyphony),this.voices=new Array(t.polyphony),this.assert(t.polyphony>0,"polyphony must be greater than 0"),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._readOnly("detune");for(var e=0;e<t.polyphony;e++){var i=new t.voice(arguments[2],arguments[3]);if(!(i instanceof s.default.Monophonic))throw new Error("Synth constructor must be instance of Tone.Monophonic");this.voices[e]=i,i.index=e,i.connect(this.output),i.hasOwnProperty("detune")&&this.detune.connect(i.detune)}},s.default.extend(s.default.PolySynth,s.default.Instrument),s.default.PolySynth.defaults={polyphony:4,volume:0,detune:0,voice:s.default.Synth},s.default.PolySynth.prototype._getClosestVoice=function(t,e){var i=this.voices.find(function(i){if(Math.abs(i.frequency.getValueAtTime(t)-s.default.Frequency(e))<1e-4&&i.getLevelAtTime(t)>1e-5)return i});return i||this.voices.slice().sort(function(e,i){var s=e.getLevelAtTime(t+this.blockTime),n=i.getLevelAtTime(t+this.blockTime);return s<1e-5&&(s=0),n<1e-5&&(n=0),s-n}.bind(this))[0]},s.default.PolySynth.prototype.triggerAttack=function(t,e,i){return Array.isArray(t)||(t=[t]),e=this.toSeconds(e),t.forEach(function(t){var s=this._getClosestVoice(e,t);s.triggerAttack(t,e,i),this.log("triggerAttack",s.index,t)}.bind(this)),this},s.default.PolySynth.prototype.triggerRelease=function(t,e){return Array.isArray(t)||(t=[t]),e=this.toSeconds(e),t.forEach(function(t){var i=this._getClosestVoice(e,t);this.log("triggerRelease",i.index,t),i.triggerRelease(e)}.bind(this)),this},s.default.PolySynth.prototype.triggerAttackRelease=function(t,e,i,n){if(i=this.toSeconds(i),this.triggerAttack(t,i,n),s.default.isArray(e)&&s.default.isArray(t))for(var o=0;o<t.length;o++){var a=e[Math.min(o,e.length-1)];this.triggerRelease(t[o],i+this.toSeconds(a))}else this.triggerRelease(t,i+this.toSeconds(e));return this},s.default.PolySynth.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this},s.default.PolySynth.prototype.set=function(t,e,i){for(var s=0;s<this.voices.length;s++)this.voices[s].set(t,e,i);return this},s.default.PolySynth.prototype.get=function(t){return this.voices[0].get(t)},s.default.PolySynth.prototype.releaseAll=function(t){return t=this.toSeconds(t),this.voices.forEach(function(e){e.triggerRelease(t)}),this},s.default.PolySynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this.voices.forEach(function(t){t.dispose()}),this._writable("detune"),this.detune.dispose(),this.detune=null,this.voices=null,this},s.default.PolySynth.MAX_POLYPHONY=20,e.default=s.default.PolySynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(39),i(54);s.default.PluckSynth=function(t){t=s.default.defaultArg(t,s.default.PluckSynth.defaults),s.default.Instrument.call(this,t),this._noise=new s.default.Noise("pink"),this.attackNoise=t.attackNoise,this._lfcf=new s.default.LowpassCombFilter({resonance:t.resonance,dampening:t.dampening}),this.resonance=this._lfcf.resonance,this.dampening=this._lfcf.dampening,this._noise.connect(this._lfcf),this._lfcf.connect(this.output),this._readOnly(["resonance","dampening"])},s.default.extend(s.default.PluckSynth,s.default.Instrument),s.default.PluckSynth.defaults={attackNoise:1,dampening:4e3,resonance:.7},s.default.PluckSynth.prototype.triggerAttack=function(t,e){t=this.toFrequency(t),e=this.toSeconds(e);var i=1/t;return this._lfcf.delayTime.setValueAtTime(i,e),this._noise.start(e),this._noise.stop(e+i*this.attackNoise),this},s.default.PluckSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._noise.dispose(),this._lfcf.dispose(),this._noise=null,this._lfcf=null,this._writable(["resonance","dampening"]),this.dampening=null,this.resonance=null,this},e.default=s.default.PluckSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(41),i(39),i(2),i(9),i(21);s.default.NoiseSynth=function(t){t=s.default.defaultArg(t,s.default.NoiseSynth.defaults),s.default.Instrument.call(this,t),this.noise=new s.default.Noise(t.noise),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.noise.chain(this.envelope,this.output),this._readOnly(["noise","envelope"])},s.default.extend(s.default.NoiseSynth,s.default.Instrument),s.default.NoiseSynth.defaults={noise:{type:"white"},envelope:{attack:.005,decay:.1,sustain:0}},s.default.NoiseSynth.prototype.triggerAttack=function(t,e){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.noise.start(t),0===this.envelope.sustain&&this.noise.stop(t+this.envelope.attack+this.envelope.decay),this},s.default.NoiseSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.noise.stop(t+this.envelope.release),this},s.default.NoiseSynth.prototype.sync=function(){return this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0),this},s.default.NoiseSynth.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,i),this.triggerRelease(e+t),this},s.default.NoiseSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._writable(["noise","envelope"]),this.noise.dispose(),this.noise=null,this.envelope.dispose(),this.envelope=null,this},e.default=s.default.NoiseSynth},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(21),i(49),i(9),i(41),i(31),i(3),i(26),i(5),[1,1.483,1.932,2.546,2.63,3.897]);s.default.MetalSynth=function(t){t=s.default.defaultArg(t,s.default.MetalSynth.defaults),s.default.Instrument.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this._oscillators=[],this._freqMultipliers=[],this._amplitue=new s.default.Gain(0).connect(this.output),this._highpass=new s.default.Filter({type:"highpass",Q:-3.0102999566398125}).connect(this._amplitue),this._octaves=t.octaves,this._filterFreqScaler=new s.default.Scale(t.resonance,7e3),this.envelope=new s.default.Envelope({attack:t.envelope.attack,attackCurve:"linear",decay:t.envelope.decay,sustain:0,release:t.envelope.release}).chain(this._filterFreqScaler,this._highpass.frequency),this.envelope.connect(this._amplitue.gain);for(var e=0;e<n.length;e++){var i=new s.default.FMOscillator({type:"square",modulationType:"square",harmonicity:t.harmonicity,modulationIndex:t.modulationIndex});i.connect(this._highpass),this._oscillators[e]=i;var o=new s.default.Multiply(n[e]);this._freqMultipliers[e]=o,this.frequency.chain(o,i.frequency)}this.octaves=t.octaves},s.default.extend(s.default.MetalSynth,s.default.Instrument),s.default.MetalSynth.defaults={frequency:200,envelope:{attack:.001,decay:1.4,release:.2},harmonicity:5.1,modulationIndex:32,resonance:4e3,octaves:1.5},s.default.MetalSynth.prototype.triggerAttack=function(t,e){return t=this.toSeconds(t),e=s.default.defaultArg(e,1),this.envelope.triggerAttack(t,e),this._oscillators.forEach(function(e){e.start(t)}),0===this.envelope.sustain&&this._oscillators.forEach(function(e){e.stop(t+this.envelope.attack+this.envelope.decay)}.bind(this)),this},s.default.MetalSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this._oscillators.forEach(function(e){e.stop(t+this.envelope.release)}.bind(this)),this},s.default.MetalSynth.prototype.sync=function(){return this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0),this},s.default.MetalSynth.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,i),this.triggerRelease(e+t),this},Object.defineProperty(s.default.MetalSynth.prototype,"modulationIndex",{get:function(){return this._oscillators[0].modulationIndex.value},set:function(t){for(var e=0;e<this._oscillators.length;e++)this._oscillators[e].modulationIndex.value=t}}),Object.defineProperty(s.default.MetalSynth.prototype,"harmonicity",{get:function(){return this._oscillators[0].harmonicity.value},set:function(t){for(var e=0;e<this._oscillators.length;e++)this._oscillators[e].harmonicity.value=t}}),Object.defineProperty(s.default.MetalSynth.prototype,"resonance",{get:function(){return this._filterFreqScaler.min},set:function(t){this._filterFreqScaler.min=t,this.octaves=this._octaves}}),Object.defineProperty(s.default.MetalSynth.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._filterFreqScaler.max=this._filterFreqScaler.min*Math.pow(2,t)}}),s.default.MetalSynth.prototype.dispose=function(){s.default.Instrument.prototype.dispose.call(this);for(var t=0;t<this._oscillators.length;t++)this._oscillators[t].dispose(),this._freqMultipliers[t].dispose();this._oscillators=null,this._freqMultipliers=null,this.frequency.dispose(),this.frequency=null,this._filterFreqScaler.dispose(),this._filterFreqScaler=null,this._amplitue.dispose(),this._amplitue=null,this.envelope.dispose(),this.envelope=null,this._highpass.dispose(),this._highpass=null},e.default=s.default.MetalSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(37),i(21),i(31);s.default.MembraneSynth=function(t){t=s.default.defaultArg(t,s.default.MembraneSynth.defaults),s.default.Instrument.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.octaves=t.octaves,this.pitchDecay=t.pitchDecay,this.oscillator.chain(this.envelope,this.output),this._readOnly(["oscillator","envelope"])},s.default.extend(s.default.MembraneSynth,s.default.Instrument),s.default.MembraneSynth.defaults={pitchDecay:.05,octaves:10,oscillator:{type:"sine"},envelope:{attack:.001,decay:.4,sustain:.01,release:1.4,attackCurve:"exponential"}},s.default.MembraneSynth.prototype.triggerAttack=function(t,e,i){e=this.toSeconds(e);var s=(t=this.toFrequency(t))*this.octaves;return this.oscillator.frequency.setValueAtTime(s,e),this.oscillator.frequency.exponentialRampToValueAtTime(t,e+this.toSeconds(this.pitchDecay)),this.envelope.triggerAttack(e,i),this.oscillator.start(e),0===this.envelope.sustain&&this.oscillator.stop(e+this.envelope.attack+this.envelope.decay),this},s.default.MembraneSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.oscillator.stop(t+this.envelope.release),this},s.default.MembraneSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._writable(["oscillator","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this},e.default=s.default.MembraneSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(2),i(5),i(25);s.default.FMSynth=function(t){t=s.default.defaultArg(t,s.default.FMSynth.defaults),s.default.Monophonic.call(this,t),this._carrier=new s.default.Synth(t.carrier),this._carrier.volume.value=-10,this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope.set(t.envelope),this._modulator=new s.default.Synth(t.modulator),this._modulator.volume.value=-10,this.modulation=this._modulator.oscillator.set(t.modulation),this.modulationEnvelope=this._modulator.envelope.set(t.modulationEnvelope),this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this.modulationIndex=new s.default.Multiply(t.modulationIndex),this.modulationIndex.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this._readOnly(["frequency","harmonicity","modulationIndex","oscillator","envelope","modulation","modulationEnvelope","detune"])},s.default.extend(s.default.FMSynth,s.default.Monophonic),s.default.FMSynth.defaults={harmonicity:3,modulationIndex:10,detune:0,oscillator:{type:"sine"},envelope:{attack:.01,decay:.01,sustain:1,release:.5},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:0,sustain:1,release:.5}},s.default.FMSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t),this},s.default.FMSynth.prototype._triggerEnvelopeRelease=function(t){return t=this.toSeconds(t),this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this},s.default.FMSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["frequency","harmonicity","modulationIndex","oscillator","envelope","modulation","modulationEnvelope","detune"]),this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this.modulationIndex.dispose(),this.modulationIndex=null,this.harmonicity.dispose(),this.harmonicity=null,this._modulationNode.dispose(),this._modulationNode=null,this.oscillator=null,this.envelope=null,this.modulationEnvelope=null,this.modulation=null,this},e.default=s.default.FMSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(66),i(12),i(2),i(5),i(25),i(14);s.default.DuoSynth=function(t){t=s.default.defaultArg(t,s.default.DuoSynth.defaults),s.default.Monophonic.call(this,t),this.voice0=new s.default.MonoSynth(t.voice0),this.voice0.volume.value=-10,this.voice1=new s.default.MonoSynth(t.voice1),this.voice1.volume.value=-10,this._vibrato=new s.default.LFO(t.vibratoRate,-50,50),this._vibrato.start(),this.vibratoRate=this._vibrato.frequency,this._vibratoGain=new s.default.Gain(t.vibratoAmount,s.default.Type.Positive),this.vibratoAmount=this._vibratoGain.gain,this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this.frequency.connect(this.voice0.frequency),this.frequency.chain(this.harmonicity,this.voice1.frequency),this._vibrato.connect(this._vibratoGain),this._vibratoGain.fan(this.voice0.detune,this.voice1.detune),this.voice0.connect(this.output),this.voice1.connect(this.output),this._readOnly(["voice0","voice1","frequency","vibratoAmount","vibratoRate"])},s.default.extend(s.default.DuoSynth,s.default.Monophonic),s.default.DuoSynth.defaults={vibratoAmount:.5,vibratoRate:5,harmonicity:1.5,voice0:{volume:-10,portamento:0,oscillator:{type:"sine"},filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}},voice1:{volume:-10,portamento:0,oscillator:{type:"sine"},filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}}},s.default.DuoSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this.voice0._triggerEnvelopeAttack(t,e),this.voice1._triggerEnvelopeAttack(t,e),this},s.default.DuoSynth.prototype._triggerEnvelopeRelease=function(t){return this.voice0._triggerEnvelopeRelease(t),this.voice1._triggerEnvelopeRelease(t),this},s.default.DuoSynth.prototype.getLevelAtTime=function(t){return(this.voice0.getLevelAtTime(t)+this.voice1.getLevelAtTime(t))/2},s.default.DuoSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["voice0","voice1","frequency","vibratoAmount","vibratoRate"]),this.voice0.dispose(),this.voice0=null,this.voice1.dispose(),this.voice1=null,this.frequency.dispose(),this.frequency=null,this._vibratoGain.dispose(),this._vibratoGain=null,this._vibrato=null,this.harmonicity.dispose(),this.harmonicity=null,this.vibratoAmount.dispose(),this.vibratoAmount=null,this.vibratoRate=null,this},e.default=s.default.DuoSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(2),i(5),i(25),i(22),i(3);s.default.AMSynth=function(t){t=s.default.defaultArg(t,s.default.AMSynth.defaults),s.default.Monophonic.call(this,t),this._carrier=new s.default.Synth,this._carrier.volume.value=-10,this.oscillator=this._carrier.oscillator.set(t.oscillator),this.envelope=this._carrier.envelope.set(t.envelope),this._modulator=new s.default.Synth,this._modulator.volume.value=-10,this.modulation=this._modulator.oscillator.set(t.modulation),this.modulationEnvelope=this._modulator.envelope.set(t.modulationEnvelope),this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationScale=new s.default.AudioToGain,this._modulationNode=new s.default.Gain,this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),this._readOnly(["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"])},s.default.extend(s.default.AMSynth,s.default.Monophonic),s.default.AMSynth.defaults={harmonicity:3,detune:0,oscillator:{type:"sine"},envelope:{attack:.01,decay:.01,sustain:1,release:.5},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:0,sustain:1,release:.5}},s.default.AMSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t),this},s.default.AMSynth.prototype._triggerEnvelopeRelease=function(t){return this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this},s.default.AMSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"]),this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._modulationScale.dispose(),this._modulationScale=null,this._modulationNode.dispose(),this._modulationNode=null,this.oscillator=null,this.envelope=null,this.modulationEnvelope=null,this.modulation=null,this},e.default=s.default.AMSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(70),i(16);s.default.Sequence=function(){var t=s.default.defaults(arguments,["callback","events","subdivision"],s.default.Sequence),e=t.events;if(delete t.events,s.default.Part.call(this,t),this._subdivision=this.toTicks(t.subdivision),s.default.isUndef(t.loopEnd)&&s.default.isDefined(e)&&(this._loopEnd=e.length*this._subdivision),this._loop=!0,s.default.isDefined(e))for(var i=0;i<e.length;i++)this.add(i,e[i])},s.default.extend(s.default.Sequence,s.default.Part),s.default.Sequence.defaults={subdivision:"4n"},Object.defineProperty(s.default.Sequence.prototype,"subdivision",{get:function(){return s.default.Ticks(this._subdivision).toSeconds()}}),s.default.Sequence.prototype.at=function(t,e){return s.default.isArray(e)&&this.remove(t),s.default.Part.prototype.at.call(this,this._indexTime(t),e)},s.default.Sequence.prototype.add=function(t,e){if(null===e)return this;if(s.default.isArray(e)){var i=Math.round(this._subdivision/e.length);e=new s.default.Sequence(this._tick.bind(this),e,s.default.Ticks(i))}return s.default.Part.prototype.add.call(this,this._indexTime(t),e),this},s.default.Sequence.prototype.remove=function(t,e){return s.default.Part.prototype.remove.call(this,this._indexTime(t),e),this},s.default.Sequence.prototype._indexTime=function(t){return t instanceof s.default.TransportTime?t:s.default.Ticks(t*this._subdivision+this.startOffset).toSeconds()},s.default.Sequence.prototype.dispose=function(){return s.default.Part.prototype.dispose.call(this),this},e.default=s.default.Sequence},function(t,e,i){"use strict";i.r(e);var s=i(0);i(71),i(79);s.default.Pattern=function(){var t=s.default.defaults(arguments,["callback","values","pattern"],s.default.Pattern);s.default.Loop.call(this,t),this._pattern=new s.default.CtrlPattern({values:t.values,type:t.pattern,index:t.index})},s.default.extend(s.default.Pattern,s.default.Loop),s.default.Pattern.defaults={pattern:s.default.CtrlPattern.Type.Up,callback:s.default.noOp,values:[]},s.default.Pattern.prototype._tick=function(t){this.callback(t,this._pattern.value),this._pattern.next()},Object.defineProperty(s.default.Pattern.prototype,"index",{get:function(){return this._pattern.index},set:function(t){this._pattern.index=t}}),Object.defineProperty(s.default.Pattern.prototype,"values",{get:function(){return this._pattern.values},set:function(t){this._pattern.values=t}}),Object.defineProperty(s.default.Pattern.prototype,"value",{get:function(){return this._pattern.value}}),Object.defineProperty(s.default.Pattern.prototype,"pattern",{get:function(){return this._pattern.type},set:function(t){this._pattern.type=t}}),s.default.Pattern.prototype.dispose=function(){s.default.Loop.prototype.dispose.call(this),this._pattern.dispose(),this._pattern=null},e.default=s.default.Pattern},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(18),i(12);s.default.Vibrato=function(){var t=s.default.defaults(arguments,["frequency","depth"],s.default.Vibrato);s.default.Effect.call(this,t),this._delayNode=new s.default.Delay(0,t.maxDelay),this._lfo=new s.default.LFO({type:t.type,min:0,max:t.maxDelay,frequency:t.frequency,phase:-90}).start().connect(this._delayNode.delayTime),this.frequency=this._lfo.frequency,this.depth=this._lfo.amplitude,this.depth.value=t.depth,this._readOnly(["frequency","depth"]),this.effectSend.chain(this._delayNode,this.effectReturn)},s.default.extend(s.default.Vibrato,s.default.Effect),s.default.Vibrato.defaults={maxDelay:.005,frequency:5,depth:.1,type:"sine"},Object.defineProperty(s.default.Vibrato.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),s.default.Vibrato.prototype.dispose=function(){s.default.Effect.prototype.dispose.call(this),this._delayNode.dispose(),this._delayNode=null,this._lfo.dispose(),this._lfo=null,this._writable(["frequency","depth"]),this.frequency=null,this.depth=null},e.default=s.default.Vibrato},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(15);s.default.Tremolo=function(){var t=s.default.defaults(arguments,["frequency","depth"],s.default.Tremolo);s.default.StereoEffect.call(this,t),this._lfoL=new s.default.LFO({phase:t.spread,min:1,max:0}),this._lfoR=new s.default.LFO({phase:t.spread,min:1,max:0}),this._amplitudeL=new s.default.Gain,this._amplitudeR=new s.default.Gain,this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.depth=new s.default.Signal(t.depth,s.default.Type.NormalRange),this._readOnly(["frequency","depth"]),this.effectSendL.chain(this._amplitudeL,this.effectReturnL),this.effectSendR.chain(this._amplitudeR,this.effectReturnR),this._lfoL.connect(this._amplitudeL.gain),this._lfoR.connect(this._amplitudeR.gain),this.frequency.fan(this._lfoL.frequency,this._lfoR.frequency),this.depth.fan(this._lfoR.amplitude,this._lfoL.amplitude),this.type=t.type,this.spread=t.spread},s.default.extend(s.default.Tremolo,s.default.StereoEffect),s.default.Tremolo.defaults={frequency:10,type:"sine",depth:.5,spread:180},s.default.Tremolo.prototype.start=function(t){return this._lfoL.start(t),this._lfoR.start(t),this},s.default.Tremolo.prototype.stop=function(t){return this._lfoL.stop(t),this._lfoR.stop(t),this},s.default.Tremolo.prototype.sync=function(t){return this._lfoL.sync(t),this._lfoR.sync(t),s.default.Transport.syncSignal(this.frequency),this},s.default.Tremolo.prototype.unsync=function(){return this._lfoL.unsync(),this._lfoR.unsync(),s.default.Transport.unsyncSignal(this.frequency),this},Object.defineProperty(s.default.Tremolo.prototype,"type",{get:function(){return this._lfoL.type},set:function(t){this._lfoL.type=t,this._lfoR.type=t}}),Object.defineProperty(s.default.Tremolo.prototype,"spread",{get:function(){return this._lfoR.phase-this._lfoL.phase},set:function(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}}),s.default.Tremolo.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["frequency","depth"]),this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null,this._amplitudeL.dispose(),this._amplitudeL=null,this._amplitudeR.dispose(),this._amplitudeR=null,this.frequency=null,this.depth=null,this},e.default=s.default.Tremolo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(73),i(2),i(5),i(13);s.default.StereoWidener=function(){var t=s.default.defaults(arguments,["width"],s.default.StereoWidener);s.default.MidSideEffect.call(this,t),this.width=new s.default.Signal(t.width,s.default.Type.NormalRange),this._readOnly(["width"]),this._twoTimesWidthMid=new s.default.Multiply(2),this._twoTimesWidthSide=new s.default.Multiply(2),this._midMult=new s.default.Multiply,this._twoTimesWidthMid.connect(this._midMult,0,1),this.midSend.chain(this._midMult,this.midReturn),this._oneMinusWidth=new s.default.Subtract,this._oneMinusWidth.connect(this._twoTimesWidthMid),s.default.connect(this.context.getConstant(1),this._oneMinusWidth,0,0),this.width.connect(this._oneMinusWidth,0,1),this._sideMult=new s.default.Multiply,this.width.connect(this._twoTimesWidthSide),this._twoTimesWidthSide.connect(this._sideMult,0,1),this.sideSend.chain(this._sideMult,this.sideReturn)},s.default.extend(s.default.StereoWidener,s.default.MidSideEffect),s.default.StereoWidener.defaults={width:.5},s.default.StereoWidener.prototype.dispose=function(){return s.default.MidSideEffect.prototype.dispose.call(this),this._writable(["width"]),this.width.dispose(),this.width=null,this._midMult.dispose(),this._midMult=null,this._sideMult.dispose(),this._sideMult=null,this._twoTimesWidthMid.dispose(),this._twoTimesWidthMid=null,this._twoTimesWidthSide.dispose(),this._twoTimesWidthSide=null,this._oneMinusWidth.dispose(),this._oneMinusWidth=null,this},e.default=s.default.StereoWidener},function(t,e,i){"use strict";i.r(e);var s=i(0);i(15),i(33),i(3);s.default.StereoFeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.StereoEffect.call(this,t),this.feedback=new s.default.Signal(t.feedback,s.default.Type.NormalRange),this._feedbackL=new s.default.Gain,this._feedbackR=new s.default.Gain,this.effectReturnL.chain(this._feedbackL,this.effectSendL),this.effectReturnR.chain(this._feedbackR,this.effectSendR),this.feedback.fan(this._feedbackL.gain,this._feedbackR.gain),this._readOnly(["feedback"])},s.default.extend(s.default.StereoFeedbackEffect,s.default.StereoEffect),s.default.StereoFeedbackEffect.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["feedback"]),this.feedback.dispose(),this.feedback=null,this._feedbackL.dispose(),this._feedbackL=null,this._feedbackR.dispose(),this._feedbackR=null,this},e.default=s.default.StereoFeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(77),i(9),i(10),i(39),i(3),i(74);s.default.Reverb=function(){var t=s.default.defaults(arguments,["decay"],s.default.Reverb);s.default.Effect.call(this,t),this._convolver=this.context.createConvolver(),this.decay=t.decay,this.preDelay=t.preDelay,this.connectEffect(this._convolver)},s.default.extend(s.default.Reverb,s.default.Effect),s.default.Reverb.defaults={decay:1.5,preDelay:.01},s.default.Reverb.prototype.generate=function(){return s.default.Offline(function(){var t=new s.default.Noise,e=new s.default.Noise,i=new s.default.Merge;t.connect(i.left),e.connect(i.right);var n=(new s.default.Gain).toMaster();i.connect(n),t.start(0),e.start(0),n.gain.setValueAtTime(0,0),n.gain.setValueAtTime(1,this.preDelay),n.gain.exponentialApproachValueAtTime(0,this.preDelay,this.decay+this.preDelay)}.bind(this),this.decay+this.preDelay).then(function(t){return this._convolver.buffer=t.get(),this}.bind(this))},s.default.Reverb.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._convolver.disconnect(),this._convolver=null,this},e.default=s.default.Reverb},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(23),i(2),i(33),i(18);s.default.PitchShift=function(){var t=s.default.defaults(arguments,["pitch"],s.default.PitchShift);s.default.FeedbackEffect.call(this,t),this._frequency=new s.default.Signal(0),this._delayA=new s.default.Delay(0,1),this._lfoA=new s.default.LFO({min:0,max:.1,type:"sawtooth"}).connect(this._delayA.delayTime),this._delayB=new s.default.Delay(0,1),this._lfoB=new s.default.LFO({min:0,max:.1,type:"sawtooth",phase:180}).connect(this._delayB.delayTime),this._crossFade=new s.default.CrossFade,this._crossFadeLFO=new s.default.LFO({min:0,max:1,type:"triangle",phase:90}).connect(this._crossFade.fade),this._feedbackDelay=new s.default.Delay(t.delayTime),this.delayTime=this._feedbackDelay.delayTime,this._readOnly("delayTime"),this._pitch=t.pitch,this._windowSize=t.windowSize,this._delayA.connect(this._crossFade.a),this._delayB.connect(this._crossFade.b),this._frequency.fan(this._lfoA.frequency,this._lfoB.frequency,this._crossFadeLFO.frequency),this.effectSend.fan(this._delayA,this._delayB),this._crossFade.chain(this._feedbackDelay,this.effectReturn);var e=this.now();this._lfoA.start(e),this._lfoB.start(e),this._crossFadeLFO.start(e),this.windowSize=this._windowSize},s.default.extend(s.default.PitchShift,s.default.FeedbackEffect),s.default.PitchShift.defaults={pitch:0,windowSize:.1,delayTime:0,feedback:0},Object.defineProperty(s.default.PitchShift.prototype,"pitch",{get:function(){return this._pitch},set:function(t){this._pitch=t;var e=0;t<0?(this._lfoA.min=0,this._lfoA.max=this._windowSize,this._lfoB.min=0,this._lfoB.max=this._windowSize,e=s.default.intervalToFrequencyRatio(t-1)+1):(this._lfoA.min=this._windowSize,this._lfoA.max=0,this._lfoB.min=this._windowSize,this._lfoB.max=0,e=s.default.intervalToFrequencyRatio(t)-1),this._frequency.value=e*(1.2/this._windowSize)}}),Object.defineProperty(s.default.PitchShift.prototype,"windowSize",{get:function(){return this._windowSize},set:function(t){this._windowSize=this.toSeconds(t),this.pitch=this._pitch}}),s.default.PitchShift.prototype.dispose=function(){return s.default.FeedbackEffect.prototype.dispose.call(this),this._frequency.dispose(),this._frequency=null,this._delayA.disconnect(),this._delayA=null,this._delayB.disconnect(),this._delayB=null,this._lfoA.dispose(),this._lfoA=null,this._lfoB.dispose(),this._lfoB=null,this._crossFade.dispose(),this._crossFade=null,this._crossFadeLFO.dispose(),this._crossFadeLFO=null,this._writable("delayTime"),this._feedbackDelay.dispose(),this._feedbackDelay=null,this.delayTime=null,this},e.default=s.default.PitchShift},function(t,e,i){"use strict";i.r(e);var s=i(0);i(72),i(2),i(18);s.default.PingPongDelay=function(){var t=s.default.defaults(arguments,["delayTime","feedback"],s.default.PingPongDelay);s.default.StereoXFeedbackEffect.call(this,t),this._leftDelay=new s.default.Delay(0,t.maxDelayTime),this._rightDelay=new s.default.Delay(0,t.maxDelayTime),this._rightPreDelay=new s.default.Delay(0,t.maxDelayTime),this.delayTime=new s.default.Signal(t.delayTime,s.default.Type.Time),this.effectSendL.chain(this._leftDelay,this.effectReturnL),this.effectSendR.chain(this._rightPreDelay,this._rightDelay,this.effectReturnR),this.delayTime.fan(this._leftDelay.delayTime,this._rightDelay.delayTime,this._rightPreDelay.delayTime),this._feedbackLR.disconnect(),this._feedbackLR.connect(this._rightDelay),this._readOnly(["delayTime"])},s.default.extend(s.default.PingPongDelay,s.default.StereoXFeedbackEffect),s.default.PingPongDelay.defaults={delayTime:.25,maxDelayTime:1},s.default.PingPongDelay.prototype.dispose=function(){return s.default.StereoXFeedbackEffect.prototype.dispose.call(this),this._leftDelay.dispose(),this._leftDelay=null,this._rightDelay.dispose(),this._rightDelay=null,this._rightPreDelay.dispose(),this._rightPreDelay=null,this._writable(["delayTime"]),this.delayTime.dispose(),this.delayTime=null,this},e.default=s.default.PingPongDelay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(9),i(15);s.default.Phaser=function(){var t=s.default.defaults(arguments,["frequency","octaves","baseFrequency"],s.default.Phaser);s.default.StereoEffect.call(this,t),this._lfoL=new s.default.LFO(t.frequency,0,1),this._lfoR=new s.default.LFO(t.frequency,0,1),this._lfoR.phase=180,this._baseFrequency=t.baseFrequency,this._octaves=t.octaves,this.Q=new s.default.Signal(t.Q,s.default.Type.Positive),this._filtersL=this._makeFilters(t.stages,this._lfoL,this.Q),this._filtersR=this._makeFilters(t.stages,this._lfoR,this.Q),this.frequency=this._lfoL.frequency,this.frequency.value=t.frequency,this.effectSendL.connect(this._filtersL[0]),this.effectSendR.connect(this._filtersR[0]),s.default.connect(this._filtersL[t.stages-1],this.effectReturnL),s.default.connect(this._filtersR[t.stages-1],this.effectReturnR),this._lfoL.frequency.connect(this._lfoR.frequency),this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this._lfoL.start(),this._lfoR.start(),this._readOnly(["frequency","Q"])},s.default.extend(s.default.Phaser,s.default.StereoEffect),s.default.Phaser.defaults={frequency:.5,octaves:3,stages:10,Q:10,baseFrequency:350},s.default.Phaser.prototype._makeFilters=function(t,e,i){for(var n=new Array(t),o=0;o<t;o++){var a=this.context.createBiquadFilter();a.type="allpass",i.connect(a.Q),e.connect(a.frequency),n[o]=a}return s.default.connectSeries.apply(s.default,n),n},Object.defineProperty(s.default.Phaser.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t;var e=this._baseFrequency*Math.pow(2,t);this._lfoL.max=e,this._lfoR.max=e}}),Object.defineProperty(s.default.Phaser.prototype,"baseFrequency",{get:function(){return this._baseFrequency},set:function(t){this._baseFrequency=t,this._lfoL.min=t,this._lfoR.min=t,this.octaves=this._octaves}}),s.default.Phaser.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this),this._writable(["frequency","Q"]),this.Q.dispose(),this.Q=null,this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null;for(var t=0;t<this._filtersL.length;t++)this._filtersL[t].disconnect(),this._filtersL[t]=null;this._filtersL=null;for(var e=0;e<this._filtersR.length;e++)this._filtersR[e].disconnect(),this._filtersR[e]=null;return this._filtersR=null,this.frequency=null,this},e.default=s.default.Phaser},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(59),i(15),i(26),[.06748,.06404,.08212,.09004]),o=[.773,.802,.753,.733],a=[347,113,37];s.default.JCReverb=function(){var t=s.default.defaults(arguments,["roomSize"],s.default.JCReverb);s.default.StereoEffect.call(this,t),this.roomSize=new s.default.Signal(t.roomSize,s.default.Type.NormalRange),this._scaleRoomSize=new s.default.Scale(-.733,.197),this._allpassFilters=[],this._feedbackCombFilters=[];for(var e=0;e<a.length;e++){var i=this.context.createBiquadFilter();i.type="allpass",i.frequency.value=a[e],this._allpassFilters.push(i)}for(var r=0;r<n.length;r++){var l=new s.default.FeedbackCombFilter(n[r],.1);this._scaleRoomSize.connect(l.resonance),l.resonance.value=o[r],s.default.connect(this._allpassFilters[this._allpassFilters.length-1],l),r<n.length/2?l.connect(this.effectReturnL):l.connect(this.effectReturnR),this._feedbackCombFilters.push(l)}this.roomSize.connect(this._scaleRoomSize),s.default.connectSeries.apply(s.default,this._allpassFilters),this.effectSendL.connect(this._allpassFilters[0]),this.effectSendR.connect(this._allpassFilters[0]),this._readOnly(["roomSize"])},s.default.extend(s.default.JCReverb,s.default.StereoEffect),s.default.JCReverb.defaults={roomSize:.5},s.default.JCReverb.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this);for(var t=0;t<this._allpassFilters.length;t++)this._allpassFilters[t].disconnect(),this._allpassFilters[t]=null;this._allpassFilters=null;for(var e=0;e<this._feedbackCombFilters.length;e++)this._feedbackCombFilters[e].dispose(),this._feedbackCombFilters[e]=null;return this._feedbackCombFilters=null,this._writable(["roomSize"]),this.roomSize.dispose(),this.roomSize=null,this._scaleRoomSize.dispose(),this._scaleRoomSize=null,this},e.default=s.default.JCReverb},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(54),i(15),i(2),i(19),i(10),i(42),[1557/44100,1617/44100,1491/44100,1422/44100,1277/44100,1356/44100,1188/44100,1116/44100]),o=[225,556,441,341];s.default.Freeverb=function(){var t=s.default.defaults(arguments,["roomSize","dampening"],s.default.Freeverb);s.default.StereoEffect.call(this,t),this.roomSize=new s.default.Signal(t.roomSize,s.default.Type.NormalRange),this.dampening=new s.default.Signal(t.dampening,s.default.Type.Frequency),this._combFilters=[],this._allpassFiltersL=[],this._allpassFiltersR=[];for(var e=0;e<o.length;e++){var i=this.context.createBiquadFilter();i.type="allpass",i.frequency.value=o[e],this._allpassFiltersL.push(i)}for(var a=0;a<o.length;a++){var r=this.context.createBiquadFilter();r.type="allpass",r.frequency.value=o[a],this._allpassFiltersR.push(r)}for(var l=0;l<n.length;l++){var u=new s.default.LowpassCombFilter(n[l]);l<n.length/2?this.effectSendL.chain(u,this._allpassFiltersL[0]):this.effectSendR.chain(u,this._allpassFiltersR[0]),this.roomSize.connect(u.resonance),this.dampening.connect(u.dampening),this._combFilters.push(u)}s.default.connectSeries.apply(s.default,this._allpassFiltersL),s.default.connectSeries.apply(s.default,this._allpassFiltersR),s.default.connect(this._allpassFiltersL[this._allpassFiltersL.length-1],this.effectReturnL),s.default.connect(this._allpassFiltersR[this._allpassFiltersR.length-1],this.effectReturnR),this._readOnly(["roomSize","dampening"])},s.default.extend(s.default.Freeverb,s.default.StereoEffect),s.default.Freeverb.defaults={roomSize:.7,dampening:3e3},s.default.Freeverb.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this);for(var t=0;t<this._allpassFiltersL.length;t++)this._allpassFiltersL[t].disconnect(),this._allpassFiltersL[t]=null;this._allpassFiltersL=null;for(var e=0;e<this._allpassFiltersR.length;e++)this._allpassFiltersR[e].disconnect(),this._allpassFiltersR[e]=null;this._allpassFiltersR=null;for(var i=0;i<this._combFilters.length;i++)this._combFilters[i].dispose(),this._combFilters[i]=null;return this._combFilters=null,this._writable(["roomSize","dampening"]),this.roomSize.dispose(),this.roomSize=null,this.dampening.dispose(),this.dampening=null,this},e.default=s.default.Freeverb},function(t,e,i){"use strict";i.r(e);var s=i(0);i(33),i(2),i(18);s.default.FeedbackDelay=function(){var t=s.default.defaults(arguments,["delayTime","feedback"],s.default.FeedbackDelay);s.default.FeedbackEffect.call(this,t),this._delayNode=new s.default.Delay(t.delayTime,t.maxDelay),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),this._readOnly(["delayTime"])},s.default.extend(s.default.FeedbackDelay,s.default.FeedbackEffect),s.default.FeedbackDelay.defaults={delayTime:.25,maxDelay:1},s.default.FeedbackDelay.prototype.dispose=function(){return s.default.FeedbackEffect.prototype.dispose.call(this),this._delayNode.dispose(),this._delayNode=null,this._writable(["delayTime"]),this.delayTime=null,this},e.default=s.default.FeedbackDelay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(7);s.default.Distortion=function(){var t=s.default.defaults(arguments,["distortion"],s.default.Distortion);s.default.Effect.call(this,t),this._shaper=new s.default.WaveShaper(4096),this._distortion=t.distortion,this.connectEffect(this._shaper),this.distortion=t.distortion,this.oversample=t.oversample},s.default.extend(s.default.Distortion,s.default.Effect),s.default.Distortion.defaults={distortion:.4,oversample:"none"},Object.defineProperty(s.default.Distortion.prototype,"distortion",{get:function(){return this._distortion},set:function(t){this._distortion=t;var e=100*t,i=Math.PI/180;this._shaper.setMap(function(t){return Math.abs(t)<.001?0:(3+e)*t*20*i/(Math.PI+e*Math.abs(t))})}}),Object.defineProperty(s.default.Distortion.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){this._shaper.oversample=t}}),s.default.Distortion.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this},e.default=s.default.Distortion},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(15),i(18);s.default.Chorus=function(){var t=s.default.defaults(arguments,["frequency","delayTime","depth"],s.default.Chorus);s.default.StereoEffect.call(this,t),this._depth=t.depth,this._delayTime=t.delayTime/1e3,this._lfoL=new s.default.LFO({frequency:t.frequency,min:0,max:1}),this._lfoR=new s.default.LFO({frequency:t.frequency,min:0,max:1,phase:180}),this._delayNodeL=new s.default.Delay,this._delayNodeR=new s.default.Delay,this.frequency=this._lfoL.frequency,this.effectSendL.chain(this._delayNodeL,this.effectReturnL),this.effectSendR.chain(this._delayNodeR,this.effectReturnR),this.effectSendL.connect(this.effectReturnL),this.effectSendR.connect(this.effectReturnR),this._lfoL.connect(this._delayNodeL.delayTime),this._lfoR.connect(this._delayNodeR.delayTime),this._lfoL.start(),this._lfoR.start(),this._lfoL.frequency.connect(this._lfoR.frequency),this.depth=this._depth,this.frequency.value=t.frequency,this.type=t.type,this._readOnly(["frequency"]),this.spread=t.spread},s.default.extend(s.default.Chorus,s.default.StereoEffect),s.default.Chorus.defaults={frequency:1.5,delayTime:3.5,depth:.7,type:"sine",spread:180},Object.defineProperty(s.default.Chorus.prototype,"depth",{get:function(){return this._depth},set:function(t){this._depth=t;var e=this._delayTime*t;this._lfoL.min=Math.max(this._delayTime-e,0),this._lfoL.max=this._delayTime+e,this._lfoR.min=Math.max(this._delayTime-e,0),this._lfoR.max=this._delayTime+e}}),Object.defineProperty(s.default.Chorus.prototype,"delayTime",{get:function(){return 1e3*this._delayTime},set:function(t){this._delayTime=t/1e3,this.depth=this._depth}}),Object.defineProperty(s.default.Chorus.prototype,"type",{get:function(){return this._lfoL.type},set:function(t){this._lfoL.type=t,this._lfoR.type=t}}),Object.defineProperty(s.default.Chorus.prototype,"spread",{get:function(){return this._lfoR.phase-this._lfoL.phase},set:function(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}}),s.default.Chorus.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null,this._delayNodeL.dispose(),this._delayNodeL=null,this._delayNodeR.dispose(),this._delayNodeR=null,this._writable("frequency"),this.frequency=null,this},e.default=s.default.Chorus},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(7);s.default.Chebyshev=function(){var t=s.default.defaults(arguments,["order"],s.default.Chebyshev);s.default.Effect.call(this,t),this._shaper=new s.default.WaveShaper(4096),this._order=t.order,this.connectEffect(this._shaper),this.order=t.order,this.oversample=t.oversample},s.default.extend(s.default.Chebyshev,s.default.Effect),s.default.Chebyshev.defaults={order:1,oversample:"none"},s.default.Chebyshev.prototype._getCoefficient=function(t,e,i){return i.hasOwnProperty(e)?i[e]:(i[e]=0===e?0:1===e?t:2*t*this._getCoefficient(t,e-1,i)-this._getCoefficient(t,e-2,i),i[e])},Object.defineProperty(s.default.Chebyshev.prototype,"order",{get:function(){return this._order},set:function(t){this._order=t;for(var e=new Array(4096),i=e.length,s=0;s<i;++s){var n=2*s/i-1;e[s]=0===n?0:this._getCoefficient(n,t,{})}this._shaper.curve=e}}),Object.defineProperty(s.default.Chebyshev.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){this._shaper.oversample=t}}),s.default.Chebyshev.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this},e.default=s.default.Chebyshev},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(13),i(75);s.default.BitCrusher=function(){var t=s.default.defaults(arguments,["bits"],s.default.BitCrusher);s.default.Effect.call(this,t);var e=1/Math.pow(2,t.bits-1);this._subtract=new s.default.Subtract,this._modulo=new s.default.Modulo(e),this._bits=t.bits,this.effectSend.fan(this._subtract,this._modulo),this._modulo.connect(this._subtract,0,1),this._subtract.connect(this.effectReturn)},s.default.extend(s.default.BitCrusher,s.default.Effect),s.default.BitCrusher.defaults={bits:4},Object.defineProperty(s.default.BitCrusher.prototype,"bits",{get:function(){return this._bits},set:function(t){this._bits=t;var e=1/Math.pow(2,t-1);this._modulo.value=e}}),s.default.BitCrusher.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._subtract.dispose(),this._subtract=null,this._modulo.dispose(),this._modulo=null,this},e.default=s.default.BitCrusher},function(t,e,i){"use strict";i.r(e);var s=i(0);i(58),i(42),i(8),i(9);s.default.AutoWah=function(){var t=s.default.defaults(arguments,["baseFrequency","octaves","sensitivity"],s.default.AutoWah);s.default.Effect.call(this,t),this.follower=new s.default.Follower(t.follower),this._sweepRange=new s.default.ScaleExp(0,1,.5),this._baseFrequency=t.baseFrequency,this._octaves=t.octaves,this._inputBoost=new s.default.Gain,this._bandpass=new s.default.Filter({rolloff:-48,frequency:0,Q:t.Q}),this._peaking=new s.default.Filter(0,"peaking"),this._peaking.gain.value=t.gain,this.gain=this._peaking.gain,this.Q=this._bandpass.Q,this.effectSend.chain(this._inputBoost,this.follower,this._sweepRange),this._sweepRange.connect(this._bandpass.frequency),this._sweepRange.connect(this._peaking.frequency),this.effectSend.chain(this._bandpass,this._peaking,this.effectReturn),this._setSweepRange(),this.sensitivity=t.sensitivity,this._readOnly(["gain","Q"])},s.default.extend(s.default.AutoWah,s.default.Effect),s.default.AutoWah.defaults={baseFrequency:100,octaves:6,sensitivity:0,Q:2,gain:2,follower:{attack:.3,release:.5}},Object.defineProperty(s.default.AutoWah.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._setSweepRange()}}),Object.defineProperty(s.default.AutoWah.prototype,"baseFrequency",{get:function(){return this._baseFrequency},set:function(t){this._baseFrequency=t,this._setSweepRange()}}),Object.defineProperty(s.default.AutoWah.prototype,"sensitivity",{get:function(){return s.default.gainToDb(1/this._inputBoost.gain.value)},set:function(t){this._inputBoost.gain.value=1/s.default.dbToGain(t)}}),s.default.AutoWah.prototype._setSweepRange=function(){this._sweepRange.min=this._baseFrequency,this._sweepRange.max=Math.min(this._baseFrequency*Math.pow(2,this._octaves),this.context.sampleRate/2)},s.default.AutoWah.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this.follower.dispose(),this.follower=null,this._sweepRange.dispose(),this._sweepRange=null,this._bandpass.dispose(),this._bandpass=null,this._peaking.dispose(),this._peaking=null,this._inputBoost.dispose(),this._inputBoost=null,this._writable(["gain","Q"]),this.gain=null,this.Q=null,this},e.default=s.default.AutoWah},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(12),i(48);s.default.AutoPanner=function(){var t=s.default.defaults(arguments,["frequency"],s.default.AutoPanner);s.default.Effect.call(this,t),this._lfo=new s.default.LFO({frequency:t.frequency,amplitude:t.depth,min:-1,max:1}),this.depth=this._lfo.amplitude,this._panner=new s.default.Panner,this.frequency=this._lfo.frequency,this.connectEffect(this._panner),this._lfo.connect(this._panner.pan),this.type=t.type,this._readOnly(["depth","frequency"])},s.default.extend(s.default.AutoPanner,s.default.Effect),s.default.AutoPanner.defaults={frequency:1,type:"sine",depth:1},s.default.AutoPanner.prototype.start=function(t){return this._lfo.start(t),this},s.default.AutoPanner.prototype.stop=function(t){return this._lfo.stop(t),this},s.default.AutoPanner.prototype.sync=function(t){return this._lfo.sync(t),this},s.default.AutoPanner.prototype.unsync=function(){return this._lfo.unsync(),this},Object.defineProperty(s.default.AutoPanner.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),s.default.AutoPanner.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._lfo.dispose(),this._lfo=null,this._panner.dispose(),this._panner=null,this._writable(["depth","frequency"]),this.frequency=null,this.depth=null,this},e.default=s.default.AutoPanner},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(12),i(9);s.default.AutoFilter=function(){var t=s.default.defaults(arguments,["frequency","baseFrequency","octaves"],s.default.AutoFilter);s.default.Effect.call(this,t),this._lfo=new s.default.LFO({frequency:t.frequency,amplitude:t.depth}),this.depth=this._lfo.amplitude,this.frequency=this._lfo.frequency,this.filter=new s.default.Filter(t.filter),this._octaves=0,this.connectEffect(this.filter),this._lfo.connect(this.filter.frequency),this.type=t.type,this._readOnly(["frequency","depth"]),this.octaves=t.octaves,this.baseFrequency=t.baseFrequency},s.default.extend(s.default.AutoFilter,s.default.Effect),s.default.AutoFilter.defaults={frequency:1,type:"sine",depth:1,baseFrequency:200,octaves:2.6,filter:{type:"lowpass",rolloff:-12,Q:1}},s.default.AutoFilter.prototype.start=function(t){return this._lfo.start(t),this},s.default.AutoFilter.prototype.stop=function(t){return this._lfo.stop(t),this},s.default.AutoFilter.prototype.sync=function(t){return this._lfo.sync(t),this},s.default.AutoFilter.prototype.unsync=function(){return this._lfo.unsync(),this},Object.defineProperty(s.default.AutoFilter.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),Object.defineProperty(s.default.AutoFilter.prototype,"baseFrequency",{get:function(){return this._lfo.min},set:function(t){this._lfo.min=this.toFrequency(t),this.octaves=this._octaves}}),Object.defineProperty(s.default.AutoFilter.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._lfo.max=this.baseFrequency*Math.pow(2,t)}}),s.default.AutoFilter.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._lfo.dispose(),this._lfo=null,this.filter.dispose(),this.filter=null,this._writable(["frequency","depth"]),this.frequency=null,this.depth=null,this},e.default=s.default.AutoFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(2),i(22),i(28);s.default.Listener=function(){s.default.call(this),this._orientation=[0,0,0,0,0,0],this._position=[0,0,0],s.default.getContext(function(){this.set(n.defaults)}.bind(this))},s.default.extend(s.default.Listener),s.default.Listener.defaults={positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:1,upX:0,upY:1,upZ:0},s.default.Listener.prototype.isListener=!0,s.default.Listener.prototype._rampTimeConstant=.01,s.default.Listener.prototype.setPosition=function(t,e,i){if(this.context.rawContext.listener.positionX){var s=this.now();this.context.rawContext.listener.positionX.setTargetAtTime(t,s,this._rampTimeConstant),this.context.rawContext.listener.positionY.setTargetAtTime(e,s,this._rampTimeConstant),this.context.rawContext.listener.positionZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this.context.rawContext.listener.setPosition(t,e,i);return this._position=Array.prototype.slice.call(arguments),this},s.default.Listener.prototype.setOrientation=function(t,e,i,s,n,o){if(this.context.rawContext.listener.forwardX){var a=this.now();this.context.rawContext.listener.forwardX.setTargetAtTime(t,a,this._rampTimeConstant),this.context.rawContext.listener.forwardY.setTargetAtTime(e,a,this._rampTimeConstant),this.context.rawContext.listener.forwardZ.setTargetAtTime(i,a,this._rampTimeConstant),this.context.rawContext.listener.upX.setTargetAtTime(s,a,this._rampTimeConstant),this.context.rawContext.listener.upY.setTargetAtTime(n,a,this._rampTimeConstant),this.context.rawContext.listener.upZ.setTargetAtTime(o,a,this._rampTimeConstant)}else this.context.rawContext.listener.setOrientation(t,e,i,s,n,o);return this._orientation=Array.prototype.slice.call(arguments),this},Object.defineProperty(s.default.Listener.prototype,"positionX",{set:function(t){this._position[0]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[0]}}),Object.defineProperty(s.default.Listener.prototype,"positionY",{set:function(t){this._position[1]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[1]}}),Object.defineProperty(s.default.Listener.prototype,"positionZ",{set:function(t){this._position[2]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[2]}}),Object.defineProperty(s.default.Listener.prototype,"forwardX",{set:function(t){this._orientation[0]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[0]}}),Object.defineProperty(s.default.Listener.prototype,"forwardY",{set:function(t){this._orientation[1]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[1]}}),Object.defineProperty(s.default.Listener.prototype,"forwardZ",{set:function(t){this._orientation[2]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[2]}}),Object.defineProperty(s.default.Listener.prototype,"upX",{set:function(t){this._orientation[3]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[3]}}),Object.defineProperty(s.default.Listener.prototype,"upY",{set:function(t){this._orientation[4]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[4]}}),Object.defineProperty(s.default.Listener.prototype,"upZ",{set:function(t){this._orientation[5]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[5]}}),s.default.Listener.prototype.dispose=function(){return this._orientation=null,this._position=null,this};var n=s.default.Listener;s.default.Listener=new n,s.default.Context.on("init",function(t){t.listener&&t.listener.isListener?s.default.Listener=t.listener:s.default.Listener=new n}),e.default=s.default.Listener},function(t,e,i){"use strict";i.r(e);var s=i(0);i(24);s.default.Draw=function(){s.default.call(this),this._events=new s.default.Timeline,this.expiration=.25,this.anticipation=.008,this._boundDrawLoop=this._drawLoop.bind(this)},s.default.extend(s.default.Draw),s.default.Draw.prototype.schedule=function(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),1===this._events.length&&requestAnimationFrame(this._boundDrawLoop),this},s.default.Draw.prototype.cancel=function(t){return this._events.cancel(this.toSeconds(t)),this},s.default.Draw.prototype._drawLoop=function(){for(var t=s.default.context.currentTime;this._events.length&&this._events.peek().time-this.anticipation<=t;){var e=this._events.shift();t-e.time<=this.expiration&&e.callback()}this._events.length>0&&requestAnimationFrame(this._boundDrawLoop)},s.default.Draw=new s.default.Draw,e.default=s.default.Draw},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(3),{});s.default.prototype.send=function(t,e){n.hasOwnProperty(t)||(n[t]=this.context.createGain()),e=s.default.defaultArg(e,0);var i=new s.default.Gain(e,s.default.Type.Decibels);return this.connect(i),i.connect(n[t]),i},s.default.prototype.receive=function(t,e){return n.hasOwnProperty(t)||(n[t]=this.context.createGain()),s.default.connect(n[t],this,0,e),this},s.default.Context.on("init",function(t){t.buses?n=t.buses:(n={},t.buses=n)}),e.default=s.default},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.CtrlRandom=function(){var t=s.default.defaults(arguments,["min","max"],s.default.CtrlRandom);s.default.call(this),this.min=t.min,this.max=t.max,this.integer=t.integer},s.default.extend(s.default.CtrlRandom),s.default.CtrlRandom.defaults={min:0,max:1,integer:!1},Object.defineProperty(s.default.CtrlRandom.prototype,"value",{get:function(){var t=this.toSeconds(this.min),e=this.toSeconds(this.max),i=Math.random(),s=i*t+(1-i)*e;return this.integer&&(s=Math.floor(s)),s}}),e.default=s.default.CtrlRandom},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.CtrlMarkov=function(t,e){s.default.call(this),this.values=s.default.defaultArg(t,{}),this.value=s.default.defaultArg(e,Object.keys(this.values)[0])},s.default.extend(s.default.CtrlMarkov),s.default.CtrlMarkov.prototype.next=function(){if(this.values.hasOwnProperty(this.value)){var t=this.values[this.value];if(s.default.isArray(t))for(var e=this._getProbDistribution(t),i=Math.random(),n=0,o=0;o<e.length;o++){var a=e[o];if(i>n&&i<n+a){var r=t[o];s.default.isObject(r)?this.value=r.value:this.value=r}n+=a}else this.value=t}return this.value},s.default.CtrlMarkov.prototype._getProbDistribution=function(t){for(var e=[],i=0,n=!1,o=0;o<t.length;o++){var a=t[o];s.default.isObject(a)?(n=!0,e[o]=a.probability):e[o]=1/t.length,i+=e[o]}if(n)for(var r=0;r<e.length;r++)e[r]=e[r]/i;return e},s.default.CtrlMarkov.prototype.dispose=function(){this.values=null},e.default=s.default.CtrlMarkov},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.CtrlInterpolate=function(){var t=s.default.defaults(arguments,["values","index"],s.default.CtrlInterpolate);s.default.call(this),this.values=t.values,this.index=t.index},s.default.extend(s.default.CtrlInterpolate),s.default.CtrlInterpolate.defaults={index:0,values:[]},Object.defineProperty(s.default.CtrlInterpolate.prototype,"value",{get:function(){var t=this.index;t=Math.min(t,this.values.length-1);var e=Math.floor(t),i=this.values[e],s=this.values[Math.ceil(t)];return this._interpolate(t-e,i,s)}}),s.default.CtrlInterpolate.prototype._interpolate=function(t,e,i){if(s.default.isArray(e)){for(var n=[],o=0;o<e.length;o++)n[o]=this._interpolate(t,e[o],i[o]);return n}if(s.default.isObject(e)){var a={};for(var r in e)a[r]=this._interpolate(t,e[r],i[r]);return a}return(1-t)*(e=this._toNumber(e))+t*(i=this._toNumber(i))},s.default.CtrlInterpolate.prototype._toNumber=function(t){return s.default.isNumber(t)?t:this.toSeconds(t)},s.default.CtrlInterpolate.prototype.dispose=function(){this.values=null},e.default=s.default.CtrlInterpolate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.Waveform=function(){var t=s.default.defaults(arguments,["size"],s.default.Waveform);t.type=s.default.Analyser.Type.Waveform,s.default.AudioNode.call(this),this._analyser=this.input=this.output=new s.default.Analyser(t)},s.default.extend(s.default.Waveform,s.default.AudioNode),s.default.Waveform.defaults={size:1024},s.default.Waveform.prototype.getValue=function(){return this._analyser.getValue()},Object.defineProperty(s.default.Waveform.prototype,"size",{get:function(){return this._analyser.size},set:function(t){this._analyser.size=t}}),s.default.Waveform.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null},e.default=s.default.Waveform},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(2),i(22),i(28),i(1);s.default.Panner3D=function(){var t=s.default.defaults(arguments,["positionX","positionY","positionZ"],s.default.Panner3D);s.default.AudioNode.call(this),this._panner=this.input=this.output=this.context.createPanner(),this._panner.panningModel=t.panningModel,this._panner.maxDistance=t.maxDistance,this._panner.distanceModel=t.distanceModel,this._panner.coneOuterGain=t.coneOuterGain,this._panner.coneOuterAngle=t.coneOuterAngle,this._panner.coneInnerAngle=t.coneInnerAngle,this._panner.refDistance=t.refDistance,this._panner.rolloffFactor=t.rolloffFactor,this._orientation=[t.orientationX,t.orientationY,t.orientationZ],this._position=[t.positionX,t.positionY,t.positionZ],this.orientationX=t.orientationX,this.orientationY=t.orientationY,this.orientationZ=t.orientationZ,this.positionX=t.positionX,this.positionY=t.positionY,this.positionZ=t.positionZ},s.default.extend(s.default.Panner3D,s.default.AudioNode),s.default.Panner3D.defaults={positionX:0,positionY:0,positionZ:0,orientationX:0,orientationY:0,orientationZ:0,panningModel:"equalpower",maxDistance:1e4,distanceModel:"inverse",coneOuterGain:0,coneOuterAngle:360,coneInnerAngle:360,refDistance:1,rolloffFactor:1},s.default.Panner3D.prototype._rampTimeConstant=.01,s.default.Panner3D.prototype.setPosition=function(t,e,i){if(this._panner.positionX){var s=this.now();this._panner.positionX.setTargetAtTime(t,s,this._rampTimeConstant),this._panner.positionY.setTargetAtTime(e,s,this._rampTimeConstant),this._panner.positionZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this._panner.setPosition(t,e,i);return this._position=Array.prototype.slice.call(arguments),this},s.default.Panner3D.prototype.setOrientation=function(t,e,i){if(this._panner.orientationX){var s=this.now();this._panner.orientationX.setTargetAtTime(t,s,this._rampTimeConstant),this._panner.orientationY.setTargetAtTime(e,s,this._rampTimeConstant),this._panner.orientationZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this._panner.setOrientation(t,e,i);return this._orientation=Array.prototype.slice.call(arguments),this},Object.defineProperty(s.default.Panner3D.prototype,"positionX",{set:function(t){this._position[0]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[0]}}),Object.defineProperty(s.default.Panner3D.prototype,"positionY",{set:function(t){this._position[1]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[1]}}),Object.defineProperty(s.default.Panner3D.prototype,"positionZ",{set:function(t){this._position[2]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[2]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationX",{set:function(t){this._orientation[0]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[0]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationY",{set:function(t){this._orientation[1]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[1]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationZ",{set:function(t){this._orientation[2]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[2]}}),s.default.Panner3D._aliasProperty=function(t){Object.defineProperty(s.default.Panner3D.prototype,t,{set:function(e){this._panner[t]=e},get:function(){return this._panner[t]}})},s.default.Panner3D._aliasProperty("panningModel"),s.default.Panner3D._aliasProperty("refDistance"),s.default.Panner3D._aliasProperty("rolloffFactor"),s.default.Panner3D._aliasProperty("distanceModel"),s.default.Panner3D._aliasProperty("coneInnerAngle"),s.default.Panner3D._aliasProperty("coneOuterAngle"),s.default.Panner3D._aliasProperty("coneOuterGain"),s.default.Panner3D._aliasProperty("maxDistance"),s.default.Panner3D.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._panner.disconnect(),this._panner=null,this._orientation=null,this._position=null,this},e.default=s.default.Panner3D},function(t,e,i){"use strict";i.r(e);var s=i(0);i(60),i(43),i(1);s.default.MultibandCompressor=function(t){s.default.AudioNode.call(this),t=s.default.defaultArg(arguments,s.default.MultibandCompressor.defaults),this._splitter=this.input=new s.default.MultibandSplit({lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this.lowFrequency=this._splitter.lowFrequency,this.highFrequency=this._splitter.highFrequency,this.output=new s.default.Gain,this.low=new s.default.Compressor(t.low),this.mid=new s.default.Compressor(t.mid),this.high=new s.default.Compressor(t.high),this._splitter.low.chain(this.low,this.output),this._splitter.mid.chain(this.mid,this.output),this._splitter.high.chain(this.high,this.output),this._readOnly(["high","mid","low","highFrequency","lowFrequency"])},s.default.extend(s.default.MultibandCompressor,s.default.AudioNode),s.default.MultibandCompressor.defaults={low:s.default.Compressor.defaults,mid:s.default.Compressor.defaults,high:s.default.Compressor.defaults,lowFrequency:250,highFrequency:2e3},s.default.MultibandCompressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._splitter.dispose(),this._writable(["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this.mid.dispose(),this.high.dispose(),this._splitter=null,this.low=null,this.mid=null,this.high=null,this.lowFrequency=null,this.highFrequency=null,this},e.default=s.default.MultibandCompressor},function(t,e,i){"use strict";i.r(e);var s=i(0);i(10),i(1);s.default.Mono=function(){s.default.AudioNode.call(this),this.createInsOuts(1,0),this._merge=this.output=new s.default.Merge,s.default.connect(this.input,this._merge,0,0),s.default.connect(this.input,this._merge,0,1)},s.default.extend(s.default.Mono,s.default.AudioNode),s.default.Mono.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._merge.dispose(),this._merge=null,this},e.default=s.default.Mono},function(t,e,i){"use strict";i.r(e);var s=i(0);i(53),i(52),i(43),i(1);s.default.MidSideCompressor=function(t){s.default.AudioNode.call(this),t=s.default.defaultArg(t,s.default.MidSideCompressor.defaults),this._midSideSplit=this.input=new s.default.MidSideSplit,this._midSideMerge=this.output=new s.default.MidSideMerge,this.mid=new s.default.Compressor(t.mid),this.side=new s.default.Compressor(t.side),this._midSideSplit.mid.chain(this.mid,this._midSideMerge.mid),this._midSideSplit.side.chain(this.side,this._midSideMerge.side),this._readOnly(["mid","side"])},s.default.extend(s.default.MidSideCompressor,s.default.AudioNode),s.default.MidSideCompressor.defaults={mid:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16},side:{ratio:6,threshold:-30,release:.25,attack:.03,knee:10}},s.default.MidSideCompressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["mid","side"]),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._midSideSplit.dispose(),this._midSideSplit=null,this._midSideMerge.dispose(),this._midSideMerge=null,this},e.default=s.default.MidSideCompressor},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.Meter=function(){var t=s.default.defaults(arguments,["smoothing"],s.default.Meter);s.default.AudioNode.call(this),this.smoothing=t.smoothing,this._rms=0,this.input=this.output=this._analyser=new s.default.Analyser("waveform",256)},s.default.extend(s.default.Meter,s.default.AudioNode),s.default.Meter.defaults={smoothing:.8},s.default.Meter.prototype.getLevel=function(){for(var t=this._analyser.getValue(),e=0,i=0;i<t.length;i++){var n=t[i];e+=n*n}var o=Math.sqrt(e/t.length);return this._rms=Math.max(o,this._rms*this.smoothing),s.default.gainToDb(this._rms)},s.default.Meter.prototype.getValue=function(){return this._analyser.getValue()[0]},s.default.Meter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null,this},e.default=s.default.Meter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(43),i(1);s.default.Limiter=function(){var t=s.default.defaults(arguments,["threshold"],s.default.Limiter);s.default.AudioNode.call(this),this._compressor=this.input=this.output=new s.default.Compressor({attack:.001,decay:.001,threshold:t.threshold}),this.threshold=this._compressor.threshold,this._readOnly("threshold")},s.default.extend(s.default.Limiter,s.default.AudioNode),s.default.Limiter.defaults={threshold:-12},s.default.Limiter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._compressor.dispose(),this._compressor=null,this._writable("threshold"),this.threshold=null,this},e.default=s.default.Limiter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(58),i(85),i(1);s.default.Gate=function(){var t=s.default.defaults(arguments,["threshold","smoothing"],s.default.Gate);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._follower=new s.default.Follower(t.smoothing),this._gt=new s.default.GreaterThan(s.default.dbToGain(t.threshold)),s.default.connect(this.input,this.output),s.default.connectSeries(this.input,this._follower,this._gt,this.output.gain)},s.default.extend(s.default.Gate,s.default.AudioNode),s.default.Gate.defaults={smoothing:.1,threshold:-40},Object.defineProperty(s.default.Gate.prototype,"threshold",{get:function(){return s.default.gainToDb(this._gt.value)},set:function(t){this._gt.value=s.default.dbToGain(t)}}),Object.defineProperty(s.default.Gate.prototype,"smoothing",{get:function(){return this._follower.smoothing},set:function(t){this._follower.smoothing=t}}),s.default.Gate.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._follower.dispose(),this._gt.dispose(),this._follower=null,this._gt=null,this},e.default=s.default.Gate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.FFT=function(){var t=s.default.defaults(arguments,["size"],s.default.FFT);t.type=s.default.Analyser.Type.FFT,s.default.AudioNode.call(this),this._analyser=this.input=this.output=new s.default.Analyser(t)},s.default.extend(s.default.FFT,s.default.AudioNode),s.default.FFT.defaults={size:1024},s.default.FFT.prototype.getValue=function(){return this._analyser.getValue()},Object.defineProperty(s.default.FFT.prototype,"size",{get:function(){return this._analyser.size},set:function(t){this._analyser.size=t}}),s.default.FFT.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null},e.default=s.default.FFT},function(t,e,i){"use strict";i.r(e);var s=i(0);i(60),i(3),i(1);s.default.EQ3=function(){var t=s.default.defaults(arguments,["low","mid","high"],s.default.EQ3);s.default.AudioNode.call(this),this.output=new s.default.Gain,this._multibandSplit=this.input=new s.default.MultibandSplit({lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this._lowGain=new s.default.Gain(t.low,s.default.Type.Decibels),this._midGain=new s.default.Gain(t.mid,s.default.Type.Decibels),this._highGain=new s.default.Gain(t.high,s.default.Type.Decibels),this.low=this._lowGain.gain,this.mid=this._midGain.gain,this.high=this._highGain.gain,this.Q=this._multibandSplit.Q,this.lowFrequency=this._multibandSplit.lowFrequency,this.highFrequency=this._multibandSplit.highFrequency,this._multibandSplit.low.chain(this._lowGain,this.output),this._multibandSplit.mid.chain(this._midGain,this.output),this._multibandSplit.high.chain(this._highGain,this.output),this._readOnly(["low","mid","high","lowFrequency","highFrequency"])},s.default.extend(s.default.EQ3,s.default.AudioNode),s.default.EQ3.defaults={low:0,mid:0,high:0,lowFrequency:400,highFrequency:2500},s.default.EQ3.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["low","mid","high","lowFrequency","highFrequency"]),this._multibandSplit.dispose(),this._multibandSplit=null,this.lowFrequency=null,this.highFrequency=null,this._lowGain.dispose(),this._lowGain=null,this._midGain.dispose(),this._midGain=null,this._highGain.dispose(),this._highGain=null,this.low=null,this.mid=null,this.high=null,this.Q=null,this},e.default=s.default.EQ3},function(t,e,i){"use strict";i.r(e);var s=i(0);i(91),i(88),i(1);s.default.Channel=function(){var t=s.default.defaults(arguments,["volume","pan"],s.default.PanVol);s.default.AudioNode.call(this,t),this._solo=this.input=new s.default.Solo(t.solo),this._panVol=this.output=new s.default.PanVol({pan:t.pan,volume:t.volume,mute:t.mute}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),this._readOnly(["pan","volume"])},s.default.extend(s.default.Channel,s.default.AudioNode),s.default.Channel.defaults={pan:0,volume:0,mute:!1,solo:!1},Object.defineProperty(s.default.Channel.prototype,"solo",{get:function(){return this._solo.solo},set:function(t){this._solo.solo=t}}),Object.defineProperty(s.default.Channel.prototype,"muted",{get:function(){return this._solo.muted||this.mute}}),Object.defineProperty(s.default.Channel.prototype,"mute",{get:function(){return this._panVol.mute},set:function(t){this._panVol.mute=t}}),s.default.Channel.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["pan","volume"]),this._panVol.dispose(),this._panVol=null,this.pan=null,this.volume=null,this._solo.dispose(),this._solo=null,this},e.default=s.default.Channel},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){i(31),i(36),i(146),i(43),i(23),i(47),i(145),i(59),i(144),i(9),i(58),i(41),i(143),i(12),i(142),i(54),i(10),i(141),i(140),i(52),i(53),i(139),i(138),i(60),i(48),i(137),i(91),i(86),i(88),i(19),i(27),i(136),i(135),i(134),i(79),i(133),i(1),i(11),i(78),i(132),i(83),i(20),i(18),i(131),i(35),i(3),i(81),i(130),i(40),i(77),i(76),i(14),i(24),i(34),i(16),i(56),i(80),i(129),i(128),i(127),i(126),i(125),i(124),i(74),i(123),i(8),i(122),i(33),i(121),i(120),i(73),i(119),i(118),i(117),i(116),i(15),i(115),i(114),i(72),i(113),i(112),i(51),i(71),i(70),i(111),i(110),i(109),i(108),i(107),i(21),i(106),i(105),i(25),i(66),i(104),i(103),i(102),i(101),i(38),i(87),i(29),i(22),i(89),i(100),i(85),i(84),i(75),i(5),i(90),i(99),i(61),i(26),i(42),i(2),i(30),i(13),i(82),i(98),i(7),i(28),i(68),i(32),i(67),i(49),i(97),i(39),i(37),i(17),i(64),i(65),i(96),i(50),i(69),i(6),i(57),i(95),i(46),i(94),i(55),i(63),i(62),i(45),i(4),t.exports=i(0).default}])});
//# sourceMappingURL=Tone.js.map

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map