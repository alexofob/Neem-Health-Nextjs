import { LOGIN_REQUEST, UPDATE_USER } from './actionTypes';

const initialUserState = {
  email: '',
  picture: '',
  name: '',
  firstname: '',
  surname: '',
};

// The auth reducer.
const user = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, { email: action.email });
    case UPDATE_USER:
      return Object.assign({}, state, {
        email: action.user.email || '',
        picture: action.user.picture,
        name: action.user.name,
        firstname: action.user.given_name || '',
        surname: action.user.family_name || '',
      });
    default:
      return state;
  }
};

export default user;
