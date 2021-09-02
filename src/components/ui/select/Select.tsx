import React from 'react';

import styles from './styles.module.scss';

interface ISelectProps {
  currensyList: any[];
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
}

export const Select = ({ currensyList, value, onChangeValue, placeholder }: ISelectProps) => {
  return (
    <select className={styles.selectContainer} value={value} onChange={(e) => onChangeValue(e)}>
      <option value="" disabled selected>
        {placeholder}
      </option>
      {currensyList?.map((item, idx) => (
        <option key={idx} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
