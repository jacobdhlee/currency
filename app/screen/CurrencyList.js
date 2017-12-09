import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View, StatusBar } from 'react-native';
import Currencies from '../data/Currency';
import { ListItems, Seperator } from '../components/List';
import { chageBaseCurrency, chageQuoteCurrency } from '../actions/currencies';

const TEMP_SELECTED = 'CAD';
// @connect((store) => {
//   const {
//     baseCurrency, quoteCurrency, amount, conversions,
//   } = store.currencies;
//   const conversionSelector = conversions[baseCurrency] || {};
//   const rates = conversionSelector.rates || {};
//   const rate = rates[quoteCurrency] || 0;
//   const { isFetching, date } = conversionSelector;
//   return {
//     baseCurrency,
//     quoteCurrency,
//     amount,
//     rate,
//     isFetching,
//     date,
//   };
// })
class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };
  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(chageBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(chageQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
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
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    );
  }
}

export default connect()(CurrencyList);
