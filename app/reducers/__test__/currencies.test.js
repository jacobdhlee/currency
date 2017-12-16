import reducer from '../currencies';
import { getInitialConversion } from '../../actions/currencies';

it('set initial state', () => {
  const expected = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {},
    error: null,
  };
  const actual = reducer(undefined, {});
  expect(actual).toEqual(expected);
});

it('set nested data on initial fetch', () => {
  const expected = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {
      USD: {
        isFetching: true,
        date: '',
        rates: {},
      },
    },
    error: null,
  };
  const actual = reducer(undefined, getInitialConversion());
  expect(actual).toEqual(expected);
});

// snapshot version of testing

it('set initial state', () => {
  const actual = reducer(undefined, {});
  expect(actual).toMatchSnapshot();
});

it('set nested data on initial fetch', () => {
  const actual = reducer(undefined, getInitialConversion());
  expect(actual).toMatchSnapshot();
});
