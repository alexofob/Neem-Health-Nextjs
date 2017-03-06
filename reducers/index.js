import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as snackbarState from '../components/appBasic/reducers';
import * as appBasicState from '../components/reducers';
import auth from '../components/account/reducers';

const Reducer = combineReducers({
  ...snackbarState,
  ...appBasicState,
  auth,
  form: formReducer,
});

export default Reducer;
