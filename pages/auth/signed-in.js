import React, { PropTypes } from 'react';
import Router from 'next/router';

import { setToken, checkSecret, getSecret, getIdToken } from '../../utils/auth';

export default class SignedIn extends React.Component {
  static async getInitialProps({ query }) {
    return query ? { redirect: query.redirect } : { redirect: '' };
  }
  static propTypes = {
    redirect: PropTypes.string.isRequired,
  };
  componentDidMount() {
    const secret = getSecret();
    const idToken = getIdToken();
    if (!checkSecret(secret) || !idToken) {
      console.error('Something went wrong in the Sign In request');
      if (this.props.redirect === 'pharmacy' || this.props.redirect === 'getStarted') {
        Router.push('/pharmacy?loginFailed=true');
      }
      Router.push('/?loginFailed=true');
    }
    setToken(idToken);

    Router.push(`/${this.props.redirect}`);
  }

  render() {
    return null;
  }
}
