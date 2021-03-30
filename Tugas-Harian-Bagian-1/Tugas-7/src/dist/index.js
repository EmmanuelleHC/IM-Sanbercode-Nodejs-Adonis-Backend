"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _class = _interopRequireDefault(require("./lib/class"));

var _class2 = _interopRequireDefault(require("./lib/class2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Frog = /*#__PURE__*/function (_Animal) {
  _inherits(Frog, _Animal);

  var _super = _createSuper(Frog);

  function Frog(animalname, cold_blooded, animallegs) {
    _classCallCheck(this, Frog);

    return _super.call(this, animalname, cold_blooded, animallegs);
  }

  _createClass(Frog, [{
    key: "jump",
    value: function jump() {
      console.log('hop hop');
    }
  }]);

  return Frog;
}(_class["default"]);

var Ape = /*#__PURE__*/function (_Animal2) {
  _inherits(Ape, _Animal2);

  var _super2 = _createSuper(Ape);

  function Ape(animalname, cold_blooded) {
    var _this;

    _classCallCheck(this, Ape);

    _this = _super2.call(this, animalname, cold_blooded);
    _this._animal_legs = 2;
    return _this;
  }

  _createClass(Ape, [{
    key: "animallegs",
    get: function get() {
      return this._animallegs;
    },
    set: function set(y) {
      this._animallegs = y;
    }
  }, {
    key: "yell",
    value: function yell() {
      console.log("Auooo");
    }
  }]);

  return Ape;
}(_class["default"]);

console.log("Soal no 1 release 0");
var sheep = new _class["default"]("shaun");
console.log(sheep.animalname); // "shaun"

console.log(sheep.animallegs); // 4

console.log(sheep.cold_blooded); // false

console.log("Soal no 1 release 1");
var kodok = new Frog("buduk");
kodok.jump(); // "hop hop" 

var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"

console.log("Soal no 2");
var clock = new _class2["default"]({
  template: 'h:m:s'
});
clock.start();