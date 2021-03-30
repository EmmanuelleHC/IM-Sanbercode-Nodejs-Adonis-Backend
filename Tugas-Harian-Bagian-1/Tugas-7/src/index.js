import Animal  from './lib/class'
import Clock  from './lib/class2'

class Frog extends Animal {
  constructor(animalname, cold_blooded,animallegs) {
    super(animalname,cold_blooded,animallegs);
    
  }
  jump() {
    console.log('hop hop');
  }
}
class Ape extends Animal {
  constructor(animalname, cold_blooded) {
    super(animalname,cold_blooded);
    this._animal_legs=2;
  }
  get animallegs() {
    return this._animallegs;
  }
  set animallegs(y) {
    this._animallegs = y;
  }
  yell() {
    console.log( "Auooo");
  }
}
console.log("Soal no 1 release 0")
let sheep = new Animal("shaun")
console.log(sheep.animalname) // "shaun"
console.log(sheep.animallegs) // 4
console.log(sheep.cold_blooded) // false

console.log("Soal no 1 release 1")
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

console.log("Soal no 2")

var clock = new Clock({template: 'h:m:s'});
clock.start(); 