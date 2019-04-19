import { Content } from '../../models/index';

export const types = [
  `
  type Content {
    id: ID!
    label: String!
    text: String!
  }
`,
];

export const queries = [
  `
  getContent(label: String!): Content
`,
];

export const resolvers = {
  RootQuery: {
    async getContent(parent, { label }) {
      return Content.findOne({
        where: { label },
      });
    },
  },
};
