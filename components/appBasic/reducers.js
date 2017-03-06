import { OPEN_SNACKBAR, SET_SNACKBAR_MESSAGE, CLOSE_SNACKBAR } from './actionTypes';

export const snackbarOpen = (state = false, action) => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return true;
    case CLOSE_SNACKBAR:
      return false;
    default:
      return state;
  }
};

export const snackbarMessage = (state = ' ', action) => {
  switch (action.type) {
    case SET_SNACKBAR_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
