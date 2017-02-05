// @flow
/* global navigator */

import { Component } from 'react';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';

import store from '../store/viewStore';

// imported components
import App from '../components/appBasic';
import PharmacyHome from '../components/pharmacyHome';

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
        <MuiThemeProvider
          muiTheme={getMuiTheme({
            userAgent: this.props.userAgent,
            palette: {
              primary1Color: teal500,
              primary2Color: teal700,
              accent1Color: deepOrangeA200,
              pickerHeaderColor: teal500,
            },
            appBar: {
              height: 56,
              color: '#E8E8E8',
              textColor: 'black',
            },
          }
          )}
        >
          <App
            title="Neem Health - Your online Pharmacy"
          >
            <PharmacyHome />
          </App>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
