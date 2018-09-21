import { merge } from 'lodash';

/** * Queries ** */
import {
  types as GetAllReactJSNews,
  queries as GetAllReactJSNewsQueries,
  resolvers as GetAllReactJSNewsResolver,
} from './queries';

export const types = [...GetAllReactJSNews];

export const queries = [...GetAllReactJSNewsQueries];

export const resolvers = merge(GetAllReactJSNewsResolver);
