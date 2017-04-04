/* global window */
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaGoogle from 'react-icons/lib/fa/google';
import { blue800, fullWhite } from 'material-ui/styles/colors';
import { reduxForm, Field } from 'redux-form';
import { PropTypes } from 'react';
import uuid from 'uuid';

import { required, email } from '../../utils/validators';
import { setSecret, getBaseUrl } from '../../utils/auth';

const env = require('../../config/env');

const styles = {
  buttons: {
    height: 50,
    marginTop: 20,
  },
  facebookButton: {
    marginBottom: 10,
  },
  googleButton: {
    marginBottom: 30,
  },
};

const secret = uuid.v4();
setSecret(secret);

const PwdLessLogin = props => (
  <section role="form">
    <RaisedButton
      label="Log in with Facebook"
      fullWidth
      icon={<FaFacebookOfficial />}
      style={{ ...styles.buttons, ...styles.facebookButton }}
      backgroundColor={blue800}
      labelStyle={{ color: fullWhite }}
      href={
        `https://${env.AUTH0_DOMAIN}/authorize?scope=openid%20profile%20email&response_type=id_token&client_id=${env.AUTH0_CLIENT_ID}&connection=facebook&redirect_uri=${getBaseUrl()}/auth/signed-in&state=${secret}&nonce=${secret}&`
      }
    />
    <RaisedButton
      label="Log in with Google"
      fullWidth
      icon={<FaGoogle />}
      style={{ ...styles.buttons, ...styles.googleButton }}
      href={
        `https://${env.AUTH0_DOMAIN}/authorize?scope=openid%20profile%20email&response_type=id_token&client_id=${env.AUTH0_CLIENT_ID}&connection=google-oauth2&redirect_uri=${getBaseUrl()}/auth/signed-in&state=${secret}&nonce=${secret}&`
      }
    />
    <div className="separator">
      <span>or</span>
    </div>
    <form onSubmit={props.handleSubmit}>
      <Field
        name="email"
        component={TextField}
        type="text"
        hintText="Email"
        floatingLabelText="Email"
        fullWidth
        validate={[required, email]}
      />
      <RaisedButton
        type="submit"
        secondary
        fullWidth
        label="Request Log in Code"
        disabled={props.pristine || props.submitting}
        style={styles.buttons}
      />
    </form>

    <style jsx>
      {
        `
      .separator {
        width: 100%;
        border-bottom: 1px solid #60636a;
        text-align: center;
        height: 18px;
        margin-bottom: 15px;
      }
      .separator span {
        line-height: 15px;
        padding: 0 10px;
        background: white; /* Color of the element below */
        display: inline-block;
        margin-top: 10px;
        color: #60636a;
      }
    `
      }
    </style>

  </section>
);

PwdLessLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

// Decorate with redux-form
export default reduxForm({
  form: 'loginForm',
})(PwdLessLogin);
