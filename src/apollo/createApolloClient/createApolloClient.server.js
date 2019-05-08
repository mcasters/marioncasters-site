import { ApolloClient } from 'apollo-client';
import { from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { SchemaLink } from 'apollo-link-schema';
import gql from 'graphql-tag';

import createCache from './createCache';
import {
  resolvers as clientResolvers,
  types as clientTypes,
  defaults as cacheDefaults,
} from '../../data/graphql/onMemory/schema';

export default function createApolloClient(schema) {
  const cache = createCache();

  cache.writeData({
    data: cacheDefaults,
  });

  const link = from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.warn(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.warn(`[Network error]: ${networkError}`);
    }),
    new SchemaLink({ ...schema }),
  ]);

  return new ApolloClient({
    link,
    cache,
    typeDefs: gql(clientTypes),
    resolvers: clientResolvers,
    ssrMode: true,
    queryDeduplication: true,
  });
}
