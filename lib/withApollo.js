import withApollo from 'next-with-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';
// import ws from 'ws';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

// const client = new SubscriptionClient('http://localhost:4000/graphql', {
//   reconnect: true,
// });

// Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   uri: 'ws://localhost:4000/graphql',
//   options: {
//     reconnect: true
//   },
// });

// const wsLink = process.browser ? new WebSocketLink({ // if you instantiate in the server, the error will be thrown
//   uri: 'ws://localhost:4000/subscriptions',
//   options: {
//     reconnect: true
//   }
// }) : null;

// // using the ability to split links, you can send data to each link
// // depending on what kind of operation is being sent
// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );

const wsLink = process.browser ? new WebSocketLink({ // if you instantiate in the server, the error will be thrown
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
}) : null;

// const httplink = new HttpLink({
// 	uri: 'http://localhost:3000/graphql',
// 	credentials: 'same-origin'
// });

const link = wsLink ? split( //only create the split in the browser
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
) : httpLink;

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
