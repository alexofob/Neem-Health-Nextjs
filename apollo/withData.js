/* global fetch navigator localStorage */
import 'isomorphic-fetch';
import React, { PropTypes } from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import initClient from './initClient';
import initStore from './initStore';

const env = require('../config/env');

export default Component =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      let client;
      let accessToken = '';
      let idToken = '';
      let loginError;
      //  let isAuthenticated;

      const { query, req } = ctx;

      if (query.code) {
        let json;
        const data = {
          client_id: env.AUTH0_CLIENT_ID,
          client_secret: env.AUTH0_CLIENT_SECRET,
          code: query.code,
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:3000/getStarted',
        };

        const config = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        };
        try {
          const res = await fetch(`https://${env.AUTH0_DOMAIN}/oauth/token`, config);
          if (res.ok) {
            json = await res.json();
          } else {
            const error = new Error(res.statusText);
            throw error;
          }
          if (json.access_token && json.id_token) {
            accessToken = json.access_token;
            idToken = json.id_token;
            client = initClient(idToken);
          } else {
            const error = new Error('Token could not be retrieved.');
            throw error;
          }
        } catch (err) {
          loginError = err.message;
          client = initClient();
        }
      } else if (query.access_token && query.id_token) {
        idToken = query.id_token;
        accessToken = query.access_token;
        client = initClient(idToken);
      } else {
        client = initClient();
      }

      const store = initStore(client, client.initialState);

      const props = {
        idToken,
        accessToken,
        loginError,
        userAgent: req ? req.headers['user-agent'] : navigator.userAgent,
        ...((await Component.getInitialProps) && Component.getInitialProps(ctx)),
      };

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <Component {...props} />
          </ApolloProvider>
        );
        await getDataFromTree(app);
      }

      const state = store.getState();

      return {
        initialState: {
          ...state,
          apollo: {
            data: client.getInitialState().data,
          },
        },
        ...props,
      };
    }

    static propTypes = {
      initialState: PropTypes.object,
      idToken: PropTypes.string,
    };

    constructor(props) {
      super(props);
      this.client = initClient(this.props.idToken, this.props.initialState);
      this.store = initStore(this.client, this.props.initialState);
    }

    render() {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <Component {...this.props} />
        </ApolloProvider>
      );
    }
  };
