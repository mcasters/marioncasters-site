import merge from 'lodash';

import {
  resolvers as adminStatusResolvers,
  defaults as adminStatusDefaults,
  types as adminStatusTypes,
  queries as adminStatusQuery,
  mutations as adminStatusMutation,
} from './adminStatus';

// Used by both GraphQL Server and Apollo Client
export const types = [...adminStatusTypes];

// Below are only used by Apollo Client
export const defaults = merge(adminStatusDefaults);
export const resolvers = merge(adminStatusResolvers);

// Below are used by GraphQL Server for Introspection
// that generates Flow types by apollo:codegen.
export const queries = [...adminStatusQuery];
export const mutations = [...adminStatusMutation];
