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
  getContent(keyContent: String!): Content
`,
];

export const resolvers = {
  RootQuery: {
    async getContent(parent, { keyContent }) {
      return Content.findOne({
        where: { key: keyContent },
      });
    },
  },
};
