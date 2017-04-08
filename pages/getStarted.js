/* global navigator window localStorage*/

import { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import withData from '../apollo/withData';
import withSignUp from '../hocs/withSignUp';
import securePage from '../hocs/securePage.js';

// imported components
import App from '../components/appBasic';
import GetStartedPage from '../components/getStarted';

import { updateUser } from '../components/account/actions';
import { notifyUser } from '../components/appBasic/actions';
import { openDialog, closeDialog, storeRestrictedPage } from '../components/actions';

import { userQuery } from '../components/account/graphql';

const GetStarted = ({ userAgent, data }) => (
  <MuiThemeProvider
    muiTheme={getMuiTheme({
      userAgent,
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
      <GetStartedPage data={data} />
    </App>
  </MuiThemeProvider>
);

GetStarted.propTypes = {
  userAgent: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

GetStarted.getInitialProps = ({ req }) =>
  req ? { userAgent: req.headers['user-agent'] } : { userAgent: navigator.userAgent };

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
  storeRestrictedPage: (page) => {
    dispatch(storeRestrictedPage(page));
  },
});

export default withData(
  connect(null, mapDispatchToProps)(
    graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
      withSignUp(securePage(GetStarted)),
    ),
  ),
);
