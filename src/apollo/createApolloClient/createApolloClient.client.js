import { ApolloClient } from 'apollo-client';
import { from } from 'apollo-link';
import { onError as errorLink } from 'apollo-link-error';
import apolloLogger from 'apollo-link-logger';
import { withClientState } from 'apollo-link-state';
import { createUploadLink } from 'apollo-upload-client';

import createCache from './createCache';
import { stateResolvers as clientSideResolvers } from '../state/adminState';

export default function createApolloClient() {
  const cache = createCache().restore(window.App.cache);

  const stateLink = withClientState({
    cache,
    resolvers: clientSideResolvers,
    defaults: window.App.initialState,
  });

  const uploadLink = createUploadLink({
    uri: '/graphql',
    credentials: 'include',
  });

  const link = from([
    stateLink,
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
    queryDeduplication: true,
    connectToDevTools: true,
  });
}
