import { CLOSE_DIALOG, OPEN_DIALOG, CLOSE_DRAWER, OPEN_DRAWER } from './actionTypes';

export const closeDialog = () => ({
  type: CLOSE_DIALOG,
});

export const openDialog = dialogContent => ({
  type: OPEN_DIALOG,
  dialogContent,
});

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
});

export const openDrawer = () => ({
  type: OPEN_DRAWER,
});
