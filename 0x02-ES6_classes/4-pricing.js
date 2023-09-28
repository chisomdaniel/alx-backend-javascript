import Currency from './3-currency';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    set amount(x) {
        this._amount = x;
      }
    
      set currency(y) {
        this._currency = y;
      }
    
      get amount() {
        return this._amount;
      }
    
      get currency() {
        return this._currency;
      }
    
    displayFullPrice(amount, curInst) {
        return `${amount} ${curInst.name} (${curInst.code})`
    }
}