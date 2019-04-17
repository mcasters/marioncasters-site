import { merge } from 'lodash';

import {
  types as ItemTypes,
  mutations as ItemMutations,
  queries as ItemQueries,
  resolvers as ItemResolvers,
} from './items/schema';

import {
  types as UserTypes,
  mutations as UserMutations,
  queries as UserQueries,
  resolvers as UserResolvers,
} from './users/schema';

import {
  types as NewsTypes,
  queries as NewsQueries,
  resolvers as NewsResolvers,
} from './news/schema';

export const types = [...ItemTypes, ...UserTypes, ...NewsTypes];

export const queries = [...ItemQueries, ...UserQueries, ...NewsQueries];

export const mutations = [...ItemMutations, ...UserMutations];

export const resolvers = merge(ItemResolvers, UserResolvers, NewsResolvers);
