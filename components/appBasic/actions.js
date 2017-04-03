import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from './actionTypes';

export const notifyUser = message => ({
  type: OPEN_SNACKBAR,
  message,
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});
