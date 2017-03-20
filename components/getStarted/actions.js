/* global navigator */

import { box, fromNullable } from '../../utils/lib';
import { SET_LOCATION, SET_AUTOCOMPLETE, UPDATE_BUSS_ADDR,
  UPDATE_BUSS_INFO, GETSTARTED_STEP1, GETSTARTED_STEP2 } from './actionTypes';

export const setLocation = location => ({
  type: SET_LOCATION,
  location,
});

export const setAutocomplete = autocomplete => ({
  type: SET_AUTOCOMPLETE,
  autocomplete,
});

export const updateBusinessInfo = bussInfo => ({
  type: UPDATE_BUSS_INFO,
  bussInfo,
});

export const updateBusinessAddr = bussAddr => ({
  type: UPDATE_BUSS_ADDR,
  bussAddr,
});

export const getStartedStep1 = () => ({
  type: GETSTARTED_STEP1,
});

export const getStartedStep2 = () => ({
  type: GETSTARTED_STEP2,
});

function reducePlaces(memo, item) {
  return {
    ...memo,
    [item.types[0]]: {
      long_name: item.long_name,
      short_name: item.short_name,
    },
  };
}

const fillInAddress = (dispatch, getState) => () => {
  const { autocomplete } = getState();
  // Get the place details from the autocomplete object.
  box(autocomplete.getPlace())
  .fold(place => fromNullable(place.address_components)
    .map(addressComponents =>
      addressComponents.reduce(reducePlaces, { streetAddress: place.name })
    )
    .map(rawAddress => ({
      street: rawAddress.streetAddress,
      city: rawAddress.locality.short_name,
      region: rawAddress.administrative_area_level_1.short_name,
    }))
  )
  .fold(() => undefined, addressObj => dispatch(setLocation(addressObj)));
};

export const initAutocomplete = autoCompletePlaces => (dispatch, getState) => {
// Create the autocomplete object, restricting the search to geographical
// location types.
  // eslint-disable-next-line no-undef
  box(new google.maps.places.Autocomplete(autoCompletePlaces, { types: ['geocode'] }))
  // When the user selects an address from the dropdown, populate the address
  // fields in the form
  .map((autocomplete) => {
    autocomplete.addListener('place_changed', fillInAddress(dispatch, getState));
    return autocomplete;
  })
  .map(autocomplete => dispatch(setAutocomplete(autocomplete)));
};

export const geolocate = () => (dispatch, getState) => {
  const { autocomplete } = getState();
  fromNullable(navigator.geolocation)
  .map(geolocation => geolocation.getCurrentPosition((position) => {
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    // eslint-disable-next-line no-undef
    const circle = new google.maps.Circle({
      center: location,
      radius: position.coords.accuracy,
    });
    autocomplete.setBounds(circle.getBounds());
    dispatch(setAutocomplete(autocomplete));
  }));
};
