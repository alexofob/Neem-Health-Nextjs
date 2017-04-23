import { SET_ROUTE } from './actionTypes';

export const route = (state = 'dashboard', action) => {
  switch (action.type) {
    case SET_ROUTE:
      return action.route;
    default:
      return state;
  }
};
