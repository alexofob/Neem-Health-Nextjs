/* global navigator */
import { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { graphql } from 'react-apollo';

import withData from '../apollo/withData';
import withSignUp from '../hocs/withSignUp';
import withMultiTabLogout from '../hocs/withMultiTabLogout';

// imported components
import App from '../components/appBasic';
import PharmacyHome from '../components/pharmacyHome';

import { updateUser } from '../components/account/actions';
import { notifyUser } from '../components/appBasic/actions';
import { openDialog, closeDialog } from '../components/actions';

import { userQuery } from '../components/account/graphql';

class Pharmacy extends Component {
  static async getInitialProps({ req, query }) {
    return {
      loginFailed: query ? query.loginFailed : undefined,
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent,
    };
  }

  static propTypes = {
    userAgent: PropTypes.string.isRequired,
    loginFailed: PropTypes.string,
    openDialog: PropTypes.func.isRequired,
    notifyUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    if (this.props.loginFailed) {
      batchActions([
        this.props.notifyUser('Login Failed, Please try again.'),
        this.props.openDialog('login'),
      ]);
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
        <App title="Neem Health - Your online Pharmacy" carouselRequired>
          <PharmacyHome isAuthenticated={this.props.isAuthenticated} />
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
  closeDialog: (content) => {
    dispatch(closeDialog(content));
  },
});

export default withData(
  connect(null, mapDispatchToProps)(
    graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
      withSignUp(withMultiTabLogout(Pharmacy)),
    ),
  ),
);
