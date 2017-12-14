import { takeEvery, select, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
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
  const { connected, hasCheckedStatus } = yield select(state => state.network);
  if (!connected && hasCheckedStatus) {
    yield put({
      type: CONVERSION_ERROR,
      error: 'Not connected Internet, so it may outdated conversion rate',
    });
    return;
  }
  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
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

const clearConversionError = function* () {
  const DELAY_SECOND = 5;
  const error = yield select(state => state.currencies.error);
  if (error) {
    yield delay(DELAY_SECOND * 1000);
    yield put({
      type: CONVERSION_ERROR,
      error: null,
    });
  }
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchConversionRate);
  yield takeEvery(SWAP_CURRENCY, fetchConversionRate);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchConversionRate);
  yield takeEvery(CONVERSION_ERROR, clearConversionError);
};

export default rootSaga;
