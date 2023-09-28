export default class Building {
  constructor(sqft) {
    self._sqft = sqft;
    this.evacuationWarningMessage();
  }

  set sqft(y) {
    this._sqft = y;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
