import { Painting } from '../../models/index';

export const types = [
  `
  type DatabasePainting {
    id: String
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
  getAllPaintings: [DatabasePainting]

  getPainting(
     title: String!
  ): DatabasePainting
`,
];

export const resolvers = {
  RootQuery: {
    async getAllPaintings() {
      return Painting.findAll();
    },
    async getPainting(parent, title) {
      return Painting.findOne({
        where: { title },
      });
    },
  },
};
