import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
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
  constructor() {
    super();
    this.buttonPress = this.buttonPress.bind(this);
    this.onChangeText = this.handleChangeText.bind(this);
    this.handleReverseButton = this.handleReverseButton.bind(this);
  }

  buttonPress() {
    console.log('button was pressed');
  }

  handleChangeText(text) {
    console.log(text);
  }

  handleReverseButton() {
    console.log('fuck you');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.buttonPress}
          keyboardType="numeric"
          defaultValue={TEMP_BASE}
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          buttonText={QUOTE_BASE_CURRENCY}
          onPress={this.buttonPress}
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
      </Container>
    );
  }
}
export default Home;
