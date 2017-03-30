import 'isomorphic-fetch';
import React, { PropTypes } from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import initClient from './initClient';
import initStore from './initStore';

export default Component => (
  class extends React.Component {
    static async getInitialProps(ctx) {
      const headers = ctx.req ? ctx.req.headers : {};
      const client = initClient();
      const store = initStore(client, client.initialState);

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...await (Component.getInitialProps ? Component.getInitialProps(ctx) : {}),
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
        headers,
        ...props,
      };
    }

    static propTypes = {
      initialState: PropTypes.object,
    }

    constructor(props) {
      super(props);
      this.client = initClient();
      this.store = initStore(this.client, this.props.initialState);
    }

    render() {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <Component {...this.props} />
        </ApolloProvider>
      );
    }
  }
);
