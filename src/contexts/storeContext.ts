import React from 'react';
import { CurrencyStore } from '../store/CurrencyStore';

const store = {
  currencyStore: new CurrencyStore(),
};

export const storeContext = React.createContext(store);
