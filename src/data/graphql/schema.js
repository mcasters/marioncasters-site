import { merge } from 'lodash';

import {
  types as ItemTypes,
  mutations as ItemMutations,
  queries as ItemQueries,
  resolvers as ItemResolvers,
} from './items/schema';

import {
  types as StatusTypes,
  mutations as StatusMutations,
  queries as StatusQueries,
} from './onMemory/schema';

import {
  types as UserTypes,
  mutations as UserMutations,
  queries as UserQueries,
  resolvers as UserResolvers,
} from './users/schema';

import {
  types as ContentTypes,
  mutations as ContentMutations,
  queries as ContentQueries,
  resolvers as ContentResolvers,
} from './content/schema';

import {
  types as NewsTypes,
  queries as NewsQueries,
  resolvers as NewsResolvers,
} from './news/schema';

export const types = [
  ...ContentTypes,
  ...ItemTypes,
  ...UserTypes,
  ...NewsTypes,
  ...StatusTypes,
];

export const queries = [
  ...ItemQueries,
  ...UserQueries,
  ...NewsQueries,
  ...ContentQueries,
  ...StatusQueries,
];

export const mutations = [
  ...ItemMutations,
  ...UserMutations,
  ...ContentMutations,
  ...StatusMutations,
];

export const resolvers = merge(
  ItemResolvers,
  UserResolvers,
  NewsResolvers,
  ContentResolvers,
);
