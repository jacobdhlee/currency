import { PRIMARY_COLOR_CHANGE } from '../actions/themes';

const INITIAL_STATE = {
  primaryColor: '#4F6D7A',
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRIMARY_COLOR_CHANGE:
      return {
        ...state,
        primaryColor: action.color,
      };
    default:
      return state;
  }
};

export default themeReducer;
