import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screen/Home';
import CurrencyList from './screen/CurrencyList';
import Option from './screen/Options';
import Theme from './screen/Theme';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

export default () => <Theme />;
