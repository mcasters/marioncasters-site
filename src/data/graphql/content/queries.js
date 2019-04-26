import { Content } from '../../models/index';

export const types = [
  `
  type Content {
    id: ID!
    key: String!
    text: String!
  }
`,
];

export const queries = [
  `
  getContent(key: String!): Content
`,
];

export const resolvers = {
  RootQuery: {
    async getContent(parent, { key }) {
      return Content.findOne({
        where: { key },
      });
    },
  },
};
