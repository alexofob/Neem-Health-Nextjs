import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

export default function createMiddleware(clientMiddleware) {
  const middleware = applyMiddleware(clientMiddleware, thunkMiddleware);
  if (process.browser) {
    return composeWithDevTools(middleware);
  }
  return middleware;
}
