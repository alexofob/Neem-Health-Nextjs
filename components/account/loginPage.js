/* global navigator window localStorage*/
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';

import App from '../../components/appBasic';
import Login from './pwdlessLogin';
import Navbar from '../../components/getStarted/navbar';
import ValidateLogin from './validateLogin';
import CreateUser from './createUser';
import { notifyUser } from '../../components/appBasic/actions';
import { openDialog } from '../actions';

class LoginPage extends Component {
  static propTypes = {
    userAgent: PropTypes.string.isRequired,
    notifyUser: PropTypes.func.isRequired,
    dialogContent: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    openDialog: PropTypes.func.isRequired,
  };
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.openDialog('login');
      this.props.notifyUser('Please login in order to access the page.');
    } else if (!this.props.data.user) {
      this.props.openDialog('createUser');
      this.props.notifyUser('Please signup and continue to the requested page.');
    }
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
        <App title="Neem Health - Login or Signup">
          <div className="pageWrapper">
            <main>
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
                {dialogContent === 'createUser' &&
                  <div>
                    <div>
                      <h2>Sign Up</h2>
                    </div>
                    <CreateUser />
                  </div>}
              </div>
            </main>
            <footer>
              © Neem Health
            </footer>
            <style jsx>
              {
                `
                  .form {
                    margin: 90px auto;
                    width: 450px;
                    min-height: 420px;
                    border: 1px solid #E0E0E0;
                    border-radius: 3px;
                    padding: 2% 3%;
                  }
                  footer {
                    background-color: #E8E8E8;
                  }
                  h2 {
                    margin: 20px 0;
                  }
                  @media (max-width: 767px) {
                    .form {
                      margin: 60px auto;
                      width: 400px;
                    }

                  }
                  @media (max-width: 400px) {
                    .form {
                      margin: 30px auto;
                      width: 300px;
                    }

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
    openDialog: content => dispatch(openDialog(content)),
  }),
)(LoginPage);
