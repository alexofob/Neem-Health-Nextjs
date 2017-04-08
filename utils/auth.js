/* global window */
import jwtDecode from 'jwt-decode';
import Cookie from 'js-cookie';

function getParameterByName(name) {
  const match = RegExp(`[#&]${name}=([^&]*)`).exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export function getSecret() {
  return getParameterByName('state');
}

export function getIdToken() {
  return getParameterByName('id_token');
}

export const setToken = (token) => {
  if (!process.browser) {
    return;
  }
  window.localStorage.setItem('token', token);
  window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)));
  Cookie.set('jwt', token);
};

export const unsetToken = () => {
  if (!process.browser) {
    return;
  }
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('secret');
  Cookie.remove('jwt');

  window.localStorage.setItem('logout', Date.now());
};

const getFromCookie = item =>
  (req) => {
    if (!req.headers.cookie) {
      return undefined;
    }
    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
    if (!jwtCookie) {
      return undefined;
    }
    const jwt = jwtCookie.split('=')[1];
    if (item === 'user') {
      return jwtDecode(jwt);
    } else if (item === 'token') {
      return jwt;
    }
    return null;
  };

export const getUserFromCookie = getFromCookie('user');

export const getTokenFromCookie = getFromCookie('token');

export const getUserFromLocalStorage = () => {
  const json = window.localStorage.user;
  return json ? JSON.parse(json) : undefined;
};

export const getTokenFromLocalStorage = () => {
  const token = window.localStorage.token;
  return token || undefined;
};

export const setSecret = (secret) => {
  if (!process.browser) {
    return;
  }
  window.localStorage.setItem('secret', secret);
};

export const checkSecret = secret => window.localStorage.secret === secret;

export const getBaseUrl = () =>
  process.browser ? `${window.location.protocol}//${window.location.host}` : '';
