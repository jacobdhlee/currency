import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './config/Route';
import AlertProvider from './components/Alert/AlertProvider';
import store from './config/store';
import buildStyles from './config/styles';

buildStyles();

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);
