import axios from 'axios';

import { URLS_CURRENCY } from '../constans/apiconsts';

export default class ApiCurrency {
  getCurrencyInfo = () => {
    return axios.get(URLS_CURRENCY.GET_CURRENCY_INFO);
  };

  getConvertedValue = (amount: string, from: string, to: string) => {
    return axios.get(`${URLS_CURRENCY.GET_CONVERTED_VALUE}&from=${from}&to=${to}&amount=${amount}`);
  };
}
