import { SET_LOCATION, SET_AUTOCOMPLETE, UPDATE_BUSS_ADDR,
  UPDATE_BUSS_INFO, GETSTARTED_STEP1, GETSTARTED_STEP2 } from './actionTypes';

export const location = (state = {}, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.location;
    default:
      return state;
  }
};

export const autocomplete = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTOCOMPLETE:
      return action.autocomplete;
    default:
      return state;
  }
};

export const bussinessInfo = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BUSS_INFO:
      return action.bussInfo;
    default:
      return state;
  }
};

export const bussinessAddr = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BUSS_ADDR:
      return action.bussAddr;
    default:
      return state;
  }
};

export const getStartedStep = (state = 'basicInfo', action) => {
  switch (action.type) {
    case GETSTARTED_STEP1:
      return 'basicInfo';
    case GETSTARTED_STEP2:
      return 'address';
    default:
      return state;
  }
};
