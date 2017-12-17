import reducer from '../themes';
import { changeTheme } from '../../actions/themes';

it('set initial state', () => {
  const expected = {
    primaryColor: '#4F6D7A',
  };
  const actual = reducer(undefined, {});
  expect(actual).toEqual(expected);
});

it('set nested data on initial fetch', () => {
  const actual = reducer(undefined, changeTheme('red'));
  expect(actual).toMatchSnapshot();
});
