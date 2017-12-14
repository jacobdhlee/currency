// import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistCombineReducers } from 'redux-persist';
import currencies from './currencies';
import themeReducer from './themes';
import network from './network';

const config = {
  key: 'primary',
  storage: AsyncStorage,
  blacklist: ['network'],
};
export default persistCombineReducers(config, {
  currencies,
  themes: themeReducer,
  network,
});
