/* global localStorage location */
/* eslint class-methods-use-this: "off"*/
/* eslint no-underscore-dangle: "off"*/
import Auth0 from 'auth0-js';
import { observable, autorun, action } from 'mobx';
import { viewStore, userStore } from '../';
import { saveToken, loadToken, removeItem } from './localStorage';

const env = require('../../config/env');

class AuthService {
  emailInput;  // Stores the email input and uses in the passwordless login procedure
  userId; // User Id received from the passwordless authentication send mail step
  @observable idToken; // idToken to be used for access control to data

  constructor(clientID, domain) {
    // Configure Auth0
    this.webAuth = new Auth0.WebAuth({
      clientID,
      domain,
      responseType: 'token',
    });
    this.idToken = loadToken();
    autorun(() => {
      if (this.idToken == null) {
        removeItem('idToken');
      }
      saveToken(this.idToken);
    });
  }

// Step 1 in the passwordless authentication procedure
  sendMail(emailInput) {
    // redirects the call to auth0 instance
    this.emailInput = emailInput;
    this.webAuth.passwordlessStart({
      connection: 'email',
      email: emailInput,
      send: 'code' },
      (err, result) => {
        if (err) {
          viewStore.notifyUser('Unable to send mail!, please try again.');
          return;
        }
        this.userId = result._id;
        viewStore.notifyUser('Validation Code has been sent to your email address.' +
        ' Please use the code to login.');
        viewStore.showValidateLoginDialog();
      }
    );
  }

// Step 2 in the passwordless authentication procedure
  login(codeInput) {
    // submit the passcode to complete authentication
    this.webAuth.passwordlessVerify({ ...this.emailInput, ...codeInput },
      this.loginCallback);
  }

// Google login. Page is redirected after login id_token is extracted at the router
  googleLogin = () => {
    this.webAuth.authorize({
      connection: 'google-oauth2',
    }, this.socialLoginCallback);
  }

// Facebook login. Page is redirected after login id_token is extracted at the router
  facebookLogin = () => {
    this.webAuth.authorize({
      connection: 'facebook',
    }, this.socialLoginCallback);
  }

// Passwordless Login callback. Page is not redirected. Result of authentication is
// available in the result argument
  @action loginCallback = (err, result) => {
    if (err) {
      viewStore.notifyUser(`Login failed:  ${err.message}`);
    }
    this.idToken = result.idToken;
    this.getAuth0Profile(result.idToken, this.userId);
  }

  // Callback procedure for handling errors in case social login fails
  socialLoginCallback = (err) => {
    if (err) {
      viewStore.notifyUser(`Login failed:  ${err.message}`);
    }
  }

  // Fetch User profile information with hash extracted from the redirected url
  // Applies to the social logins
  fetchUserProfile(hash) {
    const result = this.auth0.parseHash(hash);
    if (result && result.idToken) {
    // fetch user profile
      this.getAuth0Profile(result.idToken);
    } else if (result && result.error) {
      viewStore.notifyUser(`Login error:  ${result.error}`);
    }
  }

  // Fetch User profile information with login token.
  getAuth0Profile(idToken, userId) {
    const auth0Manage = new Auth0.Management({
      domain: env.AUTH0_DOMAIN,
      token: idToken,
    });
    auth0Manage.getUser(userId, (err, profile) => {
      if (err) {
        console.log('Error loading the Profile: ', err);
        viewStore.notifyUser(`Error loading the Profile: ${idToken}`);
      } else {
        userStore.updateCurrentUser(profile);
        viewStore.notifyUser(`Login successful: ${profile.name}`);
      }
    });
  }

  @action logout = () => {
    // Clear user token and profile data from localStorage
    this.idToken = null;
    userStore.updateCurrentUser(null);
  }
}

const auth0 = new AuthService(
  env.AUTH0_CLIENT_ID,
  env.AUTH0_DOMAIN,
);

export { AuthService };

export default auth0;