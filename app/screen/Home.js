import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView, NetInfo } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { ConversionRate } from '../components/Text';
import { connectAlert } from '../components/Alert';
import { AnimateIn } from '../components/Animations';

import {
  swapCurrecy,
  changeCurrencyAmount,
  getInitialConversion,
} from '../actions/currencies';

import { changeNetworkStatus } from '../actions/network';

@connect((store) => {
  const {
    baseCurrency,
    quoteCurrency,
    amount,
    conversions,
    error,
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
    currencyError: error,
    connected: store.network.connected,
  };
})
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
    currencyError: PropTypes.string,
    alertWithType: PropTypes.func,
    connected: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.handleBaseCurrencyPress = this.handleBaseCurrencyPress.bind(this);
    this.handleQuoteCurrencyPress = this.handleQuoteCurrencyPress.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleReverseButton = this.handleReverseButton.bind(this);
    this.handleOptionPress = this.handleOptionPress.bind(this);
    this.handleNetworkChange = this.handleNetworkChange.bind(this);
    this.handleNetworkWarningPress = this.handleNetworkWarningPress.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
    NetInfo.addEventListener('connectionChange', this.handleNetworkChange);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currencyError &&
      nextProps.currencyError !== this.props.currencyError
    ) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleNetworkChange);
  }

  handleNetworkChange(info) {
    this.props.dispatch(changeNetworkStatus(info.type));
  }

  handleNetworkWarningPress() {
    this.props.alertWithType(
      'warn',
      'Not Connected to the Internt',
      'App might not work!',
    );
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
        <Header
          isConnected={this.props.connected}
          onPress={this.handleOptionPress}
          onWarningPress={this.handleNetworkWarningPress}
        />
        <KeyboardAvoidingView behavior="padding">
          <AnimateIn type="fromTop">
            <Logo tintColor={this.props.primaryColor} />
          </AnimateIn>
          <AnimateIn type="fadeIn" delay={500}>
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
              value={quotePrice}
            />
          </AnimateIn>
          <AnimateIn type="fromBottom" delay={500} duration={750}>
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
          </AnimateIn>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
export default connect()(connectAlert(Home));
