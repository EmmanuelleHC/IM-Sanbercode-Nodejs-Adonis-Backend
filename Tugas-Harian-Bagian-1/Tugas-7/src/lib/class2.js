

export default class Clock {
  
  constructor({template}) {
     this._templates=template;
     this._timer=0;
  }
  get templates() {
    return this._templates;
  }
  set templates({x}) {
    this._templates = x;
  }
  get timer() {
    return this._timer;
  }
  set timer(x) {
    this._timer = x;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    var output = this._templates
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this.render();
    this._timer = setInterval(this.render.bind(this), 1000);
  }

}