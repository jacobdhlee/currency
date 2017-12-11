import { takeEvery } from 'redux-saga/effects';
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
} from '../actions/currencies';

const fetchConversionRate = function* (action) {
  console.log('TODO: update things', action);
  yield;
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchConversionRate);
  yield takeEvery(SWAP_CURRENCY, fetchConversionRate);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchConversionRate);
};

export default rootSaga;
