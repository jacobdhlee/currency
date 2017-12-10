import { combineReducers } from 'redux';

import currencies from './currencies';
import themeReducer from './themes';

export default combineReducers({
  currencies,
  themeReducer,
});
