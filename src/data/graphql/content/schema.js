import { merge } from 'lodash';

/** * Queries ** */
import {
  queries as queryQueries,
  resolvers as queryResolvers,
} from './queries';

/** * Mutations ** */
import {
  mutations as mutationMutations,
  resolvers as mutationResolvers,
} from './mutations';

export const queries = [...queryQueries];

export const mutations = [...mutationMutations];

export const resolvers = merge(queryResolvers, mutationResolvers);
