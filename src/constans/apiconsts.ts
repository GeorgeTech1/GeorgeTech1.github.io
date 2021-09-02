import { API_KEY } from '../appConfig';

export const URLS_CURRENCY = {
  GET_CURRENCY_INFO: `/latest?access_key=${API_KEY}`,
  GET_CONVERTED_VALUE: `/convert?access_key=${API_KEY}`,
};
