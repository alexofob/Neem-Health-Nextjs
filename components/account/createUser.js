import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { reduxForm, Field } from 'redux-form';
import { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { required, minLength2, email } from '../../utils/validators';

const styles = {
  buttons: {
    height: 50,
    marginTop: 20,
  },
};

class CreateUser extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    autofill: PropTypes.func.isRequired,
    firstname: PropTypes.string,
    surname: PropTypes.string,
  };

  // Hack to fix the form submit button not showing because form is not yet dirty
  componentWillReceiveProps(nextProps) {
    if (nextProps.firstname && !this.props.firstname) {
      this.props.autofill('firstname', `${nextProps.firstname} `);
    } else if (
      nextProps.firstname === this.props.firstname && nextProps.surname === this.props.surname
    ) {
      this.props.autofill('email', `${nextProps.email} `);
    }
  }

  render() {
    return (
      <section role="form">
        <form onSubmit={this.props.handleSubmit}>
          <Field
            name="firstname"
            component={TextField}
            type="text"
            hintText="First Name"
            floatingLabelText="First Name"
            fullWidth
            validate={[required, minLength2]}
            autoFocus
            id="firstname"
          />
          <Field
            name="surname"
            component={TextField}
            type="text"
            hintText="Surname"
            floatingLabelText="Surname"
            fullWidth
            validate={[required, minLength2]}
            id="surname"
          />
          <Field
            name="emailAddress"
            component={TextField}
            type="text"
            hintText="Email"
            floatingLabelText="Email"
            fullWidth
            validate={[required, email]}
            id="emailAddress"
          />
          <div className="terms">
            <p>
              <small>
                By clicking Sign up, you agree to our <a href="#">Privacy Policy </a> and
                <a href="#"> Terms of Use.</a>
              </small>
            </p>
          </div>
          <RaisedButton
            type="submit"
            secondary
            fullWidth
            label="Sign Up"
            disabled={this.props.pristine || this.props.submitting}
            style={styles.buttons}
          />
        </form>

        <style jsx>
          {
            `
          .terms {
            padding: 20px 0;
          }

        `
          }
        </style>

      </section>
    );
  }
}

// Decorate with redux-form
const CreateUser2 = reduxForm({
  form: 'createUserForm',
  enableReinitialize: true,
})(CreateUser);

export default connect(state => ({
  initialValues: {
    firstname: state.user.firstName,
    surname: state.user.surname,
    emailAddress: state.user.email,
  },
  firstname: state.user.firstName,
  surname: state.user.surname,
  email: state.user.email,
}))(CreateUser2);
