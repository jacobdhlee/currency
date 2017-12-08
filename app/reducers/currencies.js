import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT } from '../actions/currencies';

const INITIAL_STATE = {
  baseCurrency: 'USD',
  quoteCurrency: 'KRW',
  amount: 100,
  conversion: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      };
    default:
      return state;
  }
};

export default reducer;
