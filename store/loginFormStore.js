/* global window */
/* eslint class-methods-use-this: "off"*/
import Form from 'mobx-react-form';
import validatorjs from 'validatorjs';

import auth0 from './utils/auth0.js';
import { viewStore } from './';

const plugins = { dvr: validatorjs };

const fields = [{
  name: 'email',
  label: 'Email',
  rules: 'required|email|string|between:5,25',
}];

class LoginForm extends Form {

  onSuccess(form) {
    // get field values
    const email = form.values();
    console.log('Form Values!', email);

    // redirects the call to auth0 instance
    auth0.sendMail(email);
  }

  onError(form) {
    // get all form errors
    console.log('All form errors', form.errors());
    // invalidate the form with a custom error message
    form.invalidate('Login validation failed');
    viewStore.notifyUser('Sign up validation failed');
  }
}

export default new LoginForm({ fields }, { plugins });

export { LoginForm };
