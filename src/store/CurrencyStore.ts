import { action, makeAutoObservable } from 'mobx';

import Api from '../api/Api';

export class CurrencyStore {
  loader: boolean = false;
  loaderConvert: boolean = false;
  baseLng: string = '';
  rates: any = {};
  currencyRate: any = [];

  result: string | number = '';

  constructor() {
    makeAutoObservable(this);
  }

  get currenciesKeys() {
    const arrayKeys = Object.keys(this.rates);
    arrayKeys.unshift(this.baseLng);
    return arrayKeys;
  }

  getCurrencyInfo = () => {
    this.setLoader(true);

    Api.apiCurrency
      .getCurrencyInfo()
      .then(
        action((res) => {
          const rates = [];
          this.baseLng = res?.data?.base;

          for (let item in res?.data?.rates) {
            rates.push({ name: item, value: res?.data?.rates[item] });
          }
          this.rates = res?.data?.rates;
          this.currencyRate = rates;
        }),
      )
      .catch((e) => {
        console.warn(e);
      })
      .finally(() => {
        this.setLoader(false);
      });
  };

  getConvertedValue = (amount: string, from: string, to: string) => {
    this.setLoaderConvert(true);

    Api.apiCurrency
      .getConvertedValue(amount, from, to)
      .then(
        action((res) => {
          this.result = res?.data?.result;
        }),
      )
      .catch((e) => {
        console.warn(e);
      })
      .finally(() => {
        this.setLoaderConvert(false);
      });
  };

  setLoader = (value: boolean) => {
    this.loader = value;
  };

  setLoaderConvert = (value: boolean) => {
    this.loaderConvert = value;
  };
}
