import Currency from './3-currency'; // eslint-disable-line

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw TypeError('amount must be a number');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(Amount) {
    if (typeof Amount !== 'number') throw TypeError('amount must be a number');
    this._amount = Amount;
  }

  set currency(Currencies) {
    this._currency = Currencies;
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
