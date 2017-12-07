import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { ListItems, Seperator } from '../components/List';
import { connectAlert } from '../components/Alert';

const IconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';
const IconColor = '#868686';
const IconSize = 23;

class Option extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };
  handleThemePress = () => {
    this.props.navigation.navigate('Theme');
  };

  handleSitePress = () => {
    Linking.openURL('htdafasfadtp://fixer.io').catch(() =>
      this.props.alertWithType('error', 'Sorry!', 'fixer.io cannot open now'));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItems
          text="Theme"
          onPress={this.handleThemePress}
          customIcon={
            <Ionicons
              name={`${IconPrefix}-arrow-forward`}
              color={IconColor}
              size={IconSize}
            />
          }
        />
        <Seperator />
        <ListItems
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons
              name={`${IconPrefix}-link`}
              color={IconColor}
              size={IconSize}
            />
          }
        />
        <Seperator />
      </ScrollView>
    );
  }
}

export default connectAlert(Option);
