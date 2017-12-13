import { combineReducers } from 'redux';

import currencies from './currencies';
import themeReducer from './themes';
import network from './network';

export default combineReducers({
  currencies,
  themes: themeReducer,
  network,
});
