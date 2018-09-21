import { merge } from 'lodash';

/** * Queries ** */
import {
  types as gueryTypes,
  queries as queryQueries,
  resolvers as queryResolvers,
} from './queries';

/** * Mutations ** */
import {
  types as mutationTypes,
  mutations as mutationMutations,
  resolvers as mutationResolvers,
} from './mutations';

export const types = [...gueryTypes, ...mutationTypes];

export const queries = [...queryQueries];

export const mutations = [...mutationMutations];

export const resolvers = merge(queryResolvers, mutationResolvers);
