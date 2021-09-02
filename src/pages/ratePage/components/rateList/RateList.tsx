import { RateItem } from '../rateItem/RateItem';

import styles from './styles.module.scss';

interface IRateList {
  rateList: any[];
}

export const RateList = ({ rateList }: IRateList) => {
  return <div className={styles.wrapper}>{rateList.length ? rateList.map((item, idx) => <RateItem key={idx} rate={item} />) : null}</div>;
};
