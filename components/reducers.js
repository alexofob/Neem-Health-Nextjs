import { CLOSE_DIALOG, OPEN_DIALOG,
  SET_DIALOG_CONTENT, CLOSE_DRAWER, OPEN_DRAWER } from './actionTypes';

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

export const dialogOpen = (state = false, action) => {
  switch (action.type) {
    case CLOSE_DIALOG:
      return false;
    case OPEN_DIALOG:
      return true;
    default:
      return state;
  }
};

export const dialogContent = (state = 'login', action) => {
  switch (action.type) {
    case SET_DIALOG_CONTENT:
      return action.dialogContent;
    default:
      return state;
  }
};
