"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import {sapa,convert,checkScore,kelas} from 'lib.js'
// const [command,arg]=process.argv.slice(2)
// switch(command){
// 	case "sapa":
// 		console.log(sapa(arg))
// 		break;
// 	case "convert":
// 		console.log(convert("Bondra Medan 25"))
// 		break;
// 	case "checkScore":
// 		console.log(checkScore("name:Ahmad,class:Adonis,score:89"))
// 		break;
// 	case "kelas":
// 		console.log(kelas(data))
// 		break;
// 	default:
// 	    break;
// }
var sapa = function sapa(nama) {
  var pesan = "halo selamat pagi,".concat(nama);
  return pesan;
};

console.log(sapa("emma"));

var convert = function convert(param) {
  //let detail = ["Bondra","Medan",25]
  var detail = param.split(' ');

  var _detail = _slicedToArray(detail, 3),
      nama = _detail[0],
      domisili = _detail[1],
      umur = _detail[2];

  return {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
};

console.log(convert("Bondra Medan 25"));

var checkScore = function checkScore(param) {
  var sliced = param.split(','); //const [name, class, score] = detail

  var sliced2 = sliced[0].split(':');
  var sliced3 = sliced[1].split(':');
  var sliced4 = sliced[2].split(':');
  return {
    name: sliced2[1],
    "class": sliced3[1],
    score: sliced4[1]
  };
};

console.log(checkScore("name:Ahmad,class:Adonis,score:89"));

var kelas = function kelas(param) {
  var data = [{
    name: "Ahmad",
    "class": "adonis"
  }, {
    name: "Regi",
    "class": "laravel"
  }, {
    name: "Bondra",
    "class": "adonis"
  }, {
    name: "Iqbal",
    "class": "vuejs"
  }, {
    name: "Putri",
    "class": "Laravel"
  }];
  var result = data.filter(function (test) {
    return test["class"] === param;
  });
  return result;
};

console.log(kelas("adonis"));
