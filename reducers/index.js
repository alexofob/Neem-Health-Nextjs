import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as snackbarState from '../components/appBasic/reducers';
import * as appBasicState from '../components/reducers';
import * as locationState from '../components/getStarted/reducers';
import user from '../components/account/reducers';

const Reducer = combineReducers({
  ...snackbarState,
  ...appBasicState,
  ...locationState,
  user,
  form: formReducer,
});

export default Reducer;
