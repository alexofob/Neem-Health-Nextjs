import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, UPDATE_USER,
} from './actionTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: {
    email: '',
    picture: '',
    name: '',
  },
  errorMessage: '',
};

// The auth reducer.
const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        user: { email: action.email },
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    case UPDATE_USER:
      return Object.assign({}, state, {
        user: { email: action.user.email,
                picture: action.user.picture,
                name: action.user.name,
                firstName: action.user.given_name || '',
                surname: action.user.family_name || '',
              } });
    default:
      return state;
  }
};

export default auth;
