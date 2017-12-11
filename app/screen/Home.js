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

@connect((store) => {
  const {
    baseCurrency, quoteCurrency, amount, conversions,
  } = store.currencies;
  const { primaryColor } = store.themes;
  const conversionSelector = conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const rate = rates[quoteCurrency] || 0;
  const { isFetching, date } = conversionSelector;
  return {
    baseCurrency,
    quoteCurrency,
    amount,
    rate,
    isFetching,
    date,
    primaryColor,
  };
})
class Home extends Component {
  static propType = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.string,
    rate: PropTypes.object,
    isFetching: PropTypes.bool,
    date: PropTypes.object,
    primaryColor: PropTypes.string,
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
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  }

  handleQuoteCurrencyPress() {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    });
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
    const {
      baseCurrency,
      quoteCurrency,
      amount,
      rate,
      isFetching,
      date,
    } = this.props;
    let quotePrice = (amount * rate).toFixed(2);
    if (isFetching) {
      quotePrice = '...';
    }
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handleBaseCurrencyPress}
            textColor={this.props.primaryColor}
            keyboardType="numeric"
            defaultValue={amount.toString()}
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            textColor={this.props.primaryColor}
            onPress={this.handleQuoteCurrencyPress}
            editable={false}
            defaultValue={quotePrice}
          />
          <ConversionRate
            base={baseCurrency}
            quote={quoteCurrency}
            date={date}
            conversionRate={rate}
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
export default connect()(Home);
