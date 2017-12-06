import React, { Component } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { ListItems, Seperator } from '../components/List';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Theme extends Component {
  constructor(props) {
    super(props);
    this.handleColorPress = this.handleColorPress.bind(this);
  }
  handleColorPress(color) {
    console.log('Color Changed! >?> ', color);
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItems
          text="Blue"
          onPress={() => this.handleColorPress(styles.$blue)}
          checkmark={false}
          selected
          iconBackground={styles.$blue}
        />
        <Seperator />
        <ListItems
          text="Orange"
          onPress={() => this.handleColorPress(styles.$green)}
          checkmark={false}
          selected
          iconBackground={styles.$orange}
        />
        <Seperator />
        <ListItems
          text="Green"
          onPress={() => this.handleColorPress(styles.$green)}
          checkmark={false}
          selected
          iconBackground={styles.$green}
        />
        <Seperator />
        <ListItems
          text="Purple"
          onPress={() => this.handleColorPress(styles.$purple)}
          checkmark={false}
          selected
          iconBackground={styles.$purple}
        />
        <Seperator />
      </ScrollView>
    );
  }
}

export default Theme;
