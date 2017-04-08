import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { reduxForm, Field } from 'redux-form';
import { PropTypes } from 'react';
import { connect } from 'react-redux';

import { required, number, maxLength6 } from '../../utils/validators';
import { login } from '../account/actions';

const styles = {
  buttons: {
    height: 50,
    marginTop: 20,
  },
};

const ValidateLogin = ({ handleSubmit, pristine, submitting, loginWithCode }) => (
  <form onSubmit={handleSubmit(loginWithCode)}>
    <Field
      name="code"
      component={TextField}
      type="text"
      hintText="Code"
      fullWidth
      floatingLabelText="Code"
      validate={[required, number, maxLength6]}
    />
    <RaisedButton
      type="submit"
      secondary
      fullWidth
      label="Log in"
      disabled={pristine || submitting}
      style={styles.buttons}
    />
  </form>
);

ValidateLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  loginWithCode: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginWithCode: (values) => {
    dispatch(login(values));
  },
});

export default connect(null, mapDispatchToProps)(
  reduxForm({
    form: 'loginForm',
  })(ValidateLogin),
);
