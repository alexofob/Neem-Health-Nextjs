/* global localStorage window */
import { ApolloClient, createNetworkInterface } from 'react-apollo';

const env = require('../config/env');

let apolloClient = null;


const getNetworkInterface = (idToken) => {
  const networkInterface = createNetworkInterface({ uri: env.GRAPHQLSVR_URI });
  return (
    networkInterface.use([{
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {};
        }

        // get the authentication token from local storage if it exists
        if (idToken) {
          req.options.headers.authorization = `Bearer ${idToken}`;
        }
        next();
      },
    }])
  );
};

function createClient(idToken, initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: getNetworkInterface(idToken),
  });
}

const initClient = (idToken = '', initialState = {}) => {
  if (!process.browser) {
    return createClient(idToken, initialState);
  }
  if (!apolloClient) {
    apolloClient = createClient(idToken, initialState);
  }
  return apolloClient;
};

export default initClient;
