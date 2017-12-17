import { changeTheme } from '../themes';

it('change PRIMARY_COLOR_CHANGE test', () => {
  expect(changeTheme('red')).toMatchSnapshot();
});
