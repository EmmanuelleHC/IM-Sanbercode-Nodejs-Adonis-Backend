"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animal = /*#__PURE__*/function () {
  function Animal(x) {
    _classCallCheck(this, Animal);

    this._animalname = x;
    this._animallegs = 4;
    this._cold_blooded = false;
  }

  _createClass(Animal, [{
    key: "animalname",
    get: function get() {
      return this._animalname;
    },
    set: function set(x) {
      this._animalname = x;
    }
  }, {
    key: "animallegs",
    get: function get() {
      return this._animallegs;
    },
    set: function set(y) {
      this._animallegs = y;
    }
  }, {
    key: "cold_blooded",
    get: function get() {
      return this._cold_blooded;
    },
    set: function set(x) {
      this._cold_blooded = x;
    }
  }]);

  return Animal;
}();

exports["default"] = Animal;