import React, { PropTypes } from 'react';

import LoginPage from '../components/account/loginPage';

const securePageHoc = Page =>
  class SecurePage extends React.Component {
    static getInitialProps(ctx) {
      return Page.getInitialProps && Page.getInitialProps(ctx);
    }
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
      storeRestrictedPage: PropTypes.func.isRequired,
      currentUrl: PropTypes.func.isRequired,
    };
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        this.props.storeRestrictedPage(this.props.currentUrl.substr(1));
      }
    }
    render() {
      if (!this.props.isAuthenticated) {
        return <LoginPage />;
      }
      return <Page {...this.props} />;
    }
  };

export default Page => securePageHoc(Page);
