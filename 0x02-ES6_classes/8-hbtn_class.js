export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}

const hc = new HolbertonClass(12, 'Mezzanine');
console.log(Number(hc));
console.log(String(hc));
