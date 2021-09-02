import styles from './styles.module.scss';

interface IRateItemProps {
  rate: any;
}

export const RateItem = ({ rate }: IRateItemProps) => {
  return (
    <div className={styles.rateWrapper}>
      <p>
        {rate.name}: {rate.value}
      </p>
    </div>
  );
};
