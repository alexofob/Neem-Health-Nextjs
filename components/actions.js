import { CLOSE_DIALOG, OPEN_DIALOG,
  SET_DIALOG_CONTENT, CLOSE_DRAWER, OPEN_DRAWER } from './actionTypes';

export const closeDialog = () => ({
  type: CLOSE_DIALOG,
});

export const openDialog = () => ({
  type: OPEN_DIALOG,
});

export const setDialogContent = dialogContent => ({
  type: SET_DIALOG_CONTENT,
  dialogContent,
});

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
});

export const openDrawer = () => ({
  type: OPEN_DRAWER,
});
