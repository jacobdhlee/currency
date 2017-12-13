import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    left: 0,
    right: 0,
    '@media ios': {
      paddingTop: 20,
    },
  },
  button: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  buttonRight: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 18,
  },
});
