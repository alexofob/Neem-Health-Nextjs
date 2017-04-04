import React from 'react';
import Router from 'next/router';

import { setToken, checkSecret, extractInfoFromHash } from '../../utils/auth';

export default class SignedIn extends React.Component {
  componentDidMount() {
    const { idToken, secret } = extractInfoFromHash();
    if (!checkSecret(secret) || !idToken) {
      console.error('Something went wrong in the Sign In request');
      Router.push('/pharmacy?loginFailed=true');
    }
    setToken(idToken);
    Router.push('/getStarted');
  }

  render() {
    return null;
  }
}
