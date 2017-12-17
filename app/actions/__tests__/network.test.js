import { changeNetworkStatus } from '../network';

it('create CHANGE_NETWORK_STATUS snapshot', () => {
  expect(changeNetworkStatus).toMatchSnapshot();
});
