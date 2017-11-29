import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '$white',
    fontWeight: '300',
    fontSize: 15,
    paddingVertical: 20,
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
});
