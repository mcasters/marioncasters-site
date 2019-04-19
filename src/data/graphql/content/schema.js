import { merge } from 'lodash';

/** * Queries ** */
import {
  types as queryTypes,
  queries as queryQueries,
  resolvers as queryResolvers,
} from './queries';

/** * Mutations ** */
import {
  mutations as mutationMutations,
  resolvers as mutationResolvers,
} from './mutations';

export const types = [...queryTypes];

export const queries = [...queryQueries];

export const mutations = [...mutationMutations];

export const resolvers = merge(queryResolvers, mutationResolvers);
