/* global localStorage */
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { reduxForm, Field } from 'redux-form';
import { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import { required, minLength2, email } from '../../utils/validators';
import { closeDialog } from '../actions';
import { notifyUser } from '../../components/appBasic/actions';
import { userQuery, createUserMutation } from '../../components/account/graphql';
import { updateUser } from './actions';

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
    createUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
  };

  // Hack to fix the form submit button not showing because form is not yet dirty
  componentWillReceiveProps(nextProps) {
    if (!nextProps.dirty) {
      this.props.autofill('email', '');
    }
  }

  render() {
    return (
      <section role="form">
        <form onSubmit={this.props.handleSubmit(this.props.createUser)}>
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

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(closeDialog());
  },
  notifyUser: (message) => {
    dispatch(notifyUser(message));
  },
  updateUser: () => {
    dispatch(updateUser());
  },
});

export default connect(
  state => ({
    initialValues: {
      firstname: state.user.firstname,
      surname: state.user.surname,
      emailAddress: state.user.email,
    },
    firstname: state.user.firstname,
    picture: state.user.picture,
  }),
  mapDispatchToProps,
)(
  graphql(createUserMutation, {
    props: ({ ownProps, mutate }) => ({
      createUser: userDetails =>
        mutate({
          variables: {
            ...userDetails,
            idToken: localStorage.getItem('token') || '',
            picture: ownProps.picture || '',
          },
          refetchQueries: [
            {
              query: userQuery,
            },
          ],
        })
          .then(() => {
            ownProps.closeDialog();
            ownProps.updateUser();
          })
          .catch((e) => {
            console.error(e);
            ownProps.notifyUser(
              `Sign up was not successful, Please try again.${JSON.stringify(e)}`,
            );
          }),
    }),
  })(
    reduxForm({
      form: 'createUserForm',
      enableReinitialize: true,
    })(CreateUser),
  ),
);
