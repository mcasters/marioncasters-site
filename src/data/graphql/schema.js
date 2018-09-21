import { merge } from 'lodash';

import {
  types as PaintingTypes,
  mutations as PaintingMutations,
  queries as PaintingQueries,
  resolvers as PaintingResolvers,
} from './paintings/schema';

import {
  types as SculptureTypes,
  mutations as SculptureMutations,
  queries as SculptureQueries,
  resolvers as SculptureResolvers,
} from './sculptures/schema';

import {
  types as DrawingTypes,
  mutations as DrawingMutations,
  queries as DrawingQueries,
  resolvers as DrawingResolvers,
} from './drawings/schema';

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

export const types = [
  ...PaintingTypes,
  ...SculptureTypes,
  ...DrawingTypes,
  ...UserTypes,
  ...NewsTypes,
];

export const queries = [
  ...PaintingQueries,
  ...SculptureQueries,
  ...DrawingQueries,
  ...UserQueries,
  ...NewsQueries,
];

export const mutations = [
  ...PaintingMutations,
  ...SculptureMutations,
  ...DrawingMutations,
  ...UserMutations,
];

export const resolvers = merge(
  PaintingResolvers,
  DrawingResolvers,
  SculptureResolvers,
  UserResolvers,
  NewsResolvers,
);
