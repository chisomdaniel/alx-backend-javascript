export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(x) {
    this._code = x;
  }

  set name(y) {
    this._name = y;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
