import { takeEvery, select, call, put } from 'redux-saga/effects';
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

const getRate = currency =>
  fetch(`https://api.fixer.io/latest?base=${currency}`);

const fetchConversionRate = function* (action) {
  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    console.log('fucking currency = ', currency);
    const response = yield call(getRate, currency);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchConversionRate);
  yield takeEvery(SWAP_CURRENCY, fetchConversionRate);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchConversionRate);
};

export default rootSaga;
