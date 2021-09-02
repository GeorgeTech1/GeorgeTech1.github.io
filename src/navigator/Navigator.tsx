import { Switch, Route } from 'react-router-dom';

import { Header } from '../components/header/Header';

import { MainPage } from '../pages/mainPage/MainPage';
import { RatePage } from '../pages/ratePage/RatePage';

import styles from './styles.module.scss';

export const Navigator = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/rate" component={RatePage} />
      </Switch>
    </div>
  );
};
