import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View, StatusBar } from 'react-native';
import Currencies from '../data/Currency';
import { ListItems, Seperator } from '../components/List';
import { chageBaseCurrency, chageQuoteCurrency } from '../actions/currencies';

const TEMP_SELECTED = 'CAD';
@connect((store) => {
  const { baseCurrency, quoteCurrency } = store.currencies;
  return {
    baseCurrency,
    quoteCurrency,
  };
})
class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
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
    const { type } = this.props.navigation.state.params;
    let comparisonCurrency = this.props.baseCurrency;
    if (type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={Currencies}
          renderItem={({ item }) => (
            <ListItems
              text={item}
              selected={item === comparisonCurrency}
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
