/* global window */
import React from 'react';
import Router from 'next/router';

export default Page =>
  class withMultiTabLogout extends React.Component {
    static getInitialProps(ctx) {
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
      return {
        ...pageProps,
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
