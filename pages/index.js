// @flow
/* global navigator */

import { Component } from 'react';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';


import store from '../store/viewStore';

// imported components
import App from '../components/appBasic';
import HomePage from '../components/homePage';

useStrict(true);

type Props = {
  userAgent: string,
};

export default class extends Component {

  static async getInitialProps({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent };
  }

  props: Props;

  render() {
    return (
      <Provider store={store}>
        <App
          userAgent={this.props.userAgent}
          title="Neem Health - Your online Pharmacy"
        >
          <HomePage />
        </App>
      </Provider>
    );
  }
}
