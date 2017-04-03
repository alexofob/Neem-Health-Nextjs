/* global navigator window localStorage*/

import { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import Router from 'next/router';
import { gql, graphql } from 'react-apollo';

import withData from '../apollo/withData';

import { getUserProfile, loginSuccess, loginFailed } from '../components/account/actions';
import { notifyUser } from '../components/appBasic/actions';
import { openDialog } from '../components/actions';

// imported components
import App from '../components/appBasic';
import GetStartedPage from '../components/getStarted';

const env = require('../config/env');

class GetStarted extends Component {
  static propTypes = {
    idToken: PropTypes.string,
    userAgent: PropTypes.string.isRequired,
    getUserProfile: PropTypes.func.isRequired,
    accessToken: PropTypes.string,
    loginError: PropTypes.string,
    loginSuccess: PropTypes.func.isRequired,
    loginFailed: PropTypes.func.isRequired,
    notifyUser: PropTypes.func.isRequired,
    openDialog: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // User has already signed up
    if (this.props.accessToken && this.props.data.user) {
      Router.replace(`${env.APP_URL}/getStarted`);
      this.props.getUserProfile(this.props.accessToken);
      localStorage.setItem('id_token', this.props.idToken);
      this.props.loginSuccess();
      // User is logging in for the first time and needs to sign up
    } else if (this.props.accessToken && !this.props.data.user) {
      Router.replace(`${env.APP_URL}/getStarted`);
      this.props.getUserProfile(this.props.accessToken);
      localStorage.setItem('id_token', this.props.idToken);
      this.props.openDialog('createUser');
    } else if (this.props.loginFailed) {
      // Login failed.
      this.props.loginFailed(this.props.loginError);
      this.props.notifyUser('Login Failed, Please try again.');
      this.props.openDialog('login');
    } else {
      // User is accessing the page directly without first logging in
      this.props.openDialog('login');
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
        })}
      >
        <App title="Neem Health - Get Started" mapRequired>
          <GetStartedPage data={this.props.data} />
        </App>
      </MuiThemeProvider>
    );
  }
}

const userQuery = gql`
  query {
    user {
      id,
      firstname,
      surname
    }
  }
`;

const mapDispatchToProps = dispatch => ({
  loginSuccess: () => {
    dispatch(loginSuccess());
  },
  getUserProfile: (accessToken) => {
    dispatch(getUserProfile(accessToken));
  },
  loginFailed: (error) => {
    dispatch(loginFailed(error));
  },
  notifyUser: (message) => {
    dispatch(notifyUser(message));
  },
  openDialog: (content) => {
    dispatch(openDialog(content));
  },
});

export default withData(
  connect(null, mapDispatchToProps)(
    graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(GetStarted),
  ),
);
