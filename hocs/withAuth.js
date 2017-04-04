/* global window */
import React from 'react';
import Router from 'next/router';

import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth';

export default Page =>
  class DefaultPage extends React.Component {
    static getInitialProps(ctx) {
      const loggedUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(ctx.req);
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
      return {
        ...pageProps,
        loggedUser,
        currentUrl: ctx.pathname,
        isAuthenticated: !!loggedUser,
      };
    }

    constructor(props) {
      super(props);

      this.logout = this.logout.bind(this);
    }

    logout(eve) {
      if (eve.key === 'logout') {
        Router.push(`/?logout=${eve.newValue}`);
      }
    }

    componentDidMount() {
      window.addEventListener('storage', this.logout, false);
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.logout, false);
    }

    render() {
      return <Page {...this.props} />;
    }
  };
