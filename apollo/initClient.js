/* global localStorage */
import { ApolloClient, createNetworkInterface } from 'react-apollo';

const env = require('../config/env');

let apolloClient = null;

const networkInterface = createNetworkInterface({ uri: env.GRAPHQLSVR_URI });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    // get the authentication token from local storage if it exists
    if (localStorage.getItem('id_token')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('id_token')}`;
    }
    next();
  },
}]);

function createClient() {
  return new ApolloClient({
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface,
  });
}

const initClient = () => {
  if (!process.browser) {
    return createClient();
  }
  if (!apolloClient) {
    apolloClient = createClient();
  }
  return apolloClient;
};

export default initClient;
