import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { reduxForm, Field } from 'redux-form';
import { PropTypes } from 'react';
import { required, number, maxLength6 } from '../../utils/validators';

const styles = {
  buttons: {
    height: 50,
    marginTop: 20,
  },
};

const ValidateLogin = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit} >
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
};

// Decorate with redux-form
export default reduxForm({
  form: 'validateLoginForm',
})(ValidateLogin);
