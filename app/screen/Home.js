import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { ConversionRate } from '../components/Text';

import { swapCurrecy, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE = '1';
const QUOTE_BASE = '1000';
const TEMP_CONVERSION_RATE = '1000';
const TEMP_CONVERSION_DATE = new Date();

@connect((store) => {
  const { baseCurrency, quoteCurrency } = store.currencies;
  return {
    baseCurrency,
    quoteCurrency,
  };
})
class Home extends Component {
  static propType = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.handleBaseCurrencyPress = this.handleBaseCurrencyPress.bind(this);
    this.handleQuoteCurrencyPress = this.handleQuoteCurrencyPress.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleReverseButton = this.handleReverseButton.bind(this);
    this.handleOptionPress = this.handleOptionPress.bind(this);
  }

  handleBaseCurrencyPress() {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  }

  handleQuoteCurrencyPress() {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  }

  handleChangeText(amount) {
    this.props.dispatch(changeCurrencyAmount(amount));
  }

  handleReverseButton() {
    this.props.dispatch(swapCurrecy());
  }

  handleOptionPress() {
    this.props.navigation.navigate('Options');
  }

  render() {
    const { baseCurrency, quoteCurrency } = this.props;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handleBaseCurrencyPress}
            keyboardType="numeric"
            defaultValue={TEMP_BASE}
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handleQuoteCurrencyPress}
            editable={false}
            defaultValue={QUOTE_BASE}
          />
          <ConversionRate
            base={baseCurrency}
            quote={quoteCurrency}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="reverse currency"
            onPress={this.handleReverseButton}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
export default Home;
