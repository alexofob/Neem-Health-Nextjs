import { CLOSE_DIALOG, OPEN_DIALOG, CLOSE_DRAWER, OPEN_DRAWER } from './actionTypes';

export const drawerOpen = (state = false, action) => {
  switch (action.type) {
    case CLOSE_DRAWER:
      return false;
    case OPEN_DRAWER:
      return true;
    default:
      return state;
  }
};

const initialDialogState = {
  open: false,
  content: 'login',
};

export const dialog = (state = initialDialogState, action) => {
  switch (action.type) {
    case CLOSE_DIALOG:
      return { ...state, open: false };
    case OPEN_DIALOG:
      return { ...state, open: true, content: action.dialogContent };
    default:
      return state;
  }
};
