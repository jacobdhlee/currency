import {
  SWAP_CURRENCY,
  swapCurrecy,
  changeCurrencyAmount,
  CHANGE_CURRENCY_AMOUNT,
} from '../currencies';

it('create SWAP_CURRENCY action', () => {
  const expected = {
    type: SWAP_CURRENCY,
  };
  const result = swapCurrecy();
  expect(result).toEqual(expected);
});

it('create CHANGE_CURRENCY_AMOUNT action', () => {
  const expected = {
    type: CHANGE_CURRENCY_AMOUNT,
    amount: 5000,
  };
  const result = changeCurrencyAmount(5000);
  expect(result).toEqual(expected);
});

it('create SWAP_CURRENCY snapshot', () => {
  expect(swapCurrecy()).toMatchSnapshot();
});

it('create CHANGE_CURRENCY_AMOUNT snapshot', () => {
  expect(changeCurrencyAmount(5000)).toMatchSnapshot();
});
