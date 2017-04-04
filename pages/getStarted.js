/* global navigator window localStorage*/

import { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import withData from '../apollo/withData';

import { updateUser } from '../components/account/actions';
import { notifyUser } from '../components/appBasic/actions';
import { openDialog } from '../components/actions';

// imported components
import App from '../components/appBasic';
import GetStartedPage from '../components/getStarted';

import { userQuery } from '../components/account/graphql';

class GetStarted extends Component {
  static propTypes = {
    userAgent: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    loggedUser: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
    openDialog: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    // User is logging in for the first time and needs to sign up
    if (this.props.isAuthenticated && !this.props.data.user) {
      this.props.updateUser(this.props.loggedUser);
      this.props.openDialog('createUser');
    } else if (!this.props.loggedUser) {
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
          <GetStartedPage />
        </App>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  notifyUser: (message) => {
    dispatch(notifyUser(message));
  },
  openDialog: (content) => {
    dispatch(openDialog(content));
  },
  updateUser: (user) => {
    dispatch(updateUser(user));
  },
});

export default withData(
  connect(null, mapDispatchToProps)(
    graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(GetStarted),
  ),
);
