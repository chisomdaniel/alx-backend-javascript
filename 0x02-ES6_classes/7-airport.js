export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    this._code = newCode;
  }
}
