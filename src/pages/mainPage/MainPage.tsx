import { useCallback, useEffect, useMemo, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useStore } from '../../hooks/useStore';

import { Input } from '../../components/ui/input/Input';
import { Select } from '../../components/ui/select/Select';
import { Button } from '../../components/ui/button/Button';

import styles from './styles.module.scss';

import Arrow from '../../assets/images/right-arrow.png';

export const MainPage = observer(() => {
  const { currencyStore } = useStore();

  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  useEffect(() => {
    currencyStore.getCurrencyInfo();
  }, []);

  const handleChangeFrom = useCallback((e) => {
    setFrom(e.target.value);
  }, []);

  const handleChangeTo = useCallback((e) => {
    setTo(e.target.value);
  }, []);

  const handleChangeAmount = useCallback((e) => {
    setAmount(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    currencyStore.getConvertedValue(amount, from, to);
  }, [amount, from, to]);

  const renderInput = useMemo(() => {
    return <Input placeholder="Write amount" value={amount} onChangeValue={handleChangeAmount} />;
  }, [amount, handleChangeAmount]);

  const renderSelectFrom = useMemo(() => {
    return <Select currensyList={currencyStore.currenciesKeys} value={from} onChangeValue={handleChangeFrom} placeholder="Currency from" />;
  }, [from, currencyStore.currenciesKeys, handleChangeFrom]);

  const renderSelectTo = useMemo(() => {
    return <Select currensyList={currencyStore.currenciesKeys} value={to} onChangeValue={handleChangeTo} placeholder="Currency to" />;
  }, [to, currencyStore.currenciesKeys, handleChangeTo]);

  return (
    <div className={styles.mainPageContainer}>
      <h1 className={styles.heading}>Test Currency Converter</h1>
      <h2 className={styles.descirptionHeading}>Check live foreign currency exchange rates</h2>
      <div className={styles.mainContainer}>
        {renderInput}
        {renderSelectFrom}
        <img className={styles.arrowGo} src={Arrow} alt="" />
        {renderSelectTo}
        <Button onSubmitButton={handleSubmit} />
      </div>
      <p className={styles.result}>Converted: {currencyStore.result || 50}</p>
    </div>
  );
});
