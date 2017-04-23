/* global window */
import React, { PropTypes } from 'react';

import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth';

export default Page =>
  class DefaultPage extends React.Component {
    static getInitialProps(ctx) {
      const loggedUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(ctx.req);
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
      return {
        ...pageProps,
        loggedUser: loggedUser || {},
        currentUrl: ctx.pathname || '',
      };
    }

    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
      data: PropTypes.object.isRequired,
      loggedUser: PropTypes.object.isRequired,
      updateUser: PropTypes.func.isRequired,
      openDialog: PropTypes.func.isRequired,
    };

    componentDidMount() {
      if (this.props.isAuthenticated && !this.props.data.user) {
        this.props.updateUser(this.props.loggedUser);
        if (!this.props.data.loading && !this.props.data.error && !this.props.data.user) {
          // User is logging in for the first time and needs to sign up
          this.props.openDialog('createUser');
          console.log('loggedUser: ', this.props.loggedUser);
        }
      }
    }

    componentWillReceiveProps(nextProps) {
      if (
        nextProps.data &&
        !nextProps.data.user &&
        this.props.isAuthenticated &&
        !nextProps.data.error
      ) {
        this.props.openDialog('createUser');
      }
    }

    render() {
      return <Page {...this.props} />;
    }
  };
