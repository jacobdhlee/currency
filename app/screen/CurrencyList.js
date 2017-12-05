import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import Currencies from '../data/Currency';
import { ListItems, Seperator } from '../components/List';

const TEMP_SELECTED = 'CAD';

class CurrencyList extends Component {
  handlePress = () => {
    console.log('pressed');
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={Currencies}
          renderItem={({ item }) => (
            <ListItems
              text={item}
              selected={item === TEMP_SELECTED}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    );
  }
}

export default CurrencyList;
