import { Drawing } from '../../models/index';

export const types = [
  `
  type DatabaseDrawing {
    id: ID!
    title: String
    date: String
    technique: String
    description: String
    height: Int
    width: Int
  }
`,
];

export const queries = [
  `
  getAllDrawings: [DatabaseDrawing]

  getDrawing(
     title: String!
  ): DatabaseDrawing
`,
];

export const resolvers = {
  RootQuery: {
    async getAllDrawings() {
      return Drawing.findAll();
    },

    async getDrawing(parent, title) {
      return Drawing.findOne({
        where: { title },
      });
    },
  },
};
