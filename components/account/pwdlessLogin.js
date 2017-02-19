import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaGoogle from 'react-icons/lib/fa/google';
import { blue800, fullWhite, grey300 } from 'material-ui/styles/colors';

import loginFormStore from '../../store/loginFormStore';
import auth0 from '../../store/utils/auth0';

const styles = {
  buttons: {
    height: 50,
  },
  facebookButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  googleButton: {
    marginBottom: 30,
  },
};

const PwdLessLogin = () => {
  const { name, value, label, sync, error } = loginFormStore.$('email');
  return (
    <section role="form" className="signup-form">
      <div className="facebook-login">
        <RaisedButton
          label="Log in with Facebook"
          fullWidth
          onTouchTap={auth0.facebookLogin}
          icon={<FaFacebookOfficial />}
          style={{ ...styles.buttons, ...styles.facebookButton }}
          backgroundColor={blue800}
          labelStyle={{ color: fullWhite }}
        />
      </div>
      <RaisedButton
        label="Log in with Google"
        fullWidth
        onTouchTap={auth0.googleLogin}
        icon={<FaGoogle />}
        style={{ ...styles.buttons, ...styles.googleButton }}
        backgroundColor={grey300}
      />
      <div className="separator">
        <span>or</span>
      </div>
      <form onSubmit={loginFormStore.handleOnSubmit} >
        <TextField
          name={name}
          value={value}
          floatingLabelText={label}
          onChange={sync}
          fullWidth
          errorText={error}
        /><br />
        <div >
          <RaisedButton
            type="submit"
            secondary
            fullWidth
            label="Request Log in Code"
            disabled={!loginFormStore.isValid}
            style={styles.buttons}
          />

        </div>
      </form>

      <style jsx>{`
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
      `}</style>

    </section>
  );
};

export default PwdLessLogin;
