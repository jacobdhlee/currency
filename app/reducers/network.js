import { CHANGE_NETWORK_STATUS } from '../actions/network';

const INITIAL_STATE = {
  connected: false,
  hasCheckedStatus: false,
};

const isConnected = (status) => {
  if (status.toLowerCase() === 'none') {
    return false;
  }
  return true;
};

const network = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_NETWORK_STATUS:
      return {
        ...state,
        hasCheckedStatus: true,
        connected: isConnected(action.status),
      };
    default:
      return state;
  }
};

export default network;
