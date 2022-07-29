export default class Building {
  constructor(sqft) {
    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(Sqft) {
    if (typeof Sqft !== 'number') throw TypeError('sqft must be a number');
    this._amount = Sqft;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw TypeError('amount must be a number');
    if (typeof conversionRate !== 'number') throw TypeError('conversionRate must be a number');
    return amount * conversionRate;
  }
}
