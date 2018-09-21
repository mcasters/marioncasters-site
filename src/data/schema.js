import { makeExecutableSchema } from 'graphql-tools';

import { types, resolvers, mutations, queries } from '../data/graphql/schema';

const RootQuery = [
  ` 
  type RootQuery { 
    ${queries} 
  } 
`,
];

const Mutation = [
  ` 
  type Mutation { 
    ${mutations} 
  } 
`,
];

const SchemaDefinition = [
  ` 
  schema { 
    query: RootQuery 
    mutation: Mutation 
  } 
`,
];

const typeDefs = [...SchemaDefinition, ...RootQuery, ...Mutation, ...types];

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  ...(__DEV__ ? { log: e => console.error(e.stack) } : {}),
});
