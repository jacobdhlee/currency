import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { ConversionRate } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const QUOTE_BASE_CURRENCY = 'SKW';
const TEMP_BASE = '1';
const QUOTE_BASE = '1000';
const TEMP_CONVERSION_RATE = '1000';
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propType = {
    navigation: PropTypes.object,
  };
  constructor() {
    super();
    this.handleBaseCurrencyPress = this.handleBaseCurrencyPress.bind(this);
    this.handleQuoteCurrencyPress = this.handleQuoteCurrencyPress.bind(this);
    this.onChangeText = this.handleChangeText.bind(this);
    this.handleReverseButton = this.handleReverseButton.bind(this);
    this.handleOptionPress = this.handleOptionPress.bind(this);
  }

  handleBaseCurrencyPress() {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  }

  handleQuoteCurrencyPress() {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  }

  handleChangeText(text) {
    console.log(text);
  }

  handleReverseButton() {
    console.log('fuck you');
  }

  handleOptionPress() {
    console.log('handle option pressed!');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handleBaseCurrencyPress}
            keyboardType="numeric"
            defaultValue={TEMP_BASE}
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            buttonText={QUOTE_BASE_CURRENCY}
            onPress={this.handleQuoteCurrencyPress}
            editable={false}
            defaultValue={QUOTE_BASE}
          />
          <ConversionRate
            base={TEMP_BASE_CURRENCY}
            quote={QUOTE_BASE_CURRENCY}
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
