/* global document */
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { reduxForm, Field } from 'redux-form';
import { PropTypes } from 'react';
import { connect } from 'react-redux';

import { required, minLength3, isPhoneNumber } from '../../utils/validators';

const styles = {
  buttons: {
    height: 40,
    marginTop: 20,
  },
  location: {
    marginTop: 20,
  },
};


let BasicInfoForm = props => (
  <div>
    <p className="step">STEP 1</p>
    <p className="form-subheading">Basic Info</p>
    <form onSubmit={props.handleSubmit} >
      <Field
        name="businessName"
        id="businessName"
        component={TextField}
        type="text"
        floatingLabelText="Business Name"
        fullWidth
        validate={[required, minLength3]}
      />

      <Field
        name="phoneNumber"
        id="phoneNumber"
        component={TextField}
        type="text"
        floatingLabelText="Phone Number"
        hintText="+233241234567"
        fullWidth
        validate={[required, isPhoneNumber]}
      />

      <RaisedButton
        type="submit"
        secondary
        label="Continue"
        disabled={props.invalid || props.submitting}
        style={styles.buttons}
      />
    </form>

    <style jsx>{`
      .step {
        color: #BDBDBD;
      }
      .form-subheading {
        font-size: 150%;
        margin-bottom: 20px;

      }
    `}</style>

  </div>
);

BasicInfoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  initialValues: PropTypes.shape({
    businessName: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
};


// Decorate with redux-form
BasicInfoForm = reduxForm({
  form: 'BasicInfoForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(BasicInfoForm);

export default connect(state => ({ initialValues: state.bussinessInfo }))(BasicInfoForm);
