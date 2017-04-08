import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';

import App from '../../components/appBasic';
import Login from '../../components/account/pwdlessLogin';
import Navbar from '../../components/getStarted/navbar';
import ValidateLogin from '../account/validateLogin';
import { notifyUser } from '../../components/appBasic/actions';

class LoginPage extends Component {
  static propTypes = {
    userAgent: PropTypes.string.isRequired,
    notifyUser: PropTypes.func.isRequired,
    dialogContent: PropTypes.string.isRequired,
  };
  componentDidMount() {
    this.props.notifyUser('Please login in order to access the page.');
  }
  render() {
    const { userAgent, dialogContent } = this.props;
    return (
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
        <App title="Neem Health - Login">
          <div>
            <Navbar />
            <div className="form">
              {dialogContent === 'login' && <Login />}
              {dialogContent === 'validateLogin' &&
                <div>
                  <div>
                    <h2>Enter your code to log in.</h2>
                  </div>
                  <ValidateLogin />
                </div>}
            </div>
            <footer>
              © Neem Health
            </footer>
            <style jsx>
              {
                `
                  .form {
                    margin: 90px auto;
                    width: 450px;
                    height: 420px;
                    border: 1px solid #E0E0E0;
                    border-radius: 3px;
                    padding: 1% 3%;
                  }
                  footer {
                    background-color: #E8E8E8;
                  }
                  h2 {
                    margin: 30px 0;
                  }
                `
              }
            </style>
          </div>
        </App>

      </MuiThemeProvider>
    );
  }
}

export default connect(
  state => ({
    dialogContent: state.dialog.content,
  }),
  dispatch => ({
    notifyUser: message => dispatch(notifyUser(message)),
  }),
)(LoginPage);
