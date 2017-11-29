import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const QUOTE_BASE_CURRENCY = 'SKW';
const TEMP_BASE = '1';
const QUOTE_BASE = '1000';

class Home extends Component {
  constructor() {
    super();
    this.buttonPress = this.buttonPress.bind(this);
    this.onChangeText = this.handleChangeText.bind(this);
  }

  buttonPress() {
    console.log('button was pressed');
  }

  handleChangeText(text) {
    console.log(text);
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
      </Container>
    );
  }
}
export default Home;
