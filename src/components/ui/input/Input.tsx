import React from 'react';

import styles from './styles.module.scss';

interface IInputProps {
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input = ({ value, onChangeValue, placeholder }: IInputProps) => {
  return <input className={styles.textInput} type="number" placeholder={placeholder} value={value} onChange={(e) => onChangeValue(e)} />;
};
