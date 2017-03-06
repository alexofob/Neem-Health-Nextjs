import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';


import reducer from './reducers';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});


const initStore = initialState => createStore(enableBatching(reducer),
  initialState, composeEnhancers(applyMiddleware(thunkMiddleware),
  // other store enhancers if any
));

export default initStore;
