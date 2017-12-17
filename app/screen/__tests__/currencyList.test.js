import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CurrencyList from '../CurrencyList';

const mockStore = configureStore([]);

it('render successful', () => {
  const initialState = {
    currencies: { baseCurrency: 'USD', quoteCurrency: 'GBP' },
    themes: { primaryColor: 'red' },
  };
  const store = mockStore(initialState);
  const navigation = { state: { params: { type: 'quote' } } };
  const rendered = shallow(<CurrencyList navigation={navigation} />, {
    context: {
      store,
    },
  });
  expect(rendered.dive()).toMatchSnapshot();
});
