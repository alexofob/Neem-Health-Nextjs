/* global window fetch localStorage */
import 'whatwg-fetch'; // Fetch polyfill for old browsers
import { batchActions } from 'redux-batched-actions';
import Router from 'next/router';

import { LOGIN_REQUEST, UPDATE_USER } from './actionTypes';
import { notifyUser } from '../appBasic/actions';
import { openDialog, closeDialog } from '../actions';
import { checkStatus, parseJSON } from '../../utils/common';
import { setToken } from '../../utils/auth';

const env = require('../../config/env');

export const requestLogin = email => ({
  type: LOGIN_REQUEST,
  email,
});

export const updateUser = user => ({
  type: UPDATE_USER,
  user,
});

const handleError = (err, dispatch, message) => {
  console.error(err);
  return dispatch(notifyUser(message));
};

// Step 1 in the passwordless authentication procedure
// Calls the API to send validation mail and
// dispatches actions along the way
export const sendValidationMail = (values) => {
  const data = {
    client_id: env.AUTH0_CLIENT_ID,
    connection: 'email',
    email: values.email,
    send: 'code',
    authParams: {
      // any authentication parameters that you would like to add
      scope: 'openid profile email',
      state: window.localStorage.getItem('secret'),
    },
  };

  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  return (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(values.email));

    return fetch(`https://${env.AUTH0_DOMAIN}/passwordless/start`, config)
      .then((response) => {
        if (response.ok) {
          dispatch(
            batchActions([
              notifyUser(
                'Validation Code has been sent to your email address.' +
                  ' Please use the code to login.',
              ),
              openDialog('validateLogin'),
            ]),
          );
        } else {
          handleError(
            response.statusText,
            dispatch,
            'Could not send the validation code, please try again.',
          );
        }
      })
      .catch((err) => {
        // If there was a problem, log to console and
        // dispatch the error condition
        handleError(err, dispatch, 'Could not send the validation code, please try again.');
      });
  };
};

// Step 2 in the passwordless authentication procedure
// Login user with the code
export const login = values =>
  (dispatch, getState) => {
    const { user: { email } } = getState();

    const data = {
      client_id: env.AUTH0_CLIENT_ID,
      connection: 'email',
      grant_type: 'password',
      username: email,
      password: values.code,
      scope: 'openid profile',
    };

    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    return fetch(`https://${env.AUTH0_DOMAIN}/oauth/ro`, config)
      .then(checkStatus)
      .then(parseJSON)
      .then((token) => {
        dispatch(closeDialog());
        setToken(token.id_token);
        Router.push('/getStarted');
      })
      .catch((err) => {
        // If there was a problem, log to console and
        // dispatch the error condition
        handleError(err, dispatch, 'Login Failed, please try again.');
      });
  };
