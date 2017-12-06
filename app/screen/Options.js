import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { ListItems, Seperator } from '../components/List';

const IconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';
const IconColor = '#868686';
const IconSize = 23;

class Option extends Component {
  handleThemePress = () => {
    console.log('theme Pressed');
  };

  handleSitePress = () => {
    console.log('site pressed!!');
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
          text="Theme"
          onPress={this.handleThemePress}
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

export default Option;
