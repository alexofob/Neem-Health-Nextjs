import {
  SET_LOCATION,
  SET_AUTOCOMPLETE,
  UPDATE_LOCATION,
  UPDATE_BUSS_INFO,
  GETSTARTED_STEP1,
  GETSTARTED_STEP2,
} from './actionTypes';

const initialBusinessLoc = {
  street: '',
  city: '',
  region: '',
  lat: 0.0,
  lng: 0.0,
};

export const businessLoc = (state = initialBusinessLoc, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.location;
    case UPDATE_LOCATION:
      return action.businessLoc;
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

const initialBusinessInfo = {
  businessName: '',
  phoneNumber: '',
};

export const businessInfo = (state = initialBusinessInfo, action) => {
  switch (action.type) {
    case UPDATE_BUSS_INFO:
      return action.businessInfo;
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
