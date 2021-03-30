export default  class Animal {
  constructor(x) {
      this._animalname = x;
      this._animallegs=4;
      this._cold_blooded=false;
  }
  get animalname() {
    return this._animalname;
  }
  set animalname(x) {
    this._animalname = x;
  }
  get animallegs() {
    return this._animallegs;
  }
  set animallegs(y) {
    this._animallegs = y;
  }
  get cold_blooded() {
    return this._cold_blooded;
  }
  set cold_blooded(x) {
    this._cold_blooded =x ;
  }
}




