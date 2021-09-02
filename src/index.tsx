import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { Navigator } from './navigator/Navigator';

import './assets/scss/main.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router history={history}>
        <Navigator />
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
