import { AUTH } from '../actions/index';

const initialState = {
  authenticated: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        authenticated: true,
      };
    default:
      return state;
  }
}

export default authReducer;
