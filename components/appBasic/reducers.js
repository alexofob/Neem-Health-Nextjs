import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from './actionTypes';

const initialSnackbarState = {
  open: false,
  message: '',
};

export const snackbar = (state = initialSnackbarState, action) => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return { ...state, open: true, message: action.message };
    case CLOSE_SNACKBAR:
      return { ...state, open: false };
    default:
      return state;
  }
};
