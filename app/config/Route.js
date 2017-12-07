import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../screen/Home';
import CurrencyList from '../screen/CurrencyList';
// import Option from '../screen/Options';
// import Theme from '../screen/Theme';

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
