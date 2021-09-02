import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

import { useStore } from '../../hooks/useStore';

import styles from './styles.module.scss';

export const Header = observer(() => {
  const { currencyStore } = useStore();

  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.headerNav}>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/rate">Rate</NavLink>
      </nav>

      <p className={styles.rightContent}>
        Base currency: <span>{currencyStore.baseLng}</span>
      </p>
    </header>
  );
});
