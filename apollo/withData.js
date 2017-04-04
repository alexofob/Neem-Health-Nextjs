/* global fetch navigator localStorage */
import 'isomorphic-fetch';
import React, { PropTypes } from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import initClient from './initClient';
import initStore from './initStore';
import {
  getUserFromCookie,
  getUserFromLocalStorage,
  getTokenFromCookie,
  getTokenFromLocalStorage,
} from '../utils/auth';

export default Page =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      const loggedUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(ctx.req);
      const token = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(ctx.req);
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
      let client;

      if (token) {
        client = initClient(token);
      } else {
        client = initClient();
      }
      const store = initStore(client, client.initialState);

      const props = {
        ...pageProps,
        loggedUser: loggedUser || '',
        currentUrl: ctx.pathname,
        isAuthenticated: !!loggedUser,
        userAgent: ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent,
      };

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <Page {...props} />
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
        token,
      };
    }

    static propTypes = {
      initialState: PropTypes.object,
      token: PropTypes.string,
    };

    constructor(props) {
      super(props);
      this.client = initClient(this.props.token, this.props.initialState);
      this.store = initStore(this.client, this.props.initialState);
    }

    render() {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <Page {...this.props} />
        </ApolloProvider>
      );
    }
  };
