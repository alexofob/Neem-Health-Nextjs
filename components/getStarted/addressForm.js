/* global document */
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { TextField } from 'redux-form-material-ui';
import { reduxForm, Field } from 'redux-form';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

import { geolocate, getStartedStep1 as getStep1, initAutocomplete } from './actions';
import { required } from '../../utils/validators';


const styles = {
  buttons: {
    height: 40,
    marginTop: 20,
  },
  location: {
    marginTop: 20,
  },
};


class AddressForm extends Component {
  static propTypes = {
    initAutocomplete2: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    geolocate2: PropTypes.func.isRequired,
    getStartedStep1: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      region: PropTypes.string,
    }),
  }
  componentDidMount() {
    this.props.initAutocomplete2(document.getElementById('location'));
  }
  render() {
    const { handleSubmit, geolocate2, initialValues, getStartedStep1,
      invalid, submitting } = this.props;
    return (
      <div>
        <p className="step">STEP 2</p>
        <p className="form-subheading">Address</p>
        <form onSubmit={handleSubmit} >
          <Field
            name="location"
            id="location"
            component={TextField}
            type="text"
            onFocus={geolocate2}
            fullWidth
            style={styles.location}
          />
          {
            Object.keys(initialValues).length !== 0 &&
              <div>
                <Field
                  name="street"
                  id="street"
                  component={TextField}
                  type="text"
                  floatingLabelText="Street Address"
                  fullWidth
                  validate={[required]}

                />

                <Field
                  name="city"
                  id="city"
                  component={TextField}
                  type="text"
                  floatingLabelText="City/Town"
                  fullWidth
                  validate={[required]}

                />

                <Field
                  name="region"
                  id="region"
                  component={TextField}
                  type="text"
                  floatingLabelText="Region"
                  fullWidth
                  validate={[required]}

                />

              </div>
            }
          <FlatButton
            label="Back"
            style={styles.buttons}
            icon={<MdArrowBack />}
            onTouchTap={getStartedStep1}
          />

          <RaisedButton
            type="submit"
            secondary
            label="Save"
            disabled={invalid || submitting}
            style={{ ...styles.buttons, float: 'right' }}
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
  }
}


const mapDispatchToProps = dispatch => (
  {
    geolocate2: () => {
      dispatch(geolocate());
    },
    getStartedStep1: () => {
      dispatch(getStep1());
    },
    initAutocomplete2: (element) => {
      dispatch(initAutocomplete(element));
    },
  }
);


// Decorate with redux-form
const AddressForm2 = reduxForm({
  form: 'addressForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(AddressForm);

export default connect(
  state => ({
    initialValues: state.location,
  }),
  mapDispatchToProps)(AddressForm2);
