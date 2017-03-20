
/* global navigator */

import { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import withRedux from 'next-redux-wrapper';

import initStore from '../store';

// imported components
import App from '../components/appBasic';
import HomePage from '../components/homePage';


class Home extends Component {

  static async getInitialProps({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent };
  }

  static propTypes = {
    userAgent: PropTypes.string.isRequired,
  }

  render() {
    return (
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
          },
        },
        )}
      >
        <App
          title="Neem Health - Your online Pharmacy"
          carouselRequired
        >
          <HomePage />
        </App>
      </MuiThemeProvider>
    );
  }
}

export default withRedux(initStore)(Home);
