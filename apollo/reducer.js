import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import * as snackbarState from '../components/appBasic/reducers';
import * as appBasicState from '../components/reducers';
import * as locationState from '../components/getStarted/reducers';
import user from '../components/account/reducers';
import * as routeState from '../components/pharmacyApp/reducers';

export default function getReducer(client) {
  return combineReducers({
    ...snackbarState,
    ...appBasicState,
    ...locationState,
    ...routeState,
    user,
    form: formReducer,
    apollo: client.reducer(),
  });
}
