/* global navigator window localStorage*/

import { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';

import Router from 'next/router';
import withData from '../apollo/withData';

import { getUserProfile, loginSuccess } from '../components/account/actions';


// imported components
import App from '../components/appBasic';
import GetStartedPage from '../components/getStarted';

const env = require('../config/env');

class GetStarted extends Component {

  static async getInitialProps({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent };
  }

  static propTypes = {
    userAgent: PropTypes.string.isRequired,
    loginSuccess2: PropTypes.func.isRequired,
    getUserProfile2: PropTypes.func.isRequired,
  }

  // Get user profile after user login with Facebook or Google
  componentDidMount() {
    const hash = window.location.hash;
    if (hash) {
      const accessToken = hash
        .split('&')[0]
        .split('=')[1];
      this.props.loginSuccess2();
      localStorage.setItem('access_token', accessToken);
      Router.replace(`${env.APP_URL}/getStarted`);
      this.props.getUserProfile2(accessToken);
    }
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
            color: '#E8E8E8',
            textColor: 'black',
          },
        },
        )}
      >
        <App
          title="Neem Health - Get Started"
          mapRequired
        >
          <GetStartedPage />
        </App>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    loginSuccess2: () => {
      dispatch(loginSuccess());
    },
    getUserProfile2: (accessToken) => {
      dispatch(getUserProfile(accessToken));
    },
  }
);

const GetStarted2 = connect(null, mapDispatchToProps)(GetStarted);

export default withData(GetStarted2);
