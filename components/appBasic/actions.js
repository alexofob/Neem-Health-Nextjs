import { OPEN_SNACKBAR, SET_SNACKBAR_MESSAGE, CLOSE_SNACKBAR } from './actionTypes';

export const openSnackbar = () => ({
  type: OPEN_SNACKBAR,
});

export const setSnackbarMessage = message => ({
  type: SET_SNACKBAR_MESSAGE,
  message,
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});
