import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../screen/Home';
import CurrencyList from '../screen/CurrencyList';
import Option from '../screen/Options';
import Theme from '../screen/Theme';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Option,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Theme: {
      screen: Theme,
      navigationOptions: {
        headerTitle: 'Theme',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
