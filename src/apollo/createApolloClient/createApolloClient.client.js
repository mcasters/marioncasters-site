import { ApolloClient } from 'apollo-client';
import { from } from 'apollo-link';
import { onError as errorLink } from 'apollo-link-error';
import apolloLogger from 'apollo-link-logger';
import { createUploadLink } from 'apollo-upload-client';
import gql from 'graphql-tag';

import createCache from './createCache';
import {
  resolvers as clientResolvers,
  types as clientTypes,
} from '../../data/graphql/onMemory/schema';

export default function createApolloClient() {
  const cache = createCache().restore(window.App.cache);

  const uploadLink = createUploadLink({
    uri: '/graphql',
    credentials: 'include',
  });

  const link = from([
    errorLink(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.warn(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.warn(`[Network error]: ${networkError}`);
    }),
    ...(__DEV__ ? [apolloLogger] : []),
    uploadLink,
  ]);

  return new ApolloClient({
    link,
    cache,
    typeDefs: gql(clientTypes),
    resolvers: clientResolvers,
    queryDeduplication: true,
    connectToDevTools: true,
  });
}
