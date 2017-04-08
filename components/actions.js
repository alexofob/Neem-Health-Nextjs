import {
  CLOSE_DIALOG,
  OPEN_DIALOG,
  CLOSE_DRAWER,
  OPEN_DRAWER,
  OPEN_LOGIN_DIALOG,
  STORE_RESTRICTED_PAGE,
} from './actionTypes';

export const closeDialog = () => ({
  type: CLOSE_DIALOG,
});

export const openDialog = dialogContent => ({
  type: OPEN_DIALOG,
  dialogContent,
});

export const openLoginDialog = () => ({
  type: OPEN_LOGIN_DIALOG,
});

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
});

export const openDrawer = () => ({
  type: OPEN_DRAWER,
});

export const storeRestrictedPage = page => ({
  type: STORE_RESTRICTED_PAGE,
  page,
});
