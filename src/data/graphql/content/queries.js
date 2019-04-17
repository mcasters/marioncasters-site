import { Content } from '../../models/index';

export const queries = [
  `
  getContent(label: String!): String!
`,
];

export const resolvers = {
  RootQuery: {
    async getContent(parent, { label }) {
      return Content.find({
        where: { label },
      });
    },
  },
};
