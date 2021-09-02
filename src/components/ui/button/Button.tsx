import styles from './styles.module.scss';

interface IButtonProps {
  onSubmitButton: () => void;
}

export const Button = ({ onSubmitButton }: IButtonProps) => {
  return (
    <button className={styles.button} onClick={onSubmitButton}>
      Convert
    </button>
  );
};
