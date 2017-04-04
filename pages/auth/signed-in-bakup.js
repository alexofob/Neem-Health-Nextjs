import React, { PropTypes } from 'react';
import Router from 'next/router';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal500, teal700, deepOrangeA200 } from 'material-ui/styles/colors';

import withData from '../../apollo/withData';
import { notifyUser } from '../../components/appBasic/actions';
import { setToken, checkSecret, extractInfoFromHash } from '../../utils/auth';

import { userQuery, createUser } from '../../components/account/graphql';

import App from '../../components/appBasic';
import CreateUser from '../../components/account/createUser';

class SignedIn extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    createUser: PropTypes.func.isRequired,
    userAgent: PropTypes.string.isRequired,
  };
  componentDidMount() {
    const { idToken, secret } = extractInfoFromHash();
    if (!checkSecret(secret) || !idToken) {
      console.error('Something went wrong in the Sign In request');
      Router.push('/pharmacy?loginFailed=true');
    }
    setToken(idToken);
    if (this.props.data.user) {
      Router.push('/getStarted');
    } else {
      Router.push('/auth/signed-in');
    }
  }

  render() {
    if (!this.props.data.user) {
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
          })}
        >
          <App title="Neem Health - Get Started" mapRequired>
            <div>
              <div className="form">
                <CreateUser onSubmit={this.props.createUser} />
              </div>
              <style jsx>
                {
                  `
                  body {
                    background-color: grey;
                  }
                  .form {
                    background-color: white;
                    margin: auto;
                    width: 450px;
                    height: 600px;
                  }
                `
                }
              </style>
            </div>
          </App>

        </MuiThemeProvider>
      );
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  notifyUser: (message) => {
    dispatch(notifyUser(message));
  },
});

export default withData(
  connect(null, mapDispatchToProps)(
    compose(graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(SignedIn)),
  ),
);
