import { Component, PropTypes } from 'react';
import Router from 'next/router';

import { unsetToken } from '../../utils/auth';

export default class SignOff extends Component {
  static propTypes = {
    redirectUrl: PropTypes.string.isRequired,
  };
  static async getInitialProps({ query }) {
    return query ? { redirectUrl: query.redirectUrl } : { redirectUrl: '' };
  }
  componentDidMount() {
    console.log('url: ', this.props.redirectUrl);
    unsetToken();
    Router.push(`/${this.props.redirectUrl}`);
  }
  render() {
    return null;
  }
}
