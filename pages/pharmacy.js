/* global navigator */
import { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import withRedux from 'next-redux-wrapper';
import { connect } from 'react-redux';

// imported components
import App from '../components/appBasic';
import PharmacyHome from '../components/pharmacyHome';
import initStore from '../store';

import { notifyUser } from '../components/appBasic/actions';
import { openDialog } from '../components/actions';

class Pharmacy extends Component {
  static async getInitialProps({ req, query }) {
    return {
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent,
      loginFailed: query ? query.loginFailed : undefined,
    };
  }

  static propTypes = {
    userAgent: PropTypes.string.isRequired,
    loginFailed: PropTypes.string,
    openDialog: PropTypes.func.isRequired,
    notifyUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (this.props.loginFailed) {
      this.props.openDialog('login');
      this.props.notifyUser('Login Failed, Please try again.');
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
          <PharmacyHome />
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
});

export default withRedux(initStore)(connect(null, mapDispatchToProps)(Pharmacy));
