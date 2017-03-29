import { ApolloClient, createNetworkInterface } from 'react-apollo';

const env = require('../config/env');

let apolloClient = null;

function createClient(headers) {
  return new ApolloClient({
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: createNetworkInterface({
      uri: env.GRAPHQLSVR_URI,
      opts: {
        credentials: 'same-origin',
        // Pass headers here if your graphql server requires them
      },
    }),
  });
}

export const initClient = (headers) => {
  if (!process.browser) {
    return createClient(headers);
  }
  if (!apolloClient) {
    apolloClient = createClient(headers);
  }
  return apolloClient;
};
