/* global navigator window localStorage*/

import { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import withData from '../../apollo/withData';
import securePage from '../../hocs/securePage.js';
import withMultiTabLogout from '../../hocs/withMultiTabLogout';

// imported components
import App from '../../components/appBasic';
import PharmacyAppPage from '../../components/pharmacyApp';
import { storeRestrictedPage } from '../../components/actions';

import { UserQuery } from '../../components/pharmacyApp/graphql';

const PharmacyApp = ({ userAgent, data, query, url }) => (
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
      },
    })}
  >
    <App title="Neem Health - Pharmacy Admin Home">
      <PharmacyAppPage data={data} query={query} url={url} />
    </App>
  </MuiThemeProvider>
);

PharmacyApp.propTypes = {
  userAgent: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
};

export default compose(
  withData,
  graphql(UserQuery, {
    options: ownProps => ({
      variables: {
        id: ownProps.userId,
      },
    }),
  }),
  connect(null, dispatch => ({
    storeRestrictedPage: (restrictedPage) => {
      dispatch(storeRestrictedPage(restrictedPage));
    },
  })),
  securePage,
  withMultiTabLogout,
)(PharmacyApp);
