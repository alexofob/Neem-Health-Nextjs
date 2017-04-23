/* global navigator */
import React, { PropTypes } from 'react';

import LoginPage from '../components/account/loginPage';
import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth';

const securePageHoc = Page =>
  class SecurePage extends React.Component {
    static getInitialProps(ctx) {
      const loggedUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(ctx.req);
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
      const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;

      return {
        ...pageProps,
        loggedUser: loggedUser || {},
        currentUrl: ctx.pathname || '',
        userAgent,
      };
    }
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
      storeRestrictedPage: PropTypes.func.isRequired,
      currentUrl: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired,
      userAgent: PropTypes.string.isRequired,
    };
    componentDidMount() {
      if (!this.props.isAuthenticated || !this.props.data.user) {
        this.props.storeRestrictedPage(this.props.currentUrl.substr(1));
      }
    }

    render() {
      if (
        !this.props.isAuthenticated ||
        (this.props.isAuthenticated && !this.props.data.loading && !this.props.data.user) ||
        this.props.data.error
      ) {
        return (
          <LoginPage
            isAuthenticated={this.props.isAuthenticated}
            data={this.props.data}
            userAgent={this.props.userAgent}
          />
        );
      }

      return <Page {...this.props} />;
    }
  };

export default Page => securePageHoc(Page);
