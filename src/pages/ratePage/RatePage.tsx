import { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { useStore } from '../../hooks/useStore';
import { RateList } from './components/rateList/RateList';

import styles from './styles.module.scss';

export const RatePage = observer(() => {
  const { currencyStore } = useStore();

  useEffect(() => {
    currencyStore.getCurrencyInfo();
  }, []);

  return (
    <div className={styles.ratePageContainer}>
      <h1 className={styles.heading}>Live Exchange Rates</h1>
      <RateList rateList={currencyStore.currencyRate} />
    </div>
  );
});
